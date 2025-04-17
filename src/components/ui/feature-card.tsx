
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  index?: number;
  imageUrl?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  link,
  index = 0,
  imageUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group animated-border h-full"
    >
      <div className="animated-border-content h-full glass-card p-6 flex flex-col">
        {/* Background image if provided */}
        {imageUrl && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 rounded-lg"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        )}
        
        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-4 text-techblue-500 p-3 bg-techblue-500/10 inline-block rounded-xl">
            {icon}
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-orbitron font-bold mb-2 text-white group-hover:text-techblue-300 transition-colors">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-400 mb-4">
            {description}
          </p>
          
          {/* Link */}
          <div className="mt-auto">
            <Link
              to={link}
              className="inline-flex items-center text-techblue-400 hover:text-techblue-300 font-medium transition-colors group/link"
            >
              Learn More
              <ChevronRight size={16} className="ml-1 transform group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
