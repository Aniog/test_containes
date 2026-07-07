import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Instagram } from 'lucide-react';

const UGCReel = () => {
  const containerRef = useRef(null);
  
  const reels = [
    { id: 1, caption: 'Golden hours in Velmora.', query: 'woman wearing gold huggie earrings sun-drenched lifestyle' },
    { id: 2, caption: 'The perfect layering piece.', query: 'close up gold necklace on neck aesthetic jewelry' },
    { id: 3, caption: 'Elevated every day.', query: 'woman wearing gold jewelry aesthetic neutral outfit' },
    { id: 4, caption: 'Glimmer in the light.', query: 'detail gold earrings worn model sunlight editorial' },
    { id: 5, caption: 'Timeless heirlooms.', query: 'gold jewelry on model lifestyle high end aesthetic' },
    { id: 6, caption: 'Self-love essentials.', query: 'woman looking in mirror wearing gold jewelry aesthetic' },
  ];

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="flex items-center gap-4">
          <Instagram size={20} className="text-primary" />
          <h2 className="title-uppercase">As Worn By You</h2>
        </div>
      </div>
      
      <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 md:px-[calc((100vw-1280px)/2+1.5rem)] pb-8">
        {reels.map((reel) => (
          <div 
            key={reel.id} 
            className="flex-shrink-0 w-[260px] md:w-[320px] aspect-[9/16] relative overflow-hidden group"
          >
            <span id={`ugc-query-${reel.id}`} className="hidden">{reel.query}</span>
            <img
              data-strk-img-id={`ugc-reel-${reel.id}`}
              data-strk-img={`[ugc-query-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="640"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt="UGC Content"
              className="w-full h-full object-cover transition-editorial duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <p className="text-white font-serif italic text-lg leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                "{reel.caption}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
