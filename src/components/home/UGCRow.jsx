import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc1', caption: 'Golden hour with my Vivid Aura stack', imgQuery: 'gold ear cuff model ear closeup' },
  { id: 'ugc2', caption: 'Everyday sparkle. Flora Nectar forever.', imgQuery: 'gold crystal necklace on woman neck' },
  { id: 'ugc3', caption: 'Can\'t stop wearing these huggies', imgQuery: 'gold huggie earrings on model ear' },
  { id: 'ugc4', caption: 'Amber Lace for date night perfection', imgQuery: 'gold filigree earrings on woman' },
  { id: 'ugc5', caption: 'Gifted the Royal Heirloom to my sister', imgQuery: 'gold jewelry gift set unboxing' },
  { id: 'ugc6', caption: 'The perfect gold stack', imgQuery: 'gold jewelry stack earrings neck' },
];

const UGCRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-warm-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">Styled by You</h2>
          <p className="section-subtitle">Tag @velmora to be featured</p>
        </div>
      </div>

      <div className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-10 lg:px-16 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-[180px] md:w-[220px] snap-start">
            <div className="relative aspect-[9/16] bg-charcoal-100 overflow-hidden rounded-sm">
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-caption-${item.id}]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="440"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p
                className="absolute bottom-3 left-3 right-3 font-serif text-cream text-xs italic leading-snug"
                id={`ugc-caption-${item.id}`}
              >
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;