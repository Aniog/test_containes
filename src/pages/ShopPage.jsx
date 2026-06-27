import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get filter values from URL
  const currentCategory = searchParams.get('category') || 'all';
  const currentSort = searchParams.get('sort') || 'featured';
  const priceRange = searchParams.get('price') || 'all';

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (currentCategory !== 'all') {
      result = result.filter(p => p.category === currentCategory);
    }

    // Price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && (max ? p.price <= max : true));
    }

    // Sorting
    switch (currentSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [currentCategory, currentSort, priceRange]);

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'all' || value === '') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = currentCategory !== 'all' || priceRange !== 'all';

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-40', label: 'Under $40' },
    { value: '40-60', label: '$40 - $60' },
    { value: '60-80', label: '$60 - $80' },
    { value: '80-100', label: '$80 - $100' },
    { value: '100-999', label: 'Over $100' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' }
  ];

  return (
    <main className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 
            className="font-serif text-3xl md:text-4xl mb-4"
            style={{ fontFamily: 'var(--font-family-serif)' }}
          >
            {currentCategory === 'all' ? 'Shop All' : categories.find(c => c.id === currentCategory)?.name || 'Shop'}
          </h1>
          <p className="text-[var(--color-muted)]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          
          <div className="relative">
            <select
              value={currentSort}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="appearance-none bg-transparent pr-6 py-2 text-sm focus:outline-none"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="font-medium mb-4">Category</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`text-sm hover:text-[var(--color-velmora-gold)] transition-colors ${
                      currentCategory === 'all' ? 'text-[var(--color-velmora-gold)]' : 'text-[var(--color-muted)]'
                    }`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => updateFilter('category', cat.id)}
                      className={`text-sm hover:text-[var(--color-velmora-gold)] transition-colors ${
                        currentCategory === cat.id ? 'text-[var(--color-velmora-gold)]' : 'text-[var(--color-muted)]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h3 className="font-medium mb-4">Price</h3>
              <ul className="space-y-3">
                {priceRanges.map(range => (
                  <li key={range.value}>
                    <button
                      onClick={() => updateFilter('price', range.value)}
                      className={`text-sm hover:text-[var(--color-velmora-gold)] transition-colors ${
                        priceRange === range.value ? 'text-[var(--color-velmora-gold)]' : 'text-[var(--color-muted)]'
                      }`}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] underline"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <span className="text-sm text-[var(--color-muted)] mr-4">Sort by:</span>
              <div className="relative">
                <select
                  value={currentSort}
                  onChange={(e) => updateFilter('sort', e.target.value)}
                  className="appearance-none bg-transparent pr-6 py-2 text-sm focus:outline-none"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[var(--color-muted)] mb-4">No products found</p>
                <button onClick={clearFilters} className="btn-secondary">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-white z-50 md:hidden max-h-[80vh] overflow-y-auto rounded-t-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl">Filters</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Category */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Category</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => updateFilter('category', 'all')}
                    className={`px-4 py-2 text-sm border ${
                      currentCategory === 'all' 
                        ? 'border-[var(--color-velmora-charcoal)] bg-[var(--color-velmora-charcoal)] text-white' 
                        : 'border-[var(--color-border)]'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => updateFilter('category', cat.id)}
                      className={`px-4 py-2 text-sm border ${
                        currentCategory === cat.id 
                          ? 'border-[var(--color-velmora-charcoal)] bg-[var(--color-velmora-charcoal)] text-white' 
                          : 'border-[var(--color-border)]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price</h3>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.value}
                      onClick={() => updateFilter('price', range.value)}
                      className={`px-4 py-2 text-sm border ${
                        priceRange === range.value 
                          ? 'border-[var(--color-velmora-charcoal)] bg-[var(--color-velmora-charcoal)] text-white' 
                          : 'border-[var(--color-border)]'
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
                  <button onClick={clearFilters} className="btn-secondary flex-1">
                    Clear
                  </button>
                )}
                <button onClick={() => setIsFilterOpen(false)} className="btn-primary flex-1">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default ShopPage;