import React from 'react';

const UGCRow = () => {
  const ugcItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
      caption: "Wearing my new huggies every day",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
      caption: "The perfect gift from my sister",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
      caption: "Layering the flora necklace",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80",
      caption: "Gold that feels like me",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
      caption: "My everyday ear stack",
    },
  ];

  return (
    <div className="overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex gap-4 pl-4 md:pl-0">
        {ugcItems.map((item) => (
          <div key={item.id} className="ugc-card rounded-sm">
            <img src={item.image} alt={item.caption} />
            <div className="caption-overlay">
              <p>"{item.caption}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UGCRow;
