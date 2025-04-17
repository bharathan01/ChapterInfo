
import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import LoadingScreen from "./loading-screen";
import CustomCursor from "./ui/custom-cursor";
import { AnimatePresence, motion } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [logoVisible, setLogoVisible] = useState(false);
  const hasVisited = sessionStorage.getItem("hasVisited");

  useEffect(() => {
    if (!hasVisited) {
      sessionStorage.setItem("hasVisited", "true");
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          setLogoVisible(true);
        }, 500);
      }, 3000);
    } else {
      setLoading(false);
      setLogoVisible(true);
    }
  }, [hasVisited]);

  if (!hasVisited && loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} logo="/logo.svg" />;
  }

  return (
    <div className="min-h-screen flex flex-col custom-cursor">
      <CustomCursor color="#0413F2" />
      <Navbar logoVisible={logoVisible} />
      <AnimatePresence mode="wait">
        <motion.main
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-grow"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
