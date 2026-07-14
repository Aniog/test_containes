import React, { useRef } from 'react';

const ugcItems = [
  { id: 1, caption: 'Everyday elegance', username: '@sarah_m', image: 'https://via.placeholder.com/400x700/FFF8F0/1a1a1a?text=Everyday+Elegance' },
  { id: 2, caption: 'Layered & loved', username: '@jessica_k', image: 'https://via.placeholder.com/400x700/FFF8F0/1a1a1a?text=Layered+and+Loved' },
  { id: 3, caption: 'Golden hour glow', username: '@emily_r', image: 'https://via.placeholder.com/400x700/FFF8F0/1a1a1a?text=Golden+Hour+Glow' },
  { id: 4, caption: 'My daily staples', username: '@olivia_t', image: 'https://via.placeholder.com/400x700/FFF8F0/1a1a1a?text=My+Daily+Staples' },
  { id: 5, caption: 'Perfect gift find', username: '@mia_w', image: 'https://via.placeholder.com/400x700/FFF8F0/1a1a1a?text=Perfect+Gift+Find' },
  { id: 6, caption: 'Stacked to perfection', username: '@ava_l', image: 'https://via.placeholder.com/400x700/FFF8F0/1a1a1a?text=Stacked+to+Perfection' },
];

export default function UGCReelRow() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-velmora-cream">
      <div className="container-velmora">
        <div className="flex justify-between items-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-light"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            #VelmoraStyle
          </h2>
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 border border-velmora-beige hover:border-velmora-gold transition-colors"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 border border-velmora-beige hover:border-velmora-gold transition-colors"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="ugc-card flex-shrink-0"
              style={{ scrollSnapAlign: 'start' }}
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="ugc-caption">
                <p className="text-lg mb-2">{item.caption}</p>
                <p className="text-sm opacity-80">{item.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}