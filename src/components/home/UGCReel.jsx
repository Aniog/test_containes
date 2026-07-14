import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Play } from 'lucide-react';

const UGCReel = () => {
  const containerRef = useRef(null);
  
  const reels = [
    { id: 1, caption: 'Golden Glow' },
    { id: 2, caption: 'Everyday Essentials' },
    { id: 3, caption: 'The Perfect Gift' },
    { id: 4, caption: 'Layered in Luxury' },
    { id: 5, caption: 'Ear Stack Inspiration' },
    { id: 6, caption: 'Timeless Silhouettes' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-accent/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl mb-2">As Seen On You</h2>
          <p className="text-[10px] uppercase letter-spacing-wide text-primary/60 italic">Tag @VELMORA #VelmoraStyle</p>
        </div>
      </div>

      <div className="flex gap-4 px-6 overflow-x-auto no-scrollbar scroll-smooth pb-8">
        {reels.map((reel) => (
          <div key={reel.id} className="relative flex-shrink-0 w-[260px] aspect-[9/16] bg-gray-200 group cursor-pointer overflow-hidden">
            <img
              data-strk-img-id={`ugc-img-${reel.id}`}
              data-strk-img={`woman wearing luxury gold jewelry editorial portrait lifestyle aesthetic`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=400&auto=format&fit=crop"
              alt="UGC Content"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Play className="w-10 h-10 text-white fill-white" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-serif italic text-lg leading-tight">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
