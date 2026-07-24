import React from 'react';

const UGCReel = () => {
  const reels = [
    { id: 1, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80', caption: 'Golden hour glow' },
    { id: 2, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80', caption: 'Everyday elegance' },
    { id: 3, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', caption: 'Layered & loved' },
    { id: 4, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80', caption: 'Soft light, strong shine' },
    { id: 5, image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80', caption: 'Treasured daily' },
    { id: 6, image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80', caption: 'Quiet luxury' },
  ];

  return (
    <section className="section bg-velmora-bg-alt overflow-hidden">
      <div className="container mb-6">
        <div className="uppercase tracking-[0.2em] text-xs text-velmora-gold-dark mb-1">From Our Community</div>
        <h2>Worn Well</h2>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-6 pl-6 md:pl-8 snap-x snap-mandatory scrollbar-hide">
        {reels.map((reel) => (
          <div key={reel.id} className="ugc-card snap-start rounded-sm overflow-hidden">
            <img src={reel.image} alt={reel.caption} />
            <div className="ugc-overlay">
              <p className="ugc-caption">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;