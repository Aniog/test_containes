import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products from '@/data/products';

const reelItems = products.slice(0, 6).map((p, i) => ({
  ...p,
  reelTitle: p.name,
}));

export default function UgcReelStrip() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-velmora-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-4 tracking-wide">Styled by You</h2>
        <p className="text-velmora-text-muted text-center text-sm mb-12">
          See how our community wears Velmora.
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 max-w-7xl mx-auto snap-x snap-mandatory scrollbar-hide">
        {reelItems.map((item, i) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[160px] md:w-[200px] snap-start"
          >
            <div className="relative aspect-[9/16] rounded-md overflow-hidden bg-velmora-gold-light group cursor-pointer">
              <img
                data-strk-img-id={`ugc-${item.imgId}-${i}`}
                data-strk-img={`[ugc-title-${item.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-base/60 via-transparent to-transparent" />
              <p
                id={`ugc-title-${item.id}`}
                className="absolute bottom-3 left-3 right-3 font-serif text-sm text-white leading-tight"
              >
                {item.reelTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
