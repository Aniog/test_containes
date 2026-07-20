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
        <Star
          key={i}
          size={10}
          fill={i <= Math.round(rating) ? 'currentColor' : 'none'}
          className={i <= Math.round(rating) ? 'text-velmora-gold' : 'text-velmora-divider'}
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <article className="group cursor-pointer">
      <Link to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden bg-velmora-parchment aspect-[3/4]">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            data-strk-img-id={`shop-hover-${product.imgId2}`}
            data-strk-img={`[${product.titleId}] gold jewelry worn on model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} worn`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          {product.tags.includes('bestseller') && (
            <span className="absolute top-3 left-3 font-inter text-[9px] uppercase tracking-widest-sm bg-velmora-gold text-velmora-ink px-2 py-0.5">
              Bestseller
            </span>
          )}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); addItem(product); }}
              className="w-full bg-velmora-ink text-velmora-cream font-inter text-[10px] uppercase tracking-widest-sm py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-espresso transition-colors duration-300"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Quick Add
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <div className="flex items-center justify-between gap-2">
          <Link to={`/product/${product.slug}`}>
            <h3 id={product.titleId} className="font-cormorant text-sm uppercase tracking-widest-sm text-velmora-ink hover:text-velmora-gold transition-colors leading-tight">
              {product.name}
            </h3>
          </Link>
          <span className="font-cormorant text-lg text-velmora-ink flex-shrink-0">${product.price}</span>
        </div>
        <p id={product.descId} className="hidden">{product.shortDescription}</p>
        <div className="flex items-center gap-1.5 mt-1.5">
          <StarRating rating={product.rating} />
          <span className="font-inter text-[10px] text-velmora-stone">({product.reviewCount})</span>
        </div>
      </div>
    </article>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const containerRef = useRef(null);

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  // Filter & sort products
  const filtered = products
    .filter(p => {
      const catMatch = activeCategory === 'all' || p.category === activeCategory;
      const { min, max } = PRICE_RANGES[activePriceRange];
      const priceMatch = p.price >= min && p.price <= max;
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
  }, [filtered, activeCategory, activePriceRange]);

  const handleCategoryChange = (cat) => {
    const val = cat.toLowerCase();
    setActiveCategory(val);
    setSearchParams(val === 'all' ? {} : { category: val });
    setSidebarOpen(false);
  };

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen pt-20">
      {/* Page header */}
      <div className="border-b border-velmora-divider">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-14">
          <p className="font-inter text-xs uppercase tracking-widest-lg text-velmora-gold mb-2">Velmora</p>
          <h1 className="font-cormorant text-4xl md:text-5xl text-velmora-ink font-light">
            {activeCategory === 'all' ? 'All Jewelry' : CATEGORIES.find(c => c.toLowerCase() === activeCategory) || 'Shop'}
          </h1>
          <p className="font-inter text-sm text-velmora-stone mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">
        <div className="flex gap-8 lg:gap-12">

          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="font-inter text-xs uppercase tracking-widest-sm text-velmora-ink mb-4">Category</h3>
                <ul className="space-y-2.5">
                  {CATEGORIES.map(cat => {
                    const val = cat.toLowerCase();
                    const active = activeCategory === val;
                    return (
                      <li key={cat}>
                        <button
                          onClick={() => handleCategoryChange(cat)}
                          className={`font-inter text-sm transition-colors duration-300 ${active ? 'text-velmora-gold' : 'text-velmora-stone hover:text-velmora-ink'}`}
                        >
                          {cat}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="border-t border-velmora-divider pt-8 mb-8">
                <h3 className="font-inter text-xs uppercase tracking-widest-sm text-velmora-ink mb-4">Price</h3>
                <ul className="space-y-2.5">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(i)}
                        className={`font-inter text-sm transition-colors duration-300 ${activePriceRange === i ? 'text-velmora-gold' : 'text-velmora-stone hover:text-velmora-ink'}`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-velmora-divider pt-8">
                <h3 className="font-inter text-xs uppercase tracking-widest-sm text-velmora-ink mb-4">Material</h3>
                <ul className="space-y-2.5">
                  {['18K Gold Plated', 'Sterling Silver'].map(m => (
                    <li key={m}>
                      <button className="font-inter text-sm text-velmora-stone hover:text-velmora-ink transition-colors duration-300">
                        {m}
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
            <div className="flex items-center justify-between mb-6 md:mb-8">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-widest-sm text-velmora-ink border border-velmora-divider px-4 py-2.5 hover:border-velmora-ink transition-colors"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filter
              </button>

              {/* Sort */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="font-inter text-xs text-velmora-stone hidden md:block">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent border border-velmora-divider font-inter text-xs text-velmora-ink px-4 py-2.5 pr-8 cursor-pointer focus:outline-none focus:border-velmora-ink transition-colors"
                  >
                    {SORT_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-velmora-stone pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl text-velmora-ink mb-3">No pieces found</p>
                <p className="font-inter text-sm text-velmora-stone">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-velmora-ink/40" onClick={() => setSidebarOpen(false)} />
          <aside className="fixed top-0 left-0 h-full w-72 z-50 bg-velmora-cream overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-divider">
              <h2 className="font-cormorant text-xl text-velmora-ink">Filters</h2>
              <button onClick={() => setSidebarOpen(false)} className="text-velmora-stone hover:text-velmora-ink">
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>
            <div className="px-6 py-6 space-y-8">
              <div>
                <h3 className="font-inter text-xs uppercase tracking-widest-sm text-velmora-ink mb-4">Category</h3>
                <ul className="space-y-3">
                  {CATEGORIES.map(cat => {
                    const val = cat.toLowerCase();
                    const active = activeCategory === val;
                    return (
                      <li key={cat}>
                        <button onClick={() => handleCategoryChange(cat)} className={`font-inter text-sm ${active ? 'text-velmora-gold' : 'text-velmora-stone'}`}>
                          {cat}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="border-t border-velmora-divider pt-6">
                <h3 className="font-inter text-xs uppercase tracking-widest-sm text-velmora-ink mb-4">Price</h3>
                <ul className="space-y-3">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button onClick={() => { setActivePriceRange(i); setSidebarOpen(false); }} className={`font-inter text-sm ${activePriceRange === i ? 'text-velmora-gold' : 'text-velmora-stone'}`}>
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}
