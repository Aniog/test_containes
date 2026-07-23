import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    imgId: 'ugc-img-1-a1b2c3',
    caption: 'My everyday gold',
    handle: '@sofiamartin',
    titleId: 'ugc-1-title',
    captionId: 'ugc-1-caption',
  },
  {
    id: 'ugc-2',
    imgId: 'ugc-img-2-d4e5f6',
    caption: 'Gifted myself these',
    handle: '@emmawilson',
    titleId: 'ugc-2-title',
    captionId: 'ugc-2-caption',
  },
  {
    id: 'ugc-3',
    imgId: 'ugc-img-3-g7h8i9',
    caption: 'Stack season',
    handle: '@laurajones',
    titleId: 'ugc-3-title',
    captionId: 'ugc-3-caption',
  },
  {
    id: 'ugc-4',
    imgId: 'ugc-img-4-j1k2l3',
    caption: 'Obsessed with these huggies',
    handle: '@isabellachen',
    titleId: 'ugc-4-title',
    captionId: 'ugc-4-caption',
  },
  {
    id: 'ugc-5',
    imgId: 'ugc-img-5-m4n5o6',
    caption: 'Perfect gift for her',
    handle: '@natalierose',
    titleId: 'ugc-5-title',
    captionId: 'ugc-5-caption',
  },
  {
    id: 'ugc-6',
    imgId: 'ugc-img-6-p7q8r9',
    caption: 'Wearing daily',
    handle: '@oliviabrown',
    titleId: 'ugc-6-title',
    captionId: 'ugc-6-caption',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-[10px] uppercase tracking-widest-xl text-velmora-gold mb-2">
              As Worn By You
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-velmora-obsidian">
              #WearVelmora
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-manrope text-xs uppercase tracking-widest-md text-velmora-text-muted hover:text-velmora-gold transition-colors"
          >
            Follow Us
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] gold jewelry worn on ear neck woman portrait`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                id={item.captionId}
                className="font-cormorant text-sm italic text-velmora-cream leading-tight"
              >
                "{item.caption}"
              </p>
              <p
                id={item.titleId}
                className="font-manrope text-[10px] text-velmora-cream/60 mt-1"
              >
                {item.handle}
              </p>
            </div>

            {/* Instagram-style play indicator */}
            <div className="absolute top-3 right-3 opacity-60">
              <div className="w-5 h-5 border border-velmora-cream/60 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-velmora-cream/80 ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
