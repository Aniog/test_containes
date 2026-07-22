import { useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-blush overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-xs uppercase tracking-widest text-gold mb-3">Community</p>
            <h2 className="font-cormorant text-4xl md:text-5xl text-charcoal font-light tracking-wide">
              As Worn By You
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-warm-gray hover:text-gold transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div ref={containerRef} className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
        {/* Follow CTA card */}
        <div className="flex-shrink-0 w-36 md:w-48 aspect-reel bg-charcoal flex flex-col items-center justify-center gap-4 cursor-pointer group">
          <Instagram className="w-6 h-6 text-ivory/40 group-hover:text-gold transition-colors" />
          <div className="text-center px-4">
            <p className="font-cormorant text-lg text-ivory font-light">Follow Us</p>
            <p className="font-inter text-[10px] uppercase tracking-widest text-ivory/50 mt-1">@velmora</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function UGCCard({ item }) {
  return (
    <div className="flex-shrink-0 w-36 md:w-48 aspect-reel relative overflow-hidden group cursor-pointer">
      {/* Background image */}
      <img
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.descId}] [${item.titleId}]`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="400"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.caption}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Hidden text for image query */}
      <span id={item.titleId} className="sr-only">{item.caption}</span>
      <span id={item.descId} className="sr-only">{item.desc}</span>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="font-cormorant text-sm text-ivory italic leading-tight">{item.caption}</p>
        <p className="font-inter text-[9px] text-ivory/60 mt-1 uppercase tracking-wider">{item.handle}</p>
      </div>

      {/* Instagram icon */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Instagram className="w-3.5 h-3.5 text-ivory/80" />
      </div>
    </div>
  );
}
