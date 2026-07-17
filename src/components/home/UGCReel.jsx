import React from 'react';

export default function UGCReel() {
  const ugcItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
      caption: 'Stacking my favorites',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      caption: 'Everyday elegance',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
      caption: 'Golden hour glow',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      caption: 'Gifted myself',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
      caption: 'Minimal & chic',
    },
  ];

  return (
    <section className="py-20 bg-velmora-warm-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light font-['Cormorant_Garamond'] mb-2">
            #VelmoraStyle
          </h2>
          <p className="text-sm text-velmora-text-light tracking-wide">
            See how our community wears their pieces
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-64 h-80 relative group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                <p className="text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-['Cormorant_Garamond'] italic">
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
