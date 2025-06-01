import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [onDarkBg, setOnDarkBg] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check the background color under the cursor
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const backgroundColor = window.getComputedStyle(element).backgroundColor;
        const bgColor = backgroundColor.match(/\d+/g);
        if (bgColor) {
          // Check if background is dark
          const [r, g, b] = bgColor.map(Number);
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;
          setOnDarkBg(brightness < 128);
        }
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] w-6 h-6 border-2 rounded-full hidden md:block"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1,
          borderColor: onDarkBg ? 'white' : 'black',
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      {/* Dot cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] w-1 h-1 rounded-full hidden md:block"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          backgroundColor: onDarkBg ? 'white' : 'black',
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </>
  );
};

export default CustomCursor;
