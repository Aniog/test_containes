import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '../../data/products';

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-cream-dark" ref={containerRef}>
      <div className="max-w-content mx-auto px-4 md:px-8 mb-8">
        <h2 className="section-heading">As Seen On You</h2>
        <p className="section-sub">Tag @velmorajewelry for a chance to be featured.</p>
      </div>

      <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
        <div className="flex gap-4 min-w-max">
          {ugcItems.map((item, i) => (
            <div key={item.id} className="relative w-48 md:w-56 flex-shrink-0">
              {/* 9:16 vertical card */}
              <div className="aspect-[9/16] bg-cream-dark rounded-lg overflow-hidden relative">
                <img
                  data-strk-img-id={`ugc-${item.id}`}
                  data-strk-img={`[ugc-caption-${item.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Customer wearing Velmora jewelry"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient overlay for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p
                    id={`ugc-caption-${item.id}`}
                    className="text-white font-serif text-sm italic leading-snug"
                  >
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
