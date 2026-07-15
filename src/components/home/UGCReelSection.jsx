import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Gold hoops for every mood', label: 'Earrings close-up on model' },
  { id: 'ugc-2', caption: 'Layered necklace moment', label: 'Necklace on collarbone' },
  { id: 'ugc-3', caption: 'Sunlight hits different', label: 'Gold jewelry in natural light' },
  { id: 'ugc-4', caption: 'Everyday elegance', label: 'Minimal gold earrings worn casually' },
  { id: 'ugc-5', caption: 'New favorite hug', label: 'Huggies earrings close shot' },
  { id: 'ugc-6', caption: 'Gift-ready', label: 'Jewelry in gift box' },
];

export default function UGCReelSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-ink text-center">As Seen On You</h2>
        <p className="mt-2 text-taupe text-sm text-center font-light">
          Tag <span className="text-gold">@velmorajewelry</span> to be featured
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4">
        {ugcItems.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-[180px] sm:w-[220px]">
            <div className="relative aspect-[9/16] bg-warm-light overflow-hidden rounded-sm group cursor-pointer">
              <div
                data-strk-bg-id={`ugc-bg-${item.id}`}
                data-strk-bg={`[ugc-caption-${item.id}] jewelry worn by woman`}
                data-strk-bg-ratio="9x16"
                data-strk-bg-width="500"
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p id={`ugc-caption-${item.id}`} className="text-white text-xs md:text-sm font-serif italic leading-snug">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}