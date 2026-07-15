import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-brand-warm">
      <div className="max-w-7xl mx-auto px-5 md:px-8 mb-10">
        <p className="font-sans text-[11px] tracking-super-wide uppercase text-brand-gold mb-3">
          #VelmoraJewelry
        </p>
        <h2 className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-brand-charcoal">
          As Seen on You
        </h2>
        <div className="w-12 h-px bg-brand-gold mt-4" />
      </div>

      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 px-5 md:px-8">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-44 md:w-52 aspect-[9x16] overflow-hidden group cursor-pointer"
            >
              <img
                alt={item.caption}
                data-strk-img-id={item.imgId}
                data-strk-img={`[ugc-caption-${item.id}] jewelry worn`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-espresso/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${item.id}`}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white/90 italic leading-snug"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
