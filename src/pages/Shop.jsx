import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 150]);

  // Get initial filter values from URL
  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Filter products
  const filteredProducts = products.filter((product) => {
    // Category filter
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }
    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
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
        return b.id - a.id;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.id - b.id;
    }
  });

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
    setPriceRange([0, 150]);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange[0] > 0 || priceRange[1] < 150;

  return (
    <div className="min-h-screen pt-[72px]">
      {/* Hero Banner */}
      <div className="bg-cream-200 py-16 md:py-20">
        <div className="container-narrow text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold mb-4">
            Our Collection
          </p>
          <h1 className="section-heading mb-4">
            Shop All Jewelry
          </h1>
          <p className="text-charcoal-light max-w-lg mx-auto">
            Discover our curated selection of demi-fine gold jewelry, designed to complement every moment of your life.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-narrow py-12 md:py-16">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-taupe">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden flex items-center gap-2 text-sm font-medium text-charcoal"
          >
            <Filter className="w-4 h-4" strokeWidth={1.5} />
            Filter
            {hasActiveFilters && (
              <span className="w-2 h-2 bg-gold rounded-full" />
            )}
          </button>

          {/* Results Count */}
          <p className="text-sm text-charcoal-light hidden md:block">
            {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
          </p>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-charcoal-light hidden md:block">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent pr-8 py-2 text-sm font-medium text-charcoal cursor-pointer focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-light pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-10">
              {/* Category Filter */}
              <div>
                <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-charcoal mb-4">
                  Category
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button
                      onClick={() => handleCategoryChange('all')}
                      className={`text-sm w-full text-left py-1 transition-colors ${
                        selectedCategory === 'all' ? 'text-gold font-medium' : 'text-charcoal-light hover:text-charcoal'
                      }`}
                    >
                      All Jewelry
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryChange(category.id)}
                        className={`text-sm w-full text-left py-1 flex items-center justify-between transition-colors ${
                          selectedCategory === category.id ? 'text-gold font-medium' : 'text-charcoal-light hover:text-charcoal'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-xs text-charcoal-light">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-charcoal-light">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="150"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-gold"
                  />
                  <div className="flex gap-2">
                    <input
                      type="number"
                      min="0"
                      max="150"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-16 px-2 py-1 text-sm border border-taupe focus:border-gold focus:outline-none"
                      placeholder="Min"
                    />
                    <input
                      type="number"
                      min="0"
                      max="150"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 150])}
                      className="w-16 px-2 py-1 text-sm border border-taupe focus:border-gold focus:outline-none"
                      placeholder="Max"
                    />
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-charcoal-light hover:text-gold transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-2xl text-charcoal mb-4">
                  No products found
                </p>
                <p className="text-charcoal-light mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isFilterOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal/50"
          onClick={() => setIsFilterOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 bg-cream-100 rounded-t-2xl max-h-[80vh] overflow-y-auto transition-transform duration-300 ${
            isFilterOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl text-charcoal">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 text-charcoal hover:text-gold transition-colors"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-charcoal mb-4">
                Category
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`px-4 py-2 text-sm border transition-colors ${
                    selectedCategory === 'all'
                      ? 'border-charcoal bg-charcoal text-white'
                      : 'border-taupe text-charcoal hover:border-charcoal'
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 text-sm border transition-colors ${
                      selectedCategory === category.id
                        ? 'border-charcoal bg-charcoal text-white'
                        : 'border-taupe text-charcoal hover:border-charcoal'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-charcoal mb-4">
                Price Range
              </h3>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min="0"
                  max="150"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-20 px-3 py-2 text-sm border border-taupe focus:border-gold focus:outline-none"
                  placeholder="Min"
                />
                <span className="text-charcoal-light">—</span>
                <input
                  type="number"
                  min="0"
                  max="150"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 150])}
                  className="w-20 px-3 py-2 text-sm border border-taupe focus:border-gold focus:outline-none"
                  placeholder="Max"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex-1 btn-secondary"
                >
                  Clear All
                </button>
              )}
              <button
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 btn-primary"
              >
                View {sortedProducts.length} Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
