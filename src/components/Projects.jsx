import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

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
  hover: {
    y: -5,
    transition: { duration: 0.3 }
  }
};

const projects = [
  {
    title: "Med Help",
    description: "MedHelp is an all-in-one hospital management system enabling patients to book doctors, store prescriptions, and manage health records, while admins and doctors streamline operations and appointments.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/debanjan-2002/",
    live: "https://connect-v1-project.vercel.app/",
    image: "https://i.postimg.cc/MG99MQ2c/Screenshot-2025-01-17-at-11-53-05-PM.pnga"
  },
  {
    title: "Connect",
    description: "A real-time chat application where users can create rooms for group conversations, featuring privacy enhancements such as secure access and encrypted communication for confidential discussions.",
    image: "https://i.postimg.cc/50kG4xsP/Screenshot-2024-11-17-at-6-10-32-PM.png",
    github: "https://github.com/BRAVO23111/Chat-and-notification-feature-codepth",
    live: "https://connect-v1-project.vercel.app/",
    tech: ["Firebase", "Framer Motion", "React", "Tailwind CSS"]
  },
  {
    title: "Share Newz",
    description: "Simplified Financial Tracker to track all the investment at a single place",
    image: "https://i.postimg.cc/ZRq2z9xB/Screenshot-2024-11-17-at-6-11-00-PM.png",
    github: "https://github.com/BRAVO23111/SHARE-NEWZ",
    live: "https://share-newz-mp1v.vercel.app/",
    tech: ["React", "Express", "MongoDB", "NodeJs", "Material UI", "Javascript"]
  },
  {
    title: "ReStory",
    description: "One stop destination for buying and selling unused / exclusive books",
    image: "https://i.postimg.cc/jjcm16PY/Screenshot-2024-11-17-at-6-11-45-PM.png",
    github: "https://github.com/BRAVO23111/ReStory",
    live: "https://re-story.vercel.app/",
    tech: ["React", "Express", "MongoDB", "Framer Motion", "Nodejs", "Redux", "Tailwind CSS"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-slate-900">
      <ParticlesBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-700/50 hover:border-slate-600/50"
            >
              <div className="aspect-square relative overflow-hidden bg-slate-900/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/50 to-purple-500/50 hover:from-blue-500/70 hover:to-purple-500/70 text-white rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
