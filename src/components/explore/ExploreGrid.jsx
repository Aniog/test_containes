import { useEffect, useRef, useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const allSpecimens = [
  { id: 'sp-1', imgId: 'explore-sp1-aa1bb2', category: 'Bacteria', title: 'Staphylococcus aureus', desc: 'Gram-positive cocci found on skin and nasal passages.', mag: '10,000x' },
  { id: 'sp-2', imgId: 'explore-sp2-cc3dd4', category: 'Viruses', title: 'Influenza A Virus', desc: 'Enveloped RNA virus responsible for seasonal flu.', mag: '100,000x' },
  { id: 'sp-3', imgId: 'explore-sp3-ee5ff6', category: 'Cells', title: 'Red Blood Cell', desc: 'Biconcave disc-shaped cell carrying oxygen through the bloodstream.', mag: '5,000x' },
  { id: 'sp-4', imgId: 'explore-sp4-gg7hh8', category: 'Fungi', title: 'Aspergillus Niger', desc: 'Black mold producing spores visible under light microscopy.', mag: '400x' },
  { id: 'sp-5', imgId: 'explore-sp5-ii9jj0', category: 'Crystals', title: 'Vitamin C Crystal', desc: 'Ascorbic acid crystallized and photographed under polarized light.', mag: '200x' },
  { id: 'sp-6', imgId: 'explore-sp6-kk1ll2', category: 'Parasites', title: 'Plasmodium falciparum', desc: 'Malaria-causing parasite inside a red blood cell.', mag: '1,000x' },
  { id: 'sp-7', imgId: 'explore-sp7-mm3nn4', category: 'Bacteria', title: 'Helicobacter pylori', desc: 'Spiral-shaped bacterium that colonizes the stomach lining.', mag: '8,000x' },
  { id: 'sp-8', imgId: 'explore-sp8-oo5pp6', category: 'Cells', title: 'Neuron', desc: 'A nerve cell with its characteristic axon and dendrites.', mag: '2,000x' },
  { id: 'sp-9', imgId: 'explore-sp9-qq7rr8', category: 'Crystals', title: 'Salt Crystal (NaCl)', desc: 'Cubic lattice structure of sodium chloride under polarized light.', mag: '100x' },
  { id: 'sp-10', imgId: 'explore-sp10-ss9tt0', category: 'Fungi', title: 'Penicillium Mold', desc: 'The mold that gave us penicillin — a life-saving discovery.', mag: '600x' },
  { id: 'sp-11', imgId: 'explore-sp11-uu1vv2', category: 'Viruses', title: 'Bacteriophage T4', desc: 'A virus that infects bacteria, with a distinctive lunar-lander shape.', mag: '200,000x' },
  { id: 'sp-12', imgId: 'explore-sp12-ww3xx4', category: 'Parasites', title: 'Giardia lamblia', desc: 'Pear-shaped flagellate parasite causing intestinal infections.', mag: '3,000x' },
];

const categories = ['All', 'Bacteria', 'Viruses', 'Cells', 'Fungi', 'Crystals', 'Parasites'];

const ExploreGrid = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = allSpecimens.filter((s) => {
    const matchCat = activeCategory === 'All' || s.category === activeCategory;
    const matchSearch = s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [filtered]);

  return (
    <div ref={containerRef}>
      {/* Search & Filter bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-microdim" />
          <input
            type="text"
            placeholder="Search specimens..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-microsurface border border-microborder rounded-full pl-12 pr-5 py-3 text-microtext placeholder-microdim text-sm focus:outline-none focus:border-microteal/60 transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-microdim shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-microteal text-microbg'
                  : 'bg-microsurface border border-microborder text-micromuted hover:border-microteal/50 hover:text-microtext'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-microdim text-sm mb-6">
        Showing <span className="text-microteal font-semibold">{filtered.length}</span> specimens
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((specimen) => (
          <article
            key={specimen.id}
            className="group bg-microsurface border border-microborder rounded-2xl overflow-hidden hover:border-microteal/50 hover:shadow-xl hover:shadow-microteal/10 transition-all duration-300 cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                alt={specimen.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-strk-img-id={specimen.imgId}
                data-strk-img={`[${specimen.id}-desc] [${specimen.id}-title]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-microsurface/70 to-transparent" />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-microbg/70 backdrop-blur-sm border border-microborder text-microteal text-xs px-2 py-1 rounded-full">
                  {specimen.category}
                </span>
                <span className="bg-microbg/70 backdrop-blur-sm border border-microborder text-microdim text-xs px-2 py-1 rounded-full">
                  {specimen.mag}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 id={`${specimen.id}-title`} className="font-display font-semibold text-microtext text-base mb-1 leading-snug">
                {specimen.title}
              </h3>
              <p id={`${specimen.id}-desc`} className="text-micromuted text-xs leading-relaxed line-clamp-2">
                {specimen.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-microdim text-lg">No specimens found.</p>
          <p className="text-microdim text-sm mt-2">Try a different search or category.</p>
        </div>
      )}
    </div>
  );
};

export default ExploreGrid;
