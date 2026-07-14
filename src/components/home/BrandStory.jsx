import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/3] bg-cream overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-j0k1l2"
              data-strk-img="[brand-story-desc] [brand-story-title] jewelry artisan crafting gold"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
              A Legacy of Quiet Luxury
            </h2>
            <p id="brand-story-desc" className="mt-6 text-stone leading-relaxed">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't require a fortune. 
              Each piece is thoughtfully designed in our studio, crafted with 18K gold plating over 
              hypoallergenic metals, and finished by hand to ensure every detail is perfect.
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              We believe in jewelry that tells a story — pieces you'll reach for every morning, 
              that become part of your signature, that you'll one day pass along.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-gold text-sm uppercase tracking-widest font-medium hover:text-gold-dark transition-colors no-underline border-b border-gold pb-0.5"
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
