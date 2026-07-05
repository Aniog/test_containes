import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#F5F2F0]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Left */}
        <div className="relative aspect-[4/5] bg-white overflow-hidden shadow-2xl">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="jewelry designer working in studio hands fine details"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Brand Story"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Right */}
        <div className="space-y-8 max-w-lg">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-accent">Our Heritage</span>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">Elevating the Everyday with Quiet Luxury</h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            Velmora was born from a desire for jewelry that feels as good as it looks. We believe fine design shouldn't be reserved for special occasions. Each piece is crafted from 18K gold-plated vermeil and ethically sourced materials, designed to be stacked, shared, and treasured for years to come.
          </p>
          <div className="pt-4">
            <Button 
              asChild
              variant="outline"
              className="rounded-none border-primary hover:bg-primary hover:text-white px-8 py-6 text-xs tracking-[0.2em] uppercase transition-all duration-300 h-auto"
            >
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
