import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products, categories, materials } from '@/data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';
  const activeMaterial = searchParams.get('material') || '';
  const priceRange = searchParams.get('price') || '';

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial);
    }
    if (priceRange) {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => {
        if (max) return p.price >= min && p.price <= max;
        return p.price >= min;
      });
    }

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
      case 'newest':
        result.sort((a, b) => (a.badge === 'New' ? -1 : 1));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activeMaterial, priceRange, sortBy]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory || activeMaterial || priceRange;

  const FilterSection = () => (
    <div className="space-y-6">
      {hasActiveFilters && (
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-ink">Filters</span>
          <button
            type="button"
            onClick={clearFilters}
            className="text-xs text-brand-muted hover:text-brand-gold transition-colors"
          >
            Clear all
          </button>
        </div>
      )}

      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-ink mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => updateFilter('category', activeCategory === cat.id ? '' : cat.id)}
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                activeCategory === cat.id ? 'text-brand-gold font-medium' : 'text-brand-charcoal hover:text-brand-gold'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-ink mb-3">Price</h3>
        <div className="space-y-2">
          {[
            { label: 'Under $50', value: '0-50' },
            { label: '$50 – $75', value: '50-75' },
            { label: '$75 – $100', value: '75-100' },
            { label: '$100+', value: '100-' },
          ].map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => updateFilter('price', priceRange === opt.value ? '' : opt.value)}
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                priceRange === opt.value ? 'text-brand-gold font-medium' : 'text-brand-charcoal hover:text-brand-gold'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-ink mb-3">Material</h3>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat.id}
              type="button"
              onClick={() => updateFilter('material', activeMaterial === mat.id ? '' : mat.id)}
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                activeMaterial === mat.id ? 'text-brand-gold font-medium' : 'text-brand-charcoal hover:text-brand-gold'
              }`}
            >
              {mat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-brand-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-8 sm:mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-wide text-brand-ink">
            {activeCategory ? categories.find((c) => c.id === activeCategory)?.name || 'Shop' : 'All Jewelry'}
          </h1>
          <p className="mt-2 text-sm text-brand-muted">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 mb-6 sm:mb-8">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden inline-flex items-center gap-2 rounded-full border border-brand-border px-4 py-2 text-xs font-semibold tracking-widest uppercase text-brand-charcoal hover:border-brand-gold transition-colors"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>

          <div className="flex-1" />

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none rounded-full border border-brand-border bg-white pl-4 pr-10 py-2 text-xs font-medium tracking-wider uppercase text-brand-charcoal focus:outline-none focus:border-brand-gold cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSection />
            </div>
          </aside>

          {/* Mobile Filters Drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
              <aside className="absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-brand-cream shadow-2xl p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-lg font-semibold tracking-widest text-brand-ink">Filters</h2>
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-2 text-brand-charcoal hover:text-brand-gold transition-colors"
                    aria-label="Close filters"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <FilterSection />
              </aside>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-brand-ink">No pieces found</p>
                <p className="mt-2 text-sm text-brand-muted">Try adjusting your filters or browse all jewelry.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-4 text-sm font-semibold tracking-widest uppercase text-brand-gold hover:text-brand-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
}
