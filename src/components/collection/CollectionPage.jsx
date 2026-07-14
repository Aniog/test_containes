import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import products from '../../data/products';

const CollectionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];
  const priceRanges = [
    { label: 'All', min: 0, max: 1000 },
    { label: 'Under $50', min: 0, max: 50 },
    { label: '$50 - $80', min: 50, max: 80 },
    { label: 'Over $80', min: 80, max: 1000 }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    const priceFilter = priceRanges.find(r => r.label === priceRange);
    if (priceFilter) {
      filtered = filtered.filter(p => p.price >= priceFilter.min && p.price < priceFilter.max);
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
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
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
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Collection</h1>
        <p className="text-velmora-charcoal-light tracking-wide">
          Discover our curated selection of demi-fine jewelry
        </p>
      </div>

      {/* Mobile Filter Toggle */}
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="md:hidden flex items-center gap-2 mb-6 px-4 py-2 border border-velmora-gold"
      >
        <SlidersHorizontal size={16} />
        Filters
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
          <div className="bg-velmora-cream p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-velmora-gold hover:underline"
              >
                Clear All
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h4 className="text-sm tracking-wide mb-3">Category</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-velmora-gold text-white'
                        : 'hover:bg-velmora-gold/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div className="mb-8">
              <h4 className="text-sm tracking-wide mb-3">Material</h4>
              <div className="space-y-2">
                {materials.map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                      selectedMaterial === material
                        ? 'bg-velmora-gold text-white'
                        : 'hover:bg-velmora-gold/10'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h4 className="text-sm tracking-wide mb-3">Price</h4>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setPriceRange(range.label)}
                    className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                      priceRange === range.label
                        ? 'bg-velmora-gold text-white'
                        : 'hover:bg-velmora-gold/10'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Bar */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-velmora-charcoal-light">
              {filteredProducts.length} products
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-velmora-gold bg-transparent text-sm focus:outline-none focus:border-velmora-gold-dark"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-velmora-charcoal-light mb-4">No products match your filters</p>
              <button
                onClick={clearFilters}
                className="text-velmora-gold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} className="group block">
                  <div className="relative overflow-hidden bg-velmora-cream aspect-[4/5] mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-sm tracking-wider uppercase mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-velmora-gold font-medium">${product.price}</p>
                    <div className="flex items-center gap-1">
                      <span className="text-velmora-gold text-sm">★</span>
                      <span className="text-sm text-velmora-charcoal-light">{product.rating}</span>
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
};

export default CollectionPage;
