import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Get filter values from URL
  const activeCategory = searchParams.get('category') || 'all';
  const priceRange = searchParams.get('price') || 'all';
  const material = searchParams.get('material') || 'all';

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      if (activeCategory !== 'all' && product.category !== activeCategory) return false;
      if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
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
        case 'newest':
          return b.isNew ? 1 : -1;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return b.featured ? 1 : -1;
      }
    });

  const updateFilters = (key, value) => {
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

  const hasActiveFilters = activeCategory !== 'all' || priceRange !== 'all' || material !== 'all';

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name: A to Z' },
  ];

  return (
    <main className="pt-20 md:pt-24 pb-20">
      {/* Header */}
      <div className="bg-[var(--color-parchment)] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] mb-4">
            {activeCategory !== 'all' 
              ? categories.find(c => c.id === activeCategory)?.name || 'Shop'
              : 'All Jewelry'
            }
          </h1>
          <p className="text-[var(--color-stone)]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--color-sand)]">
          {/* Filter Button (Mobile) */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm text-[var(--color-charcoal)]"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-[var(--color-gold)] rounded-full" />
            )}
          </button>

          {/* Category Pills (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => updateFilters('category', 'all')}
              className={`px-4 py-2 text-sm transition-colors ${
                activeCategory === 'all'
                  ? 'bg-[var(--color-charcoal)] text-[var(--color-ivory)]'
                  : 'text-[var(--color-charcoal)] hover:text-[var(--color-gold)]'
              }`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => updateFilters('category', category.id)}
                className={`px-4 py-2 text-sm transition-colors ${
                  activeCategory === category.id
                    ? 'bg-[var(--color-charcoal)] text-[var(--color-ivory)]'
                    : 'text-[var(--color-charcoal)] hover:text-[var(--color-gold)]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="flex items-center gap-2 text-sm text-[var(--color-charcoal)]"
            >
              Sort by: <span className="font-medium">{sortOptions.find(o => o.value === sortBy)?.label}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showSortDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showSortDropdown && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowSortDropdown(false)}
                />
                <div className="absolute right-0 top-full mt-2 w-48 bg-[var(--color-ivory)] border border-[var(--color-sand)] shadow-lg z-20">
                  {sortOptions.map(option => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setSortBy(option.value);
                        setShowSortDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                        sortBy === option.value
                          ? 'bg-[var(--color-parchment)] text-[var(--color-gold)]'
                          : 'text-[var(--color-charcoal)] hover:bg-[var(--color-parchment)]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm text-[var(--color-stone)]">Active filters:</span>
            {activeCategory !== 'all' && (
              <button
                onClick={() => updateFilters('category', 'all')}
                className="flex items-center gap-1 px-3 py-1 bg-[var(--color-parchment)] text-sm text-[var(--color-charcoal)] hover:bg-[var(--color-sand)] transition-colors"
              >
                {categories.find(c => c.id === activeCategory)?.name}
                <X className="w-3 h-3" />
              </button>
            )}
            {priceRange !== 'all' && (
              <button
                onClick={() => updateFilters('price', 'all')}
                className="flex items-center gap-1 px-3 py-1 bg-[var(--color-parchment)] text-sm text-[var(--color-charcoal)] hover:bg-[var(--color-sand)] transition-colors"
              >
                {priceRange === 'under-50' ? 'Under $50' : 
                 priceRange === '50-100' ? '$50 - $100' : 'Over $100'}
                <X className="w-3 h-3" />
              </button>
            )}
            <button
              onClick={clearFilters}
              className="text-sm text-[var(--color-gold)] hover:underline"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[var(--color-stone)] mb-4">No products found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="btn-outline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-[var(--color-ivory)] z-50 rounded-t-2xl max-h-[80vh] overflow-y-auto lg:hidden animate-slide-in">
            <div className="sticky top-0 bg-[var(--color-ivory)] flex items-center justify-between p-4 border-b border-[var(--color-sand)]">
              <h2 className="font-serif text-lg">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-medium mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilters('category', 'all')}
                    className={`w-full text-left px-4 py-2 text-sm ${
                      activeCategory === 'all' ? 'bg-[var(--color-parchment)]' : ''
                    }`}
                  >
                    All
                  </button>
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => updateFilters('category', category.id)}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === category.id ? 'bg-[var(--color-parchment)]' : ''
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-sm font-medium mb-3">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under-50', label: 'Under $50' },
                    { value: '50-100', label: '$50 - $100' },
                    { value: 'over-100', label: 'Over $100' },
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => updateFilters('price', option.value)}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        priceRange === option.value ? 'bg-[var(--color-parchment)]' : ''
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-[var(--color-ivory)] p-4 border-t border-[var(--color-sand)] flex gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 btn-outline"
              >
                Clear
              </button>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 btn-accent"
              >
                View Results ({filteredProducts.length})
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
