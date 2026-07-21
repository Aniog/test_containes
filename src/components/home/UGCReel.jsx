import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'Golden hour glow',
    query: 'gold earring close-up ear warm light',
  },
  {
    id: 'ugc-2',
    caption: 'Stack & layer',
    query: 'gold huggie earrings stack ear styling',
  },
  {
    id: 'ugc-3',
    caption: 'Statement piece',
    query: 'gold necklace on neck collarbone jewelry',
  },
  {
    id: 'ugc-4',
    caption: 'Everyday elegance',
    query: 'gold jewelry minimalist style portrait woman',
  },
  {
    id: 'ugc-5',
    caption: 'Gift-ready',
    query: 'jewelry gift box elegant luxury packaging',
  },
  {
    id: 'ugc-6',
    caption: 'Detail perfection',
    query: 'gold ear cuff crystal close-up detail',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="section-padding mb-8">
        <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-500 mb-2 text-center">
          @VelmoraJewelry
        </p>
        <h2 className="section-title text-2xl md:text-3xl">Worn by You</h2>
      </div>

      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto px-5 md:px-10 pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollPaddingLeft: '1.25rem' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-44 md:w-52 aspect-[9/16] relative snap-start group cursor-pointer"
          >
            <img
              data-strk-img-id={`ugc-${item.id}`}
              data-strk-img={`${item.query} gold jewelry instagram reel style`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover"
            />

            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
              <p className="font-serif text-sm text-cream-50 italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
