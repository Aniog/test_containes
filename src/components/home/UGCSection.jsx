import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcContent } from '../../data/products';

export default function UGCSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-[#1A1815] overflow-hidden">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-2xl md:text-3xl text-[#FAF9F7]"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            As Seen On You
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 flex items-center justify-center border border-[#3A3530] text-[#FAF9F7] hover:border-[#C9A962] hover:text-[#C9A962] transition-colors duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 flex items-center justify-center border border-[#3A3530] text-[#FAF9F7] hover:border-[#C9A962] hover:text-[#C9A962] transition-colors duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcContent.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] md:w-[280px] snap-center"
          >
            <div className="relative aspect-[9/16] overflow-hidden group">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p
                className="absolute bottom-4 left-4 right-4 text-[#FAF9F7] text-sm italic"
                style={{ fontFamily: 'var(--font-serif)' }}
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