import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';

const ugcItems = products.map(p => ({
  id: p.id,
  name: p.shortName,
  imgId: p.ugcImgId,
  titleId: p.titleId,
  descId: p.descId,
}));

export default function UGCReelRow() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24">
      {/* Heading */}
      <div className="section-padding text-center mb-10 md:mb-14">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-charcoal">
          As Seen On You
        </h2>
        <p className="mt-3 text-sm text-velmora-warmgray max-w-md mx-auto">
          Real women, real moments. Tag <span className="text-velmora-gold">@velmorajewelry</span> to be featured.
        </p>
      </div>

      {/* Scrollable reel row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-5 md:px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[140px] md:w-[180px] snap-start"
          >
            <div className="aspect-[9/16] bg-velmora-sand overflow-hidden relative group">
              <img
                alt={item.name}
                data-strk-img-id={`ugc-${item.id}-${item.imgId}`}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="360"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 font-serif text-white text-sm tracking-wide leading-tight">
                {item.name}
              </span>
              <span className="hidden" id={item.titleId}>{item.name}</span>
              <span className="hidden" id={item.descId}>jewelry on model</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
