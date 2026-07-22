import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const categories = [
  { value: 'all', label: 'All Jewelry' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-40', label: 'Under $40' },
  { value: '40-60', label: '$40 – $60' },
  { value: '60-100', label: '$60 – $100' },
  { value: '100-999', label: '$100+' },
];

const materials = [
  { value: 'all', label: 'All Materials' },
  { value: 'gold', label: 'Gold Tone' },
  { value: 'silver', label: 'Silver Tone' },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [searchParams.toString()]);

  const activeCategory = searchParams.get('category') || 'all';
  const activePrice = searchParams.get('price') || 'all';
  const activeMaterial = searchParams.get('material') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice !== 'all') {
      const [min, max] = activePrice.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    if (activeMaterial !== 'all') {
      result = result.filter((p) => p.material === activeMaterial);
    }

    if (activeSort === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (activeSort === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (activeSort === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, activePrice, activeMaterial, activeSort]);

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (value === 'all') {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next);
  };

  const activeFiltersCount = [
    activeCategory !== 'all',
    activePrice !== 'all',
    activeMaterial !== 'all',
  ].filter(Boolean).length;

  const FilterGroup = ({ title, options, active, onChange }) => (
    <div className="mb-8">
      <h4 className="text-xs font-medium tracking-widest uppercase text-taupe mb-3">
        {title}
      </h4>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`text-left text-sm transition-colors duration-200 ${
              active === opt.value
                ? 'text-dark font-medium'
                : 'text-taupe hover:text-dark'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );

  const SidebarContent = () => (
    <>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-lg tracking-widest uppercase">Filters</h3>
        {activeFiltersCount > 0 && (
          <button
            onClick={() => setSearchParams(new URLSearchParams())}
            className="text-xs text-taupe hover:text-dark underline"
          >
            Clear All
          </button>
        )}
      </div>
      <FilterGroup
        title="Category"
        options={categories}
        active={activeCategory}
        onChange={(v) => updateParam('category', v)}
      />
      <FilterGroup
        title="Price"
        options={priceRanges}
        active={activePrice}
        onChange={(v) => updateParam('price', v)}
      />
      <FilterGroup
        title="Material"
        options={materials}
        active={activeMaterial}
        onChange={(v) => updateParam('material', v)}
      />
    </>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16 md:pb-24 bg-cream min-h-screen">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-dark mb-2">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.value === activeCategory)?.label}
          </h1>
          <p className="text-sm text-taupe">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 shrink-0">
            <SidebarContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <button
                className="md:hidden flex items-center gap-2 text-sm font-medium"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <SlidersHorizontal size={16} />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-semibold text-cream">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-taupe hidden sm:inline">Sort by:</span>
                <div className="relative">
                  <select
                    value={activeSort}
                    onChange={(e) => updateParam('sort', e.target.value)}
                    className="appearance-none bg-transparent border border-border text-dark text-sm pl-3 pr-8 py-2 focus:outline-none focus:border-gold cursor-pointer"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-taupe" />
                </div>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-dark mb-2">No pieces found</p>
                <p className="text-sm text-taupe mb-6">Try adjusting your filters.</p>
                <button
                  onClick={() => setSearchParams(new URLSearchParams())}
                  className="border border-dark text-dark px-6 py-2.5 text-xs font-medium tracking-widest uppercase hover:bg-dark hover:text-cream transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-dark/40" onClick={() => setMobileFiltersOpen(false)} />
        <div
          className={`absolute left-0 top-0 h-full w-72 bg-cream shadow-xl p-6 overflow-y-auto transition-transform duration-500 ease-out-expo ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-lg tracking-widest uppercase">Filters</h3>
            <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
              <X size={22} />
            </button>
          </div>
          <SidebarContent />
        </div>
      </div>
    </div>
  );
}
