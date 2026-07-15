import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { ugcReels } from '@/data/ugc';

export function UgcReelsSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = direction === 'left' ? -320 : 320;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-white border-y border-velmora-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-widest text-velmora-accent mb-3">
            @velmorajewelry
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-ink">
            Styled by You
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 border border-velmora-border hover:border-velmora-ink transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 border border-velmora-border hover:border-velmora-ink transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:px-10 lg:px-14 pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-[240px] md:w-[280px] aspect-[9/16] snap-start group cursor-pointer"
          >
            <img
              src={reel.image}
              alt={reel.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-ink/70 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Play className="w-5 h-5 text-white fill-white ml-1" />
              </div>
            </div>
            <p className="absolute bottom-5 left-5 right-5 font-serif text-lg md:text-xl text-white leading-snug">
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
