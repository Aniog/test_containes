import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: '"My everyday earring."',
    handle: '@sofia.m',
    imgId: 'ugc-img-1-a2b4c6',
    titleId: 'ugc-title-1',
    descId: 'ugc-desc-1',
    desc: 'gold huggie earrings worn on ear close up',
  },
  {
    id: 'ugc-2',
    caption: '"The most beautiful necklace."',
    handle: '@claire.w',
    imgId: 'ugc-img-2-d8e1f3',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    desc: 'delicate gold necklace on collarbone woman',
  },
  {
    id: 'ugc-3',
    caption: '"Gifted this to my sister."',
    handle: '@maya.r',
    imgId: 'ugc-img-3-g5h7i9',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    desc: 'jewelry gift box gold earrings necklace set',
  },
  {
    id: 'ugc-4',
    caption: '"Stacks perfectly."',
    handle: '@anna.k',
    imgId: 'ugc-img-4-j2k4l6',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    desc: 'stacked gold ear cuffs earrings editorial',
  },
  {
    id: 'ugc-5',
    caption: '"Worth every penny."',
    handle: '@priya.s',
    imgId: 'ugc-img-5-m8n1o3',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    desc: 'gold filigree drop earrings worn close up',
  },
  {
    id: 'ugc-6',
    caption: '"Obsessed with this set."',
    handle: '@julia.t',
    imgId: 'ugc-img-6-p5q7r9',
    titleId: 'ugc-title-6',
    descId: 'ugc-desc-6',
    desc: 'woman wearing gold jewelry necklace earrings portrait',
  },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 lg:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] tracking-ultra-wide uppercase font-sans text-gold mb-3">
              As Seen On
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-obsidian" style={{ fontWeight: 300 }}>
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="text-xs tracking-widest uppercase font-sans text-ink-muted hover:text-gold transition-colors border-b border-linen hover:border-gold pb-0.5 hidden sm:block"
          >
            Follow @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-6 lg:px-10 pb-2">
        {ugcItems.map(item => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 lg:w-52 aspect-[9/16] bg-charcoal overflow-hidden group cursor-pointer"
          >
            {/* Background image */}
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.handle}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-sm text-parchment italic leading-snug mb-1">
                {item.caption}
              </p>
              <p className="text-[10px] tracking-wide font-sans text-parchment/60">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
