import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { products, categories } from '@/data/products';

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: '75-plus', label: '$75+', min: 75, max: Infinity },
];

const materials = [
  { id: 'gold', label: '18K Gold' },
  { id: 'silver', label: 'Sterling Silver' },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'newest', label: 'Newest' },
  { id: 'rating', label: 'Highest Rated' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categoryFilter = searchParams.get('category') || 'all';
  const priceFilter = searchParams.get('price') || 'all';
  const materialFilter = searchParams.get('material') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (categoryFilter !== 'all') {
      result = result.filter((p) => p.category === categoryFilter);
    }

    // Price filter
    if (priceFilter !== 'all') {
      const range = priceRanges.find((r) => r.id === priceFilter);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    // Material filter
    if (materialFilter !== 'all') {
      result = result.filter((p) => p.material === materialFilter);
    }

    // Sort
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
      case 'newest':
        result.reverse();
        break;
      default:
        break;
    }

    return result;
  }, [categoryFilter, priceFilter, materialFilter, sortBy]);

  const activeFiltersCount = [categoryFilter, priceFilter, materialFilter].filter(
    (v) => v !== 'all'
  ).length;

  const clearAllFilters = () => {
    setSearchParams({});
  };

  const FilterSidebar = ({ className = '' }) => (
    <div className={className}>
      <div className="space-y-8">
        {/* Category */}
        <div>
          <h3 className="font-sans text-xs tracking-widest uppercase text-ink-700 mb-3">
            Category
          </h3>
          <div className="space-y-2">
            <button
              onClick={() => updateParam('category', 'all')}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                categoryFilter === 'all' ? 'text-gold-600 font-medium' : 'text-ink-500 hover:text-ink-700'
              }`}
            >
              All Jewelry
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => updateParam('category', cat.id)}
                className={`block text-sm w-full text-left py-1 transition-colors ${
                  categoryFilter === cat.id ? 'text-gold-600 font-medium' : 'text-ink-500 hover:text-ink-700'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <h3 className="font-sans text-xs tracking-widest uppercase text-ink-700 mb-3">
            Price
          </h3>
          <div className="space-y-2">
            <button
              onClick={() => updateParam('price', 'all')}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                priceFilter === 'all' ? 'text-gold-600 font-medium' : 'text-ink-500 hover:text-ink-700'
              }`}
            >
              All Prices
            </button>
            {priceRanges.map((range) => (
              <button
                key={range.id}
                onClick={() => updateParam('price', range.id)}
                className={`block text-sm w-full text-left py-1 transition-colors ${
                  priceFilter === range.id ? 'text-gold-600 font-medium' : 'text-ink-500 hover:text-ink-700'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {/* Material */}
        <div>
          <h3 className="font-sans text-xs tracking-widest uppercase text-ink-700 mb-3">
            Material
          </h3>
          <div className="space-y-2">
            <button
              onClick={() => updateParam('material', 'all')}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                materialFilter === 'all' ? 'text-gold-600 font-medium' : 'text-ink-500 hover:text-ink-700'
              }`}
            >
              All Materials
            </button>
            {materials.map((mat) => (
              <button
                key={mat.id}
                onClick={() => updateParam('material', mat.id)}
                className={`block text-sm w-full text-left py-1 transition-colors ${
                  materialFilter === mat.id ? 'text-gold-600 font-medium' : 'text-ink-500 hover:text-ink-700'
                }`}
              >
                {mat.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="section-subtitle mb-3">Discover</p>
          <h1 className="section-title">Shop All Jewelry</h1>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gold-200/60">
          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-ink-600 hover:text-gold-600 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-gold-400 text-ink-800 text-[10px] font-bold rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Active filters (desktop) */}
            {activeFiltersCount > 0 && (
              <div className="hidden lg:flex items-center gap-2">
                {categoryFilter !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-50 text-gold-700 text-xs tracking-wider uppercase border border-gold-200">
                    {categories.find((c) => c.id === categoryFilter)?.name}
                    <button onClick={() => updateParam('category', 'all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {priceFilter !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-50 text-gold-700 text-xs tracking-wider uppercase border border-gold-200">
                    {priceRanges.find((r) => r.id === priceFilter)?.label}
                    <button onClick={() => updateParam('price', 'all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {materialFilter !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-50 text-gold-700 text-xs tracking-wider uppercase border border-gold-200">
                    {materials.find((m) => m.id === materialFilter)?.label}
                    <button onClick={() => updateParam('material', 'all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-ink-400 hover:text-ink-600 underline transition-colors"
                >
                  Clear all
                </button>
              </div>
            )}

            <p className="text-sm text-ink-400 font-sans">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => updateParam('sort', e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs tracking-wider uppercase text-ink-600 pr-6 pl-2 py-2 border border-ink-200 focus:outline-none focus:border-gold-400 cursor-pointer transition-colors"
            >
              {sortOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-ink-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar (desktop) */}
          <FilterSidebar className="hidden lg:block w-56 flex-shrink-0" />

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-ink-600 mb-3">No products found</p>
                <p className="text-sm text-ink-400 mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button onClick={clearAllFilters} className="btn-outline">
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink-900/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-ivory-50 shadow-2xl animate-slide-in-right overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gold-200">
              <h2 className="font-serif text-lg tracking-wide text-ink-800">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 hover:text-gold-500 transition-colors text-ink-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterSidebar />
            </div>
            <div className="sticky bottom-0 bg-ivory-50 border-t border-gold-200 px-6 py-4">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="btn-primary w-full"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
