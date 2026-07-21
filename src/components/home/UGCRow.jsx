import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ugcContent } from '../../data/products';

export default function UGCRow() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section bg-[#F5F2ED]">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="font-serif text-3xl md:text-4xl mb-2">Styled by You</h2>
          <p className="text-[#6B6B6B]">Tag @velmora to be featured</p>
        </div>

        <div className="relative">
          {/* Scroll Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md flex items-center justify-center hover:text-[#C9A962] transition-colors hidden md:flex"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md flex items-center justify-center hover:text-[#C9A962] transition-colors hidden md:flex"
          >
            <ChevronRight size={20} />
          </button>

          {/* Scrollable Row */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto hide-scrollbar pb-4"
          >
            {ugcContent.map((item) => (
              <div 
                key={item.id} 
                className="flex-shrink-0 w-[160px] md:w-[200px] relative group cursor-pointer"
              >
                <div className="aspect-[9/16] overflow-hidden bg-[#E8E4DE]">
                  <img 
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
