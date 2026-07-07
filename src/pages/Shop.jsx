import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = [
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

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          strokeWidth={1}
          style={s <= Math.round(rating) ? { fill: '#C9A96E', color: '#C9A96E' } : { fill: 'none', color: '#E8E0D4' }}
        />
      ))}
    </div>
  );
}

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="group">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-parchment aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span id={`shop-${product.titleId}`} className="sr-only">{product.name}</span>
        <span id={`shop-${product.descId}`} className="sr-only">{product.shortDescription}</span>

        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full bg-obsidian/90 text-ivory py-3.5 font-sans text-xs tracking-widest uppercase font-medium hover:bg-gold transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>

        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3 bg-gold text-ivory px-2.5 py-1 font-sans text-[9px] tracking-widest uppercase font-medium">
            Bestseller
          </div>
        )}
      </Link>
      <div className="pt-4">
        <div className="flex items-start justify-between gap-2">
          <p className="font-serif text-sm uppercase tracking-widest text-ink leading-tight">{product.name}</p>
          <span className="font-sans text-sm font-medium text-ink flex-shrink-0">${product.price}</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <StarRating rating={product.rating} />
          <span className="font-sans text-[10px] text-whisper">({product.reviewCount})</span>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceRange = searchParams.get('price') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' || value === 'featured') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filteredProducts = products
    .filter((p) => {
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
    window.scrollTo(0, 0);
  }, []);

  const FilterSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase font-medium text-ink mb-4">Category</h3>
        <ul className="space-y-2.5">
          {categories.map((cat) => (
            <li key={cat.value}>
              <button
                onClick={() => setFilter('category', cat.value)}
                className={`font-sans text-sm transition-colors duration-300 ${
                  activeCategory === cat.value
                    ? 'text-gold font-medium'
                    : 'text-muted hover:text-gold'
                }`}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase font-medium text-ink mb-4">Price</h3>
        <ul className="space-y-2.5">
          {priceRanges.map((range) => (
            <li key={range.value}>
              <button
                onClick={() => setFilter('price', range.value)}
                className={`font-sans text-sm transition-colors duration-300 ${
                  activePriceRange === range.value
                    ? 'text-gold font-medium'
                    : 'text-muted hover:text-gold'
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-widest uppercase font-medium text-ink mb-4">Material</h3>
        <ul className="space-y-2.5">
          {['18K Gold Plated', 'Sterling Silver'].map((m) => (
            <li key={m}>
              <button className="font-sans text-sm text-muted hover:text-gold transition-colors duration-300">
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-parchment border-b border-stone pt-24 md:pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink font-light">All Jewelry</h1>
          <p className="font-sans text-sm text-muted mt-3">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-ink border border-stone px-4 py-2.5 hover:border-gold hover:text-gold transition-all duration-300"
          >
            <SlidersHorizontal size={13} strokeWidth={1.5} />
            Filters
          </button>

          <div className="relative">
            <select
              value={activeSort}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="appearance-none bg-transparent border border-stone px-4 py-2.5 pr-8 font-sans text-xs tracking-widest uppercase text-ink focus:outline-none focus:border-gold cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} strokeWidth={1.5} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10 md:gap-14">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-8">
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs text-muted">Sort by:</span>
                <div className="relative">
                  <select
                    value={activeSort}
                    onChange={(e) => setFilter('sort', e.target.value)}
                    className="appearance-none bg-transparent border border-stone px-4 py-2 pr-8 font-sans text-xs tracking-widest uppercase text-ink focus:outline-none focus:border-gold cursor-pointer"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} strokeWidth={1.5} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-muted font-light">No products found</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 bg-obsidian/40 z-50"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-ivory z-50 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <span className="font-sans text-xs tracking-widest uppercase font-medium text-ink">Filters</span>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="text-muted hover:text-ink transition-colors duration-300"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </>
      )}
    </div>
  );
}
