import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', imgId: 'ugc-reel-1-a2b3c4', titleId: 'ugc-1-caption', caption: 'Everyday gold' },
  { id: 'ugc-2', imgId: 'ugc-reel-2-d5e6f7', titleId: 'ugc-2-caption', caption: 'Stacked & styled' },
  { id: 'ugc-3', imgId: 'ugc-reel-3-g8h9i0', titleId: 'ugc-3-caption', caption: 'Date night ready' },
  { id: 'ugc-4', imgId: 'ugc-reel-4-j1k2l3', titleId: 'ugc-4-caption', caption: 'Gifted with love' },
  { id: 'ugc-5', imgId: 'ugc-reel-5-m4n5o6', titleId: 'ugc-5-caption', caption: 'Minimal luxe' },
  { id: 'ugc-6', imgId: 'ugc-reel-6-p7q8r9', titleId: 'ugc-6-caption', caption: 'Golden hour' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-2">As Worn By You</h2>
        <p className="text-taupe text-sm text-center">Tag @velmora to be featured</p>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-44 md:w-52 flex-shrink-0 group cursor-pointer">
              <div className="aspect-[9/16] bg-linen overflow-hidden">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}] woman wearing gold jewelry close up portrait`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent p-4">
                <p id={item.titleId} className="font-serif text-sm text-cream italic">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
