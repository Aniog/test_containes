import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcReels } from '@/data/products';
import StrkImage from '@/components/ui/StrkImage';

export function UgcReelsSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 260;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              @velmorajewelry
            </p>
            <h2 className="font-serif text-3xl font-light text-charcoal md:text-4xl">
              Styled by You
            </h2>
          </div>
          <div className="hidden gap-2 md:flex">
            <button
              onClick={() => scroll('left')}
              className="rounded-full border border-taupe/30 p-2 text-charcoal hover:border-gold hover:text-gold transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="rounded-full border border-taupe/30 p-2 text-charcoal hover:border-gold hover:text-gold transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 pb-4 scrollbar-hide md:px-6 lg:px-8"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="relative w-[180px] flex-shrink-0 overflow-hidden rounded-lg md:w-[220px]"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="aspect-[9/16]">
              <StrkImage
                id={`ugc-reel-${reel.id}`}
                query={`[ugc-caption-${reel.id}]`}
                ratio="9x16"
                width={400}
                alt={reel.caption}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-ivory">
              <p
                id={`ugc-caption-${reel.id}`}
                className="font-serif text-sm font-light italic leading-snug"
              >
                “{reel.caption}”
              </p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-widest text-gold-light">
                {reel.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
