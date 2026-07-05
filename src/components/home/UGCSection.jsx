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
    <section className="py-20 bg-velmora-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-2">
            As Seen On You
          </h2>
          <p className="text-velmora-taupe text-sm">
            Tag @velmora to be featured
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-velmora-cream shadow-lg rounded-full flex items-center justify-center hover:bg-velmora-gold hover:text-white transition-colors duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-velmora-cream shadow-lg rounded-full flex items-center justify-center hover:bg-velmora-gold hover:text-white transition-colors duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {ugcContent.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-40 md:w-48 relative group cursor-pointer"
              >
                <div className="aspect-[9/16] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="font-serif text-velmora-cream text-sm italic">
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}