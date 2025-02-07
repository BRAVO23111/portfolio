import React, { useState, useEffect } from 'react';
import { ChevronUp, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import AnimatedTitle from './components/AnimatedTitle';
import ParticlesBackground from './components/ParticlesBackground';
import SmoothScroll from './components/LocomotiveScroll';
import Projects from './components/Projects';
import './styles/cursor.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50"
    >
      <ChevronUp className="w-6 h-6" />
    </motion.button>
  );
};

const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = (centerY - e.clientY) / 20;
    const rotateY = (e.clientX - centerX) / 20;

    setMousePosition({ x: rotateY, y: rotateX });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const skills = [
    { name: "React", level: 60 },
    { name: "Node.js", level: 60 },
    { name: "MongoDB", level: 60 },
    { name: "Express", level: 70 },
    { name: "TypeScript", level: 50 },
    { name: "Next.js", level: 60 },
    { name: "TailwindCSS", level: 80 },
    { name: "Docker", level: 50 },
    { name: "AWS", level: 60 },
    { name: "Firebase", level: 80 },
    { name: "Redux", level: 80 },
    { name: "Framer Motion", level: 60 },
  ];

  const socialLinks = [
    { href: "https://github.com/BRAVO23111", icon: <Github className="w-6 h-6" /> },
    { href: "https://www.linkedin.com/in/debanjan-mukherjee-1b8257170/", icon: <Linkedin className="w-6 h-6" /> },
    { href: "mailto:debanjanmukherjee015@gmail.com", icon: <Mail className="w-6 h-6" /> }
  ];

  return (
    <div className="relative">
      <CustomCursor follow />
      <SmoothScroll>
        <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white">
          {/* Navbar */}
          <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full bg-slate-950/80 backdrop-blur-lg z-50"
          >
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-16">
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
                >
                  DM
                </motion.span>
                <div className="hidden md:flex space-x-8">
                  {['Projects', 'Skills', 'Contact'].map((item) => (
                    <motion.a 
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      whileHover={{ scale: 1.1, color: '#60A5FA' }}
                      className="transition-colors"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.nav>

          {/* Hero Section */}
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-4xl text-slate-400 mb-8"
              >
                <AnimatedTitle />
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12"
              >
                Crafting seamless digital experiences from front to back.
                Specializing in MERN stack development to bring your vision to life.
              </motion.p>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex justify-center space-x-6"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    variants={itemVariants}
                    whileHover={{ scale: 1.2 }}
                    className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Projects Section */}
          <section id="projects" className="py-20 relative overflow-hidden">
            <ParticlesBackground />
            <div className="container mx-auto px-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                  Projects
                </h2>
                <p className="text-slate-400 text-lg">
                  Explore my latest works and creative endeavors
                </p>
              </motion.div>
              <Projects />
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 bg-slate-800/30">
            <div className="container mx-auto px-4">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-16"
              >
                Skills
              </motion.h2>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">{skill.name}</h3>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <motion.div 
                      className="w-full bg-slate-700 rounded-full h-2"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <div className="container mx-auto px-4 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center mb-8"
              >
                Contact Me
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-slate-400 mb-12"
              >
                Feel free to reach out to discuss your next project, collaboration opportunities, or just to say hello.
              </motion.p>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-center space-x-6"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    variants={itemVariants}
                    whileHover={{ scale: 1.2 }}
                    className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-6 bg-slate-950 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} Debanjan Mukherjee. All rights reserved.</p>
          </footer>

          {/* Scroll to Top */}
          <ScrollToTop />
        </div>
      </SmoothScroll>
    </div>
  );
};

export default Portfolio;
