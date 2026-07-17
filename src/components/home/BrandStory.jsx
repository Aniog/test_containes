import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BrandStory = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
      <div className="w-full md:w-1/2 relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full bg-cover bg-center"
          data-strk-bg="elegant woman wearing gold jewelry artisanal workshop soft lighting"
          data-strk-bg-id="brand-story-img"
          data-strk-bg-ratio="4x5"
          data-strk-bg-width="1000"
        />
        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-velmora-surface z-[-1] hidden md:block" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-start space-y-8">
        <span className="text-velmora-accent uppercase tracking-widest text-[10px] font-bold">Our Philosophy</span>
        <h2 className="text-4xl md:text-5xl font-serif italic leading-tight">Quiet Luxury, <br />Crafted for You</h2>
        <div className="w-16 h-[1px] bg-velmora-accent" />
        <p className="text-velmora-muted leading-relaxed font-light text-lg">
          At Velmora, we believe that luxury doesn't have to be loud. Our demi-fine collections are designed for the woman who finds beauty in the details. 
          <br /><br />
          Using high-quality 18K gold vermeil and ethically sourced crystals, every piece is a tribute to timeless elegance and modern resilience.
        </p>
        <Link 
          to="/about" 
          className="inline-block border border-velmora-primary px-10 py-4 uppercase-spacing text-xs font-bold hover:bg-velmora-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
        >
          Our Story
        </Link>
      </div>
    </section>
  );
};

export default BrandStory;
