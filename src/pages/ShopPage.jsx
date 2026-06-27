import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
];
const MATERIALS = ['All', '18K Gold Plated', 'Sterling Silver'];

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory === 'all' ? 'All' : initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1)
  );
  const [selectedPrice, setSelectedPrice] = useState(PRICE_RANGES[0]);
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  const filtered = products
    .filter(p => {
      const catMatch = selectedCategory === 'All' || p.category === selectedCategory.toLowerCase();
      const priceMatch = p.price >= selectedPrice.min && p.price <= selectedPrice.max;
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="bg-velmora-cream min-h-screen pt-20">
      {/* Page Header */}
      <div className="bg-velmora-linen border-b border-velmora-sand/60">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-velmora-gold mb-3">Velmora Fine Jewelry</p>
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-text-dark font-light">All Jewelry</h1>
          <p className="font-sans text-sm text-velmora-text-muted mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex gap-8">
          {/* Sidebar Filter — Desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
              selectedMaterial={selectedMaterial}
              setSelectedMaterial={setSelectedMaterial}
            />
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-sand/60">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-velmora-text-dark border border-velmora-sand px-4 py-2.5 hover:border-velmora-obsidian transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>

              {/* Active Filters */}
              <div className="hidden lg:flex items-center gap-2 flex-wrap">
                {selectedCategory !== 'All' && (
                  <FilterTag label={selectedCategory} onRemove={() => setSelectedCategory('All')} />
                )}
                {selectedPrice.label !== 'All Prices' && (
                  <FilterTag label={selectedPrice.label} onRemove={() => setSelectedPrice(PRICE_RANGES[0])} />
                )}
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="font-sans text-xs text-velmora-text-muted uppercase tracking-wider hidden md:block">Sort:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none font-sans text-xs uppercase tracking-wider text-velmora-text-dark bg-transparent border border-velmora-sand px-4 py-2.5 pr-8 focus:outline-none focus:border-velmora-obsidian cursor-pointer"
                  >
                    {SORT_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-text-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div ref={containerRef}>
              {/* Hidden text nodes */}
              {filtered.map(p => (
                <span key={`shop-text-${p.id}`} className="hidden">
                  <span id={p.images[0].titleId}>{p.titleText}</span>
                  <span id={p.images[0].descId}>{p.descText}</span>
                  <span id={p.images[1].titleId}>{p.title2Text}</span>
                  <span id={p.images[1].descId}>{p.desc2Text}</span>
                </span>
              ))}

              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-2xl text-velmora-text-dark mb-3">No pieces found</p>
                  <p className="font-sans text-sm text-velmora-text-muted">Try adjusting your filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filtered.map(p => (
                    <ProductCard
                      key={p.id}
                      product={p}
                      imgId={p.images[0].id}
                      imgQuery={`[${p.images[0].descId}] [${p.images[0].titleId}]`}
                      img2Id={p.images[1].id}
                      img2Query={`[${p.images[1].descId}] [${p.images[1].titleId}]`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {filterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-velmora-obsidian/50" onClick={() => setFilterOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-velmora-cream overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/60">
              <span className="font-sans text-xs uppercase tracking-widest font-semibold text-velmora-text-dark">Filters</span>
              <button onClick={() => setFilterOpen(false)} className="text-velmora-text-muted hover:text-velmora-text-dark">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterSidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={(v) => { setSelectedCategory(v); setFilterOpen(false); }}
                selectedPrice={selectedPrice}
                setSelectedPrice={(v) => { setSelectedPrice(v); setFilterOpen(false); }}
                selectedMaterial={selectedMaterial}
                setSelectedMaterial={setSelectedMaterial}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterSidebar({ selectedCategory, setSelectedCategory, selectedPrice, setSelectedPrice, selectedMaterial, setSelectedMaterial }) {
  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest font-semibold text-velmora-text-dark mb-4">Category</h3>
        <div className="space-y-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                selectedCategory === cat
                  ? 'text-velmora-text-dark font-semibold'
                  : 'text-velmora-text-muted hover:text-velmora-text-dark'
              }`}
            >
              {selectedCategory === cat && <span className="text-velmora-gold mr-2">—</span>}
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-velmora-sand/60" />

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest font-semibold text-velmora-text-dark mb-4">Price</h3>
        <div className="space-y-2">
          {PRICE_RANGES.map(range => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(range)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                selectedPrice.label === range.label
                  ? 'text-velmora-text-dark font-semibold'
                  : 'text-velmora-text-muted hover:text-velmora-text-dark'
              }`}
            >
              {selectedPrice.label === range.label && <span className="text-velmora-gold mr-2">—</span>}
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-velmora-sand/60" />

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest font-semibold text-velmora-text-dark mb-4">Material</h3>
        <div className="space-y-2">
          {MATERIALS.map(mat => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors ${
                selectedMaterial === mat
                  ? 'text-velmora-text-dark font-semibold'
                  : 'text-velmora-text-muted hover:text-velmora-text-dark'
              }`}
            >
              {selectedMaterial === mat && <span className="text-velmora-gold mr-2">—</span>}
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function FilterTag({ label, onRemove }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-velmora-linen border border-velmora-sand/60">
      <span className="font-sans text-xs text-velmora-text-dark">{label}</span>
      <button onClick={onRemove} className="text-velmora-text-muted hover:text-velmora-text-dark">
        <X className="w-3 h-3" />
      </button>
    </div>
  );
}
