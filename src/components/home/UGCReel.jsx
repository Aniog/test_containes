import React from 'react';

// UGC-style vertical cards mimicking Instagram Reels
const ugcItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
    caption: "Morning light with my Flora Nectar"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    caption: "The ear cuff I never take off"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
    caption: "Golden hour in the garden"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80",
    caption: "Stacking my huggies"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    caption: "Heirloom set for my sister"
  },
];

const UGCReel = () => {
  return (
    <section className="bg-[#F8F5F1] py-16 border-y border-[#E8E4DE]">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="text-xs tracking-[0.15em] text-[#C5A46E] mb-2">AS SEEN ON YOU</p>
        <h2 className="font-serif-custom text-3xl tracking-[0.02em]">Real Moments</h2>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-4 pl-6 pr-6 max-w-7xl mx-auto">
          {ugcItems.map((item) => (
            <div 
              key={item.id} 
              className="ugc-card w-[160px] md:w-[180px] aspect-[9/16] bg-[#1A1816] rounded-sm overflow-hidden"
            >
              <img 
                src={item.image} 
                alt={item.caption}
                className="w-full h-full object-cover"
              />
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
