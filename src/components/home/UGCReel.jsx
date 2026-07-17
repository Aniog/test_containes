import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: '"My everyday earrings."', imgId: 'ugc-img-1-a1b2', titleId: 'ugc-title-1', descId: 'ugc-desc-1', query: 'woman wearing gold earrings portrait' },
  { id: 'ugc-2', caption: '"Gifted myself."',        imgId: 'ugc-img-2-c3d4', titleId: 'ugc-title-2', descId: 'ugc-desc-2', query: 'gold necklace worn woman neck close up' },
  { id: 'ugc-3', caption: '"Perfect gift."',         imgId: 'ugc-img-3-e5f6', titleId: 'ugc-title-3', descId: 'ugc-desc-3', query: 'huggie earrings ear close up gold' },
  { id: 'ugc-4', caption: '"Obsessed."',             imgId: 'ugc-img-4-g7h8', titleId: 'ugc-title-4', descId: 'ugc-desc-4', query: 'fine jewelry gold earrings woman editorial' },
  { id: 'ugc-5', caption: '"Worth every penny."',    imgId: 'ugc-img-5-i9j0', titleId: 'ugc-title-5', descId: 'ugc-desc-5', query: 'gold jewelry necklace pendant worn' },
  { id: 'ugc-6', caption: '"My go-to stack."',       imgId: 'ugc-img-6-k1l2', titleId: 'ugc-title-6', descId: 'ugc-desc-6', query: 'stacked gold earrings ear jewelry' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 bg-parchment overflow-hidden">
      <div className="text-center mb-10 px-6">
        <p className="font-sans text-xs tracking-widest3 uppercase text-champagne mb-3">As Seen On You</p>
        <h2 className="font-serif text-4xl text-obsidian font-light">#WearVelmora</h2>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-auto pb-4 px-6 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 snap-start overflow-hidden rounded-sm"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Hidden text for image query context */}
            <span id={item.titleId} className="sr-only">{item.caption}</span>
            <span id={item.descId} className="sr-only">{item.query}</span>

            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              alt={item.caption}
              className="w-full h-full object-cover"
            />

            {/* Gradient + caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-3 right-3 font-serif text-sm text-ivory italic leading-snug">
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
