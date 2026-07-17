import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const GOLD = '#C9A96E';
const EMPTY = '#E8E2D8';

const CATEGORIES = ['All', 'earrings', 'necklaces', 'huggies', 'sets'];
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
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="group flex flex-col">
      <div className="relative overflow-hidden bg-linen aspect-[3/4] product-img-wrap">
        <img
          data-strk-img-id={product.imgId}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <img
          data-strk-img-id={product.img2Id}
          data-strk-img={`[${product.titleId}] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => addItem(product, product.variants[0])}
            className="w-full bg-obsidian/90 text-cream font-manrope text-[11px] font-semibold tracking-[0.12em] uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-obsidian transition-colors"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3">
            <span className="font-manrope text-[9px] font-semibold tracking-[0.1em] uppercase bg-gold text-obsidian px-2 py-1">
              Bestseller
            </span>
          </div>
        )}
      </div>
      <div className="pt-4">
        <div className="flex items-start justify-between gap-2">
          <p id={product.titleId} className="font-cormorant text-base font-medium tracking-[0.1em] uppercase text-ink leading-tight">
            <Link to={`/product/${product.slug}`} className="hover:text-gold transition-colors">
              {product.name}
            </Link>
          </p>
          <span className="font-manrope text-sm font-medium text-ink flex-shrink-0">${product.price}</span>
        </div>
        <p id={product.descId} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center gap-1 mt-1.5">
          {[1,2,3,4,5].map(i => (
            <Star key={i} size={9} strokeWidth={1} style={{ fill: i <= Math.round(product.rating) ? GOLD : EMPTY, color: i <= Math.round(product.rating) ? GOLD : EMPTY }} />
          ))}
          <span className="font-manrope text-[11px] text-muted ml-1">({product.reviewCount})</span>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
  const [activePriceIdx, setActivePriceIdx] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered = products
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .filter(p => {
      const range = PRICE_RANGES[activePriceIdx];
      return p.price >= range.min && p.price <= range.max;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="bg-parchment min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-manrope text-[11px] font-medium tracking-[0.2em] uppercase text-gold mb-3">
            Velmora
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-ink tracking-wide">
            All Jewelry
          </h1>
          <p className="font-manrope text-sm text-muted mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">

          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category */}
              <div className="mb-8">
                <h3 className="font-manrope text-[11px] font-semibold tracking-[0.15em] uppercase text-ink mb-4">
                  Category
                </h3>
                <div className="flex flex-col gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategory(cat)}
                      className={`text-left font-manrope text-xs transition-colors capitalize ${
                        activeCategory === cat
                          ? 'text-gold font-semibold'
                          : 'text-muted hover:text-ink'
                      }`}
                    >
                      {cat === 'All' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8 pt-6 border-t border-divider">
                <h3 className="font-manrope text-[11px] font-semibold tracking-[0.15em] uppercase text-ink mb-4">
                  Price
                </h3>
                <div className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceIdx(i)}
                      className={`text-left font-manrope text-xs transition-colors ${
                        activePriceIdx === i
                          ? 'text-gold font-semibold'
                          : 'text-muted hover:text-ink'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Mobile filter bar + sort */}
            <div className="flex items-center justify-between mb-6 gap-4">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(v => !v)}
                className="md:hidden flex items-center gap-2 font-manrope text-xs font-medium tracking-wide text-ink border border-divider px-4 py-2 hover:border-gold transition-colors"
              >
                <SlidersHorizontal size={13} strokeWidth={1.5} />
                Filter
              </button>

              {/* Sort */}
              <div className="flex items-center gap-3 ml-auto">
                <span className="font-manrope text-[11px] text-muted hidden md:block">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="font-manrope text-xs text-ink bg-transparent border border-divider px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {SORT_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile filter panel */}
            {filterOpen && (
              <div className="md:hidden bg-cream border border-divider p-5 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-manrope text-xs font-semibold tracking-[0.1em] uppercase text-ink">Filters</span>
                  <button onClick={() => setFilterOpen(false)} className="text-muted hover:text-ink">
                    <X size={16} strokeWidth={1.5} />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-manrope text-[11px] font-semibold tracking-[0.1em] uppercase text-ink mb-3">Category</p>
                    <div className="flex flex-col gap-2">
                      {CATEGORIES.map(cat => (
                        <button
                          key={cat}
                          onClick={() => { handleCategory(cat); setFilterOpen(false); }}
                          className={`text-left font-manrope text-xs capitalize ${activeCategory === cat ? 'text-gold font-semibold' : 'text-muted'}`}
                        >
                          {cat === 'All' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-manrope text-[11px] font-semibold tracking-[0.1em] uppercase text-ink mb-3">Price</p>
                    <div className="flex flex-col gap-2">
                      {PRICE_RANGES.map((range, i) => (
                        <button
                          key={range.label}
                          onClick={() => { setActivePriceIdx(i); setFilterOpen(false); }}
                          className={`text-left font-manrope text-xs ${activePriceIdx === i ? 'text-gold font-semibold' : 'text-muted'}`}
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
                <p className="font-cormorant text-2xl text-muted italic">No pieces match your filters.</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceIdx(0); }}
                  className="mt-4 font-manrope text-xs font-medium tracking-wide text-gold underline underline-offset-4"
                >
                  Clear filters
                </button>
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
