import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

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

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState(0);
  const [sort, setSort] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [category, priceRange, sort]);

  const filtered = products
    .filter(p => category === 'all' || p.category === category)
    .filter(p => {
      const range = PRICE_RANGES[priceRange];
      return p.price >= range.min && p.price <= range.max;
    })
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price;
      if (sort === 'price-desc') return b.price - a.price;
      if (sort === 'rating') return b.rating - a.rating;
      return 0;
    });

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setSearchParams(cat !== 'all' ? { category: cat } : {});
    setFilterOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Page header */}
      <div className="bg-cream-warm border-b border-obsidian-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <p className="font-sans text-xs font-medium tracking-[0.3em] uppercase text-gold mb-3">
            Velmora Fine Jewelry
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-obsidian">
            {category === 'all' ? 'All Jewelry' : category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
          <p className="font-sans text-sm text-obsidian-400 mt-2">
            {filtered.length} piece{filtered.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 gap-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 font-sans text-xs font-medium tracking-widest uppercase text-obsidian border border-obsidian-200 px-4 py-2.5 hover:border-obsidian transition-colors"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 font-sans text-xs font-medium tracking-widest uppercase transition-colors ${
                  category === cat
                    ? 'bg-obsidian text-cream'
                    : 'border border-obsidian-200 text-obsidian hover:border-obsidian'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="relative ml-auto">
            <button
              onClick={() => setSortOpen(v => !v)}
              className="flex items-center gap-2 font-sans text-xs font-medium tracking-widest uppercase text-obsidian border border-obsidian-200 px-4 py-2.5 hover:border-obsidian transition-colors"
            >
              Sort: {SORT_OPTIONS.find(s => s.value === sort)?.label}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-1 bg-cream border border-obsidian-100 shadow-lg z-20 min-w-[180px] animate-fade-in">
                {SORT_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => { setSort(opt.value); setSortOpen(false); }}
                    className={`w-full text-left px-4 py-3 font-sans text-xs tracking-wide hover:bg-cream-warm transition-colors ${
                      sort === opt.value ? 'text-gold font-semibold' : 'text-obsidian'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile filter panel */}
        {filterOpen && (
          <div className="md:hidden mb-6 p-5 bg-cream-warm border border-obsidian-100 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs font-semibold tracking-widest uppercase text-obsidian">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-4 h-4 text-obsidian-400" />
              </button>
            </div>
            <div className="mb-5">
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-obsidian-500 mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-3 py-1.5 font-sans text-xs font-medium tracking-wide capitalize transition-colors ${
                      category === cat
                        ? 'bg-obsidian text-cream'
                        : 'border border-obsidian-200 text-obsidian'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-sans text-xs font-semibold tracking-widest uppercase text-obsidian-500 mb-3">Price</p>
              <div className="space-y-2">
                {PRICE_RANGES.map((range, i) => (
                  <button
                    key={range.label}
                    onClick={() => { setPriceRange(i); setFilterOpen(false); }}
                    className={`block w-full text-left font-sans text-xs py-1.5 transition-colors ${
                      priceRange === i ? 'text-gold font-semibold' : 'text-obsidian-500 hover:text-obsidian'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <p className="font-sans text-xs font-semibold tracking-widest uppercase text-obsidian mb-4">
                  Category
                </p>
                <div className="space-y-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`block w-full text-left font-sans text-sm capitalize py-1.5 transition-colors ${
                        category === cat
                          ? 'text-gold font-semibold'
                          : 'text-obsidian-500 hover:text-obsidian'
                      }`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-obsidian-100" />

              {/* Price filter */}
              <div>
                <p className="font-sans text-xs font-semibold tracking-widest uppercase text-obsidian mb-4">
                  Price
                </p>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range, i) => (
                    <button
                      key={range.label}
                      onClick={() => setPriceRange(i)}
                      className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                        priceRange === i
                          ? 'text-gold font-semibold'
                          : 'text-obsidian-500 hover:text-obsidian'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-obsidian-300 mb-3">No pieces found</p>
                <p className="font-sans text-sm text-obsidian-400">Try adjusting your filters.</p>
                <button
                  onClick={() => { setCategory('all'); setPriceRange(0); }}
                  className="mt-6 font-sans text-xs font-medium tracking-widest uppercase text-gold border-b border-gold pb-0.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
