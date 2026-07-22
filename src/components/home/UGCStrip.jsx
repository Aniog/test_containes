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
    <section className="py-16 bg-velmora-sand overflow-hidden">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl">Styled by You</h2>
          <p className="mt-3 text-velmora-warm-gray">Tag @Velmora to be featured</p>
        </div>
      </div>

      {/* Scroll Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-velmora-cream shadow-soft flex items-center justify-center hover:text-velmora-gold transition-colors hidden md:flex"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-velmora-cream shadow-soft flex items-center justify-center hover:text-velmora-gold transition-colors hidden md:flex"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>

        {/* Cards */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 px-4 md:px-12 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcContent.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-40 md:w-48 snap-center"
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-velmora-cream text-sm italic">
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
