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

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="product-card group">
      <Link to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-4">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <img
            data-strk-img-id={`shop-hover-${product.imgId2}`}
            data-strk-img={`[shop-${product.titleId}] gold jewelry editorial`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt=""
            className="product-img-secondary w-full h-full object-cover"
          />
          {product.tags.includes('bestseller') && (
            <span className="absolute top-3 left-3 font-sans text-[9px] uppercase tracking-widest font-semibold bg-champagne text-obsidian px-2 py-1">
              Bestseller
            </span>
          )}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => { e.preventDefault(); addItem(product); }}
              className="w-full bg-obsidian/90 text-ivory font-sans text-[10px] uppercase tracking-widest font-medium py-3 flex items-center justify-center gap-2 hover:bg-champagne hover:text-obsidian transition-colors duration-300"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Quick Add
            </button>
          </div>
        </div>
      </Link>
      <div className="flex items-center gap-1 mb-1.5">
        {[1,2,3,4,5].map(i => (
          <Star key={i} size={9} className={i <= Math.round(product.rating) ? 'text-champagne fill-champagne' : 'text-stone/30'} />
        ))}
        <span className="font-sans text-[10px] text-stone/50 ml-1">({product.reviewCount})</span>
      </div>
      <Link to={`/product/${product.slug}`}>
        <h3 id={`shop-${product.titleId}`} className="font-serif text-sm uppercase tracking-widest text-charcoal hover:text-champagne transition-colors mb-1 leading-snug">
          {product.name}
        </h3>
      </Link>
      <p id={`shop-${product.descId}`} className="sr-only">{product.shortDescription}</p>
      <p className="font-sans text-sm font-medium text-charcoal">${product.price}</p>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category')
      ? searchParams.get('category').charAt(0).toUpperCase() + searchParams.get('category').slice(1)
      : 'All'
  );
  const [activePriceRange, setActivePriceRange] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveCategory(cat.charAt(0).toUpperCase() + cat.slice(1));
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
      if (activeCategory === 'All') return true;
      return p.category === activeCategory.toLowerCase();
    })
    .filter(p => p.price >= activePriceRange.min && p.price <= activePriceRange.max)
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
    <div className="min-h-screen bg-ivory pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-parchment border-b border-champagne/15 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-champagne mb-3">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-3">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="font-sans text-sm text-stone">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10">
        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category */}
              <div className="mb-8">
                <h3 className="font-sans text-[10px] uppercase tracking-[0.15em] font-semibold text-charcoal mb-4">
                  Category
                </h3>
                <ul className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className={`font-sans text-sm transition-colors ${
                          activeCategory === cat
                            ? 'text-champagne font-medium'
                            : 'text-stone hover:text-charcoal'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full h-px bg-champagne/20 mb-8" />

              {/* Price */}
              <div className="mb-8">
                <h3 className="font-sans text-[10px] uppercase tracking-[0.15em] font-semibold text-charcoal mb-4">
                  Price
                </h3>
                <ul className="space-y-2">
                  {PRICE_RANGES.map(range => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(range)}
                        className={`font-sans text-sm transition-colors ${
                          activePriceRange.label === range.label
                            ? 'text-champagne font-medium'
                            : 'text-stone hover:text-charcoal'
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
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-champagne/15">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-stone hover:text-charcoal transition-colors"
              >
                <SlidersHorizontal size={14} />
                Filter
              </button>

              <span className="hidden md:block font-sans text-xs text-stone/60">
                {filtered.length} results
              </span>

              {/* Sort */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(v => !v)}
                  className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-stone hover:text-charcoal transition-colors"
                >
                  Sort: {SORT_OPTIONS.find(o => o.value === sortBy)?.label}
                  <ChevronDown size={12} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 bg-ivory border border-champagne/20 shadow-lg z-20 min-w-[180px]">
                    {SORT_OPTIONS.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                        className={`w-full text-left px-4 py-3 font-sans text-xs hover:bg-parchment transition-colors ${
                          sortBy === opt.value ? 'text-champagne' : 'text-charcoal'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="md:hidden bg-parchment border border-champagne/20 p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-xs uppercase tracking-widest font-medium text-charcoal">Filters</span>
                  <button onClick={() => setFilterOpen(false)}><X size={16} className="text-stone" /></button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-charcoal font-semibold mb-3">Category</p>
                    <div className="flex flex-wrap gap-2">
                      {CATEGORIES.map(cat => (
                        <button
                          key={cat}
                          onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                          className={`font-sans text-xs px-3 py-1.5 border transition-colors ${
                            activeCategory === cat
                              ? 'border-champagne bg-champagne text-obsidian'
                              : 'border-champagne/30 text-stone hover:border-champagne'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-charcoal font-semibold mb-3">Price</p>
                    <div className="flex flex-col gap-2">
                      {PRICE_RANGES.map(range => (
                        <button
                          key={range.label}
                          onClick={() => { setActivePriceRange(range); setFilterOpen(false); }}
                          className={`font-sans text-xs text-left transition-colors ${
                            activePriceRange.label === range.label ? 'text-champagne font-medium' : 'text-stone'
                          }`}
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
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-charcoal mb-3">No pieces found</p>
                <p className="font-sans text-sm text-stone mb-6">Try adjusting your filters.</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(PRICE_RANGES[0]); }}
                  className="font-sans text-xs uppercase tracking-widest text-champagne border border-champagne px-6 py-3 hover:bg-champagne hover:text-obsidian transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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
