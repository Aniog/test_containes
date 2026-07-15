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
    <section ref={containerRef} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[3/4] overflow-hidden rounded-sm">
            <img
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
              data-strk-img-id="brand-story-img-u1v2w3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Story</p>
            <h2 id="brand-story-title" className="serif-heading text-4xl md:text-5xl mb-6 leading-tight">
              Jewelry That Tells<br />Your Story
            </h2>
            <div className="w-12 h-px bg-primary mb-6" />
            <p id="brand-story-desc" className="text-muted-foreground leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune. We create demi-fine pieces using 18K gold plating over quality brass, designed to look and feel luxurious without the luxury markup.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every piece is hypoallergenic, thoughtfully designed, and crafted to become a part of your everyday ritual. From morning meetings to evening dinners, Velmora jewelry moves with you.
            </p>
            <Link to="/about" className="btn-outline">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
