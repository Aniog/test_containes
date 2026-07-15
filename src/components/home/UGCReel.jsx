import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance', desc: 'woman wearing gold earrings selfie mirror', titleId: 'ugc-1-caption', descId: 'ugc-1-desc', imgId: 'ugc-reel-1-x8y9z0' },
  { id: 'ugc-2', caption: 'Stacked & styled', desc: 'woman stacking gold rings and bracelets close up', titleId: 'ugc-2-caption', descId: 'ugc-2-desc', imgId: 'ugc-reel-2-a1b2c3' },
  { id: 'ugc-3', caption: 'Golden hour glow', desc: 'woman gold necklace sunset portrait warm light', titleId: 'ugc-3-caption', descId: 'ugc-3-desc', imgId: 'ugc-reel-3-d4e5f6' },
  { id: 'ugc-4', caption: 'Gift-worthy moments', desc: 'jewelry gift box gold earrings unwrapping', titleId: 'ugc-4-caption', descId: 'ugc-4-desc', imgId: 'ugc-reel-4-g7h8i9' },
  { id: 'ugc-5', caption: 'Minimal luxe', desc: 'woman minimal gold huggie earrings close up ear', titleId: 'ugc-5-caption', descId: 'ugc-5-desc', imgId: 'ugc-reel-5-j0k1l2' },
  { id: 'ugc-6', caption: 'Date night ready', desc: 'woman getting ready gold jewelry evening outfit', titleId: 'ugc-6-caption', descId: 'ugc-6-desc', imgId: 'ugc-reel-6-m3n4o5' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl font-light text-brand-charcoal">
            Worn by You
          </h2>
          <p className="text-sm text-brand-muted mt-2 font-sans">
            @velmora on Instagram
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map((item) => (
            <div key={item.id} className="relative w-48 md:w-56 flex-shrink-0 overflow-hidden rounded-sm group cursor-pointer">
              <div className="aspect-[9/16] bg-brand-warm relative overflow-hidden">
                <span id={item.descId} className="sr-only">{item.desc}</span>
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p id={item.titleId} className="font-serif text-sm text-white italic">
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
};

export default UGCReel;
