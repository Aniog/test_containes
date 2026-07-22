import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'My everyday stack ✨', sub: 'Golden Sphere Huggies', imgId: 'ugc-reel-1-a1b2c3', titleId: 'ugc-1-title', descId: 'ugc-1-desc' },
  { id: 'ugc-2', caption: 'Date night ready 🌙', sub: 'Vivid Aura Jewels', imgId: 'ugc-reel-2-d4e5f6', titleId: 'ugc-2-title', descId: 'ugc-2-desc' },
  { id: 'ugc-3', caption: 'The perfect gift 🎁', sub: 'Royal Heirloom Set', imgId: 'ugc-reel-3-g7h8i9', titleId: 'ugc-3-title', descId: 'ugc-3-desc' },
  { id: 'ugc-4', caption: 'Obsessed with this necklace', sub: 'Majestic Flora Nectar', imgId: 'ugc-reel-4-j1k2l3', titleId: 'ugc-4-title', descId: 'ugc-4-desc' },
  { id: 'ugc-5', caption: 'Wearing it every day 💛', sub: 'Amber Lace Earrings', imgId: 'ugc-reel-5-m4n5o6', titleId: 'ugc-5-title', descId: 'ugc-5-desc' },
  { id: 'ugc-6', caption: 'Gifted myself this season', sub: 'Golden Sphere Huggies', imgId: 'ugc-reel-6-p7q8r9', titleId: 'ugc-6-title', descId: 'ugc-6-desc' },
];

const UGCRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-blush py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-xs uppercase tracking-widest2 text-gold mb-2">
              As Seen On
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-charcoal">
              The Velmora Community
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:block font-inter text-xs uppercase tracking-widest2 text-warm-gray hover:text-gold transition-colors border-b border-warm-gray/30 pb-0.5"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 aspect-[9/16] overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}] woman wearing gold jewelry`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p
                id={item.titleId}
                className="font-cormorant text-sm italic text-ivory leading-tight"
              >
                {item.caption}
              </p>
              <p
                id={item.descId}
                className="font-inter text-[9px] uppercase tracking-widest2 text-gold-light mt-1"
              >
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
