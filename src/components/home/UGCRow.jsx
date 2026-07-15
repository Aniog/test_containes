import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: '"My go-to everyday earrings"',
    handle: '@sofiamartin',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-title-1',
    descId: 'ugc-desc-1',
    desc: 'gold huggie earrings worn on ear close up lifestyle',
  },
  {
    id: 'ugc-2',
    caption: '"The most beautiful necklace"',
    handle: '@emilywren',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    desc: 'gold floral necklace worn on neck lifestyle portrait',
  },
  {
    id: 'ugc-3',
    caption: '"Perfect gift for my sister"',
    handle: '@claireduval',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    desc: 'gold jewelry gift box elegant lifestyle',
  },
  {
    id: 'ugc-4',
    caption: '"Obsessed with these huggies"',
    handle: '@nataliebrown',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    desc: 'gold dome huggie earrings close up ear portrait',
  },
  {
    id: 'ugc-5',
    caption: '"Stacking these every day"',
    handle: '@isabellachen',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    desc: 'gold ear cuff crystal earring stacked editorial',
  },
  {
    id: 'ugc-6',
    caption: '"Arrived so beautifully packaged"',
    handle: '@lauramoss',
    imgId: 'ugc-img-6-p7q8r9',
    titleId: 'ugc-title-6',
    descId: 'ugc-desc-6',
    desc: 'fine jewelry unboxing luxury packaging gold',
  },
];

const UGCRow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest font-sans text-gold mb-2">As Worn</p>
            <h2 className="font-serif text-2xl md:text-3xl text-velvet font-light">
              The Velmora Community
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-xs uppercase tracking-widest font-sans text-mink hover:text-gold transition-colors border-b border-parchment pb-0.5"
          >
            @velmora
          </a>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar px-4 md:px-8 pb-2">
        {ugcItems.map(item => (
          <article
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-52 overflow-hidden group cursor-pointer"
            style={{ aspectRatio: '9/16' }}
          >
            {/* Image */}
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 16'/%3E"
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              alt={item.caption}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.handle}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velvet/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-serif text-ivory text-sm italic leading-snug mb-1">
                {item.caption}
              </p>
              <p className="text-ivory/60 text-[10px] font-sans uppercase tracking-widest">
                {item.handle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default UGCRow;
