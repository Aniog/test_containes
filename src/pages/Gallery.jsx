import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ZoomIn } from 'lucide-react';

const galleryItems = [
  { id: 'g01', title: 'Tardigrade', category: 'Animals', desc: 'Water bear under SEM', ratio: '4x3', width: 600 },
  { id: 'g02', title: 'Diatom Colony', category: 'Algae', desc: 'Silica shell diatom colony', ratio: '1x1', width: 500 },
  { id: 'g03', title: 'Pollen Grain', category: 'Plants', desc: 'Sunflower pollen grain surface', ratio: '4x3', width: 600 },
  { id: 'g04', title: 'Radiolaria', category: 'Protozoa', desc: 'Radiolaria skeleton ocean', ratio: '1x1', width: 500 },
  { id: 'g05', title: 'E. coli Bacteria', category: 'Bacteria', desc: 'E. coli bacteria rod shaped', ratio: '16x9', width: 700 },
  { id: 'g06', title: 'Snowflake Crystal', category: 'Crystals', desc: 'Snowflake ice crystal macro', ratio: '1x1', width: 500 },
  { id: 'g07', title: 'Paramecium', category: 'Protozoa', desc: 'Paramecium cilia protozoa', ratio: '4x3', width: 600 },
  { id: 'g08', title: 'Nematode Worm', category: 'Animals', desc: 'Nematode roundworm microscope', ratio: '16x9', width: 700 },
  { id: 'g09', title: 'Amoeba', category: 'Protozoa', desc: 'Amoeba pseudopods movement', ratio: '4x3', width: 600 },
  { id: 'g10', title: 'Butterfly Wing Scale', category: 'Insects', desc: 'Butterfly wing scale microscopy', ratio: '1x1', width: 500 },
  { id: 'g11', title: 'Moss Spore', category: 'Plants', desc: 'Moss spore capsule microscope', ratio: '4x3', width: 600 },
  { id: 'g12', title: 'Dust Mite', category: 'Arachnids', desc: 'House dust mite SEM electron', ratio: '1x1', width: 500 },
  { id: 'g13', title: 'Foraminifera', category: 'Protozoa', desc: 'Foraminifera shell ocean sediment', ratio: '4x3', width: 600 },
  { id: 'g14', title: 'Yeast Cell', category: 'Fungi', desc: 'Yeast cell budding microscope', ratio: '1x1', width: 500 },
  { id: 'g15', title: 'Rotifer', category: 'Animals', desc: 'Rotifer wheel animalcule water', ratio: '4x3', width: 600 },
  { id: 'g16', title: 'Cyanobacteria', category: 'Bacteria', desc: 'Cyanobacteria filament blue green algae', ratio: '16x9', width: 700 },
  { id: 'g17', title: 'Hydra', category: 'Animals', desc: 'Hydra freshwater polyp tentacles', ratio: '4x3', width: 600 },
  { id: 'g18', title: 'Salt Crystal', category: 'Crystals', desc: 'Salt sodium chloride crystal macro', ratio: '1x1', width: 500 },
];

const categories = ['All', ...Array.from(new Set(galleryItems.map((i) => i.category)))];

export default function Gallery() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((i) => i.category === activeCategory);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeCategory]);

  return (
    <div className="bg-cosmos-bg min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="font-body text-cosmos-cyan text-xs font-semibold tracking-[0.3em] uppercase mb-3">
          Visual Archive
        </p>
        <h1 id="gallery-title" className="font-heading font-bold text-5xl md:text-6xl text-cosmos-text mb-4">
          The Gallery
        </h1>
        <div className="w-16 h-0.5 bg-cosmos-cyan mx-auto mb-6" />
        <p className="font-body text-cosmos-muted text-lg max-w-2xl mx-auto">
          A curated collection of microscopy images revealing the hidden architecture of life.
        </p>
      </div>

      {/* Category filter */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-body text-sm font-medium px-5 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cosmos-cyan text-cosmos-bg border-cosmos-cyan'
                  : 'border-cosmos-border text-cosmos-muted hover:border-cosmos-cyan hover:text-cosmos-cyan'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div ref={containerRef} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden cursor-pointer hover:border-cosmos-cyan/60 transition-all duration-300 hover:shadow-xl hover:shadow-cosmos-cyan/10"
              onClick={() => setLightbox(item)}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-strk-img-id={`gallery-img-${item.id}`}
                  data-strk-img={`[gallery-item-desc-${item.id}] [gallery-item-title-${item.id}] [gallery-title]`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width={item.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/90 via-cosmos-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p id={`gallery-item-title-${item.id}`} className="font-heading font-bold text-cosmos-text text-sm">
                      {item.title}
                    </p>
                    <p id={`gallery-item-desc-${item.id}`} className="font-body text-cosmos-cyan text-xs">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-cosmos-cyan/20 backdrop-blur-sm rounded-full p-1.5">
                    <ZoomIn className="w-4 h-4 text-cosmos-cyan" />
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="font-heading font-semibold text-cosmos-text text-sm truncate">{item.title}</p>
                <p className="font-body text-cosmos-muted text-xs">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-cosmos-bg/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              alt={lightbox.title}
              className="w-full object-cover max-h-[60vh]"
              data-strk-img-id={`lightbox-img-${lightbox.id}`}
              data-strk-img={`[lightbox-desc-${lightbox.id}] [lightbox-title-${lightbox.id}]`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="p-6">
              <span className="font-body text-cosmos-cyan text-xs font-semibold tracking-widest uppercase">
                {lightbox.category}
              </span>
              <h3 id={`lightbox-title-${lightbox.id}`} className="font-heading font-bold text-2xl text-cosmos-text mt-1 mb-2">
                {lightbox.title}
              </h3>
              <p id={`lightbox-desc-${lightbox.id}`} className="font-body text-cosmos-muted">
                {lightbox.desc}
              </p>
            </div>
            <button
              className="absolute top-4 right-4 bg-cosmos-bg/80 text-cosmos-muted hover:text-cosmos-cyan rounded-full w-8 h-8 flex items-center justify-center text-lg transition-colors"
              onClick={() => setLightbox(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
