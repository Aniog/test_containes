import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcImages } from '../../data/products';

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
    <section className="py-16 md:py-24 bg-[var(--color-charcoal)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-cream)]">
            As Seen On You
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 border border-[var(--color-taupe)] text-[var(--color-cream)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 border border-[var(--color-taupe)] text-[var(--color-cream)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcImages.map((item) => (
          <div 
            key={item.id}
            className="flex-shrink-0 w-40 md:w-56 relative group cursor-pointer"
          >
            <div className="aspect-[9/16] overflow-hidden">
              <img 
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}