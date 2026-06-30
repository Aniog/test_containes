import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

const PRICE_RANGES = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

const CATEGORIES = ['earrings', 'necklaces', 'huggies'];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? [cat] : [];
  });
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategories([cat]);
  }, [searchParams]);

  const filtered = products
    .filter(p => selectedCategories.length === 0 || selectedCategories.includes(p.category))
    .filter(p => {
      if (!selectedPriceRange) return true;
      return p.price >= selectedPriceRange.min && p.price < selectedPriceRange.max;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered.length, sort, selectedCategories.join(','), selectedPriceRange]);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange(null);
    setSearchParams({});
  };

  const hasFilters = selectedCategories.length > 0 || selectedPriceRange !== null;

  return (
    <div className="bg-velmora-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-2">
            {selectedCategories.length === 1
              ? selectedCategories[0].charAt(0).toUpperCase() + selectedCategories[0].slice(1)
              : 'All Jewelry'}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide">
            {selectedCategories.length === 1
              ? selectedCategories[0].charAt(0).toUpperCase() + selectedCategories[0].slice(1)
              : 'The Collection'}
          </h1>
          <p className="font-sans text-sm text-velmora-muted mt-2">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-border">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-velmora-muted hover:text-velmora-obsidian transition-colors duration-300 md:hidden"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              Filters
            </button>

            {/* Active filter pills */}
            {hasFilters && (
              <div className="flex items-center gap-2 flex-wrap">
                {selectedCategories.map(cat => (
                  <span
                    key={cat}
                    className="flex items-center gap-1 font-sans text-[10px] tracking-widest uppercase bg-velmora-obsidian text-velmora-ivory px-3 py-1"
                  >
                    {cat}
                    <button onClick={() => toggleCategory(cat)} className="ml-1 hover:text-velmora-gold">
                      <X size={10} />
                    </button>
                  </span>
                ))}
                {selectedPriceRange && (
                  <span className="flex items-center gap-1 font-sans text-[10px] tracking-widest uppercase bg-velmora-obsidian text-velmora-ivory px-3 py-1">
                    {selectedPriceRange.label}
                    <button onClick={() => setSelectedPriceRange(null)} className="ml-1 hover:text-velmora-gold">
                      <X size={10} />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="font-sans text-[10px] tracking-widest uppercase text-velmora-muted hover:text-velmora-gold transition-colors"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none font-sans text-xs tracking-widest uppercase text-velmora-muted bg-transparent border border-velmora-border px-4 py-2 pr-8 focus:outline-none focus:border-velmora-gold cursor-pointer"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-velmora-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar
              selectedCategories={selectedCategories}
              toggleCategory={toggleCategory}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
            />
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-velmora-obsidian/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-velmora-ivory p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans text-xs tracking-widest uppercase font-medium text-velmora-obsidian">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={18} strokeWidth={1.5} className="text-velmora-muted" />
                  </button>
                </div>
                <FilterSidebar
                  selectedCategories={selectedCategories}
                  toggleCategory={toggleCategory}
                  selectedPriceRange={selectedPriceRange}
                  setSelectedPriceRange={setSelectedPriceRange}
                />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl font-light text-velmora-muted">No pieces found</p>
                <button onClick={clearFilters} className="mt-4 font-sans text-xs tracking-widest uppercase text-velmora-gold">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ShopProductCard key={product.id} product={product} onAddToCart={() => addItem(product)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterSidebar({ selectedCategories, toggleCategory, selectedPriceRange, setSelectedPriceRange }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase font-medium text-velmora-obsidian mb-4">Category</h4>
        <div className="flex flex-col gap-2">
          {CATEGORIES.map(cat => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => toggleCategory(cat)}
                className={`w-4 h-4 border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  selectedCategories.includes(cat)
                    ? 'bg-velmora-obsidian border-velmora-obsidian'
                    : 'border-velmora-border group-hover:border-velmora-obsidian'
                }`}
              >
                {selectedCategories.includes(cat) && (
                  <span className="text-velmora-ivory text-[8px]">✓</span>
                )}
              </div>
              <span
                onClick={() => toggleCategory(cat)}
                className={`font-sans text-xs capitalize transition-colors duration-200 ${
                  selectedCategories.includes(cat) ? 'text-velmora-obsidian font-medium' : 'text-velmora-muted'
                }`}
              >
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="h-px bg-velmora-border" />

      {/* Price */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase font-medium text-velmora-obsidian mb-4">Price</h4>
        <div className="flex flex-col gap-2">
          {PRICE_RANGES.map(range => (
            <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => setSelectedPriceRange(selectedPriceRange?.label === range.label ? null : range)}
                className={`w-4 h-4 border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  selectedPriceRange?.label === range.label
                    ? 'bg-velmora-obsidian border-velmora-obsidian'
                    : 'border-velmora-border group-hover:border-velmora-obsidian'
                }`}
              >
                {selectedPriceRange?.label === range.label && (
                  <span className="text-velmora-ivory text-[8px]">✓</span>
                )}
              </div>
              <span
                onClick={() => setSelectedPriceRange(selectedPriceRange?.label === range.label ? null : range)}
                className={`font-sans text-xs transition-colors duration-200 ${
                  selectedPriceRange?.label === range.label ? 'text-velmora-obsidian font-medium' : 'text-velmora-muted'
                }`}
              >
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="h-px bg-velmora-border" />

      {/* Material */}
      <div>
        <h4 className="font-sans text-xs tracking-widest uppercase font-medium text-velmora-obsidian mb-4">Material</h4>
        <label className="flex items-center gap-3 cursor-pointer">
          <div className="w-4 h-4 border border-velmora-obsidian bg-velmora-obsidian flex items-center justify-center">
            <span className="text-velmora-ivory text-[8px]">✓</span>
          </div>
          <span className="font-sans text-xs text-velmora-obsidian font-medium">18K Gold Plated</span>
        </label>
      </div>
    </div>
  );
}

function ShopProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={`shop-${product.img2Id}`}
          data-strk-img={`[${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
        />

        {product.badge && (
          <span className="absolute top-3 left-3 font-sans text-[9px] tracking-widest uppercase font-medium bg-velmora-obsidian text-velmora-ivory px-2 py-1">
            {product.badge}
          </span>
        )}

        <button
          onClick={(e) => { e.preventDefault(); onAddToCart(); }}
          className={`absolute bottom-0 left-0 right-0 bg-velmora-obsidian/90 text-velmora-ivory font-sans text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
          <ShoppingBag size={12} strokeWidth={1.5} />
          Add to Cart
        </button>
      </Link>

      <div className="pt-3 flex flex-col gap-1">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={9} className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-border'} strokeWidth={1} />
          ))}
          <span className="font-sans text-[10px] text-velmora-subtle ml-1">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={product.titleId}
            className="font-sans text-[11px] tracking-widest uppercase font-medium text-velmora-obsidian hover:text-velmora-gold transition-colors duration-300"
          >
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-sans text-xs text-velmora-muted hidden">{product.subtitle}</p>
        <p className="font-sans text-sm font-medium text-velmora-obsidian">${product.price}</p>
      </div>
    </div>
  );
}
