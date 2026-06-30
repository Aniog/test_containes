import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(
    categories.find(c => c.toLowerCase() === initialCategory) || 'All'
  );
  const [activePriceRange, setActivePriceRange] = useState(priceRanges[0]);
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const filtered = products
    .filter(p => {
      const catMatch = activeCategory === 'All' || p.category === activeCategory.toLowerCase();
      const priceMatch = p.price >= activePriceRange.min && p.price <= activePriceRange.max;
      return catMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, activePriceRange, sortBy]);

  return (
    <div className="bg-parchment min-h-screen">
      {/* Page header */}
      <div className="bg-obsidian pt-24 md:pt-28 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs font-sans tracking-widest uppercase text-gold mb-3">Velmora Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl text-parchment font-light">
            Fine Jewelry
          </h1>
          <p className="mt-3 text-sm font-sans text-ghost max-w-md mx-auto">
            18K gold plated · Hypoallergenic · Crafted to be worn every day
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 md:mb-8 gap-4">
          {/* Category pills — desktop */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-sans tracking-wide uppercase px-4 py-2 border transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-obsidian text-parchment border-obsidian'
                    : 'border-linen text-stone hover:border-obsidian hover:text-obsidian'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFilterOpen(v => !v)}
            className="md:hidden flex items-center gap-2 text-xs font-sans uppercase tracking-wide text-stone border border-linen px-4 py-2"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Filters
          </button>

          <div className="flex items-center gap-3 ml-auto">
            <span className="text-xs font-sans text-muted hidden md:block">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="text-xs font-sans text-obsidian bg-parchment border border-linen px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile filters panel */}
        {filterOpen && (
          <div className="md:hidden bg-cream border border-linen p-5 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-sans uppercase tracking-wider text-obsidian font-medium">Filters</span>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-4 h-4 text-muted" />
              </button>
            </div>

            <div className="mb-4">
              <p className="text-xs font-sans uppercase tracking-wide text-muted mb-2">Category</p>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setFilterOpen(false); }}
                    className={`text-xs font-sans tracking-wide uppercase px-3 py-1.5 border transition-colors ${
                      activeCategory === cat
                        ? 'bg-obsidian text-parchment border-obsidian'
                        : 'border-linen text-stone'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-sans uppercase tracking-wide text-muted mb-2">Price</p>
              <div className="flex flex-col gap-1.5">
                {priceRanges.map(range => (
                  <button
                    key={range.label}
                    onClick={() => { setActivePriceRange(range); setFilterOpen(false); }}
                    className={`text-xs font-sans text-left px-2 py-1 transition-colors ${
                      activePriceRange.label === range.label ? 'text-gold font-medium' : 'text-stone hover:text-obsidian'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <p className="text-xs font-sans uppercase tracking-wider text-obsidian font-medium mb-4">Category</p>
                <ul className="flex flex-col gap-2">
                  {categories.map(cat => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`text-sm font-sans transition-colors ${
                          activeCategory === cat ? 'text-gold font-medium' : 'text-stone hover:text-obsidian'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-linen pt-6">
                <p className="text-xs font-sans uppercase tracking-wider text-obsidian font-medium mb-4">Price</p>
                <ul className="flex flex-col gap-2">
                  {priceRanges.map(range => (
                    <li key={range.label}>
                      <button
                        onClick={() => setActivePriceRange(range)}
                        className={`text-sm font-sans transition-colors ${
                          activePriceRange.label === range.label ? 'text-gold font-medium' : 'text-stone hover:text-obsidian'
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-stone mb-3">No pieces found</p>
                <button
                  onClick={() => { setActiveCategory('All'); setActivePriceRange(priceRanges[0]); }}
                  className="text-xs font-sans uppercase tracking-wide text-gold underline underline-offset-4"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
