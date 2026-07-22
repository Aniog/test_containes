import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories, priceRanges } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark mb-3">
          <img
            src={hovered && product.images[1] ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div
            className={`absolute inset-x-0 bottom-0 p-3 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              className="w-full bg-white/95 backdrop-blur-sm text-charcoal py-2.5 px-4 flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-sans font-medium hover:bg-gold hover:text-white transition-colors duration-300"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>

      <div className="text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm md:text-base uppercase tracking-product text-charcoal hover:text-gold transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-1 mt-1">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-2.5 h-2.5 ${
                  i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-warm-gray-light'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-warm-gray">({product.reviews})</span>
        </div>
        <p className="font-sans text-sm font-medium text-charcoal mt-0.5">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === 'all') params.delete('category');
    else params.set('category', cat);
    setSearchParams(params);
  };

  const setPriceRange = (range) => {
    const params = new URLSearchParams(searchParams);
    if (range === 'all') params.delete('price');
    else params.set('price', range);
    setSearchParams(params);
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (activePriceRange !== 'all') {
      const range = priceRanges.find(r => r.id === activePriceRange);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
      }
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.reverse();
        break;
      default: // featured
        break;
    }

    return result;
  }, [activeCategory, activePriceRange, sortBy]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, activePriceRange, sortBy]);

  const activeFilters = [];
  if (activeCategory !== 'all') activeFilters.push(categories.find(c => c.id === activeCategory)?.label || activeCategory);
  if (activePriceRange !== 'all') activeFilters.push(priceRanges.find(r => r.id === activePriceRange)?.label || activePriceRange);

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20">
      {/* Header */}
      <div className="bg-cream-dark border-b border-charcoal/5 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal font-light">Shop All</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4 mb-3" />
          <p className="text-sm text-warm-gray">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} crafted to be treasured
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-medium text-charcoal hover:text-gold transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Active filters */}
            {activeFilters.length > 0 && (
              <div className="flex items-center gap-2">
                {activeFilters.map(f => (
                  <span key={f} className="inline-flex items-center gap-1.5 bg-gold/10 text-gold text-[11px] uppercase tracking-widest font-sans px-3 py-1">
                    {f}
                    <button onClick={() => { setCategory('all'); setPriceRange('all'); }}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs uppercase tracking-widest font-sans font-medium text-charcoal pr-6 pl-2 py-2 border border-charcoal/15 focus:outline-none focus:border-gold cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-warm-gray absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className={`md:block ${filterOpen ? 'block' : 'hidden'} w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-sans text-[11px] uppercase tracking-widest font-medium text-charcoal mb-3">
                  Category
                </h3>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setCategory('all')}
                    className={`block text-sm font-sans transition-colors ${
                      activeCategory === 'all' ? 'text-gold font-medium' : 'text-charcoal-light hover:text-gold'
                    }`}
                  >
                    All ({products.length})
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`block text-sm font-sans transition-colors ${
                        activeCategory === cat.id ? 'text-gold font-medium' : 'text-charcoal-light hover:text-gold'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="font-sans text-[11px] uppercase tracking-widest font-medium text-charcoal mb-3">
                  Price
                </h3>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setPriceRange('all')}
                    className={`block text-sm font-sans transition-colors ${
                      activePriceRange === 'all' ? 'text-gold font-medium' : 'text-charcoal-light hover:text-gold'
                    }`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map(range => (
                    <button
                      key={range.id}
                      onClick={() => setPriceRange(range.id)}
                      className={`block text-sm font-sans transition-colors ${
                        activePriceRange === range.id ? 'text-gold font-medium' : 'text-charcoal-light hover:text-gold'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile close */}
              <button
                onClick={() => setFilterOpen(false)}
                className="md:hidden btn-secondary w-full text-center mt-4"
              >
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-2">No pieces found</p>
                <p className="text-sm text-warm-gray mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all'); }}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
