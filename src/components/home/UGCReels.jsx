import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcReels, products } from '@/data/products';

export default function UGCReels() {
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
    if (!el) return;
    el.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-velvet-50">
      <div className="container-page">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-900 mb-4">
            As Seen On You
          </h2>
          <p className="text-charcoal-500 text-sm md:text-base max-w-md mx-auto">
            Real women, real gold. Tag <span className="font-medium text-velvet-600">@velmorajewelry</span> for a chance to be featured.
          </p>
        </div>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center transition-all ${
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center transition-all ${
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Reel strip */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide pb-2 -mx-5 px-5"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {ugcReels.map((reel) => {
              const product = products.find((p) => p.id === reel.productId);
              return (
                <div
                  key={reel.id}
                  className="flex-shrink-0 w-[160px] md:w-[200px] snap-start"
                >
                  <div className="relative aspect-[9/16] bg-velvet-100 overflow-hidden rounded-sm">
                    <img
                      className="w-full h-full object-cover"
                      data-strk-img-id={`ugc-${reel.id}`}
                      data-strk-img={`[ugc-caption-${reel.id}]`}
                      data-strk-img-ratio="9x16"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={reel.caption}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p
                        id={`ugc-caption-${reel.id}`}
                        className="font-serif text-white text-sm leading-snug italic"
                      >
                        {reel.caption}
                      </p>
                      {product && (
                        <p className="text-[10px] text-cream-100/70 mt-1 tracking-wider uppercase">
                          {product.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}