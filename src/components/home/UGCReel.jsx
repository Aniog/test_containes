import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-cream py-16 lg:py-20 overflow-hidden">
      <div className="section-container mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="section-label mb-2">As seen on</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-obsidian">Worn & Loved</h2>
          </div>
          <a
            href="#"
            className="text-xs uppercase tracking-widest text-mist hover:text-gold transition-colors duration-200 hidden md:block"
          >
            @velmora_jewelry
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto pb-4 px-6 lg:px-12 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] gold jewelry worn on model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.titleId}
                className="font-serif text-ivory text-sm italic leading-snug"
              >
                {item.caption}
              </p>
            </div>

            {/* Instagram icon overlay */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-7 h-7 bg-ivory/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <span className="text-ivory text-[10px]">♡</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
