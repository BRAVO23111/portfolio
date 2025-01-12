import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const AnimatedHireMe = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const container = containerRef.current;

    // Create a timeline for the animation
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1
    });

    // Initial setup
    gsap.set(container, {
      perspective: 400
    });

    // Animation sequence
    tl.to(text, {
      duration: 0.5,
      text: "Hire Me as Your",
      ease: "none"
    })
    .to(text, {
      duration: 0.75,
      scale: 1.2,
      rotation: 5,
      color: "#60A5FA",
      ease: "elastic.out(1, 0.3)"
    })
    .to(text, {
      duration: 0.5,
      rotation: -5,
      scale: 1,
      color: "#818CF8",
      ease: "power2.out"
    })
    .to(text, {
      duration: 0.5,
      rotation: 0,
      scale: 1.1,
      color: "#60A5FA",
      ease: "back.out(1.7)"
    })
    .to(text, {
      duration: 0.3,
      scale: 1
    });

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative inline-block"
    >
      <span 
        ref={textRef} 
        className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
      ></span>
    </div>
  );
};

export default AnimatedHireMe;
