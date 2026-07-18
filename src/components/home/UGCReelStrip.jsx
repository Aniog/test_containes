import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour with my Vivid Aura Jewels — no piercing needed, just pure elegance.' },
  { id: 'ugc-2', caption: 'Stacking the Golden Sphere Huggies with everything. They go with literally every look.' },
  { id: 'ugc-3', caption: 'The Majestic Flora Nectar catches light like nothing else in my jewelry box.' },
  { id: 'ugc-4', caption: 'Amber Lace + a black turtleneck = my new power outfit formula.' },
  { id: 'ugc-5', caption: 'Gifted the Royal Heirloom Set to my mom. She cried. Then she ordered earrings for herself.' },
  { id: 'ugc-6', caption: 'Demi-pearl studs for my third lobe piercing — delicate, dainty, perfect.' },
];

export default function UGCReelStrip() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="text-center mb-14 md:mb-18 px-6">
        <p className="section-subtitle mb-3">Styled by You</p>
        <h2 className="section-title">As Seen On</h2>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 md:gap-6 px-6 md:px-12 pb-4 min-w-max">
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[200px] md:w-[260px] group cursor-pointer"
            >
              <div className="relative aspect-[9/16] bg-[#F5EDDA] overflow-hidden">
                <img
                  data-strk-img-id={`ugc-${item.id}`}
                  data-strk-img={`[ugc-caption-${item.id}] gold jewelry worn on model warm lifestyle`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                  alt="Community style"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Caption */}
                <p
                  id={`ugc-caption-${item.id}`}
                  className="absolute bottom-0 left-0 right-0 p-4 text-white text-[11px] md:text-xs leading-relaxed font-serif italic opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                >
                  {item.caption}
                </p>

                {/* Play icon */}
                <div className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <path d="M11 7L0.5 13.0622V0.937822L11 7Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
