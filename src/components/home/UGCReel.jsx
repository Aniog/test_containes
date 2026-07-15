import React from 'react';

const UGCReel = () => {
  const ugcItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
      caption: "My everyday staple",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
      caption: "Gifted myself this beauty",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
      caption: "Perfect for date night",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
      caption: "My new favorite",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80",
      caption: "Worn on my wedding day",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[var(--velmora-bg-dark)]">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-xs tracking-[0.15em] text-muted uppercase mb-2">As Seen On You</p>
        <h2 className="font-serif text-3xl md:text-4xl">Real Moments, Real Jewelry</h2>
      </div>

      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-4 pl-6 md:pl-[calc((100vw-1280px)/2+24px)]">
          {ugcItems.map((item) => (
            <div key={item.id} className="ugc-card">
              <img src={item.image} alt={item.caption} />
              <div className="ugc-caption">
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
