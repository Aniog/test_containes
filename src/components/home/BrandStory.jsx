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
    <section ref={containerRef} className="bg-white">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row min-h-[600px]">
        {/* Image Left */}
        <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="[brand-story-title] woman wearing fine jewelry looking out window warm light"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Brand Story"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Text Right */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-12 md:p-24 lg:p-32 bg-[#FCFBF7]">
          <div className="max-w-md space-y-8 text-center lg:text-left">
            <h2 id="brand-story-title" className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-800 leading-tight">
              Design with Intention
            </h2>
            <p className="font-sans text-slate-500 leading-relaxed text-sm md:text-base">
              Velmora was born from a desire for jewelry that feels personal yet elevated. We believe fine jewelry shouldn't be reserved for milestones alone. 
              <br /><br />
              Each piece is crafted in recycled 18K gold plating over jewelers brass—designed to be lived in, treasured, and passed down. No loud logos, just pure, quiet luxury.
            </p>
            <div>
              <Link 
                to="#" 
                className="inline-block font-sans text-xs uppercase tracking-[0.2em] border-b-[0.5px] border-black pb-2 hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
