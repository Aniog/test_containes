import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const ugcCards = [
  {
    id: 'ugc-1',
    caption: '"My everyday gold stack"',
    query: 'gold jewelry ear stack model close up vertical',
  },
  {
    id: 'ugc-2',
    caption: '"Layered perfection"',
    query: 'layered gold necklace model vertical portrait',
  },
  {
    id: 'ugc-3',
    caption: '"Huggies for days"',
    query: 'gold huggie earrings model ear close up vertical',
  },
  {
    id: 'ugc-4',
    caption: '"The gift she actually wanted"',
    query: 'woman wearing gold jewelry gift happy vertical',
  },
  {
    id: 'ugc-5',
    caption: '"Minimal but makes a statement"',
    query: 'minimal gold jewelry model elegant vertical',
  },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-16 bg-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-xs tracking-widest uppercase text-accent text-center mb-2">As Worn By You</p>
        <h2 className="serif-heading text-2xl md:text-3xl text-center">The Velmora Edit</h2>
      </div>

      <div className="flex gap-4 px-4 sm:px-6 lg:px-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcCards.map(card => (
          <div
            key={card.id}
            className="flex-shrink-0 w-48 sm:w-56 snap-start relative group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-surface overflow-hidden rounded-sm">
              <img
                data-strk-img-id={card.id}
                data-strk-img={`[${card.id}-caption] [ugc-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={card.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={`${card.id}-caption`} className="serif-heading text-white text-sm italic leading-relaxed">
                  {card.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
