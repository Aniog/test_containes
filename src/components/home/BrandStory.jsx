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
      className="py-20 md:py-0 bg-cream"
    >
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:min-h-[560px]">
        {/* Image side */}
        <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
            data-strk-img-id="brand-story-img-s1t2u3"
            data-strk-img="[brand-story-desc] [brand-story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            alt="Velmora brand story"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Text side */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
          <p className="text-xs uppercase tracking-widest font-sans text-gold mb-4">Our Story</p>
          <h2
            id="brand-story-title"
            className="font-serif text-3xl md:text-4xl text-velvet font-light leading-snug mb-6"
          >
            Made with intention.<br />
            <em className="italic">Worn with love.</em>
          </h2>
          <p
            id="brand-story-desc"
            className="font-sans text-mink text-sm leading-relaxed mb-4"
          >
            Velmora was born from a simple belief: that beautiful jewelry shouldn't require a special occasion. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
          </p>
          <p className="font-sans text-mink text-sm leading-relaxed mb-8">
            Every piece is crafted in 18K gold-plated brass, hypoallergenic and built to last. We believe in accessible luxury — jewelry that feels precious without the precious price tag.
          </p>
          <Link
            to="/#about"
            className="self-start text-xs uppercase tracking-widest font-sans font-medium text-velvet border-b border-velvet pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
