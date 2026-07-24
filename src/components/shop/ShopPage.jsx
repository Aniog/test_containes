import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import products from '../../data/products';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

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
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-display text-4xl md:text-5xl font-light tracking-wide mb-4">
          Shop All
        </h1>
        <div className="w-16 h-px bg-velmora-gold" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden flex items-center justify-between w-full p-4 border border-gray-200"
        >
          <span className="flex items-center space-x-2">
            <SlidersHorizontal size={20} />
            <span className="text-sm tracking-wide">FILTERS</span>
          </span>
          <span className="text-sm text-gray-500">
            {filteredProducts.length} products
          </span>
        </button>

        {/* Filter Sidebar */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
          <div className="space-y-8">
            {/* Category Filter */}
            <div>
              <h3 className="text-sm tracking-wide mb-4">CATEGORY</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                    className={`block text-sm ${
                      (category === 'All' && !selectedCategory) || selectedCategory === category
                        ? 'text-velmora-gold font-medium'
                        : 'text-gray-600 hover:text-velmora-gold'
                    } transition-colors`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="text-sm tracking-wide mb-4">PRICE</h3>
              <div className="space-y-2">
                {[
                  { label: 'Under $50', range: [0, 50] },
                  { label: '$50 - $80', range: [50, 80] },
                  { label: '$80+', range: [80, 200] }
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setPriceRange(option.range)}
                    className={`block text-sm ${
                      priceRange[0] === option.range[0] && priceRange[1] === option.range[1]
                        ? 'text-velmora-gold font-medium'
                        : 'text-gray-600 hover:text-velmora-gold'
                    } transition-colors`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Dropdown */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-gray-500">
              {filteredProducts.length} products
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border-gray-200 rounded-none focus:border-velmora-gold focus:ring-0"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.slug}`}
                className="group"
              >
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-3">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-sm tracking-[0.1em] mb-1">{product.name}</h3>
                <div className="flex items-center space-x-2 mb-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'text-velmora-gold fill-velmora-gold'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm">${product.price}</p>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-gray-500">No products found</p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setPriceRange([0, 200]);
                }}
                className="mt-4 text-velmora-gold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
