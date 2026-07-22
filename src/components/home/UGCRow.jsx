import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance', query: 'gold earrings on ear closeup' },
  { id: 'ugc-2', caption: 'Layered perfection', query: 'layered gold necklaces' },
  { id: 'ugc-3', caption: 'Golden hour glow', query: 'gold huggie earrings woman' },
  { id: 'ugc-4', caption: 'Stacked & styled', query: 'gold jewelry stack ear' },
  { id: 'ugc-5', caption: 'Minimal luxury', query: 'minimal gold necklace woman' },
  { id: 'ugc-6', caption: 'Weekend vibes', query: 'gold earrings portrait woman' },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-velmora-cream-dark">
      <div className="text-center mb-10 px-4">
        <p className="section-subtitle">@velmora on Instagram</p>
        <h2 className="section-title mt-3">Worn & Loved</h2>
      </div>

      <div ref={containerRef} className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[9/16] overflow-hidden group"
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={item.query}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 font-serif text-white text-lg italic">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
