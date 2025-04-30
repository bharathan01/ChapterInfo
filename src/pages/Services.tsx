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
  MessageSquare,
  Megaphone,
  Gamepad,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  const services = [
    {
      id: "consulting",
      title: "IT Consulting",
      description: `Strategic technology consulting designed to help businesses navigate the complexities of digital transformation and achieve operational excellence.  
   Our experts partner with you to align your IT infrastructure with business goals, ensuring scalable and cost-effective solutions.  
   We provide comprehensive assessments, roadmap development, and technology integration strategies that optimize performance and reduce risks.  
   By fostering innovation and empowering your team with the right tools, we enable you to drive efficiency, streamline processes, and enhance overall productivity.  
   Our IT consulting services ensure that your technology investments deliver tangible results and long-term business growth.`,
      icon: <CloudCog size={32} />,
      features: [
        "Digital transformation strategy",
        "IT infrastructure assessment",
        "Technology roadmap development",
        "IT governance and compliance",
        "Enterprise architecture planning",
        "IT cost optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: `Our digital marketing solutions are designed to position your brand for success in an ever-evolving digital world.
By leveraging the latest technologies and customer behavior insights, we create impactful marketing strategies that build stronger brand connections, drive customer acquisition, and deliver long-term business value.

We focus on crafting personalized customer journeys, enhancing brand storytelling, and optimizing every touchpoint to ensure maximum engagement and conversion.
Through continuous performance monitoring and agile marketing approaches, we adapt to market trends swiftly, keeping your brand ahead of the competition.

Partner with us to unlock your brand’s full potential, amplify your market influence, and achieve sustainable digital growth.`,
      icon: <Megaphone size={32} />,
      features: [
        "SEO and content marketing",
        "Social media strategy and management",
        "Google Ads and PPC campaigns",
        "Email marketing and automation",
        "Influencer marketing collaboration",
        "Analytics and campaign optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", // New Unsplash image more related to marketing
    },
    {
      id: "web",
      title: "Web Development",
      description: `Custom web development services that deliver seamless and engaging user experiences across all digital platforms.  
   Our team of developers specializes in creating responsive, high-performance websites and applications tailored to meet your business needs and goals.  
   We focus on intuitive design, robust functionality, and user-centric experiences to ensure that your digital presence stands out in a crowded online market.  
   Whether you’re building an e-commerce platform, a content management system, or a custom web application, we offer scalable solutions that grow with your business.  
   From strategy and design to development and ongoing support, we ensure that your website delivers measurable results and enhances your brand’s digital footprint.`,
      icon: <Globe size={32} />,
      features: [
        "Custom website development",
        "Progressive web applications",
        "E-commerce solutions",
        "Content management systems",
        "Web portal development",
        "UI/UX design and optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "mobile",
      title: "Mobile Solutions",
      description: `"Native and cross-platform mobile applications designed to engage users and elevate your digital presence across mobile devices.  
   We build innovative, user-friendly mobile apps for both iOS and Android that provide exceptional performance and seamless functionality.  
   Our mobile solutions are tailored to meet the needs of modern consumers, ensuring your app stands out with a stunning interface, intuitive navigation, and robust features.  
   From mobile strategy and UX/UI design to development and app store optimization, we provide end-to-end services that drive customer satisfaction and brand loyalty.  
   Whether it’s for enterprise or consumer-facing solutions, we create mobile apps that empower businesses to engage their audience and drive meaningful results.`,
      icon: <Smartphone size={32} />,
      features: [
        "iOS and Android development",
        "Cross-platform applications",
        "Mobile app UX/UI design",
        "Mobile application testing",
        "App store optimization",
        "App maintenance and support",
      ],
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
    },
    {
      id: "ai",
      title: "AI & ML Solutions",
      description: `CAI and machine learning solutions that empower your business with data-driven insights, enabling smarter decisions and operational efficiency.  
   We develop custom AI strategies and build intelligent systems that automate processes, predict trends, and deliver actionable insights.  
   Our machine learning models help you uncover hidden patterns in your data, optimize business operations, and enhance customer experiences through personalized recommendations.  
   From natural language processing (NLP) to computer vision and predictive analytics, we integrate cutting-edge AI technologies that drive innovation and foster competitive advantage.  
   Our AI solutions enable businesses to unlock new opportunities, improve decision-making, and streamline workflows, leading to measurable business outcomes.`,
      icon: <Cpu size={32} />,
      features: [
        "AI strategy and implementation",
        "Machine learning models",
        "Predictive analytics",
        "Computer vision solutions",
        "Natural language processing",
        "Intelligent automation",
      ],
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "unity-game-dev",
      title: "Unity Game Development",
      description: `Our Unity game development services offer a comprehensive solution to bring your interactive and immersive games to life.  
         Whether you're developing a mobile game, a 3D adventure, or an Augmented Reality (AR) experience, we tailor our development process to meet your unique requirements.  
         With Unity’s powerful engine, we build games that are engaging, cross-platform, and optimized for performance.  
         Our team specializes in 2D and 3D game design, multiplayer integrations, and real-time interactivity to deliver an unforgettable gaming experience.  
         From concept to deployment, we ensure that every game we develop delivers exceptional user engagement and plays seamlessly across various devices.`,
      icon: <Gamepad size={32} />,
      features: [
        "Custom game design and development",
        "Cross-platform compatibility (PC, Console, Mobile)",
        "3D/2D game development",
        "Multiplayer integration and networking",
        "Augmented Reality (AR) and Virtual Reality (VR) game development",
        "Game testing, optimization, and performance tuning",
      ],
      image: "game-console-6603120_1280.jpg",
    },
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
              Comprehensive IT solutions tailored to meet your business
              challenges and drive digital transformation
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
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`order-2 ${
                    index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-techblue-600/20 to-techblue-400/20 rounded-xl blur-xl opacity-70"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg w-full h-auto object-cover relative z-10 shadow-xl"
                      style={{ maxHeight: "400px" }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`order-1 ${
                    index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="inline-block p-3 bg-techblue-500/10 rounded-lg text-techblue-400 mb-6">
                    {service.icon}
                  </div>

                  <h2 className="text-3xl font-orbitron font-bold mb-4 text-white">
                    {service.title}
                  </h2>

                  <p className="text-gray-300 mb-8">{service.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <CheckCircle
                          className="text-techblue-400 mr-3 flex-shrink-0 mt-1"
                          size={18}
                        />
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
                description:
                  "We begin by understanding your business goals, challenges, and requirements.",
                icon: <MessageSquare size={24} className="text-techblue-500" />,
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Our experts develop a tailored technology strategy aligned with your objectives.",
                icon: <Code size={24} className="text-techblue-500" />,
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "We execute the plan with precision, leveraging cutting-edge technologies.",
                icon: <Server size={24} className="text-techblue-500" />,
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "Continuous improvement and optimization to maximize ROI and performance.",
                icon: <Cpu size={24} className="text-techblue-500" />,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left h-full">
                  <div className="relative mb-6 w-full flex justify-center lg:justify-start">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-techblue-500/10 flex items-center justify-center mx-auto lg:mx-0 z-10">
                        {step.icon}
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-techblue-500 flex items-center justify-center text-white font-bold z-20">
                        {step.step}
                      </div>
                    </div>
                    {index < 3 && (
                      <div className="hidden lg:block absolute left-[calc(100%-16rem)] top-1/2 w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-techblue-500 to-techblue-500/10 transform -translate-y-1/2"></div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>

                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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
              Let's discuss how our services can help you achieve your business
              goals and drive digital innovation.
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

              {/* <Link
                to="/products"
                className="bg-transparent border border-white/30 text-white hover:border-white/60 px-8 py-4 rounded-md font-medium text-lg transition-all duration-300"
              >
                Explore Products
              </Link> */}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
