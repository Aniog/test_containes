import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-b8c9d0"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="py-4">
            <p className="text-xs uppercase tracking-widest text-gold mb-4">Our Story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-snug"
            >
              Where Timeless Craft Meets Modern Elegance
            </h2>
            <p
              id="brand-story-desc"
              className="text-taupe leading-relaxed mt-6"
            >
              Born from a belief that luxury should be accessible, Velmora creates demi-fine jewelry 
              that bridges the gap between costume and fine. Each piece is thoughtfully designed in our 
              studio, crafted with 18K gold plating over hypoallergenic metals, and finished with the 
              kind of attention to detail you'd expect from pieces costing ten times more.
            </p>
            <p className="text-taupe leading-relaxed mt-4">
              We believe jewelry should be worn every day, not saved for special occasions. 
              That's why we design pieces that are as durable as they are beautiful — meant to 
              become part of your story.
            </p>
            <a
              href="#"
              className="inline-block mt-8 text-sm uppercase tracking-widest text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
