import React from 'react';

const reels = [
  { id: 1, caption: "Golden Hour Glow", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E" },
  { id: 2, caption: "Everyday Essentials", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E" },
  { id: 3, caption: "Luxe Layers", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E" },
  { id: 4, caption: "The Collection", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E" },
  { id: 5, caption: "Subtle Details", image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E" },
];

const UGCReel = () => {
  return (
    <section className="py-24 overflow-hidden bg-secondary">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex items-end justify-between">
        <div>
          <h2 id="ugc-title" className="text-3xl font-serif italic mb-2 tracking-tight">As seen on you</h2>
          <p id="ugc-subtitle" className="text-[10px] uppercase-widest tracking-[0.2em] text-zinc-400">#VelmoraMuse</p>
        </div>
        <button className="text-[10px] uppercase-widest tracking-widest border-b border-zinc-900 pb-1 font-semibold">View Instagram</button>
      </div>

      <div className="flex space-x-4 overflow-x-auto no-scrollbar px-6 md:px-12 pb-4">
        {reels.map((reel) => (
          <div key={reel.id} className="relative flex-none w-[280px] aspect-[9/16] bg-zinc-200 overflow-hidden group">
            <img 
              data-strk-img-id={`reel-${reel.id}`}
              data-strk-img={`[reel-caption-${reel.id}] [ugc-subtitle] jewelry worn`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src={reel.image} 
              alt={reel.caption} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p id={`reel-caption-${reel.id}`} className="text-white font-serif italic text-lg leading-tight">
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
