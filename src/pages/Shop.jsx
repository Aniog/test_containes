import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

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

export default function Shop() {
  const { addItem } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceIdx = parseInt(searchParams.get('price') || '0');
  const activeSort = searchParams.get('sort') || 'featured';

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    next.set(key, value);
    setSearchParams(next);
  };

  const filtered = products
    .filter(p => activeCategory === 'all' || p.category === activeCategory)
    .filter(p => {
      const range = PRICE_RANGES[activePriceIdx];
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

  return (
    <div className="bg-parchment min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-linen">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-manrope text-xs tracking-[0.18em] uppercase text-gold mb-3">
            Velmora
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-obsidian tracking-wide">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="font-manrope text-xs text-muted mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <h3 className="font-manrope text-xs tracking-[0.15em] uppercase text-obsidian mb-4">Category</h3>
                <ul className="flex flex-col gap-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => setParam('category', cat)}
                        className={`font-manrope text-xs capitalize transition-colors duration-200 ${
                          activeCategory === cat ? 'text-gold' : 'text-muted hover:text-obsidian'
                        }`}
                      >
                        {cat === 'all' ? 'All Jewelry' : cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-linen pt-6 mb-8">
                <h3 className="font-manrope text-xs tracking-[0.15em] uppercase text-obsidian mb-4">Price</h3>
                <ul className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setParam('price', i)}
                        className={`font-manrope text-xs transition-colors duration-200 ${
                          activePriceIdx === i ? 'text-gold' : 'text-muted hover:text-obsidian'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-linen pt-6">
                <h3 className="font-manrope text-xs tracking-[0.15em] uppercase text-obsidian mb-4">Material</h3>
                <ul className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Sterling Silver'].map(m => (
                    <li key={m}>
                      <button className="font-manrope text-xs text-muted hover:text-obsidian transition-colors duration-200">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-linen">
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="md:hidden flex items-center gap-2 font-manrope text-xs tracking-[0.1em] uppercase text-muted hover:text-obsidian transition-colors"
              >
                <SlidersHorizontal size={14} />
                Filters
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="font-manrope text-xs text-muted hidden md:block">Sort by:</span>
                <select
                  value={activeSort}
                  onChange={e => setParam('sort', e.target.value)}
                  className="font-manrope text-xs text-obsidian bg-transparent border border-linen px-3 py-2 focus:outline-none focus:border-gold transition-colors cursor-pointer"
                >
                  {SORT_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="md:hidden bg-cream border border-linen p-5 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-manrope text-xs tracking-[0.12em] uppercase text-obsidian">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={16} className="text-muted" />
                  </button>
                </div>
                <div className="mb-4">
                  <p className="font-manrope text-[10px] tracking-[0.12em] uppercase text-muted mb-2">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { setParam('category', cat); setFilterOpen(false); }}
                        className={`font-manrope text-xs capitalize px-3 py-1.5 border transition-all duration-200 ${
                          activeCategory === cat
                            ? 'border-obsidian bg-obsidian text-parchment'
                            : 'border-linen text-muted hover:border-obsidian'
                        }`}
                      >
                        {cat === 'all' ? 'All' : cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-manrope text-[10px] tracking-[0.12em] uppercase text-muted mb-2">Price</p>
                  <div className="flex flex-wrap gap-2">
                    {PRICE_RANGES.map((range, i) => (
                      <button
                        key={range.label}
                        onClick={() => { setParam('price', i); setFilterOpen(false); }}
                        className={`font-manrope text-xs px-3 py-1.5 border transition-all duration-200 ${
                          activePriceIdx === i
                            ? 'border-obsidian bg-obsidian text-parchment'
                            : 'border-linen text-muted hover:border-obsidian'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl font-light text-muted">No pieces found</p>
                <p className="font-manrope text-xs text-whisper mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {products
                  .filter(p => activeCategory === 'all' || p.category === activeCategory)
                  .filter(p => { const r = PRICE_RANGES[activePriceIdx]; return p.price >= r.min && p.price <= r.max; })
                  .sort((a, b) => {
                    if (activeSort === 'price-asc') return a.price - b.price;
                    if (activeSort === 'price-desc') return b.price - a.price;
                    if (activeSort === 'rating') return b.rating - a.rating;
                    return 0;
                  })
                  .map(product => (
                    <div key={product.id} className="group flex flex-col">
                      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
                        <img
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          data-strk-img-id={product.imgId}
                          data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-title]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="500"
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0"
                        />
                        <img
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          data-strk-img-id={product.img2Id}
                          data-strk-img={`[shop-${product.id}-title] gold jewelry worn`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="500"
                          alt={`${product.name} alternate`}
                          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 scale-105"
                        />
                        {product.tags?.includes('bestseller') && (
                          <span className="absolute top-3 left-3 font-manrope text-[9px] tracking-[0.12em] uppercase bg-gold text-obsidian px-2 py-1">
                            Bestseller
                          </span>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                          <button
                            onClick={() => addItem(product)}
                            className="w-full bg-obsidian/90 backdrop-blur-sm text-parchment font-manrope text-[10px] tracking-[0.15em] uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors duration-200"
                          >
                            <ShoppingBag size={12} strokeWidth={1.5} />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                      <div className="pt-4">
                        <span id={`shop-${product.id}-title`} className="sr-only">{product.name}</span>
                        <span id={`shop-${product.id}-desc`} className="sr-only">{product.shortDesc}</span>
                        <Link to={`/product/${product.slug}`}>
                          <h3 className="font-cormorant text-base font-medium tracking-[0.12em] uppercase text-obsidian hover:text-gold transition-colors duration-200 leading-tight">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="font-manrope text-xs text-muted mt-1">{product.shortDesc}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-manrope text-sm font-medium text-obsidian">${product.price}</span>
                          <div className="flex items-center gap-1">
                            <Star size={10} fill="#C9A96E" stroke="none" />
                            <span className="font-manrope text-[10px] text-muted">{product.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
