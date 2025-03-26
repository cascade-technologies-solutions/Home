import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  icon: React.ReactNode;
  tags: string[];
  index: number;
}

const ProjectCard = ({ title, subtitle, description, gradient, icon, tags, index }: ProjectCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="relative">
        <div className={`h-64 ${gradient} flex items-center justify-center overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-5xl font-bold opacity-10">{title}</div>
          </div>
          <div className="relative z-10 p-8 text-center">
            <div className="mx-auto w-20 h-20 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-4">
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-white/80">{subtitle}</p>
          </div>
        </div>
      </div>
      <div className="p-8">
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">{tag}</span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Link href="/projects">
            <a className="text-[#3B82F6] font-medium hover:text-[#1E40AF] inline-flex items-center">
              Explore Project
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </Link>
          <div>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#3B82F6]">
              <svg className="w-5 h-5 inline-block" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" clipRule="evenodd"/>
              </svg>
            </a>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="ml-3 text-gray-500 hover:text-[#3B82F6]">
              <svg className="w-5 h-5 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Startopia",
      subtitle: "Startup Ecosystem Platform",
      description: "Startopia connects founders with investors, mentors, and services, creating a complete ecosystem for startup growth and funding readiness.",
      gradient: "bg-gradient-to-r from-[#1E40AF] to-[#0D9488]",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      tags: ["Startup", "Investment", "Networking", "Mentorship"]
    },
    {
      title: "TextYourBoss.ai",
      subtitle: "AI Business Guidance Platform",
      description: "An AI-powered platform that provides business guidance and decision-making support, allowing entrepreneurs to get expert advice instantly.",
      gradient: "bg-gradient-to-r from-[#0D9488] to-[#1E40AF]",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      tags: ["AI", "Business", "Automation", "Advisory"]
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-3 px-3 py-1 bg-[#0D9488]/10 text-[#0D9488] rounded-full text-sm font-medium">Featured Projects</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">Our Innovative Solutions</h2>
          <p className="text-lg text-gray-600">
            Explore our flagship projects that demonstrate our ability to deliver transformative digital experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              gradient={project.gradient}
              icon={project.icon}
              tags={project.tags}
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
          <Link href="/projects">
            <Button variant="outline" className="px-6 py-3 text-[#3B82F6] bg-white border-[#3B82F6] hover:bg-[#3B82F6]/5 rounded-md shadow-md hover:shadow-lg transition-all">
              View All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
