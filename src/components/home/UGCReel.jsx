import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { motion } from 'framer-motion';

const UGCReel = () => {
  const containerRef = useRef(null);
  
  const reels = [
    { id: 1, caption: "Golden Hour Glow", img: "woman wearing gold huggie earrings close up smiling" },
    { id: 2, caption: "Effortless Layers", img: "gold necklaces layered on woman neck editorial" },
    { id: 3, caption: "Daily Essentials", img: "gold ear cuff and studs on ear lifestyle" },
    { id: 4, caption: "The Heirloom Set", img: "woman wearing gold jewelry set black silk dress" },
    { id: 5, caption: "Simply Sophisticated", img: "close up gold rings and bracelets on hands" },
    { id: 6, caption: "Modern Classic", img: "woman wearing gold hoops hair tied back" }
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-primary overflow-hidden">
      <div className="px-6 md:px-12 mb-12 flex justify-between items-end max-w-[1600px] mx-auto">
        <div>
          <h2 className="font-serif text-3xl tracking-wide mb-2">As Worn by You</h2>
          <p className="font-sans text-xs text-black/40 uppercase tracking-widest">Tag #VELMORA to be featured</p>
        </div>
        <a href="#" className="font-sans text-[10px] uppercase tracking-widest flex items-center gap-2 border-b border-black/10 pb-1">
          Follow @VELMORA
        </a>
      </div>

      <div className="flex overflow-x-auto no-scrollbar gap-4 px-6 md:px-12 pb-8 cursor-grab active:cursor-grabbing">
        {reels.map((reel) => (
          <div key={reel.id} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative overflow-hidden group rounded-sm">
            <img 
               data-strk-img-id={`ugc-${reel.id}`}
               data-strk-img={reel.img}
               data-strk-img-ratio="9x16"
               data-strk-img-width="400"
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
               alt={reel.caption}
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
              <p className="font-serif text-white text-lg italic tracking-wide">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
