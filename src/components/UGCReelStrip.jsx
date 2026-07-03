import React from 'react';

export default function UGCReelStrip() {
  const ugcItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
      caption: "Everyday elegance"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
      caption: "Stacked to perfection"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
      caption: "Golden hour glow"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
      caption: "Minimal & timeless"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
      caption: "Gifted with love"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#faf9f6] overflow-hidden">
      <div className="container-luxury mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-center">
          #VelmoraMoments
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-6 px-4 md:px-8 lg:px-16 scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-64 md:w-80 aspect-[9/16] relative group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
              <p className="text-white p-6 font-serif text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
