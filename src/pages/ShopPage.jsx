import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/shop/ProductCard';
import FilterSidebar from '@/components/shop/FilterSidebar';
import { products, categories } from '@/data/products';

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: 'over-75', label: 'Over $75', min: 75, max: Infinity },
];

const materials = ['18K Gold Plated', 'Sterling Silver'];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({ categories: [], priceRanges: [], materials: [] });
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  // Initialize category from URL params
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters(prev => ({ ...prev, categories: [category] }));
    }
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filters, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.categories.length > 0) {
      result = result.filter(p => filters.categories.includes(p.category));
    }

    // Price filter
    if (filters.priceRanges.length > 0) {
      result = result.filter(p =>
        filters.priceRanges.some(rangeId => {
          const range = priceRanges.find(r => r.id === rangeId);
          return range && p.price >= range.min && p.price < range.max;
        })
      );
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
      default:
        break;
    }

    return result;
  }, [filters, sortBy]);

  const activeFilterCount = filters.categories.length + filters.priceRanges.length + filters.materials.length;

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 pb-16 md:pb-24 bg-cream-100 min-h-screen">
      <div className="container-narrow">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="heading-section text-charcoal-800" id="shop-page-title">
            Shop All Jewelry
          </h1>
          <p className="text-sm text-charcoal-400 mt-2" id="shop-page-subtitle">
            Discover our collection of premium demi-fine pieces
          </p>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <div className="hidden lg:block w-60 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              onFilterChange={setFilters}
              categories={categories}
              priceRanges={priceRanges}
              materials={materials}
            />
          </div>

          {/* Products area */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-cream-300">
              <div className="flex items-center gap-3">
                {/* Mobile filter toggle */}
                <button
                  className="lg:hidden flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-charcoal-600"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="w-5 h-5 bg-charcoal-800 text-cream-100 text-[10px] rounded-full flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
                <p className="text-sm text-charcoal-400">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
                </p>
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs font-medium tracking-wider uppercase text-charcoal-600 bg-transparent border border-cream-400 px-3 py-2 focus:outline-none focus:border-gold-400 transition-colors cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Active filters */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {filters.categories.map(catId => {
                  const cat = categories.find(c => c.id === catId);
                  return (
                    <button
                      key={catId}
                      onClick={() => setFilters(prev => ({
                        ...prev,
                        categories: prev.categories.filter(c => c !== catId),
                      }))}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-cream-200 text-xs text-charcoal-600 hover:bg-cream-300 transition-colors"
                    >
                      {cat?.name}
                      <X className="w-3 h-3" />
                    </button>
                  );
                })}
                {filters.priceRanges.map(rangeId => {
                  const range = priceRanges.find(r => r.id === rangeId);
                  return (
                    <button
                      key={rangeId}
                      onClick={() => setFilters(prev => ({
                        ...prev,
                        priceRanges: prev.priceRanges.filter(p => p !== rangeId),
                      }))}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-cream-200 text-xs text-charcoal-600 hover:bg-cream-300 transition-colors"
                    >
                      {range?.label}
                      <X className="w-3 h-3" />
                    </button>
                  );
                })}
                <button
                  onClick={() => setFilters({ categories: [], priceRanges: [], materials: [] })}
                  className="text-xs text-charcoal-400 underline hover:text-charcoal-700 transition-colors ml-2"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-charcoal-600 mb-2">No pieces found</p>
                <p className="text-sm text-charcoal-400">Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-charcoal-900/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-cream-100 shadow-elevated overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-medium tracking-widest-xl uppercase text-charcoal-800">Filters</h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-1 text-charcoal-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <FilterSidebar
                filters={filters}
                onFilterChange={setFilters}
                categories={categories}
                priceRanges={priceRanges}
                materials={materials}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
