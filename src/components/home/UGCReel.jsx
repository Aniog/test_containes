import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow', query: 'woman wearing gold earrings golden hour lighting portrait' },
  { id: 'ugc-2', caption: 'Stack & layer', query: 'stacked gold necklaces on neck close-up fashion editorial' },
  { id: 'ugc-3', caption: 'Ear party', query: 'multiple gold earrings ear styling close-up trendy' },
  { id: 'ugc-4', caption: 'Everyday luxury', query: 'woman hand with gold rings and bracelet elegant casual' },
  { id: 'ugc-5', caption: 'Gift-worthy', query: 'luxury jewelry gift box velvet elegant gifting' },
  { id: 'ugc-6', caption: 'Golden details', query: 'close-up gold jewelry details macro warm lighting' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-pearl overflow-hidden">
      <div className="container-wide mb-10">
        <h2 className="section-title text-center">Worn & Loved</h2>
        <p className="section-subtitle text-center">
          Real women, real jewelry. Tag @velmora to be featured.
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex gap-4 px-4 md:px-8 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory"
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] snap-start group"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-charcoal">
              <img
                data-strk-img-id={item.id}
                data-strk-img={`${item.query} jewelry fashion portrait`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12">
                <p className="font-serif text-sm text-white/90 tracking-wide">
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
