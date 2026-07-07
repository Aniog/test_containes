import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import StarRating from '@/components/ui/StarRating';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
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

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);

  return (
    <div className="group" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velmora-cream aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={`shop-alt-${product.imgId2}`}
          data-strk-img={`[shop-${product.titleId}] [shop-${product.descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('new') && (
            <span className="bg-velmora-obsidian text-velmora-text-light font-inter text-[9px] tracking-[0.12em] uppercase px-2 py-0.5">New</span>
          )}
          {product.tags.includes('bestseller') && (
            <span className="bg-velmora-gold text-velmora-obsidian font-inter text-[9px] tracking-[0.12em] uppercase px-2 py-0.5">Bestseller</span>
          )}
        </div>

        {/* Quick add */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={(e) => { e.preventDefault(); addItem(product); }}
            className="w-full bg-velmora-obsidian/90 backdrop-blur-sm text-velmora-text-light font-inter text-[10px] tracking-[0.15em] uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="pt-4 pb-2">
        <div className="flex items-center gap-1.5 mb-1.5">
          <StarRating rating={product.rating} />
          <span className="font-inter text-[10px] text-velmora-mist">({product.reviewCount})</span>
        </div>
        <h3 id={`shop-${product.titleId}`} className="font-cormorant text-base tracking-[0.1em] uppercase text-velmora-text leading-tight">
          {product.name}
        </h3>
        <p id={`shop-${product.descId}`} className="font-inter text-xs text-velmora-mist mt-0.5">{product.shortDescription}</p>
        <p className="font-inter text-sm font-medium text-velmora-text mt-2">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const categoryParam = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.find((c) => c.toLowerCase() === categoryParam) || 'All'
  );
  const [activePriceRange, setActivePriceRange] = useState(PRICE_RANGES[0]);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const cat = CATEGORIES.find((c) => c.toLowerCase() === categoryParam);
    if (cat) setActiveCategory(cat);
  }, [categoryParam]);

  const filtered = products
    .filter((p) => {
      const catMatch = activeCategory === 'All' || p.category === activeCategory.toLowerCase();
      const priceMatch = p.price >= activePriceRange.min && p.price <= activePriceRange.max;
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, activePriceRange, sortBy]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat.toLowerCase() });
    }
  };

  return (
    <div className="bg-velmora-linen min-h-screen pt-20 md:pt-24" ref={containerRef}>
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-stone/15 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-velmora-gold mb-3">
            The Collection
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-text tracking-wide">
            All Jewelry
          </h1>
          <div className="w-12 h-px bg-velmora-gold/50 mx-auto mt-5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 font-inter text-xs tracking-[0.1em] uppercase text-velmora-text border border-velmora-stone/30 px-4 py-2.5 hover:border-velmora-gold hover:text-velmora-gold transition-colors"
          >
            <SlidersHorizontal size={13} strokeWidth={1.5} />
            Filters
          </button>

          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-inter text-xs tracking-[0.1em] uppercase px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                    : 'border-velmora-stone/30 text-velmora-mist hover:border-velmora-gold hover:text-velmora-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <span className="font-inter text-xs text-velmora-mist hidden md:block">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-inter text-xs text-velmora-text bg-transparent border border-velmora-stone/30 px-3 py-2.5 focus:outline-none focus:border-velmora-gold cursor-pointer"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            {/* Category filter */}
            <div className="mb-8">
              <h3 className="font-inter text-[10px] tracking-[0.15em] uppercase text-velmora-text mb-4">
                Category
              </h3>
              <div className="flex flex-col gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`text-left font-inter text-xs transition-colors duration-200 ${
                      activeCategory === cat
                        ? 'text-velmora-gold'
                        : 'text-velmora-mist hover:text-velmora-gold'
                    }`}
                  >
                    {cat}
                    {activeCategory === cat && (
                      <span className="ml-2 text-velmora-gold">✦</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="font-inter text-[10px] tracking-[0.15em] uppercase text-velmora-text mb-4">
                Price
              </h3>
              <div className="flex flex-col gap-2">
                {PRICE_RANGES.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setActivePriceRange(range)}
                    className={`text-left font-inter text-xs transition-colors duration-200 ${
                      activePriceRange.label === range.label
                        ? 'text-velmora-gold'
                        : 'text-velmora-mist hover:text-velmora-gold'
                    }`}
                  >
                    {range.label}
                    {activePriceRange.label === range.label && (
                      <span className="ml-2 text-velmora-gold">✦</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-velmora-obsidian/50" onClick={() => setFilterOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-velmora-linen p-6 rounded-t-lg">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-cormorant text-lg text-velmora-text">Filters</span>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={18} strokeWidth={1.5} className="text-velmora-mist" />
                  </button>
                </div>

                <div className="mb-6">
                  <h3 className="font-inter text-[10px] tracking-[0.15em] uppercase text-velmora-text mb-3">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                        className={`font-inter text-xs px-4 py-2 border transition-colors ${activeCategory === cat ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian' : 'border-velmora-stone/30 text-velmora-mist'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-inter text-[10px] tracking-[0.15em] uppercase text-velmora-text mb-3">Price</h3>
                  <div className="flex flex-wrap gap-2">
                    {PRICE_RANGES.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => { setActivePriceRange(range); setFilterOpen(false); }}
                        className={`font-inter text-xs px-4 py-2 border transition-colors ${activePriceRange.label === range.label ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian' : 'border-velmora-stone/30 text-velmora-mist'}`}
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
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-velmora-mist mb-4">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(PRICE_RANGES[0]); }}
                  className="font-inter text-xs tracking-[0.12em] uppercase text-velmora-gold border border-velmora-gold px-6 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
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
