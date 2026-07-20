import React, { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import { Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      const categoryName = categories.find(c => c.id === selectedCategory)?.name;
      filtered = filtered.filter(p => p.category === categoryName);
    }

    // Filter by price
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under50':
          filtered = filtered.filter(p => p.price < 50);
          break;
        case '50to80':
          filtered = filtered.filter(p => p.price >= 50 && p.price <= 80);
          break;
        case 'over80':
          filtered = filtered.filter(p => p.price > 80);
          break;
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
      case 'featured':
      default:
        filtered.sort((a, b) => b.featured - a.featured);
        break;
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange('all');
  };

  const hasActiveFilters = selectedCategory !== 'all' || priceRange !== 'all';

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-4xl md:text-5xl mb-4 font-light text-center"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Collection
          </h1>
          <p className="text-center text-gray-600">
            Discover our curated selection of demi-fine jewelry
          </p>
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="flex items-center gap-2 text-sm tracking-wider uppercase"
          >
            <SlidersHorizontal size={18} />
            Filter
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`${isMobileFilterOpen ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm tracking-wider uppercase">Filters</h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1"
                  >
                    <X size={14} />
                    Clear
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h4 className="text-sm font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === 'all'}
                      onChange={() => setSelectedCategory('all')}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">All</span>
                  </label>
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="text-sm font-medium mb-3">Price</h4>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to80', label: '$50 - $80' },
                    { value: 'over80', label: 'Over $80' }
                  ].map(option => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === option.value}
                        onChange={() => setPriceRange(option.value)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-grow">
            {/* Sort Dropdown */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm text-gray-600">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 text-sm focus:outline-none focus:border-gray-900"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No products match your filters</p>
                <button
                  onClick={clearFilters}
                  className="text-sm tracking-wider uppercase underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden mb-4 bg-gray-100">
        <img
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {product.bestseller && (
          <div className="absolute top-4 left-4 bg-gray-900 text-white text-xs px-3 py-1 tracking-wider uppercase">
            Bestseller
          </div>
        )}
      </div>

      <div>
        <h3
          className="text-sm tracking-wider uppercase mb-1"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
              />
            ))}
          </div>
        </div>
        <p className="text-gray-900">${product.price}</p>
      </div>
    </Link>
  );
};

export default Collection;
