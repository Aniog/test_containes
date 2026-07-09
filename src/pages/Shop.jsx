import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const CATEGORIES = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          size={10}
          style={{
            fill: i <= Math.round(rating) ? '#C9A96E' : '#EDE8DF',
            color: i <= Math.round(rating) ? '#C9A96E' : '#EDE8DF',
          }}
        />
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
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-parchment aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />
        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 font-sans text-[9px] tracking-widest uppercase bg-gold text-cream px-2 py-0.5">
            Bestseller
          </span>
        )}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={e => { e.preventDefault(); addItem(product); }}
            className="w-full bg-obsidian/90 text-cream font-sans text-xs tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-gold transition-colors"
          >
            <ShoppingBag size={12} />
            Quick Add
          </button>
        </div>
      </Link>
      <div className="mt-3 space-y-1">
        <StarRating rating={product.rating} />
        <h3 id={`shop-${product.titleId}`} className="product-name text-xs mt-1">{product.name}</h3>
        <p id={`shop-${product.descId}`} className="font-sans text-xs text-ink-muted">{product.shortDescription}</p>
        <p className="font-sans text-sm font-semibold text-ink">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
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

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    if (cat !== 'all') setSearchParams({ category: cat });
    else setSearchParams({});
  };

  return (
    <div className="bg-cream min-h-screen pt-16 lg:pt-20">
      {/* Page header */}
      <div className="bg-parchment border-b border-linen">
        <div className="section-container py-10 lg:py-14">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">Collection</p>
          <h1 className="font-serif text-3xl lg:text-4xl text-ink font-light">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="font-sans text-sm text-ink-muted mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="section-container py-8 lg:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-colors ${
                  activeCategory === cat
                    ? 'border-gold bg-gold text-cream'
                    : 'border-linen text-ink-muted hover:border-gold hover:text-gold'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-ink border border-linen px-4 py-2"
          >
            <SlidersHorizontal size={13} />
            Filter
          </button>

          {/* Sort */}
          <div className="relative flex items-center gap-2 ml-auto">
            <span className="font-sans text-xs text-ink-muted hidden sm:block">Sort:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="font-sans text-xs text-ink bg-transparent border border-linen px-3 py-2 pr-7 appearance-none focus:outline-none focus:border-gold cursor-pointer"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters */}
          <aside className={`${filterOpen ? 'block' : 'hidden'} md:block w-full md:w-52 flex-shrink-0`}>
            <div className="space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-ink mb-4 font-semibold">
                  Category
                </h3>
                <ul className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategory(cat)}
                        className={`font-sans text-sm transition-colors ${
                          activeCategory === cat ? 'text-gold font-medium' : 'text-ink-muted hover:text-gold'
                        }`}
                      >
                        {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-sans text-xs tracking-widest uppercase text-ink mb-4 font-semibold">
                  Price
                </h3>
                <ul className="space-y-2">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(i)}
                        className={`font-sans text-sm transition-colors ${
                          activePriceRange === i ? 'text-gold font-medium' : 'text-ink-muted hover:text-gold'
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
                <h3 className="font-sans text-xs tracking-widest uppercase text-ink mb-4 font-semibold">
                  Material
                </h3>
                <ul className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver'].map(m => (
                    <li key={m}>
                      <button className="font-sans text-sm text-ink-muted hover:text-gold transition-colors">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-ink-muted">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('all'); setActivePriceRange(0); }}
                  className="btn-outlined mt-6"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
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
