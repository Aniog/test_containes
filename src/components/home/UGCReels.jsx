import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reels = [
  { id: 1, caption: 'Everyday gold elegance', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80' },
  { id: 2, caption: 'Stacking made simple', img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80' },
  { id: 3, caption: 'Gift-worthy moments', img: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&q=80' },
  { id: 4, caption: 'Minimal, yet bold', img: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80' },
  { id: 5, caption: 'Worn by you', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80' },
  { id: 6, caption: 'Timeless layers', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80' },
];

export default function UGCReels() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-surface-muted">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted mb-2">@velmorajewelry</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light">Styled by You</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll(-1)} className="w-10 h-10 border border-border flex items-center justify-center hover:border-foreground transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={() => scroll(1)} className="w-10 h-10 border border-border flex items-center justify-center hover:border-foreground transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-5 md:px-8 pb-4 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] relative rounded-lg overflow-hidden group cursor-pointer"
            style={{ scrollSnapAlign: 'start' }}
          >
            <img
              src={reel.img}
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-4 right-4 font-serif text-white text-base md:text-lg leading-snug">
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
