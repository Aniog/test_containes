import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

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
        <Star key={i} size={10} className={i <= Math.round(rating) ? 'fill-gold text-gold' : 'text-warm-stone/30'} strokeWidth={0.5} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <article className="group">
      <Link to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden bg-ivory-dark aspect-[3/4] mb-4">
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
              <span className="bg-obsidian text-ivory font-manrope text-[9px] tracking-[0.12em] uppercase px-2 py-1">Bestseller</span>
            )}
            {product.tags?.includes('new') && (
              <span className="bg-gold text-obsidian font-manrope text-[9px] tracking-[0.12em] uppercase px-2 py-1">New</span>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => { e.preventDefault(); addItem(product); }}
              className="w-full bg-obsidian text-ivory font-manrope text-xs tracking-[0.12em] uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-obsidian-light transition-colors"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <StarRating rating={product.rating} />
          <span className="font-manrope text-xs text-warm-stone">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 id={`shop-title-${product.id}`} className="font-cormorant text-base tracking-widest uppercase text-obsidian hover:text-gold transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>
        <p id={`shop-desc-${product.id}`} className="sr-only">{product.shortDescription}</p>
        <p className="font-manrope text-sm font-medium text-obsidian">${product.price}</p>
      </div>
    </article>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products
    .filter(p => activeCategory === 'all' || p.category === activeCategory)
    .filter(p => {
      const range = PRICE_RANGES[activePriceRange];
      return p.price >= range.min && p.price <= range.max;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="bg-ivory min-h-screen pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-ivory-dark border-b border-obsidian/8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <p className="font-manrope text-xs tracking-[0.25em] uppercase text-gold mb-3">Collection</p>
          <h1 className="font-cormorant text-4xl md:text-5xl text-obsidian font-light">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="font-manrope text-sm text-warm-stone mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Filter bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-obsidian/10">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-manrope text-xs tracking-[0.12em] uppercase px-4 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-obsidian text-ivory border-obsidian'
                    : 'border-obsidian/20 text-charcoal hover:border-gold hover:text-gold'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="md:hidden flex items-center gap-2 font-manrope text-xs tracking-[0.12em] uppercase text-charcoal border border-obsidian/20 px-4 py-2 hover:border-gold transition-colors"
            >
              <SlidersHorizontal size={12} strokeWidth={1.5} />
              Filters
            </button>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none bg-ivory border border-obsidian/20 font-manrope text-xs tracking-[0.1em] uppercase text-charcoal px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} strokeWidth={1.5} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-warm-stone pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <h3 className="font-manrope text-xs tracking-[0.2em] uppercase text-obsidian mb-4">Price Range</h3>
              <div className="flex flex-col gap-2">
                {PRICE_RANGES.map((range, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePriceRange(i)}
                    className={`text-left font-manrope text-sm py-1.5 transition-colors ${
                      activePriceRange === i ? 'text-gold font-medium' : 'text-charcoal hover:text-obsidian'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-obsidian/10">
                <h3 className="font-manrope text-xs tracking-[0.2em] uppercase text-obsidian mb-4">Material</h3>
                <div className="flex flex-col gap-2">
                  {['Gold Tone', 'Silver Tone'].map(mat => (
                    <label key={mat} className="flex items-center gap-2.5 cursor-pointer group">
                      <div className="w-3.5 h-3.5 border border-obsidian/30 group-hover:border-gold transition-colors flex items-center justify-center">
                        <div className="w-2 h-2 bg-gold opacity-0 group-hover:opacity-50 transition-opacity" />
                      </div>
                      <span className="font-manrope text-sm text-charcoal group-hover:text-obsidian transition-colors">{mat}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-obsidian/40" onClick={() => setFilterOpen(false)}>
              <div className="absolute bottom-0 left-0 right-0 bg-ivory p-6 rounded-t-lg" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-5">
                  <h3 className="font-manrope text-xs tracking-[0.2em] uppercase text-obsidian">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}><X size={16} strokeWidth={1.5} /></button>
                </div>
                <h4 className="font-manrope text-xs tracking-wider uppercase text-warm-stone mb-3">Price Range</h4>
                <div className="flex flex-col gap-2 mb-5">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={i}
                      onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                      className={`text-left font-manrope text-sm py-1.5 ${activePriceRange === i ? 'text-gold font-medium' : 'text-charcoal'}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-warm-stone mb-3">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('all'); setActivePriceRange(0); }}
                  className="font-manrope text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {filtered.map(product => (
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
