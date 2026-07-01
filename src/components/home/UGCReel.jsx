import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: '"My everyday gold"',
    sub: 'Vivid Aura Ear Cuff',
    imgId: 'ugc-reel-1-img-a1b2c3',
    titleId: 'ugc-reel-1-title',
    captionId: 'ugc-reel-1-caption',
  },
  {
    id: 'ugc-2',
    caption: '"Perfect gift"',
    sub: 'Royal Heirloom Set',
    imgId: 'ugc-reel-2-img-d4e5f6',
    titleId: 'ugc-reel-2-title',
    captionId: 'ugc-reel-2-caption',
  },
  {
    id: 'ugc-3',
    caption: '"Obsessed with these"',
    sub: 'Golden Sphere Huggies',
    imgId: 'ugc-reel-3-img-g7h8i9',
    titleId: 'ugc-reel-3-title',
    captionId: 'ugc-reel-3-caption',
  },
  {
    id: 'ugc-4',
    caption: '"Wear it everywhere"',
    sub: 'Majestic Flora Necklace',
    imgId: 'ugc-reel-4-img-j1k2l3',
    titleId: 'ugc-reel-4-title',
    captionId: 'ugc-reel-4-caption',
  },
  {
    id: 'ugc-5',
    caption: '"Delicate & stunning"',
    sub: 'Amber Lace Earrings',
    imgId: 'ugc-reel-5-img-m4n5o6',
    titleId: 'ugc-reel-5-title',
    captionId: 'ugc-reel-5-caption',
  },
  {
    id: 'ugc-6',
    caption: '"Gifted to my sister"',
    sub: 'Royal Heirloom Set',
    imgId: 'ugc-reel-6-img-p7q8r9',
    titleId: 'ugc-reel-6-title',
    captionId: 'ugc-reel-6-caption',
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
    <section className="py-16 md:py-20 bg-velmora-stone overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest-xl font-sans text-velmora-gold mb-2">
              As Worn By You
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-light text-velmora-ink">
              The Velmora Edit
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block text-xs uppercase tracking-widest font-sans text-velmora-muted hover:text-velmora-gold transition-colors"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 relative overflow-hidden group cursor-pointer"
            style={{
              width: 'clamp(160px, 28vw, 220px)',
              aspectRatio: '9/16',
              scrollSnapAlign: 'start',
            }}
          >
            {/* Background image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] [${item.titleId}] gold jewelry worn`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              alt={item.sub}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.captionId}
                className="font-serif text-sm italic text-white font-light leading-snug mb-1"
              >
                {item.caption}
              </p>
              <p
                id={item.titleId}
                className="text-[10px] uppercase tracking-widest text-velmora-gold font-sans"
              >
                {item.sub}
              </p>
            </div>

            {/* Play icon overlay */}
            <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
              <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-white ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
