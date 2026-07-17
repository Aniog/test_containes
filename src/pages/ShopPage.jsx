import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import ProductCard from '../components/shop/ProductCard';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activePriceIdx, setActivePriceIdx] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setActiveCategory(searchParams.get('category') || 'All');
  }, [searchParams]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceIdx, sortBy]);

  const priceRange = priceRanges[activePriceIdx];

  const filtered = products
    .filter((p) => activeCategory === 'All' || p.category === activeCategory)
    .filter((p) => p.price >= priceRange.min && p.price <= priceRange.max)
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="bg-velmora-cream min-h-screen pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-velmora-linen border-b border-velmora-mist py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-velmora-gold mb-3 font-medium">
            Velmora Collection
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light text-velmora-obsidian tracking-wide">
            All Jewelry
          </h1>
          <p className="mt-3 text-sm text-velmora-slate">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14">
        <div className="flex gap-10 md:gap-14">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28">
              <FilterPanel
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                priceRanges={priceRanges}
                activePriceIdx={activePriceIdx}
                setActivePriceIdx={setActivePriceIdx}
              />
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-5 border-b border-velmora-mist">
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-velmora-slate hover:text-velmora-obsidian transition-colors"
              >
                <SlidersHorizontal size={14} strokeWidth={1.5} />
                Filter
              </button>

              <div className="flex items-center gap-3 ml-auto">
                <span className="text-xs text-velmora-dust hidden md:block">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-xs uppercase tracking-widest font-medium text-velmora-obsidian bg-transparent border border-velmora-mist px-3 py-2 focus:outline-none focus:border-velmora-gold cursor-pointer"
                >
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl font-light text-velmora-slate">No products found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceIdx(0); }}
                  className="mt-4 text-xs uppercase tracking-widest text-velmora-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <>
        <div
          className={`fixed inset-0 z-50 bg-velmora-obsidian/40 transition-opacity duration-300 md:hidden ${
            sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setSidebarOpen(false)}
        />
        <div
          className={`fixed top-0 left-0 h-full w-72 z-50 bg-velmora-cream shadow-drawer flex flex-col transition-transform duration-500 ease-out-expo md:hidden ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-mist">
            <span className="text-xs uppercase tracking-widest font-medium text-velmora-obsidian">Filters</span>
            <button onClick={() => setSidebarOpen(false)} className="text-velmora-slate hover:text-velmora-obsidian">
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <FilterPanel
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={(c) => { setActiveCategory(c); setSidebarOpen(false); }}
              priceRanges={priceRanges}
              activePriceIdx={activePriceIdx}
              setActivePriceIdx={(i) => { setActivePriceIdx(i); setSidebarOpen(false); }}
            />
          </div>
        </div>
      </>
    </div>
  );
}

function FilterPanel({ categories, activeCategory, setActiveCategory, priceRanges, activePriceIdx, setActivePriceIdx }) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-[10px] uppercase tracking-widest font-medium text-velmora-obsidian mb-4">
          Category
        </h3>
        <ul className="flex flex-col gap-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-medium transition-colors ${
                  activeCategory === cat
                    ? 'text-velmora-gold'
                    : 'text-velmora-slate hover:text-velmora-obsidian'
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="hairline" />

      <div>
        <h3 className="text-[10px] uppercase tracking-widest font-medium text-velmora-obsidian mb-4">
          Price
        </h3>
        <ul className="flex flex-col gap-2">
          {priceRanges.map((range, i) => (
            <li key={range.label}>
              <button
                onClick={() => setActivePriceIdx(i)}
                className={`text-xs font-medium transition-colors ${
                  activePriceIdx === i
                    ? 'text-velmora-gold'
                    : 'text-velmora-slate hover:text-velmora-obsidian'
                }`}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
