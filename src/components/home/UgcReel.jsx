import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UgcReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-velvet-950 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 section-padding">
          <h2 className="text-heading text-3xl sm:text-4xl text-ivory-50 mb-3">
            As Seen On You
          </h2>
          <p className="text-sm text-ivory-200/50">
            Tag @velmora to be featured
          </p>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </div>

        {/* Horizontal scroll */}
        <div
          ref={containerRef}
          className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 xl:px-16 pb-4"
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-[180px] sm:w-[200px] md:w-[220px] aspect-[9/16] rounded-lg overflow-hidden group"
            >
              <img
                data-strk-img-id={`ugc-${item.id}-reel`}
                data-strk-img={item.query}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velvet-950/70 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-heading text-lg sm:text-xl text-ivory-50 leading-tight">
                  {item.caption}
                </p>
                <p className="text-[10px] text-ivory-200/50 mt-1 tracking-wider uppercase">
                  {item.product}
                </p>
              </div>

              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 bg-ivory-50/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-ivory-50 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
