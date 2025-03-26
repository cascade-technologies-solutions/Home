import { Link } from "wouter";
import { useEffect } from "react";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block mb-3 px-3 py-1 bg-[#0D9488]/10 text-[#0D9488] rounded-full text-sm font-medium">About Us</div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">Our Story & Mission</h1>
            <p className="text-lg text-gray-600">
              Learn about Cascade Space's journey, mission, values, and the team driving innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Empowering Businesses Through Technology</h2>
              <p className="text-lg text-gray-700 mb-6">
                Cascade Space was founded with a clear mission: to enable businesses to grow, innovate, and scale with cost-effective, high-quality technology solutions. We are passionate about technology and its potential to transform businesses of all sizes.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our team of experts combines deep technical knowledge with business acumen to deliver solutions that not only meet technical requirements but also align with business objectives and drive growth.
              </p>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration at Cascade Space" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 -mb-6 -mr-6 w-32 h-32 bg-[#3B82F6] rounded-lg transform rotate-6 opacity-25 z-0"></div>
              <div className="absolute top-0 left-0 -mt-6 -ml-6 w-24 h-24 bg-[#0D9488] rounded-lg transform -rotate-6 opacity-25 z-0"></div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Innovation Driven</h3>
                <p className="text-gray-600">
                  We constantly explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the curve.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Scalable Solutions</h3>
                <p className="text-gray-600">
                  We build systems that grow with your business, from startup to enterprise levels, ensuring long-term value and adaptability.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Client Empowerment</h3>
                <p className="text-gray-600">
                  We transfer knowledge and capabilities to our clients, ensuring they can maintain and evolve their solutions for long-term success.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  We maintain rigorous quality standards throughout our development process, ensuring robust, secure, and reliable solutions.
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6 text-center">Our Vision for the Future</h2>
            <p className="text-lg text-gray-700 mb-6 text-center">
              We're expanding into new frontiers including renewable energy, trading platforms, robotics, and infrastructure to create global-level tech solutions with real impact.
            </p>
            
            <div className="flex justify-center mt-10">
              <Link href="/contact">
                <Button className="px-8 py-6 text-base bg-[#3B82F6] hover:bg-[#1E40AF] text-white rounded-lg shadow-md hover:shadow-lg transition-all">
                  Join Our Journey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default About;
