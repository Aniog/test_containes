import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-stone-50 overflow-hidden" ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto h-[500px] md:h-auto overflow-hidden">
          <img 
            data-strk-img-id="brand-story-img"
            data-strk-img="[story-title] jewelry artisan workspace gold"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-24 md:p-24 lg:p-32 bg-stone-50">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400 mb-8">Established 2024</p>
          <h2 id="story-title" className="text-4xl lg:text-5xl font-serif mb-8 leading-tight">Quiet luxury, <br/>made accessible.</h2>
          <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-lg mb-12">
            <p>
              Velmora was born from a simple desire: to create demi-fine jewelry that feels like an heirloom, without the heritage markup. 
            </p>
            <p>
              Every piece is designed in our London studio, crafted with 18k gold plating on responsibly sourced metals, and intended to be worn, loved, and passed down.
            </p>
          </div>
          <Link to="/about">
            <Button variant="outline" className="rounded-none px-12 py-8 text-xs uppercase tracking-widest h-auto border-stone-300 hover:bg-stone-200 hover:text-stone-900 bg-transparent">
              Our Story
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
