import React, { useRef } from 'react';

export default function UGCReel({ items }) {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-velmora-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="heading-lg">#VelmoraStyle</h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-velmora-border hover:border-velmora-gold transition-colors"
              aria-label="Scroll left"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-velmora-border hover:border-velmora-gold transition-colors"
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <div key={item.id} className="ugc-card flex-shrink-0">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="ugc-overlay">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="font-serif text-lg mb-1">{item.caption}</p>
                  <p className="font-sans text-sm opacity-80">{item.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
