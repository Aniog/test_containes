import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: '"My everyday earrings now" — @sarah.m', imgId: 'ugc-earring-1' },
  { id: 'ugc-2', caption: '"Obsessed with this necklace" — @emma.l', imgId: 'ugc-necklace-1' },
  { id: 'ugc-3', caption: '"Perfect gift for myself" — @priya.k', imgId: 'ugc-earring-3' },
  { id: 'ugc-4', caption: '"So many compliments!" — @jess.w', imgId: 'ugc-earring-2' },
  { id: 'ugc-5', caption: '"Worth every penny" — @maria.r', imgId: 'ugc-necklace-2' },
  { id: 'ugc-6', caption: '"Can\'t stop wearing these" — @lily.c', imgId: 'ugc-earring-4' },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-20 overflow-hidden">
      <div className="text-center mb-10 px-4">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">As Worn By You</p>
        <h2 className="serif-heading text-3xl lg:text-4xl">The Velmora Edit</h2>
      </div>

      <div className="flex gap-4 px-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] sm:w-[240px] snap-start"
          >
            <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-secondary">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.imgId}-caption] [ugc-row]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-primary-foreground text-xs serif-heading italic leading-relaxed">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
