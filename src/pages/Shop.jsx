import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
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
  { label: 'Over $80', min: 80, max: Infinity },
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
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-linen aspect-[3/4]">
        <img
          id={product.titleId}
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={`shop-${product.imgId2}`}
          data-strk-img={`[${product.titleId}] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={handleAdd}
            className="w-full bg-obsidian/90 text-ivory font-sans text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-colors"
          >
            <ShoppingBag size={11} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>

        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3">
            <span className="font-sans text-[10px] tracking-widest uppercase bg-gold text-obsidian px-2 py-1">
              Bestseller
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 px-1">
        <p id={product.descId} className="font-sans text-xs text-mist capitalize">{product.shortDescription}</p>
        <h3 className="font-serif text-sm uppercase tracking-wider text-ink mt-1 group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-1.5">
          <span className="font-sans text-sm text-ink">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" stroke="none" />
            <span className="font-sans text-xs text-mist">{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePriceRange, setActivePriceRange] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
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
    <div className="min-h-screen bg-parchment pt-16 lg:pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-linen py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">Discover</p>
          <h1 className="font-serif text-4xl lg:text-5xl text-ink font-light">The Collection</h1>
          <p className="font-sans text-sm text-mist mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">
        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'border-gold bg-gold text-obsidian'
                    : 'border-linen text-stone hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="sm:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-stone border border-linen px-3 py-2 hover:border-gold hover:text-gold transition-colors"
            >
              <SlidersHorizontal size={12} />
              Filters
            </button>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="font-sans text-xs tracking-wider text-stone bg-transparent border border-linen px-3 py-2 focus:outline-none focus:border-gold cursor-pointer hover:border-gold transition-colors"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={`w-56 flex-shrink-0 ${filterOpen ? 'block' : 'hidden'} sm:block`}>
            <div className="sticky top-24">
              {/* Price filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs tracking-widest uppercase text-ink mb-4">Price</h3>
                <div className="flex flex-col gap-2">
                  {PRICE_RANGES.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(range)}
                      className={`text-left font-sans text-sm transition-colors ${
                        activePriceRange.label === range.label
                          ? 'text-gold'
                          : 'text-stone hover:text-gold'
                      }`}
                    >
                      {activePriceRange.label === range.label && (
                        <span className="mr-2 text-gold">✓</span>
                      )}
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter (static) */}
              <div className="mb-8">
                <h3 className="font-sans text-xs tracking-widest uppercase text-ink mb-4">Material</h3>
                <div className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Silver Tone', 'Crystal'].map(m => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer group">
                      <div className="w-3.5 h-3.5 border border-linen group-hover:border-gold transition-colors" />
                      <span className="font-sans text-sm text-stone group-hover:text-gold transition-colors">{m}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Active filters */}
              {(activeCategory !== 'All' || activePriceRange.label !== 'All Prices') && (
                <div>
                  <h3 className="font-sans text-xs tracking-widest uppercase text-ink mb-3">Active Filters</h3>
                  <div className="flex flex-col gap-2">
                    {activeCategory !== 'All' && (
                      <button
                        onClick={() => handleCategoryChange('All')}
                        className="flex items-center gap-1.5 font-sans text-xs text-mist hover:text-gold transition-colors"
                      >
                        <X size={10} /> {activeCategory}
                      </button>
                    )}
                    {activePriceRange.label !== 'All Prices' && (
                      <button
                        onClick={() => setActivePriceRange(PRICE_RANGES[0])}
                        className="flex items-center gap-1.5 font-sans text-xs text-mist hover:text-gold transition-colors"
                      >
                        <X size={10} /> {activePriceRange.label}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-stone italic">No pieces found</p>
                <p className="font-sans text-sm text-mist mt-2">Try adjusting your filters</p>
                <button
                  onClick={() => { handleCategoryChange('All'); setActivePriceRange(PRICE_RANGES[0]); }}
                  className="mt-6 font-sans text-xs tracking-widest uppercase border border-gold text-gold px-6 py-3 hover:bg-gold hover:text-obsidian transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
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
