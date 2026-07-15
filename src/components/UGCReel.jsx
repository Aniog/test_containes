import { useRef } from 'react';

export default function UGCReel({ items }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-velmora-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-soft-black tracking-wide">
            #VelmoraMoments
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 border border-velmora-taupe hover:border-velmora-gold transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 border border-velmora-taupe hover:border-velmora-gold transition-colors"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-64 md:w-72 relative group cursor-pointer"
            >
              <div className="aspect-[9/16] max-h-96 overflow-hidden bg-velmora-light-gray">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-serif text-lg italic">
                      {item.caption}
                    </p>
                  </div>
                </div>
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
}
