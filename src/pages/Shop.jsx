import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

const CATEGORIES = ['All', 'earrings', 'necklaces', 'huggies', 'sets'];
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
          className="w-3 h-3"
          style={{
            fill: i <= Math.round(rating) ? '#C9A96E' : 'none',
            color: i <= Math.round(rating) ? '#C9A96E' : '#E8E0D4',
          }}
        />
      ))}
    </div>
  );
}

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group">
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        {product.badge && (
          <div className="absolute top-3 left-3 z-10 bg-obsidian text-ivory font-sans text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1">
            {product.badge}
          </div>
        )}
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-obsidian/90 text-ivory font-sans text-[11px] tracking-widest uppercase font-semibold py-3.5 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-colors duration-200"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </div>
      <div className="pt-4">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-${product.id}-title`}
            className="font-serif text-sm tracking-widest uppercase text-ink font-medium hover:text-gold transition-colors leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-${product.id}-desc`} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-2">
          <StarRating rating={product.rating} />
          <p className="font-sans text-sm font-semibold text-ink">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
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
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
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
    if (cat !== 'All') {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-cream border-b border-linen pt-24 md:pt-28 pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-gold font-semibold mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-ink font-light">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="font-sans text-sm text-muted mt-3">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase font-semibold text-ink mb-4">Category</h3>
                <ul className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className={cn(
                          'font-sans text-sm transition-colors duration-200 capitalize',
                          activeCategory === cat ? 'text-gold font-semibold' : 'text-muted hover:text-gold'
                        )}
                      >
                        {cat === 'All' ? 'All Jewelry' : cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full h-px bg-linen" />

              {/* Price filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase font-semibold text-ink mb-4">Price</h3>
                <ul className="space-y-2">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(i)}
                        className={cn(
                          'font-sans text-sm transition-colors duration-200',
                          activePriceRange === i ? 'text-gold font-semibold' : 'text-muted hover:text-gold'
                        )}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full h-px bg-linen" />

              {/* Material filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase font-semibold text-ink mb-4">Material</h3>
                <ul className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Crystal'].map(m => (
                    <li key={m}>
                      <button className="font-sans text-sm text-muted hover:text-gold transition-colors">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Mobile filter bar + sort */}
            <div className="flex items-center justify-between mb-6 gap-4">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase font-semibold text-ink border border-linen px-4 py-2.5 hover:border-gold hover:text-gold transition-all"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>

              {/* Sort dropdown */}
              <div className="relative ml-auto">
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-linen font-sans text-xs tracking-widest uppercase font-semibold text-ink px-4 py-2.5 pr-8 focus:outline-none focus:border-gold hover:border-gold transition-colors cursor-pointer"
                >
                  {SORT_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted pointer-events-none" />
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="lg:hidden bg-cream border border-linen p-6 mb-6">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-sans text-xs tracking-widest uppercase font-semibold text-ink">Filters</span>
                  <button onClick={() => setFilterOpen(false)} className="text-muted hover:text-gold">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-sans text-xs tracking-widest uppercase font-semibold text-ink mb-3">Category</h3>
                    <ul className="space-y-2">
                      {CATEGORIES.map(cat => (
                        <li key={cat}>
                          <button
                            onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                            className={cn('font-sans text-sm capitalize', activeCategory === cat ? 'text-gold font-semibold' : 'text-muted')}
                          >
                            {cat === 'All' ? 'All Jewelry' : cat}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-sans text-xs tracking-widest uppercase font-semibold text-ink mb-3">Price</h3>
                    <ul className="space-y-2">
                      {PRICE_RANGES.map((range, i) => (
                        <li key={range.label}>
                          <button
                            onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                            className={cn('font-sans text-sm', activePriceRange === i ? 'text-gold font-semibold' : 'text-muted')}
                          >
                            {range.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-muted">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(0); }}
                  className="mt-4 font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5"
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
  );
}
