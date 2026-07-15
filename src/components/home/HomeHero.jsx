import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HomeHero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        data-strk-bg-id="hero-background-main"
        data-strk-bg="[hero-subtitle] [hero-title] jewelry gold model close-up luxury"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 bg-stone-200 bg-cover bg-center"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          id="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-xs md:text-sm uppercase tracking-[0.4em] mb-6 font-medium"
        >
          VELMORA FINE JEWELRY
        </motion.p>
        
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white text-4xl md:text-7xl lg:text-8xl font-serif tracking-[0.05em] mb-8 leading-tight"
        >
          Crafted to be <br /> Treasured
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button 
            asChild
            className="bg-accent hover:bg-accent/90 text-white rounded-none h-14 px-10 tracking-[0.2em] uppercase text-xs transition-all duration-300 shadow-xl"
          >
            <Link to="/shop">Shop the Collection</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/60 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-white/30 relative">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-4 bg-white"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
