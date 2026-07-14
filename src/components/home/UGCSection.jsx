import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const items = [
    { id: 'ugc-1', caption: 'Effortless layers for the everyday.' },
    { id: 'ugc-2', caption: 'The perfect golden glow.' },
    { id: 'ugc-3', caption: 'A subtle statement.' },
    { id: 'ugc-4', caption: 'Crafted for special moments.' },
    { id: 'ugc-5', caption: 'Golden hour favorites.' },
  ];

  return (
    <section className="py-24 px-6 md:px-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto mb-16 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-4">Seen on You</h2>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans">#VelmoraEveryday</p>
      </div>

      <div ref={containerRef} className="flex gap-4 overflow-x-auto pb-8 snap-x no-scrollbar">
        {items.map((item) => (
          <div key={item.id} className="min-w-[280px] md:min-w-[320px] aspect-[9/16] relative group snap-start overflow-hidden">
            <img 
              src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 16"%3E%3C/svg%3E'
              alt="UGC"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              data-strk-img-id={`ugc-img-${item.id}`}
              data-strk-img={`woman wearing luxury gold jewelry lifestyle portrait soft lighting`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p id={`ugc-caption-${item.id}`} className="text-white font-serif italic text-lg">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCSection;
