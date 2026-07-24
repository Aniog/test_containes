import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  const categoryFilter = searchParams.get('category') || '';
  const priceFilter = searchParams.get('price') || '';

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      if (categoryFilter && product.category !== categoryFilter) return false;
      if (priceFilter) {
        const [min, max] = priceFilter.split('-').map(Number);
        if (max && (product.price < min || product.price > max)) return false;
        if (!max && product.price < min) return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return 0;
      }
    });

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    setSearchParams(params);
  };

  const handlePriceChange = (price) => {
    const params = new URLSearchParams(searchParams);
    if (price) {
      params.set('price', price);
    } else {
      params.delete('price');
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams(new URLSearchParams());
    setSortBy('featured');
  };

  const hasActiveFilters = categoryFilter || priceFilter;

  return (
    <div className="pt-16 sm:pt-20">
      {/* Header */}
      <div className="bg-white border-b border-divider">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h1
            className="font-serif text-3xl sm:text-4xl text-text-primary mb-2"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Shop All
          </h1>
          <p className="text-text-secondary">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block">
            <FilterSidebar
              categories={categories}
              selectedCategory={categoryFilter}
              selectedPrice={priceFilter}
              onCategoryChange={handleCategoryChange}
              onPriceChange={handlePriceChange}
            />
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6 flex items-center justify-between">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center gap-2 text-sm uppercase tracking-wider"
            >
              <SlidersHorizontal size={18} />
              Filters
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-gold" />
              )}
            </button>

            <div className="flex items-center gap-3">
              <label htmlFor="sort" className="text-sm text-text-secondary">
                Sort:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border-none bg-transparent text-text-primary focus:outline-none cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div>
            {/* Sort - Desktop */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-text-secondary">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="flex items-center gap-3">
                <label htmlFor="sort-desktop" className="text-sm text-text-secondary">
                  Sort by:
                </label>
                <select
                  id="sort-desktop"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border-none bg-transparent text-text-primary focus:outline-none cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm text-text-secondary">Active filters:</span>
                {categoryFilter && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-cream text-sm">
                    {categories.find((c) => c.id === categoryFilter)?.name}
                    <button
                      onClick={() => handleCategoryChange('')}
                      className="ml-1"
                      aria-label="Remove category filter"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                {priceFilter && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-cream text-sm">
                    ${priceFilter.replace('-', ' - $')}
                    <button
                      onClick={() => handlePriceChange('')}
                      className="ml-1"
                      aria-label="Remove price filter"
                    >
                      <X size={14} />
                    </button>
                  </span>
                )}
                <button
                  onClick={clearFilters}
                  className="text-sm text-gold hover:text-gold-dark underline"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-text-secondary mb-4">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-gold hover:text-gold-dark underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsFilterOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-xl transition-transform duration-300 ${
            isFilterOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
              <h2 className="text-lg font-medium uppercase tracking-wider">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 -mr-2"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <FilterSidebar
                categories={categories}
                selectedCategory={categoryFilter}
                selectedPrice={priceFilter}
                onCategoryChange={(cat) => {
                  handleCategoryChange(cat);
                }}
                onPriceChange={handlePriceChange}
                onClose={() => setIsFilterOpen(false)}
              />
            </div>
            <div className="px-6 py-4 border-t border-divider">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full py-3 bg-gold text-white text-sm uppercase tracking-wider"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterSidebar({
  categories,
  selectedCategory,
  selectedPrice,
  onCategoryChange,
  onPriceChange,
  onClose,
}) {
  const priceRanges = [
    { value: '0-50', label: 'Under $50' },
    { value: '50-75', label: '$50 - $75' },
    { value: '75-100', label: '$75 - $100' },
    { value: '100-', label: '$100+' },
  ];

  return (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-sm uppercase tracking-wider text-text-primary mb-4">
          Category
        </h3>
        <ul className="space-y-3">
          <li>
            <button
              onClick={() => {
                onCategoryChange('');
                if (onClose) onClose();
              }}
              className={`text-sm transition-colors ${
                !selectedCategory
                  ? 'text-gold font-medium'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              All
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => {
                  onCategoryChange(category.id);
                  if (onClose) onClose();
                }}
                className={`text-sm transition-colors ${
                  selectedCategory === category.id
                    ? 'text-gold font-medium'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {category.name}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                onCategoryChange('sets');
                if (onClose) onClose();
              }}
              className={`text-sm transition-colors ${
                selectedCategory === 'sets'
                  ? 'text-gold font-medium'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Gift Sets
            </button>
          </li>
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-sm uppercase tracking-wider text-text-primary mb-4">
          Price
        </h3>
        <ul className="space-y-3">
          {priceRanges.map((range) => (
            <li key={range.value}>
              <button
                onClick={() => {
                  onPriceChange(range.value);
                  if (onClose) onClose();
                }}
                className={`text-sm transition-colors ${
                  selectedPrice === range.value
                    ? 'text-gold font-medium'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
