import React from 'react';

// Reel-style UGC row - vertical 9:16 cards mimicking Instagram Reels
const UGCRow = () => {
  const ugcItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
      caption: "My everyday staple",
      handle: "@sophia.l"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
      caption: "Gifted myself these",
      handle: "@marina.c"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
      caption: "Perfect for date night",
      handle: "@elena.v"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
      caption: "Obsessed with the detail",
      handle: "@isabelle.m"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=600&q=80",
      caption: "Wore these to my wedding",
      handle: "@claire.r"
    }
  ];

  return (
    <section className="bg-[#0F0E0C] py-14 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-[#C5A46E] text-xs tracking-[3px]">AS SEEN ON YOU</span>
            <h3 className="font-serif text-2xl text-white tracking-[-0.3px] mt-1">Real Moments</h3>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[2px] text-[#C5A46E] hover:text-white transition-colors hidden md:block">
            FOLLOW @VELMORA
          </a>
        </div>

        {/* Horizontal scroll of vertical cards */}
        <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-1 px-1">
          {ugcItems.map((item) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 w-[140px] md:w-[160px] snap-start"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-sm bg-[#1A1815]">
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                {/* Soft overlay with caption */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="font-serif text-white text-xs tracking-wide leading-tight">{item.caption}</p>
                  <p className="text-[10px] text-white/60 mt-1">{item.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="md:hidden mt-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[2px] text-[#C5A46E]">
            FOLLOW @VELMORA →
          </a>
        </div>
      </div>
    </section>
  );
};

export default UGCRow;