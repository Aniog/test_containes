import { useRef, useEffect } from 'react';
import { ugcItems } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-cream-100 py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12">
        <p className="font-sans text-[11px] tracking-widest3 uppercase text-warm-600 mb-4">
          Worn & Loved
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-charcoal-900">
          As Seen On You
        </h2>
        <div className="w-12 h-px bg-warm-400 mt-6" />
      </div>

      <div ref={containerRef} className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-12 pb-4 scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[160px] md:w-[220px] aspect-[9/16] rounded-sm overflow-hidden relative group cursor-pointer"
          >
            <div
              data-strk-bg-id={`ugc-${item.id}`}
              data-strk-bg={`[ugc-caption-${item.id}] gold jewelry worn on model editorial`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="500"
              className="absolute inset-0 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${item.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
