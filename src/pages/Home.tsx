
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout";
import AnimatedBackground from "../components/animated-background";
import SectionTitle from "../components/ui/section-title";
import FeatureCard from "../components/ui/feature-card";
import { 
  Server, 
  Shield, 
  Globe, 
  Cpu, 
  CloudCog, 
  Code, 
  ArrowRight, 
  Users, 
  Award,
  Monitor,
  Smartphone,
  Laptop,
  HardDrive
} from "lucide-react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const services = [
    {
      title: "IT Consulting",
      description: "Strategic technology consulting to transform your business operations and achieve digital excellence.",
      icon: <CloudCog size={24} />,
      link: "/services#consulting",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure solutions tailored to your business requirements.",
      icon: <Server size={24} />,
      link: "/services#cloud",
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from evolving digital threats.",
      icon: <Shield size={24} />,
      link: "/services#cybersecurity",
    },
    {
      title: "Web Development",
      description: "Custom web development services that deliver exceptional user experiences and drive results.",
      icon: <Globe size={24} />,
      link: "/services#web",
    },
    {
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications that engage users and extend your digital reach.",
      icon: <Smartphone size={24} />,
      link: "/services#mobile",
    },
    {
      title: "AI & ML Solutions",
      description: "Cutting-edge artificial intelligence and machine learning solutions for data-driven decision making.",
      icon: <Cpu size={24} />,
      link: "/services#ai",
    },
  ];

  const products = [
    {
      title: "TechBloom Secure",
      description: "Enterprise-grade security solution for comprehensive protection against cyber threats.",
      icon: <Shield size={24} />,
      link: "/products#secure",
      imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      title: "CloudManager Pro",
      description: "Unified cloud management platform for seamless multi-cloud infrastructure operations.",
      icon: <Server size={24} />,
      link: "/products#cloudmanager",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    },
    {
      title: "DevFlow",
      description: "Integrated development workflow platform for accelerated software delivery.",
      icon: <Code size={24} />,
      link: "/products#devflow",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    },
    {
      title: "TechBloom Analytics",
      description: "Advanced analytics platform with AI-powered insights for data-driven business decisions.",
      icon: <Cpu size={24} />,
      link: "/products#analytics",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <AnimatedBackground />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6 text-white"
            >
              Innovate. <span className="text-gradient">Transform.</span> Succeed.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Cutting-edge IT solutions and products that drive digital transformation and business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link 
                to="/services" 
                className="bg-techblue-500 hover:bg-techblue-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(4,19,242,0.5)] flex items-center btn-glow"
              >
                Explore Services
                <ArrowRight size={18} className="ml-2" />
              </Link>
              
              <Link 
                to="/products" 
                className="bg-transparent border border-white/30 text-white hover:border-white/60 px-8 py-3 rounded-md font-medium transition-all duration-300"
              >
                View Products
              </Link>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <p className="text-gray-400 text-sm mb-2">Scroll to explore</p>
            <motion.div 
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <motion.div 
                className="w-1 h-2 bg-techblue-400 rounded-full"
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Services" 
            subtitle="What We Offer"
            center 
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FeatureCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center bg-techblue-500 hover:bg-techblue-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 btn-glow"
            >
              View All Services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Products" 
            subtitle="Cutting-Edge Solutions"
            center 
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <FeatureCard
                key={product.title}
                title={product.title}
                description={product.description}
                icon={product.icon}
                link={product.link}
                index={index}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/products" 
              className="inline-flex items-center bg-techblue-500 hover:bg-techblue-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 btn-glow"
            >
              Explore All Products
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About/Stats Section */}
      <section id="about-preview" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Why Choose Us?" 
                subtitle="Our Expertise"
                light
              />
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-400 mb-6"
              >
                With over 10 years of industry experience, TechBloom has established itself as a leader in providing innovative IT solutions and cutting-edge products. Our team of experts is dedicated to helping businesses achieve digital excellence through transformative technology.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
              >
                <div className="flex items-start">
                  <div className="text-techblue-400 mr-4">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-orbitron text-lg mb-2">Expert Team</h3>
                    <p className="text-gray-400">Industry certified professionals with deep expertise.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-techblue-400 mr-4">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-orbitron text-lg mb-2">Award Winning</h3>
                    <p className="text-gray-400">Recognized for excellence in IT solutions and innovation.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-white font-medium border-b-2 border-techblue-500 pb-1 transition-colors hover:text-techblue-300"
                >
                  Learn more about us
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { count: "10+", label: "Years Experience" },
                { count: "200+", label: "Happy Clients" },
                { count: "50+", label: "Team Members" },
                { count: "300+", label: "Projects Completed" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-lg glass-card"
                >
                  <h3 className="text-techblue-400 text-4xl font-orbitron font-bold mb-2">{stat.count}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(4,19,242,0.1)_0%,transparent_80%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-white"
            >
              Ready to Transform Your Business with Technology?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8"
            >
              Get in touch with our experts to discuss your business needs and discover how our IT solutions and products can drive your digital transformation journey.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/contact" 
                className="bg-techblue-500 hover:bg-techblue-600 text-white px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(4,19,242,0.5)] inline-block btn-glow"
              >
                Contact Us Today
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
