import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const UGCRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const ugcItems = [
    { id: 'ugc-1', caption: 'Everyday elegance', query: 'gold earrings worn on ear model' },
    { id: 'ugc-2', caption: 'Layered perfection', query: 'gold necklace layered on model' },
    { id: 'ugc-3', caption: 'Stacked & styled', query: 'gold huggie earrings stacked ear' },
    { id: 'ugc-4', caption: 'Golden hour glow', query: 'gold jewelry model warm light' },
    { id: 'ugc-5', caption: 'Minimal luxury', query: 'minimal gold jewelry elegant' },
    { id: 'ugc-6', caption: 'Statement pieces', query: 'statement gold earrings fashion' },
  ];

  return (
    <section ref={containerRef} className="py-16 sm:py-20 bg-[var(--velmora-bg-alt)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-accent)] mb-3">@velmorajewelry</p>
          <h2 className="velmora-serif text-3xl sm:text-4xl text-[var(--velmora-dark)]">As Worn By You</h2>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4">
        {ugcItems.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-40 sm:w-48 relative group">
            <div
              className="aspect-[9/16] bg-[var(--velmora-border)] overflow-hidden"
              data-strk-bg-id={item.id}
              data-strk-bg={item.query}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="400"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 velmora-serif text-white text-lg italic">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
