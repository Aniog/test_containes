import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        p => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by price
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  const categories = ['all', 'earrings', 'necklaces', 'huggies'];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-40', label: 'Under $40' },
    { value: '40-60', label: '$40 - $60' },
    { value: '60-100', label: '$60 - $100' },
    { value: '100+', label: '$100+' }
  ];

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
    setSortBy('featured');
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  return (
    <div className="container-premium py-8 md:py-16">
      {/* Page Header */}
      <div className="mb-12">
        <h1 className="font-serif text-3xl md:text-4xl mb-4">Shop All</h1>
        <div className="hairline w-16 mb-6"></div>
        <p className="text-charcoal-light text-sm md:text-base">
          Discover our complete collection of demi-fine jewelry
        </p>
      </div>

      {/* Mobile Filter Toggle */}
      <div className="md:hidden mb-6">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2 px-4 py-2 border border-border hover:border-gold transition-colors"
        >
          <SlidersHorizontal size={18} />
          <span className="text-sm tracking-wider uppercase">Filters</span>
          {hasActiveFilters && (
            <span className="ml-2 w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center">
              {(selectedCategory !== 'all' ? 1 : 0) + (priceRange !== 'all' ? 1 : 0)}
            </span>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Filter Sidebar */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block`}>
          <div className="bg-cream p-6 md:sticky md:top-32">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg">Filters</h3>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-gold hover:text-gold-dark transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h4 className="text-sm tracking-wider uppercase mb-4">Category</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                      selectedCategory === cat
                        ? 'bg-gold text-white'
                        : 'hover:bg-sand'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h4 className="text-sm tracking-wider uppercase mb-4">Price</h4>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setPriceRange(range.value)}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                      priceRange === range.value
                        ? 'bg-gold text-white'
                        : 'hover:bg-sand'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Close Button */}
            <button
              onClick={() => setIsFilterOpen(false)}
              className="md:hidden w-full mt-6 py-2 border border-border text-sm tracking-wider uppercase"
            >
              Close Filters
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="md:col-span-3">
          {/* Sort Bar */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-charcoal-light">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-border bg-transparent text-sm focus:border-gold focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>

          {/* Products */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-serif text-xl mb-4">No products found</p>
              <p className="text-charcoal-light mb-6">Try adjusting your filters</p>
              <button
                onClick={clearFilters}
                className="btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
