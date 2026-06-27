import React, { useRef } from 'react';
import { Play } from 'lucide-react';
import { useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  {
    id: 'reel-1',
    title: 'Golden Hour Glow',
    handle: '@jessica.m',
    imageId: 'ugc-reel-1-a8b2c4',
    titleId: 'reel-title-1',
  },
  {
    id: 'reel-2',
    title: 'Date Night Edit',
    handle: '@sophia.k',
    imageId: 'ugc-reel-2-d3e5f7',
    titleId: 'reel-title-2',
  },
  {
    id: 'reel-3',
    title: 'Office to Dinner',
    handle: '@emma.r',
    imageId: 'ugc-reel-3-g9h2j4',
    titleId: 'reel-title-3',
  },
  {
    id: 'reel-4',
    title: 'Weekend Brunch',
    handle: '@olivia.p',
    imageId: 'ugc-reel-4-k6l8m1',
    titleId: 'reel-title-4',
  },
  {
    id: 'reel-5',
    title: 'Gift Unboxing',
    handle: '@ava.l',
    imageId: 'ugc-reel-5-n2o4p7',
    titleId: 'reel-title-5',
  },
];

const UGCReels = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-paper overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-gold mb-3">
              As Seen On
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink">@Velmora</h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-warm-gray hover:text-gold transition-colors"
          >
            Follow Us
          </a>
        </div>
      </div>

      <div ref={containerRef} className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-6 lg:px-8 pb-4 scrollbar-hide">
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[220px] group cursor-pointer"
          >
            <div className="relative aspect-[9/16] bg-cream rounded-sm overflow-hidden mb-3">
              <img
                data-strk-img-id={reel.imageId}
                data-strk-img={`[${reel.titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={reel.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-paper/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-4 h-4 text-ink ml-0.5" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <p
                  id={reel.titleId}
                  className="font-serif text-sm text-cream leading-snug"
                >
                  {reel.title}
                </p>
                <p className="text-[10px] text-cream/70 mt-1">{reel.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReels;
