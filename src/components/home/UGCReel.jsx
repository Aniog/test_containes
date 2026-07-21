import React from 'react';

export default function UGCReel() {
  const ugcItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      caption: 'Perfect for layering',
      author: '@sarahj'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
      caption: 'Everyday elegance',
      author: '@emilyt'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
      caption: 'Golden hour vibes',
      author: '@maria_l'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80',
      caption: 'My new favorite',
      author: '@jessicar'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
      caption: 'Gifted myself',
      author: '@oliviak'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
      caption: 'Timeless beauty',
      author: '@natalieg'
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#2A2520] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <h2 className="font-serif text-3xl lg:text-4xl text-[#FAF8F5] text-center mb-4">
          #VelmoraMoments
        </h2>
        <p className="text-[#E8E0D8] text-center tracking-wider text-sm uppercase">
          Tag us @velmora for a chance to be featured
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 lg:gap-6 overflow-x-auto px-6 lg:px-8 pb-8 scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-64 lg:w-80 aspect-[9/16] relative group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover"
            />

            {/* Overlay with Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A2520] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[#FAF8F5] text-sm mb-2">{item.caption}</p>
                <p className="text-[#8B7355] text-xs">{item.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
