import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const items = [
    { id: 'ugc-1', caption: 'Everyday elegance', query: 'gold jewelry worn on ear closeup' },
    { id: 'ugc-2', caption: 'Layered & loved', query: 'layered gold necklaces on model' },
    { id: 'ugc-3', caption: 'The perfect huggie', query: 'gold huggie earrings on ear' },
    { id: 'ugc-4', caption: 'Stacked beautifully', query: 'gold jewelry stack on model' },
    { id: 'ugc-5', caption: 'Gift of gold', query: 'gold jewelry gift box' },
    { id: 'ugc-6', caption: 'Weekend glow', query: 'gold earrings natural light' },
  ];

  return (
    <section ref={containerRef} className="py-12 md:py-16 bg-secondary/30">
      <div className="text-center mb-8">
        <p className="serif-heading text-2xl md:text-3xl italic text-muted-foreground">
          As worn by you
        </p>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-6 md:px-12">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-lg overflow-hidden group"
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={item.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 serif-heading text-white text-sm italic">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
