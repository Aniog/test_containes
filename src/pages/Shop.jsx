import { useEffect, useRef, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const CATEGORIES = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
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

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  return (
    <div className="group flex flex-col">
      <div className="relative overflow-hidden bg-linen aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-600 group-hover:opacity-0"
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`gold jewelry worn model [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-600 group-hover:opacity-100"
        />
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 bg-gold text-cream text-[9px] tracking-widest uppercase font-sans font-semibold px-2 py-1">
            Bestseller
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product)}
            className="w-full bg-obsidian/90 text-cream py-3 text-[10px] tracking-widest uppercase font-sans font-semibold hover:bg-obsidian transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="pt-4">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-${product.titleId}`}
            className="font-serif text-sm uppercase tracking-widest text-obsidian hover:text-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-${product.descId}`} className="text-xs text-muted font-sans mt-1">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-sans text-sm font-medium text-obsidian">${product.price}</span>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={9} className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-linen fill-linen'} />
              ))}
            </div>
            <span className="text-[10px] text-whisper font-sans">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';
  const activePriceIdx = parseInt(searchParams.get('price') || '0');
  const activeSort = searchParams.get('sort') || 'featured';

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    next.set(key, value);
    setSearchParams(next);
  };

  const filtered = products
    .filter(p => activeCategory === 'all' || p.category === activeCategory)
    .filter(p => {
      const range = PRICE_RANGES[activePriceIdx];
      return p.price >= range.min && p.price <= range.max;
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
  }, [activeCategory, activePriceIdx, activeSort]);

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-linen py-12 md:py-16 text-center">
        <p className="text-xs tracking-widest uppercase font-sans font-medium text-gold mb-3">
          {activeCategory === 'all' ? 'All Jewelry' : activeCategory}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
          {activeCategory === 'all' ? 'The Collection' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
        </h1>
        <div className="w-10 h-px bg-gold mx-auto mt-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-linen">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-sans font-medium text-obsidian border border-linen px-4 py-2 hover:border-obsidian transition-colors"
            >
              <SlidersHorizontal size={12} />
              Filters
            </button>
            <span className="text-xs text-whisper font-sans">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted font-sans hidden md:block">Sort by:</span>
            <select
              value={activeSort}
              onChange={e => setParam('sort', e.target.value)}
              className="text-xs font-sans text-obsidian bg-transparent border border-linen px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar filters — desktop always visible, mobile toggle */}
          <aside className={`${filterOpen ? 'block' : 'hidden'} md:block w-full md:w-48 flex-shrink-0`}>
            {/* Mobile close */}
            <div className="flex items-center justify-between mb-6 md:hidden">
              <span className="text-xs tracking-widest uppercase font-sans font-semibold text-obsidian">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X size={16} className="text-muted" />
              </button>
            </div>

            {/* Category filter */}
            <div className="mb-8">
              <h3 className="text-xs tracking-widest uppercase font-sans font-semibold text-obsidian mb-4">
                Category
              </h3>
              <div className="flex flex-col gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setParam('category', cat)}
                    className={`text-left text-xs font-sans capitalize transition-colors ${
                      activeCategory === cat
                        ? 'text-gold font-semibold'
                        : 'text-muted hover:text-obsidian'
                    }`}
                  >
                    {cat === 'all' ? 'All Jewelry' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="text-xs tracking-widest uppercase font-sans font-semibold text-obsidian mb-4">
                Price
              </h3>
              <div className="flex flex-col gap-2">
                {PRICE_RANGES.map((range, i) => (
                  <button
                    key={i}
                    onClick={() => setParam('price', i)}
                    className={`text-left text-xs font-sans transition-colors ${
                      activePriceIdx === i
                        ? 'text-gold font-semibold'
                        : 'text-muted hover:text-obsidian'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material filter */}
            <div>
              <h3 className="text-xs tracking-widest uppercase font-sans font-semibold text-obsidian mb-4">
                Material
              </h3>
              <div className="flex flex-col gap-2">
                {['All', '18K Gold Plated', 'Sterling Silver'].map(m => (
                  <button
                    key={m}
                    className="text-left text-xs font-sans text-muted hover:text-obsidian transition-colors"
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-muted font-light">No pieces found</p>
                <p className="text-xs text-whisper font-sans mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
