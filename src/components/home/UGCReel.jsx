import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'Morning light, golden hour',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-title-1',
    captionId: 'ugc-caption-1',
  },
  {
    id: 'ugc-2',
    caption: 'Stacked and effortless',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    captionId: 'ugc-caption-2',
  },
  {
    id: 'ugc-3',
    caption: 'The everyday earring',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    captionId: 'ugc-caption-3',
  },
  {
    id: 'ugc-4',
    caption: 'Gift her something real',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
    captionId: 'ugc-caption-4',
  },
  {
    id: 'ugc-5',
    caption: 'Layered necklaces, always',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
    captionId: 'ugc-caption-5',
  },
  {
    id: 'ugc-6',
    caption: 'Wear it your way',
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
    <section ref={containerRef} className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs font-medium tracking-[0.2em] uppercase text-gold mb-3">
              @velmora
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-ink">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="font-manrope text-xs font-medium tracking-[0.12em] uppercase text-mist hover:text-gold transition-colors duration-300 hidden md:flex items-center gap-2"
          >
            Follow Us
            <span className="text-gold">→</span>
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="ugc-scroll overflow-x-auto">
        <div className="flex gap-3 px-4 md:px-8 lg:px-12 pb-2" style={{ width: 'max-content' }}>
          {ugcItems.map(item => (
            <div
              key={item.id}
              className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
              style={{ aspectRatio: '9/16' }}
            >
              {/* Image */}
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.captionId}] gold jewelry woman portrait`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p
                  id={item.captionId}
                  className="font-cormorant text-sm italic font-light text-cream leading-snug"
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
