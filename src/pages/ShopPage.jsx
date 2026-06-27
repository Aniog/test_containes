import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const categoryParam = searchParams.get('category');
  const priceParam = searchParams.get('price');
  const sortParam = searchParams.get('sort') || 'featured';

  const [filters, setFilters] = useState({
    category: categoryParam || 'all',
    price: priceParam || 'all',
  });

  const [sort, setSort] = useState(sortParam);

  useEffect(() => {
    setFilters({
      category: categoryParam || 'all',
      price: priceParam || 'all',
    });
  }, [categoryParam, priceParam]);

  // Filter products
  let filteredProducts = [...products];

  if (filters.category !== 'all') {
    filteredProducts = filteredProducts.filter((p) => p.category === filters.category);
  }

  if (filters.price !== 'all') {
    const [min, max] = filters.price.split('-').map(Number);
    filteredProducts = filteredProducts.filter((p) => {
      if (max) return p.price >= min && p.price <= max;
      return p.price >= min;
    });
  }

  // Sort products
  switch (sort) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      filteredProducts.reverse();
      break;
    case 'featured':
    default:
      break;
  }

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);

    const params = new URLSearchParams();
    if (newFilters.category !== 'all') params.set('category', newFilters.category);
    if (newFilters.price !== 'all') params.set('price', newFilters.price);
    if (sort !== 'featured') params.set('sort', sort);
    setSearchParams(params);
  };

  const handleSortChange = (value) => {
    setSort(value);
    const params = new URLSearchParams(searchParams);
    if (value !== 'featured') {
      params.set('sort', value);
    } else {
      params.delete('sort');
    }
    setSearchParams(params);
    setIsSortOpen(false);
  };

  const clearFilters = () => {
    setFilters({ category: 'all', price: 'all' });
    setSort('featured');
    setSearchParams({});
  };

  const hasActiveFilters = filters.category !== 'all' || filters.price !== 'all';

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-40', label: 'Under $40' },
    { value: '40-60', label: '$40 - $60' },
    { value: '60-100', label: '$60 - $100' },
    { value: '100-999', label: '$100+' },
  ];

  return (
    <main className="min-h-screen pt-20">
      <div className="container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-4xl text-[var(--color-text-primary)] mb-3"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Shop All
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--color-border)]">
          {/* Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-[var(--color-accent)] text-white text-xs rounded-full flex items-center justify-center">
                {(filters.category !== 'all' ? 1 : 0) + (filters.price !== 'all' ? 1 : 0)}
              </span>
            )}
          </button>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              Sort by: {sortOptions.find((o) => o.value === sort)?.label}
              <ChevronDown className={`w-4 h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
            </button>

            {isSortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-[var(--color-surface)] border border-[var(--color-border)] shadow-lg z-20 min-w-[180px]">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSortChange(option.value)}
                    className={`w-full px-4 py-3 text-left text-sm hover:bg-[var(--color-bg)] transition-colors ${
                      sort === option.value ? 'text-[var(--color-accent)]' : ''
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Active Filters Pills */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-xs text-[var(--color-text-muted)]">Active filters:</span>
            {filters.category !== 'all' && (
              <button
                onClick={() => handleFilterChange('category', 'all')}
                className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--color-bg)] text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                {categories.find((c) => c.id === filters.category)?.name || filters.category}
                <X className="w-3 h-3" />
              </button>
            )}
            {filters.price !== 'all' && (
              <button
                onClick={() => handleFilterChange('price', 'all')}
                className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--color-bg)] text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                {priceRanges.find((p) => p.value === filters.price)?.label}
                <X className="w-3 h-3" />
              </button>
            )}
            <button
              onClick={clearFilters}
              className="text-xs text-[var(--color-accent)] hover:underline"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[var(--color-text-secondary)] mb-4">No products found matching your filters.</p>
            <button onClick={clearFilters} className="btn-outline">
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Filter Sidebar Overlay */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-full max-w-sm bg-[var(--color-surface)] p-6 overflow-y-auto animate-[slideInRight_0.3s_ease]">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg" style={{ fontFamily: 'var(--font-serif)' }}>
                Filters
              </h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 -mr-2"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-4">
                Category
              </h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="category"
                    value="all"
                    checked={filters.category === 'all'}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="w-4 h-4 accent-[var(--color-accent)]"
                  />
                  <span className="text-sm group-hover:text-[var(--color-accent)] transition-colors">
                    All Categories
                  </span>
                </label>
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="category"
                      value={category.id}
                      checked={filters.category === category.id}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                      className="w-4 h-4 accent-[var(--color-accent)]"
                    />
                    <span className="text-sm group-hover:text-[var(--color-accent)] transition-colors">
                      {category.name}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h3 className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-4">
                Price
              </h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label key={range.value} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="price"
                      value={range.value}
                      checked={filters.price === range.value}
                      onChange={(e) => handleFilterChange('price', e.target.value)}
                      className="w-4 h-4 accent-[var(--color-accent)]"
                    />
                    <span className="text-sm group-hover:text-[var(--color-accent)] transition-colors">
                      {range.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 py-3 border border-[var(--color-border)] text-xs tracking-[0.1em] uppercase hover:bg-[var(--color-bg)] transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 py-3 bg-[var(--color-text-primary)] text-white text-xs tracking-[0.1em] uppercase hover:bg-[var(--color-charcoal)] transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}