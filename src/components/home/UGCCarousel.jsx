import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ugcItems = [
  { id: 1, caption: 'Golden hour glow', aspect: '9/16' },
  { id: 2, caption: 'Stack & layer', aspect: '9/16' },
  { id: 3, caption: 'Ear candy', aspect: '9/16' },
  { id: 4, caption: 'Neckline moment', aspect: '9/16' },
  { id: 5, caption: 'Everyday luxury', aspect: '9/16' },
  { id: 6, caption: 'Gift-worthy', aspect: '9/16' },
];

export default function UGCCarousel() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amount = 280;
      scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="section-subheading mb-3">Styled by You</p>
            <h2 className="section-heading">#VelmoraJewels</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-velmora-sand rounded-full flex items-center justify-center text-velmora-charcoal hover:bg-velmora-charcoal hover:text-white hover:border-velmora-charcoal transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-velmora-sand rounded-full flex items-center justify-center text-velmora-charcoal hover:bg-velmora-charcoal hover:text-white hover:border-velmora-charcoal transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] relative rounded-lg overflow-hidden group"
            style={{ aspectRatio: item.aspect, scrollSnapAlign: 'start' }}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-velmora-charcoal via-velmora-charcoal/90 to-velmora-gold/20" />

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
              <div className="w-16 h-16 rounded-full bg-velmora-gold/15 flex items-center justify-center mb-4">
                <span className="font-serif text-xl text-velmora-gold">V</span>
              </div>
            </div>

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="font-serif text-sm italic text-white/90 text-center">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
