import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CollectionPage = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    priceRange: 'all',
    material: 'all',
  });
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  // Filter products
  let filteredProducts = products.filter(product => {
    if (filters.category !== 'all' && product.category !== filters.category) return false;
    if (filters.material !== 'all' && product.material !== filters.material) return false;
    if (filters.priceRange === 'under50' && product.price >= 50) return false;
    if (filters.priceRange === '50to100' && (product.price < 50 || product.price > 100)) return false;
    if (filters.priceRange === 'over100' && product.price <= 100) return false;
    return true;
  });

  // Sort products
  if (sortBy === 'price-asc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ category: 'all', priceRange: 'all', material: 'all' });
  };

  const hasActiveFilters = filters.category !== 'all' || filters.priceRange !== 'all' || filters.material !== 'all';

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'hidden lg:block'}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs tracking-ultra-wide uppercase font-medium text-velmora-base">Filters</h3>
        {hasActiveFilters && (
          <button onClick={clearFilters} className="text-xs text-velmora-stone hover:text-velmora-gold transition-colors flex items-center gap-1">
            <X size={12} />
            Clear All
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-6">
        <p className="text-xs tracking-ultra-wide uppercase font-medium text-velmora-base mb-3">Category</p>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={filters.category === 'all'}
              onChange={() => updateFilter('category', 'all')}
              className="accent-velmora-gold"
            />
            <span className="text-sm text-velmora-stone">All</span>
          </label>
          {categories.map(cat => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat.id}
                onChange={() => updateFilter('category', cat.id)}
                className="accent-velmora-gold"
              />
              <span className="text-sm text-velmora-stone">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <p className="text-xs tracking-ultra-wide uppercase font-medium text-velmora-base mb-3">Price</p>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to100', label: '$50 - $100' },
            { value: 'over100', label: 'Over $100' },
          ].map(option => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="priceRange"
                checked={filters.priceRange === option.value}
                onChange={() => updateFilter('priceRange', option.value)}
                className="accent-velmora-gold"
              />
              <span className="text-sm text-velmora-stone">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <p className="text-xs tracking-ultra-wide uppercase font-medium text-velmora-base mb-3">Material</p>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Materials' },
            { value: 'gold', label: 'Gold Tone' },
            { value: 'silver', label: 'Silver Tone' },
          ].map(option => (
            <label key={option.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="material"
                checked={filters.material === option.value}
                onChange={() => updateFilter('material', option.value)}
                className="accent-velmora-gold"
              />
              <span className="text-sm text-velmora-stone">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main ref={containerRef} className="pt-20 lg:pt-24 min-h-screen bg-velmora-cream">
      {/* Page Header */}
      <div className="bg-velmora-warm border-b border-velmora-stone-lighter/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <h1 className="font-serif text-3xl lg:text-4xl font-light text-velmora-base text-center">
            Shop All
          </h1>
          <p className="text-velmora-stone text-sm text-center mt-2">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm text-velmora-stone border border-velmora-stone-lighter/50 px-4 py-2"
          >
            <Filter size={16} />
            Filters
          </button>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <FilterSidebar />
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-velmora-base/50" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-velmora-cream p-6 overflow-y-auto animate-slide-in-right">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-xl">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)} className="p-2 text-velmora-stone">
                    <X size={20} />
                  </button>
                </div>
                <FilterSidebar mobile />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort & Results */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-velmora-stone">
                Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-velmora-stone-lighter/50 px-4 py-2 pr-8 text-sm text-velmora-stone focus:outline-none focus:border-velmora-gold cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-velmora-stone pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-velmora-stone mb-2">No pieces found</p>
                <p className="text-sm text-velmora-stone-light mb-4">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="text-velmora-gold text-sm underline hover:text-velmora-gold-dark transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CollectionPage;
