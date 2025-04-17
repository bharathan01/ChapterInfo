
import React, { useState, useEffect } from "react";

interface CustomCursorProps {
  color?: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ color = "#0413F2" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // Show cursor when it moves
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    // Check for link hovers
    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, [role=button], .interactive").forEach(el => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();

    // Re-check for links when DOM changes
    const observer = new MutationObserver(handleLinkHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      removeEventListeners();
      observer.disconnect();
    };
  }, []);

  // Don't show custom cursor on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* Main cursor dot */}
      <div
        className={`absolute rounded-full transition-all duration-200 ${
          clicked ? "scale-90" : "scale-100"
        } ${linkHovered ? "scale-150" : ""}`}
        style={{
          background: color,
          height: linkHovered ? "20px" : "12px",
          width: linkHovered ? "20px" : "12px",
          marginLeft: linkHovered ? "-10px" : "-6px",
          marginTop: linkHovered ? "-10px" : "-6px",
          opacity: 0.8,
        }}
      />

      {/* Trailing cursor glow */}
      <div 
        className="absolute rounded-full animate-mouse-glow"
        style={{
          background: color,
          marginLeft: "-10px",
          marginTop: "-10px",
          opacity: 0.3,
        }}
      />
    </div>
  );
};

export default CustomCursor;
