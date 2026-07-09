import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const PRICE_RANGES = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-velmora-cream aspect-portrait">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span id={`shop-title-${product.id}`} className="sr-only">{product.name}</span>
        <span id={`shop-desc-${product.id}`} className="sr-only">{product.shortDescription}</span>

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className={`w-full py-3 font-manrope text-xs uppercase tracking-widest transition-colors duration-200 ${
              added ? 'bg-velmora-gold text-velmora-obsidian' : 'bg-velmora-obsidian text-velmora-ivory hover:bg-velmora-charcoal'
            }`}
          >
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>

        {product.isBestseller && (
          <div className="absolute top-3 left-3">
            <span className="font-manrope text-[9px] uppercase tracking-widest bg-velmora-gold text-velmora-obsidian px-2 py-1">
              Bestseller
            </span>
          </div>
        )}
      </div>

      <div className="pt-4 pb-2">
        <p className="font-cormorant text-base uppercase tracking-widest text-velmora-obsidian leading-tight mb-1">
          {product.name}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-manrope text-sm text-velmora-charcoal">${product.price}</span>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className={i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-stone'}
                  strokeWidth={1}
                />
              ))}
            </div>
            <span className="font-manrope text-[10px] text-velmora-mink">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const containerRef = useRef(null);

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = CATEGORIES.find((c) => c.toLowerCase() === cat.toLowerCase());
      if (match) setActiveCategory(match);
    }
  }, [searchParams]);

  // Filter and sort products
  const filtered = products
    .filter((p) => {
      const catMatch = activeCategory === 'All' || p.category === activeCategory.toLowerCase();
      const priceRange = PRICE_RANGES[activePriceRange];
      const priceMatch = p.price >= priceRange.min && p.price <= priceRange.max;
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => cancelAnimationFrame(frameId);
  }, [filtered.length, activeCategory, activePriceRange]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat.toLowerCase() });
    }
  };

  return (
    <div className="bg-velmora-ivory min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-stone/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
          <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-2">Velmora</p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian">
            {activeCategory === 'All' ? 'All Jewelry' : activeCategory}
          </h1>
          <p className="font-manrope text-sm text-velmora-mink mt-2">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar filters — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="font-manrope text-xs uppercase tracking-widest text-velmora-charcoal mb-4">Category</h3>
                <div className="flex flex-col gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`text-left font-manrope text-sm transition-colors duration-200 ${
                        activeCategory === cat
                          ? 'text-velmora-gold font-500'
                          : 'text-velmora-charcoal hover:text-velmora-gold'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="border-t border-velmora-stone/30 pt-6">
                <h3 className="font-manrope text-xs uppercase tracking-widest text-velmora-charcoal mb-4">Price</h3>
                <div className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceRange(i)}
                      className={`text-left font-manrope text-sm transition-colors duration-200 ${
                        activePriceRange === i
                          ? 'text-velmora-gold font-500'
                          : 'text-velmora-charcoal hover:text-velmora-gold'
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
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-stone/30">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(true)}
                className="md:hidden flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-charcoal hover:text-velmora-gold transition-colors"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filter
              </button>

              {/* Category pills — mobile */}
              <div className="hidden md:flex items-center gap-2 flex-wrap">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`font-manrope text-xs uppercase tracking-widest px-3 py-1.5 border transition-all duration-200 ${
                      activeCategory === cat
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-stone text-velmora-charcoal hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort dropdown */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen((v) => !v)}
                  className="flex items-center gap-2 font-manrope text-xs uppercase tracking-widest text-velmora-charcoal hover:text-velmora-gold transition-colors"
                >
                  Sort: {SORT_OPTIONS.find((s) => s.value === sortBy)?.label}
                  <ChevronDown size={13} strokeWidth={1.5} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-velmora-ivory border border-velmora-stone/40 shadow-lg z-20 animate-fadeInFast">
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                        className={`w-full text-left px-4 py-3 font-manrope text-xs transition-colors duration-150 ${
                          sortBy === opt.value
                            ? 'text-velmora-gold bg-velmora-cream'
                            : 'text-velmora-charcoal hover:bg-velmora-cream hover:text-velmora-gold'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 gap-3">
                <p className="font-cormorant text-2xl font-light text-velmora-charcoal">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(0); }}
                  className="font-manrope text-xs uppercase tracking-widest text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
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
            className="fixed inset-0 z-50 bg-velmora-obsidian/40 backdrop-blur-sm"
            onClick={() => setFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-velmora-ivory rounded-t-2xl p-6 animate-fadeIn">
            <div className="flex items-center justify-between mb-6">
              <span className="font-cormorant text-xl font-light text-velmora-obsidian">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X size={20} strokeWidth={1.5} className="text-velmora-charcoal" />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="font-manrope text-xs uppercase tracking-widest text-velmora-charcoal mb-3">Category</h3>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                    className={`font-manrope text-xs uppercase tracking-widest px-3 py-2 border transition-all duration-200 ${
                      activeCategory === cat
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-stone text-velmora-charcoal'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-manrope text-xs uppercase tracking-widest text-velmora-charcoal mb-3">Price</h3>
              <div className="flex flex-wrap gap-2">
                {PRICE_RANGES.map((range, i) => (
                  <button
                    key={range.label}
                    onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                    className={`font-manrope text-xs uppercase tracking-widest px-3 py-2 border transition-all duration-200 ${
                      activePriceRange === i
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-stone text-velmora-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
