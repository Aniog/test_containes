import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest font-medium text-gold mb-2 font-sans">
              As Worn
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-ink">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-taupe hover:text-gold transition-colors font-sans"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
      </div>

      <div className="text-center mt-8 md:hidden">
        <a
          href="#"
          className="text-xs uppercase tracking-widest font-medium text-taupe hover:text-gold transition-colors font-sans"
        >
          Follow @velmora
        </a>
      </div>
    </section>
  );
}

function UGCCard({ item }) {
  return (
    <div className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer">
      {/* Hidden text for image queries */}
      <p id={item.descId} className="sr-only">{item.description}</p>
      <p id={item.titleId} className="sr-only">{item.caption}</p>

      {/* Image */}
      <img
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.descId}] [${item.titleId}]`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="400"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.caption}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-serif text-sm italic text-cream leading-snug">
          {item.caption}
        </p>
      </div>
    </div>
  );
}
