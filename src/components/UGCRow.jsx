import React from 'react';

const UGCRow = () => {
  const ugcItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
      caption: "Worn daily, loved always.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
      caption: "My forever piece.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
      caption: "Gifted to myself.",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80",
      caption: "The perfect stack.",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
      caption: "Effortless elegance.",
    },
  ];

  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex gap-3 pb-2">
        {ugcItems.map((item) => (
          <div key={item.id} className="ugc-card">
            <img src={item.image} alt="Customer wearing Velmora jewelry" />
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
