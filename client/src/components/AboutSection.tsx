import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-5 px-3 py-1 bg-[#0D9488]/10 text-[#0D9488] rounded-full text-sm font-medium">About Cascade Space</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">We simplify complex challenges through technology</h2>
            <p className="text-lg text-gray-700 mb-6">
              Cascade Space's core mission is to enable businesses to grow, innovate, and scale with cost-effective, high-quality solutions. We are passionate about technology and its potential to transform businesses.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-[#1E293B]">Innovation Driven</h4>
                  <p className="text-gray-600">Constantly exploring new technologies and methodologies to deliver cutting-edge solutions.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-[#1E293B]">Scalable Solutions</h4>
                  <p className="text-gray-600">Building systems that grow with your business, from startup to enterprise levels.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-[#3B82F6]" />
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-medium text-[#1E293B]">Client Empowerment</h4>
                  <p className="text-gray-600">Transferring knowledge and capabilities to clients for long-term success.</p>
                </div>
              </div>
            </div>
            <Link href="/about">
              <div className="inline-flex items-center text-[#3B82F6] font-medium hover:text-[#1E40AF] cursor-pointer">
                Learn more about our vision
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </Link>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration at Cascade Space" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 -mb-6 -mr-6 w-32 h-32 bg-[#3B82F6] rounded-lg transform rotate-6 opacity-25 z-0"></div>
            <div className="absolute top-0 left-0 -mt-6 -ml-6 w-24 h-24 bg-[#0D9488] rounded-lg transform -rotate-6 opacity-25 z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
