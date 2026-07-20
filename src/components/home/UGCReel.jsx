import React from 'react';

const UGCReel = () => {
  const ugcItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
      caption: "Golden hour with my new huggies",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
      caption: "The necklace I never take off",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
      caption: "Wedding day details",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
      caption: "Everyday elegance",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      caption: "Gifted to myself",
    },
  ];

  return (
    <section className="bg-velmora-bg-alt py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <p className="uppercase tracking-[0.15em] text-xs text-velmora-gold-dark mb-2">As Seen On You</p>
          <h2 className="heading-serif text-4xl md:text-5xl">Worn in the Wild</h2>
        </div>
      </div>

      <div className="pl-6">
        <div className="ugc-scroll">
          {ugcItems.map((item) => (
            <div key={item.id} className="ugc-card">
              <img src={item.image} alt={item.caption} />
              <div className="ugc-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
