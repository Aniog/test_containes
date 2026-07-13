import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categoryOptions = [
  { value: '', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75 – $150' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function ShopProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 font-sans text-[10px] tracking-widest uppercase bg-gold text-obsidian px-2 py-1 font-semibold">
            Bestseller
          </span>
        )}

        <div className={`absolute bottom-0 left-0 right-0 bg-ivory/95 py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase font-semibold text-obsidian hover:text-gold transition-colors"
          >
            <ShoppingBag size={13} strokeWidth={2} />
            Quick Add
          </button>
        </div>
      </Link>

      <p id={`shop-${product.titleId}`} className="font-serif text-sm uppercase tracking-widest text-obsidian leading-tight group-hover:text-gold transition-colors duration-300">
        <Link to={`/product/${product.slug}`}>{product.name}</Link>
      </p>
      <p id={`shop-${product.descId}`} className="font-sans text-xs text-ink-faint mt-1 line-clamp-1">
        {product.shortDescription}
      </p>
      <div className="flex items-center justify-between mt-2">
        <span className="font-sans text-sm font-medium text-obsidian">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star size={11} fill="#C9A96E" stroke="none" />
          <span className="font-sans text-xs text-ink-faint">{product.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const categoryParam = searchParams.get('category') || '';
  const priceParam = searchParams.get('price') || '';
  const sortParam = searchParams.get('sort') || 'featured';

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  };

  const filtered = products
    .filter(p => !categoryParam || p.category === categoryParam)
    .filter(p => {
      if (!priceParam) return true;
      const [min, max] = priceParam.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (sortParam === 'price-asc') return a.price - b.price;
      if (sortParam === 'price-desc') return b.price - a.price;
      if (sortParam === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryParam, priceParam, sortParam]);

  const activeFilters = [
    categoryParam && categoryOptions.find(c => c.value === categoryParam)?.label,
    priceParam && priceRanges.find(r => r.value === priceParam)?.label,
  ].filter(Boolean);

  return (
    <div className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-linen border-b border-sand pt-20 md:pt-24 pb-10 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-3 font-medium">
            {categoryParam ? categoryOptions.find(c => c.value === categoryParam)?.label : 'All Jewelry'}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-obsidian">
            {categoryParam ? categoryOptions.find(c => c.value === categoryParam)?.label : 'The Collection'}
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-sand">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase font-medium text-ink-muted hover:text-gold transition-colors border border-sand px-3 py-2"
            >
              <SlidersHorizontal size={13} strokeWidth={1.5} />
              Filters
            </button>
            <span className="font-sans text-xs text-ink-faint">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
            {activeFilters.map(f => (
              <span key={f} className="hidden md:flex items-center gap-1 font-sans text-xs bg-linen border border-sand px-2 py-1 text-ink-muted">
                {f}
                <button onClick={() => {
                  setParam('category', '');
                  setParam('price', '');
                }} className="hover:text-gold ml-1">
                  <X size={10} strokeWidth={2} />
                </button>
              </span>
            ))}
          </div>

          {/* Sort */}
          <div className="relative flex items-center gap-2">
            <span className="hidden md:block font-sans text-xs text-ink-faint">Sort by:</span>
            <div className="relative">
              <select
                value={sortParam}
                onChange={e => setParam('sort', e.target.value)}
                className="appearance-none bg-transparent border border-sand font-sans text-xs text-ink-muted pl-3 pr-8 py-2 focus:outline-none focus:border-gold cursor-pointer"
              >
                {sortOptions.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown size={12} strokeWidth={1.5} className="absolute right-2 top-1/2 -translate-y-1/2 text-ink-faint pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar filters — desktop always visible, mobile toggle */}
          <aside className={`${filterOpen ? 'block' : 'hidden'} md:block w-full md:w-52 flex-shrink-0`}>
            <div className="sticky top-24 flex flex-col gap-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase font-semibold text-obsidian mb-4">
                  Category
                </h3>
                <ul className="flex flex-col gap-2">
                  {categoryOptions.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setParam('category', opt.value)}
                        className={`font-sans text-sm transition-colors duration-200 ${
                          categoryParam === opt.value
                            ? 'text-gold font-medium'
                            : 'text-ink-muted hover:text-gold'
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="divider" />

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase font-semibold text-obsidian mb-4">
                  Price
                </h3>
                <ul className="flex flex-col gap-2">
                  {priceRanges.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setParam('price', opt.value)}
                        className={`font-sans text-sm transition-colors duration-200 ${
                          priceParam === opt.value
                            ? 'text-gold font-medium'
                            : 'text-ink-muted hover:text-gold'
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="divider" />

              {/* Material */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase font-semibold text-obsidian mb-4">
                  Material
                </h3>
                <ul className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
                    <li key={m}>
                      <button className="font-sans text-sm text-ink-muted hover:text-gold transition-colors">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl font-light text-ink-muted mb-3">No pieces found</p>
                <p className="font-sans text-sm text-ink-faint mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => { setParam('category', ''); setParam('price', ''); }}
                  className="font-sans text-xs tracking-widest uppercase font-semibold text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                {filtered.map(p => (
                  <ShopProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
