import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Play } from 'lucide-react';

const UGCReels = () => {
  const containerRef = useRef(null);

  const reels = [
    { id: 1, handle: '@sarahstyles', caption: 'Everyday stack with the vivid aura ✨' },
    { id: 2, handle: '@minimalist.chic', caption: 'Golden Hour ☀️ #huggies' },
    { id: 3, handle: '@emily_wears', caption: 'The perfect layering necklace' },
    { id: 4, handle: '@jewelrylover', caption: 'Sunday details.' },
    { id: 5, handle: '@stylebyk', caption: 'Unboxing my new favorites 🤍' },
  ];

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-stone-900 border-t border-stone-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center text-stone-50">
        <h2 id="ugc-title" className="text-3xl font-serif tracking-wide mb-4">Seen on You</h2>
        <p className="font-light text-stone-400">Tag @velmorajewelry to be featured.</p>
      </div>

      <div className="relative max-w-full">
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto gap-4 px-4 sm:px-6 lg:px-8 pb-8 no-scrollbar snap-x snap-mandatory">
          {reels.map((reel) => (
            <div 
              key={reel.id} 
              className="relative flex-none w-64 aspect-[9/16] bg-stone-800 rounded-sm overflow-hidden group snap-center cursor-pointer"
            >
              <img
                alt={`Reel from ${reel.handle}`}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={`ugc-reel-${reel.id}`}
                data-strk-img="[ugc-title] woman wearing jewelry aesthetic instagram"
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-900/90" />
              
              <div className="absolute top-4 right-4">
                <Play className="w-5 h-5 text-stone-50 drop-shadow-md" fill="currentColor" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-stone-50">
                <p className="text-sm font-medium mb-1 drop-shadow-md">{reel.handle}</p>
                <p className="text-sm text-stone-200 line-clamp-2 drop-shadow-md border-l-2 border-stone-50 pl-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {reel.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReels;
