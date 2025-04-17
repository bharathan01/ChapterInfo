
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface ParticleProps {
  color: string;
  size: number;
  position: { x: number; y: number };
  velocity: { x: number; y: number };
  rotation: number;
}

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const particlesRef = useRef<ParticleProps[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const createParticles = () => {
      const numParticles = 60; // Reduced for better performance
      const particles: ParticleProps[] = [];
      const container = containerRef.current;
      
      if (!container) return [];

      const { width, height } = container.getBoundingClientRect();

      for (let i = 0; i < numParticles; i++) {
        particles.push({
          color: `rgba(4, 19, 242, ${Math.random() * 0.4 + 0.1})`,
          size: Math.random() * 6 + 2, // Slightly larger particles
          position: {
            x: Math.random() * width,
            y: Math.random() * height,
          },
          velocity: {
            x: (Math.random() - 0.5) * 1.5, // Increased speed
            y: (Math.random() - 0.5) * 1.5,
          },
          rotation: Math.random() * 360, // Added rotation
        });
      }

      return particles;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleResize = () => {
      particlesRef.current = createParticles();
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousemove", handleMouseMove);

    particlesRef.current = createParticles();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();

    const updateParticles = () => {
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.position.x += particle.velocity.x;
        particle.position.y += particle.velocity.y;

        // Mouse repulsion with swirl effect
        const dx = mouseX - particle.position.x;
        const dy = mouseY - particle.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200; // Increased interaction radius

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          
          // Add swirl effect
          particle.velocity.x -= (Math.cos(angle + Math.PI/2) * force * 0.5);
          particle.velocity.y -= (Math.sin(angle + Math.PI/2) * force * 0.5);
          
          // Update rotation based on velocity
          particle.rotation += (Math.abs(particle.velocity.x) + Math.abs(particle.velocity.y)) * 2;
        }

        // Boundary behavior with bounce effect
        if (particle.position.x <= 0 || particle.position.x >= width) {
          particle.velocity.x *= -0.8; // Bounce with energy loss
          particle.position.x = Math.max(0, Math.min(width, particle.position.x));
        }
        if (particle.position.y <= 0 || particle.position.y >= height) {
          particle.velocity.y *= -0.8; // Bounce with energy loss
          particle.position.y = Math.max(0, Math.min(height, particle.position.y));
        }

        // Apply friction and minimum speed
        const friction = 0.98;
        particle.velocity.x *= friction;
        particle.velocity.y *= friction;

        // Add random movement
        if (Math.random() < 0.01) {
          particle.velocity.x += (Math.random() - 0.5) * 0.5;
          particle.velocity.y += (Math.random() - 0.5) * 0.5;
        }
      });

      container.style.transform = "translateZ(0)";
      requestRef.current = requestAnimationFrame(updateParticles);
    };

    requestRef.current = requestAnimationFrame(updateParticles);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-black via-black to-techblue-950/30"
    >
      {/* Static gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(4,19,242,0.1)_0%,transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_10%,rgba(4,19,242,0.15)_0%,transparent_40%)]"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(4,19,242,0.1)_0%,transparent_40%)]"></div>
      
      {/* Dynamic particles */}
      {particlesRef.current.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            backgroundColor: particle.color,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.position.x}px`,
            top: `${particle.position.y}px`,
            transform: `rotate(${particle.rotation}deg)`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          initial={false}
          animate={{
            x: particle.position.x,
            y: particle.position.y,
            rotate: particle.rotation,
          }}
          transition={{
            duration: 0,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-techblue-500/10 blur-3xl animate-float opacity-30"></div>
      <div className="absolute bottom-1/3 right-1/5 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl animate-float opacity-20" style={{ animationDelay: "-2s" }}></div>
      <div className="absolute top-2/3 left-1/3 w-32 h-32 rounded-full bg-techblue-300/10 blur-2xl animate-float opacity-20" style={{ animationDelay: "-4s" }}></div>
    </div>
  );
};

export default AnimatedBackground;

