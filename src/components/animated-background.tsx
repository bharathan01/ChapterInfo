
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface ParticleProps {
  color: string;
  size: number;
  position: { x: number; y: number };
  velocity: { x: number; y: number };
}

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const particlesRef = useRef<ParticleProps[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Setup particles on mount
  useEffect(() => {
    if (!containerRef.current) return;

    const createParticles = () => {
      const numParticles = 80;
      const particles: ParticleProps[] = [];
      const container = containerRef.current;
      
      if (!container) return [];

      const { width, height } = container.getBoundingClientRect();

      for (let i = 0; i < numParticles; i++) {
        particles.push({
          color: `rgba(4, 19, 242, ${Math.random() * 0.3 + 0.1})`,
          size: Math.random() * 4 + 1,
          position: {
            x: Math.random() * width,
            y: Math.random() * height,
          },
          velocity: {
            x: (Math.random() - 0.5) * 0.5,
            y: (Math.random() - 0.5) * 0.5,
          },
        });
      }

      return particles;
    };

    particlesRef.current = createParticles();

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

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Animation loop
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

        // Mouse interaction
        const dx = mouseX - particle.position.x;
        const dy = mouseY - particle.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          particle.velocity.x -= (dx / distance) * force * 0.02;
          particle.velocity.y -= (dy / distance) * force * 0.02;
        }

        // Boundary check
        if (particle.position.x < 0 || particle.position.x > width) {
          particle.velocity.x *= -1;
        }
        if (particle.position.y < 0 || particle.position.y > height) {
          particle.velocity.y *= -1;
        }

        // Apply friction
        particle.velocity.x *= 0.99;
        particle.velocity.y *= 0.99;
      });

      // Force render
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
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          initial={false}
          animate={{
            x: particle.position.x,
            y: particle.position.y,
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
