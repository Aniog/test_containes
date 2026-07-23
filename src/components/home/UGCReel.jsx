import React from 'react';

const UGCReel = () => {
  const reels = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
      caption: "Golden hour glow",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
      caption: "Everyday elegance",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
      caption: "Soft light, soft gold",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
      caption: "Worn with intention",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      caption: "Timeless layers",
    },
  ];

  return (
    <section className="py-16 bg-[#F2EDE6]">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="uppercase tracking-[0.15em] text-xs text-[#6B645C] mb-2">From Our Community</p>
        <h2 className="font-serif text-3xl tracking-[0.05em]">Worn by You</h2>
      </div>

      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-3 pl-6 md:pl-6">
          {reels.map((reel) => (
            <div key={reel.id} className="ugc-card">
              <img src={reel.image} alt={reel.caption} />
              <div className="caption">
                {reel.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;