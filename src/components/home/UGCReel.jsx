import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

// Six editorial 9:16 "reel" cards. Caption is rendered as an overlay
// on the bottom of each card. We use a wider strk query that references
// each caption + the section eyebrow so the image system can match
// editorial jewelry-on-skin content.
const REELS = [
  {
    id: 'reel-1',
    caption: 'The Golden Sphere',
    sub: 'On Maya · London',
    imgId: 'ugc-reel-1-8a3c1d',
    captionId: 'reel-1-caption',
  },
  {
    id: 'reel-2',
    caption: 'Vivid Aura',
    sub: 'Stacked · No. 03',
    imgId: 'ugc-reel-2-2b9e4f',
    captionId: 'reel-2-caption',
  },
  {
    id: 'reel-3',
    caption: 'Royal Heirloom',
    sub: 'A gift, kept',
    imgId: 'ugc-reel-3-7c1d8a',
    captionId: 'reel-3-caption',
  },
  {
    id: 'reel-4',
    caption: 'Amber Lace',
    sub: 'On the ear · Paris',
    imgId: 'ugc-reel-4-5d3a7b',
    captionId: 'reel-4-caption',
  },
  {
    id: 'reel-5',
    caption: 'Majestic Flora',
    sub: 'Worn daily · No. 12',
    imgId: 'ugc-reel-5-9e2c4f',
    captionId: 'reel-5-caption',
  },
  {
    id: 'reel-6',
    caption: 'Huggies, Three Ways',
    sub: 'Styled by Andrea',
    imgId: 'ugc-reel-6-1f8b6c',
    captionId: 'reel-6-caption',
  },
];

function ReelCard({ reel, idx }) {
  return (
    <article
      className="snap-start shrink-0 w-[64vw] sm:w-[260px] md:w-[280px] aspect-[9/16] relative overflow-hidden bg-champagne/30 group"
      aria-label={`${reel.caption} — ${reel.sub}`}
    >
      <img
        alt={reel.caption}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-[1.03]"
        data-strk-img-id={reel.imgId}
        data-strk-img={`[${reel.captionId}] [ugc-section-eyebrow]`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="600"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
      />

      {/* bottom gradient for caption legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent"
      />

      {/* play icon top-right */}
      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-ivory/15 backdrop-blur-sm flex items-center justify-center text-ivory/90">
        <Play className="w-3.5 h-3.5 ml-0.5" strokeWidth={1.6} fill="currentColor" />
      </div>

      {/* caption overlay */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-ivory">
        <p
          id={reel.captionId}
          className="font-serif text-2xl md:text-[26px] leading-tight"
        >
          {reel.caption}
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-widest-2 text-ivory/70">
          {reel.sub}
        </p>
      </div>
    </article>
  );
}

export default function UGCReel() {
  const trackRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return undefined;
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: 'smooth' });
  };

  return (
    <section className="bg-ivory">
      <div className="container-page pt-4 md:pt-8 pb-20 md:pb-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <div>
            <p id="ugc-section-eyebrow" className="eyebrow">@velmora · Worn by you</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink-soft">
              The Reel
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canLeft}
              aria-label="Scroll left"
              className={cn(
                'w-10 h-10 inline-flex items-center justify-center border border-hairline transition-colors duration-300 ease-editorial',
                canLeft ? 'text-ink-soft hover:bg-ink hover:text-ivory' : 'text-hairline cursor-not-allowed'
              )}
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.4} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canRight}
              aria-label="Scroll right"
              className={cn(
                'w-10 h-10 inline-flex items-center justify-center border border-hairline transition-colors duration-300 ease-editorial',
                canRight ? 'text-ink-soft hover:bg-ink hover:text-ivory' : 'text-hairline cursor-not-allowed'
              )}
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </div>

      {/* full-bleed track */}
      <div className="relative">
        <div
          ref={trackRef}
          className="overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-4 md:gap-6 pl-6 md:pl-10 lg:pl-16 pr-6 md:pr-10 lg:pr-16 pb-2"
        >
          {REELS.map((reel, i) => (
            <ReelCard key={reel.id} reel={reel} idx={i} />
          ))}
          {/* trailing spacer so last card isn't flush */}
          <div aria-hidden="true" className="shrink-0 w-2" />
        </div>
        {/* edge fades */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-ivory to-transparent hidden md:block" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-ivory to-transparent hidden md:block" />
      </div>
    </section>
  );
}
