import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { products } from '../../data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    priceRange: '',
    material: ''
  });

  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    if (filters.material) {
      filtered = filtered.filter(p => p.material === filters.material);
    }

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
  }, [filters, sortBy]);

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);

    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setFilters({ category: '', priceRange: '', material: '' });
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl mb-2">Shop All</h1>
          <p className="text-gray-600">{filteredProducts.length} products</p>
        </div>

        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-velmora-nude focus:outline-none focus:border-velmora-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>

          {/* Filter Toggle (Mobile) */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden flex items-center gap-2 px-4 py-2 border border-velmora-nude"
          >
            <SlidersHorizontal size={16} />
            Filter
          </button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Filter Sidebar */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
          <div className="bg-velmora-cream p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-lg">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-velmora-gold hover:underline"
              >
                Clear All
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-6">
              <h4 className="font-sans text-sm uppercase tracking-wider mb-3">Category</h4>
              {['Earrings', 'Necklaces', 'Huggies', 'Sets'].map((cat) => (
                <label key={cat} className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={filters.category === cat}
                    onChange={() => handleFilterChange('category', filters.category === cat ? '' : cat)}
                    className="text-velmora-gold focus:ring-velmora-gold"
                  />
                  <span className="text-sm">{cat}</span>
                </label>
              ))}
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h4 className="font-sans text-sm uppercase tracking-wider mb-3">Price</h4>
              {[
                { label: 'Under $50', value: '0-50' },
                { label: '$50 - $80', value: '50-80' },
                { label: 'Over $80', value: '80-200' }
              ].map((range) => (
                <label key={range.value} className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input
                    type="radio"
                    name="price"
                    checked={filters.priceRange === range.value}
                    onChange={() => handleFilterChange('priceRange', filters.priceRange === range.value ? '' : range.value)}
                    className="text-velmora-gold focus:ring-velmora-gold"
                  />
                  <span className="text-sm">{range.label}</span>
                </label>
              ))}
            </div>

            {/* Material Filter */}
            <div className="mb-6">
              <h4 className="font-sans text-sm uppercase tracking-wider mb-3">Material</h4>
              {['Gold', 'Silver'].map((mat) => (
                <label key={mat} className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input
                    type="radio"
                    name="material"
                    checked={filters.material === mat}
                    onChange={() => handleFilterChange('material', filters.material === mat ? '' : mat)}
                    className="text-velmora-gold focus:ring-velmora-gold"
                  />
                  <span className="text-sm">{mat}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => window.location.href = `/product/${product.id}`}
                className="group text-left"
              >
                <div className="aspect-square overflow-hidden bg-velmora-cream mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-sm uppercase tracking-wider mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-gray-300'}>★</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>
                <p className="font-serif text-lg">${product.price}</p>
              </button>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-velmora-gold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
