import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
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
  { label: '$80+', min: 80, max: Infinity },
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
        <Star
          key={i}
          size={11}
          fill={i <= Math.round(rating) ? '#C9A96E' : '#EDE8DF'}
          stroke={i <= Math.round(rating) ? '#C9A96E' : '#EDE8DF'}
        />
      ))}
    </div>
  );
}

function ShopProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group bg-ivory"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}] [shop-page-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={`shop-${product.imgId2}`}
          data-strk-img={`[shop-title-${product.id}] [shop-page-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="font-sans text-[9px] tracking-widest uppercase bg-gold text-obsidian px-2 py-0.5 font-semibold">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="font-sans text-[9px] tracking-widest uppercase bg-obsidian text-parchment px-2 py-0.5 font-semibold">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full py-3 bg-obsidian/90 text-parchment font-sans text-[10px] tracking-widest uppercase font-semibold hover:bg-obsidian transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={12} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <Link to={`/product/${product.slug}`}>
              <h3 id={`shop-title-${product.id}`} className="font-serif text-sm tracking-wider uppercase text-ink hover:text-gold transition-colors leading-tight">
                {product.name}
              </h3>
            </Link>
            <p id={`shop-desc-${product.id}`} className="font-sans text-xs text-muted mt-1">{product.shortDescription}</p>
          </div>
          <span className="font-serif text-lg text-ink flex-shrink-0">${product.price}</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <StarRating rating={product.rating} />
          <span className="font-sans text-[10px] text-whisper">({product.reviewCount})</span>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePriceRange, setActivePriceRange] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = CATEGORIES.find(c => c.toLowerCase() === cat.toLowerCase());
      if (match) setActiveCategory(match);
    }
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products
    .filter(p => {
      if (activeCategory !== 'All' && p.category !== activeCategory.toLowerCase()) return false;
      if (p.price < activePriceRange.min || p.price > activePriceRange.max) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat.toLowerCase() });
    }
  };

  return (
    <div className="bg-parchment min-h-screen">
      {/* Page header */}
      <div className="bg-ivory border-b border-linen pt-20 md:pt-24 pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3 font-medium">
            Velmora Fine Jewelry
          </p>
          <h1 id="shop-page-title" className="font-serif text-4xl md:text-5xl text-ink font-light">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs tracking-widest uppercase text-ink font-semibold mb-4">Category</h3>
                <div className="flex flex-col gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`text-left font-sans text-sm transition-colors ${
                        activeCategory === cat ? 'text-gold font-semibold' : 'text-muted hover:text-ink'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-linen mb-8" />

              {/* Price filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs tracking-widest uppercase text-ink font-semibold mb-4">Price</h3>
                <div className="flex flex-col gap-2">
                  {PRICE_RANGES.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(range)}
                      className={`text-left font-sans text-sm transition-colors ${
                        activePriceRange.label === range.label ? 'text-gold font-semibold' : 'text-muted hover:text-ink'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-linen mb-8" />

              {/* Material filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-ink font-semibold mb-4">Material</h3>
                <div className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
                    <label key={m} className="flex items-center gap-2.5 cursor-pointer group">
                      <div className="w-3.5 h-3.5 border border-linen group-hover:border-gold transition-colors flex-shrink-0" />
                      <span className="font-sans text-sm text-muted group-hover:text-ink transition-colors">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <div className="flex items-center gap-3">
                {/* Mobile filter toggle */}
                <button
                  onClick={() => setFilterOpen(v => !v)}
                  className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-muted hover:text-gold transition-colors border border-linen px-3 py-2"
                >
                  <SlidersHorizontal size={14} />
                  Filter
                </button>
                <span className="font-sans text-sm text-muted">
                  {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
                </span>
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="appearance-none font-sans text-xs tracking-wider uppercase text-muted bg-transparent border border-linen px-4 py-2 pr-8 hover:border-gold focus:outline-none focus:border-gold transition-colors cursor-pointer"
                >
                  {SORT_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="lg:hidden bg-ivory border border-linen p-5 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-sans text-xs tracking-widest uppercase text-ink font-semibold">Filters</h3>
                  <button onClick={() => setFilterOpen(false)} className="text-muted hover:text-gold">
                    <X size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-sans text-xs tracking-wider uppercase text-muted mb-3 font-medium">Category</p>
                    <div className="flex flex-col gap-2">
                      {CATEGORIES.map(cat => (
                        <button
                          key={cat}
                          onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                          className={`text-left font-sans text-sm ${activeCategory === cat ? 'text-gold font-semibold' : 'text-muted'}`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-wider uppercase text-muted mb-3 font-medium">Price</p>
                    <div className="flex flex-col gap-2">
                      {PRICE_RANGES.map(range => (
                        <button
                          key={range.label}
                          onClick={() => { setActivePriceRange(range); setFilterOpen(false); }}
                          className={`text-left font-sans text-sm ${activePriceRange.label === range.label ? 'text-gold font-semibold' : 'text-muted'}`}
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
            <div ref={containerRef}>
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-2xl text-ink mb-3">No pieces found</p>
                  <p className="font-sans text-sm text-muted mb-6">Try adjusting your filters</p>
                  <button
                    onClick={() => { setActiveCategory('All'); setActivePriceRange(PRICE_RANGES[0]); }}
                    className="font-sans text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {filtered.map(product => (
                    <ShopProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
