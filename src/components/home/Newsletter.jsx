import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Newsletter = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto rounded-sm overflow-hidden relative min-h-[400px] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-charcoal/30"
          data-strk-bg-id="newsletter-bg"
          data-strk-bg="aesthetic calm luxury gold jewelry background texture silk"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        
        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white p-8 md:p-16 max-w-2xl bg-charcoal/20 backdrop-blur-sm border border-white/10 rounded-sm">
          <h2 className="text-sm uppercase tracking-[0.4em] mb-4">The Velmora Letter</h2>
          <h3 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
            Join for 10% off your first order
          </h3>
          <p className="text-white/80 font-light mb-8 text-sm md:text-base leading-relaxed">
            Be the first to know about new arrivals, limited-edition collections, and our latest journal entries.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white border border-transparent py-4 px-6 text-charcoal focus:ring-2 focus:ring-velmora-gold outline-none transition-all"
              required
            />
            <button 
              type="submit" 
              className="btn-primary flex-shrink-0"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
