import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown, ShoppingBag } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import StarRating from '@/components/ui/StarRating';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-ink-100 rounded-sm">
          <img
            src={product.images[0]}
            alt={product.displayName}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-luxury ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
            loading="lazy"
          />
          <img
            src={product.hoverImage}
            alt={`${product.displayName} alternate`}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-luxury ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          addItem(product, 'Gold', 1);
        }}
        className={`absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 bg-white/95 backdrop-blur-sm py-2.5 text-xs tracking-widest uppercase font-medium text-ink-900 shadow-sm transition-all duration-500 ease-luxury ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <ShoppingBag size={14} strokeWidth={1.5} />
        Add to Cart
      </button>

      <div className="mt-3 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-xs sm:text-sm tracking-widest uppercase text-ink-900 group-hover:text-gold-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="mt-1 flex items-center justify-center gap-2">
          <StarRating rating={product.rating} size={11} />
          <span className="text-[11px] text-ink-400">({product.reviewCount})</span>
        </div>
        <p className="mt-1 text-sm font-medium text-ink-700">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const togglePrice = (idx) => {
    setSelectedPrices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
  };

  const filtered = useMemo(() => {
    let list = [...products];

    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      list = list.filter((p) =>
        selectedPrices.some((idx) => {
          const r = priceRanges[idx];
          return p.price >= r.min && p.price < r.max;
        })
      );
    }

    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [selectedCategories, selectedPrices, sort]);

  const activeFilterCount = selectedCategories.length + selectedPrices.length;

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="font-serif text-sm tracking-widest uppercase text-ink-900">Category</p>
          {activeFilterCount > 0 && (
            <button onClick={clearFilters} className="text-[11px] text-ink-400 underline hover:text-ink-700">
              Clear all
            </button>
          )}
        </div>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <div
                className={cn(
                  'w-4 h-4 border rounded-sm flex items-center justify-center transition-colors',
                  selectedCategories.includes(cat.id)
                    ? 'bg-ink-900 border-ink-900'
                    : 'border-ink-300 group-hover:border-ink-500'
                )}
              >
                {selectedCategories.includes(cat.id) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
              />
              <span className="text-sm text-ink-700">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="font-serif text-sm tracking-widest uppercase text-ink-900 mb-4">Price</p>
        <div className="space-y-2.5">
          {priceRanges.map((r, idx) => (
            <label key={idx} className="flex items-center gap-3 cursor-pointer group">
              <div
                className={cn(
                  'w-4 h-4 border rounded-sm flex items-center justify-center transition-colors',
                  selectedPrices.includes(idx)
                    ? 'bg-ink-900 border-ink-900'
                    : 'border-ink-300 group-hover:border-ink-500'
                )}
              >
                {selectedPrices.includes(idx) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedPrices.includes(idx)}
                onChange={() => togglePrice(idx)}
              />
              <span className="text-sm text-ink-700">{r.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="font-serif text-sm tracking-widest uppercase text-ink-900 mb-4">Material</p>
        <div className="flex flex-wrap gap-2">
          {['18K Gold Plated', 'Sterling Silver'].map((m) => (
            <span
              key={m}
              className="px-3 py-1.5 text-xs border border-ink-200 rounded-sm text-ink-600 bg-white"
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="bg-cream-50 pt-20 sm:pt-24 min-h-screen">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="font-serif text-3xl sm:text-4xl text-ink-900 text-center">
          Shop All Jewelry
        </h1>
        <p className="mt-3 text-center text-sm text-ink-500 max-w-lg mx-auto">
          Discover our curated collection of demi-fine gold jewelry. Designed to be worn, loved, and treasured.
        </p>
      </div>

      {/* Toolbar */}
      <div className="border-b border-ink-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-ink-700"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filter
            {activeFilterCount > 0 && (
              <span className="bg-ink-900 text-cream-50 text-[10px] px-1.5 py-0.5 rounded-full">{activeFilterCount}</span>
            )}
          </button>

          <div className="hidden lg:block text-sm text-ink-500">
            {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          </div>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-widest uppercase font-medium text-ink-700 pr-6 py-1 focus:outline-none cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-ink-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-ink-500">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-3 text-xs tracking-widest uppercase text-gold-600 underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-[70] bg-ink-900/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 z-[80] h-full w-80 max-w-[85vw] bg-cream-50 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-ink-200">
              <h2 className="font-serif text-lg tracking-widest uppercase text-ink-900">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close">
                <X size={20} className="text-ink-500" />
              </button>
            </div>
            <div className="p-5">
              <FilterContent />
            </div>
            <div className="p-5 border-t border-ink-200">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full bg-ink-900 text-cream-50 py-3.5 text-xs tracking-widest uppercase font-medium rounded-sm"
              >
                Show {filtered.length} {filtered.length === 1 ? 'Product' : 'Products'}
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
