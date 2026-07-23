import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance', query: 'gold jewelry ear closeup woman' },
  { id: 'ugc-2', caption: 'Stacked & styled', query: 'layered gold necklaces woman' },
  { id: 'ugc-3', caption: 'Golden hour glow', query: 'gold earrings model natural light' },
  { id: 'ugc-4', caption: 'Minimal luxury', query: 'gold huggie earrings ear detail' },
  { id: 'ugc-5', caption: 'The perfect gift', query: 'jewelry gift box gold necklace' },
  { id: 'ugc-6', caption: 'Worn with love', query: 'woman wearing gold jewelry portrait' },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-[#F5F2ED]">
      <div className="container-velmora mb-8 md:mb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-[#6B6560] text-center mb-2">As Worn By You</p>
        <h2 className="section-title text-2xl md:text-3xl">@velmora on Instagram</h2>
      </div>

      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 px-4 md:px-12 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] bg-[#E8E4DF] overflow-hidden snap-center group"
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={item.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-[#FAF9F7] text-sm md:text-base italic">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
