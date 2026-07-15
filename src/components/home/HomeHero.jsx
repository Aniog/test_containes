import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        data-strk-bg-id="hero-bg-9a2f1c"
        data-strk-bg="gold jewelry close up on model warm lighting editorial"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] ease-linear scale-110"
        style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"%3E%3Crect width="100%25" height="100%25" fill="%23F4F1ED"/%3E%3C/svg%3E')` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.4em] mb-4"
        >
          New Collection Available Now
        </motion.p>
        
        <motion.h1
          id="hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 max-w-4xl"
        >
          Crafted to be Treasured
        </motion.h1>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Link to="/shop">
            <Button size="lg" className="bg-white text-black hover:bg-gold hover:text-white border-transparent tracking-[0.2em] font-bold">
              SHOP THE COLLECTION
            </Button>
          </Link>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black tracking-[0.2em]">
            OUR STORY
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white flex flex-col items-center gap-2 opacity-60"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/40" />
      </motion.div>
    </section>
  );
};

export default HomeHero;
