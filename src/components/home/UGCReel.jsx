import React from 'react';

// UGC-style vertical cards mimicking Instagram Reels
const ugcItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    caption: "Golden hour glow",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
    caption: "Everyday elegance",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80",
    caption: "Layered with love",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    caption: "Timeless moments",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
    caption: "Soft light, soft gold",
  },
];

const UGCReel = () => {
  return (
    <section className="bg-[#F8F5F1] py-16 border-y border-[#E5DFD6]">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-xs uppercase tracking-[0.15em] text-[#B8865C] mb-2">From Our Community</p>
        <h2 className="font-serif-custom text-3xl tracking-[0.05em]">Worn Beautifully</h2>
      </div>

      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-4 pl-6 md:pl-6 max-w-7xl mx-auto">
          {ugcItems.map((item) => (
            <div key={item.id} className="ugc-card w-[160px] md:w-[180px] aspect-[9/16] rounded-sm overflow-hidden">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="ugc-caption">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
