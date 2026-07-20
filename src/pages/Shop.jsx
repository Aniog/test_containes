import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products, categories, priceRanges } from '../data/products';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || '';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Sort
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
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  const handleCategoryChange = (categoryId) => {
    if (categoryId === activeCategory) {
      searchParams.delete('category');
    } else {
      searchParams.set('category', categoryId);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="bg-cream-dark py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal">
            {activeCategory
              ? categories.find((c) => c.id === activeCategory)?.name || 'Shop'
              : 'Shop All'}
          </h1>
          <p className="font-sans text-sm text-charcoal-muted mt-3">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} available
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 px-4 py-2 border border-warm-border rounded-full text-sm font-sans text-charcoal hover:border-charcoal transition-colors lg:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Active filters on mobile */}
          {activeCategory && (
            <div className="flex items-center gap-2 lg:hidden">
              <span className="px-3 py-1 bg-charcoal text-white text-xs font-sans rounded-full flex items-center gap-1">
                {categories.find((c) => c.id === activeCategory)?.name}
                <button onClick={clearFilters}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            </div>
          )}

          {/* Sort dropdown */}
          <div className="relative ml-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none px-4 py-2 pr-8 border border-warm-border rounded-full text-sm font-sans text-charcoal bg-white cursor-pointer focus:outline-none focus:border-gold"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className="hidden lg:block w-60 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs font-semibold tracking-wide-custom uppercase text-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-sans transition-colors ${
                        activeCategory === cat.id
                          ? 'bg-gold/10 text-gold font-medium'
                          : 'text-charcoal-light hover:text-charcoal hover:bg-cream-dark'
                      }`}
                    >
                      {cat.name}
                      <span className="text-charcoal-muted ml-1">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs font-semibold tracking-wide-custom uppercase text-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <div key={range.id} className="flex items-center gap-2">
                      <span className="text-sm font-sans text-charcoal-light">
                        {range.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="font-sans text-xs font-semibold tracking-wide-custom uppercase text-charcoal mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 border-warm-border rounded accent-gold"
                    />
                    <span className="text-sm font-sans text-charcoal-light">18K Gold Plated</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border-warm-border rounded accent-gold"
                    />
                    <span className="text-sm font-sans text-charcoal-light">Rose Gold</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border-warm-border rounded accent-gold"
                    />
                    <span className="text-sm font-sans text-charcoal-light">Sterling Silver</span>
                  </label>
                </div>
              </div>

              {activeCategory && (
                <button
                  onClick={clearFilters}
                  className="mt-8 w-full py-2 border border-warm-border rounded-full text-sm font-sans text-charcoal-muted hover:text-charcoal hover:border-charcoal transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filtersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setFiltersOpen(false)} />
              <div className="absolute top-0 left-0 h-full w-80 bg-cream shadow-xl p-6 overflow-y-auto animate-slideInRight">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl text-charcoal">Filters</h2>
                  <button
                    onClick={() => setFiltersOpen(false)}
                    className="p-2 text-charcoal-muted hover:text-charcoal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-sans text-xs font-semibold tracking-wide-custom uppercase text-charcoal mb-3">
                      Category
                    </h3>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            handleCategoryChange(cat.id);
                            setFiltersOpen(false);
                          }}
                          className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-sans transition-colors ${
                            activeCategory === cat.id
                              ? 'bg-gold/10 text-gold font-medium'
                              : 'text-charcoal-light hover:text-charcoal'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal mb-2">No products found</p>
                <p className="text-sm text-charcoal-muted mb-6">
                  Try adjusting your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 border border-charcoal text-sm font-sans text-charcoal rounded-full hover:bg-charcoal hover:text-white transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
