import React from 'react';

const UGCReel = () => {
  const reels = [
    { id: 1, caption: "Morning light", query: "gold huggie earrings on ear close up natural light" },
    { id: 2, caption: "Layered grace", query: "gold necklace layered on neck elegant" },
    { id: 3, caption: "Golden hour", query: "gold jewelry on model sunset warm light" },
    { id: 4, caption: "Everyday heirloom", query: "gold ear cuff on ear detail shot" },
    { id: 5, caption: "Soft moments", query: "delicate gold necklace on collarbone" },
  ];

  return (
    <section className="py-16 bg-[#F0EBE3]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs tracking-[0.15em] text-[#B89778] mb-2">AS SEEN ON YOU</p>
        <h2 className="font-serif text-3xl mb-8 tracking-wide">In the Wild</h2>
      </div>

      <div className="overflow-x-auto pb-6 scrollbar-hide">
        <div className="flex gap-4 pl-6 md:pl-6 max-w-7xl mx-auto">
          {reels.map((reel) => (
            <div key={reel.id} className="ugc-card w-[160px] md:w-[180px] aspect-[9/16] bg-[#1C1917]">
              <img
                data-strk-img-id={`ugc-${reel.id}`}
                data-strk-img={`${reel.query} jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover"
              />
              <div className="ugc-caption">
                <p className="font-serif text-sm tracking-wide">{reel.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
