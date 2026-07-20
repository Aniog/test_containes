import React from "react";

const ugcItems = [
  {
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&q=85",
    caption: "Obsessed with my new hoops",
  },
  {
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=85",
    caption: "Everyday elegance",
  },
  {
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=85",
    caption: "Gift-wrapped with love",
  },
  {
    image: "https://images.unsplash.com/photo-1611107683227-e9060eccd846?w=600&q=85",
    caption: "Gold on gold",
  },
  {
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=85",
    caption: "Stacking never looked so good",
  },
  {
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=85",
    caption: "Date night ready",
  },
];

export default function UgcRow() {
  return (
    <section className="py-16 md:py-20 bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="section-title">As Seen On You</h2>
        <p className="section-subtitle">
          Tag @velmorajewelry for a chance to be featured
        </p>
      </div>

      <div className="mt-8 md:mt-10 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: "max-content" }}>
          {ugcItems.map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[200px] md:w-[260px] aspect-[9/16] rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={`UGC ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-sm md:text-base font-serif italic leading-snug">
                &ldquo;{item.caption}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}