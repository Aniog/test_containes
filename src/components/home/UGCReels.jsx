import React from 'react';

const UGCReels = () => {
  const reels = [
    { id: 1, caption: 'Golden hour glow' },
    { id: 2, caption: 'Everyday stacking' },
    { id: 3, caption: 'Necklace layering' },
    { id: 4, caption: 'Minimalist touch' },
    { id: 5, caption: 'Timeless huggies' },
    { id: 6, caption: 'Bestseller Aura' }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between max-w-7xl mx-auto">
        <div>
          <h2 className="text-4xl font-serif mb-4">Adored by You</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-xs">Stories from our community</p>
        </div>
        <button className="hidden md:block text-sm uppercase tracking-widest border-b border-black pb-1">@VelmoraFineJewelry</button>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar px-6 md:px-[calc((100vw-1280px)/2)]">
        {reels.map((reel) => (
          <div key={reel.id} className="relative flex-none w-[280px] aspect-[9/16] snap-start group overflow-hidden bg-secondary">
            <img
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`[ugc-caption-${reel.id}] woman wearing gold jewelry lifestyle`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6">
              <p 
                id={`ugc-caption-${reel.id}`}
                className="text-white font-serif italic text-lg"
              >
                "{reel.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
