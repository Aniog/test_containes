import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  const categoryFilter = searchParams.get('category') || 'all';
  const priceFilter = searchParams.get('price') || 'all';
  const materialFilter = searchParams.get('material') || 'all';

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      if (categoryFilter !== 'all' && product.category !== categoryFilter) return false;
      if (priceFilter !== 'all') {
        const [min, max] = priceFilter.split('-').map(Number);
        if (max && (product.price < min || product.price > max)) return false;
        if (!max && product.price < min) return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.id - a.id;
        case 'rating':
          return b.rating - a.rating;
        default:
          return b.featured ? 1 : -1;
      }
    });

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

  const hasActiveFilters = categoryFilter !== 'all' || priceFilter !== 'all' || materialFilter !== 'all';

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-[#F5EBE0] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl mb-3">Shop All</h1>
          <p className="text-[#8B7E74]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-medium mb-4 text-sm uppercase tracking-wider">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block w-full text-left py-2 text-sm transition-colors ${
                        categoryFilter === cat.id
                          ? 'text-[#C9A962] font-medium'
                          : 'text-[#8B7E74] hover:text-[#2D2926]'
                      }`}
                    >
                      {cat.name}
                      <span className="text-[#8B7E74] ml-2">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-medium mb-4 text-sm uppercase tracking-wider">Price</h3>
                <div className="space-y-2">
                  {[
                    { id: 'all', label: 'All Prices' },
                    { id: '0-40', label: 'Under $40' },
                    { id: '40-60', label: '$40 - $60' },
                    { id: '60-100', label: '$60 - $100' },
                    { id: '100-', label: '$100+' }
                  ].map((price) => (
                    <button
                      key={price.id}
                      onClick={() => updateFilter('price', price.id)}
                      className={`block w-full text-left py-2 text-sm transition-colors ${
                        priceFilter === price.id
                          ? 'text-[#C9A962] font-medium'
                          : 'text-[#8B7E74] hover:text-[#2D2926]'
                      }`}
                    >
                      {price.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-medium mb-4 text-sm uppercase tracking-wider">Material</h3>
                <div className="space-y-2">
                  {['Gold', 'Silver'].map((mat) => (
                    <button
                      key={mat}
                      onClick={() => updateFilter('material', mat.toLowerCase())}
                      className={`block w-full text-left py-2 text-sm transition-colors ${
                        materialFilter === mat.toLowerCase()
                          ? 'text-[#C9A962] font-medium'
                          : 'text-[#8B7E74] hover:text-[#2D2926]'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#8B7E74] hover:text-[#A63D40] underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-[#E8E4E0]">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowFilters(true)}
                className="lg:hidden flex items-center gap-2 text-sm"
              >
                <Filter size={18} strokeWidth={1.5} />
                Filter
              </button>

              {/* Results Count */}
              <p className="text-sm text-[#8B7E74] hidden sm:block">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
              </p>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-[#E8E4E0] px-4 py-2 pr-10 text-sm focus:border-[#C9A962] cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B7E74] pointer-events-none"
                />
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[#8B7E74] mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-secondary">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-white overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2"
                  aria-label="Close filters"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium mb-4 text-sm uppercase tracking-wider">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        updateFilter('category', cat.id);
                        setShowFilters(false);
                      }}
                      className={`block w-full text-left py-2 text-sm transition-colors ${
                        categoryFilter === cat.id
                          ? 'text-[#C9A962] font-medium'
                          : 'text-[#8B7E74]'
                      }`}
                    >
                      {cat.name}
                      <span className="text-[#8B7E74] ml-2">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-4 text-sm uppercase tracking-wider">Price</h3>
                <div className="space-y-2">
                  {[
                    { id: 'all', label: 'All Prices' },
                    { id: '0-40', label: 'Under $40' },
                    { id: '40-60', label: '$40 - $60' },
                    { id: '60-100', label: '$60 - $100' },
                    { id: '100-', label: '$100+' }
                  ].map((price) => (
                    <button
                      key={price.id}
                      onClick={() => {
                        updateFilter('price', price.id);
                        setShowFilters(false);
                      }}
                      className={`block w-full text-left py-2 text-sm transition-colors ${
                        priceFilter === price.id
                          ? 'text-[#C9A962] font-medium'
                          : 'text-[#8B7E74]'
                      }`}
                    >
                      {price.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={() => {
                    clearFilters();
                    setShowFilters(false);
                  }}
                  className="text-sm text-[#8B7E74] hover:text-[#A63D40] underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
