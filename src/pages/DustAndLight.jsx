import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { X, ZoomIn } from 'lucide-react';

const textureItems = [
  // Dry grass & earth
  {
    id: 'dry-grass-1',
    titleId: 'texture-dry-grass-1-title',
    descId: 'texture-dry-grass-1-desc',
    imgId: 'texture-dry-grass-1-a1b2c3',
    title: 'Parched Earth',
    description: 'Cracked clay and bleached grass stems — the savanna in the dry season, waiting for rain.',
    category: 'Earth',
    size: 'large',
  },
  {
    id: 'grass-blades',
    titleId: 'texture-grass-blades-title',
    descId: 'texture-grass-blades-desc',
    imgId: 'texture-grass-blades-d4e5f6',
    title: 'Golden Blades',
    description: 'Backlit grass stems catch the last light of afternoon, each blade a filament of amber.',
    category: 'Grass',
    size: 'small',
  },
  {
    id: 'dust-cloud',
    titleId: 'texture-dust-cloud-title',
    descId: 'texture-dust-cloud-desc',
    imgId: 'texture-dust-cloud-g7h8i9',
    title: 'Dust Rising',
    description: 'A herd passes and the earth exhales — columns of red dust rising into the heat-white sky.',
    category: 'Atmosphere',
    size: 'small',
  },
  // Elephant skin
  {
    id: 'elephant-skin',
    titleId: 'texture-elephant-skin-title',
    descId: 'texture-elephant-skin-desc',
    imgId: 'texture-elephant-skin-j1k2l3',
    title: 'Ancient Skin',
    description: 'The deeply furrowed hide of an elephant — a topographic map of decades lived under the African sun.',
    category: 'Wildlife',
    size: 'large',
  },
  {
    id: 'elephant-eye',
    titleId: 'texture-elephant-eye-title',
    descId: 'texture-elephant-eye-desc',
    imgId: 'texture-elephant-eye-m4n5o6',
    title: 'The Knowing Eye',
    description: 'Framed by wrinkled skin and long lashes, an elephant\'s eye holds the memory of the herd.',
    category: 'Wildlife',
    size: 'small',
  },
  {
    id: 'zebra-stripes',
    titleId: 'texture-zebra-stripes-title',
    descId: 'texture-zebra-stripes-desc',
    imgId: 'texture-zebra-stripes-p7q8r9',
    title: 'Stripe Pattern',
    description: 'The bold geometry of zebra stripes — nature\'s most striking camouflage, dissolving in the heat shimmer.',
    category: 'Wildlife',
    size: 'small',
  },
  // Sunset silhouettes
  {
    id: 'acacia-silhouette',
    titleId: 'texture-acacia-title',
    descId: 'texture-acacia-desc',
    imgId: 'texture-acacia-silhouette-s1t2u3',
    title: 'Acacia at Dusk',
    description: 'The iconic flat-topped acacia, silhouetted against a burning orange sky — the symbol of Africa.',
    category: 'Silhouette',
    size: 'large',
  },
  {
    id: 'giraffe-silhouette',
    titleId: 'texture-giraffe-sil-title',
    descId: 'texture-giraffe-sil-desc',
    imgId: 'texture-giraffe-silhouette-v4w5x6',
    title: 'Long Neck at Sunset',
    description: 'A giraffe\'s elongated form cuts a perfect silhouette against the molten horizon.',
    category: 'Silhouette',
    size: 'small',
  },
  {
    id: 'elephant-silhouette',
    titleId: 'texture-elephant-sil-title',
    descId: 'texture-elephant-sil-desc',
    imgId: 'texture-elephant-silhouette-y7z8a9',
    title: 'Elephant Procession',
    description: 'A family of elephants moves in single file across the ridge, their shapes merging with the dusk.',
    category: 'Silhouette',
    size: 'small',
  },
  // Bark & rock
  {
    id: 'baobab-bark',
    titleId: 'texture-baobab-title',
    descId: 'texture-baobab-desc',
    imgId: 'texture-baobab-bark-b1c2d3',
    title: 'Baobab Bark',
    description: 'The smooth, silver-grey bark of the baobab — the "tree of life" that stores thousands of litres of water.',
    category: 'Earth',
    size: 'small',
  },
  {
    id: 'kopje-rock',
    titleId: 'texture-kopje-title',
    descId: 'texture-kopje-desc',
    imgId: 'texture-kopje-rock-e4f5g6',
    title: 'Kopje Stone',
    description: 'Ancient granite outcroppings rise from the plain — islands of rock that shelter leopards and klipspringers.',
    category: 'Earth',
    size: 'small',
  },
  {
    id: 'sunrise-mist',
    titleId: 'texture-sunrise-title',
    descId: 'texture-sunrise-desc',
    imgId: 'texture-sunrise-mist-h7i8j9',
    title: 'Dawn Mist',
    description: 'Morning mist rolls across the valley floor as the sun crests the escarpment, burning gold through the haze.',
    category: 'Atmosphere',
    size: 'large',
  },
];

const categories = ['All', 'Earth', 'Grass', 'Wildlife', 'Silhouette', 'Atmosphere'];

function TextureCard({ item, onOpen }) {
  const isLarge = item.size === 'large';

  return (
    <div
      className={`texture-item rounded-sm overflow-hidden cursor-pointer group relative ${
        isLarge ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      onClick={() => onOpen(item)}
    >
      <div className={`${isLarge ? 'aspect-[4/3]' : 'aspect-square'} relative overflow-hidden`}>
        <img
          data-strk-img-id={item.imgId}
          data-strk-img={`[${item.descId}] [${item.titleId}] texture close-up macro photography`}
          data-strk-img-ratio={isLarge ? '4x3' : '1x1'}
          data-strk-img-width={isLarge ? '1200' : '600'}
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={item.title}
          className="w-full h-full object-cover"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-earth-dark/0 group-hover:bg-earth-dark/50 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center gap-2">
            <ZoomIn size={28} className="text-savanna-cream" />
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-savanna-cream">
              View
            </span>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <span className="font-sans text-xs tracking-[0.15em] uppercase px-2 py-1 bg-burnt-orange/80 text-savanna-cream rounded-sm">
            {item.category}
          </span>
        </div>
      </div>

      {/* Caption */}
      <div className="p-4 bg-earth-brown/40">
        <h3 id={item.titleId} className="font-serif text-base font-bold text-savanna-cream mb-1">
          {item.title}
        </h3>
        <p id={item.descId} className="font-serif-display text-xs italic text-savanna-warm/70 leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function LightboxModal({ item, onClose, containerRef }) {
  useEffect(() => {
    if (item && containerRef?.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [item, containerRef]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-earth-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-earth-brown/30 rounded-sm overflow-hidden border border-burnt-orange/20 panel-dissolve-enter"
        onClick={(e) => e.stopPropagation()}
        ref={containerRef}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-earth-dark/60 border border-savanna-cream/20 flex items-center justify-center text-savanna-cream hover:bg-burnt-orange/60 transition-all duration-300"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="aspect-[4/3] overflow-hidden">
          <img
            data-strk-img-id={`lightbox-${item.imgId}`}
            data-strk-img={`[lightbox-${item.descId}] [lightbox-${item.titleId}] texture detail`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={item.title}
            className="w-full h-full object-cover"
            style={{ filter: 'saturate(1.1) contrast(1.08)' }}
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h2 id={`lightbox-${item.titleId}`} className="font-serif text-2xl md:text-3xl font-bold text-savanna-cream">
              {item.title}
            </h2>
            <span className="font-sans text-xs tracking-[0.15em] uppercase px-3 py-1 border border-burnt-orange/40 text-burnt-orange-light rounded-sm shrink-0">
              {item.category}
            </span>
          </div>
          <p id={`lightbox-${item.descId}`} className="font-serif-display text-base italic text-savanna-warm/80 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DustAndLight() {
  const containerRef = useRef(null);
  const lightboxRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);

  const filtered = activeCategory === 'All'
    ? textureItems
    : textureItems.filter(t => t.category === activeCategory);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, [activeCategory]);

  return (
    <div ref={containerRef} className="min-h-screen bg-earth-dark">
      {/* Hero */}
      <div className="relative pt-32 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            data-strk-img-id="dust-hero-bg-k1l2m3"
            data-strk-img="[dust-hero-title] dry savanna grass texture golden light"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Savanna textures"
            className="parallax-img opacity-25"
            style={{ filter: 'saturate(1.3) contrast(1.1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-earth-dark/50 via-earth-dark/30 to-earth-dark" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-burnt-orange mb-4 animate-slide-up">
            Visual Study
          </p>
          <h1
            id="dust-hero-title"
            className="font-serif text-5xl md:text-7xl font-bold text-savanna-cream leading-none mb-4 animate-slide-up delay-100"
          >
            Dust &amp; Light
          </h1>
          <p className="font-serif-display text-xl md:text-2xl italic text-ochre-pale mb-6 animate-slide-up delay-200">
            The Textures of the Prairie
          </p>
          <p className="font-serif-display text-base md:text-lg text-savanna-warm/70 max-w-xl leading-relaxed animate-slide-up delay-300">
            Beyond the drama of predator and prey lies a quieter beauty — the grain of
            elephant skin, the geometry of cracked earth, the way light dissolves into
            dust at the edge of the world.
          </p>
          <div className="mt-8 w-16 h-px bg-burnt-orange animate-slide-up delay-400" />
        </div>
      </div>

      {/* Category filter */}
      <div className="sticky top-16 z-30 bg-earth-dark/95 backdrop-blur-md border-b border-burnt-orange/15 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto pb-1">
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-savanna-warm/50 mr-2 shrink-0">
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 font-sans text-xs tracking-[0.15em] uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-burnt-orange border-burnt-orange text-savanna-cream'
                  : 'border-burnt-orange/30 text-savanna-warm/70 hover:border-burnt-orange/60 hover:text-savanna-cream'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry-style grid */}
      <section className="py-12 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 auto-rows-auto">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`animate-slide-up ${item.size === 'large' ? 'sm:col-span-2 sm:row-span-2' : ''}`}
              style={{ animationDelay: `${(i % 4) * 0.08 + 0.05}s`, opacity: 0 }}
            >
              <TextureCard item={item} onOpen={setLightboxItem} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-serif text-2xl text-savanna-warm/50">No textures in this category</p>
          </div>
        )}
      </section>

      {/* Pull quote */}
      <section className="py-20 px-6 md:px-12 border-t border-burnt-orange/20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-3xl md:text-4xl font-light italic text-savanna-cream leading-relaxed mb-6">
            "The Serengeti is not a place you visit. It is a place that enters you — through the dust, through the light, through the sound of ten thousand hooves."
          </p>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-burnt-orange">
            — Field Notes, Serengeti Pulse
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-burnt-orange/20 py-12 px-6 md:px-12 text-center">
        <p className="font-serif text-2xl font-bold text-savanna-cream mb-2">Serengeti Pulse</p>
        <p className="font-serif-display text-sm italic text-savanna-warm/60">
          Documenting the heartbeat of the wild
        </p>
      </footer>

      {/* Lightbox */}
      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        containerRef={lightboxRef}
      />
    </div>
  );
}
