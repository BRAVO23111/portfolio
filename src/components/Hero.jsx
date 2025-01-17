import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <ParticlesBackground />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Debanjan Mukherjee
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-slate-400 mb-8"
        >
          Crafting seamless digital experiences from front to back.
          <br />
          Specializing in MERN stack development to bring your vision to life.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
