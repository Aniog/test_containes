import React from 'react';

const UGCReel = () => {
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
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80",
      caption: "Soft light, soft gold",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
      caption: "Worn with intention",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
      caption: "Timeless moments",
    },
  ];

  return (
    <section className="bg-[#F1EDE6] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-xs tracking-[0.2em] uppercase text-[#6B6560] mb-2">From Our Community</p>
        <h2 className="heading-serif text-3xl md:text-4xl">Worn Beautifully</h2>
      </div>

      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-4 pl-6 md:pl-6 pr-6">
          {ugcItems.map((item) => (
            <div key={item.id} className="ugc-card">
              <img src={item.image} alt={item.caption} />
              <div className="ugc-overlay">
                <p className="ugc-caption">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
