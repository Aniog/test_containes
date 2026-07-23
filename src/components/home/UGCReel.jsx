import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday gold', imgId: 'ugc-reel-1-a1b2c3', captionId: 'ugc-caption-1' },
  { id: 'ugc-2', caption: 'Layered & loved', imgId: 'ugc-reel-2-d4e5f6', captionId: 'ugc-caption-2' },
  { id: 'ugc-3', caption: 'Gift-worthy', imgId: 'ugc-reel-3-g7h8i9', captionId: 'ugc-caption-3' },
  { id: 'ugc-4', caption: 'Stacked huggies', imgId: 'ugc-reel-4-j0k1l2', captionId: 'ugc-caption-4' },
  { id: 'ugc-5', caption: 'Date night ready', imgId: 'ugc-reel-5-m3n4o5', captionId: 'ugc-caption-5' },
  { id: 'ugc-6', caption: 'Minimal luxe', imgId: 'ugc-reel-6-p6q7r8', captionId: 'ugc-caption-6' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 border-t border-warm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal">
            As Worn by You
          </h2>
          <p className="mt-3 text-sm text-warm-gray">
            @velmora on Instagram
          </p>
        </div>
      </div>

      <div ref={containerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 md:gap-4 px-4 md:px-8 min-w-max">
          {ugcItems.map((item) => (
            <div key={item.id} className="relative w-44 md:w-52 flex-shrink-0">
              <div className="aspect-[9/16] bg-muted overflow-hidden relative">
                <img
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.captionId}] woman wearing gold jewelry`}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-charcoal/60 to-transparent">
                  <span id={item.captionId} className="font-serif text-sm text-cream italic">
                    {item.caption}
                  </span>
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
