import React, { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (priceRange !== 'all') {
      if (priceRange === 'under50') filtered = filtered.filter(p => p.price < 50);
      if (priceRange === '50to80') filtered = filtered.filter(p => p.price >= 50 && p.price <= 80);
      if (priceRange === 'over80') filtered = filtered.filter(p => p.price > 80);
    }

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
  }, [selectedCategory, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-5xl font-light mb-4">Shop All</h1>
          <div className="w-16 h-px bg-[#C9A96E] mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-sm uppercase tracking-wider mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block text-sm ${
                      selectedCategory === 'all' ? 'text-[#C9A96E]' : 'text-[#9A8F87]'
                    } hover:text-[#C9A96E] transition-colors`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block text-sm ${
                        selectedCategory === cat.id ? 'text-[#C9A96E]' : 'text-[#9A8F87]'
                      } hover:text-[#C9A96E] transition-colors`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-sm uppercase tracking-wider mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to80', label: '$50 - $80' },
                    { value: 'over80', label: 'Over $80' }
                  ].map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`block text-sm ${
                        priceRange === range.value ? 'text-[#C9A96E]' : 'text-[#9A8F87]'
                      } hover:text-[#C9A96E] transition-colors`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-[#9A8F87]">
                {filteredProducts.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-[#E5DFD9] text-sm focus:outline-none focus:border-[#C9A96E]"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <p className="text-center text-[#9A8F87] py-12">No products found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
