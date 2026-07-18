import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Newsletter = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 text-white">
      <div className="max-w-5xl mx-auto bg-luxury-black p-12 md:p-20 text-center relative overflow-hidden group">
        <div
          className="absolute inset-0 opacity-20 transition-transform duration-1000 group-hover:scale-110"
          data-strk-bg-id="newsletter-bg"
          data-strk-bg="jewelry gold aesthetic background"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1200"
        />

        <div className="relative z-10">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-6 block">The Inner Circle</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-8 tracking-wider uppercase">Join for 10% Off</h2>
          <p className="text-white/70 text-sm md:text-base mb-12 max-w-md mx-auto font-light leading-relaxed">
            Beautiful rewards and exclusive access. Enter your email to receive 10% off your first order.
          </p>

          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="flex-1 bg-white/10 border border-white/20 px-6 py-4 text-[10px] tracking-widest placeholder:text-white/40 focus:outline-none focus:border-white transition-colors text-white"
            />
            <button className="bg-white text-luxury-black px-10 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gold-600 hover:text-white transition-all duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
