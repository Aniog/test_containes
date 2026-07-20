import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function ShopProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden bg-velmora-sand aspect-[3/4] block">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}] [shop-page-title]`}
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
          data-strk-img={`[shop-${product.titleId}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        />

        {product.tags.includes('bestseller') && (
          <span className="absolute top-3 left-3 font-manrope text-[9px] tracking-widest uppercase bg-velmora-gold text-velmora-obsidian px-2 py-0.5">
            Bestseller
          </span>
        )}

        <div
          className={`absolute bottom-0 left-0 right-0 bg-velmora-obsidian/90 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              addItem(product, product.variants[0]);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 font-manrope text-xs tracking-widest uppercase text-velmora-text-light hover:text-velmora-gold transition-colors duration-200"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>
      </Link>

      <div className="pt-4">
        <Link to={`/product/${product.slug}`}>
          <h3
            id={`shop-${product.titleId}`}
            className="font-cormorant text-base font-medium tracking-widest uppercase text-velmora-text-dark hover:text-velmora-gold-muted transition-colors duration-200 leading-tight"
          >
            {product.name}
          </h3>
        </Link>
        <p id={`shop-${product.descId}`} className="font-manrope text-xs text-velmora-text-muted mt-1">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-2">
          <span className="font-manrope text-sm font-semibold text-velmora-text-dark">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={10} fill="#C9A96E" className="text-velmora-gold" />
            <span className="font-manrope text-xs text-velmora-text-muted">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(
    searchParams.get('category')
      ? searchParams.get('category').charAt(0).toUpperCase() + searchParams.get('category').slice(1)
      : 'All'
  );
  const [activePriceRange, setActivePriceRange] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveCategory(cat.charAt(0).toUpperCase() + cat.slice(1));
    }
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const filtered = products
    .filter((p) => {
      if (activeCategory !== 'All' && p.category !== activeCategory.toLowerCase()) return false;
      if (p.price < activePriceRange.min || p.price > activePriceRange.max) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="bg-velmora-linen min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-velmora-sand bg-velmora-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
          <p className="font-manrope text-xs tracking-widest uppercase text-velmora-gold mb-3">
            Velmora Fine Jewelry
          </p>
          <h1
            id="shop-page-title"
            className="font-cormorant text-4xl md:text-5xl font-light text-velmora-text-dark"
          >
            The Collection
          </h1>
          <p className="font-manrope text-sm text-velmora-text-mid mt-2">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8">
        {/* Filter + Sort bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-velmora-sand">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  if (cat === 'All') {
                    setSearchParams({});
                  } else {
                    setSearchParams({ category: cat.toLowerCase() });
                  }
                }}
                className={`font-manrope text-xs tracking-wider uppercase px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                    : 'border-velmora-sand text-velmora-text-mid hover:border-velmora-gold hover:text-velmora-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Price filter */}
            <div className="relative">
              <button
                onClick={() => { setFilterOpen((v) => !v); setSortOpen(false); }}
                className="flex items-center gap-2 font-manrope text-xs tracking-wider uppercase text-velmora-text-mid border border-velmora-sand px-4 py-2 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-200"
              >
                <SlidersHorizontal size={12} />
                Price
                <ChevronDown size={10} />
              </button>
              {filterOpen && (
                <div className="absolute right-0 top-full mt-1 bg-velmora-cream border border-velmora-sand shadow-card z-20 min-w-[160px]">
                  {PRICE_RANGES.map((range) => (
                    <button
                      key={range.label}
                      onClick={() => { setActivePriceRange(range); setFilterOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 font-manrope text-xs transition-colors duration-150 ${
                        activePriceRange.label === range.label
                          ? 'text-velmora-gold bg-velmora-sand'
                          : 'text-velmora-text-mid hover:text-velmora-gold hover:bg-velmora-sand'
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
                onClick={() => { setSortOpen((v) => !v); setFilterOpen(false); }}
                className="flex items-center gap-2 font-manrope text-xs tracking-wider uppercase text-velmora-text-mid border border-velmora-sand px-4 py-2 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-200"
              >
                Sort
                <ChevronDown size={10} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 bg-velmora-cream border border-velmora-sand shadow-card z-20 min-w-[180px]">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 font-manrope text-xs transition-colors duration-150 ${
                        sortBy === opt.value
                          ? 'text-velmora-gold bg-velmora-sand'
                          : 'text-velmora-text-mid hover:text-velmora-gold hover:bg-velmora-sand'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Active filter badge */}
            {activePriceRange.label !== 'All Prices' && (
              <button
                onClick={() => setActivePriceRange(PRICE_RANGES[0])}
                className="flex items-center gap-1.5 font-manrope text-xs text-velmora-gold border border-velmora-gold px-3 py-2 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-200"
              >
                {activePriceRange.label}
                <X size={10} />
              </button>
            )}
          </div>
        </div>

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-cormorant text-2xl italic text-velmora-text-mid">
              No pieces found for this filter.
            </p>
            <button
              onClick={() => { setActiveCategory('All'); setActivePriceRange(PRICE_RANGES[0]); }}
              className="mt-6 font-manrope text-xs tracking-widest uppercase text-velmora-gold border border-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product) => (
              <ShopProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
