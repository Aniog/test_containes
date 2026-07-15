import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-r1s2t3"
              data-strk-img="[brand-story-desc] [brand-story-title] artisan gold jewelry craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Our story"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-widest text-gold font-medium mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light leading-snug mb-6">
              Designed with Intention, Crafted with Care
            </h2>
            <p id="brand-story-desc" className="text-stone leading-relaxed mb-6">
              At Velmora, we believe luxury should be accessible. Each piece in our collection is thoughtfully designed 
              and meticulously crafted using 18K gold plating over hypoallergenic metals — so you can wear beautiful 
              jewelry every day without compromise.
            </p>
            <p className="text-stone leading-relaxed mb-8">
              From our studio to your jewelry box, every detail matters. We source responsibly, design intentionally, 
              and create pieces meant to be treasured for years to come.
            </p>
            <span className="inline-block text-sm uppercase tracking-widest text-gold font-medium border-b border-gold pb-1 cursor-pointer hover:text-gold-dark hover:border-gold-dark transition-colors self-start">
              Read Our Story
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
