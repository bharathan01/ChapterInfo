import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  delay?: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  icon, 
  title, 
  children,
  delay = 0
}) => {
  return (
    <motion.div 
      className="bg-gray-900 rounded-xl p-8 border border-gray-800 hover:border-techblue-500 transition-all duration-300 hover:shadow-lg hover:shadow-techblue-500/20 h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
    >
      <div className="flex items-center mb-6">
        <motion.div 
          className="p-3 rounded-full bg-techblue-500/10 mr-4"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, duration: 0.5 }}
          whileHover={{ 
            scale: 1.1, 
            backgroundColor: "rgba(0, 115, 255, 0.2)",
            transition: { duration: 0.3 }
          }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 flex-grow">{children}</p>
    </motion.div>
  );
};

export default AnimatedCard;