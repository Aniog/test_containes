import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';
import products from './data-products.js';
import { useCart } from './cart-context.jsx';

const CATEGORIES = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const MATERIALS = [
  { value: '', label: 'All' },
  { value: 'gold', label: 'Gold Tone' },
  { value: 'silver', label: 'Silver Tone' },
];

const PRICE_RANGES = [
  { value: '', label: 'All' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-999', label: '$75+' },
];

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || '';
  const activeMaterial = searchParams.get('material') || '';
  const activePrice = searchParams.get('price') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activeMaterial, activePrice, activeSort]);

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeMaterial) {
      result = result.filter((p) => p.variants.includes(activeMaterial));
    }
    if (activePrice) {
      const [min, max] = activePrice.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    switch (activeSort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured = keep default order
        break;
    }

    return result;
  }, [activeCategory, activeMaterial, activePrice, activeSort]);

  const hasFilters = activeCategory || activeMaterial || activePrice;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="font-serif text-xs tracking-[0.15em] uppercase text-velmora-charcoal mb-3">Category</h4>
        <div className="space-y-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter('category', cat.value)}
              className={`block text-sm transition-colors ${
                activeCategory === cat.value
                  ? 'text-velmora-charcoal font-medium'
                  : 'text-velmora-stone hover:text-velmora-charcoal'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="font-serif text-xs tracking-[0.15em] uppercase text-velmora-charcoal mb-3">Material</h4>
        <div className="space-y-2">
          {MATERIALS.map((mat) => (
            <button
              key={mat.value}
              onClick={() => setFilter('material', mat.value)}
              className={`block text-sm transition-colors ${
                activeMaterial === mat.value
                  ? 'text-velmora-charcoal font-medium'
                  : 'text-velmora-stone hover:text-velmora-charcoal'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="font-serif text-xs tracking-[0.15em] uppercase text-velmora-charcoal mb-3">Price</h4>
        <div className="space-y-2">
          {PRICE_RANGES.map((range) => (
            <button
              key={range.value}
              onClick={() => setFilter('price', range.value)}
              className={`block text-sm transition-colors ${
                activePrice === range.value
                  ? 'text-velmora-charcoal font-medium'
                  : 'text-velmora-stone hover:text-velmora-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-velmora-stone underline hover:text-velmora-charcoal transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="min-h-screen pt-16 lg:pt-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl lg:text-4xl tracking-wide mb-3">Shop All</h1>
          <p className="text-sm text-velmora-stone">{filtered.length} products</p>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filter toggle */}
          <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="bg-velmora-charcoal text-white px-6 py-3 text-xs tracking-wider uppercase flex items-center gap-2 shadow-lg"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
              {hasFilters && (
                <span className="w-5 h-5 bg-velmora-gold rounded-full text-[10px] flex items-center justify-center">
                  !
                </span>
              )}
            </button>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-velmora-border">
              <p className="text-xs text-velmora-stone hidden lg:block">
                {hasFilters ? 'Filtered results' : 'Showing all products'}
              </p>
              <div className="flex items-center gap-2 ml-auto">
                <label className="text-xs text-velmora-stone">Sort by:</label>
                <select
                  value={activeSort}
                  onChange={(e) => setFilter('sort', e.target.value === 'featured' ? '' : e.target.value)}
                  className="text-xs text-velmora-charcoal bg-transparent border border-velmora-border px-3 py-1.5 focus:outline-none cursor-pointer"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velmora-stone">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-ghost mt-4">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" onClick={() => setMobileFilterOpen(false)}>
          <div className="absolute inset-0 bg-black/30" />
          <div
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg tracking-wider">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
            <button
              onClick={() => setMobileFilterOpen(false)}
              className="btn-primary w-full mt-8"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ShopProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.variants[0], 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="aspect-[3/4] bg-velmora-sand overflow-hidden mb-4 relative">
        <img
          data-strk-img-id={`shop-${product.id}`}
          data-strk-img={`[shop-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span id={`shop-name-${product.id}`} className="sr-only">{product.name}</span>

        <button
          onClick={handleAdd}
          className={`absolute bottom-3 left-3 right-3 py-2.5 text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 ${
            added
              ? 'bg-velmora-gold text-white'
              : 'bg-white/90 text-velmora-charcoal opacity-0 group-hover:opacity-100 hover:bg-velmora-gold hover:text-white'
          }`}
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          {added ? 'Added!' : 'Add to Bag'}
        </button>
      </div>

      <p className="font-serif text-xs tracking-[0.12em] text-velmora-charcoal uppercase mb-1">{product.name}</p>
      <div className="flex items-center gap-1 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-3 h-3 ${i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'fill-none text-velmora-border'}`} />
        ))}
        <span className="text-[11px] text-velmora-stone ml-1">({product.reviewCount})</span>
      </div>
      <p className="text-sm text-velmora-gold">${product.price}</p>
    </Link>
  );
}
