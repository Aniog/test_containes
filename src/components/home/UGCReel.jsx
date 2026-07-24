import React from 'react';

const UGCReel = () => {
  const reels = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80',
      caption: 'Golden hour glow',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
      caption: 'Everyday elegance',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
      caption: 'Layered moments',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80',
      caption: 'Soft light, soft gold',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
      caption: 'Worn with intention',
    },
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="mb-8">
          <span className="text-xs tracking-[0.12em] uppercase text-[#B89778]">As Seen On You</span>
          <h2 className="font-serif text-3xl mt-1">Worn with Intention</h2>
        </div>

        <div className="ugc-reel">
          {reels.map((reel) => (
            <div key={reel.id} className="ugc-card">
              <img src={reel.image} alt={reel.caption} />
              <div className="ugc-overlay">
                <p className="ugc-caption">{reel.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;