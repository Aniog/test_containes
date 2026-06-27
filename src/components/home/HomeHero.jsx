import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const HomeHero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if(strkImgConfig) {
             return ImageHelper.loadImages(strkImgConfig, containerRef.current);
        }
    }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-[var(--color-brand-stone)]"
        data-strk-bg-id="hero-bg-velmora"
        data-strk-bg="[hero-headline] warm lighting jewelry editorial"
        data-strk-bg-ratio="16x9"
      >
         <div className="absolute inset-0 bg-black/20" /> {/* Subtle overlay for text readability */}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-40 pb-20 flex flex-col justify-center min-h-[90vh]">
        <div className="max-w-7xl mx-auto w-full text-center mt-32">
          <h1 id="hero-headline" className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-sm">
            Crafted to be <br/><i className="font-light">Treasured</i>
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto font-light tracking-wide drop-shadow-sm">
            Demi-fine gold jewelry for the modern muse. Everyday luxury that tells your story.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-[var(--color-brand-sand)] text-[var(--color-brand-charcoal)] px-10 py-4 uppercase tracking-[0.2em] text-sm font-medium hover:bg-[var(--color-brand-gold)] hover:text-white transition-all duration-300 shadow-lg"
          >
            Shop The Collection
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;