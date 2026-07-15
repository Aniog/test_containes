import React from 'react';
const UGCReel = () => {
  const reels = [
    { id: 1, caption: "Golden Hour Glow" },
    { id: 2, caption: "The Perfect Huggie" },
    { id: 3, caption: "Stacking Essentials" },
    { id: 4, caption: "Everyday Luxury" },
    { id: 5, caption: "Gift of Gold" },
    { id: 6, caption: "Minimalist Style" }
  ];
  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <h2 id="ugc-title" className="text-3xl md:text-4xl font-serif">As Seen On You</h2>
          <p className="text-gray-400 font-sans uppercase tracking-[0.2em] text-[10px] mt-2">Tag @VELMORAFINE to be featured</p>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-8 px-6 md:px-12 no-scrollbar scroll-smooth">
        {reels.map((reel) => (
          <div key={reel.id} className="relative min-w-[280px] md:min-w-[320px] aspect-[9/16] overflow-hidden group">
            <img
              data-strk-img-id={`ugc-img-${reel.id}`}
              data-strk-img={`[ugc-caption-${reel.id}] woman wearing gold jewelry model ear neck close-up`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 right-6">
              <p id={`ugc-caption-${reel.id}`} className="text-white font-serif text-lg italic opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
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
