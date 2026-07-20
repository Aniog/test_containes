import React from 'react';

const ugcItems = [
  { id: 1, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80", caption: "Morning light" },
  { id: 2, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80", caption: "Golden hour" },
  { id: 3, image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80", caption: "Everyday elegance" },
  { id: 4, image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80", caption: "Soft moments" },
  { id: 5, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80", caption: "Timeless" },
  { id: 6, image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80", caption: "Quiet luxury" },
];

const UGCReel = () => {
  return (
    <section className="py-16 bg-[var(--velmora-ivory)]">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <span className="uppercase tracking-[0.2em] text-xs text-[var(--velmora-gold)]">As seen on you</span>
        <h2 className="font-serif text-3xl mt-2">Worn with intention</h2>
      </div>
      
      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-3 pl-6 md:pl-6">
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
