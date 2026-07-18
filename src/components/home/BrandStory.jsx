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
    <section ref={containerRef} className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="aspect-[4/5] bg-gray-100 overflow-hidden order-2 md:order-1">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="jewelry artisan workshop tools gold luxury"
            data-strk-img-ratio="4x5"
            data-strk-img-width="800"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            alt="Our Workshop"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-600 font-bold mb-4 block">Our Heritage</span>
          <h2 className="text-3xl md:text-5xl font-serif text-luxury-black mb-8 leading-tight tracking-wide">
            Designed to tell <br />your story.
          </h2>
          <div className="text-luxury-black/70 space-y-6 text-sm md:text-base font-light leading-relaxed mb-10">
            <p>Velmora was founded on the belief that fine jewelry shouldn't be reserved for special occasions. It should be a part of your daily ritual, reflecting your inner strength and grace.</p>
            <p>Each piece in our collection is thoughtfully crafted using responsibly sourced 18K gold plating over sterling silver or high-grade brass, ensuring lasting brilliance and hypoallergenic comfort.</p>
          </div>
          <Link to="/about" className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold border-b border-luxury-black pb-2 hover:text-gold-600 hover:border-gold-600 transition-all">
            Discover Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
