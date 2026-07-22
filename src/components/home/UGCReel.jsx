import React from 'react';

// UGC-style vertical cards mimicking Instagram Reels
const ugcItems = [
  {
    id: 1,
    caption: "My everyday ear stack",
    img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
  },
  {
    id: 2,
    caption: "Wore this to my sister's wedding",
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
  },
  {
    id: 3,
    caption: "Gold that feels like me",
    img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80",
  },
  {
    id: 4,
    caption: "Layering these necklaces forever",
    img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
  },
  {
    id: 5,
    caption: "The only earrings I reach for",
    img: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80",
  },
];

const UGCReel = () => {
  return (
    <section className="bg-[#F4F0E9] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-xs tracking-[0.12em] uppercase text-[#6B6359]">Real Moments</p>
          <h2 className="serif text-4xl md:text-5xl tracking-[0.02em] mt-1">As Seen on You</h2>
        </div>

        <div className="ugc-scroll">
          {ugcItems.map((item) => (
            <div key={item.id} className="ugc-card aspect-[9/16] rounded-sm">
              <img
                src={item.img}
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
