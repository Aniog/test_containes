import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal, X } from 'lucide-react';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category.toLowerCase() === selectedCategory);
    }

    if (selectedMaterial !== 'all') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
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
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setPriceRange('all');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedMaterial !== 'all' || priceRange !== 'all';

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="font-serif text-5xl uppercase tracking-widest mb-4">Shop</h1>
        <div className="hairline w-24 mx-auto mb-4" />
        <p className="text-gray-600 uppercase tracking-wider text-sm">Discover our collection</p>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center space-x-2 uppercase tracking-wider text-sm hover:text-velmora-gold transition-colors"
        >
          <SlidersHorizontal size={18} />
          <span>Filter</span>
          {hasActiveFilters && (
            <span className="ml-2 bg-velmora-gold text-white text-xs px-2 py-1 rounded-full">
              Active
            </span>
          )}
        </button>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 uppercase tracking-wider text-sm focus:border-velmora-gold focus:outline-none"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>

      <div className="flex gap-8">
        {/* Filter Sidebar */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-64 flex-shrink-0`}>
          <div className="bg-velmora-warm p-6 space-y-6">
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center space-x-2 text-sm uppercase tracking-wider text-velmora-gold hover:text-velmora-gold-dark transition-colors"
              >
                <X size={14} />
                <span>Clear All</span>
              </button>
            )}

            {/* Category Filter */}
            <div>
              <h3 className="font-serif text-lg uppercase tracking-wider mb-4">Category</h3>
              {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`block w-full text-left py-2 uppercase tracking-wider text-sm transition-colors ${
                    selectedCategory === cat ? 'text-velmora-gold' : 'text-gray-600 hover:text-velmora-charcoal'
                  }`}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>

            {/* Material Filter */}
            <div>
              <h3 className="font-serif text-lg uppercase tracking-wider mb-4">Material</h3>
              {['all', 'Gold', 'Silver'].map(material => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`block w-full text-left py-2 uppercase tracking-wider text-sm transition-colors ${
                    selectedMaterial === material ? 'text-velmora-gold' : 'text-gray-600 hover:text-velmora-charcoal'
                  }`}
                >
                  {material === 'all' ? 'All' : material}
                </button>
              ))}
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="font-serif text-lg uppercase tracking-wider mb-4">Price</h3>
              {[
                { label: 'All', value: 'all' },
                { label: 'Under $50', value: '0-50' },
                { label: '$50 - $80', value: '50-80' },
                { label: 'Over $80', value: '80-200' }
              ].map(range => (
                <button
                  key={range.value}
                  onClick={() => setPriceRange(range.value)}
                  className={`block w-full text-left py-2 uppercase tracking-wider text-sm transition-colors ${
                    priceRange === range.value ? 'text-velmora-gold' : 'text-gray-600 hover:text-velmora-charcoal'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="mb-6 text-sm text-gray-600 uppercase tracking-wider">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 uppercase tracking-wider">No products match your filters</p>
              <button
                onClick={clearFilters}
                className="btn-secondary inline-block mt-6"
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