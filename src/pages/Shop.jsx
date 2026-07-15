import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const categoryOptions = [
  { value: '', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: '', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-120', label: '$75 – $120' },
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
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          className="w-3 h-3"
          style={i <= Math.round(rating)
            ? { fill: '#C9A96E', color: '#C9A96E' }
            : { fill: 'none', color: '#E8E0D5' }
          }
        />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="product-card group">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream" style={{ aspectRatio: '3/4' }}>
        <img
          className="product-image-primary absolute inset-0 w-full h-full object-cover"
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
        />
        <img
          className="product-image-secondary absolute inset-0 w-full h-full object-cover"
          data-strk-img-id={`shop-alt-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry close up`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
        />
        {product.badge && (
          <div
            className="absolute top-3 left-3 font-manrope text-[10px] tracking-widest uppercase px-2.5 py-1"
            style={{ backgroundColor: '#1A1614', color: '#FAF7F2' }}
          >
            {product.badge}
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full font-manrope text-xs tracking-widest uppercase py-3.5 flex items-center justify-center gap-2 transition-colors"
            style={{ backgroundColor: '#1A1614', color: '#FAF7F2' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2C2420'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#1A1614'; }}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="pt-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Link to={`/product/${product.slug}`}>
              <h3 id={`shop-${product.titleId}`} className="font-cormorant text-base uppercase tracking-[0.1em] text-velmora-obsidian font-medium hover:text-velmora-gold-muted transition-colors">
                {product.name}
              </h3>
            </Link>
            <p id={`shop-${product.descId}`} className="font-manrope text-xs text-velmora-text-muted mt-0.5">
              {product.shortDescription}
            </p>
          </div>
          <span className="font-manrope text-sm font-medium text-velmora-obsidian flex-shrink-0">${product.price}</span>
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          <StarRating rating={product.rating} />
          <span className="font-manrope text-[11px] text-velmora-text-muted">({product.reviewCount})</span>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [priceRange, setPriceRange] = useState('');
  const [sort, setSort] = useState('featured');
  const containerRef = useRef(null);

  // Sync category from URL
  useEffect(() => {
    setCategory(searchParams.get('category') || '');
  }, [searchParams]);

  // Filter & sort products
  const filtered = products
    .filter(p => !category || p.category === category)
    .filter(p => {
      if (!priceRange) return true;
      const [min, max] = priceRange.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, priceRange, sort]);

  const activeCategory = categoryOptions.find(c => c.value === category);

  return (
    <div className="bg-velmora-ivory min-h-screen pt-16 lg:pt-20">
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-border py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-manrope text-xs tracking-widest uppercase text-velmora-gold mb-2">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-cormorant text-4xl lg:text-5xl font-light text-velmora-obsidian">
            {activeCategory?.label || 'All Jewelry'}
          </h1>
          <p className="font-manrope text-sm text-velmora-text-muted mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-5 border-b border-velmora-border">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="lg:hidden flex items-center gap-2 font-manrope text-xs tracking-widest uppercase text-velmora-text-muted hover:text-velmora-obsidian transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden lg:flex items-center gap-2 flex-wrap">
            {categoryOptions.map(opt => (
              <button
                key={opt.value}
                onClick={() => {
                  setCategory(opt.value);
                  setSearchParams(opt.value ? { category: opt.value } : {});
                }}
                className="px-4 py-1.5 font-manrope text-xs tracking-widest uppercase border transition-all duration-200"
                style={
                  category === opt.value
                    ? { backgroundColor: '#1A1614', color: '#FAF7F2', borderColor: '#1A1614' }
                    : { backgroundColor: 'transparent', color: '#6B5E54', borderColor: '#E8E0D5' }
                }
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="font-manrope text-xs text-velmora-text-muted hidden sm:block">Sort:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="appearance-none bg-transparent border border-velmora-border font-manrope text-xs text-velmora-obsidian px-3 py-2 pr-7 focus:outline-none focus:border-velmora-obsidian cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-velmora-text-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-manrope text-xs tracking-widest uppercase text-velmora-obsidian mb-4">
                  Category
                </h3>
                <ul className="space-y-2">
                  {categoryOptions.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => {
                          setCategory(opt.value);
                          setSearchParams(opt.value ? { category: opt.value } : {});
                        }}
                        className={`font-manrope text-sm transition-colors ${
                          category === opt.value
                            ? 'text-velmora-obsidian font-medium'
                            : 'text-velmora-text-muted hover:text-velmora-obsidian'
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-manrope text-xs tracking-widest uppercase text-velmora-obsidian mb-4">
                  Price
                </h3>
                <ul className="space-y-2">
                  {priceRanges.map(opt => (
                    <li key={opt.value}>
                      <button
                        onClick={() => setPriceRange(opt.value)}
                        className={`font-manrope text-sm transition-colors ${
                          priceRange === opt.value
                            ? 'text-velmora-obsidian font-medium'
                            : 'text-velmora-text-muted hover:text-velmora-obsidian'
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-manrope text-xs tracking-widest uppercase text-velmora-obsidian mb-4">
                  Material
                </h3>
                <ul className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver'].map(m => (
                    <li key={m}>
                      <button className="font-manrope text-sm text-velmora-text-muted hover:text-velmora-obsidian transition-colors">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="lg:hidden fixed inset-0 z-50 flex">
              <div className="absolute inset-0 bg-velmora-obsidian/40" onClick={() => setFilterOpen(false)} />
              <div className="relative bg-velmora-ivory w-72 h-full ml-auto p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-manrope text-xs tracking-widest uppercase text-velmora-obsidian">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X className="w-5 h-5 text-velmora-text-muted" />
                  </button>
                </div>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-manrope text-xs tracking-widest uppercase text-velmora-obsidian mb-4">Category</h3>
                    <ul className="space-y-3">
                      {categoryOptions.map(opt => (
                        <li key={opt.value}>
                          <button
                            onClick={() => {
                              setCategory(opt.value);
                              setSearchParams(opt.value ? { category: opt.value } : {});
                              setFilterOpen(false);
                            }}
                            className={`font-manrope text-sm ${category === opt.value ? 'text-velmora-obsidian font-medium' : 'text-velmora-text-muted'}`}
                          >
                            {opt.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-manrope text-xs tracking-widest uppercase text-velmora-obsidian mb-4">Price</h3>
                    <ul className="space-y-3">
                      {priceRanges.map(opt => (
                        <li key={opt.value}>
                          <button
                            onClick={() => { setPriceRange(opt.value); setFilterOpen(false); }}
                            className={`font-manrope text-sm ${priceRange === opt.value ? 'text-velmora-obsidian font-medium' : 'text-velmora-text-muted'}`}
                          >
                            {opt.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-velmora-text-muted mb-4">No pieces found</p>
                <button
                  onClick={() => { setCategory(''); setPriceRange(''); setSearchParams({}); }}
                  className="font-manrope text-xs tracking-widest uppercase border border-velmora-obsidian text-velmora-obsidian px-6 py-3 hover:bg-velmora-obsidian hover:text-velmora-ivory transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
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
