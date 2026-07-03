import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcContent } from '../../data/products';

const UGCSection = () => {
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
    <section className="py-16 md:py-24 bg-velmora-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-cream mb-2">
              As Seen On You
            </h2>
            <p className="text-velmora-warm-gray">
              Tag @velmora to be featured
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-velmora-warm-gray/30 text-velmora-cream hover:bg-velmora-gold hover:text-velmora-charcoal hover:border-velmora-gold transition-all flex items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-velmora-warm-gray/30 text-velmora-cream hover:bg-velmora-gold hover:text-velmora-charcoal hover:border-velmora-gold transition-all flex items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcContent.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-48 md:w-64 snap-start"
          >
            <div className="relative aspect-[9/16] bg-velmora-light-gray overflow-hidden group">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent" />
              
              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-serif text-sm text-velmora-cream italic">
                  "{item.caption}"
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