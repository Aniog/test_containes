import { useRef, useEffect } from 'react';
import { UGC_REELS } from '../../data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function UGCReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-velmora-cream py-16 md:py-24">
      <div className="section-padding mb-8 md:mb-12">
        <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-3">
          Real Moments
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velmora-charcoal">
          Styled by You
        </h2>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-5 md:px-10 lg:px-16 xl:px-24 pb-4">
          {UGC_REELS.map((reel) => (
            <div
              key={reel.id}
              className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] bg-velmora-dark rounded-sm overflow-hidden group cursor-pointer"
            >
              <img
                data-strk-img-id={`ugc-reel-${reel.id}`}
                data-strk-img={`[ugc-caption-${reel.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-velmora-charcoal/80 via-velmora-charcoal/20 to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                <p
                  id={`ugc-caption-${reel.id}`}
                  className="font-serif text-sm md:text-base text-white leading-snug mb-2"
                >
                  {reel.caption}
                </p>
                <p className="font-sans text-[10px] md:text-xs text-velmora-taupe tracking-wider">
                  {reel.author}
                </p>
              </div>

              {/* Play icon indicator */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}