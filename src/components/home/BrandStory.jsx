import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] bg-stone-200">
              <img
                alt="Velmora brand aesthetic"
                className="absolute inset-0 w-full h-full object-cover"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id="brand-story-img"
                data-strk-img="[story-title] jewelry craftsmanship"
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-widest text-stone-500 mb-4 block">Our Story</span>
            <h2 id="story-title" className="text-4xl font-serif text-stone-900 leading-tight mb-8">
              Redefining the <br/><span className="italic">Everyday Heirloom</span>
            </h2>
            
            <div className="space-y-6 text-stone-600 leading-relaxed font-light mb-10">
              <p>
                Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions or locked away in safes. We create pieces designed to be lived in, layered, and loved every single day.
              </p>
              <p>
                By working directly with master jewelers and utilizing premium 18k gold vermeil over sterling silver, we bridge the gap between inaccessible fine jewelry and disposable fashion pieces. The result is enduring quality, exceptional design, and accessible luxury.
              </p>
            </div>

            <div>
              <Link 
                to="/about" 
                className="inline-block border border-stone-300 px-8 py-3 text-sm uppercase tracking-widest text-stone-900 hover:border-stone-900 transition-colors"
              >
                Discover Velmora
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandStory;
