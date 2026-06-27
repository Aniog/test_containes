import React from 'react';

// Simulated Instagram Reels-style UGC with warm editorial jewelry imagery
const ugcItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    caption: 'Golden hour glow',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    caption: 'Everyday elegance',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80',
    caption: 'Layered in love',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1506630448388-4e48f5cd3468?w=600&q=80',
    caption: 'Soft light, strong woman',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    caption: 'Treasured moments',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1535632787350-4e68b0bdad41?w=600&q=80',
    caption: 'Worn with intention',
  },
];

const UGCReel = () => {
  return (
    <section className="bg-velmora-bg-alt py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Real Moments</span>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight mt-1">As Seen on You</h2>
          </div>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block text-sm tracking-widest uppercase hover:text-velmora-gold-dark"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-3 pl-6 md:pl-6 max-w-7xl mx-auto">
          {ugcItems.map((item) => (
            <div key={item.id} className="ugc-card rounded-sm">
              <img src={item.image} alt={item.caption} loading="lazy" />
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
