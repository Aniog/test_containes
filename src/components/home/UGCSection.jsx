import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcContent } from '@/data/products';

const UGCSection = () => {
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
    <section className="section-padding bg-ivory overflow-hidden">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">
            As Seen On You
          </h2>
          <p className="font-sans text-warm-gray">
            Tag @velmora to be featured
          </p>
        </div>
      </div>

      {/* Scrollable Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cream shadow-soft flex items-center justify-center rounded-full hover:bg-gold hover:text-white transition-colors duration-300 hidden md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>
        
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-cream shadow-soft flex items-center justify-center rounded-full hover:bg-gold hover:text-white transition-colors duration-300 hidden md:flex"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-16 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcContent.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56"
            >
              <div className="relative aspect-[9/16] bg-charcoal overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-sm text-cream italic">
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
};

export default UGCSection;