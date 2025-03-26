import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#60A5FA]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#14B8A6]/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Empowering Businesses Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#60A5FA]">
              Technology & Innovation
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Cascade Space builds smart digital solutions—software, apps, websites, and AI-driven platforms—to enhance productivity, efficiency, and scalability.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/contact" className="flex justify-center sm:justify-start">
              <Button className="w-full sm:w-auto px-8 py-6 bg-[#3B82F6] hover:bg-[#1E40AF] rounded-lg font-medium text-white transition-all shadow-lg hover:shadow-xl text-base h-auto">
                Get Started
              </Button>
            </Link>
            <Link href="/services" className="flex justify-center sm:justify-start">
              <Button variant="outline" className="w-full sm:w-auto px-8 py-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg font-medium text-white transition-all text-base h-auto">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </div>
        
        {/* Floating illustration */}
        <motion.div 
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-2/5"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ 
            animation: "float 3s ease-in-out infinite"
          }}
        >
          <div className="relative">
            {/* Dashboard mockup */}
            <div className="w-full h-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl overflow-hidden">
              <div className="h-6 bg-[#0F172A]/60 flex items-center px-3">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-white/10 rounded-lg"></div>
                  <div className="h-24 bg-white/10 rounded-lg"></div>
                  <div className="h-16 bg-white/10 rounded-lg"></div>
                  <div className="h-16 bg-white/10 rounded-lg"></div>
                </div>
                <div className="mt-4 h-24 bg-gradient-to-r from-[#0D9488]/30 to-[#3B82F6]/30 rounded-lg"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Wave divider */}
      <div className="w-full h-16 md:h-24">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 0L60 10C120 20 240 40 360 43.3C480 46.7 600 33.3 720 30C840 26.7 960 33.3 1080 36.7C1200 40 1320 40 1380 40L1440 40V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
