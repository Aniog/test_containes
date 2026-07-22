import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products, categories } from '../data/products';

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

const CollectionPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Sync category from URL
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    // Price filter
    const priceRange = priceRanges.find((p) => p.id === selectedPrice);
    if (priceRange && (product.price < priceRange.min || product.price > priceRange.max)) {
      return false;
    }
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.id.localeCompare(a.id);
      default:
        return 0;
    }
  });

  const activeFiltersCount = [
    selectedCategory !== 'all',
    selectedPrice !== 'all',
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice('all');
    setSearchParams({});
  };

  return (
    <main className="bg-ivory min-h-screen">
      {/* Header */}
      <div className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-espresso mb-4">
            The Collection
          </h1>
          <p className="text-taupe max-w-lg mx-auto">
            Discover our curated selection of demi-fine gold jewelry, designed for everyday luxury.
          </p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="sticky top-16 md:top-20 z-40 bg-ivory/95 backdrop-blur-md border-b border-champagne">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 text-sm text-espresso"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-espresso text-ivory text-xs rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Desktop Filter Pills */}
            <div className="hidden md:flex items-center gap-2">
              <span className="text-xs text-taupe uppercase tracking-wide mr-2">Category:</span>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-wide transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-espresso text-ivory'
                      : 'bg-transparent text-espresso hover:bg-cream'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSort(!showSort)}
                className="flex items-center gap-2 text-sm text-espresso"
              >
                <span className="hidden sm:inline">Sort by:</span>
                <span className="uppercase tracking-wide">
                  {sortOptions.find((o) => o.id === sortBy)?.label}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showSort ? 'rotate-180' : ''}`} />
              </button>
              {showSort && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-ivory border border-champagne shadow-lg z-50">
                  {sortOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => {
                        setSortBy(option.id);
                        setShowSort(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-cream transition-colors ${
                        sortBy === option.id ? 'text-espresso font-medium' : 'text-taupe'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filter Panel */}
        {showFilters && (
          <div className="md:hidden border-t border-champagne px-4 py-4 bg-ivory">
            <div className="space-y-4">
              {/* Categories */}
              <div>
                <p className="text-xs uppercase tracking-wide text-espresso mb-2">Category</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`px-3 py-1.5 text-xs uppercase tracking-wide border transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-espresso text-ivory border-espresso'
                          : 'border-warmgray/30 text-espresso hover:border-espresso'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <p className="text-xs uppercase tracking-wide text-espresso mb-2">Price</p>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setSelectedPrice(range.id)}
                      className={`px-3 py-1.5 text-xs uppercase tracking-wide border transition-colors ${
                        selectedPrice === range.id
                          ? 'bg-espresso text-ivory border-espresso'
                          : 'border-warmgray/30 text-espresso hover:border-espresso'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear & Apply */}
              <div className="flex gap-2 pt-2">
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-xs uppercase tracking-wide text-taupe hover:text-espresso"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={() => setShowFilters(false)}
                  className="ml-auto px-4 py-2 text-xs uppercase tracking-wide bg-espresso text-ivory"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Active Filters Bar */}
      {activeFiltersCount > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2">
          <span className="text-xs text-taupe uppercase tracking-wide">Active filters:</span>
          {selectedCategory !== 'all' && (
            <button
              onClick={() => handleCategoryChange('all')}
              className="flex items-center gap-1 px-3 py-1 text-xs bg-cream text-espresso hover:bg-champagne transition-colors"
            >
              {categories.find((c) => c.id === selectedCategory)?.name}
              <X className="w-3 h-3" />
            </button>
          )}
          {selectedPrice !== 'all' && (
            <button
              onClick={() => setSelectedPrice('all')}
              className="flex items-center gap-1 px-3 py-1 text-xs bg-cream text-espresso hover:bg-champagne transition-colors"
            >
              {priceRanges.find((p) => p.id === selectedPrice)?.label}
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      )}

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {sortedProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-taupe mb-4">No products found with your filters.</p>
            <button
              onClick={clearFilters}
              className="text-sm text-espresso underline hover:text-gold-600"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-sm text-taupe mb-8">
              Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default CollectionPage;
