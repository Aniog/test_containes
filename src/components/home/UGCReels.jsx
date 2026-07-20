import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const reels = [
  {
    id: 'reel-1',
    caption: '"My go-to everyday earring"',
    imgId: 'ugc-reel-1-img-a1b2c3',
    titleId: 'ugc-reel-1-title',
    descId: 'ugc-reel-1-desc',
    title: 'Gold huggie earrings worn on ear',
    desc: 'Woman wearing gold huggie earrings close up portrait',
  },
  {
    id: 'reel-2',
    caption: '"Obsessed with this necklace"',
    imgId: 'ugc-reel-2-img-d4e5f6',
    titleId: 'ugc-reel-2-title',
    descId: 'ugc-reel-2-desc',
    title: 'Delicate gold necklace on neck',
    desc: 'Woman wearing delicate gold pendant necklace editorial portrait',
  },
  {
    id: 'reel-3',
    caption: '"Perfect gift for my sister"',
    imgId: 'ugc-reel-3-img-g7h8i9',
    titleId: 'ugc-reel-3-title',
    descId: 'ugc-reel-3-desc',
    title: 'Gold jewelry gift set unboxing',
    desc: 'Luxury gold jewelry gift box with earrings and necklace',
  },
  {
    id: 'reel-4',
    caption: '"Stacking these every day"',
    imgId: 'ugc-reel-4-img-j1k2l3',
    titleId: 'ugc-reel-4-title',
    descId: 'ugc-reel-4-desc',
    title: 'Stacked gold earrings ear styling',
    desc: 'Woman with multiple gold earrings ear stack close up',
  },
  {
    id: 'reel-5',
    caption: '"Wore this to my wedding"',
    imgId: 'ugc-reel-5-img-m4n5o6',
    titleId: 'ugc-reel-5-title',
    descId: 'ugc-reel-5-desc',
    title: 'Bridal gold jewelry earrings',
    desc: 'Bride wearing elegant gold drop earrings wedding portrait',
  },
  {
    id: 'reel-6',
    caption: '"Lightweight and so elegant"',
    imgId: 'ugc-reel-6-img-p7q8r9',
    titleId: 'ugc-reel-6-title',
    descId: 'ugc-reel-6-desc',
    title: 'Elegant gold ear cuff crystal',
    desc: 'Woman wearing gold ear cuff with crystal accent close up',
  },
];

export default function UGCReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-cream border-y border-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-3">As Seen On You</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-ink">#WearVelmora</h2>
          </div>
          <a
            href="#"
            className="hidden md:flex font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors duration-300 items-center gap-2 group"
          >
            Follow Us
            <span className="w-8 h-px bg-muted group-hover:bg-gold group-hover:w-12 transition-all duration-300" />
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div ref={containerRef} className="flex gap-3 overflow-x-auto scrollbar-hide px-6 md:px-12 pb-2">
        {reels.map(reel => (
          <div
            key={reel.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              data-strk-img-id={reel.imgId}
              data-strk-img={`[${reel.descId}] [${reel.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={reel.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={reel.titleId} className="sr-only">{reel.title}</span>
            <span id={reel.descId} className="sr-only">{reel.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-sm italic text-ivory/90 leading-snug">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
