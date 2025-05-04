import React, { useState } from "react";
import Layout from "../components/layout";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  ArrowRight,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Github,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
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
      {/* Contact Info & Social Media Section */}
      <section className="py-20 relative bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-300 mb-8">
                  Whether you have a question about our services, need a
                  consultation, or want to discuss a project, our team is ready
                  to help you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-techblue-500/10 rounded-full">
                      <Mail className="w-6 h-6 text-techblue-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Email Us
                      </h3>
                      <p className="text-gray-400">info@chapterinfo.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-techblue-500/10 rounded-full">
                      <Phone className="w-6 h-6 text-techblue-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Call Us</h3>
                      <div className="space-y-2">
                        <p className="text-gray-400">
                          <span className="font-medium text-gray-300">UK:</span>{" "}
                          +44 77 4771 7539
                        </p>
                        <p className="text-gray-400">
                          <span className="font-medium text-gray-300">
                            India:
                          </span>{" "}
                          +91 7306741597
                        </p>
                        {/* <p className="text-gray-400">
                          <span className="font-medium text-gray-300">
                            Saudi Arabia:
                          </span>{" "}
                          +966 51 234 5678
                        </p> */}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-techblue-500/10 rounded-full">
                      <MapPin className="w-6 h-6 text-techblue-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Location
                      </h3>
                      <p className="text-gray-400">
                        Remote / Online
                        <br />
                        {/* Tech Valley, CA 94043 */}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-techblue-500/10 rounded-full">
                      <Clock className="w-6 h-6 text-techblue-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        Business Hours
                      </h3>
                      <p className="text-gray-400">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Weekend: By Appointment
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-12">
                  <h3 className="text-white font-semibold mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://www.linkedin.com/company/chapterinfo/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-techblue-500/10 rounded-full hover:bg-techblue-500/20 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="w-6 h-6 text-techblue-500" />
                    </motion.a>
                    {/* <motion.a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-techblue-500/10 rounded-full hover:bg-techblue-500/20 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter className="w-6 h-6 text-techblue-500" />
                    </motion.a> */}
                    {/* <motion.a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-techblue-500/10 rounded-full hover:bg-techblue-500/20 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Facebook className="w-6 h-6 text-techblue-500" />
                    </motion.a> */}
                    <motion.a
                      href="https://www.instagram.com/chapterinfo?igsh=c2NkaThybmowM2Ew"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-techblue-500/10 rounded-full hover:bg-techblue-500/20 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Instagram className="w-6 h-6 text-techblue-500" />
                    </motion.a>
                    {/* <motion.a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-techblue-500/10 rounded-full hover:bg-techblue-500/20 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-6 h-6 text-techblue-500" />
                    </motion.a> */}
                    <motion.a
                      href="https://wa.me/+917306196249"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-techblue-500/10 rounded-full hover:bg-techblue-500/20 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaWhatsapp className="w-6 h-6 text-techblue-500" />{" "}
                      {/* Or use a WhatsApp icon */}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                className="bg-gray-900 p-8 rounded-xl border border-gray-800"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-techblue-500 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-techblue-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-techblue-500 focus:border-transparent transition-all duration-300"
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-techblue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="inline-flex items-center bg-techblue-500 hover:bg-techblue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <Send size={20} className="ml-2" />
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-20 relative bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Emergency Support */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-techblue-500/10 rounded-full">
                    <Phone size={20} className="text-techblue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Quick Response Promise
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  We aim to respond to all inquiries within 24 hours during
                  business days. For urgent matters, please call us directly.
                </p>
                <motion.a
                  href="tel:+18001234567"
                  className="inline-flex items-center text-techblue-500 hover:text-techblue-400 font-medium"
                  whileHover={{ x: 5 }}
                >
                  Call Now <ArrowRight size={16} className="ml-2" />
                </motion.a>
              </div>

              {/* Schedule a Consultation */}
              <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-techblue-500/10 rounded-full">
                    <Clock size={20} className="text-techblue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Schedule a Consultation
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Our support team is available around the clock for critical
                  issues and emergency assistance.
                </p>
                <motion.a
                  href="/schedule"
                  className="inline-flex items-center text-techblue-500 hover:text-techblue-400 font-medium"
                  whileHover={{ x: 5 }}
                >
                  Email Support <ArrowRight size={16} className="ml-2" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
