import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcContent } from '@/data/products';

const UGCSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 bg-[var(--color-warm-white)] overflow-hidden">
      <div className="container-narrow mb-6">
        <h2 className="font-serif text-2xl md:text-3xl text-center" style={{ color: 'var(--color-charcoal)' }}>
          As Seen On You
        </h2>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => scroll('left')}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white shadow-lg rounded-full hover:opacity-80 transition-opacity"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-5 h-5" style={{ color: 'var(--color-charcoal)' }} />
      </button>
      <button
        onClick={() => scroll('right')}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white shadow-lg rounded-full hover:opacity-80 transition-opacity"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-5 h-5" style={{ color: 'var(--color-charcoal)' }} />
      </button>

      {/* Reel-style Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-4 md:px-12"
      >
        {ugcContent.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[240px] group cursor-pointer"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-[var(--color-ivory)]">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Caption */}
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-serif text-sm text-white italic">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCSection;