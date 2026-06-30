import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    imgId: 'ugc-reel-1-a1b2c3',
    caption: '"My everyday gold"',
    handle: '@sofiamartin',
    titleId: 'ugc-1-title',
    descId: 'ugc-1-desc',
    title: 'Gold huggie earrings worn close up',
    desc: 'Woman wearing gold huggie earrings close up portrait',
  },
  {
    id: 'ugc-2',
    imgId: 'ugc-reel-2-d4e5f6',
    caption: '"Perfect gift for her"',
    handle: '@emmawilson',
    titleId: 'ugc-2-title',
    descId: 'ugc-2-desc',
    title: 'Gold necklace worn on neck',
    desc: 'Woman wearing delicate gold necklace portrait',
  },
  {
    id: 'ugc-3',
    imgId: 'ugc-reel-3-g7h8i9',
    caption: '"Obsessed with this set"',
    handle: '@clairedumont',
    titleId: 'ugc-3-title',
    descId: 'ugc-3-desc',
    title: 'Gold jewelry set earrings necklace',
    desc: 'Woman wearing matching gold earrings and necklace set',
  },
  {
    id: 'ugc-4',
    imgId: 'ugc-reel-4-j1k2l3',
    caption: '"Wore it to my wedding"',
    handle: '@isabellerouge',
    titleId: 'ugc-4-title',
    descId: 'ugc-4-desc',
    title: 'Bridal gold ear cuff crystal',
    desc: 'Bride wearing gold crystal ear cuff close up',
  },
  {
    id: 'ugc-5',
    imgId: 'ugc-reel-5-m4n5o6',
    caption: '"Worth every penny"',
    handle: '@nataliebrown',
    titleId: 'ugc-5-title',
    descId: 'ugc-5-desc',
    title: 'Gold drop earrings filigree worn',
    desc: 'Woman wearing gold filigree drop earrings portrait',
  },
  {
    id: 'ugc-6',
    imgId: 'ugc-reel-6-p7q8r9',
    caption: '"My go-to stack"',
    handle: '@zoeanderson',
    titleId: 'ugc-6-title',
    descId: 'ugc-6-desc',
    title: 'Gold jewelry stack ear multiple earrings',
    desc: 'Woman with multiple gold earrings stacked on ear',
  },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-ivory-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs tracking-ultra-wide uppercase font-sans text-gold mb-2">
              As Worn By You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block text-xs tracking-widest uppercase font-sans text-text-secondary hover:text-gold transition-colors border-b border-text-secondary/30 pb-0.5"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded overflow-hidden group cursor-pointer"
          >
            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.title}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-serif text-sm text-ivory italic leading-tight mb-0.5">
                {item.caption}
              </p>
              <p className="text-[10px] text-ivory/70 font-sans tracking-wide">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
