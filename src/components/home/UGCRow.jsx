import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcImages } from '@/data/products';

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-velvet-surface">
      <div className="mb-10 text-center md:text-left container-wide">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-base mb-3">As Worn by You</h2>
        <p className="text-velvet-muted text-sm">Styled and shared by the Velmora community.</p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-5 md:px-10 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcImages.map((ugc) => (
          <div
            key={ugc.id}
            className="flex-shrink-0 w-[180px] md:w-[220px] snap-center group cursor-pointer"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-velvet-border/30">
              <img
                data-strk-img-id={`ugc-${ugc.id}`}
                data-strk-img={`[ugc-caption-${ugc.id}] gold jewelry model`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
                alt={ugc.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Caption overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velvet-base/80 to-transparent pt-12 pb-4 px-4">
                <p id={`ugc-caption-${ugc.id}`} className="text-white/90 text-xs font-serif italic">
                  {ugc.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
