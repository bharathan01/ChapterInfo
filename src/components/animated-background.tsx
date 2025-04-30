import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ParticleProps {
  color: string;
  size: number;
  position: { x: number; y: number };
  velocity: { x: number; y: number };
  rotation: number;
  opacity: number;
}

interface BubbleProps {
  id: number;
  size: number;
  position: { x: number; y: number };
  velocity: { x: number; y: number };
  opacity: number;
}

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const particlesRef = useRef<ParticleProps[]>([]);
  const bubblesRef = useRef<BubbleProps[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (!containerRef.current || dimensions.width === 0) return;

    const createParticles = () => {
      const numParticles = 50;
      const particles: ParticleProps[] = [];
      const { width, height } = dimensions;

      for (let i = 0; i < numParticles; i++) {
        particles.push({
          color: `rgba(100, 150, 255, ${Math.random() * 0.3 + 0.1})`,
          size: Math.random() * 8 + 3,
          position: {
            x: Math.random() * width,
            y: Math.random() * height,
          },
          velocity: {
            x: (Math.random() - 0.5) * 1.5,
            y: (Math.random() - 0.5) * 1.5,
          },
          rotation: Math.random() * 360,
          opacity: Math.random() * 0.6 + 0.2,
        });
      }

      return particles;
    };

    const createBubbles = () => {
      const numBubbles = 12;
      const bubbles: BubbleProps[] = [];
      const { width, height } = dimensions;

      for (let i = 0; i < numBubbles; i++) {
        bubbles.push({
          id: i,
          size: Math.random() * 120 + 60,
          position: {
            x: Math.random() * width,
            y: Math.random() * height,
          },
          velocity: {
            x: (Math.random() - 0.5) * 0.5,
            y: (Math.random() - 0.5) * 0.5,
          },
          opacity: Math.random() * 0.1 + 0.05,
        });
      }

      return bubbles;
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

    document.addEventListener("mousemove", handleMouseMove);
    particlesRef.current = createParticles();
    bubblesRef.current = createBubbles();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, [dimensions]);

  useEffect(() => {
    if (!containerRef.current || dimensions.width === 0) return;

    const { width, height } = dimensions;

    const updateParticles = () => {
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      // Update particles
      particlesRef.current.forEach((particle) => {
        particle.position.x += particle.velocity.x;
        particle.position.y += particle.velocity.y;

        // Mouse interaction with swirl effect
        const dx = mouseX - particle.position.x;
        const dy = mouseY - particle.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          
          particle.velocity.x -= (Math.cos(angle + Math.PI/2) * force * 0.5);
          particle.velocity.y -= (Math.sin(angle + Math.PI/2) * force * 0.5);
          particle.rotation += (Math.abs(particle.velocity.x) + Math.abs(particle.velocity.y)) * 2;
        }

        // Boundary behavior
        if (particle.position.x <= 0 || particle.position.x >= width) {
          particle.velocity.x *= -0.8;
          particle.position.x = Math.max(0, Math.min(width, particle.position.x));
        }
        if (particle.position.y <= 0 || particle.position.y >= height) {
          particle.velocity.y *= -0.8;
          particle.position.y = Math.max(0, Math.min(height, particle.position.y));
        }

        // Apply friction
        particle.velocity.x *= 0.98;
        particle.velocity.y *= 0.98;
      });

      // Update bubbles
      bubblesRef.current.forEach((bubble) => {
        bubble.position.x += bubble.velocity.x;
        bubble.position.y += bubble.velocity.y;

        // Mouse interaction - bubbles should move away from cursor
        const dx = mouseX - bubble.position.x;
        const dy = mouseY - bubble.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 300;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          
          bubble.velocity.x += Math.cos(angle) * force * 2;
          bubble.velocity.y += Math.sin(angle) * force * 2;
        }

        // Boundary behavior - wrap around
        if (bubble.position.x < -bubble.size) bubble.position.x = width + bubble.size;
        if (bubble.position.x > width + bubble.size) bubble.position.x = -bubble.size;
        if (bubble.position.y < -bubble.size) bubble.position.y = height + bubble.size;
        if (bubble.position.y > height + bubble.size) bubble.position.y = -bubble.size;

        // Apply friction
        bubble.velocity.x *= 0.99;
        bubble.velocity.y *= 0.99;
      });

      requestRef.current = requestAnimationFrame(updateParticles);
    };

    requestRef.current = requestAnimationFrame(updateParticles);

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [dimensions]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-black"
    >
      {/* Glassmorphic overlay */}
      <div className="absolute inset-0 backdrop-blur-[100px] opacity-30"></div>
      
      {/* Darker gradient layers */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(30,58,138,0.3)_0%,transparent_60%)]"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_10%,rgba(67,56,202,0.2)_0%,transparent_50%)]"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(49,46,129,0.25)_0%,transparent_50%)]"></div>
      
      {/* Large interactive bubbles */}
      {bubblesRef.current.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full border border-white/10 backdrop-blur-sm"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.position.x}px`,
            top: `${bubble.position.y}px`,
            opacity: bubble.opacity,
            background: `radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(37,99,235,0.05) 70%, transparent 100%)`,
            boxShadow: `inset 0 0 20px rgba(255,255,255,0.1), 0 0 40px rgba(59,130,246,0.1)`,
          }}
          initial={false}
          animate={{
            x: bubble.position.x,
            y: bubble.position.y,
          }}
          transition={{
            duration: 0,
            ease: "linear",
          }}
        />
      ))}

      {/* Dynamic particles */}
      {particlesRef.current.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full backdrop-blur-sm"
          style={{
            backgroundColor: particle.color,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.position.x}px`,
            top: `${particle.position.y}px`,
            transform: `rotate(${particle.rotation}deg)`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            opacity: particle.opacity,
            border: `1px solid rgba(255,255,255,0.1)`,
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

      {/* Glassmorphic floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-900/20 blur-[80px] animate-float opacity-20 border border-white/10"></div>
      <div className="absolute bottom-1/3 right-1/5 w-48 h-48 rounded-full bg-indigo-900/20 blur-[60px] animate-float opacity-15 border border-white/10" style={{ animationDelay: "-3s" }}></div>
      <div className="absolute top-2/3 left-1/3 w-32 h-32 rounded-full bg-violet-900/20 blur-[50px] animate-float opacity-15 border border-white/10" style={{ animationDelay: "-5s" }}></div>
      
      {/* Subtle grid overlay for glass effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=')] opacity-10"></div>
    </div>
  );
};

export default AnimatedBackground;