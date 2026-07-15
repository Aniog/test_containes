import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const initialCategory = searchParams.get('category') || 'all';
  const initialSort = searchParams.get('sort') || 'featured';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState(initialSort);
  const [priceRange, setPriceRange] = useState('all');

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    // Filter by price
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
        // featured - keep original order
        break;
    }
    
    return result;
  }, [selectedCategory, priceRange, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams);
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    setSearchParams(params);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    const params = new URLSearchParams(searchParams);
    params.set('sort', sort);
    setSearchParams(params);
  };

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

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-[#F5F5F0] tracking-wide">
            Shop All
          </h1>
          <p className="mt-3 text-[#A8A8A0]">
            {filteredProducts.length} products
          </p>
        </div>

        {/* Filter & Sort Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#333333]">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm text-[#A8A8A0]"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop Filters */}
          <div className="hidden md:flex items-center gap-8">
            {/* Category Filter */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#A8A8A0]">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="bg-transparent text-sm text-[#F5F5F0] border-none focus:outline-none cursor-pointer"
              >
                <option value="all">All</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#A8A8A0]">Price:</span>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="bg-transparent text-sm text-[#F5F5F0] border-none focus:outline-none cursor-pointer"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-[#A8A8A0] hidden md:inline">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="bg-transparent text-sm text-[#F5F5F0] border-none focus:outline-none cursor-pointer appearance-none pr-6"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A8A8A0] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-[#A8A8A0] mb-4">No products found</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setPriceRange('all');
              }}
              className="text-[#C9A962] text-sm hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 bg-[#0D0D0D] p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl text-[#F5F5F0]">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 text-[#A8A8A0]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category */}
            <div className="mb-8">
              <h3 className="text-sm text-[#A8A8A0] uppercase tracking-wider mb-4">Category</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === 'all'}
                    onChange={() => handleCategoryChange('all')}
                    className="w-4 h-4 accent-[#C9A962]"
                  />
                  <span className="text-sm text-[#F5F5F0]">All</span>
                </label>
                {categories.map(cat => (
                  <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat.id}
                      onChange={() => handleCategoryChange(cat.id)}
                      className="w-4 h-4 accent-[#C9A962]"
                    />
                    <span className="text-sm text-[#F5F5F0]">{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="text-sm text-[#A8A8A0] uppercase tracking-wider mb-4">Price</h3>
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
                    <span className="text-sm text-[#F5F5F0]">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsFilterOpen(false)}
              className="w-full py-3 bg-[#C9A962] text-[#0D0D0D] text-sm font-medium uppercase tracking-wider"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
