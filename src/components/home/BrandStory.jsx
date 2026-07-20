import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { motion } from 'framer-motion';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24">
        {/* Image Left */}
        <div className="w-full lg:w-1/2 aspect-[4/5] overflow-hidden bg-velmora-dark/5">
          <img
            data-strk-img-id="brand-story-img"
            data-strk-img="jewelry craftsmanship studio gold hands editorial"
            data-strk-img-ratio="4x5"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            alt="Craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Right */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-velmora-gold font-sans font-semibold">Our Ethos</p>
            <h2 className="font-serif text-4xl md:text-5xl text-velmora-dark leading-tight">Quiet Luxury, <br/>Expertly Crafted</h2>
          </div>
          <p className="text-velmora-muted text-lg font-serif italic leading-relaxed">
            Founded with a vision to create demi-fine jewelry that feels as good as it looks. At Velmora, we believe that true elegance shouldn't be reserved for special occasions—it should be part of the everyday.
          </p>
          <div className="space-y-6 text-velmora-dark/80 font-sans text-sm leading-loose max-w-lg">
            <p>
              Each piece in our collection is meticulously designed in our studio, focusing on sculptural forms, textured finishes, and the warm glow of 18K gold.
            </p>
            <p>
              We source only the highest quality recycled metals and ethically obtained stones, ensuring that your jewelry is as kind to the planet as it is beautiful on your skin.
            </p>
          </div>
          <div className="pt-8">
            <a
              href="/about"
              className="inline-block border-b border-velmora-dark pb-1 uppercase tracking-exclusive text-[11px] font-sans font-semibold hover:text-velmora-gold hover:border-velmora-gold transition-all"
            >
              Learn Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
