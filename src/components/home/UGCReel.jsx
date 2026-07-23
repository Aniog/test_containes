import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcReels } from '@/lib/data';
import { IMAGE_PLACEHOLDER } from '@/lib/images';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-parchment py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-gold">
          @velmorafine
        </p>
        <h2 className="mt-3 text-center font-serif text-3xl md:text-4xl text-espresso">
          Styled by You
        </h2>
      </div>

      <div
        ref={containerRef}
        className="mt-10 flex gap-4 overflow-x-auto px-4 pb-4 no-scrollbar sm:px-6 lg:px-8"
      >
        {ugcReels.map((reel) => (
          <div
            key={reel.id}
            className="relative aspect-[9/16] w-[260px] flex-shrink-0 overflow-hidden rounded-sm"
          >
            <img
              data-strk-img-id={reel.imageId}
              data-strk-img={`[ugc-caption-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="520"
              src={IMAGE_PLACEHOLDER}
              alt={reel.caption}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${reel.id}`}
              className="sr-only"
            >
              {reel.query}
            </p>
            <span className="absolute bottom-5 left-5 font-serif text-lg italic text-white">
              {reel.caption}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}