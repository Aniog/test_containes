import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcContent } from '../../data/products';

export default function UGCSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 280; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section-padding bg-[#FAF8F6] overflow-hidden">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">As Seen On You</h2>
          <p className="text-[#6B635A]">
            Tag @velmora to be featured
          </p>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white shadow-md hover:bg-[#C9A962] hover:text-white transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white shadow-md hover:bg-[#C9A962] hover:text-white transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Reel-style Cards */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 md:px-12"
        >
          {ugcContent.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-[200px] md:w-[240px] group cursor-pointer"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-white">
                <img 
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,24,20,0.6)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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