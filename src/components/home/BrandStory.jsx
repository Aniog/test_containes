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
    <section ref={containerRef} className="bg-accent/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="h-[500px] md:h-auto relative overflow-hidden">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="moody aesthetic jewelry studio craftmanship details gold pieces"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop"
            alt="Craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-12 md:p-24 flex flex-col justify-center items-start space-y-8">
          <span className="text-[10px] uppercase letter-spacing-wide text-primary/60">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl leading-tight">Quiet beauty, crafted for your most cherished moments.</h2>
          <p className="text-primary/70 leading-relaxed font-sans font-light">
            Founded on the belief that jewelry should be as enduring as the memories it marks. Velmora pieces are designed in our boutique studio, focusing on timeless silhouettes and ethically sourced materials.
          </p>
          <Link
            to="/about"
            className="text-xs uppercase letter-spacing-wide border-b border-primary pb-1 hover:text-primary/60 hover:border-primary/60 transition-colors"
          >
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
