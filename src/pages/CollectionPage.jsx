import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ShoppingBag, SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function CollectionPage() {
  const [searchParams] = useSearchParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  // Filter products
  let filtered = products.filter(p => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
    if (priceRange === 'under50' && p.price >= 50) return false;
    if (priceRange === '50to75' && (p.price < 50 || p.price > 75)) return false;
    if (priceRange === 'over75' && p.price <= 75) return false;
    return true;
  });

  // Sort
  if (sortBy === 'price-asc') filtered.sort((a, b) => a.price - b.price);
  else if (sortBy === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  else if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
  else if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="py-8 md:py-12 text-center">
          <p className="text-xs tracking-widest uppercase text-accent mb-3">Our Collection</p>
          <h1 className="serif-heading text-3xl md:text-4xl lg:text-5xl">Shop All</h1>
          <p className="text-secondary text-sm mt-3">{filtered.length} pieces</p>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar - desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-secondary mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block text-sm transition-colors ${
                      selectedCategory === 'all' ? 'text-accent font-medium' : 'text-secondary hover:text-accent'
                    }`}
                  >
                    All ({products.length})
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block text-sm transition-colors ${
                        selectedCategory === cat.id ? 'text-accent font-medium' : 'text-secondary hover:text-accent'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-secondary mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to75', label: '$50 - $75' },
                    { value: 'over75', label: 'Over $75' },
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => setPriceRange(option.value)}
                      className={`block text-sm transition-colors ${
                        priceRange === option.value ? 'text-accent font-medium' : 'text-secondary hover:text-accent'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm text-secondary mb-4"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {showFilters && (
              <div className="bg-white p-4 border border-warm mb-6 space-y-6">
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-secondary mb-3">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`px-3 py-1.5 text-xs tracking-wider border transition-colors ${
                        selectedCategory === 'all'
                          ? 'border-accent bg-accent text-white'
                          : 'border-warm text-secondary'
                      }`}
                    >
                      All
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3 py-1.5 text-xs tracking-wider border transition-colors ${
                          selectedCategory === cat.id
                            ? 'border-accent bg-accent text-white'
                            : 'border-warm text-secondary'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs tracking-widest uppercase text-secondary mb-3">Price</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: 'all', label: 'All' },
                      { value: 'under50', label: 'Under $50' },
                      { value: '50to75', label: '$50 - $75' },
                      { value: 'over75', label: 'Over $75' },
                    ].map(option => (
                      <button
                        key={option.value}
                        onClick={() => setPriceRange(option.value)}
                        className={`px-3 py-1.5 text-xs tracking-wider border transition-colors ${
                          priceRange === option.value
                            ? 'border-accent bg-accent text-white'
                            : 'border-warm text-secondary'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort & count bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-warm">
              <p className="text-sm text-secondary">{filtered.length} products</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted hidden sm:inline">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-warm bg-transparent px-3 py-1.5 focus:outline-none focus:border-accent"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="serif-heading text-xl text-secondary mb-2">No pieces found</p>
                <p className="text-sm text-muted">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <div
                    key={product.id}
                    className="group"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="relative aspect-[3/4] bg-surface overflow-hidden mb-4">
                      {product.badge && (
                        <span className="absolute top-3 left-3 z-10 bg-accent text-white text-[10px] tracking-widest uppercase px-2 py-1">
                          {product.badge}
                        </span>
                      )}
                      <img
                        data-strk-img-id={`${product.id}-shop`}
                        data-strk-img={`[${product.images[0].id}-text] [${product.id}-name] [shop-all-title]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Quick add */}
                      <div className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                        hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}>
                        <button
                          onClick={() => addItem(product, product.variants[0])}
                          className="w-full bg-white/95 backdrop-blur-sm text-primary text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-accent hover:text-white transition-colors"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Cart
                        </button>
                      </div>
                    </div>

                    <Link to={`/product/${product.id}`}>
                      <p className="product-name text-xs md:text-sm text-primary group-hover:text-accent transition-colors">
                        {product.name}
                      </p>
                      <div className="flex items-center gap-1 mt-1.5">
                        <Star className="w-3 h-3 fill-accent text-accent" />
                        <span className="text-xs text-muted">{product.rating}</span>
                      </div>
                      <p className="text-sm mt-1.5 text-secondary">${product.price}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
