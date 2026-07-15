import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reels = [
  { id: 1, caption: 'Golden Sphere Huggies — everyday staple', product: 'Golden Sphere Huggies' },
  { id: 2, caption: 'Majestic Flora Nectar — date night glow', product: 'Majestic Flora Nectar' },
  { id: 3, caption: 'Amber Lace — brunch with the girls', product: 'Amber Lace Earrings' },
  { id: 4, caption: 'Vivid Aura — stacked and styled', product: 'Vivid Aura Jewels' },
  { id: 5, caption: 'Royal Heirloom — gifting szn', product: 'Royal Heirloom Set' },
  { id: 6, caption: 'Layered & luminous — velvet mornings', product: 'Majestic Flora Nectar' },
];

export default function UGCRow() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 280, behavior: 'smooth' });
  };

  return (
    <section className="bg-cream-100 py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <p className="text-center text-[10px] tracking-[0.3em] uppercase text-warm-400 mb-3">
          As Seen On You
        </p>
        <h2 className="section-title text-center mb-14">Styled by You</h2>

        <div className="relative">
          {/* Scroll buttons */}
          {canScrollLeft && (
            <button
              onClick={() => scroll(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-cream/90 shadow-md hover:bg-cream transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-warm-900" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-cream/90 shadow-md hover:bg-cream transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-warm-900" />
            </button>
          )}

          {/* Reel strip */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] bg-cream-300 relative overflow-hidden group cursor-pointer"
              >
                <img
                  alt={reel.caption}
                  data-strk-img-id={`ugc-reel-${reel.id}`}
                  data-strk-img={`[ugc-caption-${reel.id}] velmora jewelry worn`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warm-900/70 via-transparent to-transparent" />
                <p
                  id={`ugc-caption-${reel.id}`}
                  className="absolute bottom-4 left-3 right-3 font-serif text-cream text-sm italic leading-tight"
                >
                  {reel.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}