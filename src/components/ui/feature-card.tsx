
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
      className="h-full"
    >
      <div className="relative h-full rounded-xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:shadow-[0_8px_32px_0_rgba(4,19,242,0.2)] transition-all duration-500">
        {/* Background image if provided */}
        {imageUrl && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        )}
        
        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Icon */}
          <div className="mb-4 text-techblue-500 p-3 bg-techblue-500/10 inline-block rounded-xl backdrop-blur-md">
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
          <Link
            to={link}
            className="inline-flex items-center text-techblue-400 hover:text-techblue-300 font-medium transition-colors group"
          >
            Learn More
            <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
