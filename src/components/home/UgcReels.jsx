import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UgcReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-[#F5F0EB] py-20 md:py-28">
      <div className="text-center mb-14 px-6">
        <h2 className="font-serif text-3xl md:text-4xl italic text-[#1A1514] tracking-wide">
          As Seen On You
        </h2>
        <p className="text-sm text-[#7A7268] mt-3 tracking-[0.1em] uppercase">
          Tag @velmora to be featured
        </p>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 md:px-10 lg:px-16 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
          {ugcItems.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[180px] md:w-[220px] scroll-snap-align-start"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative aspect-[9/16] bg-[#E5DDD3] overflow-hidden">
                <img
                  alt={item.caption}
                  data-strk-img-id={item.id}
                  data-strk-img={`[ugc-caption-${item.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p
                  id={`ugc-caption-${item.id}`}
                  className="absolute bottom-4 left-4 right-4 font-serif text-sm italic text-white leading-snug"
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
