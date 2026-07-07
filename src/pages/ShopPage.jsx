import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ProductCard } from '@/components/product/ProductCard';
import { products, categories } from '@/data/products';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  
  const categoryFilter = searchParams.get('category') || 'all';
  const priceFilter = searchParams.get('price') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = categoryFilter !== 'all' || priceFilter !== 'all';

  // Filter products
  let filteredProducts = [...products];

  if (categoryFilter !== 'all') {
    filteredProducts = filteredProducts.filter((p) => p.category === categoryFilter);
  }

  if (priceFilter !== 'all') {
    const range = priceRanges.find((r) => r.label === priceFilter);
    if (range) {
      filteredProducts = filteredProducts.filter(
        (p) => p.price >= range.min && p.price < range.max
      );
    }
  }

  // Sort products
  switch (sortBy) {
    case 'price-asc':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
  }

  return (
    <main className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-cream-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="section-title mb-4">Shop the Collection</h1>
          <p className="text-charcoal-500 font-light">
            Discover our full range of demi-fine jewelry
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
                <h3 className="font-sans text-xs tracking-extra-wide uppercase text-charcoal-800 mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`block w-full text-left py-2 text-sm font-light transition-colors ${
                      categoryFilter === 'all'
                        ? 'text-gold-600'
                        : 'text-charcoal-600 hover:text-charcoal-800'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`block w-full text-left py-2 text-sm font-light capitalize transition-colors ${
                        categoryFilter === cat.id
                          ? 'text-gold-600'
                          : 'text-charcoal-600 hover:text-charcoal-800'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs tracking-extra-wide uppercase text-charcoal-800 mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => updateFilter('price', range.label)}
                      className={`block w-full text-left py-2 text-sm font-light transition-colors ${
                        priceFilter === range.label
                          ? 'text-gold-600'
                          : 'text-charcoal-600 hover:text-charcoal-800'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-charcoal-500 hover:text-gold-600 transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(true)}
            className="lg:hidden flex items-center justify-center gap-2 py-3 border border-charcoal-300 text-sm text-charcoal-700"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort & Results */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-charcoal-500 font-light">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <select
                value={sortBy}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="text-sm text-charcoal-700 bg-transparent border-none focus:outline-none cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-charcoal-500 font-light mb-4">
                  No products found matching your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-outline text-sm"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <>
          <div
            className="fixed inset-0 bg-charcoal-900/50 z-50 lg:hidden"
            onClick={() => setShowFilters(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-cream-50 z-50 rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto lg:hidden animate-slide-in-right">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-lg">Filters</h2>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 -mr-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-sans text-xs tracking-extra-wide uppercase text-charcoal-800 mb-3">
                Category
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => { updateFilter('category', 'all'); setShowFilters(false); }}
                  className={`block w-full text-left py-2 text-sm font-light ${
                    categoryFilter === 'all' ? 'text-gold-600' : 'text-charcoal-600'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { updateFilter('category', cat.id); setShowFilters(false); }}
                    className={`block w-full text-left py-2 text-sm font-light capitalize ${
                      categoryFilter === cat.id ? 'text-gold-600' : 'text-charcoal-600'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <h3 className="font-sans text-xs tracking-extra-wide uppercase text-charcoal-800 mb-3">
                Price
              </h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => { updateFilter('price', range.label); setShowFilters(false); }}
                    className={`block w-full text-left py-2 text-sm font-light ${
                      priceFilter === range.label ? 'text-gold-600' : 'text-charcoal-600'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={() => { clearFilters(); setShowFilters(false); }}
                className="w-full py-3 text-sm text-charcoal-500 hover:text-gold-600"
              >
                Clear all filters
              </button>
            )}
          </div>
        </>
      )}
    </main>
  );
}
