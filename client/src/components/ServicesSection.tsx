import { Link } from "wouter";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ServiceCardProps {
  imageUrl: string;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const ServiceCard = ({ imageUrl, title, description, features, index }: ServiceCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="h-48 bg-[#1E293B] relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-600">
              <Check className="w-4 h-4 text-[#3B82F6] mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <Link href="/contact">
          <a className="inline-flex items-center text-[#3B82F6] font-medium hover:text-[#1E40AF]">
            Request a quote
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Software Development",
      description: "Custom software solutions tailored to your specific business needs, with scalable architecture and intuitive user interfaces.",
      features: ["Web Applications", "Mobile Apps (iOS & Android)", "Enterprise Solutions"]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent user experiences.",
      features: ["Predictive Analytics", "Natural Language Processing", "Smart Automation"]
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "UI/UX Design",
      description: "Create beautiful, intuitive interfaces that deliver exceptional user experiences and drive engagement with your brand.",
      features: ["User Research", "Interface Design", "Usability Testing"]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-3 px-3 py-1 bg-[#0D9488]/10 text-[#0D9488] rounded-full text-sm font-medium">Our Services</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Comprehensive Digital Solutions</h2>
          <p className="text-lg text-gray-600">
            We offer a wide range of services designed to meet the diverse needs of businesses at every stage of their growth journey.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              imageUrl={service.imageUrl}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex justify-center">
            <Link href="/services" className="w-full sm:w-auto flex justify-center">
              <Button className="w-full sm:w-auto px-6 py-3 text-white bg-[#3B82F6] hover:bg-[#1E40AF] rounded-md shadow-md hover:shadow-lg transition-all">
                View All Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
