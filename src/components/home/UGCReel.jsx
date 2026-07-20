import React from 'react';
import { motion } from 'framer-motion';

const UGCReel = () => {
  const reels = [
    { id: 1, caption: "Golden hour glow", imgId: "ugc-1" },
    { id: 2, caption: "Everyday luxury", imgId: "ugc-2" },
    { id: 3, caption: "The perfect stack", imgId: "ugc-3" },
    { id: 4, caption: "Minimal details", imgId: "ugc-4" },
    { id: 5, caption: "Effortless style", imgId: "ugc-5" },
    { id: 6, caption: "Gilded elegance", imgId: "ugc-6" },
  ];

  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif mb-2">As Seen On You</h2>
          <p className="uppercase-spaced text-[10px] text-zinc-500">Shared by our community</p>
        </div>
        <p className="uppercase-spaced text-[10px] border-b border-primary pb-1 cursor-pointer">@VelmoraFine</p>
      </div>

      <div className="flex gap-4 px-6 md:px-12 overflow-x-auto no-scrollbar scroll-smooth">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 relative w-[240px] md:w-[320px] aspect-[9/16] bg-zinc-200 overflow-hidden group"
          >
            <img
              data-strk-img-id={`ugc-${reel.id}`}
              data-strk-img={`[ugc-caption-${reel.id}] woman wearing gold jewelry ear neck close up editorial`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 right-6">
              <p id={`ugc-caption-${reel.id}`} className="text-white font-serif text-lg italic opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
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
