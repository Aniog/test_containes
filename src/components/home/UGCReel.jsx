import React from 'react';

const UGCReel = () => {
  const reels = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
      caption: "My everyday staple. Never take it off."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
      caption: "The perfect gift for my sister."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
      caption: "Feels like real gold. Looks even better."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80",
      caption: "Wore these to my wedding."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
      caption: "Subtle but makes a statement."
    }
  ];

  return (
    <section className="bg-velmora-surface-alt py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <div className="uppercase tracking-[0.12em] text-xs text-velmora-text-light mb-1">As Seen On You</div>
          <h2 className="font-serif text-3xl">Real Moments</h2>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-1 px-1">
          {reels.map((reel) => (
            <div key={reel.id} className="ugc-card snap-start rounded-sm">
              <img src={reel.image} alt="Customer wearing Velmora jewelry" />
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
