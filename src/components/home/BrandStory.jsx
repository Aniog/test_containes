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
    <section ref={containerRef} className="py-24 bg-white border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-1/2 aspect-[3/4] md:aspect-[4/5] overflow-hidden relative">
            <span id="brand-story-query" className="hidden">jewelry designer at work workshop gold jewelry craftsmanship aesthetic</span>
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-query]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt="Our Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <span className="text-primary title-uppercase block mb-6">Designed in London</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Quiet luxury, <br />
              <span className="italic">defined by شما</span>
            </h2>
            <div className="font-sans font-light text-muted-foreground space-y-6 text-lg leading-relaxed mb-10">
              <p>
                Velmora was founded on the belief that luxury shouldn't be reserved for special occasions. We create demi-fine jewelry that bridges the gap between high-end fine jewelry and everyday accessories.
              </p>
              <p>
                Our pieces are crafted using 18K gold plating over recycled brass, ensuring a premium feel and lasting quality that honors both you and the earth. Each design is an editorial statement, balanced by timeless silhouettes.
              </p>
            </div>
            <Link to="/about" className="inline-block title-uppercase border-b border-primary pb-1 text-sm text-primary hover:text-primary/70 hover:border-primary/50 transition-editorial">
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
