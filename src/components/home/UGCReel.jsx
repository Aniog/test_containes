import React from 'react';

const UGCReel = () => {
  const reels = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
      caption: "Morning light with my new huggies",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
      caption: "The necklace I never take off",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
      caption: "Stacking my favorites",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
      caption: "Golden hour glow",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      caption: "The perfect everyday ear cuff",
    },
  ];

  return (
    <section className="section bg-surface-warm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-xs tracking-[0.15em] text-text-muted mb-2">AS SEEN ON</p>
          <h2 className="serif text-3xl tracking-tight">Real moments, real women</h2>
        </div>

        <div className="reel-scroll flex gap-4 overflow-x-auto pb-4 -mx-1 px-1 snap-x snap-mandatory">
          {reels.map((reel) => (
            <div key={reel.id} className="ugc-card w-[160px] md:w-[180px] aspect-[9/16] bg-bg-dark snap-start">
              <img 
                src={reel.image} 
                alt={reel.caption}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="ugc-caption">
                <p className="serif text-sm leading-tight tracking-wide">"{reel.caption}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;