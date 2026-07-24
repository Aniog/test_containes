import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const CATEGORIES = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, 'gold', 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-parchment aspect-[3/4]">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="bg-gold text-obsidian font-sans text-[10px] tracking-widest uppercase px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-obsidian text-ivory font-sans text-[10px] tracking-widest uppercase px-2 py-1">
              New
            </span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className="w-full bg-obsidian/90 text-ivory font-sans text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-colors duration-200"
          >
            <ShoppingBag size={14} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>
      <span id={`shop-${product.id}-title`} className="sr-only">{product.name}</span>
      <span id={`shop-${product.id}-desc`} className="sr-only">{product.shortDescription}</span>
      <div className="mt-3 px-1">
        <p className="font-serif text-sm tracking-widest uppercase text-obsidian leading-tight">
          {product.name}
        </p>
        <div className="flex items-center gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-linen fill-linen'} />
          ))}
          <span className="font-sans text-[11px] text-ink-muted ml-1">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm text-obsidian mt-1 font-medium">${product.price}</p>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceIdx = parseInt(searchParams.get('price') || '0', 10);
  const activeSort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    next.set(key, value);
    setSearchParams(next);
  };

  const filtered = products
    .filter(p => activeCategory === 'all' || p.category === activeCategory)
    .filter(p => {
      const range = PRICE_RANGES[activePriceIdx] || PRICE_RANGES[0];
      return p.price >= range.min && p.price <= range.max;
    })
    .sort((a, b) => {
      if (activeSort === 'price-asc') return a.price - b.price;
      if (activeSort === 'price-desc') return b.price - a.price;
      if (activeSort === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceIdx, activeSort]);

  const FilterPanel = () => (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-obsidian mb-4 font-medium">
          Category
        </h3>
        <ul className="flex flex-col gap-2">
          {CATEGORIES.map(cat => (
            <li key={cat}>
              <button
                onClick={() => setFilter('category', cat)}
                className={`font-sans text-sm capitalize transition-colors ${
                  activeCategory === cat
                    ? 'text-gold font-medium'
                    : 'text-ink-muted hover:text-obsidian'
                }`}
              >
                {cat === 'all' ? 'All Jewelry' : cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-obsidian mb-4 font-medium">
          Price
        </h3>
        <ul className="flex flex-col gap-2">
          {PRICE_RANGES.map((range, i) => (
            <li key={range.label}>
              <button
                onClick={() => setFilter('price', i)}
                className={`font-sans text-sm transition-colors ${
                  activePriceIdx === i
                    ? 'text-gold font-medium'
                    : 'text-ink-muted hover:text-obsidian'
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase text-obsidian mb-4 font-medium">
          Material
        </h3>
        <ul className="flex flex-col gap-2">
          {['18K Gold Plated', 'Sterling Silver'].map(m => (
            <li key={m}>
              <button className="font-sans text-sm text-ink-muted hover:text-obsidian transition-colors">
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-parchment border-b border-linen py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="font-sans text-sm text-ink-muted mt-2">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-obsidian border border-linen px-4 py-2.5 hover:border-gold transition-colors"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>
          <select
            value={activeSort}
            onChange={e => setFilter('sort', e.target.value)}
            className="font-sans text-xs tracking-widest uppercase text-obsidian border border-linen px-3 py-2.5 bg-cream focus:outline-none focus:border-gold"
          >
            {SORT_OPTIONS.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-10 md:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterPanel />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Desktop sort bar */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="font-sans text-xs text-ink-muted">
                {filtered.length} results
              </p>
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs tracking-widest uppercase text-ink-muted">Sort:</span>
                <select
                  value={activeSort}
                  onChange={e => setFilter('sort', e.target.value)}
                  className="font-sans text-xs text-obsidian border border-linen px-3 py-2 bg-cream focus:outline-none focus:border-gold"
                >
                  {SORT_OPTIONS.map(o => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            <div ref={containerRef}>
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-2xl text-ink-muted">No pieces found</p>
                  <p className="font-sans text-sm text-ink-muted mt-2">Try adjusting your filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filtered.map(p => (
                    <ShopProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-obsidian/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-cream z-50 p-6 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl tracking-widest text-obsidian">FILTERS</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-ink-muted hover:text-gold">
                <X size={20} />
              </button>
            </div>
            <FilterPanel />
          </div>
        </>
      )}
    </div>
  );
}
