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
    <section
      id="about"
      ref={containerRef}
      className="py-20 md:py-28 bg-velmora-stone"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                data-strk-img-id="brand-story-img-x9y8z7"
                data-strk-img="[brand-story-text] [brand-story-heading] fine jewelry artisan craftsmanship"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Velmora brand story"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative gold border offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-velmora-gold/30 -z-10 hidden md:block" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-velmora-gold mb-4">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-4xl md:text-5xl font-light text-velmora-ink tracking-wide leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-velmora-gold mb-8" />
            <p
              id="brand-story-text"
              className="font-inter text-sm text-velmora-charcoal leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We create demi-fine pieces designed to be worn every day — to work, to dinner, to wherever life takes you.
            </p>
            <p className="font-inter text-sm text-velmora-charcoal leading-relaxed mb-8">
              Each piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be treasured. We believe in accessible luxury — jewelry that feels like an heirloom without the heirloom price.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 font-inter text-xs tracking-[0.15em] uppercase text-velmora-ink hover:text-velmora-gold transition-colors group"
            >
              Our Story
              <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
