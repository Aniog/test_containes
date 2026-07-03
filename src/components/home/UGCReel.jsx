// UGC Reel Section Component - Instagram Reels style horizontal scroll
import React from 'react';

const UGCReel = () => {
  const ugcItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      caption: 'Perfect for layering',
      author: '@sarahj',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
      caption: 'Everyday elegance',
      author: '@emilyr',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
      caption: 'Obsessed with these',
      author: '@michellet',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      caption: 'Gifted myself today',
      author: '@jessicam',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
      caption: 'Gold tones for days',
      author: '@aishan',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
      caption: 'My new favorites',
      author: '@chrissyk',
    },
  ];

  return (
    <section className="py-20 bg-velmora-cream">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">#VelmoraStyle</h2>
          <div className="divider-hairline w-24 mx-auto my-6" />
          <p className="text-velmora-text-secondary">
            Tag us @velmora for a chance to be featured
          </p>
        </div>

        {/* Horizontal Scroll Reel */}
        <div className="flex space-x-4 overflow-x-auto hide-scrollbar pb-4">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-64 md:w-72 relative group cursor-pointer"
            >
              {/* Vertical Card (9:16 aspect ratio) */}
              <div className="relative w-full aspect-[9/16] bg-velmora-charcoal rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white text-sm italic mb-1">{item.caption}</p>
                  <p className="text-white/80 text-xs">{item.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
