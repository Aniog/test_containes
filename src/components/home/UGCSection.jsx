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
    <section className="section-spacing bg-[var(--color-primary)] overflow-hidden">
      {/* Section Header */}
      <div className="container-main mb-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-[var(--color-muted-light)] tracking-widest uppercase">
              Community
            </span>
            <h2 className="heading-serif text-3xl md:text-4xl text-white mt-2">
              As Seen On You
            </h2>
          </div>
          
          {/* Navigation Buttons */}
          <div className="hidden md:flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-[var(--color-muted)] rounded-full flex items-center justify-center text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-[var(--color-muted)] rounded-full flex items-center justify-center text-white hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcContent.map((item, index) => (
          <div 
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[240px] animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-[var(--color-primary-light)] group">
              <img 
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay with caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <p className="heading-serif text-white text-sm italic">
                  "{item.caption}"
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Extra cards for continuous scroll feel */}
        {ugcContent.slice(0, 3).map((item, index) => (
          <div 
            key={`dup-${item.id}`}
            className="flex-shrink-0 w-[180px] md:w-[240px]"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-[var(--color-primary-light)] group">
              <img 
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <p className="heading-serif text-white text-sm italic">
                  "{item.caption}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}