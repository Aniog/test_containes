import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import products, { categories } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';
  const activePriceRange = searchParams.get('price') || '';

  const priceRanges = [
    { value: 'under-40', label: 'Under $40', min: 0, max: 40 },
    { value: '40-60', label: '$40 - $60', min: 40, max: 60 },
    { value: '60-80', label: '$60 - $80', min: 60, max: 80 },
    { value: 'over-80', label: 'Over $80', min: 80, max: Infinity },
  ];

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }

    if (activePriceRange) {
      const range = priceRanges.find((r) => r.value === activePriceRange);
      if (range) {
        result = result.filter(
          (p) => p.price >= range.min && p.price < range.max
        );
      }
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activePriceRange, sortBy]);

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSortBy('featured');
  };

  const hasActiveFilters = activeCategory || activePriceRange;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-widest font-medium text-ink-800 mb-4">Category</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setFilter('category', '')}
              className={`text-sm transition-colors ${
                !activeCategory ? 'text-ink-900 font-medium' : 'text-ink-500 hover:text-ink-800'
              }`}
            >
              All
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => setFilter('category', cat.id)}
                className={`text-sm transition-colors ${
                  activeCategory === cat.id ? 'text-ink-900 font-medium' : 'text-ink-500 hover:text-ink-800'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-px bg-ink-100" />

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-widest font-medium text-ink-800 mb-4">Price</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setFilter('price', '')}
              className={`text-sm transition-colors ${
                !activePriceRange ? 'text-ink-900 font-medium' : 'text-ink-500 hover:text-ink-800'
              }`}
            >
              All Prices
            </button>
          </li>
          {priceRanges.map((range) => (
            <li key={range.value}>
              <button
                onClick={() => setFilter('price', range.value)}
                className={`text-sm transition-colors ${
                  activePriceRange === range.value ? 'text-ink-900 font-medium' : 'text-ink-500 hover:text-ink-800'
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <main className="bg-cream-50 min-h-screen pt-20 lg:pt-24">
      {/* Page header */}
      <div className="bg-ink-950 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream-50 font-light tracking-wide">
            Shop
          </h1>
          <p className="text-cream-50/60 text-sm mt-2 font-light">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} found
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="mt-6 text-xs uppercase tracking-widest text-gold-600 hover:text-gold-700 transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-ink-100">
              <div className="flex items-center gap-3">
                {/* Mobile filter trigger */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-widest text-ink-700 hover:text-ink-900 transition-colors"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Filters
                  {hasActiveFilters && (
                    <span className="w-4 h-4 bg-gold-500 text-cream-50 rounded-full text-[10px] flex items-center justify-center font-medium">
                      !
                    </span>
                  )}
                </button>

                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="hidden lg:inline text-xs uppercase tracking-widest text-gold-600 hover:text-gold-700 transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-xs uppercase tracking-widest text-ink-700 pr-6 py-1 border-b border-ink-300 focus:outline-none focus:border-ink-600 cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Best Rated</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-ink-400 pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-ink-500">No pieces match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs uppercase tracking-widest text-gold-600 hover:text-gold-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3/4] bg-gradient-to-br from-gold-200/20 via-ink-100 to-ink-200 rounded-sm overflow-hidden">
                        <div className="w-full h-full group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/10 transition-colors duration-300" />
                      </div>
                    </Link>
                    <div className="mt-3 space-y-1">
                      <h3 className="text-[11px] uppercase tracking-widestplus font-medium text-ink-800 truncate">
                        <Link to={`/product/${product.id}`}>{product.name}</Link>
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                        <span className="text-[11px] text-ink-500">{product.rating}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-ink-900">${product.price}</p>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            addItem(product);
                          }}
                          className="p-1.5 text-ink-400 hover:text-gold-600 transition-colors"
                          aria-label="Quick add"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/40" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={`absolute left-0 top-0 bottom-0 w-72 bg-cream-50 shadow-xl transform transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-ink-100">
            <span className="text-sm font-medium text-ink-800">Filters</span>
            <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
              <X className="w-5 h-5 text-ink-500" />
            </button>
          </div>
          <div className="px-6 py-6 overflow-y-auto h-full pb-24">
            <FilterContent />
          </div>
        </div>
      </div>
    </main>
  );
}