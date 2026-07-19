import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

function UGCCard({ item, index }) {
  const titleId = `ugc-title-${item.id}`;
  const imgId = `ugc-img-${item.id}`;

  return (
    <div className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] rounded-sm overflow-hidden group cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        data-strk-bg-id={imgId}
        data-strk-bg={`[${titleId}]`}
        data-strk-bg-ratio="9x16"
        data-strk-bg-width="400"
        style={{ backgroundColor: '#2A2420' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p
          id={titleId}
          className="font-serif text-white text-sm md:text-base italic leading-snug"
        >
          {item.caption}
        </p>
      </div>
    </div>
  );
}

export default function UGCReel() {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-velmora-base" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-muted mb-2">@velmorajewelry</p>
            <h2 className="section-title text-2xl md:text-3xl">Styled by You</h2>
          </div>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-3 md:gap-4 overflow-x-auto hide-scrollbar px-6 md:px-8 pb-2"
      >
        {ugcItems.map((item, index) => (
          <UGCCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
