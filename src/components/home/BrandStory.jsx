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
    <section ref={containerRef} className="grid grid-cols-1 md:grid-cols-2">
      <div className="aspect-[4/5] md:aspect-auto relative bg-stone-200">
        <img 
          src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'
          alt="Brand Story"
          className="w-full h-full object-cover"
          data-strk-img-id="story-img"
          data-strk-img="jewelry designer working gold luxury studio warm lighting editorial"
          data-strk-img-ratio="4x5"
          data-strk-img-width="1200"
        />
      </div>
      <div className="flex flex-col justify-center items-start px-8 md:px-24 py-24 bg-white space-y-8">
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-sans">Our Ethos</span>
        <h2 id="story-title" className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
          Modern jewelry with a timeless soul.
        </h2>
        <p className="text-muted-foreground font-sans leading-relaxed max-w-lg">
          Velmora was born from a desire for jewelry that feels personal, premium, and attainable. Our pieces are designed for the modern curator — someone who values both the quality of craftsmanship and the poetry of design. Each piece is crafted with 18K gold plating, intended to be a staple in your collection for years to come.
        </p>
        <Link 
          to="/about" 
          className="inline-block border-b border-foreground pb-1 text-xs uppercase tracking-[0.3em] font-medium hover:text-accent transition-colors"
        >
          Discover Our Story
        </Link>
      </div>
    </section>
  );
};

export default BrandStory;
