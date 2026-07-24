import React from 'react';

// Simulated UGC / Instagram Reels style row
const UGCReel = () => {
  const reels = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
      caption: "Morning light with my new huggies",
      user: "@sophia.l",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
      caption: "The necklace I never take off",
      user: "@elena.m",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
      caption: "Wedding day details",
      user: "@claire.r",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
      caption: "Layered for the season",
      user: "@isabel.t",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      caption: "Gold that feels like me",
      user: "@maya.k",
    },
  ];

  return (
    <section className="bg-[#F1EDE6] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-xs tracking-[0.2em] text-[#B89778] mb-1">AS SEEN ON</p>
          <h3 className="serif text-3xl tracking-wide">Worn by you</h3>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reels.map((reel) => (
            <div 
              key={reel.id} 
              className="ugc-card flex-shrink-0 w-[160px] md:w-[180px] snap-start"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-[#1C1917] rounded-sm">
                <img 
                  src={reel.image} 
                  alt={reel.caption}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="serif text-white text-sm leading-tight tracking-wide mb-1">
                    "{reel.caption}"
                  </p>
                  <p className="text-white/70 text-xs tracking-wider">{reel.user}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
