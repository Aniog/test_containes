import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-80', label: '$50 – $80' },
  { value: '80-200', label: '$80+' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-linen aspect-[3/4]">
        <span id={product.titleId} className="sr-only">{product.name}</span>
        <span id={product.descId} className="sr-only">{product.shortDescription}</span>
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {product.tags.includes('new') && (
          <span className="absolute top-3 left-3 bg-obsidian text-cream font-manrope text-[9px] tracking-widest uppercase px-2 py-1">New</span>
        )}
        {product.tags.includes('bestseller') && !product.tags.includes('new') && (
          <span className="absolute top-3 left-3 bg-gold text-obsidian font-manrope text-[9px] tracking-widest uppercase px-2 py-1">Bestseller</span>
        )}

        <button
          onClick={handleAdd}
          className="absolute bottom-0 left-0 right-0 bg-obsidian/90 text-cream font-manrope text-[10px] tracking-widest uppercase py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian"
        >
          <ShoppingBag size={12} strokeWidth={1.5} />
          {added ? 'Added!' : 'Quick Add'}
        </button>
      </div>

      <div className="pt-3">
        <p className="font-cormorant text-base uppercase tracking-[0.12em] text-ink leading-tight">{product.name}</p>
        <div className="flex items-center gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={9} className={i < Math.floor(product.rating) ? 'fill-current text-gold' : 'fill-current text-linen'} />
          ))}
          <span className="font-manrope text-[10px] text-ink-faint ml-1">({product.reviewCount})</span>
        </div>
        <p className="font-manrope text-sm text-ink mt-1.5">${product.price}</p>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    next.set(key, value);
    setSearchParams(next);
  };

  const filteredProducts = products
    .filter((p) => activeCategory === 'all' || p.category === activeCategory)
    .filter((p) => {
      if (activePriceRange === 'all') return true;
      const [min, max] = activePriceRange.split('-').map(Number);
      return max ? p.price >= min && p.price <= max : p.price >= min;
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

  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-linen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-2">Velmora</p>
          <h1 className="font-cormorant text-4xl md:text-5xl text-ink font-light">All Jewelry</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Filter bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter('category', cat.value)}
                className={`font-manrope text-xs tracking-wide px-4 py-2 border transition-colors ${
                  activeCategory === cat.value
                    ? 'border-gold bg-gold text-obsidian'
                    : 'border-linen text-ink-muted hover:border-gold hover:text-gold'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="md:hidden flex items-center gap-2 font-manrope text-xs tracking-widest uppercase text-ink-muted border border-linen px-3 py-2 hover:border-gold hover:text-gold transition-colors"
            >
              <SlidersHorizontal size={12} />
              Filters
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={activeSort}
                onChange={(e) => setFilter('sort', e.target.value)}
                className="appearance-none bg-cream border border-linen font-manrope text-xs tracking-wide text-ink-muted px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer hover:border-gold transition-colors"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={10} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-faint pointer-events-none" />
            </div>

            <span className="font-manrope text-xs text-ink-faint hidden md:block">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
            </span>
          </div>
        </div>

        {/* Mobile price filter */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-4 border border-linen bg-parchment animate-fadeIn">
            <div className="flex items-center justify-between mb-3">
              <span className="font-manrope text-xs tracking-widest uppercase text-ink-muted">Price Range</span>
              <button onClick={() => setFilterOpen(false)}><X size={14} className="text-ink-faint" /></button>
            </div>
            <div className="flex flex-wrap gap-2">
              {priceRanges.map((r) => (
                <button
                  key={r.value}
                  onClick={() => setFilter('price', r.value)}
                  className={`font-manrope text-xs px-3 py-1.5 border transition-colors ${
                    activePriceRange === r.value ? 'border-gold bg-gold text-obsidian' : 'border-linen text-ink-muted hover:border-gold'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <h3 className="font-manrope text-xs tracking-widest uppercase text-ink-muted mb-4">Price Range</h3>
                <div className="flex flex-col gap-2">
                  {priceRanges.map((r) => (
                    <button
                      key={r.value}
                      onClick={() => setFilter('price', r.value)}
                      className={`text-left font-manrope text-xs transition-colors ${
                        activePriceRange === r.value ? 'text-gold' : 'text-ink-muted hover:text-gold'
                      }`}
                    >
                      {activePriceRange === r.value && '→ '}{r.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-linen mb-8" />

              <div>
                <h3 className="font-manrope text-xs tracking-widest uppercase text-ink-muted mb-4">Material</h3>
                <div className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map((m) => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="accent-gold" />
                      <span className="font-manrope text-xs text-ink-muted group-hover:text-gold transition-colors">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-cormorant text-3xl text-ink-muted font-light mb-3">No items found</p>
                <p className="font-manrope text-xs text-ink-faint mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="font-manrope text-xs tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
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
