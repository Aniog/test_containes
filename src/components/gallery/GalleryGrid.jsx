import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { X, ZoomIn } from 'lucide-react';

const categories = ['All', 'Bacteria', 'Viruses', 'Fungi', 'Protozoa', 'Algae', 'Extremophiles'];

const galleryItems = [
  { id: 'gal-01', title: 'E. coli Colony', category: 'Bacteria', desc: 'Escherichia coli under fluorescence microscopy', imgId: 'gal-img-01', ratio: '4x3' },
  { id: 'gal-02', title: 'Influenza Virus', category: 'Viruses', desc: 'H1N1 influenza virus particles, electron microscopy', imgId: 'gal-img-02', ratio: '4x3' },
  { id: 'gal-03', title: 'Penicillium Mold', category: 'Fungi', desc: 'Penicillium spores under light microscopy', imgId: 'gal-img-03', ratio: '4x3' },
  { id: 'gal-04', title: 'Paramecium', category: 'Protozoa', desc: 'Paramecium caudatum, a ciliated protozoan', imgId: 'gal-img-04', ratio: '4x3' },
  { id: 'gal-05', title: 'Diatom Frustule', category: 'Algae', desc: 'Intricate silica shell of a marine diatom', imgId: 'gal-img-05', ratio: '1x1' },
  { id: 'gal-06', title: 'Tardigrade', category: 'Extremophiles', desc: 'Water bear in cryptobiosis state', imgId: 'gal-img-06', ratio: '4x3' },
  { id: 'gal-07', title: 'Streptococcus', category: 'Bacteria', desc: 'Chain-forming gram-positive bacteria', imgId: 'gal-img-07', ratio: '1x1' },
  { id: 'gal-08', title: 'Coronavirus', category: 'Viruses', desc: 'SARS-CoV-2 spike protein structure', imgId: 'gal-img-08', ratio: '4x3' },
  { id: 'gal-09', title: 'Aspergillus', category: 'Fungi', desc: 'Aspergillus niger conidiophore', imgId: 'gal-img-09', ratio: '4x3' },
  { id: 'gal-10', title: 'Amoeba', category: 'Protozoa', desc: 'Amoeba proteus extending pseudopods', imgId: 'gal-img-10', ratio: '4x3' },
  { id: 'gal-11', title: 'Spirulina', category: 'Algae', desc: 'Spiral-shaped cyanobacteria filaments', imgId: 'gal-img-11', ratio: '4x3' },
  { id: 'gal-12', title: 'Thermophile', category: 'Extremophiles', desc: 'Heat-loving archaea from hydrothermal vents', imgId: 'gal-img-12', ratio: '4x3' },
  { id: 'gal-13', title: 'Lactobacillus', category: 'Bacteria', desc: 'Probiotic bacteria found in fermented foods', imgId: 'gal-img-13', ratio: '4x3' },
  { id: 'gal-14', title: 'Bacteriophage', category: 'Viruses', desc: 'T4 phage attacking an E. coli cell', imgId: 'gal-img-14', ratio: '1x1' },
  { id: 'gal-15', title: 'Yeast Cells', category: 'Fungi', desc: 'Saccharomyces cerevisiae budding', imgId: 'gal-img-15', ratio: '4x3' },
  { id: 'gal-16', title: 'Radiolaria', category: 'Protozoa', desc: 'Geometric mineral skeleton of a radiolarian', imgId: 'gal-img-16', ratio: '1x1' },
];

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const containerRef = useRef(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  return (
    <div ref={containerRef}>
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? 'bg-teal-500 text-gray-950'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-teal-500/50 transition-all cursor-pointer"
            onClick={() => setLightbox(item)}
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.id}-desc] [${item.id}-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gray-950/0 group-hover:bg-gray-950/30 transition-colors flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="absolute top-2 right-2">
                <span className="bg-teal-500/20 text-teal-300 text-xs px-2 py-0.5 rounded-full border border-teal-500/30">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 id={`${item.id}-title`} className="text-white font-semibold text-sm mb-1">
                {item.title}
              </h3>
              <p id={`${item.id}-desc`} className="text-gray-400 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-gray-950/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-gray-400 hover:text-white"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="max-w-3xl w-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              alt={lightbox.title}
              className="w-full object-cover max-h-[60vh]"
              data-strk-img-id={`${lightbox.imgId}-lb`}
              data-strk-img={`[lb-desc] [lb-title]`}
              data-strk-img-ratio="16x9"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="p-6">
              <span className="bg-teal-500/20 text-teal-300 text-xs px-3 py-1 rounded-full border border-teal-500/30">
                {lightbox.category}
              </span>
              <h3 id="lb-title" className="text-white font-bold text-xl mt-3 mb-2">
                {lightbox.title}
              </h3>
              <p id="lb-desc" className="text-gray-400 text-sm">{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
