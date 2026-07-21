import React from 'react';

export default function UGCReel() {
  const ugcItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop",
      caption: "Golden hour essentials",
      username: "@sarahj"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop",
      caption: "Everyday elegance",
      username: "@emilyr"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop",
      caption: "Stacked to perfection",
      username: "@aisham"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop",
      caption: "Gifted with love",
      username: "@priyank"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&h=711&fit=crop",
      caption: "Minimalist vibes",
      username: "@jessicat"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=711&fit=crop",
      caption: "Office to dinner",
      username: "@nadial"
    },
  ];

  return (
    <section className="py-20 bg-velmora-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 tracking-wide">
          #VelmoraMoments
        </h2>
        <div className="hairline w-24 mx-auto mb-6" />
        <p className="text-velmora-text-light text-center max-w-2xl mx-auto">
          See how our community styles their Velmora pieces. Tag us @VelmoraJewelry for a chance to be featured.
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-6 px-4 sm:px-6 lg:px-8" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-64 sm:w-72 relative group cursor-pointer"
            >
              {/* Vertical Card (9:16 aspect ratio) */}
              <div className="relative overflow-hidden bg-velmora-cream" style={{ aspectRatio: '9/16' }}>
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-darker/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <p className="font-serif text-lg mb-1 italic">{item.caption}</p>
                  <p className="text-sm text-velmora-taupe">{item.username}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
