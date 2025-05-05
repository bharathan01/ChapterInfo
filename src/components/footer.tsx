import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronRight,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-8 relative z-10">
      <div className="container mx-auto px-4">
        {/* Top section with gradient */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-techblue-700 via-techblue-500 to-techblue-300"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/logo.png"
                alt="Tech Bloom Logo"
                className="h-10 w-auto mr-2"
              />
              <span className="text-white font-orbitron text-xl font-bold">
                <span className="text-techblue-400">CHAPTER</span>INFO
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Pioneering the future through innovative IT solutions and
              cutting-edge technology products.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-techblue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-techblue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-techblue-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-techblue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-orbitron font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 h-0.5 w-12 bg-techblue-500"></span>
            </h3>
            <ul className="space-y-3">
              {["Home", "Services", "Careers", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors flex items-center group"
                    >
                      <ChevronRight
                        size={16}
                        className="mr-2 text-techblue-500 transform group-hover:translate-x-1 transition-transform"
                      />
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-orbitron font-semibold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 h-0.5 w-12 bg-techblue-500"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "IT Consulting",
                "Game Development",
                "Digital Marketing",
                "Web Development",
                "Mobile Apps",
                "AI & Machine Learning",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ChevronRight
                      size={16}
                      className="mr-2 text-techblue-500 transform group-hover:translate-x-1 transition-transform"
                    />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-orbitron font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 h-0.5 w-12 bg-techblue-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin
                  size={20}
                  className="mr-3 text-techblue-400 flex-shrink-0"
                />
                <span className="text-gray-400">Location: Remote / Online</span>
              </li>
              <li className="flex items-start">
                <Phone
                  size={20}
                  className="mr-3 text-techblue-400 mt-1 flex-shrink-0"
                />
                <div className="text-gray-400 space-y-1">
                  <div>UK: +44 77 4771 7539</div>
                  <div>India: +91 7306741597</div>
                  {/* <div>Saudi Arabia: +966 55 123 4567</div>
                  <div>USA: +1 (555) 123-4567</div> */}
                </div>
              </li>
            
              <li className="flex items-center">
                <Mail
                  size={20}
                  className="mr-3 text-techblue-400 flex-shrink-0"
                />
                <span className="text-gray-400">info@chapterinfo.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} CHAPTERINFO. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6">
            {/* <Link to="/privacy-policy" className="hover:text-techblue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-techblue-400 transition-colors">
              Terms of Service
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
