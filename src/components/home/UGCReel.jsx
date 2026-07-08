import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ugcItems } from '@/data/products';

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal text-center">
          Worn by You
        </h2>
        <p className="text-stone text-sm mt-3 text-center">Real moments, real style</p>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        {ugcItems.map(item => (
          <div key={item.id} className="relative flex-shrink-0 w-48 md:w-56 aspect-[9/16] rounded-lg overflow-hidden group">
            <img
              alt={item.caption}
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.captionId}] gold jewelry woman wearing`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="300"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
            <p
              id={item.captionId}
              className="absolute bottom-4 left-4 right-4 font-serif text-white text-sm italic"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
