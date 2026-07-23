import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: '"Everyday elegance"',
    imageId: 'ugc-earring-1a2b3c',
    query: '[ugc-caption-1]',
  },
  {
    id: 'ugc-2',
    caption: '"Golden hour glow"',
    imageId: 'ugc-necklace-4d5e6f',
    query: '[ugc-caption-2]',
  },
  {
    id: 'ugc-3',
    caption: '"Stacked & styled"',
    imageId: 'ugc-huggies-7g8h9i',
    query: '[ugc-caption-3]',
  },
  {
    id: 'ugc-4',
    caption: '"Layered perfection"',
    imageId: 'ugc-earring-0j1k2l',
    query: '[ugc-caption-4]',
  },
  {
    id: 'ugc-5',
    caption: '"The finishing touch"',
    imageId: 'ugc-necklace-3m4n5o',
    query: '[ugc-caption-5]',
  },
  {
    id: 'ugc-6',
    caption: '"Minimalist dreams"',
    imageId: 'ugc-huggies-6p7q8r',
    query: '[ugc-caption-6]',
  },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 bg-stone-50 overflow-hidden">
      <div className="container-wide mb-8">
        <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-2 text-center">As Worn By You</p>
        <h2 className="serif-heading text-3xl md:text-4xl text-stone-900 text-center">The Velmora Edit</h2>
      </div>

      <div ref={containerRef} className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] rounded-sm overflow-hidden group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              data-strk-bg-id={item.imageId}
              data-strk-bg={item.query}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="400"
              style={{
                background: item.id === 'ugc-1' ? 'linear-gradient(135deg, #2d2418 0%, #4a3728 50%, #6b5238 100%)' :
                  item.id === 'ugc-2' ? 'linear-gradient(135deg, #1a2332 0%, #2d3a4a 50%, #4a5a6b 100%)' :
                  item.id === 'ugc-3' ? 'linear-gradient(135deg, #2a1f14 0%, #4a3520 50%, #6b5030 100%)' :
                  item.id === 'ugc-4' ? 'linear-gradient(135deg, #1f2a1a 0%, #3a4a30 50%, #5a6b45 100%)' :
                  item.id === 'ugc-5' ? 'linear-gradient(135deg, #2a1a2a 0%, #4a304a 50%, #6b456b 100%)' :
                  'linear-gradient(135deg, #2d2418 0%, #4a3728 50%, #6b5238 100%)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${item.id.split('-')[1]}`}
              className="absolute bottom-4 left-4 right-4 serif-heading text-stone-50 text-lg italic"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
