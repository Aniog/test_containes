import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { SlidersHorizontal, Grid, List } from 'lucide-react';
import products from '../../data/products';

const ShopPage = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Price filter
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
    <div className="min-h-screen bg-velmora-warm-white pt-32 md:pt-40">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">
            Collection
          </h1>
          <div className="w-16 h-0.5 bg-velmora-gold mx-auto" />
        </div>

        {/* Filters and Sort Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          {/* Filter Toggle - Mobile */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden flex items-center space-x-2 text-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </button>

          {/* Active Filters */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-velmora-medium-gray">
              {filteredProducts.length} products
            </span>
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-velmora-light-gray bg-transparent text-sm focus:border-velmora-gold focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Filter Sidebar */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block`}>
            <div className="space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="font-serif text-lg mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block text-sm ${
                        selectedCategory === category
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-dark-gray hover:text-velmora-gold'
                      } transition-colors`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-serif text-lg mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Under $50', range: [0, 50] },
                    { label: '$50 - $75', range: [50, 75] },
                    { label: '$75 - $100', range: [75, 100] },
                    { label: 'Over $100', range: [100, 200] },
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => setPriceRange(option.range)}
                      className="block text-sm text-velmora-dark-gray hover:text-velmora-gold transition-colors"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="font-serif text-lg mb-4">Material</h3>
                <div className="space-y-2">
                  {['18K Gold Plated', 'Silver Plated'].map((material) => (
                    <label key={material} className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-velmora-light-gray" />
                      <span>{material}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  {/* Product Image */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-velmora-cream mb-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Quick Add Button */}
                    <button
                      onClick={() => addToCart(product)}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 
                                 bg-velmora-charcoal text-velmora-warm-white px-6 py-2.5
                                 opacity-0 group-hover:opacity-100 transition-all duration-300
                                 hover:bg-velmora-gold hover:text-velmora-warm-black text-sm tracking-wide"
                    >
                      Add to Cart
                    </button>
                  </div>

                  {/* Product Info */}
                  <Link to={`/product/${product.id}`}>
                    <h3 className="font-serif text-sm uppercase tracking-[0.2em] mb-2 hover:text-velmora-gold transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-velmora-gold font-medium">${product.price}</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-xs text-velmora-medium-gray">{product.rating} ⭐</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="font-serif text-2xl mb-4">No products found</p>
                <p className="text-velmora-medium-gray">
                  Try adjusting your filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
