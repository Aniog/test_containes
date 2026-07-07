import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reels = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    caption: 'Everyday luxury',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600&q=80',
    caption: 'Golden hour glow',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80',
    caption: 'Layered stories',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
    caption: 'Details matter',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    caption: 'Simply stunning',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
    caption: 'Modern heirloom',
  },
];

export default function UGCReels() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-extra-wide text-charcoal-400 mb-2">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal-950 font-light">
            Styled by You
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 border border-charcoal-200 hover:bg-charcoal-100 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 text-charcoal-700" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 border border-charcoal-200 hover:bg-charcoal-100 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 text-charcoal-700" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] rounded-sm overflow-hidden group"
            style={{ scrollSnapAlign: 'start' }}
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-cream-50 text-sm italic">
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
