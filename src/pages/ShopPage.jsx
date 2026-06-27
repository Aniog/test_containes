import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories, priceRanges } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';
  const activePrice = searchParams.get('price') || '';

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice) {
      const range = priceRanges.find((r) => r.label === activePrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price <= range.max);
      }
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, activePrice, sortBy]);

  const setFilter = (key, value) => {
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

  const hasFilters = activeCategory || activePrice;

  return (
    <main className="pt-20 sm:pt-24 min-h-screen bg-cream">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl text-dark-900 mb-2">
            {activeCategory
              ? categories.find((c) => c.slug === activeCategory)?.label || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="text-muted text-sm font-sans">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} available
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mb-8 border-b border-warm-200 pb-4">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-sm text-dark-700 font-sans hover:text-dark-900 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="tracking-wide">Filters</span>
            {hasFilters && (
              <span className="w-5 h-5 bg-gold-500 text-white text-[10px] rounded-full flex items-center justify-center">
                {(activeCategory ? 1 : 0) + (activePrice ? 1 : 0)}
              </span>
            )}
          </button>

          <div className="flex items-center gap-2">
            <label className="text-xs text-muted font-sans tracking-wide hidden sm:block">Sort by</label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-warm-200 pl-4 pr-10 py-2 text-sm text-dark-900 font-sans cursor-pointer focus:outline-none focus:border-gold-400 transition-colors"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filter panel */}
        {filterOpen && (
          <div className="bg-ivory border border-warm-200 p-6 mb-8 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Category filter */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase font-sans text-dark-900 mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setFilter('category', '')}
                    className={`block text-sm font-sans transition-colors ${
                      !activeCategory ? 'text-gold-600 font-medium' : 'text-muted hover:text-dark-900'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => setFilter('category', cat.slug)}
                      className={`block text-sm font-sans transition-colors ${
                        activeCategory === cat.slug
                          ? 'text-gold-600 font-medium'
                          : 'text-muted hover:text-dark-900'
                      }`}
                    >
                      {cat.label} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase font-sans text-dark-900 mb-3">
                  Price
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setFilter('price', '')}
                    className={`block text-sm font-sans transition-colors ${
                      !activePrice ? 'text-gold-600 font-medium' : 'text-muted hover:text-dark-900'
                    }`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setFilter('price', range.label)}
                      className={`block text-sm font-sans transition-colors ${
                        activePrice === range.label
                          ? 'text-gold-600 font-medium'
                          : 'text-muted hover:text-dark-900'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase font-sans text-dark-900 mb-3">
                  Material
                </h3>
                <div className="space-y-2">
                  <span className="block text-sm font-sans text-gold-600 font-medium">18K Gold Plated</span>
                  <span className="block text-sm font-sans text-muted">Sterling Silver</span>
                  <span className="block text-sm font-sans text-muted">Brass</span>
                </div>
              </div>
            </div>

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="mt-6 flex items-center gap-1.5 text-xs text-muted hover:text-dark-900 font-sans tracking-wide transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                Clear all filters
              </button>
            )}
          </div>
        )}

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-dark-700 mb-2">No pieces found</p>
            <p className="text-sm text-muted font-sans mb-6">Try adjusting your filters</p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 border border-dark-900 text-dark-900 text-xs tracking-widest uppercase font-sans hover:bg-dark-900 hover:text-cream transition-colors"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
