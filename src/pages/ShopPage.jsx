import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const PRICE_RANGES = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={10}
          style={i <= Math.round(rating)
            ? { color: '#C9A96E', fill: '#C9A96E' }
            : { color: '#D4C9B0', fill: 'none' }
          }
          strokeWidth={1}
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden bg-velmora-cream block aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100" style={{ backgroundColor: 'rgba(26,23,20,0.08)' }} />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-velmora-obsidian text-velmora-text-light font-manrope text-[10px] uppercase tracking-widest-sm px-2.5 py-1">
            {product.badge}
          </span>
        )}
        <button
          onClick={(e) => { e.preventDefault(); addItem(product); }}
          className="absolute bottom-0 left-0 right-0 text-velmora-text-light font-manrope text-xs uppercase tracking-widest-sm py-3 flex items-center justify-center gap-2 translate-y-full group-hover:translate-y-0 transition-all duration-300 hover:bg-velmora-gold hover:text-velmora-obsidian"
          style={{ backgroundColor: 'rgba(26,23,20,0.88)' }}
        >
          <ShoppingBag size={13} strokeWidth={1.5} />
          Add to Cart
        </button>
      </Link>
      <div className="pt-4 pb-2">
        <div className="flex items-center gap-2 mb-1.5">
          <StarRating rating={product.rating} />
          <span className="font-manrope text-[10px] text-velmora-text-muted">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-${product.titleId}`}
            className="font-cormorant text-base uppercase tracking-widest-sm font-medium text-velmora-obsidian hover:text-velmora-gold transition-colors duration-200 leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-${product.descId}`} className="font-manrope text-xs text-velmora-text-muted mt-1 line-clamp-1">
          {product.subtitle}
        </p>
        <p className="font-manrope text-sm font-medium text-velmora-obsidian mt-2">
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, activePriceRange, sort]);

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === 'all') params.delete('category');
    else params.set('category', cat);
    setSearchParams(params);
  };

  const setPriceRange = (range) => {
    const params = new URLSearchParams(searchParams);
    if (range === 'all') params.delete('price');
    else params.set('price', range);
    setSearchParams(params);
  };

  const filteredProducts = products
    .filter(p => {
      if (activeCategory !== 'all' && p.category !== activeCategory) return false;
      if (activePriceRange !== 'all') {
        const range = PRICE_RANGES.find(r => r.label === activePriceRange);
        if (range && (p.price < range.min || p.price > range.max)) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const activeFiltersCount = (activeCategory !== 'all' ? 1 : 0) + (activePriceRange !== 'all' ? 1 : 0);

  return (
    <div className="min-h-screen bg-velmora-linen pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-sand/30 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-manrope text-xs uppercase tracking-widest-xl text-velmora-gold mb-3 font-medium">
            Collection
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-velmora-obsidian tracking-wide">
            All Jewelry
          </h1>
          <p className="font-manrope text-sm text-velmora-text-muted mt-3">
            {filteredProducts.length} pieces
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-velmora-sand/30">
          {/* Filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="flex items-center gap-2 font-manrope text-xs uppercase tracking-widest-sm text-velmora-text-mid hover:text-velmora-obsidian transition-colors duration-200"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filter
            {activeFiltersCount > 0 && (
              <span className="bg-velmora-gold text-velmora-obsidian text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(v => !v)}
              className="flex items-center gap-2 font-manrope text-xs uppercase tracking-widest-sm text-velmora-text-mid hover:text-velmora-obsidian transition-colors duration-200"
            >
              Sort: {SORT_OPTIONS.find(o => o.value === sort)?.label}
              <ChevronDown size={12} strokeWidth={1.5} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-2 bg-velmora-linen border border-velmora-sand/40 shadow-gold-glow z-20 min-w-[180px]">
                {SORT_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => { setSort(opt.value); setSortOpen(false); }}
                    className={`w-full text-left px-4 py-3 font-manrope text-xs transition-colors duration-150 ${
                      sort === opt.value
                        ? 'text-velmora-gold bg-velmora-cream'
                        : 'text-velmora-text-mid hover:bg-velmora-cream hover:text-velmora-obsidian'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Filter sidebar */}
          {filterOpen && (
            <aside className="w-52 flex-shrink-0 animate-fadeInLeft">
              <div className="flex items-center justify-between mb-6">
                <span className="font-manrope text-xs uppercase tracking-widest-md font-semibold text-velmora-obsidian">
                  Filters
                </span>
                <button
                  onClick={() => setFilterOpen(false)}
                  className="text-velmora-text-muted hover:text-velmora-obsidian transition-colors"
                >
                  <X size={14} strokeWidth={1.5} />
                </button>
              </div>

              {/* Category filter */}
              <div className="mb-8">
                <p className="font-manrope text-[10px] uppercase tracking-widest-md text-velmora-text-muted mb-4 font-semibold">
                  Category
                </p>
                <div className="flex flex-col gap-2.5">
                  {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`text-left font-manrope text-xs capitalize transition-colors duration-200 ${
                        activeCategory === cat
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-text-mid hover:text-velmora-obsidian'
                      }`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <p className="font-manrope text-[10px] uppercase tracking-widest-md text-velmora-text-muted mb-4 font-semibold">
                  Price
                </p>
                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={() => setPriceRange('all')}
                    className={`text-left font-manrope text-xs transition-colors duration-200 ${
                      activePriceRange === 'all'
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-text-mid hover:text-velmora-obsidian'
                    }`}
                  >
                    All Prices
                  </button>
                  {PRICE_RANGES.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange(range.label)}
                      className={`text-left font-manrope text-xs transition-colors duration-200 ${
                        activePriceRange === range.label
                          ? 'text-velmora-gold font-medium'
                          : 'text-velmora-text-mid hover:text-velmora-obsidian'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={() => { setCategory('all'); setPriceRange('all'); }}
                  className="font-manrope text-[10px] uppercase tracking-widest-sm text-velmora-text-muted hover:text-velmora-gold transition-colors duration-200 border-b border-velmora-sand/50 pb-0.5"
                >
                  Clear All
                </button>
              )}
            </aside>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl font-light text-velmora-text-mid mb-3">
                  No pieces found
                </p>
                <p className="font-manrope text-sm text-velmora-text-muted">
                  Try adjusting your filters.
                </p>
              </div>
            ) : (
              <div className={`grid gap-4 md:gap-6 ${
                filterOpen
                  ? 'grid-cols-2 md:grid-cols-3'
                  : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
              }`}>
                {filteredProducts.map(product => (
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
