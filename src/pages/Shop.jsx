import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
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
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-120', label: '$75 – $120' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={10} className={i <= Math.round(rating) ? 'fill-star text-star' : 'text-linen fill-linen'} />
      ))}
    </div>
  );
}

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        <img
          id={product.titleId}
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-obsidian">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full flex items-center justify-center gap-2 py-3 font-manrope text-xs tracking-[0.1em] uppercase text-ivory hover:text-gold transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>

        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3 bg-gold text-ivory font-manrope text-[9px] tracking-[0.1em] uppercase px-2 py-1">
            Bestseller
          </div>
        )}
      </Link>

      <Link to={`/product/${product.slug}`}>
        <h3 className="font-cormorant text-base uppercase tracking-widest2 text-ink font-medium hover:text-gold transition-colors leading-tight mb-1">
          {product.name}
        </h3>
      </Link>
      <div className="flex items-center justify-between">
        <StarRating rating={product.rating} />
        <span className="font-manrope text-sm font-medium text-ink">${product.price}</span>
      </div>
    </div>
  );
}

function FilterSidebar({ activeCategory, setActiveCategory, activePriceRange, setActivePriceRange, onClose }) {
  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-manrope text-xs tracking-[0.12em] uppercase text-ink mb-4">Category</h3>
        <ul className="space-y-2">
          {categoryOptions.map(opt => (
            <li key={opt.value}>
              <button
                onClick={() => { setActiveCategory(opt.value); onClose?.(); }}
                className={`font-manrope text-sm transition-colors ${
                  activeCategory === opt.value ? 'text-gold' : 'text-muted hover:text-ink'
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-px bg-linen" />

      {/* Price */}
      <div>
        <h3 className="font-manrope text-xs tracking-[0.12em] uppercase text-ink mb-4">Price</h3>
        <ul className="space-y-2">
          {priceRanges.map(opt => (
            <li key={opt.value}>
              <button
                onClick={() => { setActivePriceRange(opt.value); onClose?.(); }}
                className={`font-manrope text-sm transition-colors ${
                  activePriceRange === opt.value ? 'text-gold' : 'text-muted hover:text-ink'
                }`}
              >
                {opt.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-px bg-linen" />

      {/* Material */}
      <div>
        <h3 className="font-manrope text-xs tracking-[0.12em] uppercase text-ink mb-4">Material</h3>
        <ul className="space-y-2">
          {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
            <li key={m}>
              <button className="font-manrope text-sm text-muted hover:text-ink transition-colors">
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || '');
  const [activePriceRange, setActivePriceRange] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category') || '';
    setActiveCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products.filter(p => {
    if (activeCategory && p.category !== activeCategory) return false;
    if (activePriceRange) {
      const [min, max] = activePriceRange.split('-').map(Number);
      if (p.price < min || p.price > max) return false;
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  const activeCategoryLabel = categoryOptions.find(c => c.value === activeCategory)?.label || 'All Jewelry';

  return (
    <div className="min-h-screen bg-parchment pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-linen border-b border-linen py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="font-manrope text-xs tracking-[0.15em] uppercase text-gold mb-2">Collection</p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-ink tracking-wide">
            {activeCategoryLabel}
          </h1>
          <p className="font-manrope text-sm text-muted mt-2">{sorted.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="flex items-center gap-2 font-manrope text-xs tracking-[0.1em] uppercase text-ink border border-linen px-4 py-2.5 hover:border-ink transition-colors"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filter
          </button>

          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none bg-transparent font-manrope text-xs tracking-[0.1em] uppercase text-ink border border-linen px-4 py-2.5 pr-8 focus:outline-none hover:border-ink transition-colors"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10 md:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar
              activeCategory={activeCategory}
              setActiveCategory={(v) => { setActiveCategory(v); setSearchParams(v ? { category: v } : {}); }}
              activePriceRange={activePriceRange}
              setActivePriceRange={setActivePriceRange}
            />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Desktop sort bar */}
            <div className="hidden md:flex items-center justify-between mb-8">
              <p className="font-manrope text-xs text-muted">{sorted.length} results</p>
              <div className="flex items-center gap-3">
                <span className="font-manrope text-xs tracking-[0.1em] uppercase text-muted">Sort:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent font-manrope text-xs text-ink border-b border-linen pb-0.5 pr-6 focus:outline-none hover:border-ink transition-colors cursor-pointer"
                  >
                    {sortOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {sorted.length > 0 ? (
                sorted.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="font-cormorant text-3xl font-light text-muted italic mb-3">No pieces found</p>
                  <p className="font-manrope text-sm text-ghost">Try adjusting your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <>
          <div
            className="fixed inset-0 z-50"
            style={{backgroundColor: 'rgba(26,23,20,0.4)'}}
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-ivory z-50 flex flex-col shadow-drawer animate-slideInLeft">
            <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
              <h2 className="font-cormorant text-xl font-medium text-ink">Filter</h2>
              <button onClick={() => setMobileFilterOpen(false)} className="text-muted hover:text-ink">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <FilterSidebar
                activeCategory={activeCategory}
                setActiveCategory={(v) => { setActiveCategory(v); setSearchParams(v ? { category: v } : {}); }}
                activePriceRange={activePriceRange}
                setActivePriceRange={setActivePriceRange}
                onClose={() => setMobileFilterOpen(false)}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
