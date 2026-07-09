import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

const CATEGORIES = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const PRICE_RANGES = [
  { value: 'all', label: 'All Prices' },
  { value: '0-50', label: 'Under $50' },
  { value: '50-75', label: '$50 – $75' },
  { value: '75-120', label: '$75 – $120' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [sort, setSort] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState('all');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = [...products];
    const q = searchParams.get('q')?.toLowerCase();

    if (q) {
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    if (activeCategory !== 'all') {
      list = list.filter(p => p.category === activeCategory);
    }

    if (activePriceRange !== 'all') {
      const [min, max] = activePriceRange.split('-').map(Number);
      list = list.filter(p => p.price >= min && p.price <= max);
    }

    switch (sort) {
      case 'price-asc': return list.sort((a, b) => a.price - b.price);
      case 'price-desc': return list.sort((a, b) => b.price - a.price);
      case 'rating': return list.sort((a, b) => b.rating - a.rating);
      default: return list;
    }
  }, [activeCategory, activePriceRange, sort, searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered]);

  const searchQuery = searchParams.get('q');

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Page header */}
      <div className="bg-parchment border-b border-border py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs uppercase tracking-widest font-medium text-gold mb-3 font-sans">
            {searchQuery ? 'Search Results' : 'The Collection'}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink">
            {searchQuery ? `"${searchQuery}"` : 'All Jewelry'}
          </h1>
          <p className="text-sm font-sans text-taupe mt-3">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterPanel
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activePriceRange={activePriceRange}
              setActivePriceRange={setActivePriceRange}
            />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <button
                onClick={() => setFilterOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-ink hover:text-gold transition-colors font-sans"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filter
              </button>

              <div className="hidden md:block" />

              {/* Sort */}
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest font-medium text-taupe font-sans hidden sm:block">
                  Sort:
                </span>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={e => setSort(e.target.value)}
                    className="appearance-none bg-transparent border border-border text-xs uppercase tracking-widest font-medium text-ink font-sans pl-3 pr-8 py-2 cursor-pointer hover:border-ink transition-colors outline-none"
                  >
                    {SORT_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-taupe pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl font-light text-ink mb-3">No pieces found</p>
                <p className="text-sm font-sans text-taupe">Try adjusting your filters</p>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ShopProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => addItem(product)}
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
          <div
            className="fixed inset-0 bg-obsidian/40 z-50"
            onClick={() => setFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-cream z-50 rounded-t-2xl p-6 animate-fadeIn max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs uppercase tracking-widest font-medium text-ink font-sans">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-5 h-5 text-taupe" />
              </button>
            </div>
            <FilterPanel
              activeCategory={activeCategory}
              setActiveCategory={(v) => { setActiveCategory(v); setFilterOpen(false); }}
              activePriceRange={activePriceRange}
              setActivePriceRange={(v) => { setActivePriceRange(v); setFilterOpen(false); }}
            />
          </div>
        </>
      )}
    </div>
  );
}

function FilterPanel({ activeCategory, setActiveCategory, activePriceRange, setActivePriceRange }) {
  return (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs uppercase tracking-widest font-medium text-ink mb-4 font-sans">
          Category
        </h3>
        <ul className="space-y-2.5">
          {CATEGORIES.map(cat => (
            <li key={cat.value}>
              <button
                onClick={() => setActiveCategory(cat.value)}
                className={`text-sm font-sans transition-colors ${
                  activeCategory === cat.value
                    ? 'text-gold font-medium'
                    : 'text-taupe hover:text-ink'
                }`}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-px bg-border" />

      {/* Price */}
      <div>
        <h3 className="text-xs uppercase tracking-widest font-medium text-ink mb-4 font-sans">
          Price
        </h3>
        <ul className="space-y-2.5">
          {PRICE_RANGES.map(range => (
            <li key={range.value}>
              <button
                onClick={() => setActivePriceRange(range.value)}
                className={`text-sm font-sans transition-colors ${
                  activePriceRange === range.value
                    ? 'text-gold font-medium'
                    : 'text-taupe hover:text-ink'
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-px bg-border" />

      {/* Material */}
      <div>
        <h3 className="text-xs uppercase tracking-widest font-medium text-ink mb-4 font-sans">
          Material
        </h3>
        <ul className="space-y-2.5">
          {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
            <li key={m}>
              <button className="text-sm font-sans text-taupe hover:text-ink transition-colors">
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ShopProductCard({ product, onAddToCart }) {
  return (
    <div className="group">
      <Link to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden bg-parchment aspect-[3/4] mb-4">
          <p id={`shop-${product.descId}`} className="sr-only">{product.shortDescription}</p>
          <p id={`shop-${product.titleId}`} className="sr-only">{product.name}</p>

          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-${product.descId}] [shop-${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.tags.includes('bestseller') && (
              <span className="bg-gold text-cream text-[9px] uppercase tracking-widest font-medium px-2 py-0.5 font-sans">
                Bestseller
              </span>
            )}
            {product.tags.includes('new') && (
              <span className="bg-ink text-cream text-[9px] uppercase tracking-widest font-medium px-2 py-0.5 font-sans">
                New
              </span>
            )}
          </div>

          <button
            onClick={(e) => { e.preventDefault(); onAddToCart(); }}
            className="absolute bottom-0 left-0 right-0 bg-ink/90 text-cream py-3 text-[10px] uppercase tracking-widest font-medium font-sans translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-obsidian"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Quick Add
          </button>
        </div>
      </Link>

      <Link to={`/product/${product.slug}`}>
        <h3 className="font-serif text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors leading-tight">
          {product.name}
        </h3>
      </Link>

      <div className="flex items-center gap-1.5 mt-1.5">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-muted'}`}
            />
          ))}
        </div>
        <span className="text-[11px] text-taupe font-sans">({product.reviewCount})</span>
      </div>

      <p className="font-sans text-sm font-medium text-ink mt-1.5">${product.price}</p>
    </div>
  );
}
