import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcContent } from '../data/products';

export default function UGCReels() {
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
    <section className="py-section-mobile md:py-section bg-velmora-bg-secondary overflow-hidden">
      <div className="max-w-container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-text-primary mb-2">
            As Seen On You
          </h2>
          <p className="text-sm text-velmora-text-secondary">
            Tag @Velmora to be featured
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="hidden md:flex justify-end gap-2 mb-4">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 border border-velmora-border flex items-center justify-center text-velmora-text-secondary hover:text-velmora-text-primary hover:border-velmora-text-primary transition-colors duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 border border-velmora-border flex items-center justify-center text-velmora-text-secondary hover:text-velmora-text-primary hover:border-velmora-text-primary transition-colors duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Reels Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcContent.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-[200px] md:w-[260px] relative group"
            >
              <div className="aspect-[9/16] overflow-hidden bg-velmora-bg-card">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-bg-primary/80 via-transparent to-transparent flex items-end justify-center pb-6">
                <p className="font-serif text-sm text-velmora-text-primary tracking-wider text-center px-4">
                  {item.caption}
                </p>
              </div>
              {/* Play Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-velmora-bg-primary/60 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[6px] border-l-velmora-text-primary border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}