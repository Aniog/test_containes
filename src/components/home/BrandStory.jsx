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
    <section ref={containerRef} className="py-24 bg-parchment overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 relative w-full aspect-[4/5] lg:aspect-auto lg:h-[700px]">
            <div className="absolute -top-10 -left-10 w-40 h-40 border hairline border-gold/30 z-[1] hidden lg:block" />
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="woman wearing elegant gold jewelry workshop aesthetic"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora Workshop"
              className="w-full h-full object-cover shadow-2xl relative z-[2]"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-stone-muted z-[1] hidden lg:block" />
          </div>

          <div className="flex-1 max-w-xl text-center lg:text-left">
            <span className="text-gold text-[10px] tracking-[0.4em] uppercase mb-6 block">Our Essence</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Quiet Luxury, Crafted for Your Narrative
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed font-light">
              <p>
                At Velmora, we believe that jewelry is more than an adornment — it's a silent lexicon of your journey. 
                Our pieces are designed for the women who find strength in subtlety and beauty in the refined.
              </p>
              <p>
                Each collection is a curated dialogue between classic silhouettes and modern editorial touches, 
                brought to life in premium 18K gold-plated vermeil.
              </p>
            </div>
            <Link 
              to="/about" 
              className="mt-12 inline-block bg-obsidian text-white px-10 py-4 text-xs tracking-[0.3em] font-bold hover:bg-gold transition-all duration-500"
            >
              DISCOVER OUR STORY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
