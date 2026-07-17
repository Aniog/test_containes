import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcReels } from '@/data/products';

export default function UGCReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="text-center">
          <p className="section-subheading mb-3">Styled by You</p>
          <h2 className="section-heading">As Seen On</h2>
        </div>
      </div>

      <div className="flex gap-4 px-6 overflow-x-auto scrollbar-hide pb-4">
        {ugcReels.map((reel, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden relative group cursor-pointer"
          >
            <div
              className="w-full h-full"
              data-strk-img-id={`ugc-reel-${i}`}
              data-strk-img={`[ugc-caption-${i}] gold jewelry worn on model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/60 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${i}`}
              className="absolute bottom-4 left-4 right-4 text-cream font-serif text-lg italic leading-snug"
            >
              {reel.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
