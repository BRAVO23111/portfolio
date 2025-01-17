import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Feel free to reach out to discuss your next project, collaboration opportunities, or just to say hello.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-8"
        >
          <motion.a
            href="https://github.com/debanjan-2002"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
            <span>GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/debanjan-mukherjee-07/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </motion.a>
          <motion.a
            href="mailto:debanjanmukherjee2002@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
            <span>Email</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
