import React, { useState, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import products from '../data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const { addToCart } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    // Load images after component mounts
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  // Filter states
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    material: '',
    priceRange: '',
  });

  // Apply filters
  const filteredProducts = products.filter(product => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.material && product.material !== filters.material) return false;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (product.price < min || product.price > max) return false;
    }
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'name': return a.name.localeCompare(b.name);
      default: return 0;
    }
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    const params = new URLSearchParams();
    if (newFilters.category) params.set('category', newFilters.category);
    setSearchParams(params);
  };

  const clearFilters = () => {
    setFilters({ category: '', material: '', priceRange: '' });
    setSearchParams({});
  };

  return (
    <div className="section-padding" ref={containerRef}>
      <div className="container-custom">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">
            Shop All
          </h1>
          <div className="hairline w-24 mb-4" />
          <p className="text-velmora-warmGray text-sm uppercase tracking-widest">
            {sortedProducts.length} products
          </p>
        </div>

        {/* Filters & Sort Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-sm uppercase tracking-wider font-medium"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-velmora-warmGray/30 rounded-lg text-sm focus:outline-none focus:border-velmora-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="bg-velmora-cream p-6 rounded-lg space-y-6">
              {/* Category Filter */}
              <div>
                <h3 className="font-medium text-sm uppercase tracking-wider mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  {['', 'Earrings', 'Necklaces', 'Huggies', 'Sets'].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === cat}
                        onChange={() => handleFilterChange('category', cat)}
                        className="text-velmora-gold focus:ring-velmora-gold"
                      />
                      <span className="text-sm">{cat || 'All'}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="font-medium text-sm uppercase tracking-wider mb-3">
                  Material
                </h3>
                <div className="space-y-2">
                  {['', 'Gold', 'Silver'].map((mat) => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="material"
                        checked={filters.material === mat}
                        onChange={() => handleFilterChange('material', mat)}
                        className="text-velmora-gold focus:ring-velmora-gold"
                      />
                      <span className="text-sm">{mat || 'All'}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-medium text-sm uppercase tracking-wider mb-3">
                  Price
                </h3>
                <div className="space-y-2">
                  {['', '0-50', '50-75', '75-100', '100-200'].map((range) => (
                    <label key={range} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={filters.priceRange === range}
                        onChange={() => handleFilterChange('priceRange', range)}
                        className="text-velmora-gold focus:ring-velmora-gold"
                      />
                      <span className="text-sm">
                        {range ? `$${range.replace('-', ' - $')}` : 'All'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(filters.category || filters.material || filters.priceRange) && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-velmora-gold hover:underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <div 
                  key={product.id}
                  className="group relative bg-white rounded-lg overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-500"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-velmora-cream">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.images[0].alt}
                        data-strk-img-id={`shop-${product.id}`}
                        data-strk-img={product.images[0].dataStrkImg}
                        data-strk-img-ratio={product.images[0].dataStrkImgRatio}
                        data-strk-img-width="600"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </Link>

                    <button
                      onClick={() => addToCart(product, 1, 'Gold')}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-velmora-charcoal text-white px-6 py-2.5 
                               uppercase tracking-wider text-xs font-medium 
                               opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
                               transition-all duration-300 hover:bg-velmora-gold"
                    >
                      <span className="flex items-center gap-2">
                        <ShoppingBag size={14} />
                        Add to Cart
                      </span>
                    </button>
                  </div>

                  <div className="p-4">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="product-name text-base mb-2 hover:text-velmora-gold transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-velmora-warmGray text-sm mb-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-lg font-medium">
                        ${product.price}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-velmora-gold text-sm">★</span>
                        <span className="text-xs text-velmora-warmGray">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-velmora-warmGray text-lg mb-4">
                  No products found matching your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
