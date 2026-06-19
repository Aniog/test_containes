import { useRef, useEffect } from 'react';
import { ugcItems } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCSection() {
  const ref = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="serif-heading text-3xl md:text-4xl mb-4">Worn &amp; Loved</h2>
          <p className="text-velvet-500 text-sm tracking-wide">As seen on you</p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-4 overflow-x-auto px-6 md:px-10 lg:px-16 pb-4 scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] bg-velvet-100 rounded-sm overflow-hidden relative group cursor-pointer"
          >
            <div
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`[ugc-caption-${item.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/60 via-transparent to-transparent" />
            {/* Caption */}
            <p
              id={`ugc-caption-${item.id}`}
              className="absolute bottom-0 left-0 right-0 p-4 font-serif text-sm text-white italic leading-snug"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
