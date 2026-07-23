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
    <section className="py-16 bg-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-inter text-xs tracking-widest uppercase text-gold mb-2">As Worn By You</p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-espresso">#WearVelmora</h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-xs tracking-widest uppercase text-warm-gray hover:text-gold transition-colors hidden md:block"
          >
            Follow on Instagram →
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-4 md:px-8 pb-2"
      >
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function UGCCard({ item }) {
  return (
    <div className="relative flex-shrink-0 w-44 md:w-56 aspect-[9/16] overflow-hidden group cursor-pointer">
      {/* Background image */}
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.caption}
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.descId}] [${item.titleId}] gold jewelry worn woman portrait`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="400"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hidden text for image query */}
      <span id={item.titleId} className="sr-only">{item.caption}</span>
      <span id={item.descId} className="sr-only">gold jewelry worn on ear neck portrait lifestyle</span>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="font-cormorant text-sm italic text-ivory leading-snug">
          "{item.caption}"
        </p>
      </div>
    </div>
  );
}
