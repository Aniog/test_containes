import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

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
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-parchment aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          data-strk-img-id={`shop-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full bg-obsidian/90 text-cream font-manrope text-[10px] uppercase tracking-[0.14em] py-3 flex items-center justify-center gap-2 hover:bg-gold transition-colors duration-300"
          >
            <ShoppingBag size={11} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3">
            <span className="font-manrope text-[9px] uppercase tracking-[0.1em] bg-gold text-cream px-2 py-0.5">
              Bestseller
            </span>
          </div>
        )}
      </Link>
      <div className="pt-3 pb-2">
        <p className="font-manrope text-[9px] uppercase tracking-[0.12em] text-ink-faint mb-1 capitalize">
          {product.category}
        </p>
        <h3
          id={`shop-${product.titleId}`}
          className="font-cormorant text-sm uppercase tracking-[0.1em] text-ink hover:text-gold transition-colors duration-300 leading-tight"
        >
          {product.name}
        </h3>
        <p id={`shop-${product.descId}`} className="sr-only">{product.description}</p>
        <div className="flex items-center justify-between mt-1.5">
          <span className="font-manrope text-sm font-medium text-ink">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={9} fill="#C9A96E" stroke="none" />
            <span className="font-manrope text-[10px] text-ink-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products
    .filter(p => activeCategory === 'all' || p.category === activeCategory)
    .filter(p => {
      const range = PRICE_RANGES[activePriceRange];
      return p.price >= range.min && p.price <= range.max;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="min-h-screen bg-cream pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-parchment border-b border-linen py-12 md:py-16 text-center">
        <p className="font-manrope text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
          Velmora Fine Jewelry
        </p>
        <h1 className="font-cormorant text-4xl md:text-5xl font-light text-ink">
          {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
        </h1>
        <p className="font-manrope text-xs text-ink-muted mt-3">
          {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-linen">
          {/* Category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-manrope text-[10px] uppercase tracking-[0.12em] px-4 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'border-gold bg-gold text-cream'
                    : 'border-linen text-ink-muted hover:border-ink-muted'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-manrope text-xs uppercase tracking-[0.12em] text-ink-muted border border-linen px-4 py-2"
          >
            <SlidersHorizontal size={13} strokeWidth={1.5} />
            Filter
          </button>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="font-manrope text-[10px] uppercase tracking-[0.12em] text-ink-faint hidden md:block">
              Sort:
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-linen font-manrope text-xs text-ink-muted px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} strokeWidth={1.5} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-faint pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Mobile filters panel */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-5 bg-parchment border border-linen">
            <div className="flex items-center justify-between mb-4">
              <span className="font-manrope text-xs uppercase tracking-[0.14em] text-ink">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X size={14} strokeWidth={1.5} className="text-ink-muted" />
              </button>
            </div>
            <div className="mb-5">
              <p className="font-manrope text-[10px] uppercase tracking-[0.12em] text-ink-faint mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                    className={`font-manrope text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 border transition-all ${
                      activeCategory === cat ? 'border-gold bg-gold text-cream' : 'border-linen text-ink-muted'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-manrope text-[10px] uppercase tracking-[0.12em] text-ink-faint mb-3">Price</p>
              <div className="flex flex-col gap-2">
                {PRICE_RANGES.map((range, i) => (
                  <button
                    key={i}
                    onClick={() => setActivePriceRange(i)}
                    className={`text-left font-manrope text-xs transition-colors ${
                      activePriceRange === i ? 'text-gold' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <p className="font-manrope text-[10px] uppercase tracking-[0.16em] text-ink-faint mb-4">
                  Category
                </p>
                <ul className="space-y-2.5">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className={`font-manrope text-xs transition-colors duration-300 ${
                          activeCategory === cat
                            ? 'text-gold font-medium'
                            : 'text-ink-muted hover:text-ink'
                        }`}
                      >
                        {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-linen">
                <p className="font-manrope text-[10px] uppercase tracking-[0.16em] text-ink-faint mb-4">
                  Price
                </p>
                <ul className="space-y-2.5">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={i}>
                      <button
                        onClick={() => setActivePriceRange(i)}
                        className={`font-manrope text-xs transition-colors duration-300 ${
                          activePriceRange === i
                            ? 'text-gold font-medium'
                            : 'text-ink-muted hover:text-ink'
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

          {/* Product Grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-ink-muted italic">No pieces found</p>
                <button
                  onClick={() => { handleCategoryChange('all'); setActivePriceRange(0); }}
                  className="mt-4 font-manrope text-xs uppercase tracking-[0.12em] text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
