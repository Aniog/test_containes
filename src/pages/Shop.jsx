import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import { products, categories, materials } from '../data/products';
import { formatPrice } from '../lib/utils';
import ProductCard from '../components/ProductCard';

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Get filter values from URL
  const activeCategory = searchParams.get('category') || 'All';
  const activeMaterial = searchParams.get('material') || 'All';
  const priceMin = parseInt(searchParams.get('priceMin') || '0');
  const priceMax = parseInt(searchParams.get('priceMax') || '200');
  const searchQuery = searchParams.get('search') || '';

  // Update URL params helper
  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All' || value === '' || (key === 'priceMin' && value === 0) || (key === 'priceMax' && value === 200)) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchParams({});
    setSortBy('featured');
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Material filter
    if (activeMaterial !== 'All') {
      result = result.filter(p => p.material === activeMaterial);
    }

    // Price filter
    result = result.filter(p => p.price >= priceMin && p.price <= priceMax);

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
      );
    }

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
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [activeCategory, activeMaterial, priceMin, priceMax, searchQuery, sortBy]);

  const hasActiveFilters = activeCategory !== 'All' || activeMaterial !== 'All' || priceMin > 0 || priceMax < 200 || searchQuery;

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="pt-8 pb-6">
          <div className="text-xs tracking-[0.15em] text-gold-600 mb-1">DISCOVER</div>
          <h1 className="font-serif text-4xl tracking-[0.02em]">The Collection</h1>
          {searchQuery && (
            <p className="text-muted mt-2">Showing results for "{searchQuery}"</p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm tracking-[0.08em] font-medium">FILTERS</span>
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="text-xs text-muted hover:text-gold-600">
                    Clear all
                  </button>
                )}
              </div>

              {/* Category */}
              <div className="mb-6">
                <div className="text-xs tracking-[0.1em] text-muted mb-2.5">CATEGORY</div>
                <div className="space-y-1.5">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => updateFilter('category', cat)}
                      className={`filter-pill block w-full text-left px-3 py-1.5 text-sm rounded border transition-colors ${
                        activeCategory === cat 
                          ? 'active border-base-900' 
                          : 'border-gold-400 hover:border-gold-500'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-6">
                <div className="text-xs tracking-[0.1em] text-muted mb-2.5">MATERIAL</div>
                <div className="space-y-1.5">
                  {materials.map(mat => (
                    <button
                      key={mat}
                      onClick={() => updateFilter('material', mat)}
                      className={`filter-pill block w-full text-left px-3 py-1.5 text-sm rounded border transition-colors ${
                        activeMaterial === mat 
                          ? 'active border-base-900' 
                          : 'border-gold-400 hover:border-gold-500'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="text-xs tracking-[0.1em] text-muted mb-2.5">PRICE RANGE</div>
                <div className="px-1">
                  <div className="flex justify-between text-xs text-muted mb-2">
                    <span>{formatPrice(priceMin)}</span>
                    <span>{formatPrice(priceMax)}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="120" 
                    step="5"
                    value={priceMax}
                    onChange={(e) => updateFilter('priceMax', parseInt(e.target.value))}
                    className="w-full accent-gold-500"
                  />
                  <div className="flex gap-2 mt-3">
                    <input 
                      type="number" 
                      value={priceMin}
                      onChange={(e) => updateFilter('priceMin', Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full border border-gold-400 px-2 py-1 text-sm rounded"
                      placeholder="Min"
                    />
                    <input 
                      type="number" 
                      value={priceMax}
                      onChange={(e) => updateFilter('priceMax', Math.min(200, parseInt(e.target.value) || 200))}
                      className="w-full border border-gold-400 px-2 py-1 text-sm rounded"
                      placeholder="Max"
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-gold-400">
              <div className="text-sm text-muted">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </div>

              <div className="flex items-center gap-3">
                {/* Mobile Filters Button */}
                <button 
                  onClick={() => setIsMobileFiltersOpen(true)}
                  className="lg:hidden btn-premium btn-premium-ghost px-4 py-1.5 text-xs tracking-[0.08em]"
                >
                  FILTERS
                </button>

                {/* Sort */}
                <div className="relative">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-gold-400 px-4 py-1.5 pr-9 text-sm rounded cursor-pointer focus:outline-none focus:border-gold-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">A — Z</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted" />
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-5">
                {activeCategory !== 'All' && (
                  <span className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-base-100 border border-gold-400 rounded">
                    {activeCategory}
                    <button onClick={() => updateFilter('category', 'All')}><X size={12} /></button>
                  </span>
                )}
                {activeMaterial !== 'All' && (
                  <span className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-base-100 border border-gold-400 rounded">
                    {activeMaterial}
                    <button onClick={() => updateFilter('material', 'All')}><X size={12} /></button>
                  </span>
                )}
                {(priceMin > 0 || priceMax < 200) && (
                  <span className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-base-100 border border-gold-400 rounded">
                    {formatPrice(priceMin)} — {formatPrice(priceMax)}
                    <button onClick={() => { updateFilter('priceMin', 0); updateFilter('priceMax', 200); }}><X size={12} /></button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-base-100 border border-gold-400 rounded">
                    "{searchQuery}"
                    <button onClick={() => updateFilter('search', '')}><X size={12} /></button>
                  </span>
                )}
              </div>
            )}

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} showQuickAdd />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted mb-4">No pieces match your filters.</p>
                <button onClick={clearFilters} className="text-sm text-gold-600 hover:text-gold-700">
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[80] lg:hidden" onClick={() => setIsMobileFiltersOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-base-50 z-[90] lg:hidden rounded-t-2xl p-6 max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <span className="font-medium tracking-[0.08em]">FILTERS</span>
              <button onClick={() => setIsMobileFiltersOpen(false)}><X size={20} /></button>
            </div>

            {/* Mobile filter content - simplified */}
            <div className="space-y-6">
              <div>
                <div className="text-xs tracking-[0.1em] text-muted mb-2">CATEGORY</div>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => updateFilter('category', cat)}
                      className={`px-4 py-1.5 text-sm rounded border ${activeCategory === cat ? 'bg-base-900 text-base-50 border-base-900' : 'border-gold-400'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs tracking-[0.1em] text-muted mb-2">MATERIAL</div>
                <div className="flex flex-wrap gap-2">
                  {materials.map(mat => (
                    <button
                      key={mat}
                      onClick={() => updateFilter('material', mat)}
                      className={`px-4 py-1.5 text-sm rounded border ${activeMaterial === mat ? 'bg-base-900 text-base-50 border-base-900' : 'border-gold-400'}`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button onClick={clearFilters} className="flex-1 py-3 border border-gold-400 text-sm tracking-[0.08em]">CLEAR</button>
              <button onClick={() => setIsMobileFiltersOpen(false)} className="flex-1 py-3 btn-premium btn-premium-solid text-sm tracking-[0.08em]">APPLY</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Shop;