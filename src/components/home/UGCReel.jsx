import React from "react";

const UGCReel = () => {
  const reels = [
    { id: 1, caption: "Golden Hour Glow" },
    { id: 2, caption: "Effortless Layering" },
    { id: 3, caption: "The Perfect Gift" },
    { id: 4, caption: "Daily Essentials" },
    { id: 5, caption: "Refined Details" },
    { id: 6, caption: "Luminous Spirit" },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex items-center justify-between">
        <h2 className="text-3xl font-serif">Seen on You</h2>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">#VelmoraVibe</span>
      </div>

      <div className="flex space-x-4 px-6 overflow-x-auto no-scrollbar scroll-smooth pb-8">
        {reels.map((reel) => (
          <div key={reel.id} className="relative flex-shrink-0 w-64 md:w-80 aspect-[9/16] group overflow-hidden shadow-lg animate-in fade-in duration-700">
            <img
              data-strk-img-id={`ugc-${reel.id}`}
              data-strk-img={`[ugc-caption-${reel.id}] woman wearing gold jewelry lifestyle`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt={reel.caption}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 right-6">
              <p id={`ugc-caption-${reel.id}`} className="text-white font-serif text-lg leading-tight transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
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
