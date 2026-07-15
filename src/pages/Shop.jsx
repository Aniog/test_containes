import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  // Get filters from URL
  const activeCategory = searchParams.get('category') || 'all';
  const activePrice = searchParams.get('price') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';

  // Filter and sort products
  const getFilteredProducts = () => {
    let filtered = [...products];

    // Category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Price filter
    if (activePrice !== 'all') {
      const [min, max] = activePrice.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    // Material filter
    if (activeMaterial !== 'all') {
      filtered = filtered.filter(p => p.material === activeMaterial);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.reverse();
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  const updateFilter = (key, value) => {
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

  const hasActiveFilters = activeCategory !== 'all' || activePrice !== 'all' || activeMaterial !== 'all';

  const priceRanges = [
    { label: '$30 - $50', value: '30-50' },
    { label: '$50 - $80', value: '50-80' },
    { label: '$80 - $120', value: '80-120' }
  ];

  const materials = [
    { label: 'Gold Plated', value: 'gold-plated' },
    { label: 'Silver Plated', value: 'silver-plated' }
  ];

  const sortOptions = [
    { label: 'Featured', value: 'featured' },
    { label: 'Price: Low to High', value: 'price-low' },
    { label: 'Price: High to Low', value: 'price-high' },
    { label: 'Newest', value: 'newest' }
  ];

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-6">
        <h3 className="text-xs uppercase tracking-widest text-[#C9A962] mb-3">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('category', 'all')}
            className={`block text-sm transition-colors ${
              activeCategory === 'all' ? 'text-[#1A1A1A] font-medium' : 'text-[#8B8178] hover:text-[#1A1A1A]'
            }`}
          >
            All ({products.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.id)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.id ? 'text-[#1A1A1A] font-medium' : 'text-[#8B8178] hover:text-[#1A1A1A]'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h3 className="text-xs uppercase tracking-widest text-[#C9A962] mb-3">
          Price
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('price', 'all')}
            className={`block text-sm transition-colors ${
              activePrice === 'all' ? 'text-[#1A1A1A] font-medium' : 'text-[#8B8178] hover:text-[#1A1A1A]'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => updateFilter('price', range.value)}
              className={`block text-sm transition-colors ${
                activePrice === range.value ? 'text-[#1A1A1A] font-medium' : 'text-[#8B8178] hover:text-[#1A1A1A]'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h3 className="text-xs uppercase tracking-widest text-[#C9A962] mb-3">
          Material
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('material', 'all')}
            className={`block text-sm transition-colors ${
              activeMaterial === 'all' ? 'text-[#1A1A1A] font-medium' : 'text-[#8B8178] hover:text-[#1A1A1A]'
            }`}
          >
            All Materials
          </button>
          {materials.map((mat) => (
            <button
              key={mat.value}
              onClick={() => updateFilter('material', mat.value)}
              className={`block text-sm transition-colors ${
                activeMaterial === mat.value ? 'text-[#1A1A1A] font-medium' : 'text-[#8B8178] hover:text-[#1A1A1A]'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-sm text-[#C9A962] underline hover:text-[#B8956C] transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </>
  );

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Header */}
      <div className="bg-[#F5F0E8] py-12 md:py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] mb-4">
            Shop Our Collection
          </h1>
          <p className="text-[#8B8178] max-w-xl mx-auto">
            Discover demi-fine jewelry pieces crafted with care and designed to 
            become treasured parts of your everyday style.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#B8956C]/20">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm uppercase tracking-wider"
          >
            <Filter size={18} />
            Filter
          </button>

          {/* Results Count */}
          <p className="text-sm text-[#8B8178] hidden md:block">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm pr-8 py-1 cursor-pointer focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-[#8B8178] pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-[#8B8178] mb-4">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#C9A962] underline"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <>
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/40 z-50 transition-opacity md:hidden ${
            isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsFilterOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`fixed inset-y-0 left-0 w-80 max-w-full bg-[#FAF7F2] z-50 transition-transform md:hidden ${
            isFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#B8956C]/20">
              <h2 className="font-serif text-lg">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-[#1A1A1A] hover:text-[#C9A962]"
              >
                <X size={24} />
              </button>
            </div>

            {/* Filter Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterContent />
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[#B8956C]/20">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full py-3 bg-[#1A1A1A] text-white text-sm uppercase tracking-wider rounded-sm hover:bg-[#2a2a2a] transition-colors"
              >
                View {filteredProducts.length} Products
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Shop;
