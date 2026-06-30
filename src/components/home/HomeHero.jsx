import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center px-6 md:px-12 overflow-hidden bg-[#1A1A1A]">
        {/* Background */}
        <div 
          className="absolute inset-0 z-0 opacity-80"
          data-strk-bg-id="hero-bg-velmora-main"
          data-strk-bg="gold jewelry necklace on woman editorial lighting warm minimalist"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-[1]" />

        <div className="relative z-10 max-w-3xl text-white pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p id="hero-subhead" className="text-[10px] uppercase font-bold tracking-[0.5em] mb-6 opacity-60">
              Quiet Luxury · Demi-Fine
            </p>
          </motion.div>
          
          <motion.h1 
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-8xl font-serif font-medium mb-10 leading-[1.05]"
          >
            Crafted to be <br /> <span className="italic font-light opacity-90">Treasured</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <Link to="/shop" className="w-full sm:w-auto">
              <Button size="lg" variant="premium" className="w-full sm:w-auto px-12 py-8 bg-white text-black hover:bg-neutral-200">
                Shop the Collection
              </Button>
            </Link>
            <Link to="/about" className="text-[10px] font-bold uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-all">
              Our Philosophy
            </Link>
          </motion.div>
        </div>
        
        {/* Transition Bar */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-[5]" />

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-6 z-10"
        >
           <span className="text-[9px] uppercase tracking-[0.3em] vertical-text rotate-180">Scroll</span>
           <div className="w-[1px] h-16 bg-white/30 relative">
             <motion.div 
               animate={{ y: [0, 64, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-0 left-0 w-full h-4 bg-white" 
             />
           </div>
        </motion.div>
    </section>
  );
};

export default HomeHero;
