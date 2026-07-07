import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import products from '../data/products';

export default function CollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

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

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setPriceRange([0, 200]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-4">Shop All</h1>
        <div className="hairline w-24" />
      </div>

      {/* Mobile Filter Toggle */}
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="md:hidden flex items-center space-x-2 mb-6 text-sm tracking-wider uppercase"
      >
        <SlidersHorizontal size={18} />
        <span>Filters</span>
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter Sidebar */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
          <div className="bg-cream p-6 border border-gold/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-sans text-sm tracking-wider uppercase">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-xs text-gold hover:underline"
              >
                Clear All
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h4 className="font-sans text-sm mb-4">Category</h4>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block text-sm ${
                      selectedCategory === category ? 'text-gold font-medium' : 'text-charcoal/70'
                    } hover:text-gold transition-colors`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div className="mb-8">
              <h4 className="font-sans text-sm mb-4">Material</h4>
              <div className="space-y-2">
                {materials.map(material => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`block text-sm ${
                      selectedMaterial === material ? 'text-gold font-medium' : 'text-charcoal/70'
                    } hover:text-gold transition-colors`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h4 className="font-sans text-sm mb-4">Price Range</h4>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-charcoal/70">${priceRange[0]}</span>
                <span className="text-sm text-charcoal/40">-</span>
                <span className="text-sm text-charcoal/70">${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full mt-2"
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Dropdown */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-charcoal/60">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gold/30 bg-cream text-sm focus:outline-none focus:border-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="group">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative overflow-hidden bg-warm aspect-square mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-cream text-charcoal px-6 py-2 text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gold hover:text-cream"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <h3 className="font-sans text-sm tracking-widest uppercase mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <Star size={14} className="text-gold fill-gold" />
                    <span className="text-sm ml-1">{product.rating}</span>
                  </div>
                  <p className="font-serif text-lg">${product.price}</p>
                </Link>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-charcoal/60 font-light">No products match your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-gold hover:underline text-sm"
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
