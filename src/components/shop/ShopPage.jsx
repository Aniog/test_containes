import React, { useState, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const materials = ['18K Gold Plated'];

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3x4] overflow-hidden bg-velmora-warm">
          <img
            data-strk-img-id={`${product.imgId}-shop`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
          />
          <img
            data-strk-img-id={`${product.imgId}-shop-hover`}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </Link>

      <button
        onClick={() => addItem(product)}
        className={`absolute bottom-3 left-3 right-3 py-2.5 bg-velmora-white/95 backdrop-blur-sm text-velmora-text text-[11px] tracking-[0.15em] uppercase font-medium flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>

      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-sm tracking-[0.15em] uppercase text-velmora-text hover:text-velmora-gold transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-velmora-muted mt-1">{product.description}</p>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-sand'}`}
              />
            ))}
          </div>
          <span className="text-xs text-velmora-muted">({product.reviews})</span>
        </div>
        <p className="text-sm font-medium mt-1.5">${product.price}</p>
      </div>
    </div>
  );
};

const ShopPage = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);
  const [headingRef, headingVisible] = useScrollReveal();

  const activeCategory = searchParams.get('category') || 'all';
  const activePrice = searchParams.get('price') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  let filtered = [...products];

  if (activeCategory !== 'all') {
    filtered = filtered.filter((p) => p.category === activeCategory);
  }

  if (activePrice !== 'all') {
    const range = priceRanges.find((r) => r.label === activePrice);
    if (range) {
      filtered = filtered.filter((p) => p.price >= range.min && p.price < range.max);
    }
  }

  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [activeCategory, activePrice, sortBy]);

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.15em] uppercase font-semibold text-velmora-text mb-4">Category</h3>
        <div className="space-y-2.5">
          {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter('category', cat)}
              className={`block text-sm capitalize transition-colors duration-200 ${activeCategory === cat ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-text'}`}
            >
              {cat === 'all' ? 'All Jewelry' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.15em] uppercase font-semibold text-velmora-text mb-4">Price</h3>
        <div className="space-y-2.5">
          <button
            onClick={() => setFilter('price', 'all')}
            className={`block text-sm transition-colors duration-200 ${activePrice === 'all' ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-text'}`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setFilter('price', range.label)}
              className={`block text-sm transition-colors duration-200 ${activePrice === range.label ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-text'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-[0.15em] uppercase font-semibold text-velmora-text mb-4">Material</h3>
        <div className="space-y-2.5">
          {materials.map((mat) => (
            <span key={mat} className="block text-sm text-velmora-muted">{mat}</span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen page-enter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div
          ref={headingRef}
          className={`reveal ${headingVisible ? 'visible' : ''} text-center mb-10`}
        >
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-velmora-text">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFilters(true)}
            className="md:hidden flex items-center gap-2 text-xs tracking-[0.12em] uppercase text-velmora-text hover:text-velmora-gold transition-colors duration-200"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block text-xs text-velmora-muted">{filtered.length} items</p>

          <div className="flex items-center gap-2">
            <label className="text-xs text-velmora-muted">Sort:</label>
            <select
              value={sortBy}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="text-xs text-velmora-text bg-transparent border border-velmora-border px-3 py-1.5 focus:outline-none focus:border-velmora-gold transition-colors duration-200"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-text mb-2">No items found</p>
                <p className="text-sm text-velmora-muted">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <>
          <div className="fixed inset-0 bg-velmora-overlay z-50 overlay-enter" onClick={() => setMobileFilters(false)} />
          <div className="fixed left-0 top-0 h-full w-72 bg-velmora-white z-50 shadow-2xl p-6 overflow-y-auto cart-drawer-enter" style={{ animationDirection: 'normal', animationName: 'slideInLeft' }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs tracking-[0.15em] uppercase font-semibold">Filters</h3>
              <button onClick={() => setMobileFilters(false)} className="p-1 text-velmora-muted hover:text-velmora-text transition-colors duration-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  );
};

export default ShopPage;
