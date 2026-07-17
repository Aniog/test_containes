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
    <section className="section py-8" style={{ backgroundColor: 'var(--color-ivory)' }}>
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl md:text-4xl">As Seen On You</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 flex items-center justify-center border border-[#E8E4DE] hover:border-[#C9A962] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 flex items-center justify-center border border-[#E8E4DE] hover:border-[#C9A962] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[180px] md:w-[240px] snap-start"
            >
              <div className="relative aspect-[9/16] bg-[#F5F0E8] overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}