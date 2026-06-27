import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { REELS } from '@/data/products';

export default function ReelStrip() {
  const scrollerRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateButtons = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    updateButtons();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);
    return () => {
      el.removeEventListener('scroll', updateButtons);
      window.removeEventListener('resize', updateButtons);
    };
  }, []);

  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * dir;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section id="reels" className="bg-cream py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
          <div>
            <p className="eyebrow mb-4">From the Community</p>
            <h2
              id="reels-title"
              className="font-serif text-ink text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.05]"
            >
              <span className="editorial italic font-normal">Worn</span>, not styled
            </h2>
            <p
              id="reels-subtitle"
              className="text-sm md:text-base text-charcoal mt-5 max-w-lg leading-relaxed"
            >
              Real moments from the women who wear Velmora — in their kitchens, at brunch, in golden hour.
            </p>
          </div>

          {/* Scroll controls (desktop) */}
          <div className="hidden md:flex items-center gap-2 self-end">
            <button
              type="button"
              aria-label="Scroll left"
              disabled={!canLeft}
              onClick={() => scrollBy(-1)}
              className="w-11 h-11 border border-hairline flex items-center justify-center text-ink hover:border-ink disabled:opacity-30 disabled:hover:border-hairline transition-colors"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              disabled={!canRight}
              onClick={() => scrollBy(1)}
              className="w-11 h-11 border border-hairline flex items-center justify-center text-ink hover:border-ink disabled:opacity-30 disabled:hover:border-hairline transition-colors"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroller */}
      <div
        ref={scrollerRef}
        className="no-scrollbar overflow-x-auto scroll-smooth pl-6 md:pl-10 lg:pl-16"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        <ul className="flex gap-5 md:gap-6 pr-6 md:pr-10 lg:pr-16">
          {REELS.map((reel, i) => (
            <li
              key={reel.id}
              className="relative flex-shrink-0 w-[60vw] sm:w-[260px] md:w-[280px] aspect-[9/16] overflow-hidden bg-ink group"
              style={{ scrollSnapAlign: 'start' }}
            >
              <img
                alt={reel.caption}
                data-strk-img-id={`reel-${reel.id}`}
                data-strk-img={`[reel-${reel.id}-caption] [reel-${reel.id}-handle] [reels-title] [reels-subtitle]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="540"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Soft dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-ink/0 to-ink/70 pointer-events-none" />

              {/* Play badge top-right */}
              <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-cream/90 px-2.5 py-1 text-[10px] tracking-[0.18em] uppercase text-ink">
                <Play className="w-2.5 h-2.5 fill-current" strokeWidth={0} />
                Reel
              </span>

              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <p
                  id={`reel-${reel.id}-caption`}
                  className="font-serif text-cream text-xl md:text-2xl leading-tight"
                >
                  {reel.caption}
                </p>
                <p
                  id={`reel-${reel.id}-handle`}
                  className="label-light text-cream/70 mt-2"
                >
                  {reel.handle}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}