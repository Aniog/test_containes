import React from 'react';

// Sample UGC-style captions and image URLs (warm editorial jewelry on ear/neck)
const ugcItems = [
  {
    id: 1,
    caption: "My everyday staple",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80",
  },
  {
    id: 2,
    caption: "Gifted myself this set",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
  },
  {
    id: 3,
    caption: "Feels like real gold",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80",
  },
  {
    id: 4,
    caption: "Wore these to my sister's wedding",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
  },
  {
    id: 5,
    caption: "Never taking them off",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80",
  },
  {
    id: 6,
    caption: "Perfect for layering",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
  },
];

const UGCReel = () => {
  return (
    <section className="bg-[var(--color-surface-warm)] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs tracking-[0.15em] text-[var(--color-gold)] uppercase">Real Moments</span>
            <h2 className="heading-display text-3xl md:text-4xl mt-1">As Seen on You</h2>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto scroll-container pl-6">
        <div className="flex gap-4 pb-4">
          {ugcItems.map((item) => (
            <div key={item.id} className="ugc-card rounded-sm">
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
