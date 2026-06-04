import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Fungi', 'Insects', 'Dewdrops'];

const microImages = [
  {
    id: 'micro-1', titleId: 'micro-title-1', descId: 'micro-desc-1',
    imgId: 'micro-img-aa1bb2', category: 'Fungi',
    title: 'Fly Agaric', desc: 'Bright red Amanita muscaria mushroom emerging from forest floor moss',
    ratio: '3x4', width: '600',
  },
  {
    id: 'micro-2', titleId: 'micro-title-2', descId: 'micro-desc-2',
    imgId: 'micro-img-cc3dd4', category: 'Dewdrops',
    title: 'Morning Dew', desc: 'Macro dewdrops on a spider web in early morning forest light',
    ratio: '4x3', width: '800',
  },
  {
    id: 'micro-3', titleId: 'micro-title-3', descId: 'micro-desc-3',
    imgId: 'micro-img-ee5ff6', category: 'Insects',
    title: 'Stag Beetle', desc: 'Extreme macro of a stag beetle on decaying bark in old-growth forest',
    ratio: '3x4', width: '600',
  },
  {
    id: 'micro-4', titleId: 'micro-title-4', descId: 'micro-desc-4',
    imgId: 'micro-img-gg7hh8', category: 'Fungi',
    title: 'Oyster Cluster', desc: 'Cluster of oyster mushrooms growing from a mossy fallen log',
    ratio: '4x3', width: '800',
  },
  {
    id: 'micro-5', titleId: 'micro-title-5', descId: 'micro-desc-5',
    imgId: 'micro-img-ii9jj0', category: 'Dewdrops',
    title: 'Leaf Bead', desc: 'Single perfect dewdrop balanced on the tip of a fern frond',
    ratio: '1x1', width: '600',
  },
  {
    id: 'micro-6', titleId: 'micro-title-6', descId: 'micro-desc-6',
    imgId: 'micro-img-kk1ll2', category: 'Insects',
    title: 'Forest Moth', desc: 'Camouflaged moth resting on lichen-covered bark, wings spread',
    ratio: '3x4', width: '600',
  },
  {
    id: 'micro-7', titleId: 'micro-title-7', descId: 'micro-desc-7',
    imgId: 'micro-img-mm3nn4', category: 'Fungi',
    title: 'Ghost Fungus', desc: 'Pale bioluminescent ghost fungus glowing faintly in forest darkness',
    ratio: '4x3', width: '800',
  },
  {
    id: 'micro-8', titleId: 'micro-title-8', descId: 'micro-desc-8',
    imgId: 'micro-img-oo5pp6', category: 'Insects',
    title: 'Millipede Coil', desc: 'Macro photograph of a millipede coiled on damp forest floor leaf litter',
    ratio: '1x1', width: '600',
  },
  {
    id: 'micro-9', titleId: 'micro-title-9', descId: 'micro-desc-9',
    imgId: 'micro-img-qq7rr8', category: 'Dewdrops',
    title: 'Rain Jewels', desc: 'Raindrops clinging to pine needles, each reflecting the forest within',
    ratio: '3x4', width: '600',
  },
  {
    id: 'micro-10', titleId: 'micro-title-10', descId: 'micro-desc-10',
    imgId: 'micro-img-ss9tt0', category: 'Fungi',
    title: 'Turkey Tail', desc: 'Colorful turkey tail bracket fungus on a decaying log in autumn forest',
    ratio: '4x3', width: '800',
  },
  {
    id: 'micro-11', titleId: 'micro-title-11', descId: 'micro-desc-11',
    imgId: 'micro-img-uu1vv2', category: 'Insects',
    title: 'Damselfly', desc: 'Iridescent damselfly perched on a mossy twig above a forest stream',
    ratio: '3x4', width: '600',
  },
  {
    id: 'micro-12', titleId: 'micro-title-12', descId: 'micro-desc-12',
    imgId: 'micro-img-ww3xx4', category: 'Dewdrops',
    title: 'Moss Spheres', desc: 'Tiny water spheres resting on the tips of star moss in forest shade',
    ratio: '4x3', width: '800',
  },
];

export default function MicroForest() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? microImages
    : microImages.filter((img) => img.category === activeCategory);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  return (
    <div className="bg-forest-deep min-h-screen" ref={containerRef}>
      {/* Hero */}
      <section className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
        <p className="text-mist-grey text-xs uppercase tracking-[0.35em] font-semibold mb-6">
          Extreme Macro
        </p>
        <h1
          className="heading-display text-5xl md:text-7xl xl:text-8xl leading-[0.95] mb-8 max-w-3xl"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          Micro-<br />
          <em className="not-italic text-mist-grey">Forest</em>
        </h1>
        <p className="text-mist-light text-base md:text-lg max-w-xl leading-relaxed">
          The hidden world within the world. Fungi, insects, and dewdrops — each a universe unto itself, invisible to the hurried eye.
        </p>
        <div className="mt-10 w-16 border-t border-mist-grey/40" />
      </section>

      {/* Category Filter */}
      <section className="px-6 md:px-12 pb-10 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-[0.2em] font-semibold px-5 py-2.5 border transition-all duration-500 ${
                activeCategory === cat
                  ? 'bg-forest-surface border-mist-grey/50 text-fog-white'
                  : 'bg-transparent border-mist-grey/25 text-mist-grey hover:border-mist-grey/50 hover:text-mist-light'
              }`}
              style={{ borderRadius: '2px' }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 md:px-8 pb-24 max-w-[1600px] mx-auto">
        <div className="masonry-grid">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="masonry-item fog-card group relative overflow-hidden border-rugged cursor-pointer"
            >
              <span id={item.titleId} className="sr-only">{item.title}</span>
              <span id={item.descId} className="sr-only">{item.desc}</span>

              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full block object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]"
                style={{ backgroundColor: '#243028' }}
              />

              {/* Fog overlay */}
              <div className="fog-overlay absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/30 to-transparent pointer-events-none" />

              {/* Category badge */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-mist-grey bg-forest-deep/80 px-2 py-1">
                  {item.category}
                </span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                <p
                  className="text-fog-white text-sm font-bold leading-tight"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {item.title}
                </p>
                <p className="text-mist-grey text-xs mt-1 leading-snug line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
