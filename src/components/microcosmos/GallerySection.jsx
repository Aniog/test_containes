import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-diatom',
    titleId: 'gal-diatom-title',
    descId: 'gal-diatom-desc',
    imgId: 'gal-img-diatom-a1b2c3',
    title: 'Diatom',
    desc: 'Microscopic algae with intricate silica shells',
    span: 'md:col-span-2 md:row-span-2',
    ratio: '1x1',
    width: '800',
  },
  {
    id: 'gal-pollen',
    titleId: 'gal-pollen-title',
    descId: 'gal-pollen-desc',
    imgId: 'gal-img-pollen-d4e5f6',
    title: 'Pollen Grain',
    desc: 'Colorized scanning electron microscope image of pollen',
    span: '',
    ratio: '4x3',
    width: '500',
  },
  {
    id: 'gal-tardigrade',
    titleId: 'gal-tardigrade-title',
    descId: 'gal-tardigrade-desc',
    imgId: 'gal-img-tardigrade-g7h8i9',
    title: 'Tardigrade',
    desc: 'Water bear, the most resilient animal on Earth',
    span: '',
    ratio: '4x3',
    width: '500',
  },
  {
    id: 'gal-neuron',
    titleId: 'gal-neuron-title',
    descId: 'gal-neuron-desc',
    imgId: 'gal-img-neuron-j1k2l3',
    title: 'Neuron Network',
    desc: 'Fluorescent microscopy of brain neurons',
    span: '',
    ratio: '4x3',
    width: '500',
  },
  {
    id: 'gal-crystal',
    titleId: 'gal-crystal-title',
    descId: 'gal-crystal-desc',
    imgId: 'gal-img-crystal-m4n5o6',
    title: 'Salt Crystal',
    desc: 'Macro photography of salt crystal formation',
    span: '',
    ratio: '4x3',
    width: '500',
  },
  {
    id: 'gal-virus',
    titleId: 'gal-virus-title',
    descId: 'gal-virus-desc',
    imgId: 'gal-img-virus-p7q8r9',
    title: 'Bacteriophage',
    desc: 'Virus that infects and replicates within bacteria',
    span: 'md:col-span-2',
    ratio: '16x9',
    width: '800',
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="bg-gray-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Visual Gallery</span>
          <h2 id="gallery-title" className="font-space text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Seen Through the Lens
          </h2>
          <p id="gallery-subtitle" className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stunning microscopy images reveal the extraordinary beauty hidden in the microscopic world.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px]">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl border border-gray-700/50 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] ${item.span}`}
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-subtitle] [gallery-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 id={item.titleId} className="font-space text-lg font-semibold text-white mb-1">{item.title}</h3>
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
