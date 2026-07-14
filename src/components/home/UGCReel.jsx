import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  {
    id: 'reel-1',
    caption: 'Morning light, golden layers',
    imgId: 'ugc-reel-1-a1b2c3',
    titleId: 'ugc-reel-1-title',
    captionId: 'ugc-reel-1-caption',
  },
  {
    id: 'reel-2',
    caption: 'The ear stack of your dreams',
    imgId: 'ugc-reel-2-d4e5f6',
    titleId: 'ugc-reel-2-title',
    captionId: 'ugc-reel-2-caption',
  },
  {
    id: 'reel-3',
    caption: 'Effortless. Every day.',
    imgId: 'ugc-reel-3-g7h8i9',
    titleId: 'ugc-reel-3-title',
    captionId: 'ugc-reel-3-caption',
  },
  {
    id: 'reel-4',
    caption: 'Gift her something golden',
    imgId: 'ugc-reel-4-j1k2l3',
    titleId: 'ugc-reel-4-title',
    captionId: 'ugc-reel-4-caption',
  },
  {
    id: 'reel-5',
    caption: 'Layered necklaces, warm skin',
    imgId: 'ugc-reel-5-m4n5o6',
    titleId: 'ugc-reel-5-title',
    captionId: 'ugc-reel-5-caption',
  },
  {
    id: 'reel-6',
    caption: 'Huggies that hug back',
    imgId: 'ugc-reel-6-p7q8r9',
    titleId: 'ugc-reel-6-title',
    captionId: 'ugc-reel-6-caption',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-linen border-t border-sand">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-2">As Seen On</p>
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian">@velmora</h2>
          </div>
          <a
            href="#"
            className="font-sans text-xs uppercase tracking-[0.15em] text-stone border-b border-stone pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200 hidden md:block"
          >
            Follow Us
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-6 md:px-10 pb-2">
        {reels.map(reel => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-40 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              alt={reel.caption}
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.captionId}] [${reel.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p
                id={reel.captionId}
                className="font-serif text-sm italic text-white leading-snug"
              >
                {reel.caption}
              </p>
              <span id={reel.titleId} className="sr-only">Velmora jewelry worn by customer</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
