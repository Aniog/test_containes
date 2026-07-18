import React from 'react';

// UGC-style vertical cards mimicking Instagram Reels
const UGCReel = () => {
  const ugcItems = [
    {
      id: 1,
      image: 'https://picsum.photos/id/1005/400/700',
      caption: 'Golden hour glow'
    },
    {
      id: 2,
      image: 'https://picsum.photos/id/1012/400/700',
      caption: 'Everyday elegance'
    },
    {
      id: 3,
      image: 'https://picsum.photos/id/1009/400/700',
      caption: 'Layered with love'
    },
    {
      id: 4,
      image: 'https://picsum.photos/id/201/400/700',
      caption: 'Soft light, soft gold'
    },
    {
      id: 5,
      image: 'https://picsum.photos/id/160/400/700',
      caption: 'Treasured moments'
    }
  ];

  return (
    <section className="section" style={{ backgroundColor: '#f8f5f1' }}>
      <div className="container">
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', textAlign: 'center' }}>As Seen On You</h2>
        </div>
        
        <div className="ugc-scroll">
          {ugcItems.map((item) => (
            <div key={item.id} className="ugc-card">
              <img src={item.image} alt={item.caption} loading="lazy" />
              <div className="ugc-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
