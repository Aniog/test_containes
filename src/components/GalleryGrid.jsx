import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gallery-diatom',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    imgId: 'gallery-img-mc003',
    title: 'Diatom Shells',
    desc: 'Intricate silica shells of microscopic algae under electron microscope',
    ratio: '1x1',
    width: '600',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 'gallery-pollen',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
    imgId: 'gallery-img-mc004',
    title: 'Pollen Grains',
    desc: 'Colorized scanning electron microscope image of pollen grains',
    ratio: '16x9',
    width: '900',
    span: 'md:col-span-2',
  },
  {
    id: 'gallery-neuron',
    titleId: 'gallery-neuron-title',
    descId: 'gallery-neuron-desc',
    imgId: 'gallery-img-mc005',
    title: 'Neuron Network',
    desc: 'Fluorescence microscopy of neural connections in the brain',
    ratio: '4x3',
    width: '700',
    span: 'md:col-span-1',
  },
  {
    id: 'gallery-crystal',
    titleId: 'gallery-crystal-title',
    descId: 'gallery-crystal-desc',
    imgId: 'gallery-img-mc006',
    title: 'Salt Crystals',
    desc: 'Macro photography of salt crystals forming geometric patterns',
    ratio: '4x3',
    width: '700',
    span: 'md:col-span-1',
  },
  {
    id: 'gallery-bacteria',
    titleId: 'gallery-bacteria-title',
    descId: 'gallery-bacteria-desc',
    imgId: 'gallery-img-mc007',
    title: 'Bacteria Colony',
    desc: 'Colorized electron microscope image of bacteria forming a colony',
    ratio: '16x9',
    width: '1000',
    span: 'md:col-span-2',
  },
];

const GalleryGrid = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-cosmos-dark py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-cosmos-teal text-xs uppercase tracking-widest font-sans font-semibold mb-4">
            Visual Collection
          </p>
          <h2
            id="gallery-section-title"
            className="font-display text-4xl md:text-5xl font-bold text-cosmos-text"
          >
            The Microscopic Gallery
          </h2>
          <p className="text-cosmos-muted mt-4 max-w-xl mx-auto font-sans text-base leading-relaxed">
            A curated collection of the most stunning imagery from the microscopic world, captured through cutting-edge imaging technology.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-2xl overflow-hidden border border-cosmos-border group cursor-pointer ${item.span}`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/80 via-cosmos-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 id={item.titleId} className="font-display text-cosmos-text text-lg font-semibold mb-1">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-cosmos-muted text-xs font-sans leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
