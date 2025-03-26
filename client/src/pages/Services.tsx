import { Link } from "wouter";
import { useEffect } from "react";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ title, description, imageUrl, features }: { 
  title: string; 
  description: string; 
  imageUrl: string;
  features: string[];
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
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
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 text-[#3B82F6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
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
    </div>
  );
};

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your specific business needs, with scalable architecture and intuitive user interfaces.",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Web Applications", "Mobile Apps (iOS & Android)", "Enterprise Solutions"]
    },
    {
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent user experiences.",
      imageUrl: "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Predictive Analytics", "Natural Language Processing", "Smart Automation"]
    },
    {
      title: "UI/UX Design",
      description: "Create beautiful, intuitive interfaces that deliver exceptional user experiences and drive engagement with your brand.",
      imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["User Research", "Interface Design", "Usability Testing"]
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive digital strategy and implementation to modernize your business operations and customer experiences.",
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Process Automation", "Legacy System Modernization", "Digital Strategy"]
    },
    {
      title: "Cloud Solutions",
      description: "Leverage the power of cloud computing for scalability, flexibility, and cost-effectiveness in your IT infrastructure.",
      imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Cloud Migration", "Serverless Architecture", "DevOps Implementation"]
    },
    {
      title: "Startup Ecosystem",
      description: "Comprehensive support for startups from idea to market, including technical guidance, development, and scaling strategies.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["MVP Development", "Investor Readiness", "Growth Strategy"]
    }
  ];

  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-3 px-3 py-1 bg-[#0D9488]/10 text-[#0D9488] rounded-full text-sm font-medium">Our Services</div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Comprehensive Digital Solutions</h1>
            <p className="text-lg text-gray-600">
              We offer a wide range of services designed to meet the diverse needs of businesses at every stage of their growth journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                features={service.features}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/contact">
              <Button className="px-6 py-3 bg-[#3B82F6] hover:bg-[#1E40AF] text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all">
                Contact Us For Custom Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default Services;
