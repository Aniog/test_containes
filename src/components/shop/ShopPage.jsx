import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, Grid, List } from 'lucide-react';
import products from '../../data/products';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by material
    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
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
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setPriceRange([0, 200]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light tracking-[0.1em] text-gray-900 font-['Cormorant_Garamond']">
          Shop All
        </h1>
        <div className="mt-4 w-16 h-px bg-amber-700 mx-auto" />
        <p className="mt-6 text-gray-600">
          {filteredProducts.length} products
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden flex items-center justify-between w-full p-4 border border-gray-300"
        >
          <span className="flex items-center space-x-2">
            <SlidersHorizontal className="w-5 h-5" />
            <span className="text-sm tracking-wider">FILTERS</span>
          </span>
          <span className="text-sm text-gray-600">
            {selectedCategory !== 'All' || selectedMaterial !== 'All' ? 'Active' : 'All'}
          </span>
        </button>

        {/* Filter Sidebar */}
        <aside className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
          <div className="space-y-8">
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-gray-900 mb-4">CATEGORY</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-amber-50 text-amber-800 font-medium'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-gray-900 mb-4">MATERIAL</h3>
              <div className="space-y-2">
                {materials.map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                      selectedMaterial === material
                        ? 'bg-amber-50 text-amber-800 font-medium'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider text-gray-900 mb-4">PRICE</h3>
              <div className="px-3 space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-amber-700"
                />
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={clearFilters}
              className="text-sm text-amber-700 hover:text-amber-800 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border-gray-300 focus:border-amber-700 focus:ring-amber-700"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          {/* Products */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found matching your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-sm text-amber-700 hover:text-amber-800 transition-colors"
              >
                Clear filters to see all products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="group cursor-pointer"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100 mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm tracking-[0.15em] text-gray-900 font-['Cormorant_Garamond']">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600">${product.price}</p>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xs ${
                            i < Math.floor(product.rating)
                              ? 'text-amber-700'
                              : 'text-gray-300'
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
