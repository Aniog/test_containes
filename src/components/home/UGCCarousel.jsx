import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcItems } from '../../data/products';

export default function UGCCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-cream-100">
      {/* Header */}
      <div className="section-padding text-center mb-8 md:mb-12">
        <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-500 mb-3">
          @VelmoraJewelry
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900">
          As Seen On You
        </h2>
        <div className="w-16 h-px bg-gold-400 mx-auto mt-6" />
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-cream-50/90 backdrop-blur-sm shadow-lg text-charcoal-700 hover:text-charcoal-900 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-cream-50/90 backdrop-blur-sm shadow-lg text-charcoal-700 hover:text-charcoal-900 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 snap-x snap-mandatory"
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] overflow-hidden snap-start group"
            >
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[${item.id}-ugc-caption] woman wearing gold jewelry portrait instagram`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-base md:text-lg text-cream-50 italic">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
