import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden aspect-[3/4] bg-ivory-dark mb-4">
        <img
          alt={product.name}
          data-strk-img-id={`shop-${product.imgIds.main}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-gold text-obsidian font-sans text-[9px] tracking-widest uppercase px-2 py-1 font-semibold">
            Bestseller
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={e => { e.preventDefault(); addItem(product); }}
            className="w-full bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-obsidian-light transition-colors"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>
      <p id={product.titleId} className="font-serif text-sm tracking-widest uppercase text-obsidian font-medium mb-1">{product.name}</p>
      <p id={product.descId} className="font-sans text-xs text-taupe mb-2">{product.shortDesc}</p>
      <div className="flex items-center justify-between">
        <span className="font-sans text-sm font-semibold text-obsidian">${product.price}</span>
        <div className="flex gap-0.5">
          {[1,2,3,4,5].map(i => (
            <Star key={i} size={10} className={i <= Math.round(product.rating) ? 'text-gold fill-gold' : 'text-taupe-light'} strokeWidth={1} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initCategory = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(
    initCategory ? initCategory.charAt(0).toUpperCase() + initCategory.slice(1) : 'All'
  );
  const [activePriceIdx, setActivePriceIdx] = useState(0);
  const [sort, setSort] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = products
    .filter(p => {
      const catMatch = activeCategory === 'All' || p.category === activeCategory.toLowerCase();
      const { min, max } = PRICE_RANGES[activePriceIdx];
      const priceMatch = p.price >= min && p.price <= max;
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceIdx, sort]);

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-ivory-dark border-b border-taupe/20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-obsidian">All Jewelry</h1>
          <p className="font-sans text-sm text-taupe mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs tracking-widest uppercase text-obsidian font-semibold mb-4">Category</h3>
                <ul className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`font-sans text-sm transition-colors w-full text-left ${activeCategory === cat ? 'text-obsidian font-semibold' : 'text-taupe hover:text-obsidian'}`}
                      >
                        {cat}
                        {activeCategory === cat && <span className="ml-2 text-gold">—</span>}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-px bg-taupe/20 mb-8" />
              {/* Price filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-obsidian font-semibold mb-4">Price</h3>
                <ul className="space-y-2">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceIdx(i)}
                        className={`font-sans text-sm transition-colors w-full text-left ${activePriceIdx === i ? 'text-obsidian font-semibold' : 'text-taupe hover:text-obsidian'}`}
                      >
                        {range.label}
                        {activePriceIdx === i && <span className="ml-2 text-gold">—</span>}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-obsidian border border-taupe/30 px-4 py-2"
              >
                <SlidersHorizontal size={13} />
                Filter
              </button>

              {/* Category pills — mobile */}
              <div className="hidden md:flex items-center gap-2 flex-wrap">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`font-sans text-xs tracking-wider px-3 py-1.5 border transition-all ${activeCategory === cat ? 'bg-obsidian text-ivory border-obsidian' : 'border-taupe/30 text-taupe hover:border-obsidian hover:text-obsidian'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="font-sans text-xs tracking-wider text-obsidian bg-ivory border border-taupe/30 px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
              >
                {SORT_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>

            {/* Mobile filter drawer */}
            {filterOpen && (
              <div className="md:hidden bg-ivory-dark border border-taupe/20 p-6 mb-6">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-sans text-xs tracking-widest uppercase text-obsidian font-semibold">Filters</span>
                  <button onClick={() => setFilterOpen(false)}><X size={16} className="text-taupe" /></button>
                </div>
                <div className="mb-5">
                  <p className="font-sans text-xs tracking-widest uppercase text-taupe mb-3">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(cat => (
                      <button key={cat} onClick={() => { setActiveCategory(cat); setFilterOpen(false); }}
                        className={`font-sans text-xs px-3 py-1.5 border ${activeCategory === cat ? 'bg-obsidian text-ivory border-obsidian' : 'border-taupe/30 text-taupe'}`}>
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-widest uppercase text-taupe mb-3">Price</p>
                  <div className="flex flex-wrap gap-2">
                    {PRICE_RANGES.map((r, i) => (
                      <button key={r.label} onClick={() => { setActivePriceIdx(i); setFilterOpen(false); }}
                        className={`font-sans text-xs px-3 py-1.5 border ${activePriceIdx === i ? 'bg-obsidian text-ivory border-obsidian' : 'border-taupe/30 text-taupe'}`}>
                        {r.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Product grid */}
            <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
              {filtered.length > 0 ? (
                filtered.map(p => <ProductCard key={p.id} product={p} />)
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="font-serif text-2xl font-light text-obsidian mb-3">No pieces found</p>
                  <p className="font-sans text-sm text-taupe">Try adjusting your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
