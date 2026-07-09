import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Morning light with the Aura Cuff', titleId: 'ugc-title-1' },
  { id: 'ugc-2', caption: 'Stacked & golden', titleId: 'ugc-title-2' },
  { id: 'ugc-3', caption: 'Date night essentials', titleId: 'ugc-title-3' },
  { id: 'ugc-4', caption: 'Everyday elegance', titleId: 'ugc-title-4' },
  { id: 'ugc-5', caption: 'The perfect gift', titleId: 'ugc-title-5' },
  { id: 'ugc-6', caption: 'Golden hour glow', titleId: 'ugc-title-6' },
];

export default function UgcReelRow() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section className="bg-velmora-surface py-20 md:py-28">
      <div className="text-center mb-12 md:mb-16">
        <p className="section-subtitle">As Seen On</p>
        <h2 className="section-title mt-2">Styled by You</h2>
      </div>

      <div ref={ref} className="flex gap-4 md:gap-6 overflow-x-auto px-5 md:px-10 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-center group cursor-pointer"
          >
            <div className="relative aspect-[9/16] bg-velmora-sand rounded-sm overflow-hidden">
              <img
                alt={item.caption}
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[${item.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="440"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={item.titleId}
                className="absolute bottom-4 left-4 right-4 font-serif text-white text-base md:text-lg italic leading-snug"
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}