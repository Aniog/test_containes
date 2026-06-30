import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'ugc-1', caption: 'Everyday gold', user: '@elenam' },
  { id: 'ugc-2', caption: 'Stacked huggies', user: '@jessica.k' },
  { id: 'ugc-3', caption: 'Date night ready', user: '@sofia_r' },
  { id: 'ugc-4', caption: 'Minimal luxe', user: '@anastasia' },
  { id: 'ugc-5', caption: 'Gift to self', user: '@marina.t' },
  { id: 'ugc-6', caption: 'Office glam', user: '@lisa.m' },
];

export default function UGCReelsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-base">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-white">
          Styled by You
        </h2>
      </div>
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto px-6 pb-4 scrollbar-hide">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[160px] md:w-[200px] aspect-[9/16] relative overflow-hidden group cursor-pointer"
          >
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-strk-img-id={`ugc-${reel.id}`}
              data-strk-img={`[ugc-caption-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p
                id={`ugc-caption-${reel.id}`}
                className="font-serif text-sm text-white font-light italic"
              >
                {reel.caption}
              </p>
              <p className="text-xs text-white/60 mt-1">{reel.user}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
