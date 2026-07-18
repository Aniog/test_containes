import React from 'react';

const UGCReel = () => {
  const reels = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
      caption: "Morning light with my new huggies",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
      caption: "The necklace I never take off",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80",
      caption: "Dressed up for date night",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
      caption: "My everyday ear stack",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
      caption: "Gifted myself something special",
    },
  ];

  return (
    <section className="bg-[#F5F2ED] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-xs tracking-[3px] text-[#B89778] mb-2">AS SEEN ON YOU</p>
          <h2 className="font-serif text-3xl tracking-[1px] text-[#2C2825]">Real Moments</h2>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reels.map((reel) => (
            <div 
              key={reel.id} 
              className="flex-shrink-0 w-[160px] md:w-[180px] snap-start"
            >
              <div className="relative aspect-[9/16] overflow-hidden bg-[#E8E4DE] rounded-sm">
                <img 
                  src={reel.image} 
                  alt={reel.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="font-serif text-white text-xs tracking-[0.5px] leading-tight">
                    "{reel.caption}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
