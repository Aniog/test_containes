import React from 'react';

const UGCReel = () => {
  const reels = [
    { id: 1, image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80', caption: 'Morning light' },
    { id: 2, image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80', caption: 'Golden hour' },
    { id: 3, image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80', caption: 'Everyday elegance' },
    { id: 4, image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80', caption: 'Soft moments' },
    { id: 5, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80', caption: 'Timeless' },
  ];

  return (
    <section className="bg-[var(--color-bg-alt)] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="text-center">
          <span className="text-xs tracking-[0.2em] text-[var(--color-gold)]">AS SEEN ON</span>
          <h2 className="font-serif text-3xl md:text-4xl mt-2">Worn by You</h2>
        </div>
      </div>

      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-3 pl-6 md:pl-[calc((100vw-1280px)/2+24px)] pr-6">
          {reels.map((reel) => (
            <div key={reel.id} className="ugc-card">
              <img src={reel.image} alt={reel.caption} />
              <div className="caption">{reel.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
