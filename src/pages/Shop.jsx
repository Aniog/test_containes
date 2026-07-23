import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products, categories } from '../data/products';

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
  { id: '75-100', label: '$75 - $100', min: 75, max: 100 },
  { id: 'over-100', label: 'Over $100', min: 100, max: Infinity }
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' }
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Get filters from URL
  const selectedCategory = searchParams.get('category') || 'all';
  const selectedPriceRange = searchParams.get('price') || 'all';
  const selectedSort = searchParams.get('sort') || 'featured';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price filter
    const priceRange = priceRanges.find(p => p.id === selectedPriceRange);
    if (priceRange) {
      result = result.filter(p => p.price >= priceRange.min && p.price < priceRange.max);
    }

    // Sort
    switch (selectedSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedPriceRange, selectedSort]);

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

  const hasActiveFilters = selectedCategory !== 'all' || selectedPriceRange !== 'all' || selectedSort !== 'featured';

  return (
    <main className="min-h-screen pt-20 md:pt-24 pb-20">
      <div className="container-wide">
        {/* Page header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-3xl md:text-4xl mb-4">Shop</h1>
          <p className="text-[var(--color-text-secondary)]">
            Discover our collection of demi-fine jewelry
          </p>
        </div>

        {/* Mobile filter toggle */}
        <div className="md:hidden flex items-center justify-between mb-6">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 text-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <select
            value={selectedSort}
            onChange={(e) => updateFilter('sort', e.target.value)}
            className="text-sm border border-[var(--color-border)] px-3 py-2 bg-white"
          >
            {sortOptions.map(option => (
              <option key={option.id} value={option.id}>{option.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-wider mb-4 text-[var(--color-text-muted)]">
                Category
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`text-sm transition-colors ${
                      selectedCategory === 'all'
                        ? 'text-[var(--color-gold)]'
                        : 'hover:text-[var(--color-gold)]'
                    }`}
                  >
                    All Products
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => updateFilter('category', cat.id)}
                      className={`text-sm transition-colors ${
                        selectedCategory === cat.id
                          ? 'text-[var(--color-gold)]'
                          : 'hover:text-[var(--color-gold)]'
                      }`}
                    >
                      {cat.name}
                      <span className="text-[var(--color-text-muted)] ml-1">
                        ({cat.count})
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-wider mb-4 text-[var(--color-text-muted)]">
                Price
              </h3>
              <ul className="space-y-2">
                {priceRanges.map(range => (
                  <li key={range.id}>
                    <button
                      onClick={() => updateFilter('price', range.id)}
                      className={`text-sm transition-colors ${
                        selectedPriceRange === range.id
                          ? 'text-[var(--color-gold)]'
                          : 'hover:text-[var(--color-gold)]'
                      }`}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Products */}
          <div className="flex-1">
            {/* Desktop sort and results count */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="text-sm text-[var(--color-text-muted)]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <select
                value={selectedSort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="text-sm border border-[var(--color-border)] px-4 py-2 bg-white"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.label}</option>
                ))}
              </select>
            </div>

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[var(--color-text-secondary)] mb-4">
                  No products found matching your criteria.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/40 z-50 transition-opacity md:hidden ${
            isMobileFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileFilterOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-72 bg-[var(--color-ivory)] z-50 transform transition-transform duration-300 md:hidden ${
            isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)]">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                <span className="font-serif text-lg">Filters</span>
              </div>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-wider mb-4 text-[var(--color-text-muted)]">
                  Category
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => {
                        updateFilter('category', 'all');
                        setIsMobileFilterOpen(false);
                      }}
                      className={`text-sm transition-colors ${
                        selectedCategory === 'all'
                          ? 'text-[var(--color-gold)]'
                          : 'hover:text-[var(--color-gold)]'
                      }`}
                    >
                      All Products
                    </button>
                  </li>
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button
                        onClick={() => {
                          updateFilter('category', cat.id);
                          setIsMobileFilterOpen(false);
                        }}
                        className={`text-sm transition-colors ${
                          selectedCategory === cat.id
                            ? 'text-[var(--color-gold)]'
                            : 'hover:text-[var(--color-gold)]'
                        }`}
                      >
                        {cat.name}
                        <span className="text-[var(--color-text-muted)] ml-1">
                          ({cat.count})
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-wider mb-4 text-[var(--color-text-muted)]">
                  Price
                </h3>
                <ul className="space-y-3">
                  {priceRanges.map(range => (
                    <li key={range.id}>
                      <button
                        onClick={() => {
                          updateFilter('price', range.id);
                          setIsMobileFilterOpen(false);
                        }}
                        className={`text-sm transition-colors ${
                          selectedPriceRange === range.id
                            ? 'text-[var(--color-gold)]'
                            : 'hover:text-[var(--color-gold)]'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer */}
            {hasActiveFilters && (
              <div className="border-t border-[var(--color-border)] px-6 py-4">
                <button
                  onClick={() => {
                    clearFilters();
                    setIsMobileFilterOpen(false);
                  }}
                  className="w-full text-sm text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    </main>
  );
}
