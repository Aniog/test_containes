import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/data/products';

export default function UGCStrip() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-cream-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-wider text-velvet-900">
              As Seen On You
            </h2>
            <p className="mt-3 text-velvet-500 text-sm font-light tracking-wide">
              Tag @velmorajewelry to be featured
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 border border-velvet-300 flex items-center justify-center text-velvet-600 hover:text-velvet-900 hover:border-velvet-600 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 border border-velvet-300 flex items-center justify-center text-velvet-600 hover:text-velvet-900 hover:border-velvet-600 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar pb-2"
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[180px] md:w-[220px] relative group cursor-pointer"
            >
              <div className="aspect-[9/16] bg-velvet-100 relative overflow-hidden">
                <img
                  alt={item.caption}
                  data-strk-img-id={`ugc-${item.id}`}
                  data-strk-img={`[ugc-caption-${item.id}] [ugc-handle-${item.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velvet-900/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p
                    id={`ugc-caption-${item.id}`}
                    className="text-white text-xs font-serif italic leading-snug"
                  >
                    {item.caption}
                  </p>
                  <p
                    id={`ugc-handle-${item.id}`}
                    className="text-white/70 text-[10px] mt-1 font-sans tracking-wider"
                  >
                    {item.handle}
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
