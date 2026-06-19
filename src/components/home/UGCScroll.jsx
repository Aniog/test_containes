import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcImages } from '../../data/products';

export default function UGCScroll() {
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
    <section className="py-16 bg-ivory overflow-hidden">
      <div className="max-w-content mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-h3 text-charcoal">Styled by You</h2>
          <p className="text-warm-gray mt-2 font-sans">Tag @velmora to be featured</p>
        </div>

        {/* Scroll Container */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 flex items-center justify-center shadow-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-charcoal" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 flex items-center justify-center shadow-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-charcoal" />
          </button>

          {/* Horizontal Scroll */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {ugcImages.map((item) => (
              <div 
                key={item.id}
                className="flex-shrink-0 w-40 lg:w-48 aspect-[9/16] relative group/image overflow-hidden"
              >
                <img 
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 delay-100">
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}