import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  return (
    <section ref={containerRef} className="relative h-[90vh] md:h-screen w-full overflow-hidden flex items-center justify-center bg-neutral-900">
      <div 
        className="absolute inset-0 z-0 scale-105"
        data-strk-bg-id="hero-main-bg"
        data-strk-bg="[hero-sub] [hero-title] close-up gold jewelry"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/25 md:bg-black/15" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center text-white">
        <motion.p 
          id="hero-sub"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-8 font-light"
        >
          VELMORA FINE JEWELRY
        </motion.p>
        <motion.h1 
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-serif mb-12 leading-[1.1] font-medium"
        >
          Crafted to be <br className="hidden md:block" /> Treasured
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <a
            href="/shop"
            className="inline-block bg-white text-primary px-12 py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-accent hover:text-white transition-all duration-500 shadow-xl"
          >
            Shop the Collection
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4">
         <div className="w-[1px] h-12 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
