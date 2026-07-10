import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  {
    id: 'ugc-1',
    caption: '"My everyday gold"',
    handle: '@sofia.m',
    imgId: 'ugc-img-1-a1b2c3',
    titleId: 'ugc-title-1',
    descId: 'ugc-desc-1',
    title: 'Gold ear cuff on model',
    desc: 'Woman wearing gold ear cuff jewelry close up portrait',
  },
  {
    id: 'ugc-2',
    caption: '"Gifted myself this"',
    handle: '@priya.k',
    imgId: 'ugc-img-2-d4e5f6',
    titleId: 'ugc-title-2',
    descId: 'ugc-desc-2',
    title: 'Floral necklace worn',
    desc: 'Woman wearing delicate gold floral necklace collarbone',
  },
  {
    id: 'ugc-3',
    caption: '"Obsessed with these huggies"',
    handle: '@claire.b',
    imgId: 'ugc-img-3-g7h8i9',
    titleId: 'ugc-title-3',
    descId: 'ugc-desc-3',
    title: 'Gold huggie earrings',
    desc: 'Close up of gold huggie earrings on ear lobe',
  },
  {
    id: 'ugc-4',
    caption: '"Perfect for layering"',
    handle: '@maya.r',
    imgId: 'ugc-img-4-j1k2l3',
    titleId: 'ugc-title-4',
    descId: 'ugc-desc-4',
    title: 'Layered gold jewelry',
    desc: 'Woman layering gold necklaces and earrings editorial',
  },
  {
    id: 'ugc-5',
    caption: '"The best gift I gave myself"',
    handle: '@anna.w',
    imgId: 'ugc-img-5-m4n5o6',
    titleId: 'ugc-title-5',
    descId: 'ugc-desc-5',
    title: 'Gold jewelry set',
    desc: 'Woman wearing matching gold earring and necklace set',
  },
  {
    id: 'ugc-6',
    caption: '"Wear it every day"',
    handle: '@jade.l',
    imgId: 'ugc-img-6-p7q8r9',
    titleId: 'ugc-title-6',
    descId: 'ugc-desc-6',
    title: 'Everyday gold jewelry',
    desc: 'Minimalist gold jewelry worn casually lifestyle portrait',
  },
];

const UGCReel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-ivory-200">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 mb-8 md:mb-10">
        <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-2">As Worn By You</p>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet-900">The Velmora Edit</h2>
      </div>

      {/* Horizontal scroll reel */}
      <div
        ref={containerRef}
        className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-16 pb-2"
      >
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="relative flex-shrink-0 w-44 md:w-56 aspect-[9/16] overflow-hidden rounded-sm group cursor-pointer"
          >
            {/* Image */}
            <img
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.descId}] [${item.titleId}]`}
              data-strk-img-ratio="9x16"
              data-strk-img-width="400"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />

            {/* Hidden text for image query */}
            <span id={item.titleId} className="sr-only">{item.title}</span>
            <span id={item.descId} className="sr-only">{item.desc}</span>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-velvet-900/70 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="font-serif text-sm italic font-light text-ivory-100 leading-tight mb-0.5">
                {item.caption}
              </p>
              <p className="font-sans text-[10px] tracking-wide text-ivory-200/80">{item.handle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UGCReel;
