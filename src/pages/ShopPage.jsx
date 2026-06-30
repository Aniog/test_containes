import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';
import Button from '@/components/ui/Button';

const priceRanges = [
  { value: 'under-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-100', label: '$75 – $100' },
  { value: 'over-100', label: 'Over $100' },
];

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const filters = useMemo(() => ({
    category: searchParams.get('category'),
    priceRange: searchParams.get('price'),
    sort: sortBy,
  }), [searchParams, sortBy]);

  const setFilters = (newFilters) => {
    const params = new URLSearchParams();
    if (newFilters.category) params.set('category', newFilters.category);
    if (newFilters.priceRange) params.set('price', newFilters.priceRange);
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }

    if (filters.priceRange) {
      switch (filters.priceRange) {
        case 'under-50':
          result = result.filter(p => p.price < 50);
          break;
        case '50-75':
          result = result.filter(p => p.price >= 50 && p.price <= 75);
          break;
        case '75-100':
          result = result.filter(p => p.price >= 75 && p.price <= 100);
          break;
        case 'over-100':
          result = result.filter(p => p.price > 100);
          break;
      }
    }

    switch (filters.sort) {
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
  }, [filters]);

  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal-900 mb-2">
            {filters.category
              ? categories.find(c => c.id === filters.category)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="text-warm-gray text-sm">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              categories={categories}
              priceRanges={priceRanges}
            />
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-cream-200">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm text-charcoal-700"
              >
                <SlidersHorizontal size={16} />
                Filters
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-warm-gray hidden sm:inline">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent text-sm text-charcoal-900 pr-6 cursor-pointer focus:outline-none"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-charcoal-600 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-charcoal-600 mb-4">No pieces match your filters.</p>
                <Button variant="secondary" onClick={() => setFilters({ category: null, priceRange: null, sort: 'featured' })}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-charcoal-900/40 backdrop-blur-sm z-50 lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-sm bg-cream-50 z-50 lg:hidden overflow-y-auto animate-slide-in-right">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm tracking-widest uppercase text-charcoal-900 font-medium">Filters</h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-2 text-charcoal-600"
                  aria-label="Close filters"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 5L15 15M5 15L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <FilterSidebar
                filters={filters}
                setFilters={(newFilters) => {
                  setFilters(newFilters);
                  setMobileFiltersOpen(false);
                }}
                categories={categories}
                priceRanges={priceRanges}
              />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default ShopPage;
