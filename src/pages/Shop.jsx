import React, { useEffect, useRef, useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import products, { categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80 – $100', min: 80, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
];

const materials = ['18K Gold Plated', 'Cubic Zirconia', 'Swarovski Crystal'];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const defaultVariant = product.variants[0];

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, defaultVariant.id, product.price);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-sand overflow-hidden">
        <img
          alt={product.name}
          data-strk-img-id={hovered ? `${product.id}-hover` : `${product.id}-thumb`}
          data-strk-img={`[${product.descId}] [${product.titleId}] [shop-heading]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={handleAdd}
            className="w-full bg-cream/95 backdrop-blur-sm text-charcoal font-sans text-xs uppercase tracking-wider py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-white transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 id={product.titleId} className="product-name text-xs md:text-sm text-charcoal">
          {product.name}
        </h3>
        <p id={product.descId} className="sr-only">
          {product.description.substring(0, 80)}
        </p>
        <div className="flex items-center justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'fill-clay text-clay'}`}
            />
          ))}
          <span className="text-[10px] font-sans text-stone ml-1">
            ({product.reviews})
          </span>
        </div>
        <p className="mt-1.5 text-sm font-sans font-medium text-charcoal">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortValue, setSortValue] = useState('featured');

  const activeCategory = searchParams.get('category') || '';
  const activePriceRange = searchParams.get('price') || '';
  const activeMaterial = searchParams.get('material') || '';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params, { replace: true });
  };

  const filtered = useMemo(() => {
    let filtered = [...products];

    if (activeCategory) {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    if (activePriceRange) {
      const range = priceRanges.find(
        (r) => `${r.min}-${r.max}` === activePriceRange
      );
      if (range) {
        filtered = filtered.filter(
          (p) => p.price >= range.min && p.price < range.max
        );
      }
    }

    if (activeMaterial) {
      filtered = filtered.filter((p) =>
        p.materials.toLowerCase().includes(activeMaterial.toLowerCase())
      );
    }

    if (sortValue === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }, [activeCategory, activePriceRange, activeMaterial, sortValue]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [activeCategory, activePriceRange, activeMaterial, sortValue]);

  const clearAll = () => {
    setSearchParams({}, { replace: true });
    setSortValue('featured');
  };

  const hasFilters = activeCategory || activePriceRange || activeMaterial;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs font-sans uppercase tracking-widest text-charcoal mb-4">
          Category
        </h4>
        <div className="space-y-2.5">
          <button
            onClick={() => setFilter('category', '')}
            className={`block text-sm font-sans transition-colors ${
              !activeCategory ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
                setFilter('category', activeCategory === cat.id ? '' : cat.id)
              }
              className={`block text-sm font-sans transition-colors ${
                activeCategory === cat.id
                  ? 'text-gold font-medium'
                  : 'text-stone hover:text-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs font-sans uppercase tracking-widest text-charcoal mb-4">
          Price
        </h4>
        <div className="space-y-2.5">
          {priceRanges.map((range) => {
            const key = `${range.min}-${range.max}`;
            return (
              <button
                key={key}
                onClick={() =>
                  setFilter('price', activePriceRange === key ? '' : key)
                }
                className={`block text-sm font-sans transition-colors ${
                  activePriceRange === key
                    ? 'text-gold font-medium'
                    : 'text-stone hover:text-charcoal'
                }`}
              >
                {range.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs font-sans uppercase tracking-widest text-charcoal mb-4">
          Material
        </h4>
        <div className="space-y-2.5">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() =>
                setFilter('material', activeMaterial === mat ? '' : mat)
              }
              className={`block text-sm font-sans transition-colors ${
                activeMaterial === mat
                  ? 'text-gold font-medium'
                  : 'text-stone hover:text-charcoal'
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
    <div ref={containerRef} className="pt-[72px] md:pt-[80px]">
      {/* Header */}
      <div className="container-page py-10 md:py-16">
        <h1
          id="shop-heading"
          className="text-3xl md:text-5xl font-serif text-charcoal font-light tracking-wide text-center"
        >
          {activeCategory
            ? categories.find((c) => c.id === activeCategory)?.name
            : 'Shop All'}
        </h1>
        <p className="mt-3 text-sm font-sans text-stone text-center">
          {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="container-page pb-20 md:pb-28">
        <div className="flex gap-10 lg:gap-16">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            {hasFilters && (
              <button
                onClick={clearAll}
                className="text-xs font-sans text-gold uppercase tracking-wider mb-6 hover:text-gold-deep transition-colors flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                Clear All
              </button>
            )}
            <FilterContent />
          </aside>

          {/* Main */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-charcoal"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
                {hasFilters && (
                  <span className="w-4 h-4 bg-gold text-white text-[9px] font-medium rounded-full flex items-center justify-center">
                    !
                  </span>
                )}
              </button>

              <div className="hidden md:block" />

              <div className="relative">
                <select
                  value={sortValue}
                  onChange={(e) => setSortValue(e.target.value)}
                  className="appearance-none bg-transparent text-xs font-sans uppercase tracking-wider text-charcoal pr-6 py-1 cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-stone pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-sm font-sans text-stone">
                  No pieces match your filters.
                </p>
                <button
                  onClick={clearAll}
                  className="mt-4 btn-outline text-xs"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[55] md:hidden">
          <div
            className="absolute inset-0 bg-espresso/50 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-72 bg-cream shadow-2xl animate-slide-in-right p-6 pt-14 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-sans uppercase tracking-widest text-charcoal font-medium">
                Filters
              </span>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {hasFilters && (
              <button
                onClick={() => {
                  clearAll();
                  setMobileFiltersOpen(false);
                }}
                className="text-xs font-sans text-gold uppercase tracking-wider mb-8 flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                Clear All
              </button>
            )}
            <FilterContent />
          </div>
        </div>
      )}
    </div>
  );
}
