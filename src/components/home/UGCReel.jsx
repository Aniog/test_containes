import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: 'Golden hour with my new huggies',
    image: 'gold huggie earrings on ear closeup warm lighting',
  },
  {
    id: 'ugc-2',
    caption: 'Layered necklace perfection',
    image: 'layered gold necklaces on neck editorial style',
  },
  {
    id: 'ugc-3',
    caption: 'Crystal earring details',
    image: 'crystal drop earring on ear macro jewelry photography',
  },
  {
    id: 'ugc-4',
    caption: 'Everyday gold essentials',
    image: 'gold jewelry collection on vanity flat lay warm tones',
  },
  {
    id: 'ugc-5',
    caption: 'Gift set unboxing',
    image: 'jewelry gift box opening luxury packaging gold ribbon',
  },
  {
    id: 'ugc-6',
    caption: 'Necklace stacking goals',
    image: 'stacked gold chains on neck minimalist style',
  },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-ivory-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest-2xl uppercase text-gold-500 mb-3">
            @VelmoraJewelry
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal-800">
            Styled by You
          </h2>
        </div>

        {/* Reels Strip */}
        <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-4 md:gap-6" style={{ width: 'max-content' }}>
            {ugcItems.map((item) => (
              <div
                key={item.id}
                className="relative w-[180px] md:w-[220px] aspect-[9/16] flex-shrink-0 overflow-hidden group cursor-pointer"
              >
                <img
                  data-strk-img-id={item.id}
                  data-strk-img={item.image}
                  data-strk-img-ratio="9x16"
                  data-strk-img-width="400"
                  src=""
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/80 via-transparent to-transparent" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-serif text-sm md:text-base text-white leading-snug">
                    {item.caption}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint for mobile */}
        <p className="text-center text-xs text-charcoal-400 mt-4 md:hidden">
          Swipe to explore
        </p>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default UGCReel;
