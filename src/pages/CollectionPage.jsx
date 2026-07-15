import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  // Filter products
  let filtered = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (selectedPrice === 'under50' && product.price >= 50) return false;
    if (selectedPrice === '50to100' && (product.price < 50 || product.price > 100)) return false;
    if (selectedPrice === 'over100' && product.price <= 100) return false;
    if (selectedMaterial !== 'all' && !product.material.toLowerCase().includes(selectedMaterial.toLowerCase())) return false;
    return true;
  });

  // Sort products
  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice('all');
    setSelectedMaterial('all');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPrice !== 'all' || selectedMaterial !== 'all';

  return (
    <div ref={containerRef} className="pt-20 sm:pt-24">
      {/* Page header */}
      <div className="bg-[var(--velmora-bg-secondary)] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-muted)] mb-3">Our Collection</p>
          <h1 className="velmora-heading text-4xl sm:text-5xl md:text-6xl mb-4">Shop All Jewelry</h1>
          <p className="text-[var(--velmora-text-muted)] max-w-lg mx-auto">
            Demi-fine pieces crafted for everyday luxury. 18K gold plated, hypoallergenic, designed to be treasured.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter sidebar - desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-sm font-medium tracking-wide mb-4">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="accent-[var(--velmora-accent)]"
                    />
                    <span className="text-sm text-[var(--velmora-text-muted)]">All</span>
                  </label>
                  {categories.map(cat => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                        className="accent-[var(--velmora-accent)]"
                      />
                      <span className="text-sm text-[var(--velmora-text-muted)]">{cat.name}</span>
                      <span className="text-xs text-[var(--velmora-text-light)]">({cat.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-sm font-medium tracking-wide mb-4">Price</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === 'all'}
                      onChange={() => setSelectedPrice('all')}
                      className="accent-[var(--velmora-accent)]"
                    />
                    <span className="text-sm text-[var(--velmora-text-muted)]">All Prices</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === 'under50'}
                      onChange={() => setSelectedPrice('under50')}
                      className="accent-[var(--velmora-accent)]"
                    />
                    <span className="text-sm text-[var(--velmora-text-muted)]">Under $50</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === '50to100'}
                      onChange={() => setSelectedPrice('50to100')}
                      className="accent-[var(--velmora-accent)]"
                    />
                    <span className="text-sm text-[var(--velmora-text-muted)]">$50 - $100</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === 'over100'}
                      onChange={() => setSelectedPrice('over100')}
                      className="accent-[var(--velmora-accent)]"
                    />
                    <span className="text-sm text-[var(--velmora-text-muted)]">Over $100</span>
                  </label>
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-sm font-medium tracking-wide mb-4">Material</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === 'all'}
                      onChange={() => setSelectedMaterial('all')}
                      className="accent-[var(--velmora-accent)]"
                    />
                    <span className="text-sm text-[var(--velmora-text-muted)]">All Materials</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === 'gold'}
                      onChange={() => setSelectedMaterial('gold')}
                      className="accent-[var(--velmora-accent)]"
                    />
                    <span className="text-sm text-[var(--velmora-text-muted)]">18K Gold Plated</span>
                  </label>
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-widest uppercase text-[var(--velmora-accent)] hover:text-[var(--velmora-accent-hover)] transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-[var(--velmora-border)] text-sm"
            >
              <Filter className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-5 h-5 bg-[var(--velmora-accent)] text-white text-xs rounded-full flex items-center justify-center">
                  {[selectedCategory, selectedPrice, selectedMaterial].filter(v => v !== 'all').length}
                </span>
              )}
            </button>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-8 py-2 border border-[var(--velmora-border)] text-sm bg-transparent cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--velmora-text-muted)]" />
            </div>
          </div>

          {/* Mobile filter drawer */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setIsFilterOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-[var(--velmora-cream)] p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="velmora-heading text-xl tracking-wider">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)} aria-label="Close filters">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Category */}
                  <div>
                    <h3 className="text-sm font-medium tracking-wide mb-3">Category</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="mobile-category" checked={selectedCategory === 'all'} onChange={() => setSelectedCategory('all')} className="accent-[var(--velmora-accent)]" />
                        <span className="text-sm">All</span>
                      </label>
                      {categories.map(cat => (
                        <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="mobile-category" checked={selectedCategory === cat.id} onChange={() => setSelectedCategory(cat.id)} className="accent-[var(--velmora-accent)]" />
                          <span className="text-sm">{cat.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div>
                    <h3 className="text-sm font-medium tracking-wide mb-3">Price</h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="mobile-price" checked={selectedPrice === 'all'} onChange={() => setSelectedPrice('all')} className="accent-[var(--velmora-accent)]" />
                        <span className="text-sm">All Prices</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="mobile-price" checked={selectedPrice === 'under50'} onChange={() => setSelectedPrice('under50')} className="accent-[var(--velmora-accent)]" />
                        <span className="text-sm">Under $50</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="mobile-price" checked={selectedPrice === '50to100'} onChange={() => setSelectedPrice('50to100')} className="accent-[var(--velmora-accent)]" />
                        <span className="text-sm">$50 - $100</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="mobile-price" checked={selectedPrice === 'over100'} onChange={() => setSelectedPrice('over100')} className="accent-[var(--velmora-accent)]" />
                        <span className="text-sm">Over $100</span>
                      </label>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      clearFilters();
                      setIsFilterOpen(false);
                    }}
                    className="velmora-btn-primary w-full"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Results count and sort - desktop */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-[var(--velmora-text-muted)]">
                {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-4 pr-8 py-2 border border-[var(--velmora-border)] text-sm bg-transparent cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--velmora-text-muted)]" />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="velmora-heading text-xl mb-2">No products found</p>
                <p className="text-sm text-[var(--velmora-text-muted)] mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="velmora-btn-outline">
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
