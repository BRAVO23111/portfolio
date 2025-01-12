import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll with optimized settings
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08, // Lower value = smoother scrolling
      multiplier: 0.5, // Lower value = slower scrolling
      class: 'is-revealed',
      reloadOnContextChange: true,
      touchMultiplier: 2,
      smoothMobile: true,
      smartphone: {
        smooth: true,
        lerp: 0.08,
        multiplier: 0.5
      },
      tablet: {
        smooth: true,
        lerp: 0.08,
        multiplier: 0.5
      }
    });

    // Update ScrollTrigger when locomotive scroll updates
    locomotiveScrollRef.current.on('scroll', ScrollTrigger.update);

    // Update locomotive scroll when window resizes
    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length 
          ? locomotiveScrollRef.current.scrollTo(value, 0, 0)
          : locomotiveScrollRef.current.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
    });

    // Handle smooth anchor links
    const handleAnchorClick = e => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          locomotiveScrollRef.current.scrollTo(targetElement, {
            offset: -100,
            duration: 1000,
            easing: [0.25, 0.00, 0.35, 1.00]
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Cleanup
    return () => {
      if (locomotiveScrollRef.current) {
        document.removeEventListener('click', handleAnchorClick);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);

  return (
    <div 
      ref={scrollRef} 
      data-scroll-container 
      style={{ 
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  );
}
