import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import { Star, SlidersHorizontal, X } from 'lucide-react';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', '18K Gold Plated', 'Silver Plated'];
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'bestsellers', label: 'Best Sellers' },
  ];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by material
    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    // Filter by price range
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'bestsellers':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, sortBy, priceRange]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setSortBy('featured');
    setPriceRange([0, 200]);
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedMaterial !== 'All' || sortBy !== 'featured';

  return (
    <div className="min-h-screen pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="heading-lg mb-4">Shop All</h1>
          <div className="w-16 h-px bg-velmora-gold" />
        </div>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex items-center justify-between mb-6">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 font-sans text-sm uppercase tracking-wider"
          >
            <SlidersHorizontal size={18} />
            <span>Filters</span>
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="font-sans text-sm border border-velmora-border px-4 py-2 focus:outline-none focus:border-velmora-gold"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filter Sidebar */}
          <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block`}>
            <div className="space-y-8">
              {/* Categories */}
              <div>
                <h3 className="font-sans text-sm uppercase tracking-wider mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block font-sans text-sm ${
                        selectedCategory === category
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-muted hover:text-velmora-charcoal'
                      } transition-colors`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-sans text-sm uppercase tracking-wider mb-4">Material</h3>
                <div className="space-y-2">
                  {materials.map(material => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`block font-sans text-sm ${
                        selectedMaterial === material
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-muted hover:text-velmora-charcoal'
                      } transition-colors`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-sans text-sm uppercase tracking-wider mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Under $50', range: [0, 50] },
                    { label: '$50 - $100', range: [50, 100] },
                    { label: 'Over $100', range: [100, 200] },
                  ].map(option => (
                    <button
                      key={option.label}
                      onClick={() => setPriceRange(option.range)}
                      className="block font-sans text-sm text-velmora-muted hover:text-velmora-charcoal transition-colors"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center space-x-2 font-sans text-sm text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  <X size={14} />
                  <span>Clear all filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3">
            {/* Desktop Sort */}
            <div className="hidden md:flex items-center justify-between mb-6">
              <p className="font-sans text-sm text-velmora-muted">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-sans text-sm border border-velmora-border px-4 py-2 focus:outline-none focus:border-velmora-gold"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Products */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-muted mb-4">No products found</p>
                <button
                  onClick={clearFilters}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="product-card group"
                  >
                    <div className="relative aspect-square overflow-hidden bg-velmora-beige">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          // Add to cart logic
                        }}
                        className="quick-add"
                      >
                        Add to Cart
                      </button>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="product-name text-sm">{product.name}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="star-rating">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                              className={i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                        <span className="font-sans text-xs text-velmora-muted">({product.reviews})</span>
                      </div>
                      <p className="font-serif text-lg">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
