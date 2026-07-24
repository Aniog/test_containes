import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const BrandStory = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" className="bg-linen">
      <div ref={containerRef} className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[560px]">
            <img
              data-strk-img-id="brand-story-img-a1b2c3"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-5">
                Our Story
              </p>
              <h2
                id="brand-story-title"
                className="font-serif text-4xl md:text-5xl text-ink font-300 leading-tight mb-6"
              >
                Made with intention,<br />
                <em className="not-italic text-gold">worn with love</em>
              </h2>
              <p
                id="brand-story-desc"
                className="font-sans text-sm text-muted leading-relaxed mb-4"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We design demi-fine pieces that move with you — from morning coffee to candlelit dinners.
              </p>
              <p className="font-sans text-sm text-muted leading-relaxed mb-8">
                Every piece is crafted in 18K gold-plated brass, hypoallergenic and built to last. We believe in accessible luxury — jewelry that feels precious without the precious price tag.
              </p>
              <Link
                to="#"
                className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-ink border-b border-ink pb-0.5 hover:text-gold hover:border-gold transition-colors"
              >
                Read Our Story
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
