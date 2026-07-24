import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReels = () => {
  const containerRef = useRef(null);
  
  const reels = [
    { id: 1, caption: "Golden Hour Glow" },
    { id: 2, caption: "Everyday Essentials" },
    { id: 3, caption: "The Perfect Stack" },
    { id: 4, caption: "Effortless Elegance" },
    { id: 5, caption: "Modern Heirloom" },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-stone-50 overflow-hidden">
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-10 text-center">
        <h2 className="text-3xl font-serif">Worn by You</h2>
        <p className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Tag #VelmoraVibe to be featured</p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-10 px-6 md:px-12 scrollbar-hide no-scrollbar">
        {reels.map((reel) => (
          <div key={reel.id} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative group overflow-hidden">
            <img
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`[ugc-caption-${reel.id}] jewelry worn on ear neck models`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="UGC Content"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p id={`ugc-caption-${reel.id}`} className="text-white font-serif text-xl italic">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
