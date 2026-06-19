import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ReelRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const reels = [
    { id: 'reel-1', title: 'Everday Radiance', desc: 'The Golden Sphere Huggies' },
    { id: 'reel-2', title: 'Layered Elegance', desc: 'Curated Necklace Stacks' },
    { id: 'reel-3', title: 'Golden Hour', desc: 'Capturing the light' },
    { id: 'reel-4', title: 'Velmora Muse', desc: 'Styled by you' },
    { id: 'reel-5', title: 'Craft Details', desc: 'In our atelier' },
  ];

  return (
    <section ref={containerRef} className="py-24 bg-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <h2 className="text-sm uppercase tracking-[0.3em] font-medium text-muted-foreground text-center">As Seen On You</h2>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto pb-12 px-6 md:px-12 scrollbar-hide no-scrollbar">
        {reels.map((reel) => (
          <div key={reel.id} className="relative flex-shrink-0 w-64 md:w-80 aspect-[9/16] group cursor-pointer overflow-hidden">
            <div
              className="absolute inset-0 bg-secondary transition-transform duration-1000 group-hover:scale-110"
              data-strk-bg-id={`reel-bg-${reel.id}`}
              data-strk-bg={`[reel-title-${reel.id}] [reel-desc-${reel.id}] gold jewelry lifestyle model`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="800"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h4 id={`reel-title-${reel.id}`} className="text-xl font-serif text-white mb-1">
                {reel.title}
              </h4>
              <p id={`reel-desc-${reel.id}`} className="text-xs text-white/80 uppercase tracking-widest font-light">
                {reel.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReelRow;
