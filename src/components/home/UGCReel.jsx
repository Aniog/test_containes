import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Play } from 'lucide-react';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance.' },
  { id: 'ugc-2', caption: 'Stacking goals.' },
  { id: 'ugc-3', caption: 'The perfect gift.' },
  { id: 'ugc-4', caption: 'Evening ready.' },
  { id: 'ugc-5', caption: 'My daily uniform.' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-24 bg-velmora-light" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif">Worn By You</h2>
            <p className="text-muted-foreground mt-2">@velmorajewelry</p>
          </div>
        </div>

        {/* Scrollable Container */}
        <div className="flex overflow-x-auto space-x-4 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {ugcItems.map((item) => (
            <div key={item.id} className="relative flex-none w-64 md:w-72 aspect-[9/16] snap-start group cursor-pointer overflow-hidden bg-background">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={item.id}
                data-strk-img={`[${item.id}-caption] jewelry style`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="600"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
              
              <div className="absolute top-4 right-4 text-white drop-shadow-md">
                 <Play size={20} className="fill-white" />
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p id={`${item.id}-caption`} className="text-white font-serif text-lg leading-snug drop-shadow-md">
                  "{item.caption}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;