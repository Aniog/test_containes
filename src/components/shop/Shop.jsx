import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../../data/products';
import ProductCard from '../product/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Get filter values from URL
  const currentCategory = searchParams.get('category') || 'all';
  const currentMaterial = searchParams.get('material') || 'all';
  const currentSort = searchParams.get('sort') || 'featured';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Filter by category
    if (currentCategory !== 'all') {
      result = result.filter(p => p.category === currentCategory);
    }
    
    // Filter by material
    if (currentMaterial !== 'all') {
      result = result.filter(p => p.material === currentMaterial);
    }
    
    // Sort
    switch (currentSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured - keep original order
        break;
    }
    
    return result;
  }, [currentCategory, currentMaterial, currentSort]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === '') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = currentCategory !== 'all' || currentMaterial !== 'all';

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' }
  ];

  const materialOptions = [
    { value: 'all', label: 'All Materials' },
    { value: 'gold', label: 'Gold' },
    { value: 'silver', label: 'Silver' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F7] pt-24 pb-16">
      <div className="container-app">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1918]">
            {currentCategory === 'all' ? 'Shop All' : categories.find(c => c.id === currentCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-4 text-[#6B6560]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile Filter Toggle & Sort */}
        <div className="flex items-center justify-between mb-8 lg:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm font-medium text-[#1A1918]"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-[#C9A962] text-[#1A1918] text-xs rounded-full flex items-center justify-center">
                !
              </span>
            )}
          </button>
          
          <div className="relative">
            <select
              value={currentSort}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="appearance-none bg-transparent border border-[#E5E2DE] px-4 py-2 pr-10 text-sm text-[#1A1918] focus:outline-none focus:border-[#C9A962]"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#C9A962] hover:underline mb-6"
                >
                  Clear all filters
                </button>
              )}

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-medium text-[#1A1918] mb-4">Category</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={currentCategory === 'all'}
                      onChange={() => updateFilter('category', 'all')}
                      className="w-4 h-4 accent-[#C9A962]"
                    />
                    <span className="text-sm text-[#6B6560]">All Categories</span>
                  </label>
                  {categories.map(cat => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={currentCategory === cat.id}
                        onChange={() => updateFilter('category', cat.id)}
                        className="w-4 h-4 accent-[#C9A962]"
                      />
                      <span className="text-sm text-[#6B6560]">{cat.name}</span>
                      <span className="text-xs text-[#6B6560]/50">({cat.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h3 className="font-medium text-[#1A1918] mb-4">Material</h3>
                <div className="space-y-3">
                  {materialOptions.map(option => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={currentMaterial === option.value}
                        onChange={() => updateFilter('material', option.value)}
                        className="w-4 h-4 accent-[#C9A962]"
                      />
                      <span className="text-sm text-[#6B6560]">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-medium text-[#1A1918] mb-4">Price Range</h3>
                <div className="space-y-3">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under-50', label: 'Under $50' },
                    { value: '50-75', label: '$50 - $75' },
                    { value: '75-100', label: '$75 - $100' },
                    { value: 'over-100', label: 'Over $100' }
                  ].map(option => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={currentMaterial === option.value}
                        onChange={() => updateFilter('material', option.value)}
                        className="w-4 h-4 accent-[#C9A962]"
                      />
                      <span className="text-sm text-[#6B6560]">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-end mb-8">
              <span className="text-sm text-[#6B6560] mr-4">Sort by:</span>
              <div className="relative">
                <select
                  value={currentSort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent border border-[#E5E2DE] px-4 py-2 pr-10 text-sm text-[#1A1918] focus:outline-none focus:border-[#C9A962]"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[#6B6560] mb-4">No products found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-[#1A1918]/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#FAF9F7] animate-slide-up overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-2xl">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2"
                  aria-label="Close filters"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-medium text-[#1A1918] mb-4">Category</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-category"
                      checked={currentCategory === 'all'}
                      onChange={() => updateFilter('category', 'all')}
                      className="w-4 h-4 accent-[#C9A962]"
                    />
                    <span className="text-sm text-[#6B6560]">All Categories</span>
                  </label>
                  {categories.map(cat => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-category"
                        checked={currentCategory === cat.id}
                        onChange={() => updateFilter('category', cat.id)}
                        className="w-4 h-4 accent-[#C9A962]"
                      />
                      <span className="text-sm text-[#6B6560]">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h3 className="font-medium text-[#1A1918] mb-4">Material</h3>
                <div className="space-y-3">
                  {materialOptions.map(option => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-material"
                        checked={currentMaterial === option.value}
                        onChange={() => updateFilter('material', option.value)}
                        className="w-4 h-4 accent-[#C9A962]"
                      />
                      <span className="text-sm text-[#6B6560]">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <button
                onClick={() => setIsFilterOpen(false)}
                className="btn-primary w-full"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}