import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies'];
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

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          strokeWidth={1}
          className={s <= Math.round(rating) ? 'star-filled fill-gold' : 'star-empty'}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-ivory aspect-[3/4]">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.id}-desc] [shop-${product.id}-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`shop-alt-${product.imgId2}`}
          data-strk-img={`gold jewelry detail [shop-${product.id}-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />

        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className="bg-charcoal text-cream text-[9px] tracking-widest uppercase px-2.5 py-1"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {product.badge}
            </span>
          </div>
        )}

        <div
          className={`absolute bottom-0 left-0 right-0 bg-charcoal/90 py-3 flex items-center justify-center gap-2 transition-transform duration-300 ${hovered ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="flex items-center gap-2 text-cream text-xs tracking-widest uppercase font-medium hover:text-gold transition-colors"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="pt-4 pb-2">
        <div className="flex items-center justify-between mb-1">
          <span
            className="text-[9px] tracking-widest uppercase text-taupe"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {product.categoryLabel}
          </span>
          <StarRating rating={product.rating} />
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-${product.id}-title`}
            className="text-sm tracking-widest uppercase text-charcoal font-light hover:text-gold transition-colors leading-snug"
            style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.12em' }}
          >
            {product.name}
          </h3>
        </Link>
        <p
          id={`shop-${product.id}-desc`}
          className="text-xs text-taupe mt-0.5"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {product.subtitle}
        </p>
        <p
          className="text-sm font-medium text-charcoal mt-2"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState('All');
  const [activePriceRange, setActivePriceRange] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = CATEGORIES.find((c) => c.toLowerCase() === cat.toLowerCase());
      if (match) setActiveCategory(match);
    }
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products
    .filter((p) => {
      if (activeCategory !== 'All') {
        return p.category === activeCategory.toLowerCase();
      }
      return true;
    })
    .filter((p) => p.price >= activePriceRange.min && p.price <= activePriceRange.max)
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
    <div className="bg-cream min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-ivory border-b border-border py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p
            className="text-xs tracking-widest uppercase text-gold mb-3"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Velmora Fine Jewelry
          </p>
          <h1
            className="text-4xl md:text-5xl font-light text-charcoal"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            All Jewelry
          </h1>
          <p
            className="text-sm text-taupe mt-3"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Filter/Sort bar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-charcoal text-cream border-charcoal'
                    : 'bg-transparent text-charcoal border-border hover:border-charcoal'
                }`}
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter button */}
          <button
            className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase text-charcoal border border-border px-4 py-2"
            onClick={() => setFilterOpen(true)}
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            <SlidersHorizontal size={13} strokeWidth={1.5} />
            Filter
          </button>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              className="flex items-center gap-2 text-xs tracking-widest uppercase text-charcoal border border-border px-4 py-2 hover:border-charcoal transition-colors"
              onClick={() => setSortOpen(!sortOpen)}
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Sort: {SORT_OPTIONS.find((s) => s.value === sortBy)?.label}
              <ChevronDown size={12} strokeWidth={1.5} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 bg-cream border border-border z-20 min-w-[180px] shadow-sm">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    className={`w-full text-left px-4 py-3 text-xs tracking-widest uppercase hover:bg-ivory transition-colors ${sortBy === opt.value ? 'text-gold' : 'text-charcoal'}`}
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-24">
              {/* Price filter */}
              <div className="mb-8">
                <h3
                  className="text-xs tracking-widest uppercase text-charcoal font-medium mb-4"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Price
                </h3>
                <div className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(range)}
                      className={`text-left text-xs transition-colors ${
                        activePriceRange.label === range.label
                          ? 'text-charcoal font-medium'
                          : 'text-taupe hover:text-charcoal'
                      }`}
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {activePriceRange.label === range.label && (
                        <span className="text-gold mr-1.5">—</span>
                      )}
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3
                  className="text-xs tracking-widest uppercase text-charcoal font-medium mb-4"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Material
                </h3>
                <div className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Silver Tone', 'Rose Gold'].map((m) => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer group">
                      <div className="w-3.5 h-3.5 border border-border group-hover:border-charcoal transition-colors flex items-center justify-center">
                      </div>
                      <span
                        className="text-xs text-taupe group-hover:text-charcoal transition-colors"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {m}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-taupe text-sm mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  No products match your filters.
                </p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(PRICE_RANGES[0]); }}
                  className="text-xs tracking-widest uppercase text-charcoal border-b border-charcoal pb-0.5"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {filterOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-charcoal/40"
            onClick={() => setFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-cream rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span
                className="text-xs tracking-widest uppercase font-medium text-charcoal"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Filters
              </span>
              <button onClick={() => setFilterOpen(false)}>
                <X size={18} strokeWidth={1.5} className="text-charcoal" />
              </button>
            </div>

            <div className="mb-6">
              <h3
                className="text-xs tracking-widest uppercase text-charcoal font-medium mb-4"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                    className={`text-xs tracking-widest uppercase px-4 py-2 border transition-all ${
                      activeCategory === cat
                        ? 'bg-charcoal text-cream border-charcoal'
                        : 'bg-transparent text-charcoal border-border'
                    }`}
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3
                className="text-xs tracking-widest uppercase text-charcoal font-medium mb-4"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Price
              </h3>
              <div className="flex flex-col gap-3">
                {PRICE_RANGES.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => { setActivePriceRange(range); setFilterOpen(false); }}
                    className={`text-left text-sm transition-colors ${
                      activePriceRange.label === range.label ? 'text-charcoal font-medium' : 'text-taupe'
                    }`}
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
