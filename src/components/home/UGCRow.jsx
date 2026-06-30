import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

function UGCCard({ item }) {
  return (
    <div className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group">
      <img
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.descId}] [${item.titleId}]`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="400"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.caption}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p id={item.titleId} className="font-cormorant text-sm italic text-velmora-ivory font-light leading-tight">
          {item.caption}
        </p>
      </div>

      {/* Hidden desc for image query */}
      <span id={item.descId} className="hidden">{item.desc}</span>
    </div>
  );
}

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-velmora-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-champagne mb-3">
              As Worn
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="font-manrope text-xs uppercase tracking-widest text-velmora-stone hover:text-velmora-champagne transition-colors duration-200 flex items-center gap-2 self-start md:self-auto"
          >
            Follow @velmora
            <span className="text-velmora-champagne">→</span>
          </a>
        </div>
      </div>

      {/* Scrollable reel strip */}
      <div ref={containerRef} className="flex gap-4 px-6 md:px-12 overflow-x-auto hide-scrollbar pb-2">
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
        {/* Repeat for visual fullness */}
        {ugcItems.map(item => (
          <UGCCard key={`${item.id}-2`} item={{ ...item, imgId: `${item.imgId}-r`, titleId: `${item.titleId}-r`, descId: `${item.descId}-r` }} />
        ))}
      </div>
    </section>
  );
}
