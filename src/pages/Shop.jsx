import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { cn } from '../lib/utils';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const priceRanges = [
    { id: 'all', label: 'All Prices', min: 0, max: Infinity },
    { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
    { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
    { id: '75-100', label: '$75 - $100', min: 75, max: 100 },
    { id: 'over-100', label: 'Over $100', min: 100, max: Infinity },
  ];

  const sortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'newest', label: 'Newest' },
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    if (selectedPriceRange !== 'all') {
      const range = priceRanges.find((r) => r.id === selectedPriceRange);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPriceRange, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedPriceRange !== 'all',
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24">
      <div className="max-w-container mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Shop All
          </h1>
          <p className="text-muted text-sm uppercase tracking-widest">
            {filteredProducts.length} Products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center justify-center gap-2 py-3 border border-border text-white text-sm uppercase tracking-widest"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-gold text-background text-xs rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-white uppercase tracking-widest text-sm mb-4">Category</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={cn(
                      'block text-sm transition-colors',
                      selectedCategory === 'all' ? 'text-gold' : 'text-muted hover:text-white'
                    )}
                  >
                    All Jewelry
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={cn(
                        'block text-sm transition-colors capitalize',
                        selectedCategory === category.id ? 'text-gold' : 'text-muted hover:text-white'
                      )}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-white uppercase tracking-widest text-sm mb-4">Price</h3>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setSelectedPriceRange(range.id)}
                      className={cn(
                        'block text-sm transition-colors',
                        selectedPriceRange === range.id ? 'text-gold' : 'text-muted hover:text-white'
                      )}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                    searchParams.delete('category');
                    setSearchParams(searchParams);
                  }}
                  className="text-gold text-sm hover:text-gold-light transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown */}
            <div className="flex justify-end mb-6">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-surface border border-border px-4 py-2 pr-10 text-sm text-white focus:outline-none focus:border-gold"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-white mb-4">No products found</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-background/95 backdrop-blur-md lg:hidden transition-transform duration-300',
          isFilterOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="font-serif text-xl text-white">Filters</h2>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="p-2 hover:text-gold transition-colors"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Filter Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Category */}
            <div>
              <h3 className="text-white uppercase tracking-widest text-sm mb-4">Category</h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={cn(
                    'block text-sm transition-colors',
                    selectedCategory === 'all' ? 'text-gold' : 'text-muted hover:text-white'
                  )}
                >
                  All Jewelry
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={cn(
                      'block text-sm transition-colors capitalize',
                      selectedCategory === category.id ? 'text-gold' : 'text-muted hover:text-white'
                    )}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="text-white uppercase tracking-widest text-sm mb-4">Price</h3>
              <div className="space-y-3">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPriceRange(range.id)}
                    className={cn(
                      'block text-sm transition-colors',
                      selectedPriceRange === range.id ? 'text-gold' : 'text-muted hover:text-white'
                    )}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border space-y-3">
            <button
              onClick={() => setIsFilterOpen(false)}
              className="w-full bg-gold text-background py-3 uppercase tracking-widest text-sm hover:bg-gold-light transition-colors"
            >
              Apply Filters
            </button>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedPriceRange('all');
                searchParams.delete('category');
                setSearchParams(searchParams);
              }}
              className="w-full text-white text-sm hover:text-gold transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;