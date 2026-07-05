import React, { useRef } from 'react';

export default function UGCRow() {
  const scrollRef = useRef(null);

  const ugcItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      caption: 'Perfect for layering'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
      caption: 'Everyday elegance'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
      caption: 'Gift for her'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      caption: 'Self-love purchase'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
      caption: 'Timeless beauty'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
      caption: 'Golden hour vibes'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light tracking-[0.1em] text-gray-900 font-['Cormorant_Garamond']">
            #VELMORA
          </h2>
          <p className="mt-4 text-sm text-gray-600 tracking-wider">
            Tag us @velmora on Instagram
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-none w-64 h-80 relative group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />

              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm font-light italic font-['Cormorant_Garamond']">
                  "{item.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
