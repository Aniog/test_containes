import React from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const UGCSection = () => {
  const scrollRef = useRef(null);

  const ugcItems = [
    {
      id: 1,
      image: 'https://picsum.photos/400/600?random=15',
      caption: 'Layered necklaces for everyday elegance'
    },
    {
      id: 2,
      image: 'https://picsum.photos/400/600?random=14',
      caption: 'Huggies that go with everything'
    },
    {
      id: 3,
      image: 'https://picsum.photos/400/600?random=16',
      caption: 'Gold studs for minimal vibes'
    },
    {
      id: 4,
      image: 'https://picsum.photos/400/600?random=15',
      caption: 'Stacked rings, endless possibilities'
    },
    {
      id: 5,
      image: 'https://picsum.photos/400/600?random=14',
      caption: 'The perfect gift, wrapped with love'
    },
    {
      id: 6,
      image: 'https://picsum.photos/400/600?random=16',
      caption: 'Morning light hits different'
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-2">#VelmoraStyle</h2>
            <p className="text-warmgray text-sm">Tag us @velmora on Instagram</p>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-charcoal rounded-full hover:bg-charcoal hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-charcoal rounded-full hover:bg-charcoal hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-none w-[280px] sm:w-[320px] snap-start"
            >
              <div className="relative aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                    <Play size={20} className="text-charcoal ml-1" />
                  </div>
                </div>

                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <p className="text-white text-sm font-serif italic">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCSection;
