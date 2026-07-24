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
    <section className="py-24 px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24 bg-white" ref={containerRef}>
      <div className="w-full md:w-1/2 aspect-[3/4] md:aspect-auto md:h-[700px] bg-velmora-stone relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          data-strk-bg-id="brand-story-img"
          data-strk-bg="fine-jewelry-making-process-hands-gold"
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="1000"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="font-serif text-4xl md:text-6xl tracking-wide mb-8 leading-tight">
          Refinement in <br /> every detail.
        </h2>
        <p className="font-sans text-base md:text-lg opacity-70 leading-relaxed mb-10 max-w-xl">
          Velmora was born from a desire for jewelry that balances high-end craftsmanship with accessible luxury. Each piece is thoughtfully designed to be more than just an accessory—it's a celebration of your unique story.
        </p>
        <Link 
          to="/about" 
          className="btn-outline-premium inline-block"
        >
          Our Story
        </Link>
      </div>
    </section>
  );
};

export default BrandStory;
