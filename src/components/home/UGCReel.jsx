import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Date night ready', imgId: 'ugc-reel-1-a3b4c5', titleId: 'ugc-caption-1' },
  { id: 'ugc-2', caption: 'Everyday elegance', imgId: 'ugc-reel-2-d6e7f8', titleId: 'ugc-caption-2' },
  { id: 'ugc-3', caption: 'Stacking season', imgId: 'ugc-reel-3-g9h0i1', titleId: 'ugc-caption-3' },
  { id: 'ugc-4', caption: 'Gift of gold', imgId: 'ugc-reel-4-j2k3l4', titleId: 'ugc-caption-4' },
  { id: 'ugc-5', caption: 'Brunch vibes', imgId: 'ugc-reel-5-m5n6o7', titleId: 'ugc-caption-5' },
  { id: 'ugc-6', caption: 'Office to evening', imgId: 'ugc-reel-6-p8q9r0', titleId: 'ugc-caption-6' },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-sand/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal">As Seen On</h2>
          <p className="mt-3 text-taupe text-sm">Real women, real moments</p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div ref={containerRef} className="overflow-x-auto scrollbar-hide px-4 md:px-8">
        <div className="flex gap-4 w-max">
          {ugcItems.map((item) => (
            <div key={item.id} className="relative w-44 md:w-52 aspect-[9/16] rounded-lg overflow-hidden flex-shrink-0 group">
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.titleId}] woman wearing gold jewelry`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
              <p
                id={item.titleId}
                className="absolute bottom-4 left-4 right-4 font-serif text-lg text-cream italic"
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
