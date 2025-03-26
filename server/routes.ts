import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import nodemailer from "nodemailer";

// Configure test email transporter (for development purposes)
const emailTransporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || "ethereal.user@ethereal.email",
    pass: process.env.EMAIL_PASS || "ethereal_pass",
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against schema
      const contactData = insertContactSchema.parse({
        name: req.body.name,
        email: req.body.email,
        company: req.body.company,
        subject: req.body.subject,
        message: req.body.message,
      });

      // Store contact submission
      const contact = await storage.createContact(contactData);

      // Send notification email
      try {
        await emailTransporter.sendMail({
          from: '"Cascade Space" <no-reply@cascade.space>',
          to: "admin@cascade.space",
          subject: `New Contact Form Submission: ${contactData.subject}`,
          text: `
            Name: ${contactData.name}
            Email: ${contactData.email}
            Company: ${contactData.company}
            Subject: ${contactData.subject}
            
            Message:
            ${contactData.message}
          `,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> ${contactData.email}</p>
            <p><strong>Company:</strong> ${contactData.company}</p>
            <p><strong>Subject:</strong> ${contactData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${contactData.message.replace(/\n/g, '<br>')}</p>
          `,
        });
      } catch (emailError) {
        console.error("Failed to send notification email:", emailError);
        // Continue with the response even if email fails
      }

      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ error: "Failed to process your request" });
      }
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      // Validate request body against schema
      const newsletterData = insertNewsletterSchema.parse({
        email: req.body.email,
      });

      try {
        // Store newsletter subscription
        const newsletter = await storage.createNewsletter(newsletterData);

        // Send confirmation email
        try {
          await emailTransporter.sendMail({
            from: '"Cascade Space" <no-reply@cascade.space>',
            to: newsletterData.email,
            subject: "Welcome to Cascade Space Newsletter",
            text: `
              Thank you for subscribing to the Cascade Space newsletter!
              
              You'll now receive regular updates about our services, projects, and tech insights.
              
              If you didn't subscribe, please contact us at info@cascade.space.
              
              Best regards,
              The Cascade Space Team
            `,
            html: `
              <h2>Welcome to the Cascade Space Newsletter!</h2>
              <p>Thank you for subscribing to our newsletter!</p>
              <p>You'll now receive regular updates about our services, projects, and tech insights.</p>
              <p>If you didn't subscribe, please contact us at <a href="mailto:info@cascade.space">info@cascade.space</a>.</p>
              <p>Best regards,<br>The Cascade Space Team</p>
            `,
          });
        } catch (emailError) {
          console.error("Failed to send confirmation email:", emailError);
          // Continue with the response even if email fails
        }

        res.status(201).json({ 
          success: true, 
          message: "Newsletter subscription successful" 
        });
      } catch (storageError) {
        // Handle duplicate email scenario
        if (storageError.message.includes("duplicate")) {
          res.status(409).json({ 
            error: "This email is already subscribed to our newsletter" 
          });
        } else {
          throw storageError;
        }
      }
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        console.error("Error processing newsletter subscription:", error);
        res.status(500).json({ error: "Failed to process your request" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
