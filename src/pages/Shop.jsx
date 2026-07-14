import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const categories = ['all', 'earrings', 'necklaces', 'huggies', 'sets'];
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filtered = products
    .filter(p => activeCategory === 'all' || p.category === activeCategory)
    .filter(p => {
      const range = priceRanges[activePriceRange];
      return p.price >= range.min && p.price <= range.max;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
    setSidebarOpen(false);
  };

  const FilterSidebar = () => (
    <div className="flex flex-col gap-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-obsidian mb-4">Category</h3>
        <ul className="flex flex-col gap-2">
          {categories.map(cat => (
            <li key={cat}>
              <button
                onClick={() => handleCategoryChange(cat)}
                className={`font-sans text-sm capitalize transition-colors duration-200 ${
                  activeCategory === cat ? 'text-gold font-500' : 'text-stone hover:text-obsidian'
                }`}
              >
                {cat === 'all' ? 'All Jewelry' : cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-obsidian mb-4">Price</h3>
        <ul className="flex flex-col gap-2">
          {priceRanges.map((range, i) => (
            <li key={range.label}>
              <button
                onClick={() => setActivePriceRange(i)}
                className={`font-sans text-sm transition-colors duration-200 ${
                  activePriceRange === i ? 'text-gold font-500' : 'text-stone hover:text-obsidian'
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
        <h3 className="font-sans text-xs uppercase tracking-[0.15em] text-obsidian mb-4">Material</h3>
        <ul className="flex flex-col gap-2">
          {['18K Gold Plated', 'Sterling Silver'].map(m => (
            <li key={m}>
              <button className="font-sans text-sm text-stone hover:text-obsidian transition-colors">
                {m}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="bg-parchment min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-sand bg-linen">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 md:py-14">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-gold mb-2">Velmora</p>
          <h1 className="font-serif text-4xl md:text-5xl text-obsidian">
            {activeCategory === 'all' ? 'All Jewelry' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="font-sans text-sm text-muted mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0 pt-1">
            <FilterSidebar />
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-sand">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-[0.12em] text-stone hover:text-obsidian transition-colors"
              >
                <SlidersHorizontal size={14} />
                Filter
              </button>

              <div className="hidden md:block" />

              {/* Sort */}
              <div className="flex items-center gap-3">
                <span className="font-sans text-xs uppercase tracking-[0.12em] text-muted hidden md:block">Sort by</span>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="font-sans text-xs text-obsidian bg-transparent border border-sand px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            <div ref={containerRef}>
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-2xl text-obsidian mb-3">No pieces found</p>
                  <p className="font-sans text-sm text-muted">Try adjusting your filters.</p>
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

      {/* Mobile filter drawer */}
      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-obsidian/40 z-50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed top-0 left-0 h-full w-72 bg-parchment z-50 p-8 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <span className="font-sans text-xs uppercase tracking-[0.15em] text-obsidian">Filters</span>
              <button onClick={() => setSidebarOpen(false)} className="text-stone hover:text-obsidian">
                <X size={18} />
              </button>
            </div>
            <FilterSidebar />
          </div>
        </>
      )}
    </div>
  );
}
