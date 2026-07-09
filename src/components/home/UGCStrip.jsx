import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '../../data/products';

const ugcImages = [
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=700&fit=crop',
  'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?w=400&h=700&fit=crop',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=700&fit=crop',
  'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=700&fit=crop',
  'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=700&fit=crop',
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=700&fit=crop',
];

export default function UGCStrip() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amount = 280;
      scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-velmora-900 relative overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-overline uppercase tracking-overline text-gold block mb-2">
              #VelmoraStyle
            </span>
            <h2 className="font-serif text-2xl md:text-heading-2 text-white">
              Styled by You
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 border border-velmora-600 text-velmora-300 hover:border-gold hover:text-gold transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 border border-velmora-600 text-velmora-300 hover:border-gold hover:text-gold transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable reels */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-[max(1.5rem,calc((100vw-1400px)/2+3rem))]"
      >
        {ugcItems.map((item, i) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
          >
            <img
              src={ugcImages[i]}
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-950/80 via-transparent to-transparent" />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-base text-white italic leading-snug">
                {item.caption}
              </p>
              <p className="text-[11px] text-velmora-300 mt-1 tracking-wide">
                {item.product}
              </p>
            </div>
            {/* Play icon mimicking reels */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                <path d="M1 1.5L11 7L1 12.5V1.5Z" fill="white" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
