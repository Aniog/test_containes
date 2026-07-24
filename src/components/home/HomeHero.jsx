import React, { useEffect, useRef } from 'react';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCartStore } from '@/lib/cart-store';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeHero = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-secondary"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-heading] [hero-subheading]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 text-center text-white px-6 w-full max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] mb-6 font-bold"
          id="hero-subheading"
        >
          New Collection Available
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif mb-8 leading-[1.1]"
          id="hero-heading"
        >
          Crafted to be <br /> <span className="italic">Treasured</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link 
            to="/shop" 
            className="inline-block bg-white text-foreground px-10 py-4 uppercase tracking-[0.2em] text-sm hover:bg-primary hover:text-white transition-all transform hover:scale-105"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
