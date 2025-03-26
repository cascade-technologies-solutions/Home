import HeroSection from "@/components/HeroSection";
import FocusAreas from "@/components/FocusAreas";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import ContactDetails from "@/components/ContactDetails";
import Newsletter from "@/components/Newsletter";
import { useEffect } from "react";

const Home = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <FocusAreas />
      <AboutSection />
      <ServicesSection />
      <CTASection />
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-3 px-3 py-1 bg-[#0D9488]/10 text-[#0D9488] rounded-full text-sm font-medium">Contact Us</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Let's Start a Conversation</h2>
            <p className="text-lg text-gray-600">
              Have a project in mind or questions about our services? We're here to help you find the perfect solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactDetails />
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default Home;
