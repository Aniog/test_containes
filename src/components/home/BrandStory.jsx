import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion } from 'framer-motion';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-velmora-stone/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="aspect-[4/5] bg-velmora-stone overflow-hidden"
        >
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-title] jewelry craftsmanship hands gold working"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            className="w-full h-full object-cover"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Craftsmanship"
          />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-xs uppercase tracking-widest font-medium mb-4 text-velmora-gold">Our Philosophy</h2>
          <h3 id="story-title" className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            Quiet luxury, made accessible.
          </h3>
          <p className="text-lg font-light text-velmora-charcoal/70 mb-8 leading-relaxed">
            Velmora was born from the belief that fine craftsmanship shouldn't be reserved for special occasions. We create demi-fine pieces that bridge the gap between costume and couture—quality gold-plated jewelry designed to withstand the rhythm of your everyday life.
          </p>
          <Link 
            to="/about"
            className="text-xs uppercase tracking-widest font-bold border-b-2 border-velmora-gold pb-1 hover:border-velmora-onyx transition-colors"
          >
            Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
