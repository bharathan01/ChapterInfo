import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/layout";
import SectionTitle from "../components/ui/section-title";
import {
  ArrowRight,
  BarChart2,
  Briefcase,
  ClipboardList,
  Globe,
  GraduationCap,
  Heart,
  Laptop,
  MapPin,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Careers: React.FC = () => {
  const jobOpenings = [
    // {
    //   title: "Senior Full Stack Developer",
    //   location: "San Francisco, CA",
    //   type: "Full-time",
    //   department: "Engineering",
    //   description:
    //     "We're looking for a Senior Full Stack Developer to build innovative solutions for our clients.",
    //   requirements: [
    //     "5+ years of experience in full stack development",
    //     "Strong proficiency in React, Node.js, and TypeScript",
    //     "Experience with cloud platforms (AWS, Azure, GCP)",
    //     "Understanding of DevOps principles and CI/CD pipelines",
    //     "Excellent problem-solving and communication skills",
    //   ],
    // },
    // {
    //   title: "Cybersecurity Analyst",
    //   location: "Remote",
    //   type: "Full-time",
    //   department: "Security",
    //   description:
    //     "Join our security team to help protect our clients from evolving cyber threats.",
    //   requirements: [
    //     "3+ years of experience in cybersecurity",
    //     "Security certifications (CISSP, CEH, Security+)",
    //     "Experience with security tools and frameworks",
    //     "Knowledge of compliance standards (ISO, NIST, SOC2)",
    //     "Strong analytical and incident response skills",
    //   ],
    // },
    // {
    //   title: "UI/UX Designer",
    //   location: "New York, NY",
    //   type: "Full-time",
    //   department: "Design",
    //   description:
    //     "Create exceptional user experiences for our products and client solutions.",
    //   requirements: [
    //     "3+ years of experience in UI/UX design",
    //     "Proficiency in Figma, Adobe XD, and design systems",
    //     "Portfolio demonstrating strong visual design skills",
    //     "Experience with user research and testing",
    //     "Understanding of accessibility standards",
    //   ],
    // },
    // {
    //   title: "Cloud Solutions Architect",
    //   location: "Austin, TX",
    //   type: "Full-time",
    //   department: "Engineering",
    //   description:
    //     "Design and implement scalable cloud solutions for enterprise clients.",
    //   requirements: [
    //     "5+ years of experience in cloud architecture",
    //     "Cloud certifications (AWS, Azure, GCP)",
    //     "Experience with infrastructure as code (Terraform, CloudFormation)",
    //     "Knowledge of containerization and orchestration",
    //     "Strong consulting and client communication skills",
    //   ],
    // },
    // {
    //   title: "Product Manager",
    //   location: "Seattle, WA",
    //   type: "Full-time",
    //   department: "Product",
    //   description:
    //     "Lead the development and growth of our innovative product offerings.",
    //   requirements: [
    //     "4+ years of experience in product management",
    //     "Experience with agile methodologies and product development lifecycle",
    //     "Strong technical background with understanding of software development",
    //     "Excellent analytical and prioritization skills",
    //     "Exceptional communication and stakeholder management abilities",
    //   ],
    // },
    // {
    //   title: "AI/ML Engineer",
    //   location: "Remote",
    //   type: "Full-time",
    //   department: "Engineering",
    //   description:
    //     "Develop and implement AI and machine learning solutions for our products.",
    //   requirements: [
    //     "3+ years of experience in AI/ML engineering",
    //     "Strong proficiency in Python and ML frameworks (TensorFlow, PyTorch)",
    //     "Experience with data processing and analysis",
    //     "Knowledge of NLP, computer vision, or predictive analytics",
    //     "Background in deploying ML models to production",
    //   ],
    // },
  ];

  const benefits = [
    {
      title: "Task-Based Work Model",
      description:
        "Own your work with clear deliverables and the freedom to manage how you get there.",
      icon: <ClipboardList size={24} />,
    },
    {
      title: "Work from Anywhere",
      description:
        "Remote, hybrid, or on-site — choose the environment where you thrive best.",
      icon: <Globe size={24} />,
    },
    {
      title: "Skill-Based Growth",
      description:
        "Switch roles, explore new skills, and work across domains as you grow.",
      icon: <BarChart2 size={24} />,
    },
    {
      title: "Collaborative Culture",
      description:
        "Work in a team that values ideas over titles, and celebrates shared success.",
      icon: <Users size={24} />,
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
              Join Our <span className="text-gradient">Team</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Build the future of technology with us and grow your career in a
              collaborative and innovative environment
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#openings"
                className="bg-techblue-500 hover:bg-techblue-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(4,19,242,0.5)] inline-block btn-glow"
              >
                View Open Positions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-techblue-600/20 to-techblue-400/20 rounded-xl blur-xl opacity-70"></div>
                <img
                  src="careers.jpg"
                  alt="Team Collaboration"
                  className="rounded-lg w-full h-auto object-cover relative z-10 shadow-xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                title="What We Offer"
                subtitle="Build Your Career on Your Terms"
                light
              />

              <p className="text-gray-300 mb-6">
                At CHAPTERINFO, we believe great work happens when people are
                trusted with freedom and ownership. Our task-based model
                empowers every team member to work on specific, goal-oriented
                assignments tailored to their skills, bandwidth, and pace. You
                can manage your time and choose your workspace be it remote,
                hybrid, or in-office as long as your tasks are delivered with
                quality and on time.
              </p>

              <p className="text-gray-300 mb-6">
                We're proud of our inclusive and collaborative culture where
                diverse teams thrive. You’ll work alongside driven individuals
                who are not just teammates, but mentors, collaborators, and
                creative thinkers. Our flat structure ensures that every voice
                is heard and every idea has a place.
              </p>

              <p className="text-gray-300 mb-6">
                Learning is built into everything we do. Whether you're diving
                deep into a core skill or exploring a completely new one you'll
                have the opportunity to work across domains such as software
                development, UI/UX design, content, marketing, and product
                strategy. We actively encourage skill-switching and
                cross-functional collaboration to help you grow beyond a fixed
                role.
              </p>

              <p className="text-gray-300 mb-8">
                At CHAPTERINFO, your growth is not defined by years of
                experience but by the value you create. We give you the room to
                innovate, experiment, and take ownership of your journey all
                within a culture that supports learning, respects individuality,
                and celebrates progress.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Task-driven, flexible work model",
                  "Remote, hybrid, or in-office — your choice",
                  "Collaborative and open team culture",
                  "Continuous learning opportunities",
                  "Cross-domain project exposure",
                  "Growth through ownership & trust",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-techblue-500 rounded-full mr-2"></div>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Benefits & Perks"
            subtitle="Why Work With Us"
            center
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 bg-techblue-500/10  lg:grid-cols-4 gap-8 mt-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6  rounded-lg animated-border h-full"
              >
                <div className="animated-border-content bg-techblue-500/10">
                  <div className="p-3 bg-techblue-500/10 rounded-lg text-techblue-400 inline-block mb-4">
                    {benefit.icon}
                  </div>

                  <h3 className="text-xl font-orbitron font-bold mb-3 text-white">
                    {benefit.title}
                  </h3>

                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Open Positions"
            subtitle="Join Our Team"
            center
            light
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {jobOpenings.length > 0 ? (
              jobOpenings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-lg overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-techblue-300 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center mt-2 text-gray-400">
                          <MapPin size={16} className="mr-1" />
                          <span className="mr-4">{job.location}</span>
                          <Briefcase size={16} className="mr-1" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <span className="bg-techblue-500/20 text-techblue-300 text-xs font-medium px-3 py-1 rounded-full">
                        {job.department}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-4">{job.description}</p>

                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-2">
                        Requirements:
                      </h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, i) => (
                          <li
                            key={i}
                            className="text-gray-400 flex items-start"
                          >
                            <span className="w-1.5 h-1.5 bg-techblue-400 rounded-full mr-2 mt-2"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-gray-800">
                      <a
                        href="#"
                        className="inline-flex items-center text-techblue-400 hover:text-techblue-300 font-medium transition-colors group/link"
                      >
                        Apply Now
                        <ArrowRight
                          size={16}
                          className="ml-1 transform group-hover/link:translate-x-1 transition-transform"
                        />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center col-span-full mt-8 text-gray-400 text-lg font-medium">
                No open positions available at the moment.
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
              Don't See the Right Fit?
            </h3>
            <p className="text-gray-400 mb-6">
              We're always looking for talented individuals to join our team.
              Send us your resume for future opportunities.
            </p>
            <Link
              to="/contact"
              className="bg-transparent border border-white/30 text-white hover:border-white/60 px-6 py-3 rounded-md font-medium transition-all duration-300 inline-block"
            >
              Send Open Application
            </Link>
          </motion.div>
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
              Ready to Shape the Future?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8"
            >
              Join our team and be part of building innovative technology
              solutions that transform businesses worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a
                href="#openings"
                className="bg-techblue-500 hover:bg-techblue-600 text-white px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(4,19,242,0.5)] inline-block btn-glow"
              >
                Explore Opportunities
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
