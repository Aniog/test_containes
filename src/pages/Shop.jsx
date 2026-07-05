import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
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
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4">
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 bg-gold text-obsidian font-sans text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1">
              {product.badge}
            </span>
          )}
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleAdd}
              className="w-full bg-obsidian/90 text-ivory font-sans text-[11px] font-semibold uppercase tracking-widest py-3.5 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
            >
              <ShoppingBag size={13} strokeWidth={1.5} />
              {added ? 'Added!' : 'Quick Add'}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-0.5 mb-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-linen fill-linen'} />
          ))}
          <span className="font-sans text-[11px] text-muted ml-1">({product.reviewCount})</span>
        </div>

        <h3
          id={`shop-title-${product.id}`}
          className="font-serif text-sm font-medium uppercase tracking-widest text-obsidian leading-tight mb-1"
        >
          {product.name}
        </h3>
        <p id={`shop-desc-${product.id}`} className="sr-only">{product.shortDesc}</p>
        <p className="font-sans text-sm font-semibold text-obsidian">${product.price}</p>
      </Link>
    </div>
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
  }, []);

  // Filter + sort products
  const filtered = products
    .filter(p => {
      const catMatch = activeCategory === 'All' || p.category === activeCategory.toLowerCase();
      const priceMatch = p.price >= activePriceRange.min && p.price <= activePriceRange.max;
      return catMatch && priceMatch;
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
    <div ref={containerRef} className="bg-ivory min-h-screen pt-20 lg:pt-24">
      {/* Page header */}
      <div className="border-b border-linen">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-10 lg:py-14">
          <p className="font-sans text-xs font-semibold uppercase tracking-widest text-gold mb-2">
            Velmora
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-light text-obsidian">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="font-sans text-sm text-muted mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex gap-10 lg:gap-14">

          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-obsidian mb-4">
                  Category
                </h3>
                <ul className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`font-sans text-sm transition-colors ${
                          activeCategory === cat
                            ? 'text-gold font-semibold'
                            : 'text-stone hover:text-obsidian'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hairline" />

              {/* Price filter */}
              <div>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-obsidian mb-4">
                  Price
                </h3>
                <ul className="space-y-2">
                  {PRICE_RANGES.map(range => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(range)}
                        className={`font-sans text-sm transition-colors ${
                          activePriceRange.label === range.label
                            ? 'text-gold font-semibold'
                            : 'text-stone hover:text-obsidian'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 gap-4">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-stone border border-linen px-4 py-2.5 hover:border-stone transition-colors"
              >
                <SlidersHorizontal size={14} /> Filter
              </button>

              {/* Category pills — mobile */}
              <div className="lg:hidden flex gap-2 overflow-x-auto scroll-hide flex-1">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex-shrink-0 font-sans text-[11px] font-semibold uppercase tracking-widest px-3 py-1.5 border transition-colors ${
                      activeCategory === cat
                        ? 'bg-obsidian text-ivory border-obsidian'
                        : 'text-stone border-linen hover:border-stone'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="relative flex-shrink-0">
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="appearance-none font-sans text-xs font-semibold uppercase tracking-widest text-stone border border-linen px-4 py-2.5 pr-8 bg-transparent hover:border-stone transition-colors cursor-pointer focus:outline-none"
                >
                  {SORT_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl italic text-muted mb-3">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(PRICE_RANGES[0]); }}
                  className="font-sans text-xs font-semibold uppercase tracking-widest text-gold hover:text-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
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
          <div className="cart-overlay" onClick={() => setFilterOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-ivory z-50 rounded-t-2xl p-6 shadow-drawer">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-obsidian">Filters</h3>
              <button onClick={() => setFilterOpen(false)}>
                <X size={20} className="text-stone" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-obsidian mb-3">Category</p>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`font-sans text-xs font-semibold uppercase tracking-widest px-3 py-2 border transition-colors ${
                        activeCategory === cat ? 'bg-obsidian text-ivory border-obsidian' : 'text-stone border-linen'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-obsidian mb-3">Price</p>
                <div className="flex flex-wrap gap-2">
                  {PRICE_RANGES.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(range)}
                      className={`font-sans text-xs font-semibold uppercase tracking-widest px-3 py-2 border transition-colors ${
                        activePriceRange.label === range.label ? 'bg-obsidian text-ivory border-obsidian' : 'text-stone border-linen'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setFilterOpen(false)}
              className="w-full mt-8 bg-obsidian text-ivory font-sans text-xs font-semibold uppercase tracking-widest py-4"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}
    </div>
  );
}
