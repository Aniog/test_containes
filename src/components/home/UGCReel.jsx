import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance ✨', query: 'gold earrings worn ear closeup' },
  { id: 'ugc-2', caption: 'Layered perfection', query: 'gold necklace layered collarbone' },
  { id: 'ugc-3', caption: 'Huggie love 💛', query: 'gold huggie earrings ear' },
  { id: 'ugc-4', caption: 'Stacked & styled', query: 'gold jewelry stack wrist ear' },
  { id: 'ugc-5', caption: 'Date night ready', query: 'gold drop earrings evening' },
  { id: 'ugc-6', caption: 'Minimalist magic', query: 'minimal gold jewelry delicate' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-16 bg-[#faf8f5] overflow-hidden">
      <div className="container-padding mb-8">
        <h2 className="serif-heading text-2xl md:text-3xl text-[#1a1a1a] text-center">
          As Worn By You
        </h2>
        <p className="text-sm text-[#6b6560] text-center mt-2">
          Tag @velmora to be featured
        </p>
      </div>

      <div className="flex gap-3 md:gap-4 overflow-x-auto px-6 md:px-10 lg:px-16 pb-4 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-40 md:w-48 snap-start"
          >
            <div className="relative aspect-[9/16] bg-[#e8e4df] overflow-hidden rounded-sm">
              <img
                alt={item.caption}
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={item.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 serif-heading text-sm text-[#faf8f5] leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
