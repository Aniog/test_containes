import React from "react";

const reels = [
  {
    id: "r1",
    img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&auto=format&fit=crop&q=80",
    caption: "Morning glow",
  },
  {
    id: "r2",
    img: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&auto=format&fit=crop&q=80",
    caption: "Layered luxe",
  },
  {
    id: "r3",
    img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&auto=format&fit=crop&q=80",
    caption: "Golden hour",
  },
  {
    id: "r4",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop&q=80",
    caption: "Minimalist chic",
  },
  {
    id: "r5",
    img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&auto=format&fit=crop&q=80",
    caption: "Statement drop",
  },
  {
    id: "r6",
    img: "https://images.unsplash.com/photo-1617038220954-15a5e463b7ac?w=400&auto=format&fit=crop&q=80",
    caption: "Date night",
  },
];

export default function ReelStrip() {
  return (
    <section className="py-14 sm:py-20 bg-velmora-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl tracking-wide text-center">
          Styled by You
        </h2>
        <p className="text-center text-sm text-velmora-mocha mt-2">
          Tag <span className="text-velmora-gold font-medium">@velmorajewelry</span> to be featured
        </p>
      </div>
      <div className="flex gap-3 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory scrollbar-hide">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="relative shrink-0 w-[140px] sm:w-[180px] aspect-[9/16] rounded-md overflow-hidden snap-start group"
          >
            <img
              src={reel.img}
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 font-serif text-white text-sm italic tracking-wide">
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
