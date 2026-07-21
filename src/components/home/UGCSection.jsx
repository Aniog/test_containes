import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcContent } from '../../data/products';

const UGCSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-20 bg-charcoal overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-ivory text-section-mobile md:text-section">
            As Seen On You
          </h2>
          
          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-3 border border-stone text-warm-gray hover:border-gold hover:text-gold transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 border border-stone text-warm-gray hover:border-gold hover:text-gold transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcContent.map((item, index) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-40 md:w-52 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Vertical Card */}
              <div className="relative aspect-[2/3] group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Caption */}
                <p className="absolute bottom-4 left-4 right-4 font-serif text-ivory text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default UGCSection;