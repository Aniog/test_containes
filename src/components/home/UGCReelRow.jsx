import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json'; // Make sure this path exists or omit for now

export default function UGCReelRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    try {
      if(strkImgConfig && containerRef.current) {
        requestAnimationFrame(() => {
          ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
      }
    } catch(e) {
      console.warn("ImageHelper setup skipped for now", e);
    }
  }, []);

  const reels = [
    { id: 1, caption: "Sunday morning stack", type: "necklaces" },
    { id: 2, caption: "Effortless elegance", type: "huggies" },
    { id: 3, caption: "Golden hour glow", type: "earrings" },
    { id: 4, caption: "Everyday essentials", type: "rings" },
    { id: 5, caption: "A curated collection", type: "bracelets" },
    { id: 6, caption: "Perfectly paired", type: "sets" }
  ];

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl mb-2">As Seen On You</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">@velmorajewelry</p>
        </div>
      </div>

      {/* Horizontal scrolling strip */}
      <div className="flex overflow-x-auto gap-4 md:gap-6 px-4 md:px-6 pb-8 snap-x snap-mandatory hide-scrollbar group/reel">
        {reels.map((reel) => (
          <a 
            key={reel.id} 
            href="#" 
            className="relative flex-shrink-0 w-64 aspect-[9/16] snap-center bg-muted overflow-hidden group cursor-pointer"
          >
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={`Instagram reel of ${reel.type}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`user wearing gold ${reel.type} instagram aesthetic`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Play className="w-12 h-12 text-white fill-white/20 backdrop-blur-sm rounded-full p-3" />
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-serif text-white text-lg leading-tight text-balance">
                "{reel.caption}"
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}