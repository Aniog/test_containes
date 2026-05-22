import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-mc001',
    titleId: 'gal-title-1',
    descId: 'gal-desc-1',
    title: 'Neuron Network',
    desc: 'Fluorescent neurons forming synaptic connections in the brain cortex',
    category: 'Neuroscience',
    ratio: '4x3',
    width: 800,
    span: 'md:col-span-2',
  },
  {
    id: 'gal-mc002',
    titleId: 'gal-title-2',
    descId: 'gal-desc-2',
    title: 'Diatom Shell',
    desc: 'Silica shell of a diatom algae under scanning electron microscope',
    category: 'Marine Biology',
    ratio: '1x1',
    width: 500,
    span: '',
  },
  {
    id: 'gal-mc003',
    titleId: 'gal-title-3',
    descId: 'gal-desc-3',
    title: 'Butterfly Wing Scale',
    desc: 'Iridescent nanostructures on a morpho butterfly wing creating structural color',
    category: 'Entomology',
    ratio: '1x1',
    width: 500,
    span: '',
  },
  {
    id: 'gal-mc004',
    titleId: 'gal-title-4',
    descId: 'gal-desc-4',
    title: 'Salt Crystal',
    desc: 'Cubic lattice of sodium chloride crystals under polarized light microscopy',
    category: 'Mineralogy',
    ratio: '1x1',
    width: 500,
    span: '',
  },
  {
    id: 'gal-mc005',
    titleId: 'gal-title-5',
    descId: 'gal-desc-5',
    title: 'Red Blood Cells',
    desc: 'Human erythrocytes flowing through a capillary vessel',
    category: 'Hematology',
    ratio: '4x3',
    width: 800,
    span: 'md:col-span-2',
  },
  {
    id: 'gal-mc006',
    titleId: 'gal-title-6',
    descId: 'gal-desc-6',
    title: 'Tardigrade',
    desc: 'Water bear micro-animal, the most resilient creature on Earth',
    category: 'Zoology',
    ratio: '1x1',
    width: 500,
    span: '',
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-24 px-6 md:px-12 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Visual Collection</span>
          <h2 id="gallery-heading" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gallery of the <span className="text-cyan-400">Invisible</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Each image is a window into a world that exists all around us, captured through the most powerful imaging technologies available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer ${item.span}`}
            >
              <div className="aspect-video md:aspect-auto md:h-72 overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  data-strk-img-id={item.id}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-heading] microscopy`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width={item.width}
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f] via-[#050a0f]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-block bg-cyan-400/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full mb-2 border border-cyan-400/30">
                  {item.category}
                </span>
                <h3 id={item.titleId} className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p id={item.descId} className="text-slate-400 text-sm leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
