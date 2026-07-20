import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcReels } from '../../data/products';

function ReelCard({ reel }) {
  return (
    <div className="relative flex-shrink-0 w-40 md:w-52 aspect-reel overflow-hidden group cursor-pointer">
      <img
        data-strk-img-id={reel.imgId}
        data-strk-img={`[${reel.descId}] [${reel.titleId}] gold jewelry worn lifestyle`}
        data-strk-img-ratio="9x16"
        data-strk-img-width="400"
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={reel.product}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-velmora-obsidian/80 via-transparent to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p
          id={reel.titleId}
          className="font-cormorant text-sm italic text-velmora-ivory leading-tight"
        >
          {reel.caption}
        </p>
        <p
          id={reel.descId}
          className="font-manrope text-[10px] uppercase tracking-widest text-velmora-gold mt-1"
        >
          {reel.product}
        </p>
      </div>

      {/* Play icon overlay */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-7 h-7 rounded-full bg-velmora-ivory/20 backdrop-blur-sm flex items-center justify-center">
          <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-velmora-ivory ml-0.5" />
        </div>
      </div>
    </div>
  );
}

export default function UGCReelSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-velmora-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">
              As Seen On
            </p>
            <h2 className="font-cormorant text-4xl md:text-5xl text-velmora-obsidian">
              Worn & Loved
            </h2>
          </div>
          <a
            href="#"
            className="font-manrope text-xs uppercase tracking-widest text-velmora-muted hover:text-velmora-gold transition-colors duration-200 border-b border-velmora-linen hover:border-velmora-gold pb-0.5 hidden md:block"
          >
            @velmora →
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {/* Duplicate for seamless feel */}
        {[...ugcReels, ...ugcReels].map((reel, i) => (
          <ReelCard key={`${reel.id}-${i}`} reel={{ ...reel, imgId: `${reel.imgId}-${i}` }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-6 md:hidden">
        <a
          href="#"
          className="font-manrope text-xs uppercase tracking-widest text-velmora-muted hover:text-velmora-gold transition-colors duration-200"
        >
          Follow @velmora →
        </a>
      </div>
    </section>
  );
}
