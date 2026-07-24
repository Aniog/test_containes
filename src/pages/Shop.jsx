import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products, categories } from '../data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';
  const activePrice = searchParams.get('price') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by price
    if (activePrice !== 'all') {
      const [min, max] = activePrice.split('-').map(Number);
      if (max) {
        result = result.filter((p) => p.price >= min && p.price <= max);
      } else {
        result = result.filter((p) => p.price >= min);
      }
    }

    // Filter by material
    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material === activeMaterial);
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured - bestsellers first
        result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }

    return result;
  }, [activeCategory, activePrice, activeMaterial, sortBy]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory !== 'all' || activePrice !== 'all' || activeMaterial !== 'all';

  const priceRanges = [
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $75', value: '50-75' },
    { label: '$75 - $100', value: '75-100' },
    { label: 'Over $100', value: '100-' },
  ];

  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Newest', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Name: A-Z', value: 'name' },
  ];

  return (
    <div className="pt-16 md:pt-20 min-h-screen">
      {/* Header */}
      <div className="section-container py-12 md:py-16">
        <div className="text-center">
          <h1 className="heading-1 text-charcoal mb-4">Shop Our Collection</h1>
          <p className="text-charcoal-light max-w-xl mx-auto">
            Discover our handcrafted demi-fine jewelry pieces, designed to bring quiet luxury to your everyday style.
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="section-container pb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-t border-b border-sand py-4">
          {/* Filter Toggle (Mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 md:hidden text-charcoal-light hover:text-charcoal transition-colors"
          >
            <Filter className="w-5 h-5" strokeWidth={1.5} />
            <span className="font-sans text-sm">Filters</span>
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-gold text-charcoal text-xs rounded-full flex items-center justify-center">
                !
              </span>
            )}
          </button>

          {/* Filter Summary (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-overline text-warm-gray">Filter:</span>
            
            {/* Category Filter */}
            <select
              value={activeCategory}
              onChange={(e) => updateFilter('category', e.target.value)}
              className="px-3 py-2 bg-transparent border border-sand rounded-sm text-body-sm text-charcoal-light cursor-pointer hover:border-charcoal-light transition-colors focus:outline-none focus:border-gold"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name} ({cat.count})
                </option>
              ))}
            </select>

            {/* Price Filter */}
            <select
              value={activePrice}
              onChange={(e) => updateFilter('price', e.target.value)}
              className="px-3 py-2 bg-transparent border border-sand rounded-sm text-body-sm text-charcoal-light cursor-pointer hover:border-charcoal-light transition-colors focus:outline-none focus:border-gold"
            >
              <option value="all">All Prices</option>
              {priceRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-warm-gray hover:text-error transition-colors text-body-sm underline"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Results Count & Sort */}
          <div className="flex items-center gap-4">
            <span className="text-body-sm text-warm-gray">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </span>
            
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none px-4 py-2 pr-10 bg-transparent border border-sand rounded-sm text-body-sm text-charcoal cursor-pointer hover:border-charcoal-light transition-colors focus:outline-none focus:border-gold"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-light pointer-events-none" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        {/* Mobile Filters Panel */}
        {showFilters && (
          <div className="md:hidden py-6 border-b border-sand">
            <div className="space-y-6">
              {/* Categories */}
              <div>
                <h3 className="font-sans text-overline text-charcoal mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`px-4 py-2 rounded-full border text-body-sm transition-colors ${
                      activeCategory === 'all'
                        ? 'border-gold bg-gold/10 text-charcoal'
                        : 'border-sand text-charcoal-light hover:border-charcoal-light'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`px-4 py-2 rounded-full border text-body-sm transition-colors ${
                        activeCategory === cat.id
                          ? 'border-gold bg-gold/10 text-charcoal'
                          : 'border-sand text-charcoal-light hover:border-charcoal-light'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Prices */}
              <div>
                <h3 className="font-sans text-overline text-charcoal mb-3">Price</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => updateFilter('price', 'all')}
                    className={`px-4 py-2 rounded-full border text-body-sm transition-colors ${
                      activePrice === 'all'
                        ? 'border-gold bg-gold/10 text-charcoal'
                        : 'border-sand text-charcoal-light hover:border-charcoal-light'
                    }`}
                  >
                    All
                  </button>
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => updateFilter('price', range.value)}
                      className={`px-4 py-2 rounded-full border text-body-sm transition-colors ${
                        activePrice === range.value
                          ? 'border-gold bg-gold/10 text-charcoal'
                          : 'border-sand text-charcoal-light hover:border-charcoal-light'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-warm-gray hover:text-error transition-colors text-body-sm underline"
                  >
                    Clear all
                  </button>
                )}
                <button
                  onClick={() => setShowFilters(false)}
                  className="ml-auto text-charcoal text-body-sm hover:text-gold transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Product Grid */}
      <div className="section-container pb-20">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-charcoal-light mb-4">No products match your filters.</p>
            <button onClick={clearFilters} className="btn-secondary">
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
