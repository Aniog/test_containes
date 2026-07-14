import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

function UGCCard({ item }) {
  return (
    <div className="flex-shrink-0 w-44 md:w-52 relative overflow-hidden rounded-sm aspect-[9/16] bg-velmora-linen">
      <img
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.titleId}]`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="400"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.caption}
        className="w-full h-full object-cover"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-transparent to-transparent" />
      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p id={item.titleId} className="font-cormorant text-sm italic text-velmora-cream leading-snug">
          {item.caption}
        </p>
      </div>
    </div>
  );
}

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="section-padding bg-velmora-linen overflow-hidden">
      <div className="section-container mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="label-ui text-velmora-gold mb-2">As seen on</p>
            <h2 className="font-cormorant text-4xl md:text-5xl text-velmora-obsidian">Worn & Loved</h2>
          </div>
          <a
            href="#"
            className="font-inter text-xs uppercase tracking-widest text-velmora-text-secondary hover:text-velmora-gold transition-colors border-b border-velmora-sand pb-0.5 self-start md:self-auto"
          >
            @velmora →
          </a>
        </div>
      </div>

      {/* Scrollable strip */}
      <div ref={containerRef} className="flex gap-4 overflow-x-auto hide-scrollbar px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
        {/* Duplicate for visual continuity */}
        {ugcItems.map(item => (
          <UGCCard key={`${item.id}-dup`} item={{ ...item, imgId: `${item.imgId}-dup`, titleId: `${item.titleId}-dup` }} />
        ))}
      </div>
    </section>
  );
}
