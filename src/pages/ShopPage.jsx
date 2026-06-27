import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const CATEGORY_OPTIONS = ['All', 'Earrings', 'Necklaces', 'Huggies'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 101, max: Infinity },
];
const MATERIAL_OPTIONS = ['All', 'Gold', 'Silver'];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-warm-dark">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`${product.type} ${product.name}`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            data-strk-img-id={`${product.imgId}-hover`}
            data-strk-img={`${product.type} ${product.name} worn`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div
            className={`absolute bottom-0 left-0 right-0 bg-warm-black/80 backdrop-blur-sm py-3 flex items-center justify-center transition-all duration-300 ${
              hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addItem(product);
              }}
              className="flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-[0.1em] text-gold hover:text-gold-light transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <h3 id={product.titleId} className="font-serif text-sm uppercase tracking-[0.15em] text-warm-cream">
          {product.name}
        </h3>
        <p id={product.descId} className="absolute w-px h-px overflow-hidden whitespace-nowrap border-0 p-0" aria-hidden="true">{product.type}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm text-gold font-sans">${product.price}</span>
          <div className="flex items-center gap-0.5">
            <Star className="w-3 h-3 text-gold fill-gold" />
            <span className="text-[11px] text-warm-sand font-sans">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState(0);
  const [material, setMaterial] = useState('All');
  const [sort, setSort] = useState('featured');
  const [mobileFilters, setMobileFilters] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [category, priceRange, material, sort]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (category !== 'All') {
      result = result.filter((p) => p.category === category);
    }

    const range = PRICE_RANGES[priceRange];
    result = result.filter((p) => p.price >= range.min && p.price <= range.max);

    if (material !== 'All') {
      // Products support both gold and silver, so we don't filter by material
      // but we keep the UI for future use
    }

    switch (sort) {
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
  }, [category, priceRange, material, sort]);

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-6">
        <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.12em] text-warm-cream mb-3">
          Category
        </h3>
        <div className="space-y-2">
          {CATEGORY_OPTIONS.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`block text-sm transition-colors duration-200 ${
                category === cat ? 'text-gold' : 'text-warm-tan hover:text-warm-cream'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.12em] text-warm-cream mb-3">
          Price
        </h3>
        <div className="space-y-2">
          {PRICE_RANGES.map((range, idx) => (
            <button
              key={range.label}
              onClick={() => setPriceRange(idx)}
              className={`block text-sm transition-colors duration-200 ${
                priceRange === idx ? 'text-gold' : 'text-warm-tan hover:text-warm-cream'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.12em] text-warm-cream mb-3">
          Material
        </h3>
        <div className="space-y-2">
          {MATERIAL_OPTIONS.map((mat) => (
            <button
              key={mat}
              onClick={() => setMaterial(mat)}
              className={`block text-sm transition-colors duration-200 ${
                material === mat ? 'text-gold' : 'text-warm-tan hover:text-warm-cream'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-warm-cream tracking-wide">
            The Collection
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>

        {/* Sort + mobile filter toggle */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFilters(!mobileFilters)}
            className="md:hidden flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-[0.1em] text-warm-sand"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <div className="ml-auto">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-warm-dark border border-warm-brown/30 text-xs font-sans text-warm-sand px-3 py-2 focus:outline-none focus:border-gold"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filters */}
          {mobileFilters && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/60" onClick={() => setMobileFilters(false)} />
              <div className="absolute top-0 left-0 h-full w-72 bg-warm-charcoal p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs font-sans font-semibold uppercase tracking-[0.12em] text-warm-cream">
                    Filters
                  </h3>
                  <button onClick={() => setMobileFilters(false)} className="text-warm-sand">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-warm-tan mb-4">No products match your filters</p>
                <button
                  onClick={() => { setCategory('All'); setPriceRange(0); setMaterial('All'); }}
                  className="text-gold text-sm uppercase tracking-wider hover:text-gold-light transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
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
