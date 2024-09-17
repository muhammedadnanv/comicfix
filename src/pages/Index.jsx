import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ContactForm from '../components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 font-['Amatic_SC']">
      <header className="container mx-auto py-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-purple-800"
        >
          Comicfix.com
        </motion.h1>
      </header>

      <main className="container mx-auto px-4">
        <HeroSection />
        <FeaturesSection />
        <ContactForm />
      </main>

      <footer className="container mx-auto py-6 text-center text-gray-600">
        <p>© 2024 Comicfix.com. All rights reserved.</p>
        <p>Contact: +91 9656778508</p>
      </footer>
    </div>
  );
};

export default Index;
