import React from 'react';

const ReelsRow = () => {
  const reels = [
    { id: 1, title: 'Stacked to Perfection', label: 'Ear Cuffs & Huggies' },
    { id: 2, title: 'The Golden Glow', label: 'Necklace Layering' },
    { id: 3, title: 'Effortless Detail', label: 'Daily Essentials' },
    { id: 4, title: 'Gift of Gold', label: 'Collections' },
    { id: 5, title: 'Made for You', label: 'Personalized' },
  ];

  return (
    <section className="py-24 overflow-hidden bg-[#FAF9F6]">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-12">
        <h2 id="reels-title" className="text-xs uppercase tracking-[0.2em] font-medium">Wear it your way</h2>
      </div>
      
      <div className="flex overflow-x-auto no-scrollbar space-x-4 px-6 lg:px-12 pb-8">
        {reels.map((reel) => (
          <div key={reel.id} className="flex-shrink-0 w-[280px] aspect-[9/16] relative group overflow-hidden bg-muted">
            <img
              data-strk-img-id={`reel-img-${reel.id}`}
              data-strk-img={`[reel-title-${reel.id}] [reel-label-${reel.id}] [reels-title]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-105"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
              <span id={`reel-label-${reel.id}`} className="text-white/70 text-[10px] uppercase tracking-widest mb-1">{reel.label}</span>
              <h3 id={`reel-title-${reel.id}`} className="text-white font-serif text-lg leading-snug">{reel.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ReelsRow;
