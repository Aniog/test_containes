import React from 'react';

const UGCReel = () => {
  const reels = [
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
    <section className="bg-[var(--color-bg-alt)] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-gold)] mb-2">As Seen On You</p>
          <h2 className="text-4xl md:text-5xl font-serif">Worn with Grace</h2>
        </div>
      </div>

      <div className="ugc-scroll pl-6 md:pl-12 pr-6">
        {reels.map((reel) => (
          <div key={reel.id} className="ugc-card">
            <img src={reel.image} alt={reel.caption} />
            <div className="ugc-caption">{reel.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
