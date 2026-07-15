import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcData = [
  { id: 'ugc-1', strkId: 'ugc-ugc-1', caption: 'Effortless elegance', user: '@sarah_j' },
  { id: 'ugc-2', strkId: 'ugc-ugc-2', caption: 'The perfect stack', user: '@emma_style' },
  { id: 'ugc-3', strkId: 'ugc-ugc-3', caption: 'Golden hours', user: '@mia_jewelry' },
  { id: 'ugc-4', strkId: 'ugc-ugc-4', caption: 'Earring goals', user: '@claire.v' },
  { id: 'ugc-5', strkId: 'ugc-ugc-5', caption: 'Daily essentials', user: '@sophia_b' },
];

const UGCRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-secondary/30">
        <div className="px-6 md:px-12 mb-12">
            <h2 id="ugc-title" className="text-2xl font-serif text-center italic">Worn by You</h2>
        </div>
      <div className="flex overflow-x-auto pb-8 scrollbar-hide px-6 md:px-12 gap-4">
        {ugcData.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-64 md:w-72 aspect-[9/16] relative overflow-hidden group">
            <img
              data-strk-img-id={item.strkId}
              data-strk-img={`[ugc-caption-${item.id}] [ugc-title] woman wearing gold jewelry`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 transition-opacity" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-center">
              <p id={`ugc-caption-${item.id}`} className="font-serif italic text-lg mb-1">{item.caption}</p>
              <p className="text-[10px] uppercase tracking-widest opacity-80">{item.user}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
