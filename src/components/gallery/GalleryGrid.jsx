import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const allImages = [
  { id: 'gal-1', titleId: 'gal-title-1', descId: 'gal-desc-1', imgId: 'gal-img-1-a1b2c3', title: 'E. coli Bacteria', desc: 'Rod-shaped bacteria magnified 10,000x under electron microscope', category: 'Bacteria', ratio: '4x3', width: '600' },
  { id: 'gal-2', titleId: 'gal-title-2', descId: 'gal-desc-2', imgId: 'gal-img-2-d4e5f6', title: 'Penicillium Mold', desc: 'Blue-green mold spores that gave us penicillin', category: 'Fungi', ratio: '4x3', width: '600' },
  { id: 'gal-3', titleId: 'gal-title-3', descId: 'gal-desc-3', imgId: 'gal-img-3-g7h8i9', title: 'Compound Eye', desc: 'Dragonfly compound eye with thousands of individual lenses', category: 'Insects', ratio: '4x3', width: '600' },
  { id: 'gal-4', titleId: 'gal-title-4', descId: 'gal-desc-4', imgId: 'gal-img-4-j1k2l3', title: 'Quartz Crystal', desc: 'Silicon dioxide crystal formation under polarized light', category: 'Crystals', ratio: '4x3', width: '600' },
  { id: 'gal-5', titleId: 'gal-title-5', descId: 'gal-desc-5', imgId: 'gal-img-5-m4n5o6', title: 'Red Blood Cells', desc: 'Human erythrocytes flowing through a capillary', category: 'Cells', ratio: '4x3', width: '600' },
  { id: 'gal-6', titleId: 'gal-title-6', descId: 'gal-desc-6', imgId: 'gal-img-6-p7q8r9', title: 'Radiolarian', desc: 'Single-celled marine organism with intricate silica skeleton', category: 'Plankton', ratio: '4x3', width: '600' },
  { id: 'gal-7', titleId: 'gal-title-7', descId: 'gal-desc-7', imgId: 'gal-img-7-s1t2u3', title: 'Moth Wing Scales', desc: 'Overlapping scales on a moth wing create iridescent color', category: 'Insects', ratio: '4x3', width: '600' },
  { id: 'gal-8', titleId: 'gal-title-8', descId: 'gal-desc-8', imgId: 'gal-img-8-v4w5x6', title: 'Aspergillus Spores', desc: 'Fungal spore head releasing thousands of conidia', category: 'Fungi', ratio: '4x3', width: '600' },
  { id: 'gal-9', titleId: 'gal-title-9', descId: 'gal-desc-9', imgId: 'gal-img-9-y7z8a9', title: 'Snowflake', desc: 'Hexagonal ice crystal with perfect six-fold symmetry', category: 'Crystals', ratio: '4x3', width: '600' },
  { id: 'gal-10', titleId: 'gal-title-10', descId: 'gal-desc-10', imgId: 'gal-img-10-b1c2d3', title: 'Neuron Network', desc: 'Fluorescent staining reveals the branching dendrites of neurons', category: 'Cells', ratio: '4x3', width: '600' },
  { id: 'gal-11', titleId: 'gal-title-11', descId: 'gal-desc-11', imgId: 'gal-img-11-e4f5g6', title: 'Diatom Shell', desc: 'Intricate silica frustule of a marine diatom', category: 'Plankton', ratio: '4x3', width: '600' },
  { id: 'gal-12', titleId: 'gal-title-12', descId: 'gal-desc-12', imgId: 'gal-img-12-h7i8j9', title: 'Staphylococcus', desc: 'Grape-like clusters of Staphylococcus aureus bacteria', category: 'Bacteria', ratio: '4x3', width: '600' },
  { id: 'gal-13', titleId: 'gal-title-13', descId: 'gal-desc-13', imgId: 'gal-img-13-k1l2m3', title: 'Pollen Grain', desc: 'Sunflower pollen grain with spiky surface texture', category: 'Cells', ratio: '4x3', width: '600' },
  { id: 'gal-14', titleId: 'gal-title-14', descId: 'gal-desc-14', imgId: 'gal-img-14-n4o5p6', title: 'Flea Anatomy', desc: 'Scanning electron micrograph of a flea showing leg spines', category: 'Insects', ratio: '4x3', width: '600' },
  { id: 'gal-15', titleId: 'gal-title-15', descId: 'gal-desc-15', imgId: 'gal-img-15-q7r8s9', title: 'Salt Crystal', desc: 'Cubic sodium chloride crystals under polarized light microscopy', category: 'Crystals', ratio: '4x3', width: '600' },
  { id: 'gal-16', titleId: 'gal-title-16', descId: 'gal-desc-16', imgId: 'gal-img-16-t1u2v3', title: 'Copepod', desc: 'Tiny crustacean plankton, the most abundant animal on Earth', category: 'Plankton', ratio: '4x3', width: '600' },
];

const categories = ['All', 'Bacteria', 'Fungi', 'Insects', 'Crystals', 'Cells', 'Plankton'];

const categoryColors = {
  Bacteria: 'text-red-400 bg-red-500/10 border-red-500/20',
  Fungi: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  Insects: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  Crystals: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  Cells: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  Plankton: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
};

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const containerRef = useRef(null);

  const filtered = allImages.filter((img) => {
    const matchCat = activeCategory === 'All' || img.category === activeCategory;
    const matchSearch = img.title.toLowerCase().includes(search.toLowerCase()) || img.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search images..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-900 border border-gray-700 rounded-full pl-10 pr-10 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat
                  ? 'bg-teal-500 text-gray-950 border-teal-500'
                  : 'bg-gray-900 text-gray-400 border-gray-700 hover:border-teal-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p className="text-gray-500 text-sm mb-8">{filtered.length} images</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((img) => (
          <article
            key={img.id}
            className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-teal-500/40 transition-all duration-300 cursor-pointer"
          >
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                alt={img.title}
                data-strk-img-id={img.imgId}
                data-strk-img={`[${img.descId}] [${img.titleId}]`}
                data-strk-img-ratio={img.ratio}
                data-strk-img-width={img.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-4">
              <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full border mb-2 ${categoryColors[img.category]}`}>
                {img.category}
              </span>
              <h3 id={img.titleId} className="text-white font-semibold text-sm mb-1">{img.title}</h3>
              <p id={img.descId} className="text-gray-500 text-xs leading-relaxed line-clamp-2">{img.desc}</p>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24 text-gray-500">
          <p className="text-lg">No images found for your search.</p>
        </div>
      )}
    </div>
  );
}
