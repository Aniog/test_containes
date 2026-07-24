import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const items = [
    { id: 'ugc-1', caption: '"Everyday elegance" — @sarah.m' },
    { id: 'ugc-2', caption: '"Obsessed with these huggies" — @jess.k' },
    { id: 'ugc-3', caption: '"The perfect gift" — @emma.l' },
    { id: 'ugc-4', caption: '"Layered to perfection" — @mia.r' },
    { id: 'ugc-5', caption: '"My new go-to pieces" — @lily.w' },
    { id: 'ugc-6', caption: '"Gold that glows" — @ava.t' },
  ];

  return (
    <section ref={containerRef} className="py-16 overflow-hidden">
      <div className="text-center mb-10 px-6">
        <h2 className="serif-heading text-3xl md:text-4xl mb-2">As Worn By You</h2>
        <p className="text-muted-foreground text-sm tracking-wide">Tag @velmorajewelry to be featured</p>
      </div>

      <div className="flex gap-4 px-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] snap-start relative group"
          >
            <div className="aspect-[9/16] bg-secondary overflow-hidden">
              <img
                data-strk-img-id={item.id}
                data-strk-img={`[${item.id}-caption] [ugc-section]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white text-xs serif-heading italic">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
