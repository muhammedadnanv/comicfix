import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="text-center py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <img src="https://i.postimg.cc/prXh6WSd/svg.avif" alt="Comicfix Logo" className="w-32 h-32 mx-auto" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl font-bold mb-4 text-purple-900"
      >
        Where Innovation Meets Creativity
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-xl text-gray-700 mb-8"
      >
        Join our community of developers and contribute to exciting tech projects!
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-purple-600 text-white px-8 py-3 rounded-full text-xl hover:bg-purple-700 transition-colors duration-300"
      >
        Get Started
      </motion.button>
    </section>
  );
};

export default HeroSection;
