import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

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

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-velmora-linen aspect-portrait mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 font-inter text-[10px] font-medium uppercase tracking-widest bg-velmora-obsidian text-velmora-white px-2.5 py-1">
            Bestseller
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-velmora-white font-inter text-xs font-medium uppercase tracking-widest py-3.5 hover:bg-velmora-obsidian transition-colors duration-300"
          >
            {added ? '✓ Added' : 'Quick Add'}
          </button>
        </div>
      </div>
      <p
        id={product.titleId}
        className="font-cormorant text-base font-medium uppercase tracking-widest text-velmora-obsidian mb-1 group-hover:text-velmora-gold-dark transition-colors duration-300"
      >
        {product.name}
      </p>
      <p id={product.descId} className="sr-only">{product.shortDescription}</p>
      <div className="flex items-center justify-between">
        <span className="font-inter text-sm font-light text-velmora-obsidian">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" strokeWidth={0} />
          <span className="font-inter text-xs text-velmora-muted">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const categoryParam = searchParams.get('category') || '';
  const priceParam = searchParams.get('price') || '';

  const setCategory = (val) => {
    const next = new URLSearchParams(searchParams);
    if (val) next.set('category', val); else next.delete('category');
    setSearchParams(next);
  };

  const setPrice = (val) => {
    const next = new URLSearchParams(searchParams);
    if (val) next.set('price', val); else next.delete('price');
    setSearchParams(next);
  };

  const filtered = products
    .filter((p) => !categoryParam || p.category === categoryParam)
    .filter((p) => {
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

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryParam, priceParam, sort]);

  const activeFilters = [
    categoryParam && categoryOptions.find((c) => c.value === categoryParam)?.label,
    priceParam && priceRanges.find((r) => r.value === priceParam)?.label,
  ].filter(Boolean);

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-velmora-linen border-b border-velmora-stone py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="font-inter text-xs font-medium uppercase tracking-widest text-velmora-gold mb-3">
            Collection
          </p>
          <h1 className="font-cormorant font-light text-4xl md:text-5xl text-velmora-obsidian">
            {categoryParam
              ? categoryOptions.find((c) => c.value === categoryParam)?.label || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="font-inter text-sm font-light text-velmora-muted mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Filter toggle (mobile) + active filters */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setFilterOpen((v) => !v)}
              className="md:hidden flex items-center gap-2 font-inter text-xs font-medium uppercase tracking-widest text-velmora-obsidian border border-velmora-stone px-4 py-2.5 hover:border-velmora-gold transition-colors duration-300"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
              Filters
            </button>
            {activeFilters.map((f) => (
              <span key={f} className="flex items-center gap-1.5 font-inter text-xs text-velmora-obsidian bg-velmora-linen border border-velmora-stone px-3 py-1.5">
                {f}
                <button
                  onClick={() => {
                    if (categoryOptions.find((c) => c.label === f)) setCategory('');
                    else setPrice('');
                  }}
                  className="text-velmora-muted hover:text-velmora-obsidian"
                >
                  <X className="w-3 h-3" strokeWidth={2} />
                </button>
              </span>
            ))}
          </div>

          {/* Sort */}
          <div className="relative flex items-center gap-2">
            <span className="font-inter text-xs text-velmora-muted uppercase tracking-widest hidden md:block">Sort:</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none font-inter text-xs font-medium uppercase tracking-widest text-velmora-obsidian bg-transparent border border-velmora-stone px-4 py-2.5 pr-8 focus:outline-none focus:border-velmora-gold cursor-pointer"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-velmora-muted pointer-events-none" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <FilterGroup
                title="Category"
                options={categoryOptions}
                value={categoryParam}
                onChange={setCategory}
              />
              <div className="mt-8">
                <FilterGroup
                  title="Price"
                  options={priceRanges}
                  value={priceParam}
                  onChange={setPrice}
                />
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-velmora-obsidian/40 cart-overlay" onClick={() => setFilterOpen(false)}>
              <div
                className="absolute left-0 top-0 bottom-0 w-72 bg-velmora-cream p-8 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="font-cormorant text-xl text-velmora-obsidian">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X className="w-5 h-5 text-velmora-muted" strokeWidth={1.5} />
                  </button>
                </div>
                <FilterGroup title="Category" options={categoryOptions} value={categoryParam} onChange={(v) => { setCategory(v); setFilterOpen(false); }} />
                <div className="mt-8">
                  <FilterGroup title="Price" options={priceRanges} value={priceParam} onChange={(v) => { setPrice(v); setFilterOpen(false); }} />
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-3xl font-light text-velmora-obsidian mb-3">No pieces found</p>
                <p className="font-inter text-sm text-velmora-muted mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => { setCategory(''); setPrice(''); }}
                  className="font-inter text-xs uppercase tracking-widest text-velmora-gold border-b border-velmora-gold"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
                {filtered.map((p) => (
                  <ShopProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div>
      <p className="font-inter text-xs font-medium uppercase tracking-widest text-velmora-obsidian mb-4">
        {title}
      </p>
      <div className="flex flex-col gap-2.5">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`text-left font-inter text-xs transition-colors duration-300 ${
              value === opt.value
                ? 'text-velmora-gold font-medium'
                : 'text-velmora-muted hover:text-velmora-obsidian'
            }`}
          >
            {value === opt.value && <span className="mr-2 text-velmora-gold">—</span>}
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
