import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../../data/products';
import ProductCard from '../product/ProductCard';

const ShopPage = () => {
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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSortBy('featured');
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-40', label: 'Under $40' },
    { value: '40-60', label: '$40 - $60' },
    { value: '60-80', label: '$60 - $80' },
    { value: '80-120', label: '$80+' }
  ];

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  return (
    <div className="min-h-screen bg-velmora-cream pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-3">
            {selectedCategory === 'all' ? 'Shop All' : categories.find(c => c.id === selectedCategory)?.name || 'Shop'}
          </h1>
          <p className="text-velmora-warm-gray">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="lg:hidden flex items-center justify-center gap-2 py-3 border border-velmora-border text-velmora-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-medium text-velmora-charcoal mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className={`block text-left text-sm ${
                      selectedCategory === 'all'
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-warm-gray hover:text-velmora-charcoal'
                    }`}
                  >
                    All Jewelry
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`block text-left text-sm capitalize ${
                        selectedCategory === category.id
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-warm-gray hover:text-velmora-charcoal'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-medium text-velmora-charcoal mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`block text-left text-sm ${
                        priceRange === range.value
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-warm-gray hover:text-velmora-charcoal'
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
                  className="text-sm text-velmora-warm-gray hover:text-velmora-gold transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort & Results Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-border">
              <span className="text-sm text-velmora-warm-gray">
                {filteredProducts.length} results
              </span>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 py-1 text-sm text-velmora-charcoal focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-warm-gray pointer-events-none" strokeWidth={1.5} />
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-velmora-warm-gray mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-velmora-gold hover:underline"
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
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isFilterOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-velmora-charcoal/50"
          onClick={() => setIsFilterOpen(false)}
        />
        <div
          className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-velmora-cream shadow-soft-lg transform transition-transform duration-300 ${
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl text-velmora-charcoal">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-velmora-warm-gray hover:text-velmora-charcoal"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-velmora-charcoal mb-3">Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`block text-left text-sm w-full ${
                    selectedCategory === 'all'
                      ? 'text-velmora-gold font-medium'
                      : 'text-velmora-warm-gray'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`block text-left text-sm w-full capitalize ${
                      selectedCategory === category.id
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-warm-gray'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-velmora-charcoal mb-3">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setPriceRange(range.value)}
                    className={`block text-left text-sm w-full ${
                      priceRange === range.value
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-warm-gray'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t border-velmora-border">
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex-1 py-3 border border-velmora-border text-velmora-charcoal text-sm"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 py-3 bg-velmora-gold text-velmora-charcoal text-sm font-medium"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;