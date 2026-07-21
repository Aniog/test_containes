import React from 'react';

const ugcItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Golden hour glow ✨",
    author: "@sarahj"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    caption: "Everyday elegance",
    author: "@emilyr"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Stacking my favorites",
    author: "@jessicat"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    caption: "Perfect gift 🎁",
    author: "@marinal"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
    caption: "Obsessed with these",
    author: "@aishak"
  },
];

export default function UGCSection() {
  return (
    <section className="py-20 md:py-32 bg-[rgb(var(--color-surface))]">
      <div className="container-velmora">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            #VelmoraStyle
          </h2>
          <div className="hairline w-24 mx-auto mb-6" />
          <p className="font-sans text-[rgb(var(--color-muted))] text-lg">
            Tag us @velmora for a chance to be featured
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
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
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-sans text-sm mb-1">{item.caption}</p>
                  <p className="font-sans text-xs opacity-70">{item.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
