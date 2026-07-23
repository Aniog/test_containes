import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ugcItems = [
  { caption: 'Everyday elegance', bg: 'linear-gradient(135deg, #3D3028 0%, #2C2620 100%)' },
  { caption: 'Layer it up', bg: 'linear-gradient(135deg, #2C2620 0%, #3D3028 100%)' },
  { caption: 'Golden hour glow', bg: 'linear-gradient(135deg, #3D3028 0%, #2C2620 100%)' },
  { caption: 'Stacked & styled', bg: 'linear-gradient(135deg, #2C2620 0%, #3D3028 100%)' },
  { caption: 'Date night ready', bg: 'linear-gradient(135deg, #3D3028 0%, #2C2620 100%)' },
  { caption: 'Minimal moments', bg: 'linear-gradient(135deg, #2C2620 0%, #3D3028 100%)' },
];

export default function UGCStrip() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -280 : 280,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-10">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-sans">Styled by You</p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wider text-espresso">As Seen On</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-6" />
        </div>
      </div>

      <div className="relative">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cream/90 shadow-md flex items-center justify-center hover:bg-gold hover:text-cream transition-all duration-300"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-cream/90 shadow-md flex items-center justify-center hover:bg-gold hover:text-cream transition-all duration-300"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-4 md:px-8 lg:px-16 pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-sm overflow-hidden relative group cursor-pointer"
            >
              <div className="absolute inset-0" style={{ background: item.bg }}>
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 40%, rgba(196, 162, 101, 0.25) 0%, transparent 70%)',
                  }}
                />
              </div>
              {/* Gold shimmer */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-espresso/80 to-transparent">
                <p className="font-serif text-sm text-cream italic tracking-wider">"{item.caption}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}