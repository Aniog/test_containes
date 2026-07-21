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
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF9F7] overflow-hidden">
      <div className="container-app">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="section-title">Styled by You</h2>
          <p className="mt-4 text-[#6B6560]">
            See how our community wears Velmora
          </p>
        </div>
      </div>

      {/* Scrollable Container */}
      <div className="relative group">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#FAF9F7] shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#C9A962] hover:text-[#1A1918]"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#FAF9F7] shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#C9A962] hover:text-[#1A1918]"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-20"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56 snap-start"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative aspect-[9/16] bg-[#E8DCC4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1918]/60 via-transparent to-transparent flex items-end p-4">
                  <p className="font-serif text-sm text-[#FAF9F7] italic">
                    {item.caption}
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