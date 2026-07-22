import React from 'react';

function UGCReel() {
  const ugcItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400",
      caption: "Everyday elegance"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
      caption: "Stacked to perfection"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400",
      caption: "Golden hour glow"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400",
      caption: "Minimal & chic"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400",
      caption: "Gifted with love"
    }
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="font-serif text-3xl tracking-wider uppercase text-center">
          #VelmoraStyle
        </h2>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto px-4 pb-4 scrollbar-hide">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="flex-shrink-0 w-64 h-80 relative group cursor-pointer"
          >
            <div className="w-full h-full bg-gray-100">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end p-4">
              <p className="text-white text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                "{item.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UGCReel;
