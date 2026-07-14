import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReels = () => {
  const containerRef = useRef(null);
  const reels = [
    { id: 1, caption: 'Perfect everyday glow' },
    { id: 2, caption: 'The necklace of my dreams' },
    { id: 3, caption: 'Effortless stacking' },
    { id: 4, caption: 'Golden hour moments' },
    { id: 5, caption: 'A gift for myself' },
    { id: 6, caption: 'Simply radiant' }
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#FDFCFB] overflow-hidden">
      <div className="px-6 mb-12 flex justify-between items-end max-w-7xl mx-auto">
        <div className="space-y-2">
          <h2 id="ugc-title" className="text-3xl font-light">As Seen on You</h2>
          <p id="ugc-subtitle" className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">Tag @VELMORA #VelmoraInGold</p>
        </div>
        <a href="#" className="hidden md:block text-xs uppercase tracking-widest font-medium border-b border-foreground pb-1">Follow us</a>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-8 px-6 scrollbar-hide snap-x">
        {reels.map((reel) => (
          <div key={reel.id} className="min-w-[200px] md:min-w-[280px] aspect-[9/16] relative group snap-start bg-muted">
            <img
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`woman wearing luxury gold jewelry editorial portrait social media style`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
               <p id={`reel-caption-${reel.id}`} className="text-white text-lg font-serif italic font-light leading-snug">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
