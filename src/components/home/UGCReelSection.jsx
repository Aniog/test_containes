import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '../../data/products';

export default function UGCReelSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amount = dir === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-charcoal-900 overflow-hidden">
      <div className="section-padding">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-brand-gold-light mb-2">
              @VelmoraJewelry
            </p>
            <h2 className="font-serif text-2xl md:text-heading text-white tracking-[0.04em]">
              Styled by You
            </h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-charcoal-600 text-charcoal-400 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-charcoal-600 text-charcoal-400 flex items-center justify-center hover:border-brand-gold hover:text-brand-gold transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24 pb-4"
      >
        {ugcItems.map((item, i) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] relative rounded-sm overflow-hidden group"
          >
            <div className="aspect-[9/16] bg-charcoal-800">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.id}-caption] gold jewelry woman wearing`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
              />
            </div>
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal-950/80 to-transparent">
              <p
                id={`${item.id}-caption`}
                className="font-serif text-base md:text-lg text-white italic tracking-wide"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
