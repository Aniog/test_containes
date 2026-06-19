import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const materials = ['18K Gold Plated', 'Sterling Silver'];

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || '';
  const activePrice = searchParams.get('price') || '';
  const activeMaterial = searchParams.get('material') || '';

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [activeCategory, activePrice, activeMaterial, sortBy]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const filteredProducts = products.filter((p) => {
    if (activeCategory && p.category !== activeCategory) return false;
    if (activePrice) {
      const range = priceRanges.find((r) => r.label === activePrice);
      if (range && (p.price < range.min || p.price >= range.max)) return false;
    }
    if (activeMaterial && p.material !== activeMaterial) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      default: return 0;
    }
  });

  const hasFilters = activeCategory || activePrice || activeMaterial;

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : ''}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-lg tracking-wide text-brand-charcoal">Filters</h3>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-brand-gold font-sans hover:underline"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-6">
        <h4 className="text-xs tracking-extra-wide uppercase font-sans font-semibold text-brand-charcoal mb-3">
          Category
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('category', '')}
            className={`block text-sm font-sans transition-colors ${
              !activeCategory ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-charcoal'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', activeCategory === cat.id ? '' : cat.id)}
              className={`block text-sm font-sans transition-colors ${
                activeCategory === cat.id ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="text-xs tracking-extra-wide uppercase font-sans font-semibold text-brand-charcoal mb-3">
          Price
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('price', '')}
            className={`block text-sm font-sans transition-colors ${
              !activePrice ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-charcoal'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => updateFilter('price', activePrice === range.label ? '' : range.label)}
              className={`block text-sm font-sans transition-colors ${
                activePrice === range.label ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h4 className="text-xs tracking-extra-wide uppercase font-sans font-semibold text-brand-charcoal mb-3">
          Material
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('material', '')}
            className={`block text-sm font-sans transition-colors ${
              !activeMaterial ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-charcoal'
            }`}
          >
            All Materials
          </button>
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => updateFilter('material', activeMaterial === mat ? '' : mat)}
              className={`block text-sm font-sans transition-colors ${
                activeMaterial === mat ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="bg-brand-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-8 md:mb-10">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal">
            {activeCategory ? categories.find((c) => c.id === activeCategory)?.name || 'Shop' : 'Shop All'}
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-brand-sand">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 text-xs tracking-extra-wide uppercase font-sans text-brand-charcoal"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
            <span className="text-xs text-brand-muted font-sans">
              {sortedProducts.length} {sortedProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs font-sans text-brand-charcoal bg-transparent border border-brand-sand px-3 py-2 focus:outline-none focus:border-brand-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-brand-muted">No pieces found</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-brand-gold font-sans hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="group relative">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative aspect-[3/4] overflow-hidden bg-brand-warm">
                        <img
                          data-strk-img-id={`${product.imgId}-shop`}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                        />
                        <img
                          data-strk-img-id={`${product.imgId}-shop-hover`}
                          data-strk-img={`[${product.descId}] worn [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                      </div>
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product);
                      }}
                      className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-brand-charcoal font-sans text-[10px] tracking-extra-wide uppercase px-5 py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-gold hover:text-white flex items-center gap-2"
                    >
                      <ShoppingBag size={12} />
                      Add to Cart
                    </button>
                    <div className="mt-3">
                      <Link to={`/product/${product.id}`}>
                        <h3
                          id={product.titleId}
                          className="font-serif text-sm tracking-super-wide uppercase text-brand-charcoal"
                        >
                          {product.name}
                        </h3>
                      </Link>
                      <p id={product.descId} className="text-xs text-brand-muted font-sans mt-0.5">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={10}
                              className={i < Math.floor(product.rating) ? 'text-brand-gold fill-brand-gold' : 'text-brand-sand'}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-brand-muted font-sans">({product.reviews})</span>
                      </div>
                      <p className="text-sm font-sans font-medium text-brand-charcoal mt-1">
                        ${product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 z-50 w-72 h-full bg-brand-cream shadow-xl overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
              <h2 className="font-serif text-lg text-brand-charcoal">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-brand-muted">
                <X size={20} />
              </button>
            </div>
            <div className="px-6 py-4">
              <FilterSidebar mobile />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShopPage;
