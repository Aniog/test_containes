import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-velmora-charcoal"
        data-strk-bg-id="hero-bg-v1"
        data-strk-bg="[hero-headline] [hero-subheadline]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-5xl md:text-8xl font-serif mb-6 leading-tight"
          id="hero-headline"
        >
          Crafted to be Treasured
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-white/80 text-lg md:text-xl font-light mb-10 tracking-wide uppercase"
          id="hero-subheadline"
        >
          Elevated essentials for every moment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link
            to="/shop"
            className="inline-block bg-white text-velmora-charcoal px-12 py-5 uppercase tracking-[0.3em] text-xs font-semibold hover:bg-velmora-gold hover:text-white transition-all duration-300 shadow-xl"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
      >
        <div className="w-[1px] h-12 bg-white/20 relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
