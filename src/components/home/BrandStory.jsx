import React, { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-muted overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-k2l3m4"
              data-strk-img="[brand-story-heading] [brand-story-text] artisan jewelry crafting gold"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4 md:py-8">
            <p className="text-xs tracking-widest uppercase text-gold font-medium mb-4">Our Story</p>
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl text-charcoal font-medium leading-snug">
              Where Timeless Craft Meets Modern Elegance
            </h2>
            <p id="brand-story-text" className="mt-6 text-sm md:text-base text-muted-fg leading-relaxed">
              Born from a belief that luxury should be accessible, Velmora creates demi-fine jewelry 
              that bridges the gap between everyday and extraordinary. Each piece is thoughtfully 
              designed and meticulously crafted with 18K gold plating over hypoallergenic metals — 
              so you never have to choose between beauty and comfort.
            </p>
            <p className="mt-4 text-sm md:text-base text-muted-fg leading-relaxed">
              We believe jewelry should tell your story. Whether it's a gift for someone you love 
              or a treat for yourself, every Velmora piece is crafted to be treasured for years to come.
            </p>
            <button className="mt-8 border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-gold hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
