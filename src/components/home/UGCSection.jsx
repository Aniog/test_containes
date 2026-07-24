import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const ugcItems = [
    { id: 'ugc-1', caption: '"Everyday elegance" — @sarah.m', titleId: 'ugc-title-1' },
    { id: 'ugc-2', caption: '"Obsessed with these" — @jessica.k', titleId: 'ugc-title-2' },
    { id: 'ugc-3', caption: '"Perfect gift" — @emma.r', titleId: 'ugc-title-3' },
    { id: 'ugc-4', caption: '"So delicate" — @olivia.l', titleId: 'ugc-title-4' },
    { id: 'ugc-5', caption: '"My new favorites" — @mia.c', titleId: 'ugc-title-5' },
    { id: 'ugc-6', caption: '"Worth every penny" — @ava.w', titleId: 'ugc-title-6' },
  ];

  return (
    <section ref={containerRef} className="py-16 bg-[#F5F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="serif-heading text-3xl md:text-4xl tracking-wide italic">As Worn By You</h2>
          <p className="mt-3 text-muted-foreground text-sm">
            Tag @velmorajewelry to be featured
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 sm:w-48 snap-start"
            >
              <div className="relative aspect-[9/16] bg-[#E8E2DA] rounded-sm overflow-hidden group">
                <img
                  data-strk-img-id={`ugc-${item.id}`}
                  data-strk-img={`[${item.titleId}] gold jewelry worn`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p id={item.titleId} className="absolute bottom-3 left-3 right-3 text-white text-xs serif-heading italic leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCSection;
