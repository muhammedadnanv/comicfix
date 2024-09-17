import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Lightbulb } from 'lucide-react';

const features = [
  { icon: <Code />, title: 'Real-world Projects', description: 'Work on live-time project opportunities' },
  { icon: <Users />, title: 'Mentorship', description: 'Learn from industry professionals' },
  { icon: <Lightbulb />, title: 'Grow Your Skills', description: 'Contribute to exciting tech endeavors' },
];

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-md"
  >
    <div className="text-purple-600 mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">Why Choose Comicfix</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;