import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PLACEHOLDER_IMG } from '@/data/products';
import SectionHeading from '@/components/ui/SectionHeading';

const reels = [
  {
    id: 'reel-golden-hour',
    caption: 'Golden hour, in gold',
    alt: 'Gold huggie earrings worn on ear in warm evening light',
  },
  {
    id: 'reel-layers',
    caption: 'Layers that speak softly',
    alt: 'Layered gold necklaces on neckline',
  },
  {
    id: 'reel-everyday',
    caption: 'Everyday heirlooms',
    alt: 'Woman wearing delicate gold earrings in natural light',
  },
  {
    id: 'reel-detail',
    caption: 'The details you keep',
    alt: 'Close-up of gold ear cuff with crystal accent',
  },
  {
    id: 'reel-gifted',
    caption: 'Gifted, and kept',
    alt: 'Gold necklace held in hand as a gift',
  },
];

export default function UgcReels() {
  const containerRef = useRef(null);

  useEffect(() => ImageHelper.loadImages(strkImgConfig, containerRef.current), []);

  return (
    <section ref={containerRef} className="border-y border-umber bg-onyx/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading
          eyebrow="As Worn By You"
          title="Velmora, in the Wild"
          copy="Tag @velmora.jewelry to be featured — real moments, real gold."
        />
      </div>
      <div className="mt-12 overflow-x-auto no-scrollbar md:mt-16">
        <div className="flex w-max gap-4 px-5 md:mx-auto md:max-w-7xl md:px-10 lg:w-full lg:justify-center">
          {reels.map((reel, index) => (
            <figure
              key={reel.id}
              className="reveal group relative aspect-[9/16] w-44 shrink-0 overflow-hidden border border-umber bg-noir md:w-52 lg:w-56"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <img
                data-strk-img-id={`${reel.id}-u1`}
                data-strk-img={`[${reel.id}-caption] gold jewelry worn on ear neck close-up warm editorial`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src={PLACEHOLDER_IMG}
                alt={reel.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir/85 via-transparent to-noir/20" />
              <figcaption
                id={`${reel.id}-caption`}
                className="absolute inset-x-0 bottom-0 p-4 font-serif text-lg italic leading-snug text-ivory"
              >
                {reel.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
