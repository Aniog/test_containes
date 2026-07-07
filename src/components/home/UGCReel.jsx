import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday elegance', query: 'gold earring on woman ear close up warm light' },
  { id: 'reel-2', caption: 'Layer with love', query: 'gold necklace layered on woman neck editorial' },
  { id: 'reel-3', caption: 'Gift-worthy', query: 'jewelry gift box gold velvet luxury' },
  { id: 'reel-4', caption: 'Made to last', query: 'gold huggie earrings close up detail' },
  { id: 'reel-5', caption: 'Your new staple', query: 'woman wearing gold jewelry natural light portrait' },
  { id: 'reel-6', caption: 'Shine on', query: 'gold ear cuff crystal on model warm tones' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center">As Seen On</h2>
        <p className="mt-3 text-sm text-muted font-sans text-center">Real women, real moments</p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide">
        {reels.map(reel => (
          <div key={reel.id} className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] overflow-hidden group">
            <img
              data-strk-img-id={`ugc-${reel.id}-x7y8z9`}
              data-strk-img={`[ugc-caption-${reel.id}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${reel.id}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
