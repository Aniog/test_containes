import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { placeholderSrc } from '@/lib/images';

const ugcItems = [
  { id: 'ugc-1', caption: 'Layered for brunch' },
  { id: 'ugc-2', caption: 'Everyday gold' },
  { id: 'ugc-3', caption: 'Gift to self' },
  { id: 'ugc-4', caption: 'Date night glow' },
  { id: 'ugc-5', caption: 'Minimal & luxe' },
  { id: 'ugc-6', caption: 'New favorite huggies' },
];

const UgcReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-velmora-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <p className="caption-label mb-3">@velmorafinejewelry</p>
        <h2 className="section-title">Styled by You</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
        {ugcItems.map((item, index) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-[200px] md:w-[240px] aspect-[9/16] group overflow-hidden bg-velmora-sand"
          >
            <img
              data-strk-img-id={item.id}
              data-strk-img={`[ugc-caption-${index}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="500"
              src={placeholderSrc}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/70 via-transparent to-transparent" />
            <p
              id={`ugc-caption-${index}`}
              className="absolute bottom-4 left-4 right-4 font-serif text-lg md:text-xl text-velmora-cream italic leading-snug"
            >
              {item.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UgcReel;
