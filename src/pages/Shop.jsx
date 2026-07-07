import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import products from '../../data/products';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['all', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'bestsellers', label: 'Bestsellers' },
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    if (priceRange === 'under-50') {
      filtered = filtered.filter(p => p.price < 50);
    } else if (priceRange === '50-75') {
      filtered = filtered.filter(p => p.price >= 50 && p.price <= 75);
    } else if (priceRange === 'over-75') {
      filtered = filtered.filter(p => p.price > 75);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'bestsellers':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
        <div className="w-16 h-px bg-velmora-gold" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden flex items-center gap-2 px-4 py-2 border border-velmora-warm hover:border-velmora-gold transition-colors"
        >
          <SlidersHorizontal size={18} />
          Filter & Sort
        </button>

        {/* Filters Sidebar */}
        <aside
          className={`${
            isFilterOpen ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : 'hidden'
          } lg:block lg:relative lg:z-0 lg:w-64 lg:flex-shrink-0`}
        >
          <div className="lg:sticky lg:top-24">
            {/* Mobile Close */}
            {isFilterOpen && (
              <button
                onClick={() => setIsFilterOpen(false)}
                className="lg:hidden absolute top-4 right-4"
              >
                <X size={24} />
              </button>
            )}

            <div className="space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-serif text-lg mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsFilterOpen(false);
                      }}
                      className={`block text-sm ${
                        selectedCategory === category
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-graphite hover:text-velmora-gold'
                      } transition-colors`}
                    >
                      {category === 'all' ? 'All Products' : category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-serif text-lg mb-4">Price</h3>
                <div className="space-y-2">
                  {['all', 'under-50', '50-75', 'over-75'].map((range) => (
                    <button
                      key={range}
                      onClick={() => {
                        setPriceRange(range);
                        setIsFilterOpen(false);
                      }}
                      className={`block text-sm ${
                        priceRange === range
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-graphite hover:text-velmora-gold'
                      } transition-colors`}
                    >
                      {range === 'all'
                        ? 'All Prices'
                        : range === 'under-50'
                        ? 'Under $50'
                        : range === '50-75'
                        ? '$50 - $75'
                        : 'Over $75'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Bar */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-velmora-mist">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-velmora-warm text-sm focus:border-velmora-gold focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-velmora-cream overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-sm uppercase tracking-wider mb-2 group-hover:text-velmora-gold transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < Math.floor(product.rating)
                              ? 'text-velmora-gold fill-velmora-gold'
                              : 'text-velmora-mist'
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <p className="font-medium text-sm">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-velmora-mist">No products found matching your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
