import React, { useEffect, useRef } from 'react';
import { ugcItems } from '@/data/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReel = () => {
  const sectionRef = useScrollReveal(0.1);
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef} className="reveal py-16 md:py-24 overflow-hidden">
      <div ref={containerRef}>
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-mega-wide text-gold mb-2">Community</p>
              <h2 className="heading-serif text-2xl md:text-4xl text-brand-50">Worn & Loved</h2>
            </div>
            <a href="#" className="text-xs uppercase tracking-wider text-brand-400 hover:text-gold transition-colors hidden md:block">
              Follow @velmora &rarr;
            </a>
          </div>
        </div>

        {/* Scrollable reel */}
        <div
          ref={scrollRef}
          className="flex gap-4 px-6 md:px-10 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56 relative overflow-hidden group"
              style={{ scrollSnapAlign: 'start', aspectRatio: '9/16' }}
            >
              <img
                data-strk-img-id={item.id}
                data-strk-img={`[ugc-caption-${item.id}] gold jewelry woman wearing`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              {/* Caption */}
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-base text-brand-100 italic"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
