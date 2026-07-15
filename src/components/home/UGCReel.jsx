import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Daily radiance with our Golden Sphere Huggies', label: 'Golden Sphere Huggies' },
  { id: 'ugc-2', caption: 'The Amber Lace catching golden hour light', label: 'Amber Lace Earrings' },
  { id: 'ugc-3', caption: 'Stacking our Vivid Aura cuff with classics', label: 'Vivid Aura Jewels' },
  { id: 'ugc-4', caption: 'Gifted the Royal Heirloom Set — she said yes', label: 'Royal Heirloom Set' },
  { id: 'ugc-5', caption: 'Majestic Flora Nectar in natural light', label: 'Majestic Flora Nectar' },
  { id: 'ugc-6', caption: 'Everyday elegance with our gold essentials', label: 'Gold Essentials' },
];

export default function UGCReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-10 md:mb-12">
        <div className="text-center">
          <p className="section-subtitle mb-3">As Seen On You</p>
          <h2 className="section-title">Real Wear, Real Love</h2>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="overflow-x-auto pb-4 no-scrollbar">
        <div className="flex gap-4 md:gap-6 px-6 w-max">
          {ugcItems.map((item) => (
            <div key={item.id} className="relative w-44 md:w-56 flex-shrink-0 group cursor-pointer">
              {/* 9:16 card */}
              <div className="aspect-[9/16] overflow-hidden bg-velvet-100 rounded-sm">
                <img
                  data-strk-img-id={item.id}
                  data-strk-img={`[ugc-caption-${item.id}] [ugc-label-${item.id}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Caption overlay */}
              <div className="mt-3">
                <p id={`ugc-label-${item.id}`} className="product-name mb-1">{item.label}</p>
                <p id={`ugc-caption-${item.id}`} className="text-xs text-ink-muted leading-relaxed line-clamp-2">
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