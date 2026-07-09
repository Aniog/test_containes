import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const priceRanges = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under $50', value: '0-50' },
  { label: '$50 – $75', value: '50-75' },
  { label: '$75+', value: '75+' },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Selling', value: 'bestselling' },
  { label: 'Newest', value: 'newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categoryFilter = searchParams.get('category') || 'all';
  const priceFilter = searchParams.get('price') || 'all';
  const sortValue = searchParams.get('sort') || 'featured';

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter);
    }

    // Price filter
    if (priceFilter !== 'all') {
      if (priceFilter === '0-50') result = result.filter(p => p.price < 50);
      else if (priceFilter === '50-75') result = result.filter(p => p.price >= 50 && p.price <= 75);
      else if (priceFilter === '75+') result = result.filter(p => p.price > 75);
    }

    // Sort
    switch (sortValue) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'bestselling':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'newest':
        result.sort((a, b) => (b.tags.includes('new') ? 1 : 0) - (a.tags.includes('new') ? 1 : 0));
        break;
      default:
        break;
    }

    return result;
  }, [categoryFilter, priceFilter, sortValue]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  const activeFiltersCount = [categoryFilter !== 'all', priceFilter !== 'all'].filter(Boolean).length;

  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <main className="bg-surface-cream pt-20 md:pt-24 min-h-screen" ref={containerRef}>
      {/* Header */}
      <div className="section-padding py-10 md:py-14 text-center border-b border-brand-200">
        <p className="font-sans text-overline uppercase tracking-mega-wide text-gold mb-3">
          Our Collection
        </p>
        <h1 className="font-serif text-heading-1 md:text-display text-charcoal">
          Shop All Jewelry
        </h1>
      </div>

      {/* Toolbar */}
      <div className="section-padding py-4 border-b border-brand-200 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 font-sans text-caption uppercase tracking-wide text-charcoal"
          >
            <SlidersHorizontal size={16} />
            Filters
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-gold text-white text-[10px] rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Active filters (desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            {categoryFilter !== 'all' && (
              <button
                onClick={() => updateFilter('category', 'all')}
                className="flex items-center gap-1 px-3 py-1 bg-brand-100 text-caption text-charcoal hover:bg-brand-200 transition-colors"
              >
                {categories.find(c => c.id === categoryFilter)?.name || categoryFilter}
                <X size={12} />
              </button>
            )}
            {priceFilter !== 'all' && (
              <button
                onClick={() => updateFilter('price', 'all')}
                className="flex items-center gap-1 px-3 py-1 bg-brand-100 text-caption text-charcoal hover:bg-brand-200 transition-colors"
              >
                {priceRanges.find(r => r.value === priceFilter)?.label || priceFilter}
                <X size={12} />
              </button>
            )}
            {activeFiltersCount > 0 && (
              <button onClick={clearFilters} className="text-caption text-charcoal-muted hover:text-charcoal underline">
                Clear all
              </button>
            )}
          </div>
        </div>

        {/* Sort */}
        <div className="relative">
          <select
            value={sortValue}
            onChange={(e) => updateFilter('sort', e.target.value)}
            className="appearance-none bg-transparent pr-7 pl-3 py-1.5 border border-brand-200 font-sans text-caption text-charcoal cursor-pointer focus:outline-none focus:border-gold"
          >
            {sortOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-charcoal-muted pointer-events-none" />
        </div>
      </div>

      <div className="section-padding py-8">
        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            {/* Category */}
            <div className="mb-8">
              <h3 className="font-sans text-overline uppercase tracking-ultra-wide text-charcoal mb-3">
                Category
              </h3>
              <div className="space-y-1.5">
                <button
                  onClick={() => updateFilter('category', 'all')}
                  className={`block w-full text-left text-body py-1 transition-colors duration-200 ${
                    categoryFilter === 'all' ? 'text-gold font-medium' : 'text-charcoal-muted hover:text-charcoal'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => updateFilter('category', cat.id)}
                    className={`block w-full text-left text-body py-1 transition-colors duration-200 ${
                      categoryFilter === cat.id ? 'text-gold font-medium' : 'text-charcoal-muted hover:text-charcoal'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="font-sans text-overline uppercase tracking-ultra-wide text-charcoal mb-3">
                Price
              </h3>
              <div className="space-y-1.5">
                {priceRanges.map(range => (
                  <button
                    key={range.value}
                    onClick={() => updateFilter('price', range.value)}
                    className={`block w-full text-left text-body py-1 transition-colors duration-200 ${
                      priceFilter === range.value ? 'text-gold font-medium' : 'text-charcoal-muted hover:text-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <h3 className="font-sans text-overline uppercase tracking-ultra-wide text-charcoal mb-3">
                Material
              </h3>
              <p className="text-body text-charcoal-muted">18K Gold Plated</p>
              <p className="text-caption text-charcoal-muted mt-1">All pieces are hypoallergenic</p>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            <p className="text-caption text-charcoal-muted mb-6">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-heading-3 text-charcoal mb-2">No pieces found</p>
                <p className="text-body text-charcoal-muted mb-6">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="btn-outline text-xs">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ShopProductCard key={product.id} product={product} onAdd={addItem} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-surface-cream shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-brand-200">
              <h2 className="font-serif text-heading-3 text-charcoal">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-charcoal-muted">
                <X size={20} />
              </button>
            </div>

            <div className="px-6 py-6 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-overline uppercase tracking-ultra-wide text-charcoal mb-3">Category</h3>
                <div className="space-y-2">
                  <button onClick={() => { updateFilter('category', 'all'); }} className={`block w-full text-left py-1.5 ${categoryFilter === 'all' ? 'text-gold font-medium' : 'text-charcoal-muted'}`}>All Jewelry</button>
                  {categories.map(cat => (
                    <button key={cat.id} onClick={() => { updateFilter('category', cat.id); }} className={`block w-full text-left py-1.5 ${categoryFilter === cat.id ? 'text-gold font-medium' : 'text-charcoal-muted'}`}>{cat.name}</button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-sans text-overline uppercase tracking-ultra-wide text-charcoal mb-3">Price</h3>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button key={range.value} onClick={() => { updateFilter('price', range.value); }} className={`block w-full text-left py-1.5 ${priceFilter === range.value ? 'text-gold font-medium' : 'text-charcoal-muted'}`}>{range.label}</button>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-brand-200">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="btn-primary w-full text-xs"
              >
                Show {filteredProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function ShopProductCard({ product, onAdd }) {
  const img = product.images[0];

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-brand-100 overflow-hidden mb-3">
          <img
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
            data-strk-img-id={`${product.id}-shop`}
            data-strk-img={`${product.name} ${product.category} gold jewelry product`}
            data-strk-img-ratio={img.ratio}
            data-strk-img-width={img.width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />

          {/* Tags */}
          {product.tags.includes('new') && (
            <span className="absolute top-3 left-3 px-2.5 py-1 bg-gold text-white text-[10px] font-medium uppercase tracking-wider">
              New
            </span>
          )}

          {/* Quick add */}
          <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-luxury">
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onAdd(product); }}
              className="w-full flex items-center justify-center gap-2 bg-charcoal/90 backdrop-blur-sm text-white py-2.5 text-overline uppercase tracking-ultra-wide hover:bg-gold-dark transition-colors duration-300"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              Add to Bag
            </button>
          </div>
        </div>
      </Link>

      <div className="text-center">
        <Link to={`/product/${product.slug}`}>
          <p className="font-serif text-sm md:text-base tracking-wide uppercase text-charcoal group-hover:text-gold-dark transition-colors duration-300">
            {product.name}
          </p>
        </Link>
        <div className="flex items-center justify-center gap-1 mt-1">
          <Star size={12} className="text-gold fill-gold" />
          <span className="text-caption text-charcoal-muted">{product.rating}</span>
        </div>
        <p className="font-sans text-body font-medium text-charcoal mt-1">${product.price}</p>
      </div>
    </div>
  );
}
