import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const [priceRange, setPriceRange] = useState(0);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const categoryParam = searchParams.get('category') || 'all';

  const setCategory = (cat) => {
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filtered = products
    .filter((p) => {
      if (categoryParam !== 'all' && p.category !== categoryParam) return false;
      const range = priceRanges[priceRange];
      if (p.price < range.min || p.price > range.max) return false;
      return true;
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
  }, [categoryParam, priceRange, sort]);

  return (
    <div className="bg-parchment min-h-screen pt-16 lg:pt-20">
      {/* Page header */}
      <div className="bg-linen border-b border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <p className="font-manrope text-[10px] tracking-[0.25em] uppercase text-gold mb-2">
            Velmora
          </p>
          <h1 className="font-cormorant text-4xl lg:text-5xl font-light text-obsidian">
            {categoryParam === 'all'
              ? 'All Jewelry'
              : categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)}
          </h1>
          <p className="font-manrope text-sm text-ink-muted mt-2">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <FilterSidebar
              categoryParam={categoryParam}
              setCategory={setCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
              <button
                onClick={() => setFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 font-manrope text-xs tracking-[0.1em] uppercase text-ink-muted hover:text-obsidian transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="font-manrope text-[10px] tracking-[0.1em] uppercase text-ink-muted hidden sm:block">
                  Sort:
                </span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="font-manrope text-xs text-obsidian bg-transparent border border-sand px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category pills — mobile */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 mb-6 lg:hidden">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`flex-shrink-0 font-manrope text-[10px] tracking-[0.1em] uppercase px-4 py-2 border transition-all duration-200 ${
                    categoryParam === cat
                      ? 'border-obsidian bg-obsidian text-cream'
                      : 'border-sand text-ink-muted hover:border-obsidian'
                  }`}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl italic text-ink-muted">
                  No pieces found
                </p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange(0); }}
                  className="mt-4 font-manrope text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div
                ref={containerRef}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6"
              >
                {filtered.map((product) => (
                  <ShopProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => addItem(product)}
                  />
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
            className="fixed inset-0 z-50 bg-obsidian/40 cart-overlay"
            onClick={() => setFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-parchment rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="font-cormorant text-xl text-obsidian">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-5 h-5 text-ink-muted" />
              </button>
            </div>
            <FilterSidebar
              categoryParam={categoryParam}
              setCategory={(c) => { setCategory(c); setFilterOpen(false); }}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>
        </>
      )}
    </div>
  );
}

function FilterSidebar({ categoryParam, setCategory, priceRange, setPriceRange }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <p className="font-manrope text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
          Category
        </p>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`text-left font-manrope text-xs tracking-[0.05em] capitalize transition-colors duration-200 ${
                categoryParam === cat
                  ? 'text-obsidian font-medium'
                  : 'text-ink-muted hover:text-obsidian'
              }`}
            >
              {cat === 'all' ? 'All Jewelry' : cat}
              {categoryParam === cat && (
                <span className="ml-2 text-gold">—</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-sand" />

      {/* Price */}
      <div>
        <p className="font-manrope text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
          Price
        </p>
        <div className="flex flex-col gap-2">
          {priceRanges.map((range, idx) => (
            <button
              key={range.label}
              onClick={() => setPriceRange(idx)}
              className={`text-left font-manrope text-xs tracking-[0.05em] transition-colors duration-200 ${
                priceRange === idx
                  ? 'text-obsidian font-medium'
                  : 'text-ink-muted hover:text-obsidian'
              }`}
            >
              {range.label}
              {priceRange === idx && (
                <span className="ml-2 text-gold">—</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-sand" />

      {/* Material */}
      <div>
        <p className="font-manrope text-[10px] tracking-[0.2em] uppercase text-gold mb-4">
          Material
        </p>
        <div className="flex flex-col gap-2">
          {['18K Gold Plated', 'Sterling Silver'].map((m) => (
            <label key={m} className="flex items-center gap-2 cursor-pointer group">
              <div className="w-3.5 h-3.5 border border-sand group-hover:border-gold transition-colors" />
              <span className="font-manrope text-xs text-ink-muted group-hover:text-obsidian transition-colors">
                {m}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShopProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={product.imgId2}
          data-strk-img={`[${product.titleId}] [${product.descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={(e) => { e.preventDefault(); onAddToCart(); }}
            className="w-full bg-obsidian/90 text-cream font-manrope text-[10px] tracking-[0.15em] uppercase py-3 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
          >
            <ShoppingBag className="w-3 h-3" />
            Quick Add
          </button>
        </div>
      </div>

      <Link to={`/product/${product.slug}`}>
        <p
          id={product.titleId}
          className="font-cormorant text-sm uppercase tracking-[0.1em] text-obsidian group-hover:text-gold transition-colors duration-300 leading-tight mb-1"
        >
          {product.name}
        </p>
        <p
          id={product.descId}
          className="font-manrope text-[11px] text-ink-muted mb-2"
        >
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-manrope text-sm font-medium text-obsidian">
            ${product.price}
          </span>
          <div className="flex items-center gap-1">
            <Star className="w-2.5 h-2.5 fill-gold text-gold" />
            <span className="font-manrope text-[10px] text-ink-muted">
              {product.rating}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
