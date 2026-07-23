import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

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
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />
        <img
          data-strk-img-id={`shop-${product.imgId2}`}
          data-strk-img={`[shop-title-${product.id}] gold jewelry worn`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
        />
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={handleAdd}
            className="w-full bg-obsidian/90 text-parchment text-[11px] tracking-widest uppercase py-3 flex items-center justify-center gap-2 hover:bg-gold hover:text-obsidian transition-colors duration-200"
          >
            <ShoppingBag size={13} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
        {product.tags.includes('bestseller') && (
          <div className="absolute top-3 left-3 bg-gold text-obsidian text-[10px] tracking-widest uppercase px-2 py-1 font-semibold">
            Bestseller
          </div>
        )}
      </div>
      <p id={`shop-title-${product.id}`} className="text-xs tracking-widest uppercase font-medium text-ink group-hover:text-gold transition-colors">
        {product.name}
      </p>
      <p id={`shop-desc-${product.id}`} className="text-xs text-ink-faint mt-1 line-clamp-1">{product.shortDescription}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="font-serif text-lg text-ink">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star size={11} className="text-gold fill-gold" />
          <span className="text-xs text-ink-muted">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
  const [activePriceIdx, setActivePriceIdx] = useState(0);
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
  }, [activeCategory, activePriceIdx, sortBy]);

  const priceRange = PRICE_RANGES[activePriceIdx];

  let filtered = products.filter(p => {
    const catMatch = activeCategory === 'All' || p.category === activeCategory;
    const priceMatch = p.price >= priceRange.min && p.price <= priceRange.max;
    return catMatch && priceMatch;
  });

  if (sortBy === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price);
  else if (sortBy === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price);
  else if (sortBy === 'rating') filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') setSearchParams({});
    else setSearchParams({ category: cat });
  };

  return (
    <div className="bg-parchment min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-cream border-b border-linen py-12 px-6 md:px-10 text-center">
        <p className="text-xs tracking-widest uppercase text-gold mb-3 font-sans">Velmora</p>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-ink">All Jewelry</h1>
        <div className="w-10 h-px bg-gold mx-auto mt-4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`text-[11px] tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                  activeCategory === cat || (cat === 'All' && activeCategory === 'All')
                    ? 'border-gold bg-gold text-obsidian'
                    : 'border-linen text-ink-muted hover:border-gold hover:text-gold'
                }`}
              >
                {cat === 'All' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-ink-faint">{filtered.length} pieces</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="text-xs tracking-wide text-ink-muted bg-transparent border border-linen px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
            >
              {SORT_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 text-xs tracking-widest uppercase text-ink-muted hover:text-gold transition-colors border border-linen px-3 py-2"
            >
              <SlidersHorizontal size={13} />
              Filters
            </button>
          </div>
        </div>

        {/* Filter panel */}
        {filterOpen && (
          <div className="bg-cream border border-linen p-6 mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs tracking-widest uppercase font-medium text-ink">Price Range</p>
              <button onClick={() => setFilterOpen(false)} className="text-ink-faint hover:text-gold">
                <X size={16} />
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {PRICE_RANGES.map((range, i) => (
                <button
                  key={range.label}
                  onClick={() => setActivePriceIdx(i)}
                  className={`text-xs tracking-wide px-4 py-2 border transition-all ${
                    activePriceIdx === i
                      ? 'border-gold bg-gold text-obsidian'
                      : 'border-linen text-ink-muted hover:border-gold hover:text-gold'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div ref={containerRef}>
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-serif text-2xl text-ink-muted italic">No pieces found</p>
              <button
                onClick={() => { handleCategory('All'); setActivePriceIdx(0); }}
                className="mt-4 text-xs tracking-widest uppercase text-gold border border-gold px-6 py-2 hover:bg-gold hover:text-obsidian transition-all"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {filtered.map(product => (
                <ShopProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
