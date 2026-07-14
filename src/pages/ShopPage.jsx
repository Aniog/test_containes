import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, CATEGORIES } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const SORT_OPTIONS = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState('newest');
  const [mobileFilters, setMobileFilters] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const priceRange = searchParams.get('price') || 'all';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' || value === '') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filtered = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => {
        if (max) return p.price >= min && p.price <= max;
        return p.price >= min;
      });
    }

    // Sort
    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, priceRange, sort]);

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasFilters = activeCategory !== 'all' || priceRange !== 'all';

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] text-warm-black font-medium mb-4">
          Category
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('category', 'all')}
            className={`block w-full text-left text-sm py-1.5 transition-colors ${
              activeCategory === 'all' ? 'text-gold font-medium' : 'text-warm-gray hover:text-warm-black'
            }`}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id)}
              className={`block w-full text-left text-sm py-1.5 transition-colors capitalize ${
                activeCategory === cat.id ? 'text-gold font-medium' : 'text-warm-gray hover:text-warm-black'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] text-warm-black font-medium mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {[
            { label: 'All Prices', value: 'all' },
            { label: 'Under $40', value: '0-40' },
            { label: '$40 - $70', value: '40-70' },
            { label: '$70 - $100', value: '70-100' },
            { label: '$100+', value: '100-999' },
          ].map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter('price', opt.value)}
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                priceRange === opt.value ? 'text-gold font-medium' : 'text-warm-gray hover:text-warm-black'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-[0.15em] text-gold hover:text-gold-dark transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <main className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-warm-black tracking-wide">
              {activeCategory !== 'all'
                ? CATEGORIES.find((c) => c.id === activeCategory)?.name || 'Shop'
                : 'All Jewelry'}
            </h1>
            <p className="text-sm text-warm-gray mt-1 font-sans">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              className="md:hidden flex items-center gap-2 text-sm text-warm-black hover:text-gold transition-colors"
              onClick={() => setMobileFilters(true)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasFilters && (
                <span className="w-2 h-2 rounded-full bg-gold" />
              )}
            </button>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs uppercase tracking-[0.1em] bg-transparent border border-warm-border rounded px-3 py-2 text-warm-black focus:outline-none focus:border-gold"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-warm-gray font-sans">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-outline mt-4 text-xs">
                  Clear Filters
                </button>
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

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50 md:hidden"
            onClick={() => setMobileFilters(false)}
          />
          <div className="fixed inset-y-0 left-0 w-72 bg-surface z-50 md:hidden shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm uppercase tracking-[0.15em] font-medium">Filters</h3>
              <button onClick={() => setMobileFilters(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </main>
  );
}