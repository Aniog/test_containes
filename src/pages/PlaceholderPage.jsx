import React from 'react';
import { motion } from 'framer-motion';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="pt-40 pb-24 px-6 md:px-12 bg-velmora-ivory min-h-screen flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-serif mb-8 italic">{title}</h1>
        <p className="text-sm font-light uppercase tracking-widest text-velmora-charcoal/60 max-w-md mx-auto leading-relaxed">
          We are currently curating this section of the Velmora experience. 
          Please check back soon for our latest stories and collections.
        </p>
        <div className="mt-12">
          <a 
            href="/shop" 
            className="inline-block bg-velmora-charcoal text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-velmora-gold transition-colors duration-500"
          >
            Go to Shop
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default PlaceholderPage;
