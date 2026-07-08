import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance', imgId: 'ugc-earring-1-c8d4f2', ratio: '9x16' },
  { id: 'ugc-2', caption: 'Golden hour glow', imgId: 'ugc-necklace-2-e7b1a9', ratio: '9x16' },
  { id: 'ugc-3', caption: 'Stack & layer', imgId: 'ugc-huggie-3-f3a2d8', ratio: '9x16' },
  { id: 'ugc-4', caption: 'Gift of gold', imgId: 'ugc-set-4-b9c7e1', ratio: '9x16' },
  { id: 'ugc-5', caption: 'Quiet luxury', imgId: 'ugc-detail-5-a1b3c5', ratio: '9x16' },
  { id: 'ugc-6', caption: 'Self-purchase love', imgId: 'ugc-model-6-d4e6f8', ratio: '9x16' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-bg-elevated">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-10">
          <p className="text-text-accent text-xs uppercase tracking-[0.2em] font-medium mb-2">
            @velmora.jewelry
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-text">
            As Worn By You
          </h2>
        </div>

        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[160px] md:w-[200px] aspect-[9/16] rounded-lg overflow-hidden relative snap-start group cursor-pointer"
            >
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`${item.caption} gold jewelry on woman close up ear neck`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-3 right-3 font-serif italic text-white text-sm leading-snug">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
