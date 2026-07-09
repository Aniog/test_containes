import React from 'react';

// UGC-style vertical cards mimicking Instagram Reels
const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80',
    caption: 'Morning light on the Vivid Aura',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80',
    caption: 'Golden hour with the Flora Nectar',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80',
    caption: 'Everyday elegance in the Sphere Huggies',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80',
    caption: 'Lace details catching the sun',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80',
    caption: 'The Heirloom Set, passed down',
  },
];

const UGCRow = () => {
  return (
    <div className="overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex gap-4 pl-4 md:pl-0">
        {ugcItems.map((item) => (
          <div key={item.id} className="ugc-card rounded-sm">
            <img src={item.image} alt={item.caption} loading="lazy" />
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