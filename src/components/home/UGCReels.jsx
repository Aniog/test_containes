import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCReels = () => {
  const containerRef = useRef(null);
  
  const reels = [
    { id: 'reel-1', caption: 'Everyday Glow' },
    { id: 'reel-2', caption: 'The Amber Set' },
    { id: 'reel-3', caption: 'Modern Classic' },
    { id: 'reel-4', caption: 'Weekend Staples' },
    { id: 'reel-5', caption: 'Velmora Muse' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-sm uppercase tracking-[0.4em] text-velmora-gold mb-2">As Seen On You</h2>
          <h3 className="text-4xl font-serif">Velmora Muse</h3>
        </div>
        <button className="hidden md:block link-underline text-xs uppercase tracking-velmora text-charcoal/60">
          Tag us @Velmora_Fine
        </button>
      </div>

      <div className="flex space-x-4 px-6 md:px-12 overflow-x-auto no-scrollbar scroll-smooth">
        {reels.map((reel) => (
          <div key={reel.id} className="flex-shrink-0 w-64 md:w-80 relative group cursor-pointer overflow-hidden rounded-sm">
            <div className="aspect-[9/16] bg-gray-200">
              <img
                alt={reel.caption}
                data-strk-img-id={`ugc-img-${reel.id}`}
                data-strk-img={`[ugc-caption-${reel.id}] woman wearing jewelry vertical reel aesthetic gold earrings necklace`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute bottom-6 left-6 right-6">
              <span 
                id={`ugc-caption-${reel.id}`}
                className="text-white text-xl md:text-2xl font-serif italic text-shadow-sm"
              >
                {reel.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
