import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, Grid, List, ChevronDown } from 'lucide-react';
import products from '../data/products';
import { useCart } from '../context/CartContext';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { dispatch } = useCart();
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    priceRange: '',
    material: ''
  });

  // Get unique categories and materials
  const categories = [...new Set(products.map(p => p.category))];
  const materials = [...new Set(products.map(p => p.material))];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }

    // Filter by price range
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter(p => p.price >= min && p.price <= max);
    }

    // Filter by material
    if (filters.material) {
      result = result.filter(p => p.material === filters.material);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => b.featured - a.featured);
    }

    return result;
  }, [filters, sortBy]);

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    // Update URL params
    const params = new URLSearchParams();
    if (newFilters.category) params.set('category', newFilters.category);
    setSearchParams(params);
  };

  const clearFilters = () => {
    setFilters({ category: '', priceRange: '', material: '' });
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
        <div className="w-16 h-px bg-velmora-gold" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className={`lg:w-64 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="bg-velmora-sand p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium uppercase tracking-wide text-sm">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-velmora-gold hover:underline"
              >
                Clear All
              </button>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <h4 className="font-medium mb-3 text-sm">Category</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={filters.category === category}
                      onChange={() => handleFilterChange('category', category)}
                      className="mr-2 accent-velmora-gold"
                    />
                    <span className="text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-8">
              <h4 className="font-medium mb-3 text-sm">Price</h4>
              <div className="space-y-2">
                {[
                  { label: 'Under $50', value: '0-50' },
                  { label: '$50 - $80', value: '50-80' },
                  { label: '$80 - $100', value: '80-100' },
                  { label: 'Over $100', value: '100-1000' },
                ].map((range) => (
                  <label key={range.value} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="priceRange"
                      checked={filters.priceRange === range.value}
                      onChange={() => handleFilterChange('priceRange', range.value)}
                      className="mr-2 accent-velmora-gold"
                    />
                    <span className="text-sm">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div className="mb-8">
              <h4 className="font-medium mb-3 text-sm">Material</h4>
              <div className="space-y-2">
                {materials.map((material) => (
                  <label key={material} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="material"
                      checked={filters.material === material}
                      onChange={() => handleFilterChange('material', material)}
                      className="mr-2 accent-velmora-gold"
                    />
                    <span className="text-sm">{material}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center gap-2 text-sm uppercase tracking-wide"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

            <p className="text-sm text-velmora-text-light">
              {filteredProducts.length} products
            </p>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-velmora-beige text-sm focus:outline-none focus:border-velmora-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Products */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-velmora-text-light mb-4">No products found matching your filters.</p>
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
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { dispatch } = useCart();

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div
        className="relative overflow-hidden bg-velmora-cream aspect-square mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            dispatch({ type: 'ADD_ITEM', payload: product });
          }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-velmora-white text-velmora-black px-6 py-2 text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-velmora-gold hover:text-velmora-white"
        >
          Add to Cart
        </button>
      </div>

      <div className="text-center">
        <h3 className="product-name text-sm mb-2">{product.name}</h3>
        <p className="text-velmora-gold font-medium">${product.price}</p>
        <div className="flex items-center justify-center mt-2">
          <span className="text-sm text-velmora-text-light">★ {product.rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default ShopPage;