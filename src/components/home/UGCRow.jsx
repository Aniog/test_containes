import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-title-1',
    descId: 'ugc-desc-1',
    caption: 'My everyday stack',
    handle: '@sofia.m',
    desc: 'gold huggie earrings stacked ear jewelry worn woman',
  },
  {
    id: 'ugc-2',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    caption: 'The perfect gift',
    handle: '@claire.w',
    desc: 'gold necklace pendant worn woman neck close up',
  },
  {
    id: 'ugc-3',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    caption: 'Obsessed with these',
    handle: '@maya.r',
    desc: 'gold drop earrings worn woman ear close up jewelry',
  },
  {
    id: 'ugc-4',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    caption: 'Gifted myself ✨',
    handle: '@anna.k',
    desc: 'gold ear cuff crystal jewelry worn woman editorial',
  },
  {
    id: 'ugc-5',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    caption: 'Wearing it daily',
    handle: '@priya.s',
    desc: 'gold jewelry set earrings necklace worn woman portrait',
  },
];

const UGCRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-stone overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
              As Worn By You
            </p>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light text-charcoal tracking-wide">
              #WearVelmora
            </h2>
          </div>
          <a
            href="#"
            className="font-inter text-xs tracking-widest uppercase text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors hidden md:block"
          >
            Follow Us
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 relative overflow-hidden group cursor-pointer"
            style={{ width: '180px', aspectRatio: '9/16', scrollSnapAlign: 'start' }}
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="360"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.caption}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-cormorant text-sm italic text-cream leading-tight">
                "{item.caption}"
              </p>
              <p className="font-inter text-[9px] tracking-wider text-cream/60 mt-1">
                {item.handle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
