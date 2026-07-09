import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75+', min: 75, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(s => (
        <svg key={s} className={`w-2.5 h-2.5 ${s <= Math.round(rating) ? 'text-gold' : 'text-stone/30'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-4">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className="w-full bg-espresso/90 backdrop-blur-sm text-ivory font-sans text-[10px] uppercase tracking-[0.15em] py-3 flex items-center justify-center gap-2 hover:bg-espresso transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>
      <div className="space-y-1.5">
        <p id={product.titleId} className="font-serif text-sm uppercase tracking-[0.12em] text-espresso group-hover:text-gold transition-colors">
          {product.name}
        </p>
        <p id={product.descId} className="font-sans text-[11px] text-stone capitalize">
          {product.shortDesc}
        </p>
        <div className="flex items-center justify-between pt-0.5">
          <span className="font-sans text-sm font-medium text-espresso">{formatPrice(product.price)}</span>
          <StarRating rating={product.rating} />
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.find(c => c.toLowerCase() === initialCategory) || 'All'
  );
  const [activePriceRange, setActivePriceRange] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = products
    .filter(p => activeCategory === 'All' || p.category === activeCategory.toLowerCase())
    .filter(p => p.price >= activePriceRange.min && p.price <= activePriceRange.max)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Page header */}
      <div className="border-b border-stone/10 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-gold mb-2">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-espresso">All Jewelry</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-[10px] uppercase tracking-[0.12em] px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-espresso text-ivory border-espresso'
                    : 'bg-transparent text-stone border-stone/30 hover:border-espresso hover:text-espresso'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-[0.12em] text-espresso border border-stone/30 px-4 py-2"
          >
            <SlidersHorizontal size={13} />
            Filter
          </button>

          <div className="flex items-center gap-3 ml-auto">
            <span className="font-sans text-[11px] text-stone hidden md:block">
              {filtered.length} items
            </span>
            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-stone/30 text-espresso font-sans text-[11px] uppercase tracking-[0.1em] pl-4 pr-8 py-2 focus:outline-none focus:border-gold cursor-pointer"
              >
                {SORT_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-5 bg-parchment border border-stone/10">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs uppercase tracking-[0.12em] text-espresso">Filters</span>
              <button onClick={() => setFilterOpen(false)}><X size={14} className="text-stone" /></button>
            </div>
            <div className="mb-4">
              <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-stone mb-2">Category</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setFilterOpen(false); }}
                    className={`font-sans text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 border transition-colors ${
                      activeCategory === cat ? 'bg-espresso text-ivory border-espresso' : 'text-stone border-stone/30'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-stone mb-2">Price</p>
              <div className="flex flex-wrap gap-2">
                {PRICE_RANGES.map(r => (
                  <button
                    key={r.label}
                    onClick={() => { setActivePriceRange(r); setFilterOpen(false); }}
                    className={`font-sans text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 border transition-colors ${
                      activePriceRange.label === r.label ? 'bg-espresso text-ivory border-espresso' : 'text-stone border-stone/30'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-stone mb-4">Category</p>
                <ul className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`font-sans text-xs transition-colors ${
                          activeCategory === cat ? 'text-espresso font-medium' : 'text-stone hover:text-espresso'
                        }`}
                      >
                        {cat}
                        {activeCategory === cat && <span className="ml-2 text-gold">—</span>}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-stone/10 pt-6">
                <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-stone mb-4">Price</p>
                <ul className="space-y-2">
                  {PRICE_RANGES.map(r => (
                    <li key={r.label}>
                      <button
                        onClick={() => setActivePriceRange(r)}
                        className={`font-sans text-xs transition-colors ${
                          activePriceRange.label === r.label ? 'text-espresso font-medium' : 'text-stone hover:text-espresso'
                        }`}
                      >
                        {r.label}
                        {activePriceRange.label === r.label && <span className="ml-2 text-gold">—</span>}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-stone/10 pt-6">
                <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-stone mb-4">Material</p>
                <ul className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver'].map(m => (
                    <li key={m}>
                      <button className="font-sans text-xs text-stone hover:text-espresso transition-colors">
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
                <p className="font-serif text-2xl text-espresso/40">No items found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(PRICE_RANGES[0]); }}
                  className="mt-4 font-sans text-xs uppercase tracking-[0.12em] text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
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
