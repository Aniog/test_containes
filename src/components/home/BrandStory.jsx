import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div className="relative aspect-[4/5] bg-zinc-100 overflow-hidden order-2 lg:order-1">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="jewelry designer studio aesthetic tools gold pieces"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Velmora Storefront Interior"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex flex-col gap-8 order-1 lg:order-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold">The Sentiment</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
            Jewelry that tells your unique story.
          </h2>
          <p className="text-zinc-600 leading-relaxed max-w-lg">
            At Velmora, we believe high-end jewelry shouldn't be reserved for special occasions. We create demi-fine pieces using 18k gold plating and precious stones, designed to be worn effortlessly from morning till moon.
          </p>
          <div className="pt-4">
            <Link 
              to="/#about" 
              className="inline-block bg-[#1C1C1C] text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-zinc-800 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
