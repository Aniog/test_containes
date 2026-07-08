import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

const CATEGORIES = [
  { value: '', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const PRICE_RANGES = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-120', label: '$75 – $120' },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={11} strokeWidth={1} color={i <= Math.round(rating) ? '#C9A96E' : '#E8DFD0'} fill={i <= Math.round(rating) ? '#C9A96E' : 'none'} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-linen aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full bg-velmora-obsidian/90 text-white py-3 text-[11px] font-medium tracking-[0.15em] uppercase flex items-center justify-center gap-2 hover:bg-velmora-gold transition-colors duration-300"
          >
            <ShoppingBag size={13} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
        {product.tags.includes('new') && (
          <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] font-medium tracking-[0.1em] uppercase px-2 py-1">New</span>
        )}
      </Link>
      <div className="pt-4 pb-2">
        <div className="flex items-center justify-between mb-1.5">
          <StarRating rating={product.rating} />
          <span className="text-[11px] text-velmora-subtle">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 id={`shop-${product.titleId}`} className="font-serif text-sm font-medium tracking-[0.1em] uppercase text-velmora-ink hover:text-velmora-gold transition-colors leading-tight">
            {product.name}
          </h3>
        </Link>
        <p id={`shop-${product.descId}`} className="sr-only">{product.shortDescription}</p>
        <p className="text-sm font-medium text-velmora-ink mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const categoryParam = searchParams.get('category') || '';
  const priceParam = searchParams.get('price') || '';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [categoryParam, priceParam, sort]);

  const setCategory = (val) => {
    const params = new URLSearchParams(searchParams);
    if (val) params.set('category', val); else params.delete('category');
    setSearchParams(params);
  };

  const setPrice = (val) => {
    const params = new URLSearchParams(searchParams);
    if (val) params.set('price', val); else params.delete('price');
    setSearchParams(params);
  };

  const filtered = products
    .filter(p => !categoryParam || p.category === categoryParam)
    .filter(p => {
      if (!priceParam) return true;
      const [min, max] = priceParam.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const activeFilters = [
    categoryParam && CATEGORIES.find(c => c.value === categoryParam)?.label,
    priceParam && PRICE_RANGES.find(p => p.value === priceParam)?.label,
  ].filter(Boolean);

  return (
    <div className="bg-velmora-cream min-h-screen pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-velmora-linen border-b border-velmora-sand py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-3">
            {categoryParam ? CATEGORIES.find(c => c.value === categoryParam)?.label : 'All Jewelry'}
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-light text-velmora-ink tracking-wide">
            {categoryParam ? CATEGORIES.find(c => c.value === categoryParam)?.label : 'The Collection'}
          </h1>
          <div className="w-12 h-px bg-velmora-gold mx-auto mt-5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-velmora-sand">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="md:hidden flex items-center gap-2 text-xs font-medium tracking-[0.12em] uppercase text-velmora-stone border border-velmora-sand px-4 py-2.5 hover:border-velmora-gold hover:text-velmora-gold transition-colors"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              Filters
            </button>
            <span className="text-xs text-velmora-muted">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
            {activeFilters.map(f => (
              <span key={f} className="hidden md:flex items-center gap-1.5 text-[11px] font-medium bg-velmora-linen border border-velmora-sand px-3 py-1.5 text-velmora-stone">
                {f}
                <button onClick={() => { setCategory(''); setPrice(''); }} className="hover:text-velmora-gold">
                  <X size={11} />
                </button>
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden md:block text-xs font-medium tracking-[0.1em] uppercase text-velmora-muted">Sort:</span>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="text-xs font-medium text-velmora-ink bg-transparent border border-velmora-sand px-3 py-2.5 focus:outline-none focus:border-velmora-gold cursor-pointer"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="text-xs font-medium tracking-[0.18em] uppercase text-velmora-ink mb-4">Category</h3>
                <ul className="flex flex-col gap-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat.value}>
                      <button
                        onClick={() => setCategory(cat.value)}
                        className={`text-sm transition-colors ${
                          categoryParam === cat.value
                            ? 'text-velmora-gold font-medium'
                            : 'text-velmora-muted hover:text-velmora-ink'
                        }`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hairline pt-6">
                <h3 className="text-xs font-medium tracking-[0.18em] uppercase text-velmora-ink mb-4">Price</h3>
                <ul className="flex flex-col gap-2">
                  {PRICE_RANGES.map(range => (
                    <li key={range.value}>
                      <button
                        onClick={() => setPrice(range.value)}
                        className={`text-sm transition-colors ${
                          priceParam === range.value
                            ? 'text-velmora-gold font-medium'
                            : 'text-velmora-muted hover:text-velmora-ink'
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

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-50">
              <div className="absolute inset-0 bg-velmora-obsidian/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-velmora-cream p-6 animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg font-light text-velmora-ink">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}><X size={20} strokeWidth={1.5} className="text-velmora-stone" /></button>
                </div>
                <div className="mb-6">
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-ink mb-3">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat.value}
                        onClick={() => { setCategory(cat.value); setFilterOpen(false); }}
                        className={`px-4 py-2 text-xs font-medium border transition-colors ${
                          categoryParam === cat.value
                            ? 'border-velmora-gold bg-velmora-gold text-white'
                            : 'border-velmora-sand text-velmora-stone hover:border-velmora-gold'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-ink mb-3">Price</p>
                  <div className="flex flex-wrap gap-2">
                    {PRICE_RANGES.map(range => (
                      <button
                        key={range.value}
                        onClick={() => { setPrice(range.value); setFilterOpen(false); }}
                        className={`px-4 py-2 text-xs font-medium border transition-colors ${
                          priceParam === range.value
                            ? 'border-velmora-gold bg-velmora-gold text-white'
                            : 'border-velmora-sand text-velmora-stone hover:border-velmora-gold'
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
          <div ref={containerRef} className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl font-light text-velmora-muted mb-4">No pieces found</p>
                <button
                  onClick={() => { setCategory(''); setPrice(''); }}
                  className="text-xs font-medium tracking-widest uppercase text-velmora-gold border-b border-velmora-gold pb-0.5"
                >
                  Clear Filters
                </button>
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
    </div>
  );
}
