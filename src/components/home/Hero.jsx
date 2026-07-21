import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        data-strk-bg-id="hero-bg-9a2b1c"
        data-strk-bg="[hero-subtitle] [hero-title] model wearing gold jewelry warm editorial lighting close up"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] hover:scale-105"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 id="hero-title" className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-tight">
            Crafted to be Treasured
          </h1>
          <p id="hero-subtitle" className="text-base md:text-lg text-white/90 font-light tracking-wide max-w-xl mx-auto border-t border-white/20 pt-6">
            Discover our curated collection of demi-fine gold jewelry, designed for everyday luxury and timeless elegance.
          </p>
          <div className="pt-8 flex flex-col sm:row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/shop">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-7 text-xs font-bold tracking-[0.2em] rounded-none shadow-xl border-none">
                SHOP THE COLLECTION
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 px-10 py-7 text-xs font-bold tracking-[0.2em] rounded-none">
                OUR STORY
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50"
      >
        <div className="w-[1px] h-12 bg-white" />
        <span className="text-[10px] text-white tracking-[0.3em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
