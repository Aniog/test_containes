import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
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

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star key={i} size={10} className={i <= Math.round(rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'} strokeWidth={1} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addItem } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  return (
    <div ref={cardRef} className="group">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden bg-velmora-linen aspect-[3/4]">
          <img
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.tags.includes('bestseller') && (
            <span className="absolute top-3 left-3 bg-velmora-obsidian text-velmora-cream font-manrope text-[9px] uppercase tracking-widest px-2 py-1">
              Bestseller
            </span>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-velmora-obsidian/90 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={(e) => { e.preventDefault(); addItem(product); }}
              className="w-full flex items-center justify-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-cream hover:text-velmora-gold transition-colors"
            >
              <ShoppingBag size={12} strokeWidth={1.5} />
              Quick Add
            </button>
          </div>
        </div>
        <div className="pt-4 pb-2">
          <p id={product.titleId} className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian mb-1 leading-tight">
            {product.name}
          </p>
          <p id={product.descId} className="font-manrope text-xs text-velmora-muted mb-2 hidden">{product.shortDesc}</p>
          <div className="flex items-center justify-between">
            <StarRating rating={product.rating} />
            <span className="font-manrope text-sm font-semibold text-velmora-obsidian">${product.price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category') ? searchParams.get('category').charAt(0).toUpperCase() + searchParams.get('category').slice(1) : 'All'
  );
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = products
    .filter(p => {
      if (activeCategory !== 'All' && p.category !== activeCategory.toLowerCase()) return false;
      const range = PRICE_RANGES[activePriceRange];
      if (p.price < range.min || p.price > range.max) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      {/* Page header */}
      <div className="border-b border-velmora-sand">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-3">Velmora</p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian">All Jewelry</h1>
          <p className="font-manrope text-sm text-velmora-muted mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Filter & Sort bar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-manrope text-xs uppercase tracking-widest px-4 py-2 border transition-colors ${
                  activeCategory === cat
                    ? 'bg-velmora-obsidian text-velmora-cream border-velmora-obsidian'
                    : 'border-velmora-sand text-velmora-stone hover:border-velmora-obsidian hover:text-velmora-obsidian'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Filter button */}
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-stone hover:text-velmora-obsidian transition-colors border border-velmora-sand px-4 py-2"
            >
              <SlidersHorizontal size={12} strokeWidth={1.5} />
              Filter
            </button>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(v => !v)}
                className="flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-stone hover:text-velmora-obsidian transition-colors border border-velmora-sand px-4 py-2"
              >
                {SORT_OPTIONS.find(o => o.value === sortBy)?.label}
                <ChevronDown size={12} strokeWidth={1.5} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 bg-velmora-cream border border-velmora-sand shadow-md z-20 min-w-[180px]">
                  {SORT_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                      className={`w-full text-left px-4 py-3 font-manrope text-xs uppercase tracking-widest transition-colors ${
                        sortBy === opt.value ? 'text-velmora-gold bg-velmora-linen' : 'text-velmora-stone hover:text-velmora-obsidian hover:bg-velmora-linen'
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

        {/* Price filter panel */}
        {filterOpen && (
          <div className="mb-8 p-6 bg-velmora-linen border border-velmora-sand">
            <div className="flex items-center justify-between mb-4">
              <p className="font-manrope text-xs uppercase tracking-widest text-velmora-stone">Price Range</p>
              <button onClick={() => setFilterOpen(false)} className="text-velmora-stone hover:text-velmora-obsidian">
                <X size={14} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {PRICE_RANGES.map((range, i) => (
                <button
                  key={range.label}
                  onClick={() => setActivePriceRange(i)}
                  className={`font-manrope text-xs uppercase tracking-widest px-4 py-2 border transition-colors ${
                    activePriceRange === i
                      ? 'bg-velmora-obsidian text-velmora-cream border-velmora-obsidian'
                      : 'border-velmora-sand text-velmora-stone hover:border-velmora-obsidian'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-cormorant text-2xl text-velmora-stone mb-3">No pieces found</p>
            <p className="font-manrope text-sm text-velmora-muted">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
