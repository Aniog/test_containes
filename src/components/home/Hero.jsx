import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-subhead] [hero-title] jewelry worn on model close-up warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 w-full h-full bg-charcoal"
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative h-full container mx-auto px-4 md:px-8 flex flex-col justify-center items-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <p id="hero-subhead" className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6 font-semibold">
            The Timeless Collection
          </p>
          <h1 id="hero-title" className="font-serif text-5xl md:text-8xl mb-12 leading-tight">
            Crafted to be <br /> <span className="italic">Treasured</span>
          </h1>
          <Link 
            to="/shop"
            className="inline-block bg-white text-charcoal px-10 py-5 font-sans text-xs tracking-[0.3em] uppercase font-bold hover:bg-gold hover:text-white transition-all duration-500 rounded-sm"
          >
            Shop the Collection
          </Link>
        </motion.div>
      </div>

      {/* Trust bar integrated or separate? The requirement says "thin strip under hero". I'll put it at the bottom of hero or right after. */}
    </section>
  );
};

export default Hero;
