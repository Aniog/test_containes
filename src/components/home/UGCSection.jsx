import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#faf8f5] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wider text-center">
          Worn & Loved
        </h2>
        <p className="mt-3 text-sm text-muted-foreground tracking-widest uppercase text-center">
          As seen on you
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 lg:px-12 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-center"
          >
            <div className="aspect-[9/16] bg-warm-100 rounded-sm overflow-hidden relative group cursor-pointer">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] gold jewelry on model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 font-serif text-sm text-white italic tracking-wide">
                {item.caption}
              </p>
              <span id={item.titleId} className="hidden">{item.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
