import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = ({ follow }) => {
  const [isHoveringText, setIsHoveringText] = useState(false);
  
  const cursorX = useSpring(0, {
    damping: 25,
    stiffness: 200,
    mass: 0.3
  });
  
  const cursorY = useSpring(0, {
    damping: 25,
    stiffness: 150,
    mass: 0.3
  });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const isText = e.target.tagName === 'P' || 
                    e.target.tagName === 'H1' || 
                    e.target.tagName === 'H2' || 
                    e.target.tagName === 'H3' || 
                    e.target.tagName === 'SPAN' ||
                    e.target.tagName === 'A';
      setIsHoveringText(isText);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="custom-cursor fixed pointer-events-none z-50"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%'
      }}
    >
      <motion.div
        className="relative w-8 h-8"
        animate={{
          scale: isHoveringText ? 2 : 1,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 150,
          mass: 0.3
        }}
      >
        <motion.div
          className={`absolute inset-0 rounded-full ${isHoveringText ? 'bg-blue-500/30 backdrop-blur-sm' : 'bg-blue-500'} mix-blend-difference`}
          initial={{ scale: 1 }}
          animate={{ 
            scale: isHoveringText ? [1, 1.1, 1] : [1, 1.2, 1],
            rotate: isHoveringText ? [0, 180, 360] : 0
          }}
          transition={{
            duration: isHoveringText ? 2 : 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {isHoveringText && (
          <motion.div
            className="absolute inset-0 border-2 border-blue-500 rounded-full mix-blend-difference"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
