import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const TRANSPARENT_PX = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday sparkle', titleId: 'ugc-1-title', imgId: 'ugc-reel-1-h7j8k9' },
  { id: 'ugc-2', caption: 'Stacked & styled', titleId: 'ugc-2-title', imgId: 'ugc-reel-2-l0m1n2' },
  { id: 'ugc-3', caption: 'Golden hour glow', titleId: 'ugc-3-title', imgId: 'ugc-reel-3-o3p4q5' },
  { id: 'ugc-4', caption: 'Date night ready', titleId: 'ugc-4-title', imgId: 'ugc-reel-4-r6s7t8' },
  { id: 'ugc-5', caption: 'Minimal luxe', titleId: 'ugc-5-title', imgId: 'ugc-reel-5-u9v0w1' },
  { id: 'ugc-6', caption: 'Gift-worthy', titleId: 'ugc-6-title', imgId: 'ugc-reel-6-x2y3z4' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
            As Seen On You
          </h2>
          <p className="mt-3 text-sm text-muted-fg">Real moments, real sparkle. Tag @velmora to be featured.</p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-48 md:w-56 aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] woman wearing gold jewelry`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src={TRANSPARENT_PX}
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
