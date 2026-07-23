import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ShoppingBag, SlidersHorizontal, X, Star, ChevronDown } from 'lucide-react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    priceRange: 'all',
    material: 'all'
  });

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters(prev => ({ ...prev, category }));
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (filters.category !== 'all') {
      const categoryMap = {
        'earrings': 'Earrings',
        'necklaces': 'Necklaces',
        'huggies': 'Huggies'
      };
      const categoryName = categoryMap[filters.category];
      if (categoryName) {
        filtered = filtered.filter(p => p.category === categoryName);
      }
    }

    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    if (filters.material !== 'all') {
      filtered = filtered.filter(p => p.material.toLowerCase().includes(filters.material));
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'bestseller':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.tags.includes('new') ? 1 : 0) - (a.tags.includes('new') ? 1 : 0));
        break;
      default:
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    if (key === 'category') {
      if (value === 'all') {
        searchParams.delete('category');
      } else {
        searchParams.set('category', value);
      }
      setSearchParams(searchParams);
    }
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      priceRange: 'all',
      material: 'all'
    });
    setSearchParams({});
  };

  const hasActiveFilters = filters.category !== 'all' || filters.priceRange !== 'all' || filters.material !== 'all';

  return (
    <div className="pt-32 pb-20">
      <div className="container-luxury">
        {/* Page Header */}
        <div className="mb-12">
          <h1 
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {filters.category === 'all' ? 'All Jewelry' : 
             filters.category === 'earrings' ? 'Earrings' :
             filters.category === 'necklaces' ? 'Necklaces' :
             filters.category === 'huggies' ? 'Huggies' : 'All Jewelry'}
          </h1>
          <div className="w-16 h-px bg-gold"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden flex items-center justify-between w-full p-4 border border-gold/30 bg-cream"
          >
            <div className="flex items-center space-x-2">
              <SlidersHorizontal size={20} />
              <span className="text-sm uppercase tracking-wider">Filters</span>
            </div>
            {hasActiveFilters && (
              <span className="text-xs bg-gold text-white px-2 py-1 rounded">
                Active
              </span>
            )}
          </button>

          {/* Filter Sidebar */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
            <div className="bg-white p-6 lg:sticky lg:top-32">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-xl">Filters</h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-gold hover:text-gold-dark transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider mb-4 font-medium">Category</h4>
                {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => updateFilter('category', cat)}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      filters.category === cat
                        ? 'text-gold font-medium'
                        : 'text-charcoal/70 hover:text-gold'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>

              {/* Price Filter */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider mb-4 font-medium">Price</h4>
                {[
                  { value: 'all', label: 'All' },
                  { value: '0-40', label: 'Under $40' },
                  { value: '40-60', label: '$40 - $60' },
                  { value: '60-100', label: '$60 - $100' },
                  { value: '100-200', label: 'Over $100' }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => updateFilter('priceRange', option.value)}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      filters.priceRange === option.value
                        ? 'text-gold font-medium'
                        : 'text-charcoal/70 hover:text-gold'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {/* Material Filter */}
              <div className="mb-8">
                <h4 className="text-sm uppercase tracking-wider mb-4 font-medium">Material</h4>
                {['all', '18K Gold Plated', 'Silver Plated'].map(mat => (
                  <button
                    key={mat}
                    onClick={() => updateFilter('material', mat === 'all' ? 'all' : mat.toLowerCase())}
                    className={`block w-full text-left py-2 text-sm transition-colors ${
                      filters.material === (mat === 'all' ? 'all' : mat.toLowerCase())
                        ? 'text-gold font-medium'
                        : 'text-charcoal/70 hover:text-gold'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-taupe">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="flex items-center space-x-2">
                <label className="text-sm text-taupe">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border-b border-gold/30 bg-transparent py-1 focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="bestseller">Best Sellers</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-lg text-taupe mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="text-gold hover:text-gold-dark transition-colors"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group bg-white">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative overflow-hidden aspect-square">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {product.tags.includes('new') && (
                          <div className="absolute top-4 left-4 bg-charcoal text-cream text-xs px-3 py-1 uppercase tracking-wider">
                            New
                          </div>
                        )}
                      </div>
                    </Link>

                    <div className="p-4">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="product-name text-sm mb-2 hover:text-gold transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-taupe mb-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-light">${product.price}</span>
                        <div className="flex items-center space-x-1">
                          <Star size={14} className="fill-gold text-gold" />
                          <span className="text-sm text-taupe">{product.rating}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => addToCart(product, 1, product.variants[0])}
                        className="w-full mt-4 bg-charcoal text-cream py-3 text-sm uppercase tracking-wider hover:bg-gold transition-colors duration-300 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ShoppingBag size={16} />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
