import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState('all');
  const [material, setMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (priceRange === 'under-50') {
      result = result.filter((p) => p.price < 50);
    } else if (priceRange === '50-80') {
      result = result.filter((p) => p.price >= 50 && p.price <= 80);
    } else if (priceRange === 'over-80') {
      result = result.filter((p) => p.price > 80);
    }

    if (material !== 'all') {
      result = result.filter((p) => p.material === material);
    }

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, priceRange, material, sortBy]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setActiveCategory('all');
    setPriceRange('all');
    setMaterial('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory !== 'all' || priceRange !== 'all' || material !== 'all';

  return (
    <div className="min-h-screen bg-brand-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="mb-8">
          <h1 className="section-title">Shop</h1>
          <p className="mt-2 text-brand-muted text-sm">Discover our collection of demi-fine jewelry.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="text-sm font-medium text-brand-ink mb-3">Category</h3>
                <div className="space-y-2">
                  {['all', ...categories.map((c) => c.id)].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        activeCategory === cat ? 'text-brand-ink font-medium' : 'text-brand-muted hover:text-brand-ink'
                      }`}
                    >
                      {cat === 'all' ? 'All' : categories.find((c) => c.id === cat)?.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-brand-ink mb-3">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under-50', label: 'Under $50' },
                    { value: '50-80', label: '$50 – $80' },
                    { value: 'over-80', label: 'Over $80' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setPriceRange(opt.value)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        priceRange === opt.value ? 'text-brand-ink font-medium' : 'text-brand-muted hover:text-brand-ink'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-brand-ink mb-3">Material</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Materials' },
                    { value: 'gold', label: 'Gold' },
                    { value: 'silver', label: 'Silver' },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setMaterial(opt.value)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        material === opt.value ? 'text-brand-ink font-medium' : 'text-brand-muted hover:text-brand-ink'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <button onClick={clearFilters} className="text-sm text-brand-accent hover:text-brand-accentHover transition-colors">
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setFiltersOpen(!filtersOpen)}
                  className="lg:hidden flex items-center gap-2 text-sm text-brand-ink"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </button>
                <p className="text-sm text-brand-muted">{filtered.length} {filtered.length === 1 ? 'product' : 'products'}</p>
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-brand-surface border border-brand-border rounded-full pl-4 pr-10 py-2 text-sm text-brand-ink focus:outline-none focus:border-brand-ink"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted pointer-events-none" />
              </div>
            </div>

            {/* Mobile Filters */}
            {filtersOpen && (
              <div className="lg:hidden mb-6 p-4 bg-brand-surface rounded-xl border border-brand-border space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-brand-ink mb-3">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {['all', ...categories.map((c) => c.id)].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${
                          activeCategory === cat
                            ? 'bg-brand-ink text-white border-brand-ink'
                            : 'border-brand-border text-brand-ink hover:border-brand-ink'
                        }`}
                      >
                        {cat === 'all' ? 'All' : categories.find((c) => c.id === cat)?.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-brand-ink mb-3">Price</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: 'all', label: 'All' },
                      { value: 'under-50', label: 'Under $50' },
                      { value: '50-80', label: '$50–$80' },
                      { value: 'over-80', label: 'Over $80' },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setPriceRange(opt.value)}
                        className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${
                          priceRange === opt.value
                            ? 'bg-brand-ink text-white border-brand-ink'
                            : 'border-brand-border text-brand-ink hover:border-brand-ink'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-brand-ink mb-3">Material</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: 'all', label: 'All' },
                      { value: 'gold', label: 'Gold' },
                      { value: 'silver', label: 'Silver' },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setMaterial(opt.value)}
                        className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${
                          material === opt.value
                            ? 'bg-brand-ink text-white border-brand-ink'
                            : 'border-brand-border text-brand-ink hover:border-brand-ink'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="text-sm text-brand-accent hover:text-brand-accentHover transition-colors">
                    Clear all filters
                  </button>
                )}
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-brand-muted mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-outline">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
