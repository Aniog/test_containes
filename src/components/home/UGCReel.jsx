import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'The Vivid Aura ear cuff — my everyday essential.',
    handle: '@sofiamartin',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-title-1',
    captionId: 'ugc-caption-1',
  },
  {
    id: 'ugc-2',
    caption: 'Flora Nectar for a dinner date. Obsessed.',
    handle: '@emilywren',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    captionId: 'ugc-caption-2',
  },
  {
    id: 'ugc-3',
    caption: 'Golden Sphere huggies — stacked and perfect.',
    handle: '@natalierose',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    captionId: 'ugc-caption-3',
  },
  {
    id: 'ugc-4',
    caption: 'Gifted the Heirloom Set to my sister. She cried.',
    handle: '@clairedumont',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
    captionId: 'ugc-caption-4',
  },
  {
    id: 'ugc-5',
    caption: 'Amber Lace drops with a silk slip dress. Chef\'s kiss.',
    handle: '@isabellav',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
    captionId: 'ugc-caption-5',
  },
  {
    id: 'ugc-6',
    caption: 'Velmora is the only jewelry I wear now.',
    handle: '@priyakapoor',
    imgId: 'ugc-img-6-p7q8r9',
    titleId: 'ugc-title-6',
    captionId: 'ugc-caption-6',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-surface-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-widest font-sans text-gold mb-3">
              As Worn By You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-ink">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="text-xs uppercase tracking-widest font-sans text-muted hover:text-gold transition-colors self-start md:self-auto flex items-center gap-2"
          >
            Follow @velmora <span>→</span>
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="group relative flex-shrink-0 w-44 md:w-56 overflow-hidden cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] gold jewelry worn woman portrait`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/20 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.captionId}
                className="font-serif text-sm italic text-ivory leading-snug mb-1"
              >
                "{item.caption}"
              </p>
              <p className="text-[10px] font-sans text-ivory/60 uppercase tracking-widest">
                {item.handle}
              </p>
            </div>

            {/* Hidden title for image query */}
            <span id={item.titleId} className="sr-only">
              Velmora jewelry worn
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
