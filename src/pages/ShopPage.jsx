import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, Grid, List } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import products from '../../data/products';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { addToCart } = useCart();
  
  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
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
  }, [selectedCategory, sortBy, priceRange]);
  
  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">
            Shop All
          </h1>
          <div className="w-16 h-px bg-accent mx-auto" />
        </div>
        
        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="sm:hidden flex items-center space-x-2 text-sm font-medium"
          >
            <SlidersHorizontal size={18} />
            <span>Filters</span>
          </button>
          
          {/* Sort Dropdown */}
          <div className="flex items-center space-x-4 ml-auto">
            <span className="text-sm text-gray-500">
              {filteredProducts.length} products
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border-gray-300 rounded-md focus:border-accent focus:ring-accent"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block space-y-8`}>
            {/* Category Filter */}
            <div>
              <h3 className="font-medium text-sm uppercase tracking-wider mb-4">
                Category
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block text-sm ${
                      selectedCategory === category
                        ? 'text-accent font-medium'
                        : 'text-gray-600 hover:text-gray-900'
                    } transition-colors`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Price Filter */}
            <div>
              <h3 className="font-medium text-sm uppercase tracking-wider mb-4">
                Price
              </h3>
              <div className="space-y-2">
                {[
                  { label: 'Under $50', range: [0, 50] },
                  { label: '$50 - $75', range: [50, 75] },
                  { label: '$75 - $100', range: [75, 100] },
                  { label: 'Over $100', range: [100, 200] }
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setPriceRange(option.range)}
                    className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  {/* Product Image */}
                  <div className="relative overflow-hidden bg-cream aspect-square mb-4">
                    <img 
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Quick Add Button */}
                    <button
                      onClick={() => addToCart(product)}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-6 py-3 text-sm font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-900 hover:text-white transition-colors whitespace-nowrap"
                    >
                      Add to Cart
                    </button>
                  </div>
                  
                  {/* Product Info */}
                  <Link to={`/product/${product.id}`}>
                    <h3 className="product-name text-sm mb-2 text-gray-900 hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">${product.price}</span>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="text-accent mr-1">★</span>
                        {product.rating}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            
            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No products found matching your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setPriceRange([0, 200]);
                  }}
                  className="text-accent hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
