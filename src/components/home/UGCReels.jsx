import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReels = () => {
  const containerRef = useRef(null);
  
  const reels = [
    { id: 1, caption: "Golden hour glow with the Aura Cuff." },
    { id: 2, caption: "Effortless stacking for the minimalists." },
    { id: 3, caption: "The perfect gift for yourself or a loved one." },
    { id: 4, caption: "Details that define your personal style." },
    { id: 5, caption: "From coffee dates to candlelight dinners." },
    { id: 6, caption: "Our signature gold finish on everyday pieces." }
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-secondary/30 overflow-hidden">
      <div className="px-6 mb-12 flex items-baseline justify-between max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif">As Worn By You</h2>
        <a href="#" className="text-[10px] tracking-widest uppercase font-bold text-muted-foreground hover:text-accent transition-colors">Follow @Velmora</a>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-8 px-6 no-scrollbar snap-x">
        {reels.map((reel) => (
          <div 
            key={reel.id} 
            className="flex-none w-64 md:w-80 aspect-[9/16] relative group snap-start bg-secondary overflow-hidden"
          >
            <img
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`[ugc-caption-${reel.id}] jewelry lifestyle vertical`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt="UGC Content"
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p id={`ugc-caption-${reel.id}`} className="text-white font-serif italic text-sm md:text-base leading-relaxed">
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
