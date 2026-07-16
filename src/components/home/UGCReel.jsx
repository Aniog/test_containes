import React from 'react';

const UGCReel = () => {
  const reels = [
    { id: 1, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80", caption: "Everyday elegance" },
    { id: 2, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80", caption: "For the moments that matter" },
    { id: 3, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80", caption: "Layered with intention" },
    { id: 4, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80", caption: "Soft light, golden hour" },
    { id: 5, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80", caption: "A gift to remember" },
  ];

  return (
    <section style={{ padding: '3rem 0 4rem', backgroundColor: 'var(--color-bg-alt)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Worn by You
        </h2>
        
        <div 
          style={{ 
            display: 'flex', 
            gap: '1rem', 
            overflowX: 'auto', 
            paddingBottom: '1rem',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          className="ugc-scroll"
        >
          {reels.map((reel) => (
            <div key={reel.id} className="ugc-card">
              <img src={reel.image} alt={reel.caption} />
              <div className="ugc-overlay">
                <span className="ugc-caption">{reel.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .ugc-scroll::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default UGCReel;