
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
  logo?: string;
  duration?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  logo = "/logo.svg",
  duration = 3000,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 5;
        return newProgress <= 100 ? newProgress : 100;
      });
    }, duration / 20);

    // Complete loading after duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onComplete();
      }, 500); // Extra time for exit animation
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Logo container */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
                className="mb-8"
              >
                <div className="relative w-40 h-40 flex items-center justify-center">
                  {/* Animated glow effect behind logo */}
                  <div className="absolute inset-0 bg-techblue-500/30 rounded-full blur-xl animate-pulse-slow"></div>
                  
                  {/* Logo */}
                  <img
                    src={logo}
                    alt="Logo"
                    className="w-32 h-32 object-contain relative z-10"
                  />
                </div>
              </motion.div>

              {/* Loading text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white font-orbitron text-xl mt-4 text-center"
              >
                LOADING FUTURE TECH
              </motion.p>

              {/* Progress bar */}
              <div className="w-64 h-1 bg-gray-800 rounded-full mt-4 overflow-hidden">
                <motion.div
                  className="h-full bg-techblue-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut" }}
                />
              </div>

              {/* Progress percentage */}
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-white/80 text-sm mt-2"
              >
                {progress}%
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
