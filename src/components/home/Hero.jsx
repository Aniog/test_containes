import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-luxury grayscale-[0.2]"
        data-strk-bg="[hero-headline] close-up gold jewelry on model"
        data-strk-bg-id="hero-bg"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 mt-20">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[10px] sm:text-[12px] uppercase tracking-[0.4em] font-semibold mb-6 text-white/90"
        >
          Fine Jewelry for Daily Luxury
        </motion.p>
        
        <motion.h1 
          id="hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light leading-tight mb-8"
        >
          Crafted to be <br /> <span className="italic">Treasured</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Link 
            to="/shop" 
            className="inline-flex items-center gap-4 bg-white text-[#1A1A1A] px-10 py-4 sm:px-14 sm:py-5 tracking-[0.2em] text-[10px] sm:text-xs font-bold hover:bg-[#C5A059] hover:text-white transition-luxury shadow-xl"
          >
            SHOP THE COLLECTION
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Trust Bar (Floating style for Hero) */}
      <div className="absolute bottom-10 left-0 w-full z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap justify-between gap-4 py-8 border-t border-white/20 backdrop-blur-sm bg-black/5 rounded-t-lg">
             {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((item) => (
                <span key={item} className="text-[9px] uppercase tracking-[0.2em] font-medium text-white/95">
                  {item}
                </span>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
