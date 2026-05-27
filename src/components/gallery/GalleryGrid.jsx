import { useState, useEffect, useRef } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  { id: 'g1', title: 'Diatom Symmetry', category: 'Algae', technique: 'SEM', imgId: 'gal-diatom-mc030', ratio: '1x1', width: 600, size: 'large' },
  { id: 'g2', title: 'Tardigrade Portrait', category: 'Micro-animal', technique: 'SEM', imgId: 'gal-tardigrade-mc031', ratio: '4x3', width: 500, size: 'medium' },
  { id: 'g3', title: 'Pollen Grain', category: 'Plant', technique: 'SEM', imgId: 'gal-pollen-mc032', ratio: '1x1', width: 500, size: 'medium' },
  { id: 'g4', title: 'Radiolarian Shell', category: 'Protozoa', technique: 'Light Microscopy', imgId: 'gal-radiolarian-mc033', ratio: '4x3', width: 700, size: 'large' },
  { id: 'g5', title: 'Mycelium Network', category: 'Fungi', technique: 'Fluorescence', imgId: 'gal-mycelium-mc034', ratio: '16x9', width: 800, size: 'wide' },
  { id: 'g6', title: 'Paramecium in Motion', category: 'Protozoa', technique: 'Phase Contrast', imgId: 'gal-paramecium-mc035', ratio: '4x3', width: 500, size: 'medium' },
  { id: 'g7', title: 'Cyanobacteria Colony', category: 'Bacteria', technique: 'Fluorescence', imgId: 'gal-cyanobacteria-mc036', ratio: '1x1', width: 500, size: 'medium' },
  { id: 'g8', title: 'Rotifer Feeding', category: 'Micro-animal', technique: 'DIC Microscopy', imgId: 'gal-rotifer-mc037', ratio: '4x3', width: 600, size: 'medium' },
  { id: 'g9', title: 'Snowflake Algae', category: 'Algae', technique: 'Polarized Light', imgId: 'gal-snowflake-mc038', ratio: '1x1', width: 600, size: 'large' },
  { id: 'g10', title: 'Spirogyra Filaments', category: 'Algae', technique: 'Bright Field', imgId: 'gal-spirogyra-mc039', ratio: '16x9', width: 800, size: 'wide' },
  { id: 'g11', title: 'Amoeba Pseudopods', category: 'Protozoa', technique: 'Phase Contrast', imgId: 'gal-amoeba-mc040', ratio: '4x3', width: 500, size: 'medium' },
  { id: 'g12', title: 'Penicillium Spores', category: 'Fungi', technique: 'SEM', imgId: 'gal-penicillium-mc041', ratio: '1x1', width: 500, size: 'medium' },
];

const techniqueColors = {
  'SEM': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Fluorescence': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'Phase Contrast': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Light Microscopy': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'DIC Microscopy': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Polarized Light': 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  'Bright Field': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
};

const categories = ['All', 'Algae', 'Bacteria', 'Fungi', 'Protozoa', 'Micro-animal', 'Plant'];

const GalleryItem = ({ item, onClick }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    }
  }, []);

  const heightClass = item.size === 'large' ? 'h-72' : item.size === 'wide' ? 'h-52' : 'h-56';

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 hover:border-cyan-500/40 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] ${
        item.size === 'wide' ? 'col-span-2' : ''
      }`}
      onClick={() => onClick(item)}
    >
      <div className={`relative ${heightClass} overflow-hidden`}>
        <img
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          data-strk-img-id={item.imgId}
          data-strk-img={`[gal-${item.id}-title] microscopy ${item.category}`}
          data-strk-img-ratio={item.ratio}
          data-strk-img-width={item.width}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <ZoomIn className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <p id={`gal-${item.id}-title`} className="font-grotesk font-semibold text-white text-sm">{item.title}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-slate-400 text-xs">{item.category}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full border ${techniqueColors[item.technique] || 'bg-slate-700 text-slate-300 border-slate-600'}`}>
              {item.technique}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Lightbox = ({ item, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    }
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        ref={ref}
        className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        <div className="aspect-video overflow-hidden bg-slate-800">
          <img
            alt={item.title}
            className="w-full h-full object-cover"
            data-strk-img-id={`${item.imgId}-lb`}
            data-strk-img={`[lb-title] microscopy ${item.category}`}
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 id="lb-title" className="font-grotesk font-bold text-xl text-white mb-1">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.category}</p>
            </div>
            <span className={`text-xs px-3 py-1 rounded-full border ${techniqueColors[item.technique] || 'bg-slate-700 text-slate-300 border-slate-600'}`}>
              {item.technique}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs font-medium px-4 py-2 rounded-full border transition-all ${
              activeCategory === cat
                ? 'bg-cyan-500 border-cyan-500 text-slate-900'
                : 'bg-transparent border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <GalleryItem key={item.id} item={item} onClick={setSelectedItem} />
        ))}
      </div>

      {selectedItem && (
        <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default GalleryGrid;
