import React, { useRef } from 'react';

const ugcItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Everyday elegance",
    author: "@sarahj"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    caption: "Stacked & styled",
    author: "@emilyr"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Golden hour glow",
    author: "@jessicam"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    caption: "Minimal & chic",
    author: "@aishwaryak"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Layered love",
    author: "@nicolew"
  }
];

export default function UGCReel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-velmora-softWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-light tracking-wide mb-4">
            #VELMORA
          </h2>
          <p className="text-sm text-gray-500 tracking-wide">Tag us @velmora</p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {ugcItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-64 md:w-72 relative group cursor-pointer"
              >
                {/* Vertical Card (9:16 aspect ratio) */}
                <div className="relative aspect-[9/16] overflow-hidden bg-gray-100 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Caption Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm font-light mb-1">{item.caption}</p>
                      <p className="text-xs opacity-75">{item.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-velmora-gold hover:text-white transition-colors hidden md:flex"
          >
            ←
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-velmora-gold hover:text-white transition-colors hidden md:flex"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
