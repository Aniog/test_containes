import React from 'react';

const UGCReels = () => {
  const reels = [
    { title: 'The Everyday Companion', id: 'reel-1' },
    { title: 'Golden Hour Glow', id: 'reel-2' },
    { title: 'Layered Aesthetics', id: 'reel-3' },
    { title: 'Morning Rituals', id: 'reel-4' },
    { title: 'Timeless Details', id: 'reel-5' },
    { title: 'Simply Elegant', id: 'reel-6' },
  ];

  return (
    <section className="py-24 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif mb-2">As Seen On You</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Tag @VelmoraJewelry to be featured</p>
        </div>
      </div>

      <div className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 pb-10">
        {reels.map((reel, idx) => (
          <div 
            key={idx}
            className="flex-shrink-0 w-48 sm:w-64 aspect-[9/16] relative group overflow-hidden bg-stone-200"
          >
            <div 
              className="absolute inset-0 z-0 transition-transform duration-[2s] group-hover:scale-110"
              data-strk-bg-id={`ugc-reel-${reel.id}`}
              data-strk-bg={`[reel-caption-${reel.id}] woman wearing jewelry portrait lifestyle gold`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="600"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 right-6 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p id={`reel-caption-${reel.id}`} className="text-white text-sm font-serif italic">
                {reel.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
