import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import products from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const categories = [
  { label: 'All', value: '' },
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Huggies', value: 'huggies' },
];

const priceRanges = [
  { label: 'All Prices', value: '' },
  { label: 'Under $50', value: '0-50' },
  { label: '$50 – $75', value: '50-75' },
  { label: '$75 – $100', value: '75-100' },
];

const materials = [
  { label: 'All Materials', value: '' },
  { label: 'Gold', value: 'gold' },
  { label: 'Silver', value: 'silver' },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activePrice = searchParams.get('price') || '';
  const activeMaterial = searchParams.get('material') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearAll = () => {
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial);
    }
    if (activePrice) {
      const [min, max] = activePrice.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    switch (activeSort) {
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
  }, [activeCategory, activePrice, activeMaterial, activeSort]);

  const hasFilters = activeCategory || activePrice || activeMaterial;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-serif text-sm tracking-wide uppercase mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => updateFilter('category', cat.value)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.value
                  ? 'text-gold font-medium'
                  : 'text-ink-500 hover:text-ink-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-serif text-sm tracking-wide uppercase mb-3">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((pr) => (
            <button
              key={pr.value}
              onClick={() => updateFilter('price', pr.value)}
              className={`block text-sm transition-colors ${
                activePrice === pr.value
                  ? 'text-gold font-medium'
                  : 'text-ink-500 hover:text-ink-800'
              }`}
            >
              {pr.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-serif text-sm tracking-wide uppercase mb-3">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat.value}
              onClick={() => updateFilter('material', mat.value)}
              className={`block text-sm transition-colors ${
                activeMaterial === mat.value
                  ? 'text-gold font-medium'
                  : 'text-ink-500 hover:text-ink-800'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearAll}
          className="text-xs text-ink-400 hover:text-gold transition-colors underline underline-offset-4"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 py-8 md:py-12">
        {/* Header */}
        <div className="mb-10">
          <p className="font-sans text-xs tracking-[0.28em] uppercase text-ink-400 mb-3">
            Velmora Collection
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-light tracking-wide">
            {activeCategory
              ? categories.find((c) => c.value === activeCategory)?.label
              : 'Shop All'}
          </h1>
        </div>

        <div className="flex gap-10 lg:gap-16">
          {/* Sidebar - desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-ink-100">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-ink-600 hover:text-gold transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
                {hasFilters && (
                  <span className="w-4 h-4 bg-gold text-white text-[10px] rounded-full flex items-center justify-center">
                    !
                  </span>
                )}
              </button>

              <p className="text-xs text-ink-400 hidden lg:block">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-ink-400 hidden md:inline">Sort by:</span>
                <div className="relative">
                  <select
                    value={activeSort}
                    onChange={(e) => updateFilter('sort', e.target.value)}
                    className="appearance-none bg-transparent pr-6 py-1 text-xs font-medium tracking-wider uppercase text-ink-700 cursor-pointer outline-none"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-ink-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-ink-400 text-sm mb-4">No pieces match your filters.</p>
                <button onClick={clearAll} className="btn-outline text-xs">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-charcoal/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed bottom-0 inset-x-0 z-[70] bg-cream rounded-t-2xl shadow-2xl p-6 lg:hidden animate-slide-up max-h-[70vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg tracking-wide">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1 hover:text-gold transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="btn-primary w-full mt-8"
            >
              Show Results ({filteredProducts.length})
            </button>
          </div>
        </>
      )}
    </div>
  );
}