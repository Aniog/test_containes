import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../../data/products';
import ProductCard from '../home/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && p.price <= max);
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
        // Featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, priceRange, sortBy]);

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-40', label: 'Under $40' },
    { value: '40-60', label: '$40 - $60' },
    { value: '60-100', label: '$60 - $100' },
    { value: '100-200', label: 'Over $100' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSearchParams({});
  };

  const activeFiltersCount = [
    selectedCategory !== 'all',
    priceRange !== 'all'
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-[#FAF8F6] pt-24 pb-16">
      <div className="container-main">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
          <p className="text-[#6B635A]">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E4DF]">
          {/* Mobile Filter Button */}
          <button 
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm uppercase tracking-wider"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-[#C9A962] text-white text-xs flex items-center justify-center rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Desktop Filters Summary */}
          <div className="hidden md:flex items-center gap-4">
            {activeFiltersCount > 0 && (
              <button 
                onClick={clearFilters}
                className="text-sm text-[#C9A962] hover:underline"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border-none text-sm uppercase tracking-wider pr-8 cursor-pointer focus:outline-none"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-lg mb-4">Category</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="w-4 h-4 accent-[#C9A962]"
                    />
                    <span className="text-sm">All Jewelry</span>
                  </label>
                  {categories.map(cat => (
                    <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat.id}
                        onChange={() => setSelectedCategory(cat.id)}
                        className="w-4 h-4 accent-[#C9A962]"
                      />
                      <span className="text-sm">{cat.name}</span>
                      <span className="text-xs text-[#6B635A]">({cat.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-lg mb-4">Price</h3>
                <div className="space-y-3">
                  {priceRanges.map(range => (
                    <label key={range.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === range.value}
                        onChange={() => setPriceRange(range.value)}
                        className="w-4 h-4 accent-[#C9A962]"
                      />
                      <span className="text-sm">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <button 
                  onClick={clearFilters}
                  className="text-sm text-[#C9A962] hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-[#6B635A] mb-4">No products found</p>
                <button 
                  onClick={clearFilters}
                  className="btn-secondary text-sm"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-opacity ${
          isFilterOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-[rgba(26,24,20,0.5)]"
          onClick={() => setIsFilterOpen(false)}
        />
        
        {/* Drawer */}
        <div className={`absolute top-0 left-0 h-full w-80 bg-[#FAF8F6] shadow-xl transition-transform duration-300 ${
          isFilterOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl">Filters</h2>
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="p-2"
                aria-label="Close filters"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-serif text-lg mb-4">Category</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="mobile-category"
                    checked={selectedCategory === 'all'}
                    onChange={() => setSelectedCategory('all')}
                    className="w-4 h-4 accent-[#C9A962]"
                  />
                  <span className="text-sm">All Jewelry</span>
                </label>
                {categories.map(cat => (
                  <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-category"
                      checked={selectedCategory === cat.id}
                      onChange={() => setSelectedCategory(cat.id)}
                      className="w-4 h-4 accent-[#C9A962]"
                    />
                    <span className="text-sm">{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="font-serif text-lg mb-4">Price</h3>
              <div className="space-y-3">
                {priceRanges.map(range => (
                  <label key={range.value} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mobile-price"
                      checked={priceRange === range.value}
                      onChange={() => setPriceRange(range.value)}
                      className="w-4 h-4 accent-[#C9A962]"
                    />
                    <span className="text-sm">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Apply Button */}
            <button 
              onClick={() => setIsFilterOpen(false)}
              className="w-full btn-primary"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}