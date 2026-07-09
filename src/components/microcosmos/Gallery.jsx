import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Cells', 'Bacteria', 'Insects', 'Crystals', 'Water', 'Plants'];

const galleryItems = [
  { id: 'g01', titleId: 'gallery-g01-title', descId: 'gallery-g01-desc', imgId: 'gallery-g01-img-mc010', title: 'Red Blood Cells', desc: 'Human erythrocytes under electron microscope', category: 'Cells', size: 'large' },
  { id: 'g02', titleId: 'gallery-g02-title', descId: 'gallery-g02-desc', imgId: 'gallery-g02-img-mc011', title: 'E. coli Colony', desc: 'Escherichia coli bacteria cluster', category: 'Bacteria', size: 'small' },
  { id: 'g03', titleId: 'gallery-g03-title', descId: 'gallery-g03-desc', imgId: 'gallery-g03-img-mc012', title: 'Snowflake Crystal', desc: 'Ice crystal hexagonal symmetry macro photography', category: 'Crystals', size: 'small' },
  { id: 'g04', titleId: 'gallery-g04-title', descId: 'gallery-g04-desc', imgId: 'gallery-g04-img-mc013', title: 'Compound Eye', desc: 'Dragonfly compound eye close-up macro', category: 'Insects', size: 'small' },
  { id: 'g05', titleId: 'gallery-g05-title', descId: 'gallery-g05-desc', imgId: 'gallery-g05-img-mc014', title: 'Water Droplet', desc: 'Surface tension water droplet macro photography', category: 'Water', size: 'large' },
  { id: 'g06', titleId: 'gallery-g06-title', descId: 'gallery-g06-desc', imgId: 'gallery-g06-img-mc015', title: 'Pollen Grain', desc: 'Flower pollen grain under scanning electron microscope', category: 'Plants', size: 'small' },
  { id: 'g07', titleId: 'gallery-g07-title', descId: 'gallery-g07-desc', imgId: 'gallery-g07-img-mc016', title: 'Neuron Network', desc: 'Brain neuron cells fluorescence microscopy', category: 'Cells', size: 'small' },
  { id: 'g08', titleId: 'gallery-g08-title', descId: 'gallery-g08-desc', imgId: 'gallery-g08-img-mc017', title: 'Tardigrade', desc: 'Water bear tardigrade microscopic animal', category: 'Insects', size: 'small' },
  { id: 'g09', titleId: 'gallery-g09-title', descId: 'gallery-g09-desc', imgId: 'gallery-g09-img-mc018', title: 'Salt Crystal', desc: 'Sodium chloride salt crystal macro photography', category: 'Crystals', size: 'large' },
  { id: 'g10', titleId: 'gallery-g10-title', descId: 'gallery-g10-desc', imgId: 'gallery-g10-img-mc019', title: 'Diatom Shell', desc: 'Diatom algae silica shell microscopy', category: 'Plants', size: 'small' },
  { id: 'g11', titleId: 'gallery-g11-title', descId: 'gallery-g11-desc', imgId: 'gallery-g11-img-mc020', title: 'Mosquito Proboscis', desc: 'Mosquito needle proboscis extreme macro', category: 'Insects', size: 'small' },
  { id: 'g12', titleId: 'gallery-g12-title', descId: 'gallery-g12-desc', imgId: 'gallery-g12-img-mc021', title: 'Amoeba', desc: 'Amoeba proteus single-cell organism microscopy', category: 'Bacteria', size: 'small' },
  { id: 'g13', titleId: 'gallery-g13-title', descId: 'gallery-g13-desc', imgId: 'gallery-g13-img-mc022', title: 'Mitosis', desc: 'Cell division mitosis fluorescence microscopy', category: 'Cells', size: 'large' },
  { id: 'g14', titleId: 'gallery-g14-title', descId: 'gallery-g14-desc', imgId: 'gallery-g14-img-mc023', title: 'Butterfly Wing Scale', desc: 'Butterfly wing scale iridescent structure macro', category: 'Insects', size: 'small' },
  { id: 'g15', titleId: 'gallery-g15-title', descId: 'gallery-g15-desc', imgId: 'gallery-g15-img-mc024', title: 'Water Flea', desc: 'Daphnia water flea transparent body microscopy', category: 'Water', size: 'small' },
  { id: 'g16', titleId: 'gallery-g16-title', descId: 'gallery-g16-desc', imgId: 'gallery-g16-img-mc025', title: 'Quartz Crystal', desc: 'Quartz mineral crystal polarized light microscopy', category: 'Crystals', size: 'small' },
];

export default function Gallery() {
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
    <section id="gallery" className="py-24 md:py-32 bg-cosmos-deep relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase text-cosmos-cyan font-semibold mb-4 font-heading">
            Visual Collection
          </p>
          <h2
            id="gallery-section-title"
            className="font-heading text-4xl md:text-5xl font-bold text-cosmos-text mb-4"
          >
            Gallery of the Invisible
          </h2>
          <p
            id="gallery-section-desc"
            className="text-cosmos-muted text-lg max-w-xl mx-auto"
          >
            Stunning imagery captured through electron microscopes, macro lenses, and fluorescence imaging.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold font-heading transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-cosmos-cyan text-cosmos-deep border-cosmos-cyan shadow-glow-sm'
                  : 'text-cosmos-muted border-cosmos-dim/40 hover:border-cosmos-cyan/50 hover:text-cosmos-cyan bg-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div ref={containerRef} className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden border border-cosmos-cyan/10 hover:border-cosmos-cyan/40 transition-all duration-500 hover:shadow-glow-md cursor-pointer"
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [gallery-section-desc] [gallery-section-title]`}
                data-strk-img-ratio={item.size === 'large' ? '3x4' : '4x3'}
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-deep/90 via-cosmos-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
                <span className="text-xs tracking-widest uppercase text-cosmos-cyan font-heading mb-1">
                  {item.category}
                </span>
                <h3 id={item.titleId} className="font-heading text-lg font-semibold text-cosmos-text">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-cosmos-muted text-xs mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              {/* Always-visible category badge */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-cosmos-deep/70 backdrop-blur-sm border border-cosmos-cyan/20 text-cosmos-cyan text-xs font-heading font-semibold">
                {item.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
