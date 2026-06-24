import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gallery-pond',
    title: 'Pond Water Life',
    caption: 'A single drop reveals an entire ecosystem',
    span: 'md:col-span-2 md:row-span-2',
    ratio: '1x1',
    width: '900',
    titleId: 'gallery-pond-title',
    descId: 'gallery-pond-desc',
    imgId: 'gallery-img-pond-8b3e7a',
  },
  {
    id: 'gallery-diatom',
    title: 'Diatom Frustule',
    caption: 'Nature\'s glass architecture',
    span: '',
    ratio: '4x3',
    width: '500',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    imgId: 'gallery-img-diatom-2c9f4d',
  },
  {
    id: 'gallery-bacteria',
    title: 'Bacterial Colony',
    caption: 'Billions of lives in a petri dish',
    span: '',
    ratio: '4x3',
    width: '500',
    titleId: 'gallery-bacteria-title',
    descId: 'gallery-bacteria-desc',
    imgId: 'gallery-img-bacteria-6a1e5c',
  },
  {
    id: 'gallery-spore',
    title: 'Fungal Spores',
    caption: 'Microscopic seeds of the fungal kingdom',
    span: '',
    ratio: '4x3',
    width: '500',
    titleId: 'gallery-spore-title',
    descId: 'gallery-spore-desc',
    imgId: 'gallery-img-spore-3d7b2f',
  },
  {
    id: 'gallery-pollen',
    title: 'Pollen Grains',
    caption: 'Intricate sculptures of plant reproduction',
    span: '',
    ratio: '4x3',
    width: '500',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
    imgId: 'gallery-img-pollen-9e4c1a',
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="py-28 px-6"
      style={{ background: '#030b18' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-cyan-500/40" />
            <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Visual Journey</span>
            <div className="h-px w-12 bg-cyan-500/40" />
          </div>
          <h2
            className="font-space text-4xl md:text-5xl font-bold text-sky-50 mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Through the <span className="gradient-text">Lens</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Microscopy reveals a world of breathtaking beauty — structures and forms
            that rival the grandest landscapes on Earth.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-2xl overflow-hidden border border-cyan-500/15 group cursor-pointer ${item.span}`}
              style={{ minHeight: '220px' }}
            >
              {/* Hidden text for image query */}
              <span id={item.titleId} className="sr-only">{item.title}</span>
              <span id={item.descId} className="sr-only">{item.caption}</span>

              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ minHeight: '220px' }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030b18]/90 via-[#030b18]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-sky-50 font-semibold text-base mb-1">{item.title}</div>
                <div className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.caption}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
