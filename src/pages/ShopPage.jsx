import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import StarRating from '@/components/ui/StarRating';

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

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-cream aspect-[3/4]">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}] gold jewelry`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
        />
        <img
          data-strk-img-id={`shop-${product.img2Id}`}
          data-strk-img={`[shop-${product.titleId}] gold jewelry worn model`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100"
        />

        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.tags.includes('bestseller') && (
            <span className="font-sans text-[9px] tracking-widest uppercase bg-gold text-white px-2 py-0.5">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="font-sans text-[9px] tracking-widest uppercase bg-obsidian text-white px-2 py-0.5">
              New
            </span>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleAdd}
            className={`w-full py-3 font-sans text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-colors ${
              added ? 'bg-obsidian text-white' : 'bg-ivory/95 text-obsidian hover:bg-gold hover:text-white'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>

      <div className="pt-4 pb-2">
        <p
          id={`shop-${product.titleId}`}
          className="font-serif text-sm text-obsidian uppercase tracking-widest leading-tight mb-1"
        >
          {product.name}
        </p>
        <p
          id={`shop-${product.descId}`}
          className="font-sans text-xs text-pebble mb-2"
        >
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <StarRating rating={product.rating} />
          <p className="font-sans text-sm font-500 text-obsidian">${product.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

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

  const priceRange = PRICE_RANGES[activePriceRange];

  const filtered = products
    .filter((p) => activeCategory === 'all' || p.category === activeCategory)
    .filter((p) => p.price >= priceRange.min && p.price <= priceRange.max);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat !== 'all') {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div ref={containerRef} className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-cream border-b border-linen pt-24 md:pt-28 pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-sans text-xs text-gold tracking-ultra-wide uppercase mb-3">
            Velmora Collection
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-obsidian font-light">
            All Jewelry
          </h1>
          <p className="font-sans text-sm text-pebble mt-3">
            {sorted.length} piece{sorted.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-24">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs text-obsidian tracking-widest uppercase mb-4 pb-3 border-b border-linen">
                  Category
                </h3>
                <ul className="flex flex-col gap-2">
                  {CATEGORIES.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategoryChange(cat)}
                        className={`font-sans text-sm capitalize bg-transparent border-none p-0 transition-colors ${
                          activeCategory === cat
                            ? 'text-gold font-500'
                            : 'text-stone hover:text-obsidian'
                        }`}
                      >
                        {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs text-obsidian tracking-widest uppercase mb-4 pb-3 border-b border-linen">
                  Price
                </h3>
                <ul className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range, i) => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(i)}
                        className={`font-sans text-sm bg-transparent border-none p-0 transition-colors ${
                          activePriceRange === i
                            ? 'text-gold font-500'
                            : 'text-stone hover:text-obsidian'
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
                <h3 className="font-sans text-xs text-obsidian tracking-widest uppercase mb-4 pb-3 border-b border-linen">
                  Material
                </h3>
                <ul className="flex flex-col gap-2">
                  {['18K Gold Plated', 'Silver Tone', 'Rose Gold'].map((m) => (
                    <li key={m}>
                      <button className="font-sans text-sm text-stone hover:text-obsidian bg-transparent border-none p-0 transition-colors">
                        {m}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-linen">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(true)}
                className="md:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-stone hover:text-obsidian bg-transparent border border-linen px-4 py-2"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filter
              </button>

              <p className="hidden md:block font-sans text-xs text-pebble">
                {sorted.length} results
              </p>

              {/* Sort */}
              <div className="relative flex items-center gap-2">
                <span className="font-sans text-xs text-pebble tracking-widest uppercase hidden md:block">
                  Sort:
                </span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="font-sans text-xs text-stone bg-transparent border border-linen px-4 py-2 pr-8 appearance-none cursor-pointer hover:border-stone transition-colors focus:outline-none focus:border-gold"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-pebble pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            {sorted.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-stone mb-3">No pieces found</p>
                <p className="font-sans text-sm text-pebble mb-6">
                  Try adjusting your filters.
                </p>
                <button
                  onClick={() => { setActiveCategory('all'); setActivePriceRange(0); }}
                  className="font-sans text-xs tracking-widest uppercase text-gold hover:text-gold-dark bg-transparent border-none"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {sorted.map((product) => (
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
            className="fixed inset-0 z-50 bg-obsidian/40"
            onClick={() => setFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-ivory rounded-t-lg p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl text-obsidian">Filters</h3>
              <button
                onClick={() => setFilterOpen(false)}
                className="bg-transparent border-none text-pebble hover:text-obsidian"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6">
              <h4 className="font-sans text-xs text-obsidian tracking-widest uppercase mb-3">Category</h4>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => { handleCategoryChange(cat); setFilterOpen(false); }}
                    className={`font-sans text-xs tracking-widest uppercase px-4 py-2 border transition-colors ${
                      activeCategory === cat
                        ? 'bg-obsidian text-ivory border-obsidian'
                        : 'bg-transparent text-stone border-linen hover:border-stone'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-sans text-xs text-obsidian tracking-widest uppercase mb-3">Price</h4>
              <div className="flex flex-col gap-2">
                {PRICE_RANGES.map((range, i) => (
                  <button
                    key={range.label}
                    onClick={() => { setActivePriceRange(i); setFilterOpen(false); }}
                    className={`font-sans text-sm text-left bg-transparent border-none p-0 transition-colors ${
                      activePriceRange === i ? 'text-gold font-500' : 'text-stone'
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
