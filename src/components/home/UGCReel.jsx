import React from 'react';

const UGCReel = () => {
  const reels = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
      caption: "Morning light with my new huggies"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
      caption: "The necklace I never take off"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
      caption: "Layered for the evening"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80",
      caption: "Gold that feels like me"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
      caption: "My everyday uniform"
    }
  ];

  return (
    <section className="bg-velmora-bg py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">As seen on you</span>
          <h2 className="heading-serif text-3xl text-white mt-2">In the Wild</h2>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {reels.map((reel) => (
            <div key={reel.id} className="ugc-card snap-start">
              <img src={reel.image} alt={reel.caption} />
              <div className="ugc-caption">
                {reel.caption}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-xs text-white/50 mt-4 tracking-widest">
          #VELMORA — TAG US TO BE FEATURED
        </p>
      </div>
    </section>
  );
};

export default UGCReel;