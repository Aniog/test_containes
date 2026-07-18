import { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/data/products';

export default function UgcReel() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const overflow = el.scrollWidth > el.clientWidth + 5;
    if (!overflow) { setCanScrollLeft(false); setCanScrollRight(false); return; }
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    // Delay initial check so layout has settled
    const t = setTimeout(checkScroll, 200);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      clearTimeout(t);
    };
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.4 * dir, behavior: 'smooth' });
  };

  return (
    <section className="bg-velmora-sand/40 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-10 md:mb-14">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-velmora-muted mb-3">As Worn By You</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-black">Styled by Our Community</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              disabled={!canScrollLeft}
              className="w-9 h-9 flex items-center justify-center border border-velmora-sand hover:border-velmora-gold disabled:opacity-30 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canScrollRight}
              className="w-9 h-9 flex items-center justify-center border border-velmora-sand hover:border-velmora-gold disabled:opacity-30 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-6 px-6 pb-4"
        >
          {ugcItems.map((item) => {
            const imgId = `ugc-${item.id}`;
            const capId = `ugc-cap-${item.id}`;
            return (
              <div
                key={item.id}
                className="flex-shrink-0 w-[160px] md:w-[220px] snap-start group cursor-pointer"
              >
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${capId}]`}
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/50 via-transparent to-transparent" />
                  <p id={capId} className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm md:text-base italic">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
