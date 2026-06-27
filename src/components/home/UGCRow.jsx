import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday glow with the Golden Sphere Huggies', product: 'Golden Sphere Huggies' },
  { id: 'ugc-2', caption: 'Date night elegance — Majestic Flora Nectar', product: 'Majestic Flora Nectar' },
  { id: 'ugc-3', caption: 'Stacked & styled with Vivid Aura Jewels', product: 'Vivid Aura Jewels' },
  { id: 'ugc-4', caption: 'The perfect gift — Royal Heirloom Set', product: 'Royal Heirloom Set' },
  { id: 'ugc-5', caption: 'Amber Lace for golden hour magic', product: 'Amber Lace Earrings' },
  { id: 'ugc-6', caption: 'Luna Drop — delicate and dreamy', product: 'Luna Drop Necklace' },
];

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 280, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-velmora-warm-cream-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <h2 className="font-serif text-2xl lg:text-3xl tracking-[0.06em] text-velmora-charcoal">
            Worn by You
          </h2>
          <p className="mt-3 text-sm text-velmora-stone tracking-wide">Tag @velmora for a chance to be featured</p>
          <hr className="hr-hairline mt-6 max-w-[200px] mx-auto" />
        </div>
      </div>

      <div className="relative">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-velmora hidden md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-velmora-charcoal" />
        </button>
        <button
          onClick={() => scroll(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 shadow-md flex items-center justify-center hover:bg-white transition-velmora hidden md:flex"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-velmora-charcoal" />
        </button>

        {/* Scrollable strip */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-6 lg:px-10 pb-4 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[220px] md:w-[260px] snap-start"
            >
              <div className="relative aspect-[9/16] bg-velmora-sand/10 overflow-hidden">
                <img
                  alt={item.caption}
                  data-strk-img-id={`ugc-${item.id}`}
                  data-strk-img={`[ugc-caption-${item.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="520"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p
                    id={`ugc-caption-${item.id}`}
                    className="text-white text-xs font-serif italic leading-snug"
                  >
                    {item.caption}
                  </p>
                  <p className="text-white/60 text-[10px] tracking-[0.1em] uppercase mt-1">
                    {item.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}