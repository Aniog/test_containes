import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { PRODUCTS } from '@/data/products';
import { useCart } from '@/context/CartContext';

const CATEGORIES = ['All', 'earrings', 'necklaces', 'huggies', 'sets'];
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

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          data-strk-img-id={`shop-hover-${product.hoverImgId}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="bg-gold text-ivory font-manrope text-[9px] tracking-widest uppercase px-2 py-1">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="bg-obsidian text-ivory font-manrope text-[9px] tracking-widest uppercase px-2 py-1">
              New
            </span>
          )}
        </div>

        {/* Quick add */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-0 left-0 right-0 bg-obsidian/90 text-ivory font-manrope text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          } hover:bg-gold`}
        >
          <ShoppingBag size={12} strokeWidth={1.5} />
          {added ? 'Added!' : 'Quick Add'}
        </button>
      </div>

      <p id={`shop-${product.titleId}`} className="font-cormorant text-sm uppercase tracking-widest text-ink font-medium group-hover:text-gold transition-colors">
        {product.name}
      </p>
      <p id={`shop-${product.descId}`} className="font-manrope text-xs text-muted mt-1 line-clamp-1">
        {product.shortDescription}
      </p>
      <div className="flex items-center justify-between mt-2">
        <p className="font-manrope text-sm text-ink">${product.price}</p>
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={9} className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-linen fill-linen'} />
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  // Filter and sort products
  const filtered = PRODUCTS
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

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat !== 'All') {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="bg-parchment min-h-screen pt-16 md:pt-20">
      {/* Page header */}
      <div className="bg-cream border-b border-linen py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-manrope text-xs tracking-widest uppercase text-gold mb-3">Velmora Fine Jewelry</p>
          <h1 className="font-cormorant text-4xl md:text-5xl text-ink font-light">The Collection</h1>
          <div className="w-12 h-px bg-gold mx-auto mt-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Filter bar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-manrope text-[10px] tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-obsidian text-ivory border-obsidian'
                    : 'bg-transparent text-muted border-linen hover:border-ink hover:text-ink'
                }`}
              >
                {cat === 'All' ? 'All Jewelry' : cat}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Price filter */}
            <div className="relative">
              <button
                onClick={() => { setFilterOpen(v => !v); setSortOpen(false); }}
                className="flex items-center gap-2 font-manrope text-[10px] tracking-widest uppercase text-muted border border-linen px-4 py-2 hover:border-ink hover:text-ink transition-colors"
              >
                <SlidersHorizontal size={12} strokeWidth={1.5} />
                Filter
              </button>
              {filterOpen && (
                <div className="absolute right-0 top-full mt-1 bg-cream border border-linen shadow-lg z-20 w-48 py-2">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                      className={`w-full text-left px-4 py-2 font-manrope text-xs transition-colors ${
                        activePriceRange === i ? 'text-gold bg-linen' : 'text-muted hover:text-ink hover:bg-linen'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sort */}
            <div className="relative">
              <button
                onClick={() => { setSortOpen(v => !v); setFilterOpen(false); }}
                className="flex items-center gap-2 font-manrope text-[10px] tracking-widest uppercase text-muted border border-linen px-4 py-2 hover:border-ink hover:text-ink transition-colors"
              >
                Sort
                <ChevronDown size={12} strokeWidth={1.5} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 bg-cream border border-linen shadow-lg z-20 w-48 py-2">
                  {SORT_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                      className={`w-full text-left px-4 py-2 font-manrope text-xs transition-colors ${
                        sortBy === opt.value ? 'text-gold bg-linen' : 'text-muted hover:text-ink hover:bg-linen'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Active filters */}
        {(activeCategory !== 'All' || activePriceRange !== 0) && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="font-manrope text-[10px] text-muted uppercase tracking-widest">Active filters:</span>
            {activeCategory !== 'All' && (
              <button
                onClick={() => handleCategoryChange('All')}
                className="flex items-center gap-1 bg-linen text-ink font-manrope text-[10px] uppercase tracking-widest px-3 py-1 hover:bg-gold hover:text-ivory transition-colors"
              >
                {activeCategory}
                <X size={10} />
              </button>
            )}
            {activePriceRange !== 0 && (
              <button
                onClick={() => setActivePriceRange(0)}
                className="flex items-center gap-1 bg-linen text-ink font-manrope text-[10px] uppercase tracking-widest px-3 py-1 hover:bg-gold hover:text-ivory transition-colors"
              >
                {PRICE_RANGES[activePriceRange].label}
                <X size={10} />
              </button>
            )}
          </div>
        )}

        {/* Results count */}
        <p className="font-manrope text-xs text-muted mb-6">
          {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
        </p>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map(product => (
              <ShopProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-cormorant text-3xl text-ink mb-3">No pieces found</p>
            <p className="font-manrope text-sm text-muted mb-6">Try adjusting your filters</p>
            <button
              onClick={() => { handleCategoryChange('All'); setActivePriceRange(0); }}
              className="font-manrope text-xs tracking-widest uppercase text-gold hover:text-gold-dark transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
