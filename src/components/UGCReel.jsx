import React from 'react';

// UGC-style vertical cards mimicking Instagram Reels
const ugcItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
    caption: "Golden hour glow",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
    caption: "Everyday elegance",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
    caption: "Layered & loved",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80",
    caption: "Soft light, soft gold",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
    caption: "Made to be worn",
  },
];

const UGCReel = () => {
  return (
    <div className="overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex gap-3 pl-1">
        {ugcItems.map((item) => (
          <div key={item.id} className="ugc-card">
            <img src={item.image} alt={item.caption} />
            <div className="ugc-caption">
              {item.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UGCReel;