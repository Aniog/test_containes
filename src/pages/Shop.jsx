import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceIdx, setActivePriceIdx] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);
  const { addItem } = useCart();

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceIdx, sortBy]);

  const priceRange = priceRanges[activePriceIdx];
  let filtered = products.filter(p => {
    const catMatch = activeCategory === 'all' || p.category === activeCategory;
    const priceMatch = p.price >= priceRange.min && p.price <= priceRange.max;
    return catMatch && priceMatch;
  });

  if (sortBy === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sortBy === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price);
  else if (sortBy === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-linen pt-20">
      {/* Page header */}
      <div className="bg-velmora-obsidian py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-velmora-gold mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light text-velmora-cream tracking-wide">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="font-sans text-sm text-velmora-cream/50 mt-3">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <FilterSidebar
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
              activePriceIdx={activePriceIdx}
              onPriceChange={setActivePriceIdx}
            />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-sand">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(true)}
                className="md:hidden flex items-center gap-2 font-sans text-xs font-medium tracking-[0.15em] uppercase text-velmora-text-muted hover:text-velmora-gold transition-colors"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filter
              </button>

              <div className="hidden md:block" />

              {/* Sort */}
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs text-velmora-text-light tracking-wide hidden md:block">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent font-sans text-xs font-medium tracking-[0.12em] uppercase text-velmora-text border border-velmora-sand px-4 py-2 pr-8 outline-none hover:border-velmora-gold transition-colors cursor-pointer"
                  >
                    {sortOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-velmora-text-muted pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl font-light text-velmora-text-muted mb-3">No pieces found</p>
                <button
                  onClick={() => { handleCategoryChange('all'); setActivePriceIdx(0); }}
                  className="font-sans text-xs tracking-widest uppercase text-velmora-gold border-b border-velmora-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ShopProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => addItem(product, product.variants[0])}
                  />
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
          <div className="fixed bottom-0 left-0 right-0 bg-velmora-cream z-50 rounded-t-2xl p-6 animate-fadeIn max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl font-light text-velmora-text">Filters</h3>
              <button onClick={() => setFilterOpen(false)}>
                <X size={20} strokeWidth={1.5} className="text-velmora-text-muted" />
              </button>
            </div>
            <FilterSidebar
              activeCategory={activeCategory}
              onCategoryChange={(cat) => { handleCategoryChange(cat); setFilterOpen(false); }}
              activePriceIdx={activePriceIdx}
              onPriceChange={(idx) => { setActivePriceIdx(idx); setFilterOpen(false); }}
            />
          </div>
        </>
      )}
    </div>
  );
}

function FilterSidebar({ activeCategory, onCategoryChange, activePriceIdx, onPriceChange }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-velmora-text mb-4">
          Category
        </h3>
        <div className="flex flex-col gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`text-left font-sans text-sm tracking-wide transition-colors duration-200 ${
                activeCategory === cat
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-text-muted hover:text-velmora-text'
              }`}
            >
              {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-velmora-sand" />

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-velmora-text mb-4">
          Price
        </h3>
        <div className="flex flex-col gap-2">
          {priceRanges.map((range, i) => (
            <button
              key={i}
              onClick={() => onPriceChange(i)}
              className={`text-left font-sans text-sm tracking-wide transition-colors duration-200 ${
                activePriceIdx === i
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-text-muted hover:text-velmora-text'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ShopProductCard({ product, onAddToCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-velmora-sand aspect-[3/4] mb-3">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.img2Id}`}
          data-strk-img={`[shop-title-${product.id}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} worn`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <button
            onClick={(e) => { e.preventDefault(); onAddToCart(); }}
            className="w-full bg-velmora-obsidian/90 text-velmora-cream py-3 text-[10px] font-sans font-medium tracking-[0.2em] uppercase flex items-center justify-center gap-2 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-300"
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            Quick Add
          </button>
        </div>

        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3 bg-velmora-gold px-2 py-1">
            <span className="font-sans text-[9px] font-medium tracking-widest uppercase text-velmora-obsidian">
              Bestseller
            </span>
          </div>
        )}
      </div>

      <Link to={`/product/${product.slug}`}>
        <p id={`shop-title-${product.id}`} className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase text-velmora-text mb-1 group-hover:text-velmora-gold-muted transition-colors">
          {product.name}
        </p>
        <p id={`shop-desc-${product.id}`} className="sr-only">{product.shortDescription}</p>
        <div className="flex items-center gap-1 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className={i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-sand fill-velmora-sand'} />
          ))}
          <span className="font-sans text-[10px] text-velmora-text-light ml-1">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm font-medium text-velmora-text">${product.price}</p>
      </Link>
    </div>
  );
}
