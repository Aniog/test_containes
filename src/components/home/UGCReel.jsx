import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '../../data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-velmora-cream py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="font-sans text-xs tracking-widest-xl uppercase text-velmora-gold mb-2">As Worn By You</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-text-primary">
              #WearVelmora
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:block font-sans text-xs tracking-widest uppercase text-velmora-text-muted hover:text-velmora-gold transition-colors border-b border-velmora-sand pb-0.5"
          >
            Follow Us
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 sm:w-52 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] [ugc-section-label]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.titleId}
                className="font-serif text-sm italic text-velmora-cream leading-snug"
              >
                {item.caption}
              </p>
              <p className="font-sans text-[10px] text-velmora-gold mt-1 tracking-wide">{item.handle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Hidden label for image context */}
      <span id="ugc-section-label" className="hidden">gold jewelry worn on ear neck model lifestyle</span>
    </section>
  );
}
