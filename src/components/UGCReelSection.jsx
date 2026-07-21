import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCReelSection() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-charcoal overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-velmora-gold mb-2">
              Real Women, Real Style
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream">
              Styled by You
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-velmora-stone text-velmora-cream hover:border-velmora-gold hover:text-velmora-gold transition-colors flex items-center justify-center"
              aria-label="Scroll left"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-velmora-stone text-velmora-cream hover:border-velmora-gold hover:text-velmora-gold transition-colors flex items-center justify-center"
              aria-label="Scroll right"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-6 lg:px-10 pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item, i) => {
          const titleId = `ugc-title-${item.id}`;
          const imgId = `ugc-img-${item.id}`;
          return (
            <div
              key={item.id}
              className="relative shrink-0 w-[220px] md:w-[260px] aspect-[9/16] overflow-hidden snap-start group cursor-pointer"
            >
              <img
                data-strk-img-id={imgId}
                data-strk-img={`[${titleId}] gold jewelry woman earring necklace elegant`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-4 right-4">
                <p
                  id={titleId}
                  className="font-serif text-lg text-white italic leading-snug"
                >
                  {item.caption}
                </p>
                <p className="mt-1 text-[11px] text-white/70 font-sans uppercase tracking-widest">
                  @{['velmora.style', 'goldmoment', 'jewelryedit', 'daintyvibes', 'velmora.girl', 'selfluxury'][i]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
