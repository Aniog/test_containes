import React from 'react';

// Simulated Instagram Reels-style UGC cards
const ugcItems = [
  { id: 1, caption: "My everyday staple", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=700&fit=crop" },
  { id: 2, caption: "Gifted to myself", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=700&fit=crop" },
  { id: 3, caption: "Wedding day details", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=700&fit=crop" },
  { id: 4, caption: "Layering goals", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=700&fit=crop" },
  { id: 5, caption: "Golden hour glow", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=700&fit=crop" },
  { id: 6, caption: "Brunch with the girls", img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=700&fit=crop" },
];

const UGCRow = () => {
  return (
    <div className="overflow-x-auto pb-4 -mx-1">
      <div className="flex gap-3 px-1">
        {ugcItems.map((item) => (
          <div key={item.id} className="ugc-card">
            <img src={item.img} alt={item.caption} />
            <div className="ugc-caption">{item.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UGCRow;
