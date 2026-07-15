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
    <section ref={containerRef} className="py-20 md:py-28 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Image */}
          <div className="aspect-[4x5] overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="brand-story-img-d7e8f9"
              data-strk-img="[brand-story-text] [brand-story-heading] gold jewelry craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="font-sans text-[11px] tracking-super-wide uppercase text-brand-gold mb-3">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-brand-charcoal"
            >
              Crafted with
              <br />
              Intention
            </h2>
            <div className="w-12 h-px bg-brand-gold mt-4 mb-6" />
            <p
              id="brand-story-text"
              className="font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that fine jewelry shouldn't be reserved for special occasions. 
              Every piece in our collection is designed to be worn, loved, and lived in — crafted with the same 
              attention to detail as traditional fine jewelry, but at a price that makes everyday luxury possible.
            </p>
            <p className="font-sans text-sm md:text-base text-brand-muted leading-relaxed mb-8">
              Each design begins as a hand-sculpted prototype, refined until every curve and facet feels just right. 
              We use 18K gold plating over solid brass, ensuring durability and that unmistakable warm glow.
            </p>
            <Link to="/" className="outline-button inline-block">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
