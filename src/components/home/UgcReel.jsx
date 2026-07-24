import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: '"The perfect everyday earrings"', name: 'Sarah M.' },
  { id: 'ugc-2', caption: '"Got so many compliments!"', name: 'Priya K.' },
  { id: 'ugc-3', caption: '"My go-to gift for friends"', name: 'Alessia R.' },
  { id: 'ugc-4', caption: '"Luxury without the price tag"', name: 'Chen W.' },
  { id: 'ugc-5', caption: '"Worth every penny"', name: 'Lauren T.' },
  { id: 'ugc-6', caption: '"The quality is amazing"', name: 'Maya J.' },
];

export default function UgcReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 mb-8 md:mb-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-headline md:text-display text-charcoal mb-2">
              Styled by You
            </h2>
            <p className="font-sans text-body text-taupe">
              Real women, real jewelry. Tag us @velmora to be featured.
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal reel scroll */}
      <div className="overflow-x-auto scrollbar-hide px-4 md:px-8">
        <div className="flex gap-4 md:gap-5 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="relative w-[200px] md:w-[240px] aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group cursor-pointer"
            >
              <img
                data-strk-img-id={item.id}
                data-strk-img={`[ugc-reel-context] woman wearing gold jewelry close-up ear neck`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="480"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`UGC: ${item.caption}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-serif text-base italic text-cream-100 mb-1 leading-tight">
                  {item.caption}
                </p>
                <p className="font-sans text-caption text-cream-300/80">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hidden context element for image interpolation */}
      <span id="ugc-reel-context" className="hidden">gold jewelry worn on ear and neck close-up editorial</span>
    </section>
  );
}
