import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ProductCard } from '../home/ProductCard';
import { products, categories } from '../../data/products';
import { clsx } from 'clsx';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
];

export function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Get filter values from URL
  const selectedCategory = searchParams.get('category') || '';
  const selectedPriceRange = searchParams.get('price') || '';

  // Filter and sort products
  const getFilteredProducts = () => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Price filter
    if (selectedPriceRange) {
      const range = priceRanges.find(r => r.label === selectedPriceRange);
      if (range) {
        filtered = filtered.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - keep original order with bestsellers first
        filtered.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  const handleCategoryChange = (category) => {
    const newParams = new URLSearchParams(searchParams);
    if (category) {
      newParams.set('category', category);
    } else {
      newParams.delete('category');
    }
    setSearchParams(newParams);
  };

  const handlePriceChange = (priceRange) => {
    const newParams = new URLSearchParams(searchParams);
    if (priceRange) {
      newParams.set('price', priceRange);
    } else {
      newParams.delete('price');
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasFilters = selectedCategory || selectedPriceRange;

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ];

  return (
    <div className="min-h-screen bg-warm-ivory">
      {/* Header */}
      <div className="bg-warm-gray-50 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-warm-gray-900 text-center">
            {selectedCategory 
              ? categories.find(c => c.id === selectedCategory)?.name || 'Shop' 
              : 'Shop All'
            }
          </h1>
          <p className="mt-2 text-center text-warm-gray-600">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-xs font-medium tracking-wider uppercase text-warm-gray-900 mb-4">
                  Category
                </h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      type="button"
                      onClick={() => handleCategoryChange('')}
                      className={clsx(
                        'text-sm w-full text-left py-1 transition-colors',
                        !selectedCategory 
                          ? 'text-champagne font-medium' 
                          : 'text-warm-gray-600 hover:text-warm-gray-900'
                      )}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        type="button"
                        onClick={() => handleCategoryChange(category.id)}
                        className={clsx(
                          'text-sm w-full text-left py-1 transition-colors',
                          selectedCategory === category.id 
                            ? 'text-champagne font-medium' 
                            : 'text-warm-gray-600 hover:text-warm-gray-900'
                        )}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs font-medium tracking-wider uppercase text-warm-gray-900 mb-4">
                  Price
                </h3>
                <ul className="space-y-2">
                  {priceRanges.map((range) => (
                    <li key={range.label}>
                      <button
                        type="button"
                        onClick={() => handlePriceChange(range.label)}
                        className={clsx(
                          'text-sm w-full text-left py-1 transition-colors',
                          selectedPriceRange === range.label 
                            ? 'text-champagne font-medium' 
                            : 'text-warm-gray-600 hover:text-warm-gray-900'
                        )}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clear filters */}
              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm text-warm-gray-400 hover:text-champagne transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-warm-gray-100">
              {/* Mobile filter button */}
              <button
                type="button"
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm font-medium text-warm-gray-900"
              >
                <SlidersHorizontal size={18} />
                <span>Filters</span>
                {hasFilters && (
                  <span className="w-5 h-5 bg-champagne text-rich-black text-xs rounded-full flex items-center justify-center">
                    {selectedCategory && selectedPriceRange ? 2 : 1}
                  </span>
                )}
              </button>

              {/* Active filters (mobile) */}
              <div className="hidden lg:flex items-center gap-2 flex-wrap">
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-warm-gray-100 text-xs">
                    {categories.find(c => c.id === selectedCategory)?.name}
                    <button
                      type="button"
                      onClick={() => handleCategoryChange('')}
                      className="ml-1"
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}
                {selectedPriceRange && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-warm-gray-100 text-xs">
                    {selectedPriceRange}
                    <button
                      type="button"
                      onClick={() => handlePriceChange('')}
                      className="ml-1"
                    >
                      <X size={12} />
                    </button>
                  </span>
                )}
              </div>

              {/* Sort dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center gap-2 text-sm text-warm-gray-600 hover:text-warm-gray-900"
                >
                  <span>Sort by: {sortOptions.find(o => o.value === sortBy)?.label}</span>
                  <ChevronDown size={16} className={isSortOpen ? 'rotate-180' : ''} />
                </button>
                
                {isSortOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-10" 
                      onClick={() => setIsSortOpen(false)} 
                    />
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white shadow-modal z-20 py-2">
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => {
                            setSortBy(option.value);
                            setIsSortOpen(false);
                          }}
                          className={clsx(
                            'w-full text-left px-4 py-2 text-sm transition-colors',
                            sortBy === option.value
                              ? 'bg-warm-gray-50 text-champagne font-medium'
                              : 'text-warm-gray-600 hover:bg-warm-gray-50'
                          )}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Products grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-warm-gray-600 mb-4">No products found matching your criteria.</p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {isFilterOpen && (
        <>
          <div 
            className="fixed inset-0 bg-rich-black/50 z-50"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed left-0 top-0 bottom-0 w-full max-w-sm bg-warm-ivory z-50 overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-warm-gray-100">
              <h2 className="font-serif text-xl">Filters</h2>
              <button
                type="button"
                onClick={() => setIsFilterOpen(false)}
                className="p-2"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-xs font-medium tracking-wider uppercase text-warm-gray-900 mb-4">
                  Category
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        handleCategoryChange('');
                        setIsFilterOpen(false);
                      }}
                      className={clsx(
                        'text-sm w-full text-left py-1 transition-colors',
                        !selectedCategory 
                          ? 'text-champagne font-medium' 
                          : 'text-warm-gray-600'
                      )}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        type="button"
                        onClick={() => {
                          handleCategoryChange(category.id);
                          setIsFilterOpen(false);
                        }}
                        className={clsx(
                          'text-sm w-full text-left py-1 transition-colors',
                          selectedCategory === category.id 
                            ? 'text-champagne font-medium' 
                            : 'text-warm-gray-600'
                        )}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs font-medium tracking-wider uppercase text-warm-gray-900 mb-4">
                  Price
                </h3>
                <ul className="space-y-3">
                  {priceRanges.map((range) => (
                    <li key={range.label}>
                      <button
                        type="button"
                        onClick={() => {
                          handlePriceChange(range.label);
                          setIsFilterOpen(false);
                        }}
                        className={clsx(
                          'text-sm w-full text-left py-1 transition-colors',
                          selectedPriceRange === range.label 
                            ? 'text-champagne font-medium' 
                            : 'text-warm-gray-600'
                        )}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {hasFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="w-full btn-secondary"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Collection;
