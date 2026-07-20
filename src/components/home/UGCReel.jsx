import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance', titleId: 'ugc-1-title', imgId: 'ugc-img-1-a2b3c4' },
  { id: 'ugc-2', caption: 'Stacked & styled', titleId: 'ugc-2-title', imgId: 'ugc-img-2-d5e6f7' },
  { id: 'ugc-3', caption: 'Golden hour glow', titleId: 'ugc-3-title', imgId: 'ugc-img-3-g8h9i0' },
  { id: 'ugc-4', caption: 'Date night ready', titleId: 'ugc-4-title', imgId: 'ugc-img-4-j1k2l3' },
  { id: 'ugc-5', caption: 'Minimal luxe', titleId: 'ugc-5-title', imgId: 'ugc-img-5-m4n5o6' },
  { id: 'ugc-6', caption: 'Gift-worthy', titleId: 'ugc-6-title', imgId: 'ugc-img-6-p7q8r9' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 sm:py-24 border-t border-border" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal text-center">As Worn By You</h2>
        <p id="ugc-section-title" className="mt-3 font-sans text-sm text-muted-fg text-center">Real moments, real style</p>
      </div>

      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 min-w-max">
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-44 sm:w-52 aspect-[9/16] flex-shrink-0 overflow-hidden group">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] [ugc-section-title] gold jewelry worn on woman`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent">
                <p id={item.titleId} className="font-serif text-sm text-cream italic">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGCReel;
