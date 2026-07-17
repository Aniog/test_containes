import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
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
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-luxury ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.img2Id}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-luxury ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="bg-espresso text-ivory font-sans text-[9px] tracking-widest uppercase px-2 py-1">Bestseller</span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-gold text-ivory font-sans text-[9px] tracking-widest uppercase px-2 py-1">New</span>
          )}
        </div>

        {/* Quick add */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ease-luxury ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={handleAdd}
            className={`w-full py-3 font-sans text-xs tracking-widest uppercase transition-colors duration-200 ${
              added ? 'bg-espresso text-ivory' : 'bg-ivory/95 text-espresso hover:bg-gold hover:text-ivory'
            }`}
          >
            {added ? 'Added ✓' : 'Quick Add'}
          </button>
        </div>
      </div>

      <p id={`shop-${product.titleId}`} className="product-name text-sm mb-1">{product.name}</p>
      <p id={`shop-${product.descId}`} className="font-sans text-xs text-muted mb-2 line-clamp-1">{product.shortDescription}</p>
      <div className="flex items-center justify-between">
        <span className="font-sans text-sm text-espresso font-500">${product.price}</span>
        <div className="flex items-center gap-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-sand fill-sand'} />
            ))}
          </div>
          <span className="font-sans text-[10px] text-muted">({product.reviewCount})</span>
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category')
      ? searchParams.get('category').charAt(0).toUpperCase() + searchParams.get('category').slice(1)
      : 'All'
  );
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products
    .filter(p => {
      if (activeCategory !== 'All' && p.category !== activeCategory.toLowerCase()) return false;
      const range = PRICE_RANGES[activePriceRange];
      if (p.price < range.min || p.price > range.max) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-ivory pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-cream border-b border-sand py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-5 md:px-10 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">Velmora Fine Jewelry</p>
          <h1 className="font-serif text-4xl md:text-5xl text-espresso">All Jewelry</h1>
          <p className="font-sans text-sm text-muted mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'border-espresso bg-espresso text-ivory'
                    : 'border-sand text-charcoal hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Filter toggle (mobile) */}
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-charcoal border border-sand px-4 py-2 hover:border-gold hover:text-gold transition-colors duration-200"
            >
              <SlidersHorizontal size={12} />
              Filters
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-sand font-sans text-xs tracking-widest uppercase text-charcoal px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer hover:border-gold transition-colors duration-200"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={10} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <h3 className="font-sans text-xs tracking-widest uppercase text-muted mb-4">Price Range</h3>
                <div className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(i)}
                      className={`text-left font-sans text-xs py-1.5 transition-colors duration-200 ${
                        activePriceRange === i ? 'text-gold font-500' : 'text-charcoal hover:text-gold'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline pt-6">
                <h3 className="font-sans text-xs tracking-widest uppercase text-muted mb-4">Material</h3>
                <div className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Silver Tone', 'Rose Gold'].map(mat => (
                    <label key={mat} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="accent-gold" />
                      <span className="font-sans text-xs text-charcoal group-hover:text-gold transition-colors duration-200">{mat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-espresso/40" onClick={() => setFilterOpen(false)}>
              <div
                className="absolute bottom-0 left-0 right-0 bg-ivory p-6 rounded-t-2xl"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans text-xs tracking-widest uppercase text-espresso">Filters</span>
                  <button onClick={() => setFilterOpen(false)}><X size={16} className="text-charcoal" /></button>
                </div>
                <div className="mb-6">
                  <h3 className="font-sans text-xs tracking-widest uppercase text-muted mb-3">Price Range</h3>
                  <div className="flex flex-wrap gap-2">
                    {PRICE_RANGES.map((range, i) => (
                      <button
                        key={range.label}
                        onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                        className={`font-sans text-xs px-3 py-1.5 border transition-colors duration-200 ${
                          activePriceRange === i ? 'border-espresso bg-espresso text-ivory' : 'border-sand text-charcoal'
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
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-espresso mb-3">No pieces found</p>
                <p className="font-sans text-sm text-muted mb-6">Try adjusting your filters.</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(0); }}
                  className="btn-outline-espresso"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
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
