import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Huggies', value: 'huggies' },
  { label: 'Sets', value: 'sets' },
];

const priceRanges = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under $50', value: 'under50' },
  { label: '$50 – $75', value: '50-75' },
  { label: '$75+', value: '75plus' },
];

const materials = [
  { label: 'All Materials', value: 'all' },
  { label: 'Gold', value: 'gold' },
  { label: 'Silver', value: 'silver' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePrice, setActivePrice] = useState('all');
  const [activeMaterial, setActiveMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    const handleClick = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (activePrice !== 'all') {
      list = list.filter((p) => {
        if (activePrice === 'under50') return p.price < 50;
        if (activePrice === '50-75') return p.price >= 50 && p.price <= 75;
        if (activePrice === '75plus') return p.price > 75;
        return true;
      });
    }

    if (activeMaterial !== 'all') {
      list = list.filter((p) => p.material === activeMaterial);
    }

    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);

    return list;
  }, [activeCategory, activePrice, activeMaterial, sortBy]);

  const activeFiltersCount = [
    activeCategory !== 'all',
    activePrice !== 'all',
    activeMaterial !== 'all',
  ].filter(Boolean).length;

  const clearFilters = () => {
    setActiveCategory('all');
    setActivePrice('all');
    setActiveMaterial('all');
    setSearchParams({});
  };

  const FilterGroup = ({ title, options, active, onChange }) => (
    <div className="mb-6">
      <p className="font-serif-upper text-[11px] tracking-widest-xl mb-3">{title}</p>
      <div className="space-y-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`block text-xs font-light transition-colors ${active === opt.value ? 'text-[var(--ink)] font-medium' : 'text-[var(--stone)] hover:text-[var(--ink)]'}`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <main className="pt-20 md:pt-24 bg-[var(--cream)] min-h-screen">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-3">The Collection</h1>
          <p className="text-sm text-[var(--stone)] font-light max-w-md mx-auto">
            Timeless demi-fine pieces designed for everyday elegance and lasting wear.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs uppercase tracking-wider"
          >
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>

          <div className="hidden md:block text-xs text-[var(--stone)] font-light">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </div>

          <div className="relative" ref={sortRef}>
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-xs uppercase tracking-wider"
            >
              Sort: {sortOptions.find((s) => s.value === sortBy)?.label}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-[var(--divider)] shadow-lg z-20 min-w-[180px]">
                {sortOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                    className={`block w-full text-left px-4 py-2.5 text-xs hover:bg-[var(--cream-dark)] transition-colors ${sortBy === opt.value ? 'font-medium text-[var(--ink)]' : 'text-[var(--stone)]'}`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs text-[var(--gold)] underline underline-offset-4 mb-6 hover:text-[var(--gold-dark)] transition-colors"
              >
                Clear all filters
              </button>
            )}
            <FilterGroup title="Category" options={categories} active={activeCategory} onChange={(v) => { setActiveCategory(v); setSearchParams({}); }} />
            <FilterGroup title="Price" options={priceRanges} active={activePrice} onChange={setActivePrice} />
            <FilterGroup title="Material" options={materials} active={activeMaterial} onChange={setActiveMaterial} />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl mb-2">No pieces found</p>
                <p className="text-sm text-[var(--stone)] font-light mb-4">Try adjusting your filters.</p>
                <button onClick={clearFilters} className="text-xs uppercase tracking-widest text-[var(--gold)] underline underline-offset-4">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[80] bg-black/30" onClick={() => setMobileFiltersOpen(false)} />
      )}
      <div className={`fixed top-0 left-0 h-full w-72 bg-[var(--cream)] z-[90] transform transition-transform duration-300 ${mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-5 border-b border-[var(--divider)]">
          <h2 className="font-serif-upper text-xs tracking-widest-xl">Filters</h2>
          <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-5 overflow-y-auto h-full pb-20">
          {activeFiltersCount > 0 && (
            <button onClick={clearFilters} className="text-xs text-[var(--gold)] underline underline-offset-4 mb-6">
              Clear all filters
            </button>
          )}
          <FilterGroup title="Category" options={categories} active={activeCategory} onChange={(v) => { setActiveCategory(v); setSearchParams({}); }} />
          <FilterGroup title="Price" options={priceRanges} active={activePrice} onChange={setActivePrice} />
          <FilterGroup title="Material" options={materials} active={activeMaterial} onChange={setActiveMaterial} />
        </div>
      </div>
    </main>
  );
}
