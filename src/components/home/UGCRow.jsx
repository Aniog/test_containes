import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { label: 'Styled by Sarah', imgId: 'ugc-styled-sarah', titleId: 'ugc-title-sarah' },
  { label: 'Everyday Elegance', imgId: 'ugc-everyday-elegance', titleId: 'ugc-title-everyday' },
  { label: 'Layered & Loved', imgId: 'ugc-layered-loved', titleId: 'ugc-title-layered' },
  { label: 'Golden Hour', imgId: 'ugc-golden-hour', titleId: 'ugc-title-golden' },
  { label: 'Minimal Magic', imgId: 'ugc-minimal-magic', titleId: 'ugc-title-minimal' },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden">
      <div className="text-center mb-12 section-padding">
        <p className="text-xs tracking-[0.2em] uppercase text-velmora-gold mb-4 font-medium">
          As Seen On You
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-ink tracking-wide">
          Styled by Our Community
        </h2>
      </div>

      <div className="flex gap-4 px-6 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div
            key={item.imgId}
            className="flex-shrink-0 w-[160px] md:w-[220px] snap-center"
          >
            <div className="relative aspect-[9/16] bg-velmora-blush overflow-hidden group cursor-pointer">
              <img
                alt={item.label}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={item.titleId}
                className="absolute bottom-4 left-4 right-4 font-serif text-white text-base italic tracking-wide"
              >
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
