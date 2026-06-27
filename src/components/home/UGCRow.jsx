import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Play } from 'lucide-react';
import { ugcItems } from '@/data/products';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#FBF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-semibold text-[#1A1A1A] tracking-wide mb-4">
            As Seen On
          </h2>
          <p className="text-[#78716C] text-sm tracking-wide">
            Follow us @velmorajewelry and tag your photos for a chance to be featured.
          </p>
        </div>

        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 md:w-48 snap-start"
            >
              <div className="relative aspect-[9/16] bg-[#E8E4DF] rounded-sm overflow-hidden mb-3 group cursor-pointer">
                <img
                  data-strk-img-id={`ugc-${item.id}`}
                  data-strk-img={`[${item.image}] [${item.caption}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-[#1A1A1A] ml-0.5" fill="#1A1A1A" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-medium truncate drop-shadow-md">
                    {item.caption}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#78716C] text-center">{item.handle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
