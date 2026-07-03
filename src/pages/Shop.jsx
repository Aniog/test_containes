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
  { label: '$40 – $70', min: 40, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
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
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={10}
          style={i <= Math.round(rating)
            ? { fill: '#C9A96E', color: '#C9A96E' }
            : { fill: '#E2D9CC', color: '#E2D9CC' }
          }
        />
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
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[shop-title-${product.id}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="font-manrope text-[9px] uppercase tracking-widest bg-champagne text-obsidian px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="font-manrope text-[9px] uppercase tracking-widest bg-obsidian text-ivory px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <button
          onClick={handleAdd}
          className="absolute bottom-0 left-0 right-0 bg-obsidian/90 text-ivory font-manrope text-[10px] uppercase tracking-widest py-3 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-champagne hover:text-obsidian"
        >
          <ShoppingBag size={12} />
          {added ? 'Added!' : 'Quick Add'}
        </button>
      </div>

      <p id={`shop-title-${product.id}`} className="font-cormorant text-sm uppercase tracking-[0.12em] text-obsidian mb-1">
        {product.name}
      </p>
      <p id={`shop-desc-${product.id}`} className="hidden">{product.shortDesc}</p>
      <div className="flex items-center justify-between">
        <span className="font-manrope text-sm font-medium text-obsidian">${product.price}</span>
        <StarRating rating={product.rating} />
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const containerRef = useRef(null);

  const initialCategory = searchParams.get('category')
    ? CATEGORIES.find(c => c.toLowerCase() === searchParams.get('category').toLowerCase()) || 'All'
    : 'All';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activePriceRange, setActivePriceRange] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

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

  return (
    <div className="bg-parchment min-h-screen pt-20">
      {/* Page header */}
      <div className="py-16 md:py-20" style={{ backgroundColor: '#1A1714' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-manrope text-xs uppercase tracking-widest mb-3" style={{ color: '#C9A96E' }}>
            Velmora Fine Jewelry
          </p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light mb-4" style={{ color: '#FAF7F2' }}>
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <div className="w-12 h-px bg-champagne mx-auto" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Filter bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-divider">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-manrope text-[10px] uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-champagne border-champagne text-obsidian'
                    : 'border-divider text-stone hover:border-champagne hover:text-champagne'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Filter button (mobile) */}
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 font-manrope text-[10px] uppercase tracking-widest text-stone border border-divider px-4 py-2 hover:border-champagne hover:text-champagne transition-all"
            >
              <SlidersHorizontal size={12} />
              Filter
            </button>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(v => !v)}
                className="flex items-center gap-2 font-manrope text-[10px] uppercase tracking-widest text-stone border border-divider px-4 py-2 hover:border-champagne hover:text-champagne transition-all"
              >
                Sort
                <ChevronDown size={12} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 bg-ivory border border-divider shadow-lg z-20 min-w-[180px] animate-fadeIn">
                  {SORT_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                      className={`w-full text-left px-4 py-3 font-manrope text-xs transition-colors ${
                        sortBy === opt.value ? 'text-champagne bg-parchment' : 'text-stone hover:text-champagne hover:bg-parchment'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="font-manrope text-xs text-stone/50">
              {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
            </span>
          </div>
        </div>

        {/* Filter panel */}
        {filterOpen && (
          <div className="mb-8 p-6 bg-ivory border border-divider animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <span className="font-manrope text-xs uppercase tracking-widest text-obsidian">Price Range</span>
              <button onClick={() => setFilterOpen(false)} className="text-stone hover:text-obsidian">
                <X size={16} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {PRICE_RANGES.map(range => (
                <button
                  key={range.label}
                  onClick={() => setActivePriceRange(range)}
                  className={`font-manrope text-[10px] uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${
                    activePriceRange.label === range.label
                      ? 'bg-champagne border-champagne text-obsidian'
                      : 'border-divider text-stone hover:border-champagne hover:text-champagne'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div ref={containerRef}>
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-cormorant text-3xl text-stone mb-4">No items found</p>
              <button
                onClick={() => { setActiveCategory('All'); setActivePriceRange(PRICE_RANGES[0]); }}
                className="font-manrope text-xs uppercase tracking-widest text-champagne border-b border-champagne pb-0.5"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map(product => (
                <ShopProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
