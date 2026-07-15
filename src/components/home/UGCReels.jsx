import React from 'react';
import { useImageLoader } from '@/hooks/useImageLoader';
import { ugcReels } from '@/data/products';

export default function UGCReels() {
  const containerRef = useImageLoader();

  return (
    <section className="bg-cream py-12 md:py-16" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center font-serif text-2xl font-medium text-espresso md:mb-8 md:text-left">
          Styled by You
        </h2>
      </div>

      <div
        className="hide-scrollbar flex gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-8"
      >
        {ugcReels.map(reel => (
          <div
            key={reel.id}
            className="relative w-[180px] flex-shrink-0 snap-start overflow-hidden rounded-sm sm:w-[220px]"
          >
            <p id={reel.queryId} className="sr-only">
              {reel.imageQuery}
            </p>
            <div
              data-strk-bg-id={reel.imgId}
              data-strk-bg={`[${reel.queryId}] [${reel.titleId}]`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="500"
              role="img"
              aria-label={reel.caption}
              className="aspect-[9/16] w-full bg-warm-gray bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
            <p
              id={reel.titleId}
              className="absolute bottom-4 left-4 right-4 font-serif text-base italic text-cream"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
