import React from 'react';

export default function UGCReelSection() {
  const ugcItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop',
      caption: 'Perfect for layering'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
      caption: 'Everyday elegance'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=711&fit=crop',
      caption: 'Gifted with love'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop',
      caption: 'My new favorite'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop',
      caption: 'Timeless beauty'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-ivory overflow-hidden">
      <div className="container-premium mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
          #VelmoraMoments
        </h2>
        <p className="text-charcoal-light text-center text-sm">
          See how our community styles their Velmora pieces
        </p>
      </div>

      {/* Horizontal Scroll of UGC Cards */}
      <div className="ugc-scroll flex gap-4 md:gap-6 overflow-x-auto px-4 md:px-6 pb-4">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-64 md:w-80 relative group cursor-pointer"
          >
            <div className="aspect-[9/16] bg-cream rounded-sm overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/80 to-transparent">
              <p className="text-white font-serif text-sm italic">
                "{item.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
