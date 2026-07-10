import React from 'react';

export default function UGCSection() {
  const ugcItems = [
    {
      id: 1,
      image: 'https://via.placeholder.com/400x711/FAF8F5/C9A96E?text=Style+1',
      caption: 'Golden hour essentials ✨',
      author: '@sarahjewels'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/400x711/FAF8F5/C9A96E?text=Style+2',
      caption: 'Layered to perfection 💫',
      author: '@emilyrose'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/400x711/FAF8F5/C9A96E?text=Style+3',
      caption: 'Everyday elegance 🌙',
      author: '@avelinav'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/400x711/FAF8F5/C9A96E?text=Style+4',
      caption: 'Gifted myself today 🎁',
      author: '@chloem'
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/400x711/FAF8F5/C9A96E?text=Style+5',
      caption: 'Brunal vibes only ☕',
      author: '@isabelle'
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/400x711/FAF8F5/C9A96E?text=Style+6',
      caption: 'My daily stack 💍',
      author: '@natalieg'
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-light">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">#VelmoraMoments</h2>
          <p className="font-sans text-gray-warm">
            Tag us @velmora to be featured
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-64 md:w-80 relative group cursor-pointer"
            >
              {/* Vertical Card (9:16 aspect ratio) */}
              <div className="aspect-[9/16] bg-charcoal rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent">
                  <p className="font-sans text-cream text-sm mb-1">
                    {item.caption}
                  </p>
                  <p className="font-sans text-cream/70 text-xs">
                    {item.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}