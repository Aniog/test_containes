import { useEffect, useRef } from 'react';
import { ugcItems } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-velvet-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-xs tracking-super uppercase text-sand-600 font-medium mb-3">Styled by You</p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-900 font-light">
            As Seen On
          </h2>
        </div>

        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-none">
          {ugcItems.map((item, idx) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[160px] md:w-[200px] snap-start"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative aspect-[9/16] bg-velvet-200 overflow-hidden group cursor-pointer">
                <img
                  alt={item.caption}
                  data-strk-img-id={item.id}
                  data-strk-img={item.imgQuery}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-serif text-white text-sm italic leading-snug">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
