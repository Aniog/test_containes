import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const categoryOptions = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceOptions = [
  { value: '', label: 'All Prices' },
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

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const activeCategory = searchParams.get('category') || '';
  const activePrice = searchParams.get('price') || '';
  const activeSort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);
    setSearchParams(next);
  };

  const filtered = products
    .filter((p) => !activeCategory || p.category === activeCategory)
    .filter((p) => {
      if (!activePrice) return true;
      const [min, max] = activePrice.split('-').map(Number);
      return p.price >= min && p.price <= max;
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
  }, [activeCategory, activePrice, activeSort]);

  return (
    <div className="min-h-screen bg-parchment pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-divider bg-linen">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14">
          <p className="font-manrope text-xs uppercase tracking-widest text-gold mb-3">
            {activeCategory ? categoryOptions.find((c) => c.value === activeCategory)?.label : 'All Jewelry'}
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-ink">
            {activeCategory
              ? categoryOptions.find((c) => c.value === activeCategory)?.label
              : 'The Collection'}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-divider">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-mist hover:text-gold transition-colors md:hidden"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Filters
            </button>
            <span className="font-manrope text-xs text-whisper">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="font-manrope text-xs uppercase tracking-widest text-mist hidden md:block">Sort:</span>
            <select
              value={activeSort}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="font-manrope text-xs text-ink bg-transparent border border-divider px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterPanel
              activeCategory={activeCategory}
              activePrice={activePrice}
              setFilter={setFilter}
            />
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <>
              <div className="fixed inset-0 bg-obsidian/40 z-40" onClick={() => setFilterOpen(false)} />
              <div className="fixed inset-y-0 left-0 w-72 bg-parchment z-50 p-8 overflow-y-auto">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-manrope text-xs uppercase tracking-widest text-ink">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X className="w-4 h-4 text-mist" />
                  </button>
                </div>
                <FilterPanel
                  activeCategory={activeCategory}
                  activePrice={activePrice}
                  setFilter={(k, v) => { setFilter(k, v); setFilterOpen(false); }}
                />
              </div>
            </>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl text-mist font-light mb-3">No pieces found</p>
                <p className="font-manrope text-xs text-whisper">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ShopProductCard key={product.id} product={product} onAddToCart={addItem} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterPanel({ activeCategory, activePrice, setFilter }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="font-manrope text-xs uppercase tracking-widest text-ink mb-4">Category</h3>
        <div className="flex flex-col gap-2.5">
          {categoryOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter('category', opt.value)}
              className={`text-left font-manrope text-xs transition-colors ${
                activeCategory === opt.value
                  ? 'text-gold font-medium'
                  : 'text-mist hover:text-gold'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-divider" />

      {/* Price */}
      <div>
        <h3 className="font-manrope text-xs uppercase tracking-widest text-ink mb-4">Price</h3>
        <div className="flex flex-col gap-2.5">
          {priceOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter('price', opt.value)}
              className={`text-left font-manrope text-xs transition-colors ${
                activePrice === opt.value
                  ? 'text-gold font-medium'
                  : 'text-mist hover:text-gold'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-divider" />

      {/* Material */}
      <div>
        <h3 className="font-manrope text-xs uppercase tracking-widest text-ink mb-4">Material</h3>
        <div className="flex flex-col gap-2.5">
          {['18K Gold Plated', 'Sterling Silver'].map((m) => (
            <button
              key={m}
              className="text-left font-manrope text-xs text-mist hover:text-gold transition-colors"
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShopProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[shop-title-${product.id}] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />

        {/* Quick add */}
        <div
          className={`absolute bottom-0 left-0 right-0 bg-obsidian/90 py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
            className="font-manrope text-xs uppercase tracking-widest text-cream flex items-center gap-2 hover:text-gold transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </Link>

      <p className="font-manrope text-xs text-whisper mb-1">{product.material}</p>
      <h3
        id={`shop-title-${product.id}`}
        className="font-cormorant text-sm md:text-base uppercase tracking-widest text-ink hover:text-gold transition-colors mb-1"
      >
        <Link to={`/product/${product.slug}`}>{product.name}</Link>
      </h3>
      <span id={`shop-desc-${product.id}`} className="sr-only" aria-hidden="true">{product.description}</span>
      <div className="flex items-center justify-between">
        <span className="font-manrope text-sm font-medium text-ink">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-gold text-gold" />
          <span className="font-manrope text-xs text-mist">{product.rating}</span>
        </div>
      </div>
    </div>
  );
}
