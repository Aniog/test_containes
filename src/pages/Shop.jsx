import { useEffect, useRef, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const categoryOptions = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-150', label: '$75 – $150' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-linen aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {product.badge && (
          <div className="absolute top-3 left-3 bg-obsidian text-ivory font-sans text-[9px] uppercase tracking-widest-sm font-medium px-2.5 py-1">
            {product.badge}
          </div>
        )}

        <div
          className={`absolute bottom-0 left-0 right-0 bg-ivory/95 py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest-sm font-medium text-ink hover:text-gold transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-3">
        <div className="flex items-center gap-1 mb-1.5">
          {[1, 2, 3, 4, 5].map(i => (
            <Star key={i} size={9} className={i <= Math.round(product.rating) ? 'text-gold fill-gold' : 'text-sand fill-sand'} />
          ))}
          <span className="font-sans text-[10px] text-muted ml-1">({product.reviewCount})</span>
        </div>
        <h3
          id={`shop-${product.titleId}`}
          className="font-serif text-sm uppercase tracking-widest-sm text-ink hover:text-gold transition-colors leading-tight mb-1"
        >
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </h3>
        <p id={`shop-${product.descId}`} className="hidden">{product.shortDescription}</p>
        <p className="font-sans text-sm font-medium text-ink">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value === 'all' || !value) next.delete(key);
    else next.set(key, value);
    setSearchParams(next);
  };

  const filteredProducts = products
    .filter(p => {
      if (activeCategory !== 'all' && p.category !== activeCategory) return false;
      if (activePriceRange !== 'all') {
        const [min, max] = activePriceRange.split('-').map(Number);
        if (p.price < min || p.price > max) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (activeSort === 'price-asc') return a.price - b.price;
      if (activeSort === 'price-desc') return b.price - a.price;
      if (activeSort === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, activeSort]);

  return (
    <div className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-linen border-b border-sand pt-20 md:pt-24 pb-10 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="font-sans text-xs uppercase tracking-widest-xl text-gold mb-2">Velmora</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-ink">
            {activeCategory === 'all'
              ? 'All Jewelry'
              : categoryOptions.find(c => c.value === activeCategory)?.label || 'Shop'}
          </h1>
          <p className="font-sans text-sm text-muted mt-2">{filteredProducts.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Filter bar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest-md font-medium text-stone hover:text-gold transition-colors border border-sand px-4 py-2"
          >
            <SlidersHorizontal size={12} strokeWidth={1.5} />
            Filters
          </button>

          {/* Desktop filters */}
          <div className="hidden md:flex items-center gap-6 flex-wrap">
            {/* Category */}
            <div className="flex items-center gap-2 flex-wrap">
              {categoryOptions.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setFilter('category', opt.value)}
                  className={`font-sans text-xs uppercase tracking-widest-sm font-medium px-3 py-1.5 border transition-colors ${
                    activeCategory === opt.value
                      ? 'border-gold bg-gold text-ivory'
                      : 'border-sand text-stone hover:border-gold hover:text-gold'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="w-px h-5 bg-sand" />

            {/* Price */}
            <div className="flex items-center gap-2">
              {priceRanges.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setFilter('price', opt.value)}
                  className={`font-sans text-xs uppercase tracking-widest-sm font-medium px-3 py-1.5 border transition-colors ${
                    activePriceRange === opt.value
                      ? 'border-gold bg-gold text-ivory'
                      : 'border-sand text-stone hover:border-gold hover:text-gold'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="relative ml-auto">
            <select
              value={activeSort}
              onChange={e => setFilter('sort', e.target.value)}
              className="appearance-none bg-transparent border border-sand font-sans text-xs uppercase tracking-widest-sm text-stone px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer hover:border-gold transition-colors"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} strokeWidth={1.5} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
          </div>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-4 bg-linen border border-sand">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs uppercase tracking-widest-md font-medium text-ink">Filters</span>
              <button onClick={() => setFilterOpen(false)} className="text-muted hover:text-ink">
                <X size={14} strokeWidth={1.5} />
              </button>
            </div>
            <div className="mb-4">
              <p className="font-sans text-[10px] uppercase tracking-widest-md text-muted mb-2">Category</p>
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setFilter('category', opt.value)}
                    className={`font-sans text-xs px-3 py-1.5 border transition-colors ${
                      activeCategory === opt.value ? 'border-gold bg-gold text-ivory' : 'border-sand text-stone'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-sans text-[10px] uppercase tracking-widest-md text-muted mb-2">Price</p>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setFilter('price', opt.value)}
                    className={`font-sans text-xs px-3 py-1.5 border transition-colors ${
                      activePriceRange === opt.value ? 'border-gold bg-gold text-ivory' : 'border-sand text-stone'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Product grid */}
        <div ref={containerRef}>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-muted font-light mb-2">No pieces found</p>
              <p className="font-sans text-sm text-whisper mb-6">Try adjusting your filters</p>
              <button
                onClick={() => setSearchParams({})}
                className="font-sans text-xs uppercase tracking-widest-md font-medium text-gold border border-gold px-6 py-2.5 hover:bg-gold hover:text-ivory transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
