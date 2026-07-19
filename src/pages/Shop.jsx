import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
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

const PRICE_RANGES = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];

const CATEGORIES = ['earrings', 'necklaces', 'huggies', 'sets'];

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
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`}>
        <div className="relative overflow-hidden bg-ivory-dark aspect-[3/4] mb-4">
          <img
            data-strk-img-id={`shop-${product.imgId}`}
            data-strk-img={`[shop-desc-${product.id}] [shop-title-${product.id}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
          />
          <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <button
              onClick={handleAdd}
              className="w-full bg-obsidian text-ivory font-manrope text-xs uppercase tracking-[0.12em] py-3 hover:bg-charcoal transition-colors"
            >
              {added ? '✓ Added' : 'Quick Add'}
            </button>
          </div>
        </div>
        <p id={`shop-title-${product.id}`} className="font-cormorant text-base uppercase tracking-[0.1em] text-obsidian mb-1 group-hover:text-gold transition-colors">
          {product.name}
        </p>
        <p id={`shop-desc-${product.id}`} className="sr-only">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-manrope text-sm font-medium text-charcoal">${product.price}</span>
          <div className="flex items-center gap-1">
            <Star size={11} className="fill-gold text-gold" />
            <span className="font-manrope text-xs text-mink">{product.rating}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, selectedPrice, sortBy]);

  const filtered = products
    .filter(p => !selectedCategory || p.category === selectedCategory)
    .filter(p => {
      if (!selectedPrice) return true;
      return p.price >= selectedPrice.min && p.price < selectedPrice.max;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPrice(null);
    setSortBy('featured');
  };

  const hasFilters = selectedCategory || selectedPrice;

  return (
    <div className="min-h-screen bg-ivory pt-16 lg:pt-20">
      {/* Page header */}
      <div className="bg-ivory-dark py-12 lg:py-16 border-b border-mink-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-manrope text-xs uppercase tracking-[0.2em] text-gold mb-3">
            {selectedCategory ? selectedCategory : 'All Jewelry'}
          </p>
          <h1 className="font-cormorant text-4xl lg:text-5xl font-light text-obsidian">
            {selectedCategory
              ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
              : 'The Collection'
            }
          </h1>
          <p className="font-manrope text-sm text-mink mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-mink-light/20">
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="flex items-center gap-2 font-manrope text-xs uppercase tracking-[0.12em] text-charcoal hover:text-gold transition-colors lg:hidden"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filters
          </button>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="hidden lg:flex items-center gap-1.5 font-manrope text-xs text-mink hover:text-obsidian transition-colors"
            >
              <X size={12} strokeWidth={1.5} />
              Clear filters
            </button>
          )}

          {/* Sort */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="font-manrope text-xs uppercase tracking-[0.1em] text-mink hidden sm:block">
              Sort:
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-mink-light/40 font-manrope text-xs text-charcoal px-4 py-2 pr-8 focus:outline-none focus:border-gold cursor-pointer"
              >
                {SORT_OPTIONS.map(o => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-mink pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="font-manrope text-xs uppercase tracking-[0.15em] text-obsidian mb-4">
                  Category
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <button
                      onClick={() => setSelectedCategory('')}
                      className={`font-manrope text-sm transition-colors ${!selectedCategory ? 'text-obsidian font-medium' : 'text-mink hover:text-obsidian'}`}
                    >
                      All
                    </button>
                  </li>
                  {CATEGORIES.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => setSelectedCategory(cat)}
                        className={`font-manrope text-sm capitalize transition-colors ${selectedCategory === cat ? 'text-obsidian font-medium' : 'text-mink hover:text-obsidian'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="font-manrope text-xs uppercase tracking-[0.15em] text-obsidian mb-4">
                  Price
                </h3>
                <ul className="space-y-2.5">
                  {PRICE_RANGES.map(range => (
                    <li key={range.label}>
                      <button
                        onClick={() => setSelectedPrice(selectedPrice?.label === range.label ? null : range)}
                        className={`font-manrope text-sm transition-colors ${selectedPrice?.label === range.label ? 'text-obsidian font-medium' : 'text-mink hover:text-obsidian'}`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="font-manrope text-xs uppercase tracking-[0.1em] text-mink hover:text-obsidian transition-colors flex items-center gap-1.5"
                >
                  <X size={11} strokeWidth={1.5} />
                  Clear all
                </button>
              )}
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-obsidian/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-ivory p-6 overflow-y-auto animate-slideInLeft">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-cormorant text-xl text-obsidian">Filters</h2>
                  <button onClick={() => setFilterOpen(false)}>
                    <X size={18} strokeWidth={1.5} className="text-mink" />
                  </button>
                </div>

                <div className="mb-8">
                  <h3 className="font-manrope text-xs uppercase tracking-[0.15em] text-obsidian mb-4">Category</h3>
                  <ul className="space-y-3">
                    <li>
                      <button onClick={() => { setSelectedCategory(''); setFilterOpen(false); }} className={`font-manrope text-sm ${!selectedCategory ? 'text-obsidian font-medium' : 'text-mink'}`}>All</button>
                    </li>
                    {CATEGORIES.map(cat => (
                      <li key={cat}>
                        <button onClick={() => { setSelectedCategory(cat); setFilterOpen(false); }} className={`font-manrope text-sm capitalize ${selectedCategory === cat ? 'text-obsidian font-medium' : 'text-mink'}`}>{cat}</button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="font-manrope text-xs uppercase tracking-[0.15em] text-obsidian mb-4">Price</h3>
                  <ul className="space-y-3">
                    {PRICE_RANGES.map(range => (
                      <li key={range.label}>
                        <button onClick={() => { setSelectedPrice(selectedPrice?.label === range.label ? null : range); setFilterOpen(false); }} className={`font-manrope text-sm ${selectedPrice?.label === range.label ? 'text-obsidian font-medium' : 'text-mink'}`}>{range.label}</button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div ref={containerRef} className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl text-mink mb-3">No pieces found</p>
                <button onClick={clearFilters} className="font-manrope text-xs uppercase tracking-widest text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-colors">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
