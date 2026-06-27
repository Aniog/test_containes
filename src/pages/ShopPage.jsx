import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const { addToCart } = useCart();

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];
  const priceRanges = [
    { label: 'All', value: 'All' },
    { label: 'Under $50', value: 'under50' },
    { label: '$50 - $80', value: '50to80' },
    { label: 'Over $80', value: 'over80' }
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Material filter
    if (selectedMaterial !== 'All') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    // Price filter
    if (priceRange !== 'All') {
      filtered = filtered.filter(p => {
        if (priceRange === 'under50') return p.price < 50;
        if (priceRange === '50to80') return p.price >= 50 && p.price <= 80;
        if (priceRange === 'over80') return p.price > 80;
        return true;
      });
    }

    // Sort
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
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        filtered.sort((a, b) => b.featured - a.featured);
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const handleAddToCart = (product) => {
    addToCart(product, 1, 'Gold');
  };

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setPriceRange('All');
  };

  const hasActiveFilters =
    selectedCategory !== 'All' ||
    selectedMaterial !== 'All' ||
    priceRange !== 'All';

  return (
    <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
        <div className="hairline w-24 mx-auto" />
      </div>

      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6 flex items-center justify-between">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="flex items-center gap-2 px-4 py-2 border border-velmora-gray-300"
        >
          <SlidersHorizontal className="w-5 h-5" />
          Filter
        </button>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-velmora-gray-300 bg-white focus:outline-none focus:border-velmora-black"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="name">Name A-Z</option>
        </select>
      </div>

      <div className="flex gap-8">
        {/* Filter Sidebar - Desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="space-y-8">
            {/* Category Filter */}
            <div>
              <h3 className="font-serif text-lg mb-4">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block text-left w-full py-2 px-3 transition-colors ${
                      selectedCategory === category
                        ? 'bg-velmora-black text-white'
                        : 'hover:bg-velmora-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Material Filter */}
            <div>
              <h3 className="font-serif text-lg mb-4">Material</h3>
              <div className="space-y-2">
                {materials.map((material) => (
                  <button
                    key={material}
                    onClick={() => setSelectedMaterial(material)}
                    className={`block text-left w-full py-2 px-3 transition-colors ${
                      selectedMaterial === material
                        ? 'bg-velmora-black text-white'
                        : 'hover:bg-velmora-gray-100'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="font-serif text-lg mb-4">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setPriceRange(range.value)}
                    className={`block text-left w-full py-2 px-3 transition-colors ${
                      priceRange === range.value
                        ? 'bg-velmora-black text-white'
                        : 'hover:bg-velmora-gray-100'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-velmora-gray-500 hover:text-velmora-black underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        </aside>

        {/* Mobile Filter Sidebar */}
        {isMobileFilterOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
              onClick={() => setIsMobileFilterOpen(false)}
            />
            <div className="fixed left-0 top-0 h-full w-80 bg-white z-50 p-6 overflow-y-auto lg:hidden">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-2xl">Filters</h2>
                <button onClick={() => setIsMobileFilterOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Category Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-lg mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsMobileFilterOpen(false);
                      }}
                      className={`block text-left w-full py-2 px-3 transition-colors ${
                        selectedCategory === category
                          ? 'bg-velmora-black text-white'
                          : 'hover:bg-velmora-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Material Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-lg mb-4">Material</h3>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => {
                        setSelectedMaterial(material);
                        setIsMobileFilterOpen(false);
                      }}
                      className={`block text-left w-full py-2 px-3 transition-colors ${
                        selectedMaterial === material
                          ? 'bg-velmora-black text-white'
                          : 'hover:bg-velmora-gray-100'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Price Filter */}
              <div className="mb-8">
                <h3 className="font-serif text-lg mb-4">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => {
                        setPriceRange(range.value);
                        setIsMobileFilterOpen(false);
                      }}
                      className={`block text-left w-full py-2 px-3 transition-colors ${
                        priceRange === range.value
                          ? 'bg-velmora-black text-white'
                          : 'hover:bg-velmora-gray-100'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={() => {
                    clearFilters();
                    setIsMobileFilterOpen(false);
                  }}
                  className="text-sm text-velmora-gray-500 hover:text-velmora-black underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          {/* Desktop Sort */}
          <div className="hidden lg:flex items-center justify-between mb-8">
            <p className="text-sm text-velmora-gray-500">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-velmora-gray-300 bg-white focus:outline-none focus:border-velmora-black"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>

          {/* Products */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-velmora-gray-500 mb-4">
                No products match your filters
              </p>
              <button
                onClick={clearFilters}
                className="btn-premium btn-premium-outline"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative overflow-hidden bg-velmora-gray-100 mb-4 aspect-square">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(product);
                        }}
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 btn-premium btn-premium-gold text-sm py-3 px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                    <h3 className="product-name text-sm mb-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-velmora-gold text-velmora-gold" />
                      <span className="text-sm text-velmora-gray-500">
                        {product.rating}
                      </span>
                    </div>
                    <p className="font-serif text-lg">${product.price}</p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
