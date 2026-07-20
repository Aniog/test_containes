import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  { id: 'reel-1', caption: 'Everyday gold' },
  { id: 'reel-2', caption: 'Layered moments' },
  { id: 'reel-3', caption: 'Gift-worthy' },
  { id: 'reel-4', caption: 'Soft light' },
  { id: 'reel-5', caption: 'Ear stories' },
  { id: 'reel-6', caption: 'Fine details' },
];

const placeholder =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

export default function ReelStrip() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cream py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-brand text-accent">
              @velmorajewelry
            </p>
            <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
              On the Feed
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hidden text-xs uppercase tracking-brand text-muted hover:text-accent md:block"
          >
            Follow Us
          </a>
        </div>
      </div>

      <div className="hide-scrollbar flex gap-4 overflow-x-auto px-4 md:px-8">
        {reels.map((reel) => {
          const titleId = `${reel.id}-title`;
          return (
            <div
              key={reel.id}
              className="relative aspect-[9/16] w-[170px] flex-shrink-0 overflow-hidden md:w-[220px]"
            >
              <img
                data-strk-img-id={`reel-${reel.id}-img`}
                data-strk-img={`[${titleId}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="500"
                src={placeholder}
                alt={reel.caption}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p
                  id={titleId}
                  className="font-serif text-lg italic text-white"
                >
                  {reel.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
