import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/home/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: 'under-50', label: 'Under $50' },
  { value: '50-75', label: '$50 - $75' },
  { value: '75-100', label: '$75 - $100' },
  { value: 'over-100', label: 'Over $100' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const categoryParam = searchParams.get('category') || 'all';

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedPrice, setSelectedPrice] = useState('all');

  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by price
    switch (selectedPrice) {
      case 'under-50':
        result = result.filter((p) => p.price < 50);
        break;
      case '50-75':
        result = result.filter((p) => p.price >= 50 && p.price <= 75);
        break;
      case '75-100':
        result = result.filter((p) => p.price > 75 && p.price <= 100);
        break;
      case 'over-100':
        result = result.filter((p) => p.price > 100);
        break;
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
    }

    return result;
  }, [selectedCategory, selectedPrice, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice('all');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPrice !== 'all';

  return (
    <main className="pt-16 md:pt-20">
      {/* Header */}
      <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="container-main py-12 md:py-16">
          <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-text)] text-center">
            {selectedCategory === 'all' ? 'Shop All' : categories.find(c => c.id === selectedCategory)?.name || 'Shop'}
          </h1>
          <p className="text-[var(--color-text-secondary)] text-center mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="container-main py-8 md:py-12">
        {/* Mobile Filter Toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
          >
            <SlidersHorizontal size={18} />
            <span>Filters</span>
          </button>

          {/* Mobile Sort */}
          <div className="relative">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            >
              <span>Sort by</span>
              <ChevronDown size={16} />
            </button>
            {showSortDropdown && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-[var(--color-surface)] border border-[var(--color-border)] shadow-lg z-20">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setShowSortDropdown(false);
                    }}
                    className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                      sortBy === option.value
                        ? 'text-[var(--color-accent)] bg-[var(--color-surface-hover)]'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-hover)]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-[var(--color-text)] mb-4 tracking-wider uppercase">
                  Category
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleCategoryChange('all')}
                      className={`w-full text-left py-1 text-sm transition-colors ${
                        selectedCategory === 'all'
                          ? 'text-[var(--color-accent)]'
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
                      }`}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`w-full text-left py-1 text-sm transition-colors ${
                          selectedCategory === cat.id
                            ? 'text-[var(--color-accent)]'
                            : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-[var(--color-text)] mb-4 tracking-wider uppercase">
                  Price
                </h3>
                <ul className="space-y-2">
                  {priceRanges.map((range) => (
                    <li key={range.value}>
                      <button
                        onClick={() => setSelectedPrice(range.value)}
                        className={`w-full text-left py-1 text-sm transition-colors ${
                          selectedPrice === range.value
                            ? 'text-[var(--color-accent)]'
                            : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
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
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-error)] transition-colors underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Desktop Sort Bar */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="text-sm text-[var(--color-text-secondary)]">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'}
              </p>
              <div className="relative">
                <button
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
                >
                  <span>Sort by: {sortOptions.find(o => o.value === sortBy)?.label}</span>
                  <ChevronDown size={14} />
                </button>
                {showSortDropdown && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-[var(--color-surface)] border border-[var(--color-border)] shadow-lg z-20">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setShowSortDropdown(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                          sortBy === option.value
                            ? 'text-[var(--color-accent)] bg-[var(--color-surface-hover)]'
                            : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-hover)]'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-[var(--color-text-secondary)] mb-4">
                  No products found matching your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-secondary text-sm"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85vw] bg-[var(--color-surface)] shadow-xl animate-slide-in-left overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)]">
              <h2 className="font-serif text-lg tracking-[0.1em]">FILTERS</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 -mr-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-[var(--color-text)] mb-4 tracking-wider uppercase">
                  Category
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => {
                        handleCategoryChange('all');
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left py-1 text-sm transition-colors ${
                        selectedCategory === 'all'
                          ? 'text-[var(--color-accent)]'
                          : 'text-[var(--color-text-secondary)]'
                      }`}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        onClick={() => {
                          handleCategoryChange(cat.id);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left py-1 text-sm transition-colors ${
                          selectedCategory === cat.id
                            ? 'text-[var(--color-accent)]'
                            : 'text-[var(--color-text-secondary)]'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-[var(--color-text)] mb-4 tracking-wider uppercase">
                  Price
                </h3>
                <ul className="space-y-3">
                  {priceRanges.map((range) => (
                    <li key={range.value}>
                      <button
                        onClick={() => {
                          setSelectedPrice(range.value);
                          setIsFilterOpen(false);
                        }}
                        className={`w-full text-left py-1 text-sm transition-colors ${
                          selectedPrice === range.value
                            ? 'text-[var(--color-accent)]'
                            : 'text-[var(--color-text-secondary)]'
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
                  onClick={() => {
                    clearFilters();
                    setIsFilterOpen(false);
                  }}
                  className="text-sm text-[var(--color-error)] underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
