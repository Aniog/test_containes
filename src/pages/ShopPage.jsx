import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const priceOptions = [
  { label: 'Under $50', range: [0, 50] },
  { label: '$50 - $75', range: [50, 75] },
  { label: '$75 - $100', range: [75, 100] },
  { label: 'Over $100', range: [100, 200] },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
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
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, priceRange]);

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light font-['Cormorant_Garamond'] mb-2">Shop All</h1>
          <div className="w-12 h-[1px] bg-velmora-gold mx-auto" />
        </div>

        {/* Filters & Sort Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 text-sm tracking-wider border-b border-velmora-text pb-1"
          >
            <Filter size={16} />
            <span>FILTER</span>
          </button>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-velmora-text-light">
              {filteredProducts.length} products
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border-b border-velmora-text bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="space-y-6">
              {/* Categories */}
              <div>
                <h3 className="text-sm tracking-wider mb-3">CATEGORY</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block text-sm ${
                        selectedCategory === category
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-text-light hover:text-velmora-text'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm tracking-wider mb-3">PRICE</h3>
                <div className="space-y-2">
                  {priceOptions.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => setPriceRange(option.range)}
                      className="block text-sm text-velmora-text-light hover:text-velmora-text"
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-velmora-text-light">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
