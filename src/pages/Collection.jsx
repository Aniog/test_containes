import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories, priceRanges } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSortBy('featured');
  };

  const hasActiveFilters = activeCategory !== 'all' || activePriceRange !== 'all' || activeMaterial !== 'all';

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    // Price range filter
    if (activePriceRange !== 'all') {
      const range = priceRanges.find((r) => r.id === activePriceRange);
      if (range) {
        filtered = filtered.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    // Material filter
    if (activeMaterial !== 'all') {
      filtered = filtered.filter((p) =>
        p.materials.toLowerCase().includes(activeMaterial.toLowerCase())
      );
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
      default:
        break;
    }

    return filtered;
  }, [activeCategory, activePriceRange, activeMaterial, sortBy]);

  return (
    <div className="min-h-screen bg-ivory pt-[72px]">
      {/* Header */}
      <div className="bg-sand py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <p className="text-caption uppercase tracking-[0.2em] text-gold font-sans font-medium mb-3">
            Explore
          </p>
          <h1 className="font-serif text-h1 text-charcoal">
            {activeCategory !== 'all'
              ? categories.find((c) => c.id === activeCategory)?.name || 'Shop'
              : 'Our Collection'}
          </h1>
          <p className="text-stone font-sans text-base mt-3 max-w-lg mx-auto">
            Discover demi-fine gold jewelry crafted for everyday elegance. Each piece designed to be treasured.
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="border-b border-linen bg-ivory sticky top-[72px] z-30">
        <div className="max-w-[1280px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 text-sm font-sans text-charcoal hover:text-gold transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="uppercase tracking-caption font-medium">Filters</span>
                {hasActiveFilters && (
                  <span className="w-5 h-5 bg-gold text-white text-[10px] rounded-full flex items-center justify-center">
                    !
                  </span>
                )}
              </button>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-stone hover:text-gold font-sans transition-colors"
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-stone font-sans hidden sm:inline">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </span>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm font-sans text-charcoal pr-8 cursor-pointer focus:outline-none"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-stone pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Panel */}
      {filterOpen && (
        <div className="border-b border-linen bg-white">
          <div className="max-w-[1280px] mx-auto px-6 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Category */}
              <div>
                <h3 className="text-caption uppercase tracking-caption text-charcoal font-sans font-medium mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setFilter('category', 'all')}
                    className={`block text-sm font-sans transition-colors ${
                      activeCategory === 'all' ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setFilter('category', cat.id)}
                      className={`block text-sm font-sans transition-colors ${
                        activeCategory === cat.id ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="text-caption uppercase tracking-caption text-charcoal font-sans font-medium mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setFilter('price', 'all')}
                    className={`block text-sm font-sans transition-colors ${
                      activePriceRange === 'all' ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
                    }`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setFilter('price', range.id)}
                      className={`block text-sm font-sans transition-colors ${
                        activePriceRange === range.id ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-caption uppercase tracking-caption text-charcoal font-sans font-medium mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setFilter('material', 'all')}
                    className={`block text-sm font-sans transition-colors ${
                      activeMaterial === 'all' ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
                    }`}
                  >
                    All Materials
                  </button>
                  {['gold plated', 'sterling silver'].map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setFilter('material', mat)}
                      className={`block text-sm font-sans transition-colors capitalize ${
                        activeMaterial === mat ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="border-b border-linen bg-white">
          <div className="max-w-[1280px] mx-auto px-6 py-3 flex items-center gap-2 flex-wrap">
            {activeCategory !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sand rounded-full text-xs font-sans text-charcoal">
                {categories.find((c) => c.id === activeCategory)?.name}
                <button onClick={() => setFilter('category', 'all')}>
                  <X className="w-3 h-3 text-stone hover:text-charcoal" />
                </button>
              </span>
            )}
            {activePriceRange !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sand rounded-full text-xs font-sans text-charcoal">
                {priceRanges.find((r) => r.id === activePriceRange)?.label}
                <button onClick={() => setFilter('price', 'all')}>
                  <X className="w-3 h-3 text-stone hover:text-charcoal" />
                </button>
              </span>
            )}
            {activeMaterial !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sand rounded-full text-xs font-sans text-charcoal capitalize">
                {activeMaterial}
                <button onClick={() => setFilter('material', 'all')}>
                  <X className="w-3 h-3 text-stone hover:text-charcoal" />
                </button>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-16">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-charcoal mb-2">No products found</p>
            <p className="text-stone font-sans text-sm mb-6">
              Try adjusting your filters to find what you're looking for.
            </p>
            <button
              onClick={clearFilters}
              className="px-8 py-3.5 bg-gold text-white text-btn uppercase tracking-btn font-sans font-medium hover:bg-gold-dark transition-colors rounded-btn"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
