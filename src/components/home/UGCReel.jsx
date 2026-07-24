import React from 'react';

const UGCReel = () => {
  const reels = [
    { id: 1, caption: "Golden Hour Glow", location: "@sophia_m" },
    { id: 2, caption: "Everyday Essentials", location: "@mia_jewelry_box" },
    { id: 3, caption: "The Perfect Huggies", location: "@emma_styling" },
    { id: 4, caption: "Layered to Perfection", location: "@olivia_r" },
    { id: 5, caption: "Dainty & Divine", location: "@isabella_style" },
    { id: 6, caption: "Crafted Treasures", location: "@ava_l" }
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h3 className="text-2xl font-serif text-center">As worn by you</h3>
      </div>
      
      <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar pb-8">
        {reels.map((reel) => (
          <div key={reel.id} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative group overflow-hidden bg-stone-200">
            <img
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`woman wearing gold jewelry ear neck selfie styled editorial ${reel.caption}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`UGC content ${reel.id}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="font-serif text-lg italic mb-1">{reel.caption}</p>
              <p className="text-[10px] uppercase tracking-widest opacity-80">{reel.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
