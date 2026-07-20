import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-headline] [hero-subheadline] gold jewelry model warm light editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 z-0 scale-105 animate-[pulse_10s_infinite_alternate]"
        style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6">
        <motion.h1
          id="hero-headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 drop-shadow-lg"
        >
          Crafted to be Treasured
        </motion.h1>
        
        <motion.p
          id="hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-light uppercase-spaced mb-10 opacity-90 drop-shadow-md"
        >
          Demi-fine jewelry for your everyday ritual
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/shop"
            className="inline-block bg-primary text-white px-10 py-4 uppercase-spaced text-xs hover:bg-white hover:text-zinc-900 transition-soft"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
        <div className="w-px h-12 bg-white/30 mx-auto" />
      </div>
    </section>
  );
};

export default HomeHero;
