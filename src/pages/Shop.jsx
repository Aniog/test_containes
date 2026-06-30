import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

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

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden bg-velmora-linen aspect-[3/4] block">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-velmora-obsidian/90">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full flex items-center justify-center gap-2 py-3 font-manrope text-xs uppercase tracking-widest text-velmora-ivory hover:text-velmora-champagne transition-colors"
          >
            <ShoppingBag className="w-3 h-3" />
            Quick Add
          </button>
        </div>
        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3 bg-velmora-champagne text-velmora-obsidian font-manrope text-[9px] uppercase tracking-widest px-2 py-1">
            Bestseller
          </div>
        )}
      </Link>
      <div className="pt-4 flex flex-col gap-1">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-velmora-champagne text-velmora-champagne' : 'text-velmora-blush'}`} />
          ))}
          <span className="font-manrope text-[10px] text-velmora-stone ml-1">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 id={`shop-${product.titleId}`} className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian hover:text-velmora-champagne transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>
        <p id={`shop-${product.descId}`} className="hidden font-manrope text-xs text-velmora-stone">{product.shortDescription}</p>
        <p className="font-manrope text-sm font-medium text-velmora-obsidian mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'All';
  });
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat.charAt(0).toUpperCase() + cat.slice(1));
  }, [searchParams]);

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

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  return (
    <div className="bg-velmora-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-velmora-linen border-b border-velmora-blush">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-champagne mb-3">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian">
            {activeCategory === 'All' ? 'The Collection' : activeCategory}
          </h1>
          <p className="font-manrope text-sm text-velmora-stone mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row gap-10">

          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28 flex flex-col gap-8">
              {/* Category */}
              <div>
                <h3 className="font-manrope text-xs uppercase tracking-widest text-velmora-obsidian mb-4">Category</h3>
                <div className="flex flex-col gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left font-manrope text-xs transition-colors duration-200 py-1 ${
                        activeCategory === cat
                          ? 'text-velmora-champagne'
                          : 'text-velmora-stone hover:text-velmora-obsidian'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-velmora-blush" />

              {/* Price */}
              <div>
                <h3 className="font-manrope text-xs uppercase tracking-widest text-velmora-obsidian mb-4">Price</h3>
                <div className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(i)}
                      className={`text-left font-manrope text-xs transition-colors duration-200 py-1 ${
                        activePriceRange === i
                          ? 'text-velmora-champagne'
                          : 'text-velmora-stone hover:text-velmora-obsidian'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-blush">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(true)}
                className="md:hidden flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-stone hover:text-velmora-obsidian transition-colors"
              >
                <SlidersHorizontal className="w-3 h-3" />
                Filter
              </button>

              {/* Category pills — mobile */}
              <div className="hidden md:flex items-center gap-2 flex-wrap">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`font-manrope text-[10px] uppercase tracking-widest px-3 py-1.5 border transition-all duration-200 ${
                      activeCategory === cat
                        ? 'border-velmora-champagne bg-velmora-champagne text-velmora-obsidian'
                        : 'border-velmora-blush text-velmora-stone hover:border-velmora-stone'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-velmora-blush font-manrope text-xs text-velmora-stone px-4 py-2 pr-8 focus:outline-none focus:border-velmora-champagne cursor-pointer"
                >
                  {SORT_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-stone pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl font-light text-velmora-stone mb-3">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(0); }}
                  className="font-manrope text-xs uppercase tracking-widest text-velmora-champagne hover:text-velmora-obsidian transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filtered.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <>
          <div className="fixed inset-0 bg-velmora-obsidian/40 z-50" onClick={() => setFilterOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-velmora-ivory z-50 rounded-t-2xl p-6 animate-fadeInUp">
            <div className="flex items-center justify-between mb-6">
              <span className="font-cormorant text-xl font-light text-velmora-obsidian uppercase tracking-widest">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-5 h-5 text-velmora-stone" />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="font-manrope text-xs uppercase tracking-widest text-velmora-obsidian mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`font-manrope text-[10px] uppercase tracking-widest px-3 py-2 border transition-all ${
                      activeCategory === cat
                        ? 'border-velmora-champagne bg-velmora-champagne text-velmora-obsidian'
                        : 'border-velmora-blush text-velmora-stone'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-manrope text-xs uppercase tracking-widest text-velmora-obsidian mb-3">Price</h3>
              <div className="flex flex-wrap gap-2">
                {PRICE_RANGES.map((range, i) => (
                  <button
                    key={range.label}
                    onClick={() => setActivePriceRange(i)}
                    className={`font-manrope text-[10px] uppercase tracking-widest px-3 py-2 border transition-all ${
                      activePriceRange === i
                        ? 'border-velmora-champagne bg-velmora-champagne text-velmora-obsidian'
                        : 'border-velmora-blush text-velmora-stone'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setFilterOpen(false)}
              className="w-full bg-velmora-champagne text-velmora-obsidian font-manrope text-xs uppercase tracking-widest py-4"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  );
}
