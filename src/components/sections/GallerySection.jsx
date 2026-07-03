import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'diatom',
    title: 'Diatom Algae',
    desc: 'Intricate silica shells of microscopic diatom algae under electron microscope',
    imgId: 'gallery-diatom-mc010',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'bacteria-colony',
    title: 'Bacteria Colony',
    desc: 'Colorful fluorescent bacteria colony biofilm growing on a surface',
    imgId: 'gallery-bacteria-mc011',
    titleId: 'gallery-bacteria-title',
    descId: 'gallery-bacteria-desc',
    ratio: '3x2',
    width: '900',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 'tardigrade',
    title: 'Tardigrade',
    desc: 'Water bear tardigrade microscopic animal extremophile',
    imgId: 'gallery-tardigrade-mc012',
    titleId: 'gallery-tardigrade-title',
    descId: 'gallery-tardigrade-desc',
    ratio: '3x2',
    width: '900',
    span: 'col-span-2 row-span-1',
  },
  {
    id: 'pollen',
    title: 'Pollen Grains',
    desc: 'Colorful pollen grains from flowers under scanning electron microscope',
    imgId: 'gallery-pollen-mc013',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
    ratio: '1x1',
    width: '600',
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'neuron',
    title: 'Neuron Network',
    desc: 'Human brain neuron cells network fluorescent microscopy',
    imgId: 'gallery-neuron-mc014',
    titleId: 'gallery-neuron-title',
    descId: 'gallery-neuron-desc',
    ratio: '3x2',
    width: '1200',
    span: 'col-span-3 row-span-1',
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="gallery" className="bg-cosmos-surface py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-cosmos-teal text-xs font-semibold uppercase tracking-widest">
            Visual Gallery
          </span>
          <h2
            id="gallery-section-title"
            className="text-3xl md:text-5xl font-bold text-cosmos-text mt-3 mb-4"
          >
            The Beauty of the Invisible
          </h2>
          <p
            id="gallery-section-desc"
            className="text-cosmos-muted text-lg max-w-2xl mx-auto"
          >
            Stunning imagery captured through electron microscopes, fluorescence microscopy, and advanced imaging techniques.
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} relative rounded-2xl overflow-hidden group cursor-pointer border border-cosmos-teal/10 hover:border-cosmos-teal/40 transition-all duration-500`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-desc] [gallery-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ minHeight: '200px' }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/90 via-cosmos-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <h3 id={item.titleId} className="text-cosmos-text font-bold text-lg">{item.title}</h3>
                  <p id={item.descId} className="text-cosmos-muted text-sm mt-1">{item.desc}</p>
                </div>
              </div>
              {/* Always-visible title for small items */}
              <div className="absolute top-3 left-3">
                <span className="bg-cosmos-bg/70 backdrop-blur-sm text-cosmos-teal text-xs font-semibold px-3 py-1 rounded-full border border-cosmos-teal/30">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
