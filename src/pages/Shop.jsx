import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, Grid, List, ChevronDown } from 'lucide-react';
import { products } from '../data/products';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

    // Price range filter
    if (priceRange !== 'All') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(p => {
        if (max) {
          return p.price >= min && p.price <= max;
        } else {
          return p.price >= min;
        }
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
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedMaterial, priceRange, sortBy]);

  const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
  const materials = ['All', 'Gold', 'Silver'];
  const priceRanges = [
    { label: 'All', value: 'All' },
    { label: 'Under $50', value: '0-50' },
    { label: '$50 - $80', value: '50-80' },
    { label: '$80+', value: '80' }
  ];

  return (
    <main className="min-h-screen bg-white pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1
            className="font-serif text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Shop All
          </h1>
          <p className="font-sans text-sm text-velmora-warm-gray tracking-wide">
            {filteredProducts.length} products
          </p>
        </div>

        {/* Filters and Sort Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-velmora-border">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="sm:hidden flex items-center gap-2 font-sans text-sm tracking-wide uppercase"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Active Filters */}
          <div className="hidden sm:flex items-center gap-4">
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="font-sans text-xs tracking-wide uppercase bg-velmora-soft-beige px-3 py-1 hover:bg-velmora-gold hover:text-white transition-colors"
              >
                {selectedCategory} ✕
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs tracking-wide uppercase text-velmora-warm-gray">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-sm border-none bg-transparent focus:outline-none cursor-pointer text-velmora-charcoal"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Filter Sidebar */}
          <aside className={`${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="font-sans text-xs tracking-ultra-wide uppercase mb-4 text-velmora-charcoal">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left font-sans text-sm py-2 transition-colors ${
                        selectedCategory === category
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-warm-gray hover:text-velmora-charcoal'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="font-sans text-xs tracking-ultra-wide uppercase mb-4 text-velmora-charcoal">Material</h3>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`block w-full text-left font-sans text-sm py-2 transition-colors ${
                        selectedMaterial === material
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-warm-gray hover:text-velmora-charcoal'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-sans text-xs tracking-ultra-wide uppercase mb-4 text-velmora-charcoal">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`block w-full text-left font-sans text-sm py-2 transition-colors ${
                        priceRange === range.value
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-warm-gray hover:text-velmora-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedCategory !== 'All' || selectedMaterial !== 'All' || priceRange !== 'All') && (
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedMaterial('All');
                    setPriceRange('All');
                  }}
                  className="font-sans text-xs text-velmora-gold hover:text-velmora-gold-dark transition-colors uppercase tracking-wide"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-sans text-lg text-velmora-warm-gray mb-4">No products found</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSelectedMaterial('All');
                    setPriceRange('All');
                  }}
                  className="font-sans text-sm text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    {/* Product Image */}
                    <div className="relative overflow-hidden bg-velmora-soft-beige mb-4 img-zoom">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full aspect-[3/4] object-cover"
                      />

                      {/* Bestseller Badge */}
                      {product.bestseller && (
                        <div className="absolute top-4 left-4 bg-velmora-gold text-white font-sans text-xs tracking-wider uppercase px-3 py-1">
                          Bestseller
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div>
                      <h3
                        className="product-name text-sm mb-2 group-hover:text-velmora-gold transition-colors"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {product.name}
                      </h3>
                      <p className="font-sans text-sm text-velmora-warm-gray mb-2">
                        ${product.price}
                      </p>

                      {/* Star Rating */}
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="font-sans text-xs text-velmora-warm-gray ml-1">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
