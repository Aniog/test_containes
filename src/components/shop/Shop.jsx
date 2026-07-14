import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import products from '../../data/products';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'All'
  );
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Material filter
    if (selectedMaterial !== 'All') {
      filtered = filtered.filter((p) => p.material === selectedMaterial);
    }

    // Price filter
    if (priceRange !== 'All') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter((p) => p.price >= min && p.price <= max);
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
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setPriceRange('All');
    setSortBy('featured');
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="font-serif text-4xl mb-2">Shop All</h1>
            <p className="text-velmora-warm-gray text-sm">
              {filteredProducts.length} products
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-velmora-border text-sm hover:border-velmora-gold transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </button>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-velmora-border text-sm focus:outline-none focus:border-velmora-gold bg-white"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterPanel
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedMaterial={selectedMaterial}
              setSelectedMaterial={setSelectedMaterial}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              clearFilters={clearFilters}
            />
          </div>

          {/* Mobile Filter Drawer */}
          {isFilterOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/50 z-50 lg:hidden"
                onClick={() => setIsFilterOpen(false)}
              />
              <div className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 overflow-y-auto lg:hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-serif text-xl">Filters</h3>
                    <button onClick={() => setIsFilterOpen(false)}>
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <FilterPanel
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    selectedMaterial={selectedMaterial}
                    setSelectedMaterial={setSelectedMaterial}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    clearFilters={clearFilters}
                  />
                </div>
              </div>
            </>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-velmora-warm-gray mb-4">
                  No products match your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="text-velmora-gold hover:underline"
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
}

function FilterPanel({
  selectedCategory,
  setSelectedCategory,
  selectedMaterial,
  setSelectedMaterial,
  priceRange,
  setPriceRange,
  clearFilters,
}) {
  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];
  const priceRanges = [
    { label: 'All', value: 'All' },
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $80', value: '50-80' },
    { label: '$80+', value: '80-200' },
  ];

  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`block text-sm ${
                selectedCategory === cat
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-warm-gray hover:text-velmora-charcoal'
              } transition-colors`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
          Material
        </h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block text-sm ${
                selectedMaterial === mat
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-warm-gray hover:text-velmora-charcoal'
              } transition-colors`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setPriceRange(range.value)}
              className={`block text-sm ${
                priceRange === range.value
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-warm-gray hover:text-velmora-charcoal'
              } transition-colors`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={clearFilters}
        className="text-sm text-velmora-warm-gray hover:text-velmora-black transition-colors"
      >
        Clear all filters
      </button>
    </div>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-velmora-light-gray aspect-square mb-4">
          <img
            src={
              isHovered && product.images[1]
                ? product.images[1]
                : product.images[0]
            }
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-velmora-black px-6 py-3 text-sm tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-velmora-gold hover:text-white flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            ADD TO CART
          </button>
        </div>

        <div>
          <h3 className="font-serif text-sm uppercase tracking-wider mb-2">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'fill-velmora-gold text-velmora-gold'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-velmora-warm-gray">
              ({product.reviews})
            </span>
          </div>
          <p className="text-velmora-gold font-medium">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
