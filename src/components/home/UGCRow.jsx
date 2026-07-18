import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', handle: '@sophia_wears', caption: 'Obsessed with my new huggies ✨' },
  { id: 'ugc-2', handle: '@elena_style', caption: 'Gold that goes with everything' },
  { id: 'ugc-3', handle: '@maria.gems', caption: 'Perfect for layering' },
  { id: 'ugc-4', handle: '@jewelrydiaries', caption: 'The Vivid Aura cuff is everything' },
  { id: 'ugc-5', handle: '@clara.adorns', caption: 'Heirloom energy without the price' },
  { id: 'ugc-6', handle: '@luna_sparkle', caption: 'Gift for myself and I\'m obsessed' },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-cream-dark" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-10">
          <p className="text-gold text-xs tracking-widest uppercase font-sans font-medium mb-3">
            As Seen On
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal">
            Worn by You
          </h2>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto pb-4 -mx-6 md:-mx-12 lg:-mx-16 px-6 md:px-12 lg:px-16">
        <div className="flex gap-4 md:gap-5 w-max">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-44 md:w-52 aspect-[9/16] flex-shrink-0 overflow-hidden rounded-sm bg-charcoal/10 group cursor-pointer"
            >
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-caption-${item.id}] [ugc-handle-${item.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${item.handle} wearing Velmora jewelry`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Gradient overlay + caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={`ugc-handle-${item.id}`} className="text-white text-xs font-sans font-medium">
                  {item.handle}
                </p>
                <p id={`ugc-caption-${item.id}`} className="text-white/80 text-xs font-serif italic mt-0.5 leading-tight">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}