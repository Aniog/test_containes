import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday gold', imgId: 'ugc-reel-1-a2b3c4', captionId: 'ugc-caption-1' },
  { id: 'ugc-2', caption: 'Stacked & styled', imgId: 'ugc-reel-2-d5e6f7', captionId: 'ugc-caption-2' },
  { id: 'ugc-3', caption: 'Gift-worthy', imgId: 'ugc-reel-3-g8h9i0', captionId: 'ugc-caption-3' },
  { id: 'ugc-4', caption: 'Date night ready', imgId: 'ugc-reel-4-j1k2l3', captionId: 'ugc-caption-4' },
  { id: 'ugc-5', caption: 'Minimal luxe', imgId: 'ugc-reel-5-m4n5o6', captionId: 'ugc-caption-5' },
  { id: 'ugc-6', caption: 'Golden hour', imgId: 'ugc-reel-6-p7q8r9', captionId: 'ugc-caption-6' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light">As Worn By You</h2>
          <p className="mt-3 text-sm text-stone font-sans">Real moments, real gold</p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-44 md:w-52 aspect-[9/16] rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.captionId}] gold jewelry on woman close up`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
              <span id={item.captionId} className="absolute bottom-4 left-4 right-4 font-serif text-sm text-white italic">
                {item.caption}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
