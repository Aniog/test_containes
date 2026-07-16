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
    <section ref={containerRef} className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-24">
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden">
            <div
              data-strk-bg-id="brand-story-bg"
              data-strk-bg="elegant woman wearing minimalist gold jewelry looking away [story-title] editorial photography"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="1200"
              className="w-full h-full bg-cover bg-center"
            />
          </div>
          
          <div className="space-y-8 max-w-lg">
            <h2 id="story-title" className="text-4xl md:text-5xl font-serif leading-tight">
              Quiet luxury, <br /> designed for her.
            </h2>
            <p className="text-muted-foreground font-serif text-lg leading-relaxed italic">
              "We believe jewelry should be more than an accessory—it should be a treasure that tells your story."
            </p>
            <div className="space-y-6 text-sm leading-relaxed text-stone-600">
              <p>
                VELMORA was born from a desire to create demi-fine jewelry that bridges the gap between fast fashion and fine jewelry. Our pieces are crafted with 18K gold plating over jewelers' brass, ensuring a premium feel and lasting radiance without the luxury markup.
              </p>
              <p>
                Each design is meticulously detailed, inspired by vintage heirlooms and modern silhouettes, creating a collection that is both timeless and strikingly current.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block text-xs tracking-[0.2em] font-medium uppercase border-b border-accent pb-1 hover:text-accent transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
