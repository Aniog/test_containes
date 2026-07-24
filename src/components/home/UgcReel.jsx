import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '@/data/products';

export default function UgcReel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="section-padding bg-brand-cream">
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-label mb-3">As Seen On You</p>
            <h2 className="heading-section">#VelmoraStyle</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-brand-sand hover:border-brand-gold hover:text-brand-gold transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-brand-sand hover:border-brand-gold hover:text-brand-gold transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-4 md:px-[calc((100vw-1200px)/2+1.5rem)]"
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[220px] md:w-[260px] aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={item.imgQuery}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent flex items-end p-5">
              <p className="font-serif text-lg text-white/90 italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
