import { useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";
import Newsletter from "@/components/Newsletter";

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-3 px-3 py-1 bg-[#0D9488]/10 text-[#0D9488] rounded-full text-sm font-medium">Contact Us</div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Let's Start a Conversation</h1>
            <p className="text-lg text-gray-600">
              Have a project in mind or questions about our services? We're here to help you find the perfect solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-0">
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>
            <div className="order-1 lg:order-2">
              <ContactDetails />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to common questions about our services and processes.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">What types of businesses do you work with?</h3>
                <p className="text-gray-600">
                  We work with businesses of all sizes, from startups to enterprises, across various industries. Our solutions are tailored to meet the specific needs and challenges of each client.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">How long does a typical project take?</h3>
                <p className="text-gray-600">
                  Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while more complex applications can take several months. We provide detailed timelines during our initial consultation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">Do you offer ongoing maintenance and support?</h3>
                <p className="text-gray-600">
                  Yes, we offer various support and maintenance packages to ensure your solutions continue to run smoothly after launch. Our team can provide regular updates, security patches, and feature enhancements as needed.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">How do you handle project pricing?</h3>
                <p className="text-gray-600">
                  We offer transparent pricing based on project requirements. Depending on the nature of the project, we may use fixed-price quotes or time-and-materials billing. We'll discuss all pricing details during our consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Newsletter />
    </>
  );
};

export default Contact;
