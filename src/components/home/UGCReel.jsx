import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', titleId: 'ugc-1-title', title: 'Gold ear cuff styled with evening dress', imgId: 'ugc-img-1-x9y8z7' },
  { id: 'ugc-2', titleId: 'ugc-2-title', title: 'Layered gold necklaces on bare neck', imgId: 'ugc-img-2-w6v5u4' },
  { id: 'ugc-3', titleId: 'ugc-3-title', title: 'Huggie earrings close-up on ear', imgId: 'ugc-img-3-t3s2r1' },
  { id: 'ugc-4', titleId: 'ugc-4-title', title: 'Gold jewelry flat lay on marble', imgId: 'ugc-img-4-q0p9o8' },
  { id: 'ugc-5', titleId: 'ugc-5-title', title: 'Woman touching gold necklace pendant', imgId: 'ugc-img-5-n7m6l5' },
  { id: 'ugc-6', titleId: 'ugc-6-title', title: 'Dainty gold rings and earrings styling', imgId: 'ugc-img-6-k4j3i2' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-6 md:px-12 bg-pearl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">
            Worn by You
          </h2>
          <p className="mt-3 text-sm text-stone">Real moments, real style. Tag @velmora to be featured.</p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6">
          {ugcItems.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-44 md:w-52 relative overflow-hidden group">
              <div className="aspect-[9/16] bg-espresso/10 relative">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.titleId}]`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-charcoal/60 to-transparent">
                  <p id={item.titleId} className="font-serif text-xs text-white/90 italic">
                    {item.title}
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
