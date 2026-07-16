import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'ugc1', title: 'Morning light', caption: 'Golden hour stacking' },
  { id: 'ugc2', title: 'Everyday glow', caption: 'The everyday cuff' },
  { id: 'ugc3', title: 'Evening layers', caption: 'Necklace layering' },
  { id: 'ugc4', title: 'Wrist details', caption: 'Styled with love' },
  { id: 'ugc5', title: 'Close up', caption: 'Texture & light' },
  { id: 'ugc6', title: 'Desk to dinner', caption: 'Day to night' },
];

export default function UgcReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-clay">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-10">
          <h2 className="serif-heading text-2xl md:text-3xl text-espresso">As Worn by You</h2>
          <p className="text-sm text-taupe mt-2">Tag @velmora for a chance to be featured</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto px-6 md:px-10 pb-4 snap-x snap-mandatory scrollbar-hide">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[45vw] md:w-[22vw] lg:w-[16vw] snap-start"
          >
            <div className="relative aspect-[9/16] bg-espresso/5 overflow-hidden group cursor-pointer">
              <img
                alt={reel.title}
                data-strk-img-id={`ugc-${reel.id}`}
                data-strk-img={`[ugc-caption-${reel.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-espresso/60 to-transparent">
                <span
                  id={`ugc-caption-${reel.id}`}
                  className="font-serif text-sm text-white italic"
                >
                  {reel.caption}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
