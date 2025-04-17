
import React from "react";
import Layout from "../components/layout";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white"
            >
              Contact <span className="text-gradient">Us</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Get in touch with our team to discuss your business needs
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-orbitron font-bold text-white mb-6">Coming Soon</h2>
            <p className="text-gray-400">Our Contact page is under construction. For inquiries, please check back soon.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
