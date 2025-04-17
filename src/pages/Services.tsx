
import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout";
import SectionTitle from "../components/ui/section-title";
import { 
  Server, 
  Shield, 
  Globe, 
  Cpu, 
  CloudCog, 
  Code, 
  ArrowRight, 
  CheckCircle,
  Smartphone,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  const services = [
    {
      id: "consulting",
      title: "IT Consulting",
      description: "Strategic technology consulting to transform your business operations and achieve digital excellence.",
      icon: <CloudCog size={32} />,
      features: [
        "Digital transformation strategy",
        "IT infrastructure assessment",
        "Technology roadmap development",
        "IT governance and compliance",
        "Enterprise architecture planning",
        "IT cost optimization"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "cloud",
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure solutions tailored to your business requirements.",
      icon: <Server size={32} />,
      features: [
        "Cloud migration and deployment",
        "Multi-cloud management",
        "Hybrid cloud solutions",
        "Cloud security and compliance",
        "Disaster recovery and backup",
        "Cloud cost optimization"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from evolving digital threats.",
      icon: <Shield size={32} />,
      features: [
        "Security audit and assessment",
        "Threat detection and prevention",
        "Endpoint and network security",
        "Security awareness training",
        "Incident response planning",
        "Compliance management"
      ],
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "web",
      title: "Web Development",
      description: "Custom web development services that deliver exceptional user experiences and drive results.",
      icon: <Globe size={32} />,
      features: [
        "Custom website development",
        "Progressive web applications",
        "E-commerce solutions",
        "Content management systems",
        "Web portal development",
        "UI/UX design and optimization"
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: "mobile",
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications that engage users and extend your digital reach.",
      icon: <Smartphone size={32} />,
      features: [
        "iOS and Android development",
        "Cross-platform applications",
        "Mobile app UX/UI design",
        "Mobile application testing",
        "App store optimization",
        "App maintenance and support"
      ],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
    },
    {
      id: "ai",
      title: "AI & ML Solutions",
      description: "Cutting-edge artificial intelligence and machine learning solutions for data-driven decision making.",
      icon: <Cpu size={32} />,
      features: [
        "AI strategy and implementation",
        "Machine learning models",
        "Predictive analytics",
        "Computer vision solutions",
        "Natural language processing",
        "Intelligent automation"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(4,19,242,0.15)_0%,transparent_60%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white"
            >
              Our <span className="text-gradient">Services</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Comprehensive IT solutions tailored to meet your business challenges and drive digital transformation
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                id={service.id} 
                key={service.id} 
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
                      src={service.image} 
                      alt={service.title}
                      className="rounded-lg w-full h-auto object-cover relative z-10 shadow-xl"
                      style={{ maxHeight: '400px' }}
                    />
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
                    {service.icon}
                  </div>
                  
                  <h2 className="text-3xl font-orbitron font-bold mb-4 text-white">
                    {service.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-8">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle className="text-techblue-400 mr-3 flex-shrink-0 mt-1" size={18} />
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center bg-techblue-500 hover:bg-techblue-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 btn-glow"
                  >
                    Get Started
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Approach" 
            subtitle="How We Work"
            center
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We begin by understanding your business goals, challenges, and requirements.",
                icon: <MessageSquare size={24} />,
              },
              {
                step: "02",
                title: "Strategy",
                description: "Our experts develop a tailored technology strategy aligned with your objectives.",
                icon: <Code size={24} />,
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute the plan with precision, leveraging cutting-edge technologies.",
                icon: <Server size={24} />,
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous improvement and optimization to maximize ROI and performance.",
                icon: <Cpu size={24} />,
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step indicator */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-techblue-500/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-techblue-500 flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  
                  {/* Connector line */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-techblue-500 to-transparent transform -translate-y-1/2"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-orbitron font-bold mb-3 text-white">
                  {step.title}
                </h3>
                
                <p className="text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black relative overflow-hidden">
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
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8"
            >
              Let's discuss how our services can help you achieve your business goals and drive digital innovation.
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
                Contact Us
              </Link>
              
              <Link 
                to="/products" 
                className="bg-transparent border border-white/30 text-white hover:border-white/60 px-8 py-4 rounded-md font-medium text-lg transition-all duration-300"
              >
                Explore Products
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
