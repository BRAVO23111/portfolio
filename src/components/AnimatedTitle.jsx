import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const phrases = [
  "Backend Developer",
  "Frontend Developer",
  "Full Stack Developer"
];

const AnimatedTitle = () => {
  const containerRef = useRef(null);
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const letters = container.querySelectorAll('.letter');
    let currentIndex = 0;

    const animateLetters = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          timeoutRef.current = setTimeout(() => {
            currentIndex = (currentIndex + 1) % phrases.length;
            setCurrentPhrase(phrases[currentIndex]);
          }, 500);
        }
      });

      // Reset initial state
      gsap.set(letters, {
        opacity: 0,
        y: 20,
        rotateX: -90,
        color: "#60A5FA"
      });

      // Entrance animation
      letters.forEach((letter, index) => {
        tl.to(letter, {
          duration: 0.4,
          opacity: 1,
          y: 0,
          rotateX: 0,
          ease: "back.out(1.7)",
        }, index * 0.05);
      });

      // Bounce and color effects
      tl.to(letters, {
        duration: 0.75,
        scale: 1.2,
        color: "#60A5FA",
        stagger: {
          each: 0.05,
          from: "center",
        },
        ease: "elastic.out(1, 0.3)"
      })
      .to(letters, {
        duration: 0.5,
        scale: 1,
        color: "#818CF8",
        stagger: {
          each: 0.05,
          from: "edges",
        },
        ease: "power2.out"
      })
      .to(letters, {
        duration: 0.3,
        scale: 1.1,
        color: "#60A5FA",
        stagger: {
          each: 0.05,
          from: "random",
        },
        ease: "power2.inOut"
      })
      .to(letters, {
        duration: 0.4,
        y: -20,
        opacity: 0,
        scale: 0.8,
        stagger: {
          each: 0.03,
          from: "random",
        },
        ease: "power2.in"
      });
    };

    animateLetters();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentPhrase]);

  const createLetterSpans = (text) => {
    return text.split('').map((char, index) => (
      <span 
        key={index} 
        className={`letter inline-block ${char === ' ' ? 'mx-2' : ''}`}
        style={{
          display: 'inline-block',
          minWidth: char === ' ' ? '0.5em' : 'auto'
        }}
      >
        {char}
      </span>
    ));
  };

  return (
    <div 
      ref={containerRef} 
      className="relative inline-block ml-2"
    >
      <div className="flex flex-wrap items-center justify-center gap-[1px] text-2xl md:text-4xl font-bold text-blue-400">
        {createLetterSpans(currentPhrase)}
      </div>
    </div>
  );
};

export default AnimatedTitle;
