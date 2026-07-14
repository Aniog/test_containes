import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcContent } from '../../data/products';

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-velmora-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs tracking-ultra uppercase text-velmora-taupe">Community</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-2 text-velmora-cream">As Seen On You</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-3 border border-velmora-taupe/30 text-velmora-cream hover:border-velmora-gold hover:text-velmora-gold transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 border border-velmora-taupe/30 text-velmora-cream hover:border-velmora-gold hover:text-velmora-gold transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Reel Strip */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcContent.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-48 md:w-56 snap-start"
            style={{ scrollSnapAlign: 'start' }}
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-velmora-sand">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-velmora-cream italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}