import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { UGC_REELS } from '@/data/reviews';
import { useReveal } from '@/hooks/useReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function ReelCard({ reel }) {
  const cardRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  return (
    <article
      ref={cardRef}
      data-strk-img-id={reel.id}
      data-strk-img={reel.query}
      data-strk-img-ratio="9x16"
      data-strk-img-width="500"
      className="group relative aspect-[9/16] w-[64vw] flex-shrink-0 overflow-hidden bg-espresso/90 sm:w-[42vw] md:w-[280px] lg:w-[320px]"
    >
      <div className="absolute inset-0 shimmer" style={{ opacity: loaded ? 0 : 1 }} />
      <img
        alt={reel.caption}
        loading="lazy"
        decoding="async"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={() => setLoaded(true)}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-espresso/85 via-espresso/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-bone">
        <p className="font-serif text-2xl italic leading-snug md:text-[1.7rem]">
          {reel.caption}
        </p>
        <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-bone/75">
          {reel.handle}
        </p>
      </div>
    </article>
  );
}

export default function UGCReel() {
  const scrollerRef = useRef(null);
  const headerRef = useReveal();

  useEffect(() => {
    if (!scrollerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, scrollerRef.current);
  }, []);

  const scrollBy = (dir) => {
    if (!scrollerRef.current) return;
    const card = scrollerRef.current.querySelector('article');
    const step = card ? card.getBoundingClientRect().width + 16 : 320;
    scrollerRef.current.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="border-y border-sand bg-linen/40 py-20 md:py-24">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div ref={headerRef} className="flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-gold-deep">
              From the community
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light tracking-tight text-espresso sm:text-5xl">
              Worn by you
            </h2>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll reels left"
              className="flex h-10 w-10 items-center justify-center border border-sand text-espresso transition-colors duration-300 hover:border-espresso"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={1.25} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll reels right"
              className="flex h-10 w-10 items-center justify-center border border-sand text-espresso transition-colors duration-300 hover:border-espresso"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scrollerRef}
        className="scrollbar-hidden mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 sm:px-8 lg:px-12"
      >
        {UGC_REELS.map((reel) => (
          <ReelCard key={reel.id} reel={reel} />
        ))}
        <div className="w-1 flex-shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}
