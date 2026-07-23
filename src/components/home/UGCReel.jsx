import React from 'react';

const UGCReel = () => {
  const reels = [
    { id: 'reel-1', caption: 'Everyday elegance.' },
    { id: 'reel-2', caption: 'The perfect drop.' },
    { id: 'reel-3', caption: 'Layering goals.' },
    { id: 'reel-4', caption: 'Golden hour glow.' },
    { id: 'reel-5', caption: 'Statement pieces.' },
    { id: 'reel-6', caption: 'Minimalist touch.' }
  ];

  return (
    <section className="py-24 bg-cream/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4 block">As seen on you</span>
        <h2 className="text-3xl md:text-5xl font-serif tracking-tight">Velmora in the Wild</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar px-6 lg:px-12">
        {reels.map((reel) => (
          <div key={reel.id} className="relative min-w-[200px] md:min-w-[280px] aspect-[9/16] bg-charcoal snap-start overflow-hidden group">
            <img 
              data-strk-img-id={`ugc-${reel.id}`}
              data-strk-img={`[ugc-caption-${reel.id}] jewelry worn on model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="UGC"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <p id={`ugc-caption-${reel.id}`} className="text-white font-serif italic text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                "{reel.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
