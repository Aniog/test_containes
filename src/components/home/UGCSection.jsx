import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcContent } from '../../data/products';

export default function UGCSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 bg-[var(--color-ivory)] overflow-hidden">
      <div className="container-custom mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-center" style={{ color: 'var(--color-warm-black)' }}>
          Worn by You
        </h2>
      </div>

      {/* Scroll Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" style={{ color: 'var(--color-warm-black)' }} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" style={{ color: 'var(--color-warm-black)' }} />
        </button>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar px-8 md:px-20"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56 relative group"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="aspect-[2/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Caption Overlay */}
              <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span
                  className="font-serif text-sm italic px-4 py-2 bg-white/90 backdrop-blur-sm"
                  style={{ color: 'var(--color-warm-black)' }}
                >
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}