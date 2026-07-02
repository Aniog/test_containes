import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const CATEGORIES = ['earrings', 'necklaces', 'huggies', 'sets'];
const PRICE_RANGES = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-espresso text-warm-white font-sans text-[9px] tracking-widest uppercase px-2 py-1">Bestseller</span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-gold text-espresso font-sans text-[9px] tracking-widest uppercase px-2 py-1">New</span>
          )}
        </div>

        <div className={`absolute bottom-0 left-0 right-0 transition-transform duration-300 ${hovered ? 'translate-y-0' : 'translate-y-full'}`}>
          <button
            onClick={handleAdd}
            className="w-full bg-espresso/90 backdrop-blur-sm text-warm-white font-sans text-[10px] tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-espresso transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      <p id={`shop-${product.titleId}`} className="font-sans text-[10px] tracking-widest uppercase text-ink font-medium">
        {product.name}
      </p>
      <p id={`shop-${product.descId}`} className="font-sans text-xs text-muted mt-1 line-clamp-1">
        {product.shortDescription}
      </p>
      <div className="flex items-center justify-between mt-2">
        <span className="font-serif text-base text-ink">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star size={10} fill="#c9a96e" stroke="none" />
          <span className="font-sans text-[10px] text-muted">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? [cat] : [];
  });
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategories, selectedPriceRange, sortBy]);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const filtered = products
    .filter(p => selectedCategories.length === 0 || selectedCategories.includes(p.category))
    .filter(p => {
      if (!selectedPriceRange) return true;
      return p.price >= selectedPriceRange.min && p.price < selectedPriceRange.max;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const activeFiltersCount = selectedCategories.length + (selectedPriceRange ? 1 : 0);

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Category filter */}
      <div>
        <h4 className="font-sans text-[10px] tracking-widest uppercase text-ink font-medium mb-4">Category</h4>
        <div className="space-y-2.5">
          {CATEGORIES.map(cat => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => toggleCategory(cat)}
                className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-colors cursor-pointer ${
                  selectedCategories.includes(cat) ? 'bg-espresso border-espresso' : 'border-linen group-hover:border-muted'
                }`}
              >
                {selectedCategories.includes(cat) && (
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5L7 1" stroke="#faf7f2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span
                onClick={() => toggleCategory(cat)}
                className="font-sans text-xs capitalize text-muted group-hover:text-ink transition-colors cursor-pointer"
              >
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* Price filter */}
      <div>
        <h4 className="font-sans text-[10px] tracking-widest uppercase text-ink font-medium mb-4">Price</h4>
        <div className="space-y-2.5">
          {PRICE_RANGES.map(range => (
            <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => setSelectedPriceRange(selectedPriceRange?.label === range.label ? null : range)}
                className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-colors cursor-pointer ${
                  selectedPriceRange?.label === range.label ? 'bg-espresso border-espresso' : 'border-linen group-hover:border-muted'
                }`}
              >
                {selectedPriceRange?.label === range.label && (
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5L7 1" stroke="#faf7f2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span
                onClick={() => setSelectedPriceRange(selectedPriceRange?.label === range.label ? null : range)}
                className="font-sans text-xs text-muted group-hover:text-ink transition-colors cursor-pointer"
              >
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {activeFiltersCount > 0 && (
        <>
          <hr className="divider" />
          <button
            onClick={() => { setSelectedCategories([]); setSelectedPriceRange(null); }}
            className="font-sans text-[10px] tracking-widest uppercase text-muted hover:text-gold transition-colors"
          >
            Clear All Filters
          </button>
        </>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="bg-warm-white min-h-screen pt-16 lg:pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-linen">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16">
          <p className="font-sans text-[10px] tracking-widest uppercase text-gold mb-2">All pieces</p>
          <h1 className="font-serif text-4xl lg:text-5xl text-ink font-light">The Collection</h1>
          <p className="font-sans text-sm text-muted mt-3 max-w-md">
            Demi-fine gold jewelry designed for everyday luxury. Each piece crafted to be worn, loved, and treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-linen">
          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="lg:hidden flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase text-ink hover:text-gold transition-colors"
            >
              <SlidersHorizontal size={13} strokeWidth={1.5} />
              Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
            </button>

            {/* Active filter pills */}
            <div className="hidden sm:flex flex-wrap gap-2">
              {selectedCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => toggleCategory(cat)}
                  className="flex items-center gap-1.5 bg-cream border border-linen font-sans text-[9px] tracking-widest uppercase text-muted px-3 py-1.5 hover:border-muted transition-colors"
                >
                  {cat} <X size={9} strokeWidth={2} />
                </button>
              ))}
              {selectedPriceRange && (
                <button
                  onClick={() => setSelectedPriceRange(null)}
                  className="flex items-center gap-1.5 bg-cream border border-linen font-sans text-[9px] tracking-widest uppercase text-muted px-3 py-1.5 hover:border-muted transition-colors"
                >
                  {selectedPriceRange.label} <X size={9} strokeWidth={2} />
                </button>
              )}
            </div>

            <span className="font-sans text-xs text-ghost">{filtered.length} pieces</span>
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(v => !v)}
              className="flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase text-muted hover:text-ink transition-colors"
            >
              Sort: {SORT_OPTIONS.find(o => o.value === sortBy)?.label}
              <ChevronDown size={12} strokeWidth={1.5} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-warm-white border border-linen shadow-card z-20 min-w-[180px]">
                {SORT_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    className={`w-full text-left px-4 py-3 font-sans text-xs transition-colors hover:bg-cream ${
                      sortBy === opt.value ? 'text-gold' : 'text-muted'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="lg:hidden fixed inset-0 z-50 flex">
              <div className="drawer-overlay" onClick={() => setFilterOpen(false)} />
              <div className="relative bg-warm-white w-72 h-full overflow-y-auto p-6 ml-auto">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans text-[11px] tracking-widest uppercase text-ink font-medium">Filters</span>
                  <button onClick={() => setFilterOpen(false)} className="text-muted hover:text-ink">
                    <X size={16} strokeWidth={1.5} />
                  </button>
                </div>
                <FilterPanel />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-muted font-light mb-3">No pieces found</p>
                <p className="font-sans text-sm text-ghost mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => { setSelectedCategories([]); setSelectedPriceRange(null); }}
                  className="font-sans text-[10px] tracking-widest uppercase text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
                {filtered.map(p => (
                  <ShopProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
