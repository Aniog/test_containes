import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Date night ready', titleId: 'ugc-1-title', imgId: 'ugc-img-1-a3b4c5' },
  { id: 'ugc-2', caption: 'Everyday gold', titleId: 'ugc-2-title', imgId: 'ugc-img-2-d6e7f8' },
  { id: 'ugc-3', caption: 'Stacking moment', titleId: 'ugc-3-title', imgId: 'ugc-img-3-g9h0i1' },
  { id: 'ugc-4', caption: 'Gift for her', titleId: 'ugc-4-title', imgId: 'ugc-img-4-j2k3l4' },
  { id: 'ugc-5', caption: 'Morning glow', titleId: 'ugc-5-title', imgId: 'ugc-img-5-m5n6o7' },
  { id: 'ugc-6', caption: 'Brunch vibes', titleId: 'ugc-6-title', imgId: 'ugc-img-6-p8q9r0' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light text-center">
          Worn by You
        </h2>
        <p className="text-stone text-sm mt-3 text-center">Real moments, real jewelry</p>
      </div>

      {/* Horizontal scroll */}
      <div className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] rounded-lg overflow-hidden group"
          >
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.titleId}] gold jewelry worn on model`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent">
              <p id={item.titleId} className="font-serif text-white text-sm italic">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
