import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20s] scale-110 animate-subtle-zoom"
        data-strk-bg="warm lit close-up of gold jewelry on a model editorial"
        data-strk-bg-id="homepage-hero-bg"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="uppercase tracking-[0.4em] text-[10px] mb-6 font-medium"
        >
          Signature Fine Jewelry
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-8xl font-serif mb-8 leading-tight italic"
          id="hero-title"
        >
          Crafted to be Treasured
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed"
          id="hero-subhead"
        >
          Timeless designs in 18K gold vermeil, made for your everyday moments.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 1 }}
        >
          <Link 
            to="/shop" 
            className="inline-block bg-white text-velmora-primary px-10 py-4 uppercase-spacing text-xs font-bold hover:bg-velmora-accent hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/60"
      >
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-scroll-indicator" />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        @keyframes scroll-indicator {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 30s infinite alternate ease-in-out;
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 2s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
