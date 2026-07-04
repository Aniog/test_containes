import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag, ChevronDown } from 'lucide-react';
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

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={10}
          style={i <= Math.round(rating)
            ? { fill: '#C9A96E', color: '#C9A96E' }
            : { fill: 'none', color: '#D4C9B5' }
          }
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <article className="group bg-velmora-cream">
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-obsidian text-velmora-gold font-manrope text-[10px] tracking-widest uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product, product.variants[0])}
            className="w-full bg-velmora-obsidian/90 text-velmora-text-light font-manrope text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </div>
      <div className="pt-3 pb-4 px-1">
        <div className="flex items-center gap-1.5 mb-1.5">
          <StarRating rating={product.rating} />
          <span className="font-manrope text-[10px] text-velmora-text-muted">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-${product.titleId}`}
            className="font-cormorant text-sm uppercase tracking-[0.12em] text-velmora-text-dark font-medium hover:text-velmora-gold transition-colors duration-200 leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-${product.descId}`} className="sr-only">{product.shortDescription}</p>
        <p className="font-manrope text-sm text-velmora-text-mid mt-1">${product.price}</p>
      </div>
    </article>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePriceRange, setActivePriceRange] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = CATEGORIES.find(c => c.toLowerCase() === cat.toLowerCase());
      if (match) setActiveCategory(match);
    }
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
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
    <div className="min-h-screen bg-velmora-linen pt-16 lg:pt-20">
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-sand/30 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-manrope text-xs tracking-[0.3em] uppercase text-velmora-gold mb-3">
            The Collection
          </p>
          <h1 className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-text-dark">
            All Jewelry
          </h1>
          <p className="font-manrope text-sm text-velmora-text-muted mt-3">
            {filtered.length} pieces
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-manrope text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                    : 'border-velmora-stone/40 text-velmora-text-mid hover:border-velmora-gold hover:text-velmora-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Filter toggle (mobile) */}
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="lg:hidden flex items-center gap-1.5 font-manrope text-xs tracking-widest uppercase text-velmora-text-mid border border-velmora-stone/40 px-4 py-2 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-200"
            >
              <SlidersHorizontal size={13} strokeWidth={1.5} />
              Filter
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none bg-velmora-linen border border-velmora-stone/40 text-velmora-text-mid font-manrope text-xs tracking-wider uppercase px-4 py-2 pr-8 outline-none hover:border-velmora-gold transition-colors duration-200 cursor-pointer"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} strokeWidth={1.5} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-velmora-text-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={`${filterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-56 flex-shrink-0`}>
            <div className="bg-velmora-cream p-6 lg:sticky lg:top-24">
              <div className="flex items-center justify-between mb-5 lg:mb-6">
                <h3 className="font-manrope text-xs tracking-widest uppercase text-velmora-text-dark font-medium">
                  Filters
                </h3>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="lg:hidden text-velmora-text-muted hover:text-velmora-text-dark"
                >
                  <X size={16} strokeWidth={1.5} />
                </button>
              </div>

              {/* Price filter */}
              <div>
                <p className="font-manrope text-[10px] tracking-widest uppercase text-velmora-text-muted mb-3">
                  Price
                </p>
                <div className="flex flex-col gap-2">
                  {PRICE_RANGES.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(range)}
                      className={`text-left font-manrope text-xs py-1.5 transition-colors duration-200 ${
                        activePriceRange.label === range.label
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-text-mid hover:text-velmora-gold'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="hairline my-5" />

              {/* Material filter */}
              <div>
                <p className="font-manrope text-[10px] tracking-widest uppercase text-velmora-text-muted mb-3">
                  Material
                </p>
                <div className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="accent-velmora-gold" />
                      <span className="font-manrope text-xs text-velmora-text-mid group-hover:text-velmora-gold transition-colors duration-200">
                        {m}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-velmora-text-mid">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(PRICE_RANGES[0]); }}
                  className="mt-4 font-manrope text-xs tracking-widest uppercase text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
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
