import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { cn } from '@/lib/utils';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const materials = ['gold', 'silver'];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const selectedCategory = searchParams.get('category') || 'all';
  const selectedPriceRange = searchParams.get('price') || 'all';
  const selectedMaterial = searchParams.get('material') || 'all';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    if (selectedPriceRange !== 'all') {
      const range = priceRanges.find((r) => r.label === selectedPriceRange);
      if (range) {
        filtered = filtered.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    // Material filter
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter((p) => p.material === selectedMaterial);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => {
          if (a.badge === 'New Arrival') return -1;
          if (b.badge === 'New Arrival') return 1;
          return 0;
        });
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPriceRange !== 'all' || selectedMaterial !== 'all';

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-charcoal-900 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans text-xs tracking-mega-wide uppercase text-gold-400 mb-3">
            Our Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-100 tracking-wide">
            Shop All Jewelry
          </h1>
          <p className="font-sans text-sm text-cream-400 mt-4 max-w-lg mx-auto">
            Discover our curated collection of premium demi-fine jewelry, designed to be treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-cream-300">
          <div className="flex items-center gap-4">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center gap-2 font-sans text-sm text-charcoal-700 hover:text-gold-500 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Active Filters (Desktop) */}
            {hasActiveFilters && (
              <div className="hidden lg:flex items-center gap-2">
                {selectedCategory !== 'all' && (
                  <span className="flex items-center gap-1 bg-gold-100 text-gold-700 px-3 py-1 text-xs">
                    {categories.find((c) => c.id === selectedCategory)?.name || selectedCategory}
                    <button onClick={() => updateFilter('category', 'all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedPriceRange !== 'all' && (
                  <span className="flex items-center gap-1 bg-gold-100 text-gold-700 px-3 py-1 text-xs">
                    {selectedPriceRange}
                    <button onClick={() => updateFilter('price', 'all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedMaterial !== 'all' && (
                  <span className="flex items-center gap-1 bg-gold-100 text-gold-700 px-3 py-1 text-xs capitalize">
                    {selectedMaterial}
                    <button onClick={() => updateFilter('material', 'all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="text-xs text-charcoal-500 hover:text-gold-500 transition-colors ml-2"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent font-sans text-sm text-charcoal-700 pr-8 pl-2 py-1 border border-cream-300 focus:outline-none focus:border-gold-400 cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-500 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-charcoal-800 mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={cn(
                      'block w-full text-left text-sm py-1 transition-colors',
                      selectedCategory === 'all'
                        ? 'text-gold-600 font-medium'
                        : 'text-charcoal-600 hover:text-gold-500'
                    )}
                  >
                    All Jewelry
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => updateFilter('category', category.id)}
                      className={cn(
                        'block w-full text-left text-sm py-1 transition-colors',
                        selectedCategory === category.id
                          ? 'text-gold-600 font-medium'
                          : 'text-charcoal-600 hover:text-gold-500'
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-charcoal-800 mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('price', 'all')}
                    className={cn(
                      'block w-full text-left text-sm py-1 transition-colors',
                      selectedPriceRange === 'all'
                        ? 'text-gold-600 font-medium'
                        : 'text-charcoal-600 hover:text-gold-500'
                    )}
                  >
                    All Prices
                  </button>
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => updateFilter('price', range.label)}
                      className={cn(
                        'block w-full text-left text-sm py-1 transition-colors',
                        selectedPriceRange === range.label
                          ? 'text-gold-600 font-medium'
                          : 'text-charcoal-600 hover:text-gold-500'
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-charcoal-800 mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('material', 'all')}
                    className={cn(
                      'block w-full text-left text-sm py-1 transition-colors',
                      selectedMaterial === 'all'
                        ? 'text-gold-600 font-medium'
                        : 'text-charcoal-600 hover:text-gold-500'
                    )}
                  >
                    All Materials
                  </button>
                  {materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => updateFilter('material', material)}
                      className={cn(
                        'block w-full text-left text-sm py-1 capitalize transition-colors',
                        selectedMaterial === material
                          ? 'text-gold-600 font-medium'
                          : 'text-charcoal-600 hover:text-gold-500'
                      )}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          <div
            className={cn(
              'lg:hidden fixed inset-0 z-40 transition-all duration-300',
              isFilterOpen ? 'pointer-events-auto' : 'pointer-events-none'
            )}
          >
            <div
              className={cn(
                'absolute inset-0 bg-black/50 transition-opacity',
                isFilterOpen ? 'opacity-100' : 'opacity-0'
              )}
              onClick={() => setIsFilterOpen(false)}
            />
            <div
              className={cn(
                'absolute left-0 top-0 h-full w-80 bg-cream-50 shadow-xl transform transition-transform duration-300 p-6 overflow-y-auto',
                isFilterOpen ? 'translate-x-0' : '-translate-x-full'
              )}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl text-charcoal-900">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-5 h-5 text-charcoal-600" />
                </button>
              </div>

              {/* Mobile filter content - same as desktop */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-charcoal-800 mb-4">
                    Category
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => { updateFilter('category', 'all'); setIsFilterOpen(false); }}
                      className={cn(
                        'block w-full text-left text-sm py-1',
                        selectedCategory === 'all' ? 'text-gold-600 font-medium' : 'text-charcoal-600'
                      )}
                    >
                      All Jewelry
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => { updateFilter('category', category.id); setIsFilterOpen(false); }}
                        className={cn(
                          'block w-full text-left text-sm py-1',
                          selectedCategory === category.id ? 'text-gold-600 font-medium' : 'text-charcoal-600'
                        )}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-charcoal-800 mb-4">
                    Price
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => { updateFilter('price', 'all'); setIsFilterOpen(false); }}
                      className={cn(
                        'block w-full text-left text-sm py-1',
                        selectedPriceRange === 'all' ? 'text-gold-600 font-medium' : 'text-charcoal-600'
                      )}
                    >
                      All Prices
                    </button>
                    {priceRanges.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => { updateFilter('price', range.label); setIsFilterOpen(false); }}
                        className={cn(
                          'block w-full text-left text-sm py-1',
                          selectedPriceRange === range.label ? 'text-gold-600 font-medium' : 'text-charcoal-600'
                        )}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-charcoal-800 mb-4">
                    Material
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => { updateFilter('material', 'all'); setIsFilterOpen(false); }}
                      className={cn(
                        'block w-full text-left text-sm py-1',
                        selectedMaterial === 'all' ? 'text-gold-600 font-medium' : 'text-charcoal-600'
                      )}
                    >
                      All Materials
                    </button>
                    {materials.map((material) => (
                      <button
                        key={material}
                        onClick={() => { updateFilter('material', material); setIsFilterOpen(false); }}
                        className={cn(
                          'block w-full text-left text-sm py-1 capitalize',
                          selectedMaterial === material ? 'text-gold-600 font-medium' : 'text-charcoal-600'
                        )}
                      >
                        {material}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <p className="text-sm text-charcoal-500 mb-6">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal-700 mb-2">
                  No products found
                </p>
                <p className="text-sm text-charcoal-500 mb-6">
                  Try adjusting your filters or browse all jewelry
                </p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
