import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-01', imgId: 'gallery-img-01-aa11', titleId: 'gal-01-title', descId: 'gal-01-desc',
    title: 'E. coli Colony', desc: 'Escherichia coli bacteria forming a dense colony under fluorescence microscopy',
    category: 'Bacteria', ratio: '3x2', width: '800', span: 'col-span-2 row-span-2',
  },
  {
    id: 'gal-02', imgId: 'gallery-img-02-bb22', titleId: 'gal-02-title', descId: 'gal-02-desc',
    title: 'Diatom Shell', desc: 'Intricate silica shell of a marine diatom microorganism',
    category: 'Algae', ratio: '1x1', width: '600', span: '',
  },
  {
    id: 'gal-03', imgId: 'gallery-img-03-cc33', titleId: 'gal-03-title', descId: 'gal-03-desc',
    title: 'Tardigrade', desc: 'Water bear tardigrade, the most resilient animal on Earth',
    category: 'Micro-animals', ratio: '1x1', width: '600', span: '',
  },
  {
    id: 'gal-04', imgId: 'gallery-img-04-dd44', titleId: 'gal-04-title', descId: 'gal-04-desc',
    title: 'Pollen Grain', desc: 'Scanning electron microscope image of a flower pollen grain surface',
    category: 'Plant', ratio: '3x2', width: '800', span: 'col-span-2',
  },
  {
    id: 'gal-05', imgId: 'gallery-img-05-ee55', titleId: 'gal-05-title', descId: 'gal-05-desc',
    title: 'Neuron Network', desc: 'Fluorescent staining reveals the branching network of neurons in brain tissue',
    category: 'Cells', ratio: '1x1', width: '600', span: '',
  },
  {
    id: 'gal-06', imgId: 'gallery-img-06-ff66', titleId: 'gal-06-title', descId: 'gal-06-desc',
    title: 'Mold Spores', desc: 'Aspergillus mold releasing thousands of microscopic spores into the air',
    category: 'Fungi', ratio: '1x1', width: '600', span: '',
  },
  {
    id: 'gal-07', imgId: 'gallery-img-07-gg77', titleId: 'gal-07-title', descId: 'gal-07-desc',
    title: 'Red Blood Cells', desc: 'Human erythrocytes flowing through a capillary vessel',
    category: 'Cells', ratio: '3x2', width: '800', span: 'col-span-2',
  },
  {
    id: 'gal-08', imgId: 'gallery-img-08-hh88', titleId: 'gal-08-title', descId: 'gal-08-desc',
    title: 'Paramecium', desc: 'Single-celled paramecium protozoan with visible cilia',
    category: 'Protozoa', ratio: '1x1', width: '600', span: '',
  },
  {
    id: 'gal-09', imgId: 'gallery-img-09-ii99', titleId: 'gal-09-title', descId: 'gal-09-desc',
    title: 'Snowflake Crystal', desc: 'Microscopic ice crystal forming a perfect hexagonal snowflake',
    category: 'Crystals', ratio: '1x1', width: '600', span: '',
  },
  {
    id: 'gal-10', imgId: 'gallery-img-10-jj00', titleId: 'gal-10-title', descId: 'gal-10-desc',
    title: 'Virus Particles', desc: 'Transmission electron microscopy of viral particles budding from a host cell',
    category: 'Viruses', ratio: '1x1', width: '600', span: '',
  },
  {
    id: 'gal-11', imgId: 'gallery-img-11-kk11', titleId: 'gal-11-title', descId: 'gal-11-desc',
    title: 'Butterfly Wing Scale', desc: 'Nanostructures on a butterfly wing scale that create iridescent color',
    category: 'Insects', ratio: '3x2', width: '800', span: 'col-span-2',
  },
  {
    id: 'gal-12', imgId: 'gallery-img-12-ll22', titleId: 'gal-12-title', descId: 'gal-12-desc',
    title: 'Mitochondria', desc: 'The powerhouse of the cell — mitochondria imaged with confocal microscopy',
    category: 'Cells', ratio: '1x1', width: '600', span: '',
  },
];

const categories = ['All', 'Bacteria', 'Cells', 'Fungi', 'Algae', 'Protozoa', 'Viruses', 'Insects', 'Crystals', 'Plant', 'Micro-animals'];

const GallerySection = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  return (
    <section id="gallery" ref={containerRef} className="bg-black py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-cosmos-teal text-sm font-semibold uppercase tracking-widest mb-4 block">
            Visual Archive
          </span>
          <h2
            id="gallery-title"
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            The MicroCosmos Gallery
          </h2>
          <p
            id="gallery-subtitle"
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Stunning imagery from electron microscopes, fluorescence systems, and
            confocal scanners — revealing life at its most fundamental scale.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-cosmos-teal text-black border-cosmos-teal'
                  : 'bg-transparent text-slate-300 border-white/20 hover:border-cosmos-teal/50 hover:text-cosmos-teal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${item.span || ''}`}
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-medium text-cosmos-teal bg-cosmos-teal/20 px-2 py-0.5 rounded-full border border-cosmos-teal/30 mb-1 inline-block">
                  {item.category}
                </span>
                <h4 id={item.titleId} className="text-white font-semibold text-sm leading-tight">
                  {item.title}
                </h4>
                <p id={item.descId} className="text-slate-300 text-xs mt-1 leading-snug line-clamp-2">
                  {item.desc}
                </p>
              </div>
              {/* Always-visible category badge */}
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white text-xs opacity-70 group-hover:opacity-0 transition-opacity duration-300">
                {item.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
