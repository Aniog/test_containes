import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  {
    id: 'reel-1',
    caption: 'Everyday elegance',
    imgId: 'ugc-reel-1-a1b2',
    titleId: 'reel-cap-1',
  },
  {
    id: 'reel-2',
    caption: 'Gold on gold',
    imgId: 'ugc-reel-2-c3d4',
    titleId: 'reel-cap-2',
  },
  {
    id: 'reel-3',
    caption: 'The perfect gift',
    imgId: 'ugc-reel-3-e5f6',
    titleId: 'reel-cap-3',
  },
  {
    id: 'reel-4',
    caption: 'Stack & layer',
    imgId: 'ugc-reel-4-g7h8',
    titleId: 'reel-cap-4',
  },
  {
    id: 'reel-5',
    caption: 'Quiet luxury',
    imgId: 'ugc-reel-5-i9j0',
    titleId: 'reel-cap-5',
  },
];

export default function ReelRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-8">
        <h2 id="reel-section-title" className="text-3xl md:text-4xl font-serif text-ink">As Seen On You</h2>
        <p className="text-taupe-500 font-sans text-sm mt-2">Tag @velmora for a chance to be featured.</p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 px-6 md:px-12 lg:px-16 scrollbar-hide snap-x snap-mandatory">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[200px] md:w-[240px] snap-start"
          >
            <div className="aspect-[9/16] bg-cream-200 rounded-sm overflow-hidden relative group cursor-pointer">
              <img
                alt={reel.caption}
                data-strk-img-id={reel.imgId}
                data-strk-img={`[${reel.titleId}] [reel-section-title]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p
                id={reel.titleId}
                className="absolute bottom-4 left-4 right-4 text-white font-serif text-sm italic text-balance"
              >
                {reel.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}