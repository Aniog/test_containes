import React from 'react';

const UGCData = [
  { id: 1, caption: "Morning light", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80" },
  { id: 2, caption: "Golden hour", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80" },
  { id: 3, caption: "Effortless", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80" },
  { id: 4, caption: "Everyday luxe", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80" },
  { id: 5, caption: "Soft glow", image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80" },
];

const UGCCard = () => {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
      {UGCData.map((item) => (
        <div key={item.id} className="ugc-card snap-start rounded-sm overflow-hidden">
          <img 
            src={item.image} 
            alt={item.caption}
            className="w-full h-full object-cover"
          />
          <div className="ugc-caption">{item.caption}</div>
        </div>
      ))}
    </div>
  );
};

export default UGCCard;
