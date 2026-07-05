import React from 'react';

const UGCReels = () => {
  const reels = [
    { id: 1, caption: 'Everyday stacking essentials.' },
    { id: 2, caption: 'Ethically crafted 18K plating.' },
    { id: 3, caption: 'The necklace that goes with everything.' },
    { id: 4, caption: 'Golden hour in Velmora.' },
    { id: 5, caption: 'Self-care in silver and gold.' },
    { id: 6, caption: 'A touch of luxury for the commute.' },
  ];

  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-serif">Worn by You</h2>
        <p className="text-sm text-muted-foreground mt-4 uppercase tracking-[0.2em]">Tag @VELMORAFINE to be featured</p>
      </div>

      <div className="flex space-x-4 overflow-x-auto no-scrollbar px-6 md:px-12 pb-8">
        {reels.map((reel) => (
          <div key={reel.id} className="relative flex-none w-[280px] md:w-[320px] aspect-[9/16] bg-muted group overflow-hidden">
            <img
              alt="UGC"
              data-strk-img-id={`ugc-${reel.id}`}
              data-strk-img={`person wearing velmora fine jewelry lifestyle aesthetic`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <p className="text-white text-lg font-serif italic leading-snug">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
