import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeHero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="[hero-title] close-up gold jewelry on model warm lighting editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight leading-tight"
        >
          Crafted to be Treasured
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/90 text-lg md:text-xl font-sans font-light mb-10 tracking-[0.05em]"
        >
          Demi-fine jewelry for your everyday journey.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            to="/shop"
            className="inline-block bg-white text-primary px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-accent hover:text-white transition-colors duration-300"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
      >
        <div className="w-[1px] h-12 bg-white/40 mx-auto" />
      </motion.div>
    </section>
  );
};

export default HomeHero;
