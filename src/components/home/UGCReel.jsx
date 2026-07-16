import React from "react";

// Reel-style UGC cards - vertical 9:16 format mimicking Instagram Reels
const ugcItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    caption: "My everyday staple",
    name: "Sofia M."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    caption: "Gifted myself this set",
    name: "Elena R."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
    caption: "Perfect for date night",
    name: "Maya K."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80",
    caption: "Worn for my wedding",
    name: "Isabella T."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    caption: "My mother passed hers down",
    name: "Aisha P."
  }
];

const UGCReel = () => {
  return (
    <section className="bg-[#F5F2ED] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <span className="text-xs tracking-[3px] text-[#B89778]">AS SEEN ON</span>
          <h2 className="font-serif text-3xl tracking-[1px] mt-1">Worn by you</h2>
        </div>

        <div className="ugc-scroll flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[160px] md:w-[180px] snap-start"
            >
              <div className="relative aspect-[9/16] bg-[#E5DFD6] overflow-hidden rounded-sm">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                {/* Soft overlay with caption */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="font-serif text-white text-sm tracking-wide leading-tight">
                    "{item.caption}"
                  </p>
                  <p className="text-white/70 text-xs mt-1.5 tracking-[1px]">
                    — {item.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
