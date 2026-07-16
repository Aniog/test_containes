import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Reels = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  const reels = [
    { id: 1, caption: 'Quiet Luxury' },
    { id: 2, caption: 'Golden Hour' },
    { id: 3, caption: 'Daily Rituals' },
    { id: 4, caption: 'Summer Stack' },
    { id: 5, caption: 'Heirlooms' }
  ];

  return (
    <section ref={containerRef} className="py-28 bg-white overflow-hidden border-t border-black/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-3">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-medium">Community</p>
          <h2 className="text-3xl md:text-5xl font-serif italic">Worn by You</h2>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto pb-8 hide-scrollbar cursor-grab active:cursor-grabbing">
          {reels.map((reel) => (
            <div key={reel.id} className="relative min-w-[280px] md:min-w-[340px] aspect-[9/16] bg-muted overflow-hidden group">
              <img
                data-strk-img-id={`reel-v2-img-${reel.id}`}
                data-strk-img={`[reel-v2-cap-${reel.id}] jewelry ear neck lifestyle`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="720"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8">
                <p id={`reel-v2-cap-${reel.id}`} className="text-white font-serif italic text-2xl tracking-wide font-light">{reel.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reels;
