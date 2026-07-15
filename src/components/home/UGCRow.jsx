import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Golden hour glow', imgId: 'ugc-ear-golden-1a2b3c' },
  { id: 'ugc-2', caption: 'Stacked & styled', imgId: 'ugc-neck-stacked-4d5e6f' },
  { id: 'ugc-3', caption: 'Everyday elegance', imgId: 'ugc-ear-elegant-7g8h9i' },
  { id: 'ugc-4', caption: 'Date night ready', imgId: 'ugc-neck-date-j0k1l2' },
  { id: 'ugc-5', caption: 'Minimal & chic', imgId: 'ugc-ear-minimal-m3n4o5' },
  { id: 'ugc-6', caption: 'Gift-worthy', imgId: 'ugc-set-gift-p6q7r8' },
  { id: 'ugc-7', caption: 'Self-care sparkle', imgId: 'ugc-huggie-sparkle-s9t0u1' },
];

export default function UGCRow() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-cream-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center">
          <p className="section-subheading mb-3">As Seen On</p>
          <h2 className="section-heading">Style Stories</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-5" />
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-4 px-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] snap-start overflow-hidden group cursor-pointer"
          >
            <img
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover"
              data-strk-img-id={item.imgId}
              data-strk-img={`woman wearing gold jewelry ${item.caption} closeup ear neck`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="480"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-serif text-lg text-white leading-snug">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
