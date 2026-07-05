import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] ease-linear hover:scale-110"
        id="hero-bg-container"
        data-strk-bg-id="hero-bg-v1"
        data-strk-bg="[hero-sub] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span id="hero-sub" className="text-white text-[10px] uppercase tracking-[0.5em] mb-6 block">The Summer Collection</span>
          <h1 id="hero-title" className="font-serif text-5xl md:text-8xl text-white tracking-wide leading-tight mb-8">
            Crafted to be <br /> <span className="italic">Treasured</span>
          </h1>
          <p className="font-sans text-white/80 text-sm md:text-base tracking-wide max-w-lg mx-auto mb-10 leading-relaxed">
            Discover a refined collection of demi-fine jewelry designed for moments that matter. Quiet luxury for the everyday.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-primary px-10 py-5 text-xs uppercase tracking-extrawide hover:bg-accent hover:text-white transition-all duration-300 w-full sm:w-auto">
              Shop the Collection
            </button>
            <button className="bg-transparent border border-white text-white px-10 py-5 text-xs uppercase tracking-extrawide hover:bg-white hover:text-primary transition-all duration-300 w-full sm:w-auto">
              Our Story
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-white/40 text-[8px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
