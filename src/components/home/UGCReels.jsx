import React from 'react';

const UGCReels = () => {
  const reels = [
    { id: 1, caption: "Golden Hour Glow", user: "Elena M." },
    { id: 2, caption: "The Perfect Stack", user: "Sophie T." },
    { id: 3, caption: "Editorial Edge", user: "Chloe R." },
    { id: 4, caption: "Daily Essentials", user: "Maya L." },
    { id: 5, caption: "Gifting Dreams", user: "Sarah J." },
    { id: 6, caption: "Lustrous Links", user: "Isabella K." },
  ];

  return (
    <section className="py-24 bg-muted/50 overflow-hidden">
      <div className="px-6 md:px-12 mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-serif tracking-tight mb-2">As Seen On You</h2>
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Tag us @VELMORA #VelmoraJewels</p>
      </div>
      
      <div className="flex space-x-4 px-6 md:px-12 overflow-x-auto pb-8 scrollbar-hide no-scrollbar">
        {reels.map((reel) => (
          <div key={reel.id} className="relative flex-none w-[200px] md:w-[260px] aspect-[9/16] group cursor-pointer overflow-hidden">
            <img 
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`woman wearing jewelry ${reel.caption} instagram reel style`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={`UGC by ${reel.user}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 opacity-80 group-hover:opacity-100 transition-opacity">
              <p className="text-white font-serif text-lg leading-tight mb-1">{reel.caption}</p>
              <p className="text-white/70 text-[10px] tracking-widest uppercase">{reel.user}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
