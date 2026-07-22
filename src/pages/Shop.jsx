import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { ProductCard } from '@/components/home/Bestsellers';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies'];
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

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category')
      ? searchParams.get('category').charAt(0).toUpperCase() + searchParams.get('category').slice(1)
      : 'All'
  );
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat.charAt(0).toUpperCase() + cat.slice(1));
    }
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, selectedPrice, sortBy]);

  const filtered = products
    .filter((p) => {
      const catMatch =
        selectedCategory === 'All' ||
        p.category === selectedCategory.toLowerCase();
      const priceRange = priceRanges[selectedPrice];
      const priceMatch = p.price >= priceRange.min && p.price < priceRange.max;
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  const activeFilters = [
    selectedCategory !== 'All' && selectedCategory,
    selectedPrice !== 0 && priceRanges[selectedPrice].label,
  ].filter(Boolean);

  return (
    <div className="bg-ivory min-h-screen">
      {/* Page header */}
      <div className="bg-blush border-b border-linen pt-24 md:pt-28 pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-champagne mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-obsidian tracking-wide">
            All Jewelry
          </h1>
          <p className="font-inter text-sm text-stone mt-3">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Filter & sort bar */}
        <div className="flex items-center justify-between mb-6 md:mb-8 gap-4">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setFilterOpen((v) => !v)}
            className="md:hidden flex items-center gap-2 font-inter text-xs uppercase tracking-[0.12em] text-obsidian border border-linen px-4 py-2.5 hover:border-obsidian transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
            Filter
          </button>

          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-inter text-xs uppercase tracking-[0.1em] px-5 py-2 border transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-obsidian text-ivory border-obsidian'
                    : 'border-linen text-stone hover:border-obsidian hover:text-obsidian'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="relative ml-auto">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="flex items-center gap-2 font-inter text-xs uppercase tracking-[0.1em] text-obsidian border border-linen px-4 py-2.5 hover:border-obsidian transition-colors"
            >
              {sortOptions.find((s) => s.value === sortBy)?.label}
              <ChevronDown className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 bg-ivory border border-linen shadow-card z-20 min-w-[180px]">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    className={`w-full text-left px-4 py-3 font-inter text-xs hover:bg-linen transition-colors ${
                      sortBy === opt.value ? 'text-champagne' : 'text-obsidian'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Active filters */}
        {activeFilters.length > 0 && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="font-inter text-[10px] uppercase tracking-[0.1em] text-stone">Active:</span>
            {activeFilters.map((f) => (
              <span
                key={f}
                className="flex items-center gap-1.5 font-inter text-[11px] text-obsidian border border-linen px-3 py-1"
              >
                {f}
                <button
                  onClick={() => {
                    if (categories.includes(f)) setSelectedCategory('All');
                    else setSelectedPrice(0);
                  }}
                  className="text-stone hover:text-obsidian"
                >
                  <X className="w-3 h-3" strokeWidth={1.5} />
                </button>
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="font-inter text-[10px] uppercase tracking-[0.15em] text-stone mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left font-inter text-xs py-1 transition-colors ${
                        selectedCategory === cat
                          ? 'text-champagne'
                          : 'text-stone hover:text-obsidian'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-linen" />

              {/* Price filter */}
              <div>
                <h3 className="font-inter text-[10px] uppercase tracking-[0.15em] text-stone mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setSelectedPrice(i)}
                      className={`block w-full text-left font-inter text-xs py-1 transition-colors ${
                        selectedPrice === i
                          ? 'text-champagne'
                          : 'text-stone hover:text-obsidian'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter panel */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 bg-ivory md:hidden flex flex-col">
              <div className="flex items-center justify-between px-6 py-5 border-b border-linen">
                <span className="font-cormorant text-xl font-light text-obsidian">Filters</span>
                <button onClick={() => setFilterOpen(false)}>
                  <X className="w-5 h-5 text-stone" strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">
                <div>
                  <h3 className="font-inter text-[10px] uppercase tracking-[0.15em] text-stone mb-4">Category</h3>
                  <div className="space-y-3">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setSelectedCategory(cat); setFilterOpen(false); }}
                        className={`block font-inter text-sm ${selectedCategory === cat ? 'text-champagne' : 'text-obsidian'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="w-full h-px bg-linen" />
                <div>
                  <h3 className="font-inter text-[10px] uppercase tracking-[0.15em] text-stone mb-4">Price</h3>
                  <div className="space-y-3">
                    {priceRanges.map((range, i) => (
                      <button
                        key={range.label}
                        onClick={() => { setSelectedPrice(i); setFilterOpen(false); }}
                        className={`block font-inter text-sm ${selectedPrice === i ? 'text-champagne' : 'text-obsidian'}`}
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
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-cormorant text-2xl font-light text-stone">No pieces found</p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSelectedPrice(0); }}
                  className="mt-4 font-inter text-xs uppercase tracking-[0.12em] text-champagne hover:text-champagne-dark transition-colors"
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
};

export default Shop;
