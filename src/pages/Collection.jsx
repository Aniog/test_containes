import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/home/ProductCard';

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    material: '',
    priceRange: '',
  });

  useEffect(() => {
    const category = searchParams.get('category') || '';
    setFilters(prev => ({ ...prev, category }));
  }, [searchParams]);

  // Filter products
  const filteredProducts = products.filter((product) => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.material && product.material !== filters.material) return false;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (product.price < min || (max && product.price > max)) return false;
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
        return b.id - a.id;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    if (key === 'category' && value) {
      setSearchParams({ category: value });
    } else if (key === 'category' && !value) {
      setSearchParams({});
    }
  };

  const clearFilters = () => {
    setFilters({ category: '', material: '', priceRange: '' });
    setSearchParams({});
  };

  const hasActiveFilters = filters.category || filters.material || filters.priceRange;

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ];

  return (
    <div className="min-h-screen bg-cream-50 pt-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal-800 mb-2">
            {filters.category 
              ? categories.find(c => c.id === filters.category)?.name || 'Shop'
              : 'Shop All'}
          </h1>
          <p className="text-sm text-charcoal-500">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="sticky top-20 z-30 bg-cream-50/95 backdrop-blur-sm border-b border-charcoal-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 font-sans text-sm text-charcoal-700"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter
              {hasActiveFilters && (
                <span className="w-5 h-5 bg-gold-500 text-cream-50 text-xs rounded-full flex items-center justify-center">
                  {Object.values(filters).filter(Boolean).length}
                </span>
              )}
            </button>

            {/* Desktop Filter Pills */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleFilterChange('category', '')}
                className={`px-4 py-2 font-sans text-xs tracking-wider transition-all ${
                  !filters.category
                    ? 'bg-charcoal-800 text-cream-50'
                    : 'bg-cream-100 text-charcoal-600 hover:bg-cream-200'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleFilterChange('category', cat.id)}
                  className={`px-4 py-2 font-sans text-xs tracking-wider transition-all ${
                    filters.category === cat.id
                      ? 'bg-charcoal-800 text-cream-50'
                      : 'bg-cream-100 text-charcoal-600 hover:bg-cream-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center gap-2 font-sans text-sm text-charcoal-700"
              >
                Sort: <span className="font-medium">{sortOptions.find(o => o.value === sortBy)?.label}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showSortDropdown && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setShowSortDropdown(false)} 
                  />
                  <div className="absolute right-0 top-full mt-2 bg-cream-50 border border-charcoal-100 shadow-lg z-20 min-w-[180px]">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setShowSortDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-3 font-sans text-sm transition-colors ${
                          sortBy === option.value
                            ? 'bg-cream-100 text-charcoal-800'
                            : 'text-charcoal-600 hover:bg-cream-100'
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
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-charcoal-600 mb-4">No products found</p>
            <button
              onClick={clearFilters}
              className="btn-outline text-xs"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity ${
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-charcoal-900/50" onClick={() => setIsFilterOpen(false)} />
        <div
          className={`absolute left-0 top-0 bottom-0 w-80 bg-cream-50 overflow-y-auto transition-transform ${
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl text-charcoal-800">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 text-charcoal-500 hover:text-charcoal-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-wider uppercase text-charcoal-500 mb-3">
                Category
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleFilterChange('category', '')}
                  className={`w-full text-left px-3 py-2 font-sans text-sm transition-colors ${
                    !filters.category
                      ? 'bg-charcoal-800 text-cream-50'
                      : 'text-charcoal-600 hover:bg-cream-100'
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleFilterChange('category', cat.id)}
                    className={`w-full text-left px-3 py-2 font-sans text-sm transition-colors ${
                      filters.category === cat.id
                        ? 'bg-charcoal-800 text-cream-50'
                        : 'text-charcoal-600 hover:bg-cream-100'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-wider uppercase text-charcoal-500 mb-3">
                Price
              </h3>
              <div className="space-y-2">
                {['', '0-50', '50-75', '75-100', '100-200'].map((range) => (
                  <button
                    key={range}
                    onClick={() => handleFilterChange('priceRange', range)}
                    className={`w-full text-left px-3 py-2 font-sans text-sm transition-colors ${
                      filters.priceRange === range
                        ? 'bg-charcoal-800 text-cream-50'
                        : 'text-charcoal-600 hover:bg-cream-100'
                    }`}
                  >
                    {range ? `$${range.split('-')[0]} - $${range.split('-')[1]}` : 'All Prices'}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="w-full py-3 border border-charcoal-200 font-sans text-sm text-charcoal-600 hover:bg-cream-100 transition-colors"
              >
                Clear All Filters
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
