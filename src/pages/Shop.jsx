import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

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
          data-strk-img-id={hovered ? `shop-hover-${product.imgId2}` : `shop-${product.imgId}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className={`absolute inset-x-0 bottom-0 bg-velmora-obsidian/90 py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <ShoppingBag size={13} strokeWidth={1.5} className="text-velmora-gold" />
          <button
            onClick={e => { e.preventDefault(); addItem(product); }}
            className="font-inter text-[10px] uppercase tracking-widest text-velmora-cream"
          >
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="pt-4 space-y-1.5">
        <div className="flex items-center gap-0.5">
          {[1,2,3,4,5].map(i => (
            <Star key={i} size={10} className={i <= Math.round(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-sand'} strokeWidth={1} />
          ))}
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 id={product.titleId} className="product-name text-sm hover:text-velmora-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p id={product.descId} className="font-inter text-xs text-velmora-text-muted line-clamp-1">
          {product.shortDescription}
        </p>
        <p className="font-cormorant text-xl text-velmora-obsidian">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
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
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
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
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="pt-20 md:pt-24 bg-velmora-cream min-h-screen">
      {/* Page header */}
      <div className="bg-velmora-linen border-b border-velmora-sand">
        <div className="section-container py-12 md:py-16 text-center">
          <p className="label-ui text-velmora-gold mb-2">Velmora Fine Jewelry</p>
          <h1 className="font-cormorant text-4xl md:text-6xl text-velmora-obsidian">The Collection</h1>
        </div>
      </div>

      <div className="section-container py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-velmora-text-secondary border border-velmora-sand px-4 py-2 hover:border-velmora-gold transition-colors"
            >
              <SlidersHorizontal size={13} strokeWidth={1.5} />
              Filters
            </button>
            <span className="font-inter text-xs text-velmora-text-muted hidden md:block">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="font-inter text-xs uppercase tracking-widest text-velmora-text-muted hidden md:block">Sort:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="font-inter text-xs text-velmora-text-secondary bg-transparent border border-velmora-sand px-3 py-2 focus:outline-none focus:border-velmora-gold cursor-pointer"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0 space-y-8">
            {/* Category */}
            <div>
              <h3 className="label-ui text-velmora-text-secondary mb-4">Category</h3>
              <div className="space-y-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`block w-full text-left font-inter text-sm capitalize transition-colors ${
                      activeCategory === cat
                        ? 'text-velmora-gold'
                        : 'text-velmora-text-secondary hover:text-velmora-gold'
                    }`}
                  >
                    {cat === 'All' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="hairline" />

            {/* Price */}
            <div>
              <h3 className="label-ui text-velmora-text-secondary mb-4">Price</h3>
              <div className="space-y-2">
                {PRICE_RANGES.map((range, i) => (
                  <button
                    key={range.label}
                    onClick={() => setActivePriceRange(i)}
                    className={`block w-full text-left font-inter text-sm transition-colors ${
                      activePriceRange === i
                        ? 'text-velmora-gold'
                        : 'text-velmora-text-secondary hover:text-velmora-gold'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-velmora-obsidian/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-velmora-cream p-6 space-y-8 overflow-y-auto">
                <div className="flex items-center justify-between">
                  <span className="font-cormorant text-xl text-velmora-obsidian">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={18} strokeWidth={1.5} className="text-velmora-text-muted" />
                  </button>
                </div>
                <div>
                  <h3 className="label-ui text-velmora-text-secondary mb-4">Category</h3>
                  <div className="space-y-3">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                        className={`block w-full text-left font-inter text-sm capitalize ${
                          activeCategory === cat ? 'text-velmora-gold' : 'text-velmora-text-secondary'
                        }`}
                      >
                        {cat === 'All' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="hairline" />
                <div>
                  <h3 className="label-ui text-velmora-text-secondary mb-4">Price</h3>
                  <div className="space-y-3">
                    {PRICE_RANGES.map((range, i) => (
                      <button
                        key={range.label}
                        onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                        className={`block w-full text-left font-inter text-sm ${
                          activePriceRange === i ? 'text-velmora-gold' : 'text-velmora-text-secondary'
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
                <p className="font-cormorant text-3xl text-velmora-text-secondary">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(0); }}
                  className="btn-outlined mt-6"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filtered.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
