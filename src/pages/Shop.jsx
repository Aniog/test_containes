import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories, priceRanges, sortOptions } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

function FilterSidebar({ filters, setFilters, mobileOpen, setMobileOpen }) {
  const toggleCategory = (cat) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter((c) => c !== cat)
        : [...prev.categories, cat],
    }));
  };

  const togglePriceRange = (range) => {
    setFilters((prev) => ({
      ...prev,
      priceRanges: prev.priceRanges.includes(range.label)
        ? prev.priceRanges.filter((r) => r !== range.label)
        : [...prev.priceRanges, range.label],
    }));
  };

  const clearFilters = () => {
    setFilters({ categories: [], priceRanges: [], material: '' });
  };

  const content = (
    <div className="space-y-8">
      {/* Header (mobile) */}
      <div className="flex items-center justify-between lg:hidden">
        <h3 className="font-serif text-xl text-charcoal">Filters</h3>
        <button onClick={() => setMobileOpen(false)} className="p-2">
          <X size={20} />
        </button>
      </div>

      {/* Categories */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-stone-500 font-sans font-medium mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={filters.categories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="w-4 h-4 border-stone-300 rounded text-gold focus:ring-gold/20 accent-gold"
              />
              <span className="text-sm text-stone-600 group-hover:text-charcoal transition-colors">
                {cat.name}
              </span>
              <span className="text-xs text-stone-400 ml-auto">({cat.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-stone-500 font-sans font-medium mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.label}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={filters.priceRanges.includes(range.label)}
                onChange={() => togglePriceRange(range)}
                className="w-4 h-4 border-stone-300 rounded text-gold focus:ring-gold/20 accent-gold"
              />
              <span className="text-sm text-stone-600 group-hover:text-charcoal transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-stone-500 font-sans font-medium mb-4">
          Material
        </h4>
        <div className="space-y-2">
          {['Gold', 'Silver'].map((mat) => (
            <label
              key={mat}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="material"
                checked={filters.material === mat.toLowerCase()}
                onChange={() =>
                  setFilters((prev) => ({
                    ...prev,
                    material: prev.material === mat.toLowerCase() ? '' : mat.toLowerCase(),
                  }))
                }
                className="w-4 h-4 border-stone-300 text-gold focus:ring-gold/20 accent-gold"
              />
              <span className="text-sm text-stone-600 group-hover:text-charcoal transition-colors">
                {mat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear */}
      <button
        onClick={clearFilters}
        className="text-xs uppercase tracking-widest text-stone-400 hover:text-gold transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        {content}
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-charcoal/40 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-80 bg-cream z-50 p-6 overflow-y-auto lg:hidden shadow-xl">
            {content}
          </div>
        </>
      )}
    </>
  );
}

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-stone-100 rounded overflow-hidden">
        <img
          data-strk-img-id={`shop-${product.id}-primary`}
          data-strk-img={`${product.name} ${product.description} luxury gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          data-strk-img-id={`shop-${product.id}-hover`}
          data-strk-img={`${product.name} worn on model close up gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {product.badge && (
          <span className="absolute top-3 left-3 px-3 py-1 bg-charcoal/90 text-white text-xs uppercase tracking-widest font-sans">
            {product.badge}
          </span>
        )}

        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="w-full flex items-center justify-center gap-2 bg-charcoal/90 backdrop-blur-sm text-white py-3 text-xs uppercase tracking-widest font-medium hover:bg-gold transition-colors duration-200"
          >
            <ShoppingBag size={14} />
            Add to Bag
          </button>
        </div>
      </Link>

      <div className="mt-3 text-center">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-product-name text-xs text-charcoal hover:text-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center gap-0.5 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={10}
              className={i < Math.floor(product.rating) ? 'fill-gold-light text-gold-light' : 'text-stone-300'}
            />
          ))}
        </div>
        <p className="text-sm font-medium text-charcoal mt-1">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filters, setFilters] = useState({
    categories: [],
    priceRanges: [],
    material: '',
  });
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Initialize from URL params
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setFilters((prev) => ({
        ...prev,
        categories: [cat],
      }));
    }
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
    }
  }, [filters, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    // Price filter
    if (filters.priceRanges.length > 0) {
      result = result.filter((p) =>
        filters.priceRanges.some((label) => {
          const range = priceRanges.find((r) => r.label === label);
          return range && p.price >= range.min && p.price < range.max;
        })
      );
    }

    // Material filter
    if (filters.material) {
      result = result.filter((p) => p.material === filters.material);
    }

    // Sort
    switch (sortBy) {
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
        break;
    }

    return result;
  }, [filters, sortBy]);

  return (
    <div ref={containerRef} className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Header */}
      <div className="container-page py-8 md:py-12">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-muted font-sans mb-3">
            Our Collection
          </p>
          <h1 className="heading-serif text-3xl md:text-5xl text-charcoal">
            Shop All Jewelry
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mt-4" />
        </div>
      </div>

      {/* Toolbar */}
      <div className="container-page pb-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm text-stone-600 hover:text-gold transition-colors"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          <p className="text-sm text-stone-500 hidden lg:block">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-stone-300 rounded px-4 py-2 pr-8 text-sm text-stone-600 focus:outline-none focus:border-gold cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-page pb-16 md:pb-24">
        <div className="flex gap-8">
          {/* Filters */}
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            mobileOpen={mobileFiltersOpen}
            setMobileOpen={setMobileFiltersOpen}
          />

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-stone-500 mb-2">No products found</p>
                <p className="text-sm text-stone-400 mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => setFilters({ categories: [], priceRanges: [], material: '' })}
                  className="btn-secondary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
