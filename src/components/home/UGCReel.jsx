import React from 'react';

const UGCReel = () => {
  const reels = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
      caption: "Golden hour with my new huggies",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
      caption: "The necklace I never take off",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
      caption: "Wearing these every day",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80",
      caption: "Perfect for my sister's wedding",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
      caption: "My everyday ear stack",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-xs tracking-[0.2em] text-[#6B6058] uppercase mb-2">As Seen On You</p>
        <h2 className="serif text-3xl md:text-4xl tracking-[-0.01em]">Real Moments, Real Jewelry</h2>
      </div>

      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-3 pl-6 md:pl-6 max-w-7xl mx-auto">
          {reels.map((reel) => (
            <div key={reel.id} className="ugc-card rounded-sm">
              <img src={reel.image} alt={reel.caption} />
              <div className="ugc-caption">
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
