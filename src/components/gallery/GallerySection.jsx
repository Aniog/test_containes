import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'diatom',
    title: 'Diatoms',
    desc: 'Microscopic algae with intricate silica shells forming geometric patterns',
    imgId: 'gallery-diatom-4f8b2c',
    titleId: 'gallery-diatom-title',
    descId: 'gallery-diatom-desc',
    ratio: '3x4',
    span: 'md:row-span-2',
  },
  {
    id: 'neuron',
    title: 'Neural Networks',
    desc: 'Fluorescent neurons branching and connecting in brain tissue',
    imgId: 'gallery-neuron-7a3e1d',
    titleId: 'gallery-neuron-title',
    descId: 'gallery-neuron-desc',
    ratio: '4x3',
    span: '',
  },
  {
    id: 'pollen',
    title: 'Pollen Grains',
    desc: 'Colorful scanning electron microscope image of flower pollen',
    imgId: 'gallery-pollen-2c9f4a',
    titleId: 'gallery-pollen-title',
    descId: 'gallery-pollen-desc',
    ratio: '4x3',
    span: '',
  },
  {
    id: 'crystal',
    title: 'Crystal Formations',
    desc: 'Polarized light microscopy revealing vibrant crystal structures',
    imgId: 'gallery-crystal-8d1e5b',
    titleId: 'gallery-crystal-title',
    descId: 'gallery-crystal-desc',
    ratio: '4x3',
    span: '',
  },
  {
    id: 'cell-division',
    title: 'Cell Division',
    desc: 'Mitosis captured in fluorescence showing chromosomes separating',
    imgId: 'gallery-celldiv-3b7a9c',
    titleId: 'gallery-cell-division-title',
    descId: 'gallery-cell-division-desc',
    ratio: '3x4',
    span: 'md:row-span-2',
  },
  {
    id: 'bacteria',
    title: 'Bacterial Colonies',
    desc: 'Colorful bacterial cultures growing in petri dish patterns',
    imgId: 'gallery-bacteria-6e2d8f',
    titleId: 'gallery-bacteria-title',
    descId: 'gallery-bacteria-desc',
    ratio: '4x3',
    span: '',
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-cosmos-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-cosmos-cyan font-medium text-sm tracking-widest uppercase mb-3">Visual Journey</p>
          <h2 id="gallery-section-title" className="text-3xl md:text-4xl font-bold text-cosmos-text mb-4">
            Microscopic Gallery
          </h2>
          <p id="gallery-section-subtitle" className="text-cosmos-muted text-lg max-w-2xl mx-auto">
            A curated collection of stunning imagery captured through advanced microscopy techniques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden border border-cosmos-border hover:border-cosmos-cyan/30 transition-all duration-300 hover:scale-[1.02] ${item.span}`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 id={item.titleId} className="text-lg font-semibold text-cosmos-text mb-1">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-sm text-cosmos-muted">
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

export default GallerySection;
