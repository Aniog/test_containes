import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcImages } from '../../data/products';

const UGCStrip = () => {
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
    <section className="py-16 bg-velmora-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-white">Styled by You</h2>
          <p className="mt-2 text-white/60 text-sm">Tag @Velmora to be featured</p>
        </div>

        {/* Scroll Container */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm 
                       rounded-full flex items-center justify-center text-white/80 hover:bg-velmora-gold 
                       transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 backdrop-blur-sm 
                       rounded-full flex items-center justify-center text-white/80 hover:bg-velmora-gold 
                       transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
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
                className="flex-shrink-0 w-40 md:w-48 relative group/card"
              >
                <div className="aspect-[9/16] overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                  />
                </div>
                {/* Caption Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                                opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 
                                flex items-end justify-center pb-4">
                  <p className="font-serif text-white text-sm italic">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UGCStrip;