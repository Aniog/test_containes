import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  // Get filters from URL
  const selectedCategory = searchParams.get('category') || 'all';
  const maxPrice = parseInt(searchParams.get('maxPrice')) || 150;

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    result = result.filter(p => p.price <= maxPrice);

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, maxPrice, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === null) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || maxPrice < 150;

  return (
    <main className="pt-20">
      {/* Header */}
      <div className="bg-cream-200/50 border-b border-charcoal-200/50">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-16">
          <h1 className="section-title text-3xl md:text-4xl text-center mb-3">Shop</h1>
          <p className="text-center text-charcoal-600 max-w-md mx-auto">
            Discover our collection of demi-fine gold jewelry, crafted for everyday elegance.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h2 className="text-xs uppercase tracking-[0.15em] font-medium mb-6">Filters</h2>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-[0.1em] text-charcoal-500 mb-4">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => updateFilter('category', 'all')}
                      className="sr-only"
                    />
                    <span className={`w-4 h-4 border rounded-full flex items-center justify-center transition-colors ${
                      selectedCategory === 'all' ? 'border-charcoal-900' : 'border-charcoal-300 group-hover:border-charcoal-500'
                    }`}>
                      {selectedCategory === 'all' && <span className="w-2 h-2 bg-charcoal-900 rounded-full" />}
                    </span>
                    <span className="text-sm text-charcoal-700">All</span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => updateFilter('category', cat.id)}
                        className="sr-only"
                      />
                      <span className={`w-4 h-4 border rounded-full flex items-center justify-center transition-colors ${
                        selectedCategory === cat.id ? 'border-charcoal-900' : 'border-charcoal-300 group-hover:border-charcoal-500'
                      }`}>
                        {selectedCategory === cat.id && <span className="w-2 h-2 bg-charcoal-900 rounded-full" />}
                      </span>
                      <span className="text-sm text-charcoal-700">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-[0.1em] text-charcoal-500 mb-4">Price</h3>
                <div className="space-y-2">
                  {[50, 75, 100, 150].map((price) => (
                    <label key={price} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        checked={maxPrice === price}
                        onChange={() => updateFilter('maxPrice', price.toString())}
                        className="sr-only"
                      />
                      <span className={`w-4 h-4 border rounded-full flex items-center justify-center transition-colors ${
                        maxPrice === price ? 'border-charcoal-900' : 'border-charcoal-300 group-hover:border-charcoal-500'
                      }`}>
                        {maxPrice === price && <span className="w-2 h-2 bg-charcoal-900 rounded-full" />}
                      </span>
                      <span className="text-sm text-charcoal-700">
                        {price === 150 ? 'Any price' : `Under $${price}`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-[0.1em] text-charcoal-500 hover:text-charcoal-900 transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-charcoal-200/50">
              <p className="text-sm text-charcoal-500">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>

              <div className="flex items-center gap-4">
                {/* Mobile Filter Button */}
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-sm text-charcoal-700"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filter
                </button>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent text-sm text-charcoal-700 pr-6 cursor-pointer focus:outline-none"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name A-Z</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal-500" />
                </div>
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
              <div className="text-center py-16">
                <p className="text-charcoal-500 mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isMobileFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-charcoal-950/60 z-50 lg:hidden"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="fixed inset-x-0 bottom-0 bg-cream-50 z-50 lg:hidden max-h-[70vh] overflow-y-auto animate-slide-up rounded-t-2xl">
            <div className="sticky top-0 bg-cream-50 border-b border-charcoal-200 p-4 flex items-center justify-between">
              <h2 className="text-sm font-medium">Filters</h2>
              <button onClick={() => setIsMobileFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              {/* Category */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-[0.1em] text-charcoal-500 mb-4">Category</h3>
                <div className="space-y-3">
                  <label key="all" className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-category"
                      checked={selectedCategory === 'all'}
                      onChange={() => updateFilter('category', 'all')}
                      className="sr-only"
                    />
                    <span className={`w-5 h-5 border rounded-full flex items-center justify-center ${
                      selectedCategory === 'all' ? 'border-charcoal-900' : 'border-charcoal-300'
                    }`}>
                      {selectedCategory === 'all' && <span className="w-2.5 h-2.5 bg-charcoal-900 rounded-full" />}
                    </span>
                    <span>All</span>
                  </label>
                  {categories.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-category"
                        checked={selectedCategory === cat.id}
                        onChange={() => updateFilter('category', cat.id)}
                        className="sr-only"
                      />
                      <span className={`w-5 h-5 border rounded-full flex items-center justify-center ${
                        selectedCategory === cat.id ? 'border-charcoal-900' : 'border-charcoal-300'
                      }`}>
                        {selectedCategory === cat.id && <span className="w-2.5 h-2.5 bg-charcoal-900 rounded-full" />}
                      </span>
                      <span>{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-[0.1em] text-charcoal-500 mb-4">Price</h3>
                <div className="space-y-3">
                  {[50, 75, 100, 150].map((price) => (
                    <label key={price} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-price"
                        checked={maxPrice === price}
                        onChange={() => updateFilter('maxPrice', price.toString())}
                        className="sr-only"
                      />
                      <span className={`w-5 h-5 border rounded-full flex items-center justify-center ${
                        maxPrice === price ? 'border-charcoal-900' : 'border-charcoal-300'
                      }`}>
                        {maxPrice === price && <span className="w-2.5 h-2.5 bg-charcoal-900 rounded-full" />}
                      </span>
                      <span>{price === 150 ? 'Any price' : `Under $${price}`}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 sticky bottom-0 bg-cream-50 pt-4 pb-4">
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="btn-outline flex-1">
                    Clear
                  </button>
                )}
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="btn-primary flex-1"
                >
                  Show {filteredProducts.length} Results
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Shop;
