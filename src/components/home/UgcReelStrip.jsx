import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  {
    id: 'ugc-1',
    caption: 'Golden hour with Golden Spheres ✨',
    title: 'golden sphere huggies worn on ear closeup',
  },
  {
    id: 'ugc-2',
    caption: 'Layered & luminous',
    title: 'majestic flora nectar necklace layered on model',
  },
  {
    id: 'ugc-3',
    caption: 'The perfect gift moment',
    title: 'royal heirloom set gift boxed presentation',
  },
  {
    id: 'ugc-4',
    caption: 'Everyday elegance',
    title: 'amber lace earrings worn on woman',
  },
  {
    id: 'ugc-5',
    caption: 'Stacked & styled',
    title: 'vivid aura jewels ear cuff stacked with huggies',
  },
  {
    id: 'ugc-6',
    caption: 'Dinner date details',
    title: 'floral crystal necklace on neck closeup warm light',
  },
];

export default function UgcReelStrip() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="mb-10 container-site">
        <h2 className="heading-md">Styled by You</h2>
        <p className="body-text mt-2">Tag <span className="text-velmora-accent font-medium">@velmora</span> to be featured</p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 px-5 md:px-10 lg:px-16 snap-x snap-mandatory scrollbar-hide">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-center"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-velmora-muted">
              <img
                alt={reel.title}
                data-strk-img-id={`ugc-${reel.id}`}
                data-strk-img={`[ugc-caption-${reel.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p
                id={`ugc-caption-${reel.id}`}
                className="absolute bottom-4 left-4 right-4 text-white font-serif text-sm leading-snug"
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
