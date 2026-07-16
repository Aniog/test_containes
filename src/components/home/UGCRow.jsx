import { useRef, useEffect, useState } from 'react';
import { ugcItems } from '@/data/products';

export default function UGCRow() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.addEventListener('scroll', checkScroll, { passive: true });
    return () => el?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: 'smooth' });
  };

  return (
    <section className="bg-deep-bronze py-16 md:py-24 overflow-hidden">
      <div className="text-center mb-10 md:mb-14 px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-gold-light/70 mb-3">
          As Seen On You
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-cream font-normal">
          Styled by Velmora
        </h2>
        <div className="w-12 h-px bg-gold/60 mx-auto mt-6" />
      </div>

      {/* Scrollable row */}
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-12">
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-2 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="shrink-0 w-[160px] md:w-[220px] snap-start"
            >
              <div className="aspect-[9/16] bg-deep-bronze/50 rounded-sm overflow-hidden relative group">
                <img
                  data-strk-img-id={`ugc-${item.id}`}
                  data-strk-img={`[ugc-caption-${item.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-soft-black/60 via-transparent to-transparent" />
                <p
                  id={`ugc-caption-${item.id}`}
                  className="absolute bottom-3 left-3 right-3 text-cream font-serif text-xs italic leading-snug"
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll arrows - desktop */}
        <button
          onClick={() => scroll(-1)}
          className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center bg-cream/90 rounded-full shadow-md transition-opacity duration-300 ${
            canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <svg className="w-4 h-4 text-soft-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll(1)}
          className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center bg-cream/90 rounded-full shadow-md transition-opacity duration-300 ${
            canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <svg className="w-4 h-4 text-soft-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
