import React from 'react';

// Simulated UGC / Reels style row with editorial captions
const UGCRow = () => {
  const reels = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
      caption: 'Golden hour with the Lumen Drop',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80',
      caption: 'Wearing the Flora Nectar to dinner',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
      caption: 'Everyday elegance — Sphere Huggies',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80',
      caption: 'The Heirloom Set, passed down',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80',
      caption: 'Amber Lace catching the light',
    },
  ];

  return (
    <div className="overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex gap-4 pl-6 md:pl-0">
        {reels.map((reel) => (
          <div key={reel.id} className="ugc-card aspect-[9/16]">
            <img
              src={reel.image}
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="ugc-caption">
              {reel.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UGCRow;