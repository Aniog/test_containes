import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

export default function UgcReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[var(--color-surface-alt)] py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 px-6">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-text-muted)]">Styled by You</span>
          <h2 className="font-[var(--font-serif)] text-3xl md:text-4xl mt-3 font-semibold">As Seen On</h2>
          <div className="w-12 h-px bg-[var(--color-accent)] mx-auto mt-4" />
        </div>

        <div className="flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {ugcItems.map((item) => (
            <div key={item.id} className="flex-none w-40 md:w-52 snap-start">
              <div className="aspect-[9/16] bg-[var(--color-velmora-200)] rounded-sm overflow-hidden relative mb-3">
                <img
                  data-strk-img-id={`ugc-${item.id}`}
                  data-strk-img={`[ugc-caption-${item.id}] [ugc-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p id={`ugc-caption-${item.id}`} className="font-[var(--font-serif)] text-sm text-white italic leading-snug">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <span id="ugc-title" className="sr-only">UGC Reel</span>
    </section>
  );
}
