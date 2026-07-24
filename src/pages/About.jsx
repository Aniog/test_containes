import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
const About = () => {
  const containerRef = useRef(null);
  useEffect(() => {
     return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);
  return (
    <div ref={containerRef} className="pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 uppercase tracking-wider">Our Story</h1>
        <div className="aspect-[16/9] mb-12 bg-stone-100 overflow-hidden">
          <img 
            data-strk-img-id="about-hero"
            data-strk-img="gold jewelry designer brand philosophy studio"
            data-strk-img-ratio="16/9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="About Velmora"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-xl font-light leading-relaxed text-stone-600">
          Velmora was born from a simple desire: to create jewelry that feels like a second skin. 
          We believe in the power of subtle details and the enduring beauty of demi-fine gold. 
          Every piece in our collection is a testament to timeless design and quality craftsmanship.
        </p>
      </div>
    </div>
  );
};
export default About;
