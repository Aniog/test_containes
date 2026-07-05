import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcContent } from '../../data/products';

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 280; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-velmora-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-3">
            Styled by You
          </h2>
          <p className="text-velmora-charcoal/60">
            See how our community wears Velmora
          </p>
        </div>

        {/* Scroll Container */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-5"
          >
            <ChevronLeft className="w-5 h-5 text-velmora-charcoal" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mr-5"
          >
            <ChevronRight className="w-5 h-5 text-velmora-charcoal" />
          </button>

          {/* Reel Cards */}
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
                <div className="relative aspect-[9/16] overflow-hidden bg-velmora-taupe/20">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent" />
                  {/* Caption */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-serif text-white text-sm italic">
                      "{item.caption}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}