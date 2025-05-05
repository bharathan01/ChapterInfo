import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout";
import AnimatedBackground from "../components/animated-background";
import SectionTitle from "../components/ui/section-title";
import FeatureCard from "../components/ui/feature-card";
import {
  Eye,
  Gamepad,
  Handshake,
  Heart,
  LineChart,
  Rocket,
  Target,
  Zap,
} from "lucide-react";
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
  HardDrive,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCard from "@/components/ui/AnimatedCard";
import ImageReveal from "@/components/ui/ImageReveal";

const Home: React.FC = () => {
  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');

      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute("href");
        if (targetId && targetId.startsWith("#")) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  const services = [
    {
      title: "IT Consulting",
      description:
        "Strategic technology consulting to transform your business operations and achieve digital excellence.",
      icon: <CloudCog size={24} />,
      link: "/services#consulting",
    },
    {
      title: "Game Development",
      description:
        "We bring your ideas to life with cutting-edge game development services.",
      icon: <Gamepad size={24} />,
      link: "/services#game-development",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic marketing solutions to boost your brand's online presence and drive engagement.",
      icon: <Shield size={24} />,
      link: "/services#digital-marketing",
    },
    {
      title: "Web Development",
      description:
        "Custom web development services that deliver exceptional user experiences and drive results.",
      icon: <Globe size={24} />,
      link: "/services#web",
    },
    {
      title: "Mobile Solutions",
      description:
        "Native and cross-platform mobile applications that engage users and extend your digital reach.",
      icon: <Smartphone size={24} />,
      link: "/services#mobile",
    },
    {
      title: "AI & ML Solutions",
      description:
        "Cutting-edge artificial intelligence and machine learning solutions for data-driven decision making.",
      icon: <Cpu size={24} />,
      link: "/services#ai",
    },
  ];

  // const products = [
  //   {
  //     title: "CHAPTERINFO Secure",
  //     description:
  //       "Enterprise-grade security solution for comprehensive protection against cyber threats.",
  //     icon: <Shield size={24} />,
  //     link: "/products#secure",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //   },
  //   {
  //     title: "CloudManager Pro",
  //     description:
  //       "Unified cloud management platform for seamless multi-cloud infrastructure operations.",
  //     icon: <Server size={24} />,
  //     link: "/products#cloudmanager",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
  //   },
  //   {
  //     title: "DevFlow",
  //     description:
  //       "Integrated development workflow platform for accelerated software delivery.",
  //     icon: <Code size={24} />,
  //     link: "/products#devflow",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  //   },
  //   {
  //     title: "CHAPTERINFO Analytics",
  //     description:
  //       "Advanced analytics platform with AI-powered insights for data-driven business decisions.",
  //     icon: <Cpu size={24} />,
  //     link: "/products#analytics",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //   },
  // ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden ">
        <AnimatedBackground />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6 text-white"
            >
              Innovate. <span className="text-gradient">Transform.</span>{" "}
              Succeed.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Cutting-edge IT solutions and products that drive digital
              transformation and business growth.
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

              {/* <Link 
                to="/products" 
                className="bg-transparent border border-white/30 text-white hover:border-white/60 px-8 py-3 rounded-md font-medium transition-all duration-300"
              >
                View Products
              </Link> */}
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
      {/* <section id="products" className="py-20 bg-black">
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
      </section> */}
      <section className={`py-20 bg-black relative overflow-hidden`}>
        {/* Background effect */}
        <motion.div
          className="absolute inset-0 opacity-30 z-0"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Our Vision & Mission"
            subtitle="Guiding Principles"
            center
            light
          />

          {/* Vision Section - Left text, Right image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-24">
            <div className="space-y-6">
              <AnimatedCard
                icon={<Eye size={24} className="text-techblue-500" />}
                title="Our Vision"
                delay={0.2}
              >
                <p className="text-sm leading-relaxed">
                  Our vision is to become a global leader in technology and
                  innovation, building a company that stands at the forefront of
                  scientific and technological advancement. We aspire to create
                  an environment where breakthrough ideas are nurtured and
                  transformed into impactful solutions that solve real-world
                  problems. Scientific research will be a cornerstone of our
                  innovation strategy, enabling us to push boundaries and
                  explore uncharted possibilities. By combining deep technical
                  expertise, a passion for discovery, and a commitment to
                  excellence, we aim to deliver solutions that transform
                  industries and improve lives. We envision a future where our
                  products and services become indispensable tools that drive
                  positive change across the globe. Through relentless
                  innovation, research-driven development, and a customer-first
                  mindset, we seek to continuously evolve and stay ahead of
                  emerging trends. Our goal is to cultivate a culture of
                  creativity, collaboration, and continuous learning within our
                  organization. We are determined to build an ecosystem where
                  technology is used responsibly, ethically, and inclusively for
                  the greater good. Ultimately, we aspire to be recognized
                  alongside the world's most admired technology companies,
                  setting new standards of excellence and impact. Our journey is
                  fueled by curiosity, purpose, and a steadfast belief in the
                  power of science and technology to shape a better future.
                </p>
              </AnimatedCard>
            </div>

            <motion.div
              className="relative h-[400px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ImageReveal
                src="https://i.postimg.cc/zvhs0W9g/medium-shot-smiley-business-woman.jpg"
                alt="Team collaborating on innovative solutions"
                className="rounded-xl h-full w-full object-cover"
              />
              <motion.div
                className="absolute -bottom-6 -left-6 bg-gray-900 p-5 rounded-lg border border-gray-800 shadow-xl w-72"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-techblue-500/10 rounded-full">
                    <Rocket size={18} className="text-techblue-500" />
                  </div>
                  <h4 className="text-white font-semibold text-sm">
                    Future Forward
                  </h4>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Pioneering tomorrow's solutions with cutting-edge innovation
                  and unwavering commitment to excellence.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Mission Section - Left image, Right text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-24">
            <motion.div
              className="relative h-[400px] order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ImageReveal
                src="https://i.postimg.cc/MTgTn77M/digital-graph-with-businessman-hand-overlay.jpg"
                alt="Team working together"
                className="rounded-xl h-full w-full object-cover"
              />
              <motion.div
                className="absolute -bottom-6 -right-6 bg-gray-900 p-5 rounded-lg border border-gray-800 shadow-xl w-72"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-techblue-500/10 rounded-full">
                    <Users size={18} className="text-techblue-500" />
                  </div>
                  <h4 className="text-white font-semibold text-sm">
                    People First
                  </h4>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Building strong relationships and fostering collaboration to
                  create meaningful impact together.
                </p>
              </motion.div>
            </motion.div>

            <div className="space-y-6 order-1 lg:order-2">
              <AnimatedCard
                icon={<Target size={24} className="text-techblue-500" />}
                title="Our Mission"
                delay={0.4}
              >
                <p className="text-sm leading-relaxed">
                  Our mission is to deliver exceptional IT services and
                  solutions that drive measurable success for our clients. With
                  a team of experienced and passionate experts, we provide
                  end-to-end technology consulting, development, and support
                  tailored to each business need. We are deeply committed to
                  quality, innovation, and customer satisfaction, ensuring that
                  every solution we deliver is scalable, secure, and
                  future-ready. Alongside our IT services, we are actively
                  working on developing innovative products that address
                  real-world challenges across various industries. By
                  integrating scientific methodologies, user-centered design,
                  and emerging technologies, we create products and services
                  that deliver true business value. Our approach focuses on
                  continuous learning, collaboration, and adaptability to stay
                  ahead in a rapidly changing digital landscape. We strive to
                  empower organizations to harness the full potential of
                  technology for operational efficiency and growth. Building
                  strong, lasting partnerships with our clients is at the heart
                  of everything we do. We believe that technology should
                  simplify lives, fuel creativity, and open new possibilities
                  for businesses and communities. Through our mission, we aim to
                  shape a better tomorrow one innovation at a time.
                </p>
              </AnimatedCard>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-12 max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">
                Our Core Values
              </h3>
              <p className="text-gray-400 text-sm max-w-lg mx-auto">
                Guided by strong principles, we strive to deliver exceptional
                value while maintaining the highest standards of excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedCard
                icon={<Zap size={20} className="text-techblue-500" />}
                title="Innovation"
                delay={0.7}
              >
                <p className="text-sm leading-relaxed">
                  We constantly push boundaries and explore new possibilities.
                  Creativity and forward-thinking drive everything we do.
                </p>
              </AnimatedCard>

              <AnimatedCard
                icon={<LineChart size={20} className="text-techblue-500" />}
                title="Excellence"
                delay={0.8}
              >
                <p className="text-sm leading-relaxed">
                  We strive for excellence in every aspect of our work, ensuring
                  quality is never compromised in our solutions.
                </p>
              </AnimatedCard>
            </div>
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.a
              href="/about"
              className="inline-flex items-center bg-techblue-500 hover:bg-techblue-600 text-white px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 btn-glow"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(0, 115, 255, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More About Us
              <ArrowRight size={16} className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About/Stats Section */}
      <section
        id="about-preview"
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
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
                At CHAPTERINFO, we may be a young company, but we are fueled by
                passion, creativity, and an unrelenting drive to succeed. We are
                always eager to explore new ideas, experiment with the latest
                technologies, and implement them in the smartest way possible.
                Every project we take on is an opportunity to challenge
                ourselves, learn, and deliver solutions that go beyond
                expectations. Our team believes in saying "yes" to innovation,
                no matter how big or small the challenge may be. With a fearless
                mindset and a commitment to excellence, we strive to turn every
                idea into impactful reality.
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
                    <h3 className="text-white font-orbitron text-lg mb-2">
                      Adaptable Approach
                    </h3>
                    <p className="text-gray-400">
                      We adapt quickly to new challenges, trends, and
                      technologies to always stay ahead.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-techblue-400 mr-4">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-orbitron text-lg mb-2">
                      Innovation First
                    </h3>
                    <p className="text-gray-400">
                      We prioritize fresh ideas and inventive thinking to craft
                      impactful solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-techblue-400 mr-4">
                    <Handshake size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-orbitron text-lg mb-2">
                      Client-Centric Collaboration
                    </h3>
                    <p className="text-gray-400">
                      We work closely with clients, building partnerships rather
                      than just projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-techblue-400 mr-4">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-orbitron text-lg mb-2">
                      Passionate Team
                    </h3>
                    <p className="text-gray-400">
                      A young and energetic team driven by passion, curiosity,
                      and the desire to create the best.
                    </p>
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
                { count: "2+", label: "Years Experience" },
                { count: "10+", label: "Happy Clients" },
                { count: "5+", label: "Team Members" },
                { count: "20+", label: "Projects Completed" },
              ].map((stat, index) => (
                <div key={index} className="p-6 rounded-lg glass-card">
                  <h3 className="text-techblue-400 text-4xl font-orbitron font-bold mb-2">
                    {stat.count}
                  </h3>
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
              Get in touch with our experts to discuss your business needs and
              discover how our IT solutions and products can drive your digital
              transformation journey.
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
