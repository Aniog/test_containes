import React from 'react';
import { motion } from 'framer-motion';

const JournalPage = () => {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen">
      <div className="max-w-[900px] mx-auto px-6 lg:px-10 py-16 lg:py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest-2xl text-velmora-taupe mb-6">
            Coming Soon
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-velmora-ink mb-6">
            The Journal
          </h1>
          <p className="text-velmora-brown leading-relaxed max-w-lg mx-auto">
            Stories about design, craftsmanship, and the art of everyday
            elegance. Our journal launches soon with styling guides, behind-the-scenes
            looks, and inspiration for building your jewelry collection.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default JournalPage;
