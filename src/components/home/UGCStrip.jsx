import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { ugcContent } from '../../data/products';

export default function UGCStrip() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-neutral-900 mb-4">
            Styled by You
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            See how our community wears their Velmora pieces. Tag us @velmoraofficial to be featured.
          </p>
        </div>

        {/* UGC Horizontal Scroll */}
        <div className="relative">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {ugcContent.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-64 sm:w-72"
              >
                <div className="relative aspect-[9/16] rounded-lg overflow-hidden group">
                  <img
                    data-strk-img-id={`ugc-${item.id}`}
                    data-strk-img="[ugc-title] [ugc-subtitle]"
                    data-strk-img-ratio="9x16"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Caption Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-serif text-lg mb-1">
                      {item.caption}
                    </p>
                    <p className="text-neutral-300 text-sm">
                      {item.user}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}