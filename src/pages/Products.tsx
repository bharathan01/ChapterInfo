
import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout";
import SectionTitle from "../components/ui/section-title";
import { 
  Server, 
  Shield, 
  Globe, 
  Cpu, 
  Code, 
  ArrowRight, 
  CheckCircle,
  Monitor,
  Smartphone,
  Laptop,
  HardDrive,
  Download,
  PieChart,
  Megaphone
} from "lucide-react";
import { Link } from "react-router-dom";

const Products: React.FC = () => {
  const products = [
    {
      id: "digital-marketing",
      title: "CHAPTERINFO Digital Marketing",
      description: "End-to-end digital marketing solutions to grow your brand and maximize your online reach.",
      category: "Digital Marketing",
      icon: <Megaphone size={32} />, 
      features: [
        "SEO optimization and content strategy",
        "Social media marketing and management",
        "Paid advertising (Google Ads, Meta Ads)",
        "Email marketing campaigns",
        "Analytics and performance tracking",
        "Brand reputation management"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" // Replaced with a better marketing-related image
    },

    {
      id: "cloudmanager",
      title: "CloudManager Pro",
      description: "Unified cloud management platform for seamless multi-cloud infrastructure operations.",
      category: "Cloud Solutions",
      icon: <Server size={32} />,
      features: [
        "Multi-cloud infrastructure management",
        "Automated resource provisioning",
        "Cost optimization and analytics",
        "Security and compliance monitoring",
        "Performance analytics dashboard",
        "Disaster recovery automation"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
    },
    {
      id: "devflow",
      title: "DevFlow",
      description: "Integrated development workflow platform for accelerated software delivery.",
      category: "Development Tools",
      icon: <Code size={32} />,
      features: [
        "CI/CD pipeline automation",
        "Code quality analysis",
        "Collaboration and issue tracking",
        "Infrastructure as code integration",
        "Automated testing framework",
        "Release management and deployment"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
    },
    {
      id: "analytics",
      title: "CHAPTERINFO Analytics",
      description: "Advanced analytics platform with AI-powered insights for data-driven business decisions.",
      category: "Business Intelligence",
      icon: <PieChart size={32} />,
      features: [
        "Real-time data visualization",
        "Predictive analytics and forecasting",
        "Machine learning model integration",
        "Natural language query processing",
        "Automated reporting and alerts",
        "Data integration and ETL capabilities"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "workspace",
      title: "Smart Workspace",
      description: "Intelligent digital workspace solution for enhanced productivity and collaboration.",
      category: "Productivity",
      icon: <Monitor size={32} />,
      features: [
        "Unified communications platform",
        "Smart document management",
        "AI-powered workflow automation",
        "Team collaboration tools",
        "Integration with 100+ business apps",
        "Analytics and productivity insights"
      ],
      image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
    },
    {
      id: "iotplatform",
      title: "IoTConnect",
      description: "End-to-end IoT platform for device management, data collection, and intelligent automation.",
      category: "IoT Solutions",
      icon: <Cpu size={32} />,
      features: [
        "Device management and provisioning",
        "Real-time data collection and analysis",
        "Edge computing capabilities",
        "IoT security and monitoring",
        "Visual workflow designer",
        "Industry-specific solution templates"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const hardwareProducts = [
    {
      title: "CHAPTERINFO Server Series",
      description: "High-performance servers designed for enterprise-grade computing needs.",
      icon: <Server size={24} />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "SecureEdge Gateway",
      description: "Secure edge computing device for IoT deployments and remote locations.",
      icon: <HardDrive size={24} />,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "TechPro Workstation",
      description: "Professional-grade workstations for design, engineering, and development teams.",
      icon: <Monitor size={24} />,
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1442&q=80"
    },
    {
      title: "BloomBook Pro",
      description: "Enterprise laptop with advanced security features and performance optimization.",
      icon: <Laptop size={24} />,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(4,19,242,0.15)_0%,transparent_60%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white"
            >
              Our <span className="text-gradient">Products</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Cutting-edge technology solutions designed to empower businesses in the digital era
            </motion.p>
          </div>
        </div>
      </section>

      {/* Software Products */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Software Solutions" 
            subtitle="Enterprise Software"
            light
          />
          
          <div className="space-y-32 mt-16">
            {products.map((product, index) => (
              <div 
                id={product.id} 
                key={product.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-techblue-600/20 to-techblue-400/20 rounded-xl blur-xl opacity-70"></div>
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="rounded-lg w-full h-auto object-cover relative z-10 shadow-xl"
                      style={{ maxHeight: '400px' }}
                    />
                    <div className="absolute top-4 right-4 z-20 bg-techblue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {product.category}
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="inline-block p-3 bg-techblue-500/10 rounded-lg text-techblue-400 mb-6">
                    {product.icon}
                  </div>
                  
                  <h2 className="text-3xl font-orbitron font-bold mb-4 text-white">
                    {product.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-8">
                    {product.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="text-techblue-400 mr-3 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="#"
                      className="inline-flex items-center bg-techblue-500 hover:bg-techblue-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 btn-glow"
                    >
                      Request Demo
                      <ArrowRight size={18} className="ml-2" />
                    </a>
                    
                    <a 
                      href="#"
                      className="inline-flex items-center bg-transparent border border-white/30 text-white hover:border-white/60 px-6 py-3 rounded-md font-medium transition-all duration-300"
                    >
                      Download Brochure
                      <Download size={18} className="ml-2" />
                    </a>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Products */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Hardware Solutions" 
            subtitle="Enterprise Hardware"
            center
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {hardwareProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden rounded-lg group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-techblue-500/10 rounded-lg text-techblue-400 mr-3">
                      {product.icon}
                    </div>
                    <h3 className="text-xl font-orbitron font-bold text-white">
                      {product.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6">
                    {product.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href="#"
                      className="text-techblue-400 hover:text-techblue-300 font-medium transition-colors flex items-center"
                    >
                      View Specifications
                      <ArrowRight size={16} className="ml-1" />
                    </a>
                    
                    <span className="text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
                      Enterprise Grade
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(4,19,242,0.1)_0%,transparent_80%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Trusted by Industry Leaders" 
            subtitle="Testimonials"
            center
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                quote: "CHAPTERINFO's CloudManager Pro has completely transformed our IT operations, providing unprecedented visibility and control across our multi-cloud environment.",
                author: "Sarah Johnson",
                position: "CTO, Global Enterprises",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              },
              {
                quote: "The security capabilities provided by CHAPTERINFO Secure have enabled us to stay ahead of emerging threats and maintain the highest standards of data protection.",
                author: "Michael Chen",
                position: "CISO, FinTech Solutions",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              },
              {
                quote: "DevFlow has accelerated our development cycles by 40%, enabling our team to deliver high-quality software faster than ever before.",
                author: "Emily Rodriguez",
                position: "VP of Engineering, Tech Innovations",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-lg"
              >
                <div className="mb-6">
                  {/* Quote marks */}
                  <svg className="w-10 h-10 text-techblue-500/40" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8v12H6v-4c0-2.21 1.79-4 4-4V8H10zm12 0v4c2.21 0 4 1.79 4 4v4h-4V8h-4z" />
                  </svg>
                </div>
                
                <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-white font-medium">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(4,19,242,0.1)_0%,transparent_80%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-white"
            >
              Ready to Experience Our Products?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8"
            >
              Schedule a personalized demonstration to see how our products can transform your business.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link 
                to="/contact" 
                className="bg-techblue-500 hover:bg-techblue-600 text-white px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(4,19,242,0.5)] btn-glow"
              >
                Request Demo
              </Link>
              
              <a 
                href="#"
                className="bg-transparent border border-white/30 text-white hover:border-white/60 px-8 py-4 rounded-md font-medium text-lg transition-all duration-300"
              >
                Download Catalog
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
