import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';
import { products } from '../../data/products';

const CollectionPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  
  // Get initial filters from URL
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'all'
  );
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Jewelry' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
    { id: 'sets', name: 'Gift Sets' },
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'name', name: 'Name A-Z' },
  ];

  const priceRanges = [
    { min: 0, max: 50, label: 'Under $50' },
    { min: 50, max: 75, label: '$50 - $75' },
    { min: 75, max: 100, label: '$75 - $100' },
    { min: 100, max: 200, label: '$100+' },
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, priceRange, sortBy]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory !== 'all') {
      params.set('category', selectedCategory);
    }
    setSearchParams(params);
  }, [selectedCategory, setSearchParams]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
  };

  const handleSortChange = (option) => {
    setSortBy(option);
    setIsSortOpen(false);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 200]);
    setSortBy('featured');
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange[0] > 0 || priceRange[1] < 200;

  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-warm-white border-b border-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal text-center">
            Our Collection
          </h1>
          <p className="mt-3 font-sans text-sm text-softGray text-center max-w-lg mx-auto">
            Discover our handcrafted demi-fine gold jewelry, designed to treasure
          </p>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="bg-warm-white border-b border-cream sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Results Count */}
            <p className="font-sans text-sm text-warmGray">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>

            <div className="flex items-center gap-4">
              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden flex items-center gap-2 font-sans text-sm text-charcoal"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filter</span>
                {hasActiveFilters && (
                  <span className="w-2 h-2 bg-gold-500 rounded-full" />
                )}
              </button>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 font-sans text-sm text-charcoal hover:text-gold-500 transition-colors"
                >
                  <span>Sort: {sortOptions.find(o => o.id === sortBy)?.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                </button>

                {isSortOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-warm-white border border-cream shadow-lg py-2 min-w-48 z-40">
                    {sortOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleSortChange(option.id)}
                        className={`w-full px-4 py-2 text-left font-sans text-sm transition-colors ${
                          sortBy === option.id
                            ? 'text-gold-500 bg-cream'
                            : 'text-charcoal hover:bg-cream'
                        }`}
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-40 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-serif text-sm tracking-ultra uppercase text-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                        selectedCategory === category.id
                          ? 'text-gold-500 font-medium'
                          : 'text-warmGray hover:text-charcoal'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-serif text-sm tracking-ultra uppercase text-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => handlePriceChange(range.min, range.max)}
                      className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                        priceRange[0] === range.min && priceRange[1] === range.max
                          ? 'text-gold-500 font-medium'
                          : 'text-warmGray hover:text-charcoal'
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
                  onClick={clearFilters}
                  className="text-sm text-softGray hover:text-gold-500 font-sans underline transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filter Sidebar */}
          {isFilterOpen && (
            <div className="lg:hidden fixed inset-0 z-50">
              {/* Backdrop */}
              <div 
                className="absolute inset-0 bg-charcoal/50"
                onClick={() => setIsFilterOpen(false)}
              />
              
              {/* Filter Panel */}
              <div className="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-warm-white overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-serif text-lg text-charcoal">Filters</h3>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="p-2 hover:bg-cream rounded-full"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Categories */}
                  <div className="mb-8">
                    <h4 className="font-serif text-sm tracking-ultra uppercase text-charcoal mb-4">
                      Category
                    </h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => handleCategoryChange(category.id)}
                          className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                            selectedCategory === category.id
                              ? 'text-gold-500 font-medium'
                              : 'text-warmGray hover:text-charcoal'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-8">
                    <h4 className="font-serif text-sm tracking-ultra uppercase text-charcoal mb-4">
                      Price
                    </h4>
                    <div className="space-y-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range.label}
                          onClick={() => handlePriceChange(range.min, range.max)}
                          className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                            priceRange[0] === range.min && priceRange[1] === range.max
                              ? 'text-gold-500 font-medium'
                              : 'text-warmGray hover:text-charcoal'
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <Button
                    variant="primary"
                    fullWidth
                    onClick={() => setIsFilterOpen(false)}
                  >
                    Apply Filters
                  </Button>

                  {hasActiveFilters && (
                    <button
                      onClick={() => {
                        clearFilters();
                        setIsFilterOpen(false);
                      }}
                      className="w-full mt-4 text-center text-sm text-softGray hover:text-gold-500 font-sans underline transition-colors"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal mb-4">
                  No products found
                </p>
                <p className="font-sans text-sm text-softGray mb-6">
                  Try adjusting your filters to find what you're looking for
                </p>
                <Button variant="secondary" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CollectionPage;
