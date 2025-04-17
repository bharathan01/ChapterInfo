
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  path: string;
}

interface NavbarProps {
  logoVisible: boolean;
}

const navLinks: NavLink[] = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Careers", path: "/careers" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC<NavbarProps> = ({ logoVisible }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? "py-2 bg-black/80 backdrop-blur-md shadow-lg" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <AnimatePresence>
          {logoVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Link to="/" className="flex items-center">
                <img 
                  src="/logo.svg" 
                  alt="Chapter Info Logo" 
                  className="h-10 w-auto"
                />
                <span className="ml-2 text-white font-orbitron text-xl font-bold">
                  <span className="text-techblue-400">CHAPTER</span>INFO
                </span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm font-medium transition-colors duration-300 py-2 ${
                location.pathname === link.path 
                  ? "text-techblue-300" 
                  : "text-white hover:text-techblue-200"
              } interactive`}
            >
              <span>{link.name}</span>
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-techblue-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-techblue-500 hover:bg-techblue-600 text-white px-5 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(4,19,242,0.5)] interactive btn-glow"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="p-2 text-white focus:outline-none interactive"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`py-2 px-4 rounded-md transition-colors ${
                      location.pathname === link.path
                        ? "bg-techblue-900/50 text-techblue-300"
                        : "text-white hover:bg-gray-800/50"
                    } interactive`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="bg-techblue-500 text-white py-2 px-4 rounded-md text-center font-medium mt-2 interactive"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
