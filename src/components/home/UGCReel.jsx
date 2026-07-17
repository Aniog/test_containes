import React from 'react';

const ugcItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
    caption: "Golden hour with my new huggies",
    handle: "@sophia_m",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    caption: "The necklace that started it all",
    handle: "@elena_rose",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
    caption: "Stacked and ready",
    handle: "@claire_d",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
    caption: "Everyday elegance",
    handle: "@maya_j",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&q=80",
    caption: "Gift for my best friend",
    handle: "@taylor_k",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80",
    caption: "Date night glow",
    handle: "@jasmine_r",
  },
];

export default function UGCReel() {
  return (
    <section className="py-16 md:py-24 border-t border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <p className="text-gold text-xs uppercase tracking-[0.15em] mb-2">As Seen On</p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#f5f0eb]">Worn by You</h2>
      </div>

      <div className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-4 px-4 md:px-8 min-w-max">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-48 md:w-56 aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-sm text-[#f5f0eb] italic leading-tight">
                  "{item.caption}"
                </p>
                <p className="text-xs text-[#a09890] mt-2">{item.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}