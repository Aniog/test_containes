import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];
  const priceRanges = [
    { label: 'All', value: 'All' },
    { label: 'Under $50', value: 'under50' },
    { label: '$50 - $80', value: '50to80' },
    { label: 'Over $80', value: 'over80' }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    if (priceRange !== 'All') {
      filtered = filtered.filter(p => {
        if (priceRange === 'under50') return p.price < 50;
        if (priceRange === '50to80') return p.price >= 50 && p.price <= 80;
        if (priceRange === 'over80') return p.price > 80;
        return true;
      });
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
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  function clearFilters() {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setPriceRange('All');
  }

  const hasActiveFilters = selectedCategory !== 'All' || selectedMaterial !== 'All' || priceRange !== 'All';

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-4xl tracking-wider uppercase">Shop</h1>
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="md:hidden flex items-center space-x-2 text-sm tracking-wider uppercase"
        >
          <SlidersHorizontal size={16} />
          <span>Filter</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
          <div className="bg-white p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-medium tracking-wider uppercase">Filters</h2>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Clear All
                </button>
              )}
            </div>

            <div className="mb-6">
              <h3 className="text-sm tracking-wider uppercase mb-3">Category</h3>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`block w-full text-left py-2 text-sm ${
                    selectedCategory === category ? 'text-gray-900 font-medium' : 'text-gray-600'
                  } hover:text-gray-900`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="text-sm tracking-wider uppercase mb-3">Material</h3>
              {materials.map(material => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`block w-full text-left py-2 text-sm ${
                    selectedMaterial === material ? 'text-gray-900 font-medium' : 'text-gray-600'
                  } hover:text-gray-900`}
                >
                  {material}
                </button>
              ))}
            </div>

            <div>
              <h3 className="text-sm tracking-wider uppercase mb-3">Price</h3>
              {priceRanges.map(range => (
                <button
                  key={range.value}
                  onClick={() => setPriceRange(range.value)}
                  className={`block w-full text-left py-2 text-sm ${
                    priceRange === range.value ? 'text-gray-900 font-medium' : 'text-gray-600'
                  } hover:text-gray-900`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-600">
              Showing {filteredProducts.length} products
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:border-gray-900"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedCategory !== 'All' && (
                <span className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-1 text-sm">
                  <span>{selectedCategory}</span>
                  <button onClick={() => setSelectedCategory('All')}>
                    <X size={14} />
                  </button>
                </span>
              )}
              {selectedMaterial !== 'All' && (
                <span className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-1 text-sm">
                  <span>{selectedMaterial}</span>
                  <button onClick={() => setSelectedMaterial('All')}>
                    <X size={14} />
                  </button>
                </span>
              )}
              {priceRange !== 'All' && (
                <span className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-1 text-sm">
                  <span>{priceRanges.find(r => r.value === priceRange)?.label}</span>
                  <button onClick={() => setPriceRange('All')}>
                    <X size={14} />
                  </button>
                </span>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 mb-4">No products found matching your filters.</p>
              <button
                onClick={clearFilters}
                className="text-sm tracking-wider uppercase underline hover:no-underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
