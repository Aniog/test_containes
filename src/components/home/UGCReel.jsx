import React from 'react';

const UGCReel = () => {
  const reels = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80",
      caption: "Morning light with my new huggies"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
      caption: "The perfect gift from my sister"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80",
      caption: "Worn every day for a year"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
      caption: "Stacking my favorites"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
      caption: "Wedding day earrings"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-1">As Seen On You</p>
            <h2 className="section-title">Real Moments</h2>
          </div>
          <a href="#instagram" className="hidden md:block text-sm tracking-widest uppercase hover:text-[var(--color-gold)]">
            Follow @velmora
          </a>
        </div>

        <div className="ugc-reel">
          {reels.map((reel) => (
            <div key={reel.id} className="ugc-card">
              <img src={reel.image} alt={reel.caption} loading="lazy" />
              <div className="ugc-overlay">
                <p className="ugc-caption">"{reel.caption}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
