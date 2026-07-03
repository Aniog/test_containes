import React from 'react';

export default function UGCSection() {
  const ugcItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
      caption: "Everyday elegance",
      username: "@sarahj"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
      caption: "Stacked & styled",
      username: "@emilyr"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
      caption: "Golden hour glow",
      username: "@mayal"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
      caption: "Minimal & chic",
      username: "@jessicat"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
      caption: "Layered perfection",
      username: "@aishak"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif-display text-4xl md:text-5xl mb-4">Worn & Loved</h2>
          <p className="text-[#6B6560] text-lg">See how our community styles their Velmora pieces</p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-72 md:w-80 relative group cursor-pointer"
            >
              <div className="aspect-[9/16] max-h-[600px] overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay with Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-serif-display text-lg mb-1">{item.caption}</p>
                    <p className="text-sm text-white/80">{item.username}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://instagram.com/velmora"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B8860B] hover:underline text-sm uppercase tracking-wider"
          >
            Follow @Velmora on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
