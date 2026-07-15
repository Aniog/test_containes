import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcContent } from '../../data/products';

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#1A1A1A] overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#F5F5F0] tracking-wide">
            Styled by You
          </h2>
          <p className="mt-3 text-[#A8A8A0]">
            See how our community wears Velmora
          </p>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-4 z-10 p-3 bg-[#0D0D0D]/80 border border-[#333333] text-[#F5F5F0] hover:text-[#C9A962] hover:border-[#C9A962] transition-all duration-300"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-4 z-10 p-3 bg-[#0D0D0D]/80 border border-[#333333] text-[#F5F5F0] hover:text-[#C9A962] hover:border-[#C9A962] transition-all duration-300"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 px-2 md:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 md:w-56"
            >
              <div className="relative aspect-[9/16] bg-[#242424] overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center pb-4">
                  <p className="font-serif text-sm text-[#F5F5F0] italic px-2 text-center">
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
