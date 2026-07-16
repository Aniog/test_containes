import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance', titleId: 'ugc-1-title', imgId: 'ugc-img-1-q2w3e4' },
  { id: 'ugc-2', caption: 'Stacked & styled', titleId: 'ugc-2-title', imgId: 'ugc-img-2-r5t6y7' },
  { id: 'ugc-3', caption: 'Golden hour glow', titleId: 'ugc-3-title', imgId: 'ugc-img-3-u8i9o0' },
  { id: 'ugc-4', caption: 'Gift-worthy moments', titleId: 'ugc-4-title', imgId: 'ugc-img-4-p1a2s3' },
  { id: 'ugc-5', caption: 'Minimal luxe', titleId: 'ugc-5-title', imgId: 'ugc-img-5-d4f5g6' },
  { id: 'ugc-6', caption: 'Date night ready', titleId: 'ugc-6-title', imgId: 'ugc-img-6-h7j8k9' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">Worn by You</h2>
          <p className="text-sm text-taupe">Real moments, real style. Tag @velmora to be featured.</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 pb-4" style={{ width: 'max-content' }}>
          {ugcItems.map((item) => (
            <div key={item.id} className="relative w-48 md:w-56 aspect-[9/16] overflow-hidden group flex-shrink-0">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] woman wearing gold jewelry close up portrait`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p
                id={item.titleId}
                className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic"
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
