import React from 'react';
import { motion } from 'framer-motion';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageReveal: React.FC<ImageRevealProps> = ({ src, alt, className = '' }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-techblue-600/30 to-transparent z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default ImageReveal;