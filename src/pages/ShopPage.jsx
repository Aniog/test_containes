import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const CATEGORIES = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
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
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={10} className={i <= Math.round(rating) ? 'fill-gold text-gold' : 'text-linen fill-linen'} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <article className="group">
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags?.includes('bestseller') && (
            <span className="bg-obsidian text-parchment font-sans text-[9px] font-medium uppercase tracking-widest px-2 py-1">Bestseller</span>
          )}
          {product.tags?.includes('new') && (
            <span className="bg-gold text-obsidian font-sans text-[9px] font-medium uppercase tracking-widest px-2 py-1">New</span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-obsidian text-parchment font-sans text-[10px] font-medium uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 hover:bg-espresso transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>
      <Link to={`/product/${product.slug}`}>
        <h3 id={`shop-title-${product.id}`} className="font-serif text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors leading-tight">
          {product.name}
        </h3>
      </Link>
      <p id={`shop-desc-${product.id}`} className="font-sans text-xs text-muted mt-1">{product.shortDescription}</p>
      <div className="flex items-center justify-between mt-2">
        <StarRating rating={product.rating} />
        <span className="font-sans text-sm font-medium text-ink">${product.price}</span>
      </div>
    </article>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceIdx, setActivePriceIdx] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setActiveCategory(cat);
  }, [searchParams]);

  const filtered = products
    .filter(p => activeCategory === 'all' || p.category === activeCategory)
    .filter(p => {
      const range = PRICE_RANGES[activePriceIdx];
      return p.price >= range.min && p.price <= range.max;
    })
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
  }, [activeCategory, activePriceIdx, sortBy]);

  const setCategory = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="bg-parchment min-h-screen pt-16 md:pt-20" ref={containerRef}>
      {/* Page header */}
      <div className="bg-cream border-b border-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="font-sans text-[11px] font-medium uppercase tracking-widest text-gold mb-3">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="font-sans text-sm font-light text-muted mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex gap-8 lg:gap-12">

          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-[10px] font-medium uppercase tracking-widest text-muted mb-4">Category</h3>
                <ul className="space-y-2.5">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => setCategory(cat)}
                        className={`font-sans text-xs transition-colors capitalize ${
                          activeCategory === cat ? 'text-ink font-medium' : 'text-muted hover:text-ink'
                        }`}
                      >
                        {cat === 'all' ? 'All Jewelry' : cat}
                        {activeCategory === cat && <span className="ml-2 text-gold">·</span>}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-sans text-[10px] font-medium uppercase tracking-widest text-muted mb-4">Price</h3>
                <ul className="space-y-2.5">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceIdx(i)}
                        className={`font-sans text-xs transition-colors ${
                          activePriceIdx === i ? 'text-ink font-medium' : 'text-muted hover:text-ink'
                        }`}
                      >
                        {range.label}
                        {activePriceIdx === i && <span className="ml-2 text-gold">·</span>}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-sans text-[10px] font-medium uppercase tracking-widest text-muted mb-4">Material</h3>
                <ul className="space-y-2.5">
                  {['All', '18K Gold Plated', 'Sterling Silver'].map(m => (
                    <li key={m}>
                      <button className="font-sans text-xs text-muted hover:text-ink transition-colors">
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
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-linen">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-widest text-muted hover:text-ink transition-colors"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filter
              </button>

              {/* Category pills — mobile */}
              <div className="hidden sm:flex lg:hidden items-center gap-2 overflow-x-auto">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`flex-shrink-0 font-sans text-[10px] font-medium uppercase tracking-widest px-3 py-1.5 border transition-colors capitalize ${
                      activeCategory === cat
                        ? 'border-obsidian bg-obsidian text-parchment'
                        : 'border-linen text-muted hover:border-muted'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="relative ml-auto">
                <button
                  onClick={() => setSortOpen(v => !v)}
                  className="flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-widest text-muted hover:text-ink transition-colors"
                >
                  Sort: {SORT_OPTIONS.find(s => s.value === sortBy)?.label}
                  <ChevronDown size={12} strokeWidth={1.5} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-cream border border-linen shadow-card z-20">
                    {SORT_OPTIONS.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                        className={`w-full text-left px-4 py-3 font-sans text-xs transition-colors hover:bg-linen ${
                          sortBy === opt.value ? 'text-ink font-medium' : 'text-muted'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl font-light text-muted">No pieces found</p>
                <p className="font-sans text-sm text-whisper mt-2">Try adjusting your filters</p>
                <button
                  onClick={() => { setCategory('all'); setActivePriceIdx(0); }}
                  className="mt-6 font-sans text-[11px] font-medium uppercase tracking-widest text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <>
        <div
          className={`fixed inset-0 z-50 bg-obsidian/40 transition-opacity duration-300 lg:hidden ${
            filterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setFilterOpen(false)}
        />
        <aside
          className={`fixed top-0 left-0 h-full w-72 z-50 bg-cream shadow-drawer flex flex-col transition-transform duration-400 lg:hidden ${
            filterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
            <span className="font-sans text-[11px] font-medium uppercase tracking-widest text-ink">Filters</span>
            <button onClick={() => setFilterOpen(false)} className="text-muted hover:text-ink transition-colors">
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
            <div>
              <h3 className="font-sans text-[10px] font-medium uppercase tracking-widest text-muted mb-4">Category</h3>
              <ul className="space-y-3">
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => { setCategory(cat); setFilterOpen(false); }}
                      className={`font-sans text-sm transition-colors capitalize ${
                        activeCategory === cat ? 'text-ink font-medium' : 'text-muted'
                      }`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-sans text-[10px] font-medium uppercase tracking-widest text-muted mb-4">Price</h3>
              <ul className="space-y-3">
                {PRICE_RANGES.map((range, i) => (
                  <li key={range.label}>
                    <button
                      onClick={() => { setActivePriceIdx(i); setFilterOpen(false); }}
                      className={`font-sans text-sm transition-colors ${
                        activePriceIdx === i ? 'text-ink font-medium' : 'text-muted'
                      }`}
                    >
                      {range.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </>
    </div>
  );
}
