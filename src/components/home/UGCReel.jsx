import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcReels } from '../../data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-parchment py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-champagne font-medium mb-2">As Worn</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal font-light">#WearVelmora</h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-sans text-xs uppercase tracking-widest text-stone hover:text-champagne transition-colors font-medium"
          >
            Follow @velmora →
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-4 overflow-x-auto reel-scroll px-6 lg:px-10 pb-2">
        {ugcReels.map(reel => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-52 lg:w-60 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Background image */}
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={reel.titleId} className="hidden">{reel.caption}</span>
            <span id={reel.descId} className="hidden">{reel.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-sm italic text-ivory leading-snug">{reel.caption}</p>
            </div>

            {/* Instagram-style play indicator */}
            <div className="absolute top-3 right-3 opacity-60">
              <div className="w-5 h-5 border border-ivory/80 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-ivory ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
