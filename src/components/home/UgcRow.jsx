import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Play } from 'lucide-react';

const UgcRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const reels = [
    { id: 'reel-1', text: "My everyday gold stack ✨", imgId: 'ugc-1' },
    { id: 'reel-2', text: "The perfect chunky huggies", imgId: 'ugc-2' },
    { id: 'reel-3', text: "Ready for date night", imgId: 'ugc-3' },
    { id: 'reel-4', text: "Obsessed with these textures", imgId: 'ugc-4' },
    { id: 'reel-5', text: "Unboxing my latest pieces", imgId: 'ugc-5' },
    { id: 'reel-6', text: "How I style the Flora set", imgId: 'ugc-6' },
  ];

  return (
    <section ref={containerRef} className="py-16 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 mb-8 flex justify-between items-center">
        <h2 id="ugc-title" className="text-2xl font-serif">As Seen On You</h2>
        <span className="text-sm tracking-widest uppercase hover:text-primary cursor-pointer border-b border-transparent hover:border-primary pb-1">@velmorajewelry</span>
      </div>
      
      {/* Horizontal scrolling wrapper */}
      <div className="flex gap-4 px-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {reels.map((reel) => (
          <div key={reel.id} className="relative shrink-0 w-64 aspect-[9/16] snap-center overflow-hidden group cursor-pointer bg-background">
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.id}-text] girl wearing gold jewelry selfie style instagram reels`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.text}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Play icon overlay */}
            <div className="absolute top-4 right-4 text-white drop-shadow-md">
              <Play size={20} fill="currentColor" className="opacity-80" />
            </div>
            
            {/* Gradient overlay at bottom for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
            
            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p id={`${reel.id}-text`} className="font-serif text-lg leading-snug drop-shadow-md">"{reel.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UgcRow;