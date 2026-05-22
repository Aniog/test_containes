import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    imgId: 'gallery-img-1-b1c2d3',
    titleId: 'gal-title-1',
    descId: 'gal-desc-1',
    title: 'Summit Ridge',
    desc: 'Himalayan summit ridge at dawn',
    span: 'md:col-span-2 md:row-span-2',
    ratio: '1x1',
    width: 800,
  },
  {
    id: 'gal-2',
    imgId: 'gallery-img-2-e4f5g6',
    titleId: 'gal-title-2',
    descId: 'gal-desc-2',
    title: 'Ice Climbing',
    desc: 'Climber ascending vertical ice wall',
    span: '',
    ratio: '4x3',
    width: 400,
  },
  {
    id: 'gal-3',
    imgId: 'gallery-img-3-h7i8j9',
    titleId: 'gal-title-3',
    descId: 'gal-desc-3',
    title: 'Base Camp',
    desc: 'Expedition base camp tents in snow',
    span: '',
    ratio: '4x3',
    width: 400,
  },
  {
    id: 'gal-4',
    imgId: 'gallery-img-4-k1l2m3',
    titleId: 'gal-title-4',
    descId: 'gal-desc-4',
    title: 'Crevasse Crossing',
    desc: 'Mountaineer crossing glacier crevasse on ladder',
    span: '',
    ratio: '4x3',
    width: 400,
  },
  {
    id: 'gal-5',
    imgId: 'gallery-img-5-n4o5p6',
    titleId: 'gal-title-5',
    descId: 'gal-desc-5',
    title: 'Alpine Sunrise',
    desc: 'Golden sunrise over mountain peaks',
    span: '',
    ratio: '4x3',
    width: 400,
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-slate-950 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Life on the Mountain
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            A glimpse into the breathtaking beauty and raw challenge of high-altitude climbing.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px]">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.span}`}
            >
              {/* Hidden text for image query */}
              <span id={item.titleId} className="sr-only">{item.title}</span>
              <span id={item.descId} className="sr-only">{item.desc}</span>

              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
