import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'Everyday elegance ✨',
    query: 'woman wearing gold earrings close up portrait',
  },
  {
    id: 'ugc-2',
    caption: 'Layered perfection',
    query: 'woman wearing layered gold necklaces',
  },
  {
    id: 'ugc-3',
    caption: 'Golden hour glow',
    query: 'woman wearing gold jewelry sunset portrait',
  },
  {
    id: 'ugc-4',
    caption: 'Stacked & styled',
    query: 'woman wearing multiple gold earrings styled',
  },
  {
    id: 'ugc-5',
    caption: 'Minimal luxury',
    query: 'woman wearing delicate gold necklace minimal',
  },
  {
    id: 'ugc-6',
    caption: 'Weekend vibes',
    query: 'woman wearing gold huggie earrings casual',
  },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-cream-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-2">
          As Worn By You
        </h2>
        <p className="text-taupe text-sm text-center">
          Tag @velmora to be featured
        </p>
      </div>

      {/* Horizontal scroll row */}
      <div className="flex gap-4 px-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] snap-start"
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-sm">
              <img
                alt={item.caption}
                data-strk-img-id={item.id}
                data-strk-img={`[${item.id}-caption]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent">
                <p id={`${item.id}-caption`} className="font-serif text-cream text-sm italic">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
