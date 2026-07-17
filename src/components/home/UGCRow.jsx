import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ugcItems = [
  { img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80', caption: 'Layered & luminous' },
  { img: 'https://images.unsplash.com/photo-1624623278313-a930126a11c3?w=400&q=80', caption: 'Everyday gold' },
  { img: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80', caption: 'Pearl moments' },
  { img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80', caption: 'Stack & shine' },
  { img: 'https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=400&q=80', caption: 'Statement florals' },
  { img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80', caption: 'Golden hour' },
];

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-sand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] tracking-ultra uppercase text-warm-gray mb-3">Styled by You</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">Worn &amp; Loved</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="p-2 border border-sand text-warm-gray hover:text-charcoal hover:border-charcoal transition-colors rounded-full"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              className="p-2 border border-sand text-warm-gray hover:text-charcoal hover:border-charcoal transition-colors rounded-full"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-6 lg:px-12 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[220px] md:w-[260px] snap-start group cursor-pointer"
          >
            <div className="relative aspect-[9/16] bg-sand rounded-lg overflow-hidden">
              <img
                src={item.img}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-cream text-sm italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
