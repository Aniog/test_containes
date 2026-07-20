import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcContent } from '../../data/products';

function UGCStrip() {
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
    <section className="py-16 bg-card-bg overflow-hidden">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-primary">
            Styled by You
          </h2>
          
          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 border border-border hover:border-primary transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 border border-border hover:border-primary transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcContent.map((item, index) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[9/16] overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-sm text-text-light italic">
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
}

export default UGCStrip;