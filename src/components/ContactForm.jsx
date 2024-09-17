import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">Get in Touch</h2>
      <div className="max-w-md mx-auto">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input type="text" id="name" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea id="message" rows="4" className="w-full px-3 py-2 border rounded-md"></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <motion.div whileHover={{ y: -5 }} className="text-purple-600"><Mail /></motion.div>
        <motion.div whileHover={{ y: -5 }} className="text-purple-600"><Phone /></motion.div>
        <motion.div whileHover={{ y: -5 }} className="text-purple-600"><MessageSquare /></motion.div>
      </div>
    </section>
  );
};

export default ContactForm;