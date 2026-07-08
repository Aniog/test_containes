import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Star, SlidersHorizontal, X } from 'lucide-react';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['all', ...new Set(products.map(p => p.category))];
  const materials = ['all', 'Gold', 'Silver'];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by material
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => {
        if (max) {
          return p.price >= min && p.price <= max;
        }
        return p.price >= min;
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

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setPriceRange('all');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedMaterial !== 'all' || priceRange !== 'all';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="font-serif text-3xl md:text-4xl mb-2">Shop All</h1>
          <p className="text-sm text-gray-600">
            {filteredAndSortedProducts.length} products
          </p>
        </div>

        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:border-black"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
            <option value="rating">Top Rated</option>
          </select>

          {/* Filter Toggle (Mobile) */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 text-sm"
          >
            <SlidersHorizontal size={16} />
            Filter
          </button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Filter Sidebar */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
          <div className="bg-white md:bg-transparent p-4 md:p-0 border md:border-0">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <h3 className="font-serif text-lg">Filters</h3>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-500 hover:text-black"
                >
                  Clear all
                </button>
              )}
              <button
                onClick={() => setIsFilterOpen(false)}
                className="md:hidden"
              >
                <X size={20} />
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="text-sm tracking-wider mb-3">CATEGORY</h4>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat)}
                      className="mr-2"
                    />
                    <span className="text-sm capitalize">{cat === 'all' ? 'All' : cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div className="mb-6">
              <h4 className="text-sm tracking-wider mb-3">MATERIAL</h4>
              <div className="space-y-2">
                {materials.map((mat) => (
                  <label key={mat} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === mat}
                      onChange={() => setSelectedMaterial(mat)}
                      className="mr-2"
                    />
                    <span className="text-sm">{mat === 'all' ? 'All' : mat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h4 className="text-sm tracking-wider mb-3">PRICE</h4>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'All' },
                  { value: '0-50', label: 'Under $50' },
                  { value: '50-75', label: '$50 - $75' },
                  { value: '75-100', label: '$75 - $100' },
                  { value: '100', label: 'Over $100' }
                ].map((range) => (
                  <label key={range.value} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange === range.value}
                      onChange={() => setPriceRange(range.value)}
                      className="mr-2"
                    />
                    <span className="text-sm">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-grow">
          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 mb-4">No products match your filters</p>
              <button
                onClick={clearFilters}
                className="text-sm tracking-wider underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="group">
                  <div className="aspect-square overflow-hidden mb-3 bg-gray-100">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xs tracking-wider uppercase mb-1">{product.name}</h3>
                    <div className="flex items-center justify-center mb-1">
                      <Star size={12} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-xs text-gray-600 ml-1">
                        {product.rating}
                      </span>
                    </div>
                    <p className="text-sm">${product.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;