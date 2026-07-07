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
      className="py-20 md:py-0 bg-ivory-dark"
    >
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Image */}
        <div className="relative overflow-hidden md:aspect-auto aspect-[4/3]" style={{ minHeight: '480px' }}>
          <img
            data-strk-img-id="brand-story-img-b1c2d3"
            data-strk-img="[brand-story-text] [brand-story-headline] gold jewelry artisan crafted"
            data-strk-img-ratio="3x4"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
          {/* Subtle gold frame accent */}
          <div className="absolute inset-4 border border-gold/20 pointer-events-none" />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-gold mb-4">
            Our Story
          </p>
          <h2
            id="brand-story-headline"
            className="font-serif text-4xl md:text-5xl text-charcoal font-light leading-tight mb-6"
          >
            Made for the<br />
            <em className="italic">Everyday Ritual</em>
          </h2>
          <div className="w-10 h-px bg-gold/40 mb-8" />
          <p
            id="brand-story-text"
            className="font-sans text-sm text-charcoal-soft leading-relaxed mb-4"
          >
            Velmora was born from a simple belief: that beautiful jewelry shouldn't be saved for special occasions. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
          </p>
          <p className="font-sans text-sm text-charcoal-soft leading-relaxed mb-10">
            Every piece is crafted in 18K gold plate over sterling silver, hypoallergenic and built to last. Because you deserve jewelry that keeps up with your life.
          </p>
          <Link
            to="#"
            className="inline-flex items-center gap-3 text-xs font-sans uppercase tracking-widest text-charcoal hover:text-gold transition-colors group"
          >
            Read Our Story
            <div className="w-8 h-px bg-charcoal group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
