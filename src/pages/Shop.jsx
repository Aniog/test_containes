import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const categoryOptions = [
  { value: '', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: '', label: 'Any Price' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-200', label: '$75+' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group cursor-pointer">
      <Link to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden bg-linen aspect-[3/4]">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {product.tags.includes('bestseller') && (
            <span className="absolute top-3 left-3 bg-gold text-obsidian font-manrope text-[9px] tracking-[0.1em] uppercase px-2 py-0.5">
              Bestseller
            </span>
          )}

          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <button
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
              className="w-full bg-obsidian/90 backdrop-blur-sm text-ivory py-3 font-manrope text-xs tracking-[0.12em] uppercase flex items-center justify-center gap-2 hover:bg-obsidian transition-colors duration-200"
            >
              <ShoppingBag size={13} strokeWidth={1.5} />
              Quick Add
            </button>
          </div>
        </div>
      </Link>

      <div className="pt-3">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-title-${product.id}`}
            className="font-cormorant text-sm uppercase tracking-[0.1em] text-obsidian hover:text-gold transition-colors duration-200"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-desc-${product.id}`} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-1.5">
          <span className="font-manrope text-sm font-medium text-obsidian">${product.price}</span>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border'} strokeWidth={1} />
              ))}
            </div>
            <span className="font-manrope text-[10px] text-muted">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || '';
  const activePriceRange = searchParams.get('price') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  };

  const filtered = products
    .filter(p => !activeCategory || p.category === activeCategory)
    .filter(p => {
      if (!activePriceRange) return true;
      const [min, max] = activePriceRange.split('-').map(Number);
      return p.price >= min && p.price <= (max || Infinity);
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
  }, [activeCategory, activePriceRange, activeSort]);

  const activeFiltersCount = [activeCategory, activePriceRange].filter(Boolean).length;

  return (
    <div className="bg-parchment min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-linen border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-manrope text-xs tracking-[0.2em] uppercase text-gold mb-2">Collection</p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian">
            {activeCategory
              ? categoryOptions.find(c => c.value === activeCategory)?.label || 'All Jewelry'
              : 'All Jewelry'}
          </h1>
          <p className="font-manrope text-sm text-muted mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-manrope text-xs tracking-[0.1em] uppercase text-muted hover:text-gold transition-colors border border-border px-4 py-2"
          >
            <SlidersHorizontal size={13} strokeWidth={1.5} />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>

          {/* Category pills (desktop) */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categoryOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => setFilter('category', opt.value)}
                className={`px-4 py-1.5 font-manrope text-xs tracking-wide border transition-all duration-200 ${
                  activeCategory === opt.value
                    ? 'bg-obsidian text-ivory border-obsidian'
                    : 'border-border text-muted hover:border-gold hover:text-gold'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="font-manrope text-xs text-muted hidden md:block">Sort:</span>
            <select
              value={activeSort}
              onChange={e => setFilter('sort', e.target.value)}
              className="font-manrope text-xs text-obsidian bg-transparent border border-border px-3 py-1.5 focus:outline-none focus:border-gold cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              {/* Price filter */}
              <div className="mb-8">
                <h3 className="font-manrope text-xs tracking-[0.14em] uppercase text-muted mb-3">Price</h3>
                <div className="flex flex-col gap-2">
                  {priceRanges.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setFilter('price', opt.value)}
                      className={`text-left font-manrope text-xs transition-colors duration-200 ${
                        activePriceRange === opt.value ? 'text-gold' : 'text-muted hover:text-obsidian'
                      }`}
                    >
                      {activePriceRange === opt.value && '→ '}{opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div className="mb-8">
                <h3 className="font-manrope text-xs tracking-[0.14em] uppercase text-muted mb-3">Material</h3>
                <div className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Sterling Silver'].map(m => (
                    <button key={m} className="text-left font-manrope text-xs text-muted hover:text-obsidian transition-colors">
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={() => setSearchParams({})}
                  className="flex items-center gap-1.5 font-manrope text-xs text-muted hover:text-gold transition-colors"
                >
                  <X size={11} strokeWidth={2} />
                  Clear filters
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-obsidian/40" onClick={() => setFilterOpen(false)}>
              <div
                className="absolute left-0 top-0 bottom-0 w-72 bg-ivory p-6 animate-slideInRight"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-cormorant text-lg text-obsidian">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={16} strokeWidth={1.5} className="text-muted" />
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="font-manrope text-xs tracking-[0.14em] uppercase text-muted mb-3">Category</h3>
                  <div className="flex flex-col gap-2">
                    {categoryOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setFilter('category', opt.value); setFilterOpen(false); }}
                        className={`text-left font-manrope text-xs ${activeCategory === opt.value ? 'text-gold' : 'text-muted'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-manrope text-xs tracking-[0.14em] uppercase text-muted mb-3">Price</h3>
                  <div className="flex flex-col gap-2">
                    {priceRanges.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setFilter('price', opt.value); setFilterOpen(false); }}
                        className={`text-left font-manrope text-xs ${activePriceRange === opt.value ? 'text-gold' : 'text-muted'}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-muted italic">No pieces found</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 font-manrope text-xs tracking-wide text-gold underline underline-offset-2"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
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
