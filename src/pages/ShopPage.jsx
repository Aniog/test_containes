import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Get filter values from URL
  const initialCategory = searchParams.get('category') || 'all';
  const initialPrice = searchParams.get('price') || 'all';
  const initialSort = searchParams.get('sort') || 'featured';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState(initialPrice);
  const [selectedSort, setSelectedSort] = useState(initialSort);

  const categories = [
    { id: 'all', name: 'All Jewelry' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
    { id: 'sets', name: 'Gift Sets' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', min: 0, max: Infinity },
    { id: 'under50', name: 'Under $50', min: 0, max: 50 },
    { id: '50to75', name: '$50 - $75', min: 50, max: 75 },
    { id: '75to100', name: '$75 - $100', min: 75, max: 100 },
    { id: 'over100', name: 'Over $100', min: 100, max: Infinity }
  ];

  const sortOptions = [
    { id: 'featured', name: 'Featured' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest' }
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Price filter
    if (selectedPrice !== 'all') {
      const range = priceRanges.find(p => p.id === selectedPrice);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    // Sort
    switch (selectedSort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // featured - keep original order
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedSort]);

  const updateFilters = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    updateFilters('category', categoryId);
  };

  const handlePriceChange = (priceId) => {
    setSelectedPrice(priceId);
    updateFilters('price', priceId);
  };

  const handleSortChange = (sortId) => {
    setSelectedSort(sortId);
    updateFilters('sort', sortId);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPrice('all');
    setSelectedSort('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPrice !== 'all';

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <div className="bg-stone-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal">Shop</h1>
          <p className="mt-4 text-stone-500">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button 
            className="md:hidden flex items-center gap-2 text-charcoal"
            onClick={() => setIsFilterOpen(true)}
          >
            <SlidersHorizontal size={20} />
            Filters
          </button>

          {/* Sidebar Filters - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-medium text-charcoal mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`block text-left text-sm transition-colors ${
                        selectedCategory === category.id 
                          ? 'text-gold font-medium' 
                          : 'text-stone-600 hover:text-gold'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h3 className="font-medium text-charcoal mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => handlePriceChange(range.id)}
                      className={`block text-left text-sm transition-colors ${
                        selectedPrice === range.id 
                          ? 'text-gold font-medium' 
                          : 'text-stone-600 hover:text-gold'
                      }`}
                    >
                      {range.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button 
                  onClick={clearFilters}
                  className="text-sm text-stone-500 hover:text-gold transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          {isFilterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div 
                className="absolute inset-0 bg-charcoal/40"
                onClick={() => setIsFilterOpen(false)}
              />
              <div className="absolute left-0 top-0 h-full w-80 bg-cream shadow-soft-lg p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl text-charcoal">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <X size={24} />
                  </button>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                  <h3 className="font-medium text-charcoal mb-4">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`block text-left text-sm w-full py-2 transition-colors ${
                          selectedCategory === category.id 
                            ? 'text-gold font-medium' 
                            : 'text-stone-600'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-8">
                  <h3 className="font-medium text-charcoal mb-4">Price</h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.id}
                        onClick={() => handlePriceChange(range.id)}
                        className={`block text-left text-sm w-full py-2 transition-colors ${
                          selectedPrice === range.id 
                            ? 'text-gold font-medium' 
                            : 'text-stone-600'
                        }`}
                      >
                        {range.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-stone-500 hover:text-gold"
                  >
                    Clear all filters
                  </button>
                )}

                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full mt-6 bg-gold text-charcoal py-3 font-medium"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Dropdown - Desktop */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <div className="relative">
                <select
                  value={selectedSort}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="appearance-none bg-transparent border border-stone-300 px-4 py-2 pr-10 text-sm text-charcoal focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Mobile Sort */}
            <div className="md:hidden mb-6">
              <div className="relative">
                <select
                  value={selectedSort}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="w-full appearance-none bg-white border border-stone-300 px-4 py-3 pr-10 text-sm text-charcoal focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
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
                <p className="text-stone-500 mb-4">No products found</p>
                <button 
                  onClick={clearFilters}
                  className="text-gold hover:text-gold-dark transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;