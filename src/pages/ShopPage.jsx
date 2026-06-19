import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { ShoppingBag, ChevronDown, X } from 'lucide-react';
import products from '../data/products';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 120]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const { addToCart } = useCart();

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter(product => {
      if (selectedCategory !== 'All' && product.category !== selectedCategory) return false;
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
      return true;
    });

    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'name':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filtered;
    }
  }, [selectedCategory, sortBy, priceRange]);

  const handleAddToCart = (product) => {
    addToCart(product, 'Gold');
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSortBy('featured');
    setPriceRange([0, 120]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-4 tracking-wide">Shop All</h1>
        <div className="hairline w-24 mx-auto" />
        <p className="text-velmora-stone mt-4 text-sm uppercase tracking-wider">
          {filteredAndSortedProducts.length} Products
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="lg:hidden flex items-center justify-between w-full p-4 border border-gray-200 uppercase tracking-wider text-sm"
        >
          <span>Filters</span>
          <ChevronDown size={16} className={`transition-transform ${isMobileFilterOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Sidebar Filters */}
        <div className={`${isMobileFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
          <div className="space-y-8">
            {/* Category Filter */}
            <div>
              <h3 className="font-sans text-sm uppercase tracking-wider mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block text-sm hover:text-velmora-gold transition-colors ${
                      selectedCategory === category ? 'text-velmora-gold font-medium' : 'text-velmora-charcoal'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="font-sans text-sm uppercase tracking-wider mb-4">Price</h3>
              <div className="space-y-3">
                <input
                  type="range"
                  min="0"
                  max="120"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-velmora-gold"
                />
                <div className="flex justify-between text-sm text-velmora-stone">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={clearFilters}
              className="text-sm uppercase tracking-wider text-velmora-stone hover:text-velmora-charcoal transition-colors flex items-center gap-2"
            >
              <X size={14} />
              Clear All
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Sort Dropdown */}
          <div className="flex justify-end mb-6">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 text-sm uppercase tracking-wider focus:outline-none focus:border-velmora-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative img-hover-zoom mb-4 bg-velmora-warm aspect-square">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <img
                      src={product.images[1]}
                      alt={product.name}
                      className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                               bg-white text-velmora-charcoal px-6 py-2 uppercase tracking-wider text-xs
                               opacity-0 group-hover:opacity-100 transition-all duration-300
                               hover:bg-velmora-charcoal hover:text-white"
                    >
                      <span className="flex items-center gap-2">
                        <ShoppingBag size={14} />
                        Add to Cart
                      </span>
                    </button>
                  </div>
                </Link>

                <div className="space-y-1">
                  <h3 className="product-name text-sm">{product.name}</h3>
                  <p className="text-xs text-velmora-stone uppercase tracking-wider">{product.category}</p>
                  <p className="text-sm font-medium">${product.price}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredAndSortedProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-velmora-stone">No products match your filters.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-sm uppercase tracking-wider text-velmora-gold hover:underline"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
