import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const CATEGORIES = ['all', 'earrings', 'necklaces', 'huggies'];
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
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="product-card group flex flex-col">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-cream aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={product.name}
          className="product-image-primary absolute inset-0 w-full h-full object-cover"
        />
        <img
          data-strk-img-id={`shop-alt-${product.imgId2}`}
          data-strk-img={`[shop-title-${product.id}] fine jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
          alt={`${product.name} worn`}
          className="product-image-secondary absolute inset-0 w-full h-full object-cover"
        />
        {product.badge && (
          <div className="absolute top-3 left-3 bg-gold text-ivory text-[10px] uppercase tracking-widest font-sans px-2.5 py-1">
            {product.badge}
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full bg-obsidian/90 backdrop-blur-sm text-ivory py-3.5 text-[11px] uppercase tracking-widest font-sans hover:bg-gold transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>
      <div className="pt-4 pb-2">
        <div className="flex items-center gap-1 mb-1.5">
          {[1,2,3,4,5].map((i) => (
            <Star key={i} size={9} className={i <= Math.round(product.rating) ? 'text-gold fill-gold' : 'text-parchment fill-parchment'} strokeWidth={0} />
          ))}
          <span className="text-[10px] font-sans text-whisper ml-1">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 id={`shop-title-${product.id}`} className="font-serif text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>
        <p id={`shop-desc-${product.id}`} className="text-xs font-sans text-muted mt-0.5">{product.subtitle}</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-sans text-sm font-medium text-ink">${product.price}</span>
          {product.originalPrice && (
            <span className="font-sans text-xs text-whisper line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceIdx = parseInt(searchParams.get('price') || '0', 10);
  const activeSort = searchParams.get('sort') || 'featured';

  const setCategory = (cat) => {
    const p = new URLSearchParams(searchParams);
    if (cat === 'all') p.delete('category'); else p.set('category', cat);
    setSearchParams(p);
  };
  const setPriceRange = (idx) => {
    const p = new URLSearchParams(searchParams);
    if (idx === 0) p.delete('price'); else p.set('price', idx);
    setSearchParams(p);
  };
  const setSort = (val) => {
    const p = new URLSearchParams(searchParams);
    if (val === 'featured') p.delete('sort'); else p.set('sort', val);
    setSearchParams(p);
    setSortOpen(false);
  };

  const priceRange = PRICE_RANGES[activePriceIdx] || PRICE_RANGES[0];

  let filtered = products.filter((p) => {
    const catMatch = activeCategory === 'all' || p.category === activeCategory;
    const priceMatch = p.price >= priceRange.min && p.price <= priceRange.max;
    return catMatch && priceMatch;
  });

  if (activeSort === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (activeSort === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price);
  else if (activeSort === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  const activeSortLabel = SORT_OPTIONS.find((o) => o.value === activeSort)?.label || 'Featured';

  return (
    <div className="bg-surface min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-parchment py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs uppercase tracking-widest font-sans text-gold mb-3">Velmora Fine Jewelry</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink">The Collection</h1>
          <p className="text-sm font-sans text-muted mt-3 max-w-sm mx-auto">
            18K gold-plated demi-fine jewelry, crafted to be worn every day.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Filter/Sort bar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-muted border border-parchment px-4 py-2.5 hover:border-ink hover:text-ink transition-colors"
          >
            <SlidersHorizontal size={13} strokeWidth={1.5} />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 text-[11px] uppercase tracking-widest font-sans border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'border-gold bg-gold text-ivory'
                    : 'border-parchment text-muted hover:border-ink hover:text-ink'
                }`}
              >
                {cat === 'all' ? 'All Jewelry' : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <span className="text-xs font-sans text-whisper hidden md:block">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen((v) => !v)}
                className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-muted border border-parchment px-4 py-2.5 hover:border-ink hover:text-ink transition-colors"
              >
                {activeSortLabel}
                <ChevronDown size={12} strokeWidth={1.5} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 bg-ivory border border-parchment shadow-md z-20 min-w-[180px]">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setSort(opt.value)}
                      className={`w-full text-left px-4 py-3 text-xs font-sans hover:bg-cream transition-colors ${
                        activeSort === opt.value ? 'text-gold' : 'text-muted'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-[10px] uppercase tracking-widest font-sans text-whisper mb-4">Category</h3>
                <div className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`block text-xs font-sans transition-colors ${
                        activeCategory === cat ? 'text-gold' : 'text-muted hover:text-ink'
                      }`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-parchment" />

              {/* Price */}
              <div>
                <h3 className="text-[10px] uppercase tracking-widest font-sans text-whisper mb-4">Price</h3>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange(i)}
                      className={`block text-xs font-sans transition-colors ${
                        activePriceIdx === i ? 'text-gold' : 'text-muted hover:text-ink'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-parchment" />

              {/* Material */}
              <div>
                <h3 className="text-[10px] uppercase tracking-widest font-sans text-whisper mb-4">Material</h3>
                <div className="space-y-2">
                  {['18K Gold Plated', 'Silver Tone'].map((m) => (
                    <button key={m} className="block text-xs font-sans text-muted hover:text-ink transition-colors">
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-ivory overflow-y-auto">
              <div className="flex items-center justify-between px-5 py-4 border-b border-parchment">
                <h2 className="font-serif text-lg font-light text-ink">Filters</h2>
                <button onClick={() => setFilterOpen(false)} className="text-muted hover:text-ink">
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="px-5 py-6 space-y-8">
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-sans text-whisper mb-4">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setCategory(cat); setFilterOpen(false); }}
                        className={`px-4 py-2 text-xs uppercase tracking-widest font-sans border transition-colors ${
                          activeCategory === cat ? 'border-gold bg-gold text-ivory' : 'border-parchment text-muted'
                        }`}
                      >
                        {cat === 'all' ? 'All' : cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[10px] uppercase tracking-widest font-sans text-whisper mb-4">Price</h3>
                  <div className="flex flex-wrap gap-2">
                    {PRICE_RANGES.map((range, i) => (
                      <button
                        key={range.label}
                        onClick={() => { setPriceRange(i); setFilterOpen(false); }}
                        className={`px-4 py-2 text-xs font-sans border transition-colors ${
                          activePriceIdx === i ? 'border-gold bg-gold text-ivory' : 'border-parchment text-muted'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl font-light text-ink mb-3">No pieces found</p>
                <p className="text-sm font-sans text-muted mb-6">Try adjusting your filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-xs uppercase tracking-widest font-sans text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-ivory transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                {filtered.map((product) => (
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
