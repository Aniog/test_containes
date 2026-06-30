import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

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

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="product-img-wrap relative aspect-[3/4] bg-ivory-dark overflow-hidden mb-4">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="img-primary absolute inset-0 w-full h-full object-cover"
          />
          <img
            data-strk-img-id={`shop-alt-${product.imgId2}`}
            data-strk-img={`[shop-title-${product.id}] gold jewelry worn`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} alternate`}
            className="img-secondary absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => { e.preventDefault(); addItem(product); }}
              className="w-full bg-obsidian/90 text-ivory font-sans text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Quick Add
            </button>
          </div>
        </div>
      </Link>
      <div className="flex items-center gap-1 mb-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={10} style={i < Math.floor(product.rating) ? { color: '#c9a96e', fill: '#c9a96e' } : { color: '#e2dbd2', fill: '#e2dbd2' }} />
        ))}
        <span className="font-sans text-[10px] text-taupe ml-1">({product.reviewCount})</span>
      </div>
      <span id={`shop-title-${product.id}`} className="font-sans text-xs tracking-widest uppercase text-obsidian font-medium block hover:text-gold transition-colors">
        {product.name}
      </span>
      <span id={`shop-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>
      <span className="font-sans text-sm text-obsidian mt-0.5 block">${product.price}</span>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePriceRange, setActivePriceRange] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);
  const containerRef = useRef(null);

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = CATEGORIES.find(c => c.toLowerCase() === cat.toLowerCase());
      if (match) setActiveCategory(match);
    }
  }, [searchParams]);

  // Filter & sort
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
  }, [filtered, activeCategory, activePriceRange, sortBy]);

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat.toLowerCase() });
    }
  };

  return (
    <div className="bg-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-ivory-dark border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-sans text-xs tracking-widest3 uppercase text-gold mb-2">Velmora Fine Jewelry</p>
          <h1 className="font-serif text-3xl md:text-4xl font-light text-obsidian">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="font-sans text-sm text-taupe mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex gap-8 md:gap-12">

          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-obsidian mb-4">Category</h3>
                <div className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategory(cat)}
                      className={`block font-sans text-sm transition-colors duration-200 ${
                        activeCategory === cat ? 'text-obsidian font-medium' : 'text-taupe hover:text-obsidian'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-divider" />

              {/* Price filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-obsidian mb-4">Price</h3>
                <div className="space-y-2">
                  {PRICE_RANGES.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(range)}
                      className={`block font-sans text-sm transition-colors duration-200 ${
                        activePriceRange.label === range.label ? 'text-obsidian font-medium' : 'text-taupe hover:text-obsidian'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-divider" />

              {/* Material filter */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-obsidian mb-4">Material</h3>
                <div className="space-y-2">
                  {['18K Gold Plated', 'Silver Tone', 'Rose Gold'].map(m => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer group">
                      <div className="w-3.5 h-3.5 border border-divider group-hover:border-gold transition-colors" />
                      <span className="font-sans text-sm text-taupe group-hover:text-obsidian transition-colors">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0" ref={containerRef}>
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 md:mb-8">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(true)}
                className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-obsidian border border-divider px-4 py-2.5 hover:border-obsidian transition-colors"
              >
                <SlidersHorizontal size={13} strokeWidth={1.5} />
                Filter
              </button>

              {/* Category pills — mobile */}
              <div className="md:hidden flex gap-2 overflow-x-auto flex-1 ml-3" style={{ scrollbarWidth: 'none' }}>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategory(cat)}
                    className={`flex-shrink-0 font-sans text-[10px] tracking-widest uppercase px-3 py-1.5 border transition-colors ${
                      activeCategory === cat
                        ? 'border-obsidian bg-obsidian text-ivory'
                        : 'border-divider text-taupe hover:border-obsidian'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort dropdown */}
              <div className="relative ml-auto">
                <button
                  onClick={() => setSortOpen(v => !v)}
                  className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-obsidian border border-divider px-4 py-2.5 hover:border-obsidian transition-colors"
                >
                  Sort: {SORT_OPTIONS.find(s => s.value === sortBy)?.label}
                  <ChevronDown size={12} strokeWidth={1.5} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-ivory border border-divider shadow-md z-20 min-w-[180px]">
                    {SORT_OPTIONS.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                        className={`block w-full text-left px-4 py-3 font-sans text-xs transition-colors ${
                          sortBy === opt.value ? 'text-obsidian bg-ivory-dark' : 'text-taupe hover:text-obsidian hover:bg-ivory-dark'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl font-light text-obsidian mb-3">No pieces found</p>
                <p className="font-sans text-sm text-taupe mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(PRICE_RANGES[0]); }}
                  className="font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-obsidian/40" onClick={() => setFilterOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-ivory p-6 overflow-y-auto animate-slide-in-right" style={{ animationName: 'slide-in-left' }}>
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-sans text-xs tracking-widest uppercase text-obsidian">Filters</h2>
              <button onClick={() => setFilterOpen(false)} className="text-taupe hover:text-obsidian transition-colors">
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-obsidian mb-4">Category</h3>
                <div className="space-y-3">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => { handleCategory(cat); setFilterOpen(false); }}
                      className={`block font-sans text-sm ${activeCategory === cat ? 'text-obsidian font-medium' : 'text-taupe'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-px bg-divider" />
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-obsidian mb-4">Price</h3>
                <div className="space-y-3">
                  {PRICE_RANGES.map(range => (
                    <button
                      key={range.label}
                      onClick={() => { setActivePriceRange(range); setFilterOpen(false); }}
                      className={`block font-sans text-sm ${activePriceRange.label === range.label ? 'text-obsidian font-medium' : 'text-taupe'}`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
