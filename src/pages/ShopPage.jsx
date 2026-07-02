import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

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
  { value: 'rating', label: 'Top Rated' },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={10}
          style={{
            color: s <= Math.round(rating) ? '#C9A96E' : '#EDE8DF',
            fill: s <= Math.round(rating) ? '#C9A96E' : '#EDE8DF',
          }}
        />
      ))}
    </div>
  );
}

function ShopProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group relative bg-cream overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[shop-title-${product.id}] gold jewelry worn detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-obsidian text-parchment font-sans text-[9px] tracking-widest uppercase px-2.5 py-1 z-10">
            {product.badge}
          </span>
        )}
        <div className={`absolute bottom-0 left-0 right-0 bg-obsidian/90 py-3 px-4 flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <ShoppingBag size={13} className="text-gold" />
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="font-sans text-[10px] tracking-widest uppercase text-parchment hover:text-gold transition-colors"
          >
            Quick Add
          </button>
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p id={`shop-title-${product.id}`} className="font-serif text-sm uppercase tracking-widest text-ink leading-tight">
              {product.name}
            </p>
            <p id={`shop-desc-${product.id}`} className="font-sans text-xs text-ink-muted mt-0.5">
              {product.subtitle}
            </p>
          </div>
          <p className="font-sans text-sm font-medium text-ink flex-shrink-0">${product.price}</p>
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          <StarRating rating={product.rating} />
          <span className="font-sans text-[10px] text-ink-faint">({product.reviewCount})</span>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState('all');
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

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  const filteredProducts = products
    .filter((p) => activeCategory === 'all' || p.category === activeCategory)
    .filter((p) => {
      if (activePriceRange === 'all') return true;
      const [min, max] = activePriceRange.split('-').map(Number);
      return p.price >= min && p.price <= max;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="bg-parchment min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-linen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 text-center">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-2">Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink font-light">
            {activeCategory === 'all'
              ? 'All Jewelry'
              : categories.find((c) => c.value === activeCategory)?.label || 'Shop'}
          </h1>
          <p className="font-sans text-sm text-ink-muted mt-3">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile filter toggle */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-ink border border-linen px-4 py-2.5 hover:border-ink-muted transition-colors"
          >
            <SlidersHorizontal size={14} />
            Filters
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="font-sans text-xs tracking-wider uppercase text-ink bg-transparent border border-linen px-3 py-2.5 focus:outline-none focus:border-gold"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar filters */}
          <aside
            className={`${
              filterOpen ? 'block' : 'hidden'
            } md:block w-full md:w-52 flex-shrink-0`}
          >
            {/* Mobile close */}
            <div className="flex items-center justify-between mb-6 md:hidden">
              <span className="font-sans text-xs tracking-widest uppercase text-ink font-medium">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X size={16} className="text-ink-muted" />
              </button>
            </div>

            {/* Category filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-widest uppercase text-ink-muted mb-4">
                Category
              </h3>
              <ul className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <li key={cat.value}>
                    <button
                      onClick={() => handleCategoryChange(cat.value)}
                      className={`font-sans text-sm transition-colors w-full text-left py-1 ${
                        activeCategory === cat.value
                          ? 'text-gold font-medium'
                          : 'text-ink-muted hover:text-ink'
                      }`}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full h-px bg-linen mb-8" />

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-widest uppercase text-ink-muted mb-4">
                Price
              </h3>
              <ul className="flex flex-col gap-2">
                {priceRanges.map((range) => (
                  <li key={range.value}>
                    <button
                      onClick={() => setActivePriceRange(range.value)}
                      className={`font-sans text-sm transition-colors w-full text-left py-1 ${
                        activePriceRange === range.value
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

            <div className="w-full h-px bg-linen mb-8" />

            {/* Material filter */}
            <div>
              <h3 className="font-sans text-xs tracking-widest uppercase text-ink-muted mb-4">
                Material
              </h3>
              <ul className="flex flex-col gap-2">
                {['All', 'Gold Tone', 'Silver Tone'].map((m) => (
                  <li key={m}>
                    <button className="font-sans text-sm text-ink-muted hover:text-ink transition-colors w-full text-left py-1">
                      {m}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs text-ink-muted">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="font-sans text-xs tracking-wider text-ink bg-transparent border border-linen pl-3 pr-8 py-2 focus:outline-none focus:border-gold appearance-none cursor-pointer"
                  >
                    {sortOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="font-serif text-2xl text-ink-muted">No pieces found</p>
                <p className="font-sans text-sm text-ink-faint mt-2">Try adjusting your filters</p>
                <button
                  onClick={() => { setActiveCategory('all'); setActivePriceRange('all'); }}
                  className="mt-6 font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
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
