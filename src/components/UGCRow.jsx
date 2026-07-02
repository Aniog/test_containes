import React from 'react';

// UGC (User Generated Content) Reel-style row
// Simulates Instagram Reels with vertical 9:16 cards

const ugcItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
    caption: "Morning light with my new huggies",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
    caption: "The necklace I never take off",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
    caption: "Stacking my favorites",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80",
    caption: "Golden hour glow",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
    caption: "The perfect everyday ear cuff",
  },
];

const UGCRow = () => {
  return (
    <div className="overflow-x-auto pb-4 -mx-1 px-1 scrollbar-hide">
      <div className="flex gap-4">
        {ugcItems.map((item) => (
          <div key={item.id} className="ugc-card aspect-[9/16] bg-base-200">
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
  );
};

export default UGCRow;
