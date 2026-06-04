import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { X, ZoomIn } from 'lucide-react';

const textures = [
  {
    id: 'dry-grass-1',
    titleId: 'texture-dry-grass-1-title',
    descId: 'texture-dry-grass-1-desc',
    imgId: 'texture-dry-grass-1-img-3a7f2c',
    title: 'Parched Earth',
    desc: 'Cracked clay and brittle grass — the savanna in the grip of the dry season.',
    category: 'Earth',
    size: 'large',
  },
  {
    id: 'elephant-skin',
    titleId: 'texture-elephant-skin-title',
    descId: 'texture-elephant-skin-desc',
    imgId: 'texture-elephant-skin-img-8b4e1d',
    title: 'Ancient Skin',
    desc: 'The deep folds of elephant hide — a topographic map of decades lived.',
    category: 'Wildlife',
    size: 'small',
  },
  {
    id: 'sunset-silhouette',
    titleId: 'texture-sunset-sil-title',
    descId: 'texture-sunset-sil-desc',
    imgId: 'texture-sunset-sil-img-5c9a3e',
    title: 'Acacia at Dusk',
    desc: 'The iconic silhouette of an acacia tree against a burning orange sky.',
    category: 'Light',
    size: 'small',
  },
  {
    id: 'dust-cloud',
    titleId: 'texture-dust-cloud-title',
    descId: 'texture-dust-cloud-desc',
    imgId: 'texture-dust-cloud-img-2f6b8a',
    title: 'The Dust Rises',
    desc: 'A thousand hooves churn the earth into golden clouds that drift across the plains.',
    category: 'Migration',
    size: 'large',
  },
  {
    id: 'grass-close',
    titleId: 'texture-grass-close-title',
    descId: 'texture-grass-close-desc',
    imgId: 'texture-grass-close-img-7d1c4f',
    title: 'Golden Blades',
    desc: 'Dry savanna grass catches the last light of afternoon — each blade a brushstroke.',
    category: 'Earth',
    size: 'small',
  },
  {
    id: 'lion-mane',
    titleId: 'texture-lion-mane-title',
    descId: 'texture-lion-mane-desc',
    imgId: 'texture-lion-mane-img-4e8b2c',
    title: 'The Mane',
    desc: 'Close-up of a lion\'s mane — dark, dense, and matted with the dust of the plains.',
    category: 'Wildlife',
    size: 'small',
  },
  {
    id: 'water-reflection',
    titleId: 'texture-water-ref-title',
    descId: 'texture-water-ref-desc',
    imgId: 'texture-water-ref-img-9a3d6b',
    title: 'Mirror of the Plains',
    desc: 'A seasonal waterhole reflects the vast sky — a brief oasis in the dry season.',
    category: 'Light',
    size: 'large',
  },
  {
    id: 'bark-texture',
    titleId: 'texture-bark-title',
    descId: 'texture-bark-desc',
    imgId: 'texture-bark-img-1b5f9e',
    title: 'Baobab Bark',
    desc: 'The ancient, wrinkled bark of a baobab — a tree that stores thousands of litres of water.',
    category: 'Earth',
    size: 'small',
  },
  {
    id: 'zebra-stripes',
    titleId: 'texture-zebra-title',
    descId: 'texture-zebra-desc',
    imgId: 'texture-zebra-img-6c2a8d',
    title: 'Stripes & Shadow',
    desc: 'The bold geometry of zebra stripes — nature\'s most striking pattern, unique to each animal.',
    category: 'Wildlife',
    size: 'small',
  },
  {
    id: 'red-oat-grass',
    titleId: 'texture-red-oat-title',
    descId: 'texture-red-oat-desc',
    imgId: 'texture-red-oat-img-3e7c1f',
    title: 'Red Oat Grass',
    desc: 'The dominant grass of the Serengeti, turning copper-red in the dry season.',
    category: 'Earth',
    size: 'large',
  },
];

const categories = ['All', 'Earth', 'Wildlife', 'Light', 'Migration'];

function TextureCard({ item, onOpen }) {
  return (
    <div
      className={`texture-item cursor-pointer group ${
        item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      style={{ aspectRatio: item.size === 'large' ? '16/9' : '1/1' }}
      onClick={() => onOpen(item)}
    >
      <img
        data-strk-img-id={item.imgId}
        data-strk-img={`[${item.descId}] [${item.titleId}]`}
        data-strk-img-ratio={item.size === 'large' ? '16x9' : '1x1'}
        data-strk-img-width={item.size === 'large' ? '1200' : '600'}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={item.title}
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-earth/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Category badge */}
      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="font-sans text-xs tracking-widest uppercase bg-burnt-orange/90 text-ash px-2 py-1">
          {item.category}
        </span>
      </div>

      {/* Zoom icon */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 rounded-full bg-charcoal-earth/70 flex items-center justify-center text-savanna-sand">
          <ZoomIn size={14} />
        </div>
      </div>

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
        <h3
          id={item.titleId}
          className="font-serif text-lg font-bold text-ash leading-tight"
        >
          {item.title}
        </h3>
        <p
          id={item.descId}
          className="font-sans text-xs text-savanna-sand/70 mt-1 line-clamp-2"
        >
          {item.desc}
        </p>
      </div>
    </div>
  );
}

function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-charcoal-earth/95 backdrop-blur-sm flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full dissolve-enter"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-savanna-sand/60 hover:text-ash transition-colors flex items-center gap-2 font-sans text-sm tracking-wider uppercase"
        >
          <X size={16} /> Close
        </button>

        <img
          data-strk-img-id={`${item.imgId}-lb`}
          data-strk-img={`[lb-${item.descId}] [lb-${item.titleId}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="1400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.title}
          className="w-full object-cover"
        />

        <div className="mt-4 flex items-start justify-between">
          <div>
            <h2
              id={`lb-${item.titleId}`}
              className="font-serif text-2xl font-bold text-ash"
            >
              {item.title}
            </h2>
            <p
              id={`lb-${item.descId}`}
              className="font-sans text-savanna-sand/70 text-sm mt-2 max-w-xl"
            >
              {item.desc}
            </p>
          </div>
          <span className="font-sans text-xs tracking-widest uppercase text-burnt-orange border border-burnt-orange/40 px-3 py-1.5 ml-4 shrink-0">
            {item.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function TextureGallery() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);

  const filtered = activeCategory === 'All'
    ? textures
    : textures.filter((t) => t.category === activeCategory);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  return (
    <div ref={containerRef}>
      {/* Category filter */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-burnt-orange border-burnt-orange text-ash'
                : 'border-savanna-sand/20 text-savanna-sand/60 hover:border-burnt-orange/60 hover:text-savanna-sand'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[220px]">
        {filtered.map((item) => (
          <TextureCard key={item.id} item={item} onOpen={setLightboxItem} />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxItem && (
        <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      )}
    </div>
  );
}
