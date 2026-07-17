import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-32 pb-20 px-6 md:px-12 min-h-screen bg-secondary">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h1 className="text-4xl md:text-7xl font-serif leading-tight">Our Story</h1>
        <div className="aspect-[16/9] bg-white overflow-hidden shadow-lg">
          <img 
            data-strk-img-id="about-hero-img"
            data-strk-img="jewelry studio warm lighting editorial designer crafting jewelry"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
            className="w-full h-full object-cover"
            alt="Velmora Studio"
          />
        </div>
        <div className="space-y-8 text-lg font-serif italic leading-relaxed text-muted max-w-2xl mx-auto">
          <p>
            Velmora was founded on the belief that luxury should be a part of every woman's daily life, 
            not just reserved for special occasions. What started as a small passion project in a sun-drenched 
            studio has grown into a global community of women who value quality and self-expression.
          </p>
          <p>
            Each piece is thoughtfully designed by our all-female team, focusing on comfort, longevity, and 
            that perfect golden glow. We work exclusively with certified artisans who share our commitment 
            to ethical craftsmanship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
