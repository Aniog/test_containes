import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $100', min: 60, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory !== 'all' ? initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1) : 'All'
  );
  const [selectedPrice, setSelectedPrice] = useState(priceRanges[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, selectedPrice, sortBy]);

  const filtered = products
    .filter(p => {
      const catMatch = selectedCategory === 'All' || p.category === selectedCategory.toLowerCase();
      const priceMatch = p.price >= selectedPrice.min && p.price <= selectedPrice.max;
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="bg-cream min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-parchment border-b border-linen">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-gold mb-3">
            Velmora Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-ink">
            {selectedCategory === 'All' ? 'All Jewelry' : selectedCategory}
          </h1>
          <p className="font-sans text-sm text-ink-muted mt-2">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categoryOptions.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 font-sans text-[11px] font-semibold uppercase tracking-widest border transition-colors duration-200 ${
                  selectedCategory === cat
                    ? 'bg-obsidian text-ivory border-obsidian'
                    : 'bg-transparent text-ink-muted border-linen hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-widest text-ink border border-linen px-4 py-2 hover:border-gold hover:text-gold transition-colors"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} />
            Filter
          </button>

          {/* Sort dropdown */}
          <div className="relative flex-shrink-0">
            <div className="flex items-center gap-2 border border-linen px-4 py-2 cursor-pointer hover:border-gold transition-colors group">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-ink-muted group-hover:text-gold transition-colors">
                Sort: {sortOptions.find(s => s.value === sortBy)?.label}
              </span>
              <ChevronDown size={13} strokeWidth={1.5} className="text-ink-muted" />
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="absolute inset-0 opacity-0 cursor-pointer w-full"
                aria-label="Sort products"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden bg-parchment border border-linen p-5 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-ink">Filters</span>
              <button onClick={() => setFilterOpen(false)} className="text-ink-muted hover:text-gold transition-colors">
                <X size={16} strokeWidth={1.5} />
              </button>
            </div>
            <div className="mb-5">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-ink-muted mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                {categoryOptions.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); setFilterOpen(false); }}
                    className={`px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-widest border transition-colors ${
                      selectedCategory === cat ? 'bg-obsidian text-ivory border-obsidian' : 'border-linen text-ink-muted hover:border-gold hover:text-gold'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-ink-muted mb-3">Price</p>
              <div className="flex flex-col gap-2">
                {priceRanges.map(range => (
                  <button
                    key={range.label}
                    onClick={() => { setSelectedPrice(range); setFilterOpen(false); }}
                    className={`text-left font-sans text-sm transition-colors ${
                      selectedPrice.label === range.label ? 'text-gold font-semibold' : 'text-ink-muted hover:text-gold'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-10">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Price filter */}
              <div>
                <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-ink mb-4">Price</p>
                <div className="space-y-2">
                  {priceRanges.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPrice(range)}
                      className={`block w-full text-left font-sans text-sm transition-colors ${
                        selectedPrice.label === range.label ? 'text-gold font-semibold' : 'text-ink-muted hover:text-gold'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-ink mb-4">Material</p>
                <div className="space-y-2">
                  {['18K Gold Plated', 'Sterling Silver', 'Rose Gold'].map(m => (
                    <label key={m} className="flex items-center gap-2.5 cursor-pointer group">
                      <div className="w-3.5 h-3.5 border border-linen group-hover:border-gold transition-colors flex-shrink-0" />
                      <span className="font-sans text-sm text-ink-muted group-hover:text-gold transition-colors">{m}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-ink-muted italic mb-4">No pieces found</p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSelectedPrice(priceRanges[0]); }}
                  className="font-sans text-[11px] font-semibold uppercase tracking-widest text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {filtered.map(product => (
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
