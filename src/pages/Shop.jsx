import React, { useState, useEffect, useMemo } from 'react';
import { products } from '../data/products';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', '18K Gold Plated', 'Silver Plated'];
  const priceRanges = [
    { label: 'All', min: 0, max: Infinity },
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $80', min: 50, max: 80 },
    { label: '$80+', min: 80, max: Infinity },
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
      const range = priceRanges.find(r => r.label === priceRange);
      if (range) {
        filtered = filtered.filter(p => p.price >= range.min && p.price < range.max);
      }
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
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setPriceRange('All');
    setSortBy('featured');
  };

  return (
    <div className="container-responsive py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-4">Collection</h1>
        <div className="elegant-divider mb-8" />
      </div>

      {/* Mobile Filter Toggle */}
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="md:hidden flex items-center gap-2 mb-6 text-sm uppercase tracking-wider font-light"
      >
        <SlidersHorizontal size={16} />
        Filters
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter Sidebar */}
        <aside className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
          <div className="space-y-8">
            {/* Category Filter */}
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block text-sm font-light ${
                      selectedCategory === category
                        ? 'text-velmora-gold'
                        : 'text-gray-600 hover:text-velmora-charcoal'
                    } transition-colors`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-4">Material</h3>
              <div className="space-y-2">
                {materials.map(material => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`block text-sm font-light ${
                      selectedMaterial === material
                        ? 'text-velmora-gold'
                        : 'text-gray-600 hover:text-velmora-charcoal'
                    } transition-colors`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-4">Price</h3>
              <div className="space-y-2">
                {priceRanges.map(range => (
                  <button
                    key={range.label}
                    onClick={() => setPriceRange(range.label)}
                    className={`block text-sm font-light ${
                      priceRange === range.label
                        ? 'text-velmora-gold'
                        : 'text-gray-600 hover:text-velmora-charcoal'
                    } transition-colors`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={clearFilters}
              className="text-sm uppercase tracking-wider font-light text-gray-500 hover:text-velmora-charcoal transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Dropdown */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-sm text-gray-500">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-gray-300 px-4 py-2 pr-10 text-sm uppercase tracking-wider font-light focus:outline-none focus:border-velmora-gold cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
            </div>
          </div>

          {/* Products */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 mb-4">No products found matching your filters.</p>
              <button
                onClick={clearFilters}
                className="text-velmora-gold uppercase tracking-wider text-sm font-light hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="product-card group cursor-pointer"
                >
                  <div className="relative overflow-hidden mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-600"
                    />
                  </div>
                  <h3 className="product-name mb-2">{product.name}</h3>
                  <p className="text-sm font-light">${product.price}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
