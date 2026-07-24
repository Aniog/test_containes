import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const CATEGORIES = ['earrings', 'necklaces', 'huggies', 'sets'];
const PRICE_RANGES = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
];
const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Best Rated' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category') || '';
    setSelectedCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory) list = list.filter(p => p.category === selectedCategory);
    if (selectedPrice) list = list.filter(p => p.price >= selectedPrice.min && p.price < selectedPrice.max);
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [selectedCategory, selectedPrice, sortBy]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filtered]);

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPrice(null);
    setSearchParams({});
  };

  const hasFilters = selectedCategory || selectedPrice;

  return (
    <div className="min-h-screen bg-ivory pt-20">
      {/* Page header */}
      <div className="bg-parchment border-b border-parchment-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-champagne mb-2">
            {selectedCategory ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) : 'All'}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-obsidian font-light">
            {selectedCategory
              ? selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
              : 'Shop All Jewelry'}
          </h1>
          <p className="mt-2 text-sm text-warm-gray font-sans">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex gap-8 lg:gap-12">
          {/* Sidebar filters — desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-sans text-xs tracking-widest uppercase text-obsidian">Filters</h3>
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-[10px] text-warm-gray hover:text-champagne transition-colors font-sans tracking-wide"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Category */}
              <div className="mb-8">
                <h4 className="font-sans text-[10px] tracking-widest uppercase text-warm-gray mb-3">Category</h4>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => { setSelectedCategory(''); setSearchParams({}); }}
                    className={`text-left text-sm font-sans transition-colors ${!selectedCategory ? 'text-champagne font-medium' : 'text-warm-gray hover:text-obsidian'}`}
                  >
                    All
                  </button>
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setSearchParams({ category: cat }); }}
                      className={`text-left text-sm font-sans capitalize transition-colors ${selectedCategory === cat ? 'text-champagne font-medium' : 'text-warm-gray hover:text-obsidian'}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h4 className="font-sans text-[10px] tracking-widest uppercase text-warm-gray mb-3">Price</h4>
                <div className="flex flex-col gap-2">
                  {PRICE_RANGES.map(range => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPrice(selectedPrice?.label === range.label ? null : range)}
                      className={`text-left text-sm font-sans transition-colors ${selectedPrice?.label === range.label ? 'text-champagne font-medium' : 'text-warm-gray hover:text-obsidian'}`}
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
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-parchment-dark">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-obsidian"
              >
                <SlidersHorizontal size={14} />
                Filter
                {hasFilters && (
                  <span className="bg-champagne text-obsidian text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                    {(selectedCategory ? 1 : 0) + (selectedPrice ? 1 : 0)}
                  </span>
                )}
              </button>

              <div className="hidden lg:block" />

              {/* Sort */}
              <div className="relative flex items-center gap-2">
                <span className="font-sans text-xs text-warm-gray hidden sm:block">Sort:</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="font-sans text-xs text-obsidian bg-transparent border border-parchment-dark px-3 py-2 pr-7 appearance-none cursor-pointer focus:outline-none focus:border-champagne"
                >
                  {SORT_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-2 text-warm-gray pointer-events-none" />
              </div>
            </div>

            {/* Active filter chips */}
            {hasFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory && (
                  <span className="flex items-center gap-1 bg-parchment border border-parchment-dark text-xs font-sans text-obsidian px-3 py-1.5 capitalize">
                    {selectedCategory}
                    <button onClick={() => { setSelectedCategory(''); setSearchParams({}); }}>
                      <X size={11} className="text-warm-gray hover:text-obsidian" />
                    </button>
                  </span>
                )}
                {selectedPrice && (
                  <span className="flex items-center gap-1 bg-parchment border border-parchment-dark text-xs font-sans text-obsidian px-3 py-1.5">
                    {selectedPrice.label}
                    <button onClick={() => setSelectedPrice(null)}>
                      <X size={11} className="text-warm-gray hover:text-obsidian" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-obsidian mb-3">No pieces found</p>
                <p className="text-sm text-warm-gray font-sans mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="font-sans text-xs tracking-widest uppercase text-champagne border border-champagne px-6 py-3 hover:bg-champagne hover:text-ivory transition-all"
                >
                  Clear Filters
                </button>
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
          <div
            className="fixed inset-0 bg-obsidian/40 z-50 backdrop-blur-sm"
            onClick={() => setFilterOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 bg-ivory z-50 rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-sans text-sm tracking-widest uppercase text-obsidian">Filters</h3>
              <button onClick={() => setFilterOpen(false)}>
                <X size={20} className="text-warm-gray" />
              </button>
            </div>

            <div className="mb-6">
              <h4 className="font-sans text-[10px] tracking-widest uppercase text-warm-gray mb-3">Category</h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => { setSelectedCategory(''); setSearchParams({}); }}
                  className={`px-4 py-2 text-xs font-sans border transition-colors ${!selectedCategory ? 'border-champagne bg-champagne text-obsidian' : 'border-parchment-dark text-warm-gray'}`}
                >
                  All
                </button>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); setSearchParams({ category: cat }); }}
                    className={`px-4 py-2 text-xs font-sans border capitalize transition-colors ${selectedCategory === cat ? 'border-champagne bg-champagne text-obsidian' : 'border-parchment-dark text-warm-gray'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-sans text-[10px] tracking-widest uppercase text-warm-gray mb-3">Price</h4>
              <div className="flex flex-wrap gap-2">
                {PRICE_RANGES.map(range => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPrice(selectedPrice?.label === range.label ? null : range)}
                    className={`px-4 py-2 text-xs font-sans border transition-colors ${selectedPrice?.label === range.label ? 'border-champagne bg-champagne text-obsidian' : 'border-parchment-dark text-warm-gray'}`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setFilterOpen(false)}
              className="w-full bg-obsidian text-ivory font-sans text-xs tracking-widest uppercase py-4 mt-2"
            >
              View {filtered.length} Results
            </button>
          </div>
        </>
      )}
    </div>
  );
}
