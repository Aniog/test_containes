import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reels = [
  { caption: 'Everyday elegance', accent: 'Gold' },
  { caption: 'Golden hour glow', accent: 'Rose Gold' },
  { caption: 'Curated layers', accent: 'Gold' },
  { caption: 'Weekend edit', accent: 'Silver' },
  { caption: 'Modern heirloom', accent: 'Gold' },
  { caption: 'Stacked & styled', accent: 'Gold' },
  { caption: 'Minimal muse', accent: 'Silver' },
  { caption: 'Evening light', accent: 'Rose Gold' },
];

export default function UGCRow() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 280, behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-28 bg-sand/30">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-taupe mb-3">Styled by You</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-oxford">As Seen On</h2>
            <div className="mt-4 w-[60px] h-[1px] bg-gold/40" />
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              className="p-2 border border-sand rounded-full text-mocha hover:text-oxford hover:border-mocha/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              className="p-2 border border-sand rounded-full text-mocha hover:text-oxford hover:border-mocha/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-2"
        >
          {reels.map((reel, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[220px] sm:w-[240px] aspect-[9/16] group cursor-pointer relative rounded-sm overflow-hidden"
            >
              {/* Warm gradient background card */}
              <div className="absolute inset-0 bg-gradient-to-b from-mocha/50 via-bronze/20 to-oxford/60" />

              {/* Simulated jewelry glow */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-gold/30 group-hover:border-gold/60 group-hover:scale-110 transition-all duration-500" />
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-gold-light/20 group-hover:border-gold-light/50 -translate-y-3 group-hover:-translate-y-4 transition-all duration-500" />

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-oxford/70 to-transparent">
                <p className="font-serif italic text-sm text-cream tracking-wide">{reel.caption}</p>
                <span className="text-[10px] font-medium tracking-wider uppercase text-gold-light/80 mt-1 block">{reel.accent}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
