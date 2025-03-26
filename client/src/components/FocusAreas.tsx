import { Monitor, Rocket, Bot, PaintBucket } from "lucide-react";
import { motion } from "framer-motion";

interface FocusAreaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FocusArea = ({ icon, title, description }: FocusAreaProps) => {
  return (
    <motion.div 
      className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-14 h-14 bg-[#0F172A]/5 rounded-xl flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#1E293B] mb-3">{title}</h3>
      <p className="text-gray-600">
        {description}
      </p>
    </motion.div>
  );
};

const FocusAreas = () => {
  const focusAreas = [
    {
      icon: <Monitor className="text-[#3B82F6] w-6 h-6" />,
      title: "Digital Transformation",
      description: "Helping businesses establish an online presence with websites, apps, and automation tools with seamless UI/UX experiences."
    },
    {
      icon: <Rocket className="text-[#3B82F6] w-6 h-6" />,
      title: "Startup Ecosystem",
      description: "Platforms like Startopia to connect founders with investors, mentors, and services for startup growth."
    },
    {
      icon: <Bot className="text-[#3B82F6] w-6 h-6" />,
      title: "AI & Smart Solutions",
      description: "AI-powered platforms like TextYourBoss.ai for business guidance and innovative decision-making tools."
    },
    {
      icon: <PaintBucket className="text-[#3B82F6] w-6 h-6" />,
      title: "Design & Branding",
      description: "Creative UI/UX, branding, and marketing material solutions aligned with business goals."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Our Key Focus Areas</h2>
          <p className="text-lg text-gray-600">
            We specialize in building innovative solutions across multiple domains to help businesses thrive in the digital landscape.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FocusArea
                icon={area.icon}
                title={area.title}
                description={area.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
