import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcContent } from '../../data/products';

const UGCStrip = () => {
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
    <section className="py-16 bg-[var(--color-surface-alt)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 
            className="font-serif text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'var(--font-family-serif)' }}
          >
            Styled by You
          </h2>
          <p className="text-[var(--color-muted)]">
            Tag @velmora to be featured
          </p>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-4 z-10 w-12 h-12 items-center justify-center bg-white shadow-lg rounded-full hover:scale-110 transition-transform"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-4 z-10 w-12 h-12 items-center justify-center bg-white shadow-lg rounded-full hover:scale-110 transition-transform"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar pb-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {ugcContent.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56 snap-start"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative aspect-[9/16] overflow-hidden group">
                <img 
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p 
                    className="text-white text-sm font-serif italic"
                    style={{ fontFamily: 'var(--font-family-serif)' }}
                  >
                    "{item.caption}"
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

export default UGCStrip;