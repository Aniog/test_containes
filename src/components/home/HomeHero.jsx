import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with stock image tagging */}
      <div 
        className="absolute inset-0 bg-charcoal"
        data-strk-bg-id="home-hero-bg-9d2a3c"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center text-white px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          id="hero-subtitle"
          className="uppercase tracking-[0.4em] text-xs mb-6 font-medium"
        >
          Elevated Essentials
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          id="hero-title"
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-12 tracking-tight leading-none"
        >
          Crafted to be <br className="hidden md:block" /> Treasured
        </motion.h1>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link 
            to="/shop" 
            className="inline-block px-12 py-4 bg-white text-charcoal hover:bg-velmora-gold hover:text-white transition-all duration-500 uppercase tracking-widest text-xs font-bold"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </section>
  );
};

export default HomeHero;
