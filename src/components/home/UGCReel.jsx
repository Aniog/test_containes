import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

function UGCCard({ item }) {
  return (
    <div className="flex-shrink-0 w-44 sm:w-52 relative overflow-hidden rounded-sm" style={{ aspectRatio: '9/16' }}>
      {/* Background image */}
      <img
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.caption}
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.titleId}] gold jewelry worn model portrait`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="400"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p id={item.titleId} className="font-serif text-sm text-warm-white font-light italic leading-snug">
          {item.caption}
        </p>
        <p className="font-sans text-[9px] tracking-wide text-warm-white/60 mt-1">{item.handle}</p>
      </div>
    </div>
  );
}

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-2">As worn by you</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink font-light">#WearVelmora</h2>
          </div>
          <a
            href="#"
            className="font-sans text-[10px] tracking-widest uppercase text-muted hover:text-gold transition-colors border-b border-linen pb-0.5 hidden sm:block"
          >
            Follow us →
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-6 lg:px-10 pb-2">
        {ugcItems.map(item => (
          <UGCCard key={item.id} item={item} />
        ))}
        {/* Repeat for visual fullness */}
        {ugcItems.slice(0, 3).map(item => (
          <UGCCard key={`r-${item.id}`} item={{ ...item, imgId: `${item.imgId}-r`, titleId: `${item.titleId}-r` }} />
        ))}
      </div>
    </section>
  );
}
