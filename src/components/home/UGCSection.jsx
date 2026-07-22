import React from 'react';

export default function UGCSection() {
  const ugcItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
      caption: "Morning light hits different ✨",
      username: "@sarahm"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
      caption: "Stacking game strong 💫",
      username: "@emilyr"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
      caption: "Everyday elegance 🌙",
      username: "@jessical"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80",
      caption: "Golden hour glow ✨",
      username: "@aishan"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
      caption: "My new favorite piece 💛",
      username: "@michellet"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
      caption: "Gifted myself today 🎁",
      username: "@dianak"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container-max px-4 md:px-8 mb-8 md:mb-12">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-center tracking-wide">
          #VelmoraMoments
        </h2>
        <p className="text-center text-velmora-text-muted text-sm mt-2">
          Tag us @velmora for a chance to be featured
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar px-4 md:px-8 lg:px-16">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-64 md:w-72 relative group cursor-pointer"
          >
            {/* Vertical Card (9:16 aspect ratio) */}
            <div className="relative aspect-[9/16] overflow-hidden bg-velmora-beige">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-sm font-light">{item.caption}</p>
                <p className="text-white/80 text-xs mt-1">{item.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
