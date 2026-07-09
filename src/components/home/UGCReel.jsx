import React from 'react';

export const UGCReel = () => {
  const reels = [
    { id: 1, caption: "Golden Hour Glow", user: "Sophia R." },
    { id: 2, caption: "The Perfect Stack", user: "Emma L." },
    { id: 3, caption: "Effortless Elegance", user: "Olivia W." },
    { id: 4, caption: "Daily Essentials", user: "Isabella B." },
    { id: 5, caption: "Layers that Tell a Story", user: "Mia K." },
    { id: 6, caption: "Timeless Texture", user: "Amelia G." },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12 flex items-end justify-between">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-serif">Worn by You</h2>
          <p className="text-muted-foreground font-sans tracking-wide">Tag @VELMORA to be featured.</p>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar">
        {reels.map((reel) => (
          <div 
            key={reel.id} 
            className="flex-shrink-0 w-[240px] md:w-[280px] aspect-[9/16] relative group snap-start bg-muted"
          >
            <img
              alt={`UGC ${reel.id}`}
              data-strk-img-id={`ugc-img-${reel.id}`}
              data-strk-img={`woman wearing gold jewelry lifestyle photography portrait ${reel.caption}`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="/placeholder.svg"
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <p id={`ugc-cap-${reel.id}`} className="font-serif italic text-lg leading-snug">{reel.caption}</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-70">— {reel.user}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
