import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

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
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    addItem(product, product.variants[0]);
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
      <div className="relative overflow-hidden bg-velmora-cream aspect-[3/4]">
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
          data-strk-img-id={`shop-${product.img2Id}`}
          data-strk-img={`[shop-${product.titleId}] [shop-${product.descId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />

        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.tags.includes('bestseller') && (
            <span className="font-inter text-[9px] uppercase tracking-widest bg-velmora-gold text-velmora-obsidian px-2 py-0.5">
              Bestseller
            </span>
          )}
          {product.tags.includes('new') && (
            <span className="font-inter text-[9px] uppercase tracking-widest bg-velmora-obsidian text-velmora-text-light px-2 py-0.5">
              New
            </span>
          )}
        </div>

        <button
          onClick={handleAdd}
          className={`absolute bottom-0 left-0 right-0 bg-velmora-obsidian text-velmora-text-light font-inter text-xs uppercase tracking-widest py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <ShoppingBag size={12} />
          {added ? 'Added!' : 'Quick Add'}
        </button>
      </div>

      <div className="pt-4 pb-2">
        <p
          id={`shop-${product.titleId}`}
          className="font-cormorant text-sm uppercase tracking-widest text-velmora-obsidian group-hover:text-velmora-gold-dark transition-colors duration-300"
        >
          {product.name}
        </p>
        <p id={`shop-${product.descId}`} className="sr-only">{product.shortDesc}</p>
        <div className="flex items-center justify-between mt-1.5">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map(i => (
              <Star
                key={i}
                size={10}
                stroke={i <= Math.round(product.rating) ? '#C9A96E' : '#D4C9B5'}
                fill={i <= Math.round(product.rating) ? '#C9A96E' : 'none'}
              />
            ))}
          </div>
          <span className="font-inter text-sm font-medium text-velmora-obsidian">${product.price}</span>
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePriceIdx, setActivePriceIdx] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const match = CATEGORIES.find(c => c.toLowerCase() === cat.toLowerCase());
      if (match) setActiveCategory(match);
    }
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceIdx, sortBy]);

  const priceRange = PRICE_RANGES[activePriceIdx];

  let filtered = products.filter(p => {
    const catMatch = activeCategory === 'All' || p.category === activeCategory.toLowerCase();
    const priceMatch = p.price >= priceRange.min && p.price <= priceRange.max;
    const q = searchParams.get('q');
    const queryMatch = !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.shortDesc.toLowerCase().includes(q.toLowerCase());
    return catMatch && priceMatch && queryMatch;
  });

  if (sortBy === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sortBy === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price);
  else if (sortBy === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  const searchQuery = searchParams.get('q');

  return (
    <div className="bg-velmora-linen min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-velmora-cream border-b border-velmora-stone/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <p className="font-inter text-xs uppercase tracking-widest text-velmora-gold mb-3">
            {searchQuery ? 'Search Results' : 'The Collection'}
          </p>
          <h1 className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide">
            {searchQuery ? `"${searchQuery}"` : 'All Jewelry'}
          </h1>
          <p className="font-inter text-xs text-velmora-mist mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              {/* Category filter */}
              <div className="mb-8">
                <p className="font-inter text-xs uppercase tracking-widest text-velmora-obsidian mb-4">Category</p>
                <div className="flex flex-col gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left font-inter text-xs transition-colors duration-200 py-1 ${
                        activeCategory === cat
                          ? 'text-velmora-obsidian font-medium'
                          : 'text-velmora-mist hover:text-velmora-obsidian'
                      }`}
                    >
                      {activeCategory === cat && <span className="text-velmora-gold mr-2">—</span>}
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-velmora-stone/20 mb-8" />

              {/* Price filter */}
              <div className="mb-8">
                <p className="font-inter text-xs uppercase tracking-widest text-velmora-obsidian mb-4">Price</p>
                <div className="flex flex-col gap-2">
                  {PRICE_RANGES.map((range, idx) => (
                    <button
                      key={range.label}
                      onClick={() => setActivePriceIdx(idx)}
                      className={`text-left font-inter text-xs transition-colors duration-200 py-1 ${
                        activePriceIdx === idx
                          ? 'text-velmora-obsidian font-medium'
                          : 'text-velmora-mist hover:text-velmora-obsidian'
                      }`}
                    >
                      {activePriceIdx === idx && <span className="text-velmora-gold mr-2">—</span>}
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
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setFilterOpen(true)}
                className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-widest text-velmora-obsidian border border-velmora-stone/40 px-4 py-2"
              >
                <SlidersHorizontal size={12} />
                Filter
              </button>

              <div className="flex items-center gap-3 ml-auto">
                <span className="font-inter text-xs text-velmora-mist hidden md:block">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="font-inter text-xs text-velmora-obsidian bg-transparent border border-velmora-stone/40 px-3 py-2 outline-none cursor-pointer hover:border-velmora-obsidian transition-colors duration-200"
                >
                  {SORT_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-velmora-mist mb-3">No pieces found</p>
                <p className="font-inter text-xs text-velmora-mist">Try adjusting your filters</p>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
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
          <div className="fixed inset-0 bg-velmora-obsidian/50 z-50" onClick={() => setFilterOpen(false)} />
          <div className="fixed bottom-0 left-0 right-0 bg-velmora-linen z-50 rounded-t-2xl p-6 animate-slideDown">
            <div className="flex items-center justify-between mb-6">
              <span className="font-cormorant text-xl text-velmora-obsidian">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X size={18} className="text-velmora-mist" />
              </button>
            </div>

            <div className="mb-6">
              <p className="font-inter text-xs uppercase tracking-widest text-velmora-obsidian mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setFilterOpen(false); }}
                    className={`font-inter text-xs px-4 py-2 border transition-all duration-200 ${
                      activeCategory === cat
                        ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-text-light'
                        : 'border-velmora-stone/40 text-velmora-mist'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-inter text-xs uppercase tracking-widest text-velmora-obsidian mb-3">Price</p>
              <div className="flex flex-wrap gap-2">
                {PRICE_RANGES.map((range, idx) => (
                  <button
                    key={range.label}
                    onClick={() => { setActivePriceIdx(idx); setFilterOpen(false); }}
                    className={`font-inter text-xs px-4 py-2 border transition-all duration-200 ${
                      activePriceIdx === idx
                        ? 'border-velmora-obsidian bg-velmora-obsidian text-velmora-text-light'
                        : 'border-velmora-stone/40 text-velmora-mist'
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
