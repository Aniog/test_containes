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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-velmora-charcoal">
              Styled by You
            </h2>
            <p className="font-sans text-sm text-velmora-taupe mt-1">
              Tag @Velmora to be featured
            </p>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 border border-velmora-taupe/30 hover:border-velmora-gold hover:text-velmora-gold transition-colors"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 border border-velmora-taupe/30 hover:border-velmora-gold hover:text-velmora-gold transition-colors"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcContent.map((item, index) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-48 md:w-56 animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="relative aspect-[9/16] bg-velmora-taupe/20 overflow-hidden group">
                <img 
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/60 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-sm text-velmora-cream italic">
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