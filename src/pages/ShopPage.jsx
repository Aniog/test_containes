import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Filter, SlidersHorizontal, X } from 'lucide-react';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categoryFilter = searchParams.get('category') || 'all';
  const priceFilter = searchParams.get('price') || 'all';
  const materialFilter = searchParams.get('material') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryFilter, priceFilter, materialFilter, sortBy]);

  // Filter products
  let filtered = [...products];

  if (categoryFilter !== 'all') {
    filtered = filtered.filter(p => p.category === categoryFilter);
  }

  if (priceFilter !== 'all') {
    switch (priceFilter) {
      case 'under50':
        filtered = filtered.filter(p => p.price < 50);
        break;
      case '50to75':
        filtered = filtered.filter(p => p.price >= 50 && p.price <= 75);
        break;
      case 'over75':
        filtered = filtered.filter(p => p.price > 75);
        break;
    }
  }

  if (materialFilter !== 'all') {
    filtered = filtered.filter(p => p.material === materialFilter);
  }

  // Sort
  switch (sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      filtered.reverse();
      break;
    default:
      break;
  }

  const hasActiveFilters = categoryFilter !== 'all' || priceFilter !== 'all' || materialFilter !== 'all';

  const clearFilters = () => {
    setSearchParams({});
  };

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  return (
    <div ref={containerRef} className="min-h-screen">
      <Header />
      <CartDrawer />

      {/* Page Header */}
      <div className="section-padding pt-24 lg:pt-28 pb-8">
        <h1 className="serif-heading text-4xl md:text-5xl font-light mb-2">Shop All</h1>
        <p className="text-muted-foreground text-sm">
          {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          {hasActiveFilters && ' · Filtered'}
        </p>
      </div>

      <div className="section-padding pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs tracking-widest uppercase mb-3">Category</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'earrings', label: 'Earrings' },
                    { value: 'necklaces', label: 'Necklaces' },
                    { value: 'huggies', label: 'Huggies' },
                    { value: 'sets', label: 'Gift Sets' },
                  ].map(opt => (
                    <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={categoryFilter === opt.value}
                        onChange={() => updateFilter('category', opt.value)}
                        className="accent-accent"
                      />
                      <span className="text-sm">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-xs tracking-widest uppercase mb-3">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to75', label: '$50 - $75' },
                    { value: 'over75', label: 'Over $75' },
                  ].map(opt => (
                    <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceFilter === opt.value}
                        onChange={() => updateFilter('price', opt.value)}
                        className="accent-accent"
                      />
                      <span className="text-sm">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-widest uppercase mb-3">Material</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'gold', label: 'Gold Tone' },
                    { value: 'silver', label: 'Silver Tone' },
                  ].map(opt => (
                    <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={materialFilter === opt.value}
                        onChange={() => updateFilter('material', opt.value)}
                        className="accent-accent"
                      />
                      <span className="text-sm">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-widest uppercase text-accent hover:underline flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="lg:hidden flex items-center justify-between mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 text-sm border border-border px-4 py-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 bg-accent rounded-full" />
              )}
            </button>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="text-sm border border-border px-3 py-2 bg-transparent"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Mobile Filter Panel */}
          {isFilterOpen && (
            <div className="lg:hidden fixed inset-0 z-50 bg-background p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="serif-heading text-2xl">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)} className="p-2">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Category */}
                <div>
                  <h3 className="text-xs tracking-widest uppercase mb-3">Category</h3>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All' },
                      { value: 'earrings', label: 'Earrings' },
                      { value: 'necklaces', label: 'Necklaces' },
                      { value: 'huggies', label: 'Huggies' },
                      { value: 'sets', label: 'Gift Sets' },
                    ].map(opt => (
                      <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category-mobile"
                          checked={categoryFilter === opt.value}
                          onChange={() => updateFilter('category', opt.value)}
                          className="accent-accent"
                        />
                        <span className="text-sm">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h3 className="text-xs tracking-widest uppercase mb-3">Price</h3>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: 'under50', label: 'Under $50' },
                      { value: '50to75', label: '$50 - $75' },
                      { value: 'over75', label: 'Over $75' },
                    ].map(opt => (
                      <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="price-mobile"
                          checked={priceFilter === opt.value}
                          onChange={() => updateFilter('price', opt.value)}
                          className="accent-accent"
                        />
                        <span className="text-sm">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="flex-1 btn-accent"
                  >
                    Show {filtered.length} Results
                  </button>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="px-4 py-3 border border-border text-sm"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filtered.length} result{filtered.length !== 1 ? 's' : ''}
              </p>
              <select
                value={sortBy}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="text-sm border border-border px-3 py-2 bg-transparent"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="serif-heading text-2xl mb-2">No pieces found</p>
                <p className="text-muted-foreground text-sm mb-6">
                  Try adjusting your filters
                </p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
