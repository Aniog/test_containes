import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import products from '../data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Material filter
    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    // Price filter
    if (priceRange !== 'All') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => {
        if (max) {
          return p.price >= min && p.price <= max;
        } else {
          return p.price >= min;
        }
      });
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const categories = ['All', ...new Set(products.map(p => p.category))];
  const materials = ['All', ...new Set(products.map(p => p.material))];
  const priceRanges = [
    { label: 'All', value: 'All' },
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $80', value: '50-80' },
    { label: 'Over $80', value: '80' },
  ];

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setPriceRange('All');
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide">
            {selectedCategory === 'All' ? 'Shop All' : selectedCategory}
          </h1>
          <div className="hairline w-24 mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden btn-premium-outline w-full mb-4"
          >
            {isFilterOpen ? 'Close Filters' : 'Open Filters'}
          </button>

          {/* Sidebar Filters */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="bg-white p-6 border border-velmora-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-lg tracking-wider uppercase">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-velmora-gold hover:text-velmora-gold-dark"
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-sm tracking-wider uppercase mb-4">Category</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-velmora-gold text-white'
                          : 'text-velmora-text-light hover:bg-velmora-warm-gray'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h4 className="text-sm tracking-wider uppercase mb-4">Material</h4>
                <div className="space-y-2">
                  {materials.map(material => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                        selectedMaterial === material
                          ? 'bg-velmora-gold text-white'
                          : 'text-velmora-text-light hover:bg-velmora-warm-gray'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="text-sm tracking-wider uppercase mb-4">Price</h4>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                        priceRange === range.value
                          ? 'bg-velmora-gold text-white'
                          : 'text-velmora-text-light hover:bg-velmora-warm-gray'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-velmora-text-light">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-velmora-border bg-white text-sm focus:outline-none focus:border-velmora-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-text-light mb-4">No products found matching your filters.</p>
                <button
                  onClick={clearFilters}
                  className="btn-premium-outline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
