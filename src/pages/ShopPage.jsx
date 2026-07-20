import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories, priceRanges } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';
  const activePriceRange = searchParams.get('price') || '';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePriceRange) {
      const range = priceRanges.find((r) => r.id === activePriceRange);
      if (range) {
        result = result.filter(
          (p) => p.price >= range.min && p.price < range.max
        );
      }
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        break;
    }

    return result;
  }, [activeCategory, activePriceRange, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory || activePriceRange;

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? 'p-6' : ''}`}>
      {/* Category filter */}
      <div className="mb-8">
        <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone-950 mb-4">
          Category
        </h3>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => updateFilter('category', '')}
            className={`font-sans text-xs text-left transition-colors ${
              !activeCategory
                ? 'text-stone-950 font-medium'
                : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.id)}
              className={`font-sans text-xs text-left transition-colors ${
                activeCategory === cat.id
                  ? 'text-stone-950 font-medium'
                  : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div className="mb-8">
        <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone-950 mb-4">
          Price
        </h3>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => updateFilter('price', '')}
            className={`font-sans text-xs text-left transition-colors ${
              !activePriceRange
                ? 'text-stone-950 font-medium'
                : 'text-stone-500 hover:text-stone-700'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => updateFilter('price', range.id)}
              className={`font-sans text-xs text-left transition-colors ${
                activePriceRange === range.id
                  ? 'text-stone-950 font-medium'
                  : 'text-stone-500 hover:text-stone-700'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="font-sans text-[10px] uppercase tracking-[0.15em] text-gold-600 hover:text-gold-700 transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-cream-100">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-2">
          <h1 className="font-serif text-3xl md:text-4xl text-stone-950 mb-3">
            {activeCategory
              ? categories.find((c) => c.id === activeCategory)?.label || 'Shop'
              : 'All Jewelry'}
          </h1>
          <div className="w-12 h-px bg-gold-400 mx-auto mb-4" />
          <p className="font-sans text-sm text-stone-500">
            Handcrafted demi-fine jewelry for every occasion
          </p>
        </div>
      </div>

      {/* Filters bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-t border-b border-stone-200 py-3 mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-sans text-xs uppercase tracking-[0.12em] text-stone-600 hover:text-stone-950 transition-colors lg:hidden"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters
          </button>

          <div className="hidden lg:block font-sans text-xs text-stone-400">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-sans text-[10px] text-stone-400 hidden sm:block">
              Sort by
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none font-sans text-xs uppercase tracking-[0.1em] text-stone-700 bg-transparent border-none cursor-pointer pr-5 focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown
                size={12}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <div className="hidden lg:block w-48 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-stone-500 mb-4">
                  No pieces found
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-stone-950/40"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-cream-50 shadow-xl animate-slide-in-right">
            <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
              <h2 className="font-sans text-xs uppercase tracking-[0.2em] text-stone-950">
                Filters
              </h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-stone-500 hover:text-stone-950 transition-colors"
                aria-label="Close filters"
              >
                <X size={16} strokeWidth={1.5} />
              </button>
            </div>
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 72px)' }}>
              <FilterSidebar mobile />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ShopPage;
