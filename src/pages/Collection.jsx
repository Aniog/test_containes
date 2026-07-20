import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/products/ProductCard';
import { products, categories } from '../data/products';

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activeMinPrice = parseInt(searchParams.get('minPrice')) || 0;
  const activeMaxPrice = parseInt(searchParams.get('maxPrice')) || 200;

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
      const priceMatch = product.price >= activeMinPrice && product.price <= activeMaxPrice;
      return categoryMatch && priceMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'rating':
          return b.rating - a.rating;
        default:
          return b.bestseller ? 1 : -1;
      }
    });

  const handleCategoryChange = (category) => {
    const newParams = new URLSearchParams(searchParams);
    if (category === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    setSearchParams(newParams);
  };

  const handlePriceChange = (min, max) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('minPrice', min.toString());
    newParams.set('maxPrice', max.toString());
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasActiveFilters = activeCategory !== 'all' || activeMinPrice > 0 || activeMaxPrice < 200;

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name' },
    { value: 'rating', label: 'Top Rated' }
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-[var(--velmora-ivory)]">
      {/* Hero Banner */}
      <div className="bg-[var(--velmora-cream)] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--velmora-charcoal)] mb-4">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="text-[var(--velmora-gray-600)] max-w-xl mx-auto">
            Discover our collection of handcrafted demi-fine jewelry, designed for everyday luxury.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--velmora-gray-200)]">
          {/* Results Count */}
          <p className="text-sm text-[var(--velmora-gray-600)]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>

          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 text-sm text-[var(--velmora-charcoal)] hover:text-[var(--velmora-gold)] transition-colors"
              >
                <span>Sort by: {sortOptions.find(o => o.value === sortBy)?.label}</span>
                <ChevronDown size={16} className={`transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showSortDropdown && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowSortDropdown(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-[var(--velmora-gray-200)] py-2 z-20">
                    {sortOptions.map(option => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setShowSortDropdown(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm hover:bg-[var(--velmora-gray-100)] transition-colors ${
                          sortBy === option.value ? 'text-[var(--velmora-gold)]' : 'text-[var(--velmora-charcoal)]'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Filter Button (Mobile) */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="md:hidden flex items-center gap-2 text-sm text-[var(--velmora-charcoal)]"
            >
              <SlidersHorizontal size={18} />
              <span>Filter</span>
              {hasActiveFilters && (
                <span className="w-5 h-5 bg-[var(--velmora-gold)] text-white text-xs rounded-full flex items-center justify-center">
                  !
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <FilterSidebar
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
                onPriceChange={handlePriceChange}
                activeMinPrice={activeMinPrice}
                activeMaxPrice={activeMaxPrice}
                hasActiveFilters={hasActiveFilters}
                onClearFilters={clearFilters}
              />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-[var(--velmora-gray-600)] mb-4">No products found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="text-[var(--velmora-gold)] hover:text-[var(--velmora-gold-dark)] underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <MobileFilterDrawer
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          onPriceChange={handlePriceChange}
          activeMinPrice={activeMinPrice}
          activeMaxPrice={activeMaxPrice}
          hasActiveFilters={hasActiveFilters}
          onClearFilters={clearFilters}
          onClose={() => setIsFilterOpen(false)}
          productCount={filteredProducts.length}
        />
      )}
    </div>
  );
}

function FilterSidebar({ categories, activeCategory, onCategoryChange, onPriceChange, activeMinPrice, activeMaxPrice, hasActiveFilters, onClearFilters }) {
  const priceRanges = [
    { min: 0, max: 200, label: 'All Prices' },
    { min: 0, max: 50, label: 'Under $50' },
    { min: 50, max: 75, label: '$50 - $75' },
    { min: 75, max: 100, label: '$75 - $100' },
    { min: 100, max: 200, label: '$100+' }
  ];

  return (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-medium text-[var(--velmora-charcoal)] uppercase tracking-wider mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange('all')}
            className={`block w-full text-left py-1 text-sm transition-colors ${
              activeCategory === 'all'
                ? 'text-[var(--velmora-gold)]'
                : 'text-[var(--velmora-gray-600)] hover:text-[var(--velmora-charcoal)]'
            }`}
          >
            All Jewelry
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`block w-full text-left py-1 text-sm transition-colors ${
                activeCategory === category.id
                  ? 'text-[var(--velmora-gold)]'
                  : 'text-[var(--velmora-gray-600)] hover:text-[var(--velmora-charcoal)]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-medium text-[var(--velmora-charcoal)] uppercase tracking-wider mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => onPriceChange(range.min, range.max)}
              className={`block w-full text-left py-1 text-sm transition-colors ${
                activeMinPrice === range.min && activeMaxPrice === range.max
                  ? 'text-[var(--velmora-gold)]'
                  : 'text-[var(--velmora-gray-600)] hover:text-[var(--velmora-charcoal)]'
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
          onClick={onClearFilters}
          className="text-sm text-[var(--velmora-taupe)] hover:text-[var(--velmora-gold)] underline underline-offset-4 transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
}

function MobileFilterDrawer({ categories, activeCategory, onCategoryChange, onPriceChange, activeMinPrice, activeMaxPrice, hasActiveFilters, onClearFilters, onClose, productCount }) {
  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-[var(--velmora-ivory)] animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--velmora-gray-200)]">
            <h2 className="font-serif text-xl text-[var(--velmora-charcoal)]">
              Filters
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-[var(--velmora-gray-600)] hover:text-[var(--velmora-charcoal)]"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <FilterSidebar
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={onCategoryChange}
              onPriceChange={onPriceChange}
              activeMinPrice={activeMinPrice}
              activeMaxPrice={activeMaxPrice}
              hasActiveFilters={hasActiveFilters}
              onClearFilters={onClearFilters}
            />
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-[var(--velmora-gray-200)]">
            <button
              onClick={onClose}
              className="w-full py-4 bg-[var(--velmora-gold)] text-white font-medium tracking-wider uppercase rounded hover:bg-[var(--velmora-gold-dark)] transition-colors"
            >
              View {productCount} Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
