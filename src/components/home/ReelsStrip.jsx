import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const reels = [
  { id: 'reel-1', caption: 'Everyday gold' },
  { id: 'reel-2', caption: 'Gift-worthy' },
  { id: 'reel-3', caption: 'Stacked hoops' },
  { id: 'reel-4', caption: 'Close-up shine' },
  { id: 'reel-5', caption: 'Soft layers' },
  { id: 'reel-6', caption: 'Moment of light' },
];

const SVG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export function ReelsStrip() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = direction === 'left' ? -280 : 280;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mb-8 flex items-end justify-between">
        <div>
          <p className="text-velmora-stone uppercase tracking-[0.2em] text-sm mb-2">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-espresso">
            On Our Community
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="p-2 border border-velmora-espresso/20 text-velmora-espresso hover:border-velmora-gold hover:text-velmora-gold transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="p-2 border border-velmora-espresso/20 text-velmora-espresso hover:border-velmora-gold hover:text-velmora-gold transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 md:px-6 lg:px-8 pb-4 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-56 aspect-[9/16] overflow-hidden group"
            style={{ scrollSnapAlign: 'start' }}
          >
            <img
              alt={reel.caption}
              data-strk-img-id={`reel-${reel.id}`}
              data-strk-img={`[reel-caption-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src={SVG_PLACEHOLDER}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/70 via-transparent to-transparent" />
            <p
              id={`reel-caption-${reel.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg text-white leading-snug"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
