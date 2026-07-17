import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', imgId: 'reel-ear-cuff-a1b2', caption: 'How I style the ear cuff' },
  { id: 'reel-2', imgId: 'reel-layered-necklace-c3d4', caption: 'Layering made easy' },
  { id: 'reel-3', imgId: 'reel-huggies-e5f6', caption: 'Everyday huggies' },
  { id: 'reel-4', imgId: 'reel-gift-set-g7h8', caption: 'Gift-ready sets' },
  { id: 'reel-5', imgId: 'reel-gold-drop-i9j0', caption: 'Date night drops' },
  { id: 'reel-6', imgId: 'reel-stacked-k1l2', caption: 'Stacked and styled' },
];

export function UgcReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-velmora-bg py-16 md:py-24" ref={containerRef}>
      <div className="px-5 md:px-8 lg:px-12 xl:px-16 mb-8 md:mb-10">
        <span className="block mb-3 font-sans text-xs uppercase tracking-[0.25em] text-velmora-accent">
          @velmorafine
        </span>
        <h2 className="font-serif text-3xl md:text-4xl text-velmora-text">
          Styled by You
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto no-scrollbar px-5 md:px-8 lg:px-12 xl:px-16 pb-2">
        {reels.map((reel) => (
          <article
            key={reel.id}
            className="relative h-[420px] md:h-[520px] w-[260px] md:w-[300px] flex-shrink-0 overflow-hidden group"
          >
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[reel-caption-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="img-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-text/60 via-transparent to-transparent" />
            <p
              id={`reel-caption-${reel.id}`}
              className="absolute bottom-5 left-5 right-5 font-serif text-lg md:text-xl italic text-white"
            >
              {reel.caption}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
