import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Search } from 'lucide-react';

const categories = ['All', 'Bacteria', 'Crystals', 'Algae', 'Insects', 'Fungi', 'Cells', 'Minerals'];

const specimens = [
  { id: 'sp-1', imgId: 'exp-img-aa1bb2', titleId: 'exp-title-1', descId: 'exp-desc-1', title: 'E. coli Bacteria', description: 'Rod-shaped bacteria found in the intestines', category: 'Bacteria', tag: 'Bacteria', ratio: '4x3', width: 600 },
  { id: 'sp-2', imgId: 'exp-img-cc3dd4', titleId: 'exp-title-2', descId: 'exp-desc-2', title: 'Quartz Crystal', description: 'Silicon dioxide crystal under polarized light', category: 'Crystals', tag: 'Crystals', ratio: '4x3', width: 600 },
  { id: 'sp-3', imgId: 'exp-img-ee5ff6', titleId: 'exp-title-3', descId: 'exp-desc-3', title: 'Spirogyra Algae', description: 'Freshwater green algae with spiral chloroplasts', category: 'Algae', tag: 'Algae', ratio: '4x3', width: 600 },
  { id: 'sp-4', imgId: 'exp-img-gg7hh8', titleId: 'exp-title-4', descId: 'exp-desc-4', title: 'Compound Eye', description: 'Insect compound eye surface under SEM', category: 'Insects', tag: 'Insects', ratio: '4x3', width: 600 },
  { id: 'sp-5', imgId: 'exp-img-ii9jj0', titleId: 'exp-title-5', descId: 'exp-desc-5', title: 'Penicillium Mold', description: 'Fungal spores of the penicillin-producing mold', category: 'Fungi', tag: 'Fungi', ratio: '4x3', width: 600 },
  { id: 'sp-6', imgId: 'exp-img-kk1ll2', titleId: 'exp-title-6', descId: 'exp-desc-6', title: 'Red Blood Cells', description: 'Human erythrocytes in the bloodstream', category: 'Cells', tag: 'Cells', ratio: '4x3', width: 600 },
  { id: 'sp-7', imgId: 'exp-img-mm3nn4', titleId: 'exp-title-7', descId: 'exp-desc-7', title: 'Pyrite Crystal', description: "Fool's gold cubic crystal formation", category: 'Minerals', tag: 'Minerals', ratio: '4x3', width: 600 },
  { id: 'sp-8', imgId: 'exp-img-oo5pp6', titleId: 'exp-title-8', descId: 'exp-desc-8', title: 'Staphylococcus', description: 'Grape-like clusters of spherical bacteria', category: 'Bacteria', tag: 'Bacteria', ratio: '4x3', width: 600 },
  { id: 'sp-9', imgId: 'exp-img-qq7rr8', titleId: 'exp-title-9', descId: 'exp-desc-9', title: 'Amethyst Crystal', description: 'Purple quartz crystal geode cross-section', category: 'Crystals', tag: 'Crystals', ratio: '4x3', width: 600 },
  { id: 'sp-10', imgId: 'exp-img-ss9tt0', titleId: 'exp-title-10', descId: 'exp-desc-10', title: 'Diatom Shell', description: 'Ornate silica shell of a single-celled alga', category: 'Algae', tag: 'Algae', ratio: '4x3', width: 600 },
  { id: 'sp-11', imgId: 'exp-img-uu1vv2', titleId: 'exp-title-11', descId: 'exp-desc-11', title: 'Mosquito Wing', description: 'Microscopic scales on a mosquito wing surface', category: 'Insects', tag: 'Insects', ratio: '4x3', width: 600 },
  { id: 'sp-12', imgId: 'exp-img-ww3xx4', titleId: 'exp-title-12', descId: 'exp-desc-12', title: 'Neuron Cell', description: 'Fluorescent staining of a single neuron', category: 'Cells', tag: 'Cells', ratio: '4x3', width: 600 },
];

const ExploreGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef(null);

  const filtered = specimens.filter((s) => {
    const matchCat = activeCategory === 'All' || s.category === activeCategory;
    const matchSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  return (
    <div ref={containerRef}>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search specimens..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0a1628] border border-slate-700 text-white placeholder-slate-500 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-teal-600 transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/20'
                : 'bg-[#0a1628] text-slate-400 border border-slate-700 hover:border-teal-700 hover:text-teal-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-slate-500">
          <p className="text-lg">No specimens found.</p>
          <p className="text-sm mt-2">Try a different search or category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-[#0a1628] border border-slate-800 rounded-2xl overflow-hidden hover:border-teal-800 hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width={item.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover bg-slate-800 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#050d1a]/80 text-teal-300 border border-teal-800 rounded-full px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm">
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3
                  id={item.titleId}
                  className="text-white font-semibold text-base mb-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p id={item.descId} className="text-slate-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreGallery;
