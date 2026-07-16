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
    <section ref={containerRef} className="py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h2 id="ugc-section-title" className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-2">
          Worn by You
        </h2>
        <p className="text-sm text-stone text-center">Real moments, real style</p>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-4 md:px-8 pb-4" style={{ minWidth: 'max-content' }}>
          {ugcItems.map(item => (
            <div key={item.id} className="relative w-48 md:w-56 flex-shrink-0">
              <div className="aspect-[9/16] bg-ivory overflow-hidden relative">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}-caption] [ugc-section-title]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent">
                  <p id={`${item.id}-caption`} className="font-serif text-sm text-cream italic">
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
