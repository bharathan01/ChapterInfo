
import React from "react";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  light = false,
}) => {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-sm font-medium uppercase tracking-wider mb-2 ${
            light ? "text-techblue-300" : "text-techblue-500"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className={`text-3xl md:text-4xl font-orbitron font-bold relative inline-block ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
        <span className="absolute -bottom-2 left-0 h-1 w-12 bg-techblue-500"></span>
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
