import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-1',
    imgId: 'gallery-img-mc010',
    titleId: 'gal-title-1',
    descId: 'gal-desc-1',
    title: 'Tardigrade',
    desc: 'Water bear under electron microscope',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-2',
    imgId: 'gallery-img-mc011',
    titleId: 'gal-title-2',
    descId: 'gal-desc-2',
    title: 'Diatom Crystal',
    desc: 'Silica shell of a diatom algae',
    ratio: '4x3',
    width: 800,
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'gal-3',
    imgId: 'gallery-img-mc012',
    titleId: 'gal-title-3',
    descId: 'gal-desc-3',
    title: 'Neuron Network',
    desc: 'Fluorescent neurons forming synaptic connections',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-4',
    imgId: 'gallery-img-mc013',
    titleId: 'gal-title-4',
    descId: 'gal-desc-4',
    title: 'Pollen Grain',
    desc: 'Colorized scanning electron microscope image of pollen',
    ratio: '4x3',
    width: 800,
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    id: 'gal-5',
    imgId: 'gallery-img-mc014',
    titleId: 'gal-title-5',
    descId: 'gal-desc-5',
    title: 'Red Blood Cells',
    desc: 'Human erythrocytes flowing through a capillary',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1 row-span-1',
  },
  {
    id: 'gal-6',
    imgId: 'gallery-img-mc015',
    titleId: 'gal-title-6',
    descId: 'gal-desc-6',
    title: 'Snowflake Crystal',
    desc: 'Ice crystal formation under polarized light microscopy',
    ratio: '1x1',
    width: 600,
    span: 'col-span-1 row-span-1',
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-24 px-4 md:px-8 bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm text-emerald-400 uppercase tracking-widest font-medium mb-3">Visual Archive</p>
          <h2 id="gallery-section-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
            Microscopy Gallery
          </h2>
          <p id="gallery-section-desc" className="text-gray-400 text-lg max-w-xl mx-auto">
            Stunning imagery captured through electron microscopes, fluorescence imaging, and polarized light — revealing the hidden architecture of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.span} group relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300`}
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-desc] [gallery-section-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h4 id={item.titleId} className="text-white font-semibold text-lg">{item.title}</h4>
                <p id={item.descId} className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
