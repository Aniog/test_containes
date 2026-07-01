import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-ivory border-t border-mist" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">
            As Worn By You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet">
            The Velmora Edit
          </h2>
          <p className="font-sans text-sm text-stone mt-2">
            Tag us <span className="text-gold">@velmorajewelry</span> to be featured
          </p>
        </div>

        {/* Horizontal scroll strip */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-6 px-6 md:-mx-12 md:px-12">
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
              style={{ aspectRatio: '9/16' }}
            >
              {/* Background image */}
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] gold jewelry worn close up portrait`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velvet/70 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={item.titleId}
                  className="font-serif text-sm italic text-cream leading-tight"
                >
                  {item.caption}
                </p>
                <p className="font-sans text-[10px] text-cream/60 mt-1 tracking-wide">
                  {item.handle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
