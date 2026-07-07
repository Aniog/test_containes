import React, { useRef, useEffect } from 'react';
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/5] bg-gray-200 overflow-hidden rounded-sm relative z-10">
            <img
              alt="Brand Story"
              data-strk-img-id="brand-story-img"
              data-strk-img="[story-title] [story-desc] atelier gold jewelry making process aesthetic luxury"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-80 border-2 border-velmora-gold/20 -z-0 hidden lg:block" />
        </div>

        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-[0.4em] text-velmora-gold">Our Philosophy</h2>
            <h3 id="story-title" className="text-4xl md:text-5xl font-serif leading-tight">
              Honoring the Art of Self-Expression
            </h3>
          </div>
          
          <p id="story-desc" className="text-charcoal/70 leading-relaxed text-lg font-light">
            Founded on the belief that jewelry should be both meaningful and accessible, Velmora creates timeless pieces that celebrate your individuality. We combine traditional craftsmanship with modern design to bring you demi-fine essentials that transition seamlessly from day to night.
          </p>
          
          <div className="pt-4">
            <Link to="/about" className="link-underline text-sm uppercase tracking-velmora font-semibold inline-block pb-1">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
