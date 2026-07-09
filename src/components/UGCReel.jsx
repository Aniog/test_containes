import React from 'react';

// Simulated UGC / Instagram Reels style content
const ugcItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
    caption: "Golden hour glow",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80",
    caption: "Everyday elegance",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80",
    caption: "Soft light, soft gold",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
    caption: "Worn with intention",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
    caption: "Timeless moments",
  },
];

const UGCReel = () => {
  return (
    <div className="ugc-scroll">
      {ugcItems.map((item) => (
        <div key={item.id} className="ugc-card aspect-[9/16] bg-velmora-bg-alt rounded-sm overflow-hidden">
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
  );
};

export default UGCReel;
