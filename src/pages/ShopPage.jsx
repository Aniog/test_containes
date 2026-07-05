import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories, priceRanges } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const containerRef = useRef(null);

  const categoryFilter = searchParams.get('category') || '';
  const priceFilter = searchParams.get('price') || '';
  const sortValue = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }

    if (priceFilter) {
      const range = priceRanges.find((r) => r.id === priceFilter);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    switch (sortValue) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [categoryFilter, priceFilter, sortValue]);

  useEffect(() => {
    if (!containerRef.current) return;
    const raf = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(raf);
  }, [filteredProducts]);

  const activeFilters = [
    categoryFilter && { key: 'category', label: categories.find((c) => c.id === categoryFilter)?.name || categoryFilter },
    priceFilter && { key: 'price', label: priceRanges.find((r) => r.id === priceFilter)?.label || priceFilter },
  ].filter(Boolean);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      {/* Hero banner */}
      <div className="relative h-48 md:h-64 bg-[#2C2622] flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-30"
          data-strk-bg-id="shop-hero-bg"
          data-strk-bg="gold jewelry collection display elegant dark"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative text-center">
          <h1
            className="text-3xl md:text-5xl text-[#FAF7F2] tracking-[0.1em]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {categoryFilter
              ? categories.find((c) => c.id === categoryFilter)?.name || 'Shop'
              : 'Shop All'}
          </h1>
          <p className="text-sm text-[#B8ADA0] mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-10 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-[#E8DFD5] rounded-full text-xs tracking-[0.1em] uppercase text-[#2C2622] font-semibold hover:border-[#C9A84C] transition-colors md:hidden"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>

            {activeFilters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key, '')}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full text-[10px] tracking-wider uppercase text-[#2C2622] font-semibold"
              >
                {f.label}
                <X size={10} />
              </button>
            ))}
          </div>

          <div className="relative">
            <select
              value={sortValue}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="appearance-none bg-transparent border border-[#E8DFD5] rounded-full px-4 py-2 pr-8 text-xs tracking-wider uppercase text-[#2C2622] font-semibold cursor-pointer focus:outline-none focus:border-[#C9A84C]"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B5E52] pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0">
            <div className="sticky top-28 space-y-8">
              {/* Category filter */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase text-[#2C2622] font-semibold mb-3">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setFilter('category', '')}
                    className={`block text-sm transition-colors ${
                      !categoryFilter ? 'text-[#C9A84C] font-semibold' : 'text-[#6B5E52] hover:text-[#C9A84C]'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setFilter('category', cat.id)}
                      className={`block text-sm transition-colors ${
                        categoryFilter === cat.id
                          ? 'text-[#C9A84C] font-semibold'
                          : 'text-[#6B5E52] hover:text-[#C9A84C]'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase text-[#2C2622] font-semibold mb-3">
                  Price
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setFilter('price', '')}
                    className={`block text-sm transition-colors ${
                      !priceFilter ? 'text-[#C9A84C] font-semibold' : 'text-[#6B5E52] hover:text-[#C9A84C]'
                    }`}
                  >
                    All Prices
                  </button>
                  {priceRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => setFilter('price', range.id)}
                      className={`block text-sm transition-colors ${
                        priceFilter === range.id
                          ? 'text-[#C9A84C] font-semibold'
                          : 'text-[#6B5E52] hover:text-[#C9A84C]'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material note */}
              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase text-[#2C2622] font-semibold mb-3">
                  Material
                </h3>
                <p className="text-sm text-[#C9A84C] font-medium">18K Gold Plated</p>
                <p className="text-xs text-[#8A7F74] mt-1">All pieces</p>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-[55] md:hidden" onClick={() => setFilterOpen(false)}>
              <div className="absolute inset-0 bg-[#2C2622]/40 backdrop-blur-sm" />
              <div
                className="absolute top-0 left-0 w-72 h-full bg-[#FAF7F2] shadow-xl p-8 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-8">
                  <h3
                    className="text-lg tracking-[0.1em] uppercase text-[#2C2622]"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Filters
                  </h3>
                  <button onClick={() => setFilterOpen(false)} className="text-[#6B5E52]">
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs tracking-[0.15em] uppercase text-[#2C2622] font-semibold mb-3">
                      Category
                    </h4>
                    <div className="space-y-2.5">
                      <button
                        onClick={() => { setFilter('category', ''); setFilterOpen(false); }}
                        className={`block text-sm ${!categoryFilter ? 'text-[#C9A84C] font-semibold' : 'text-[#6B5E52]'}`}
                      >
                        All
                      </button>
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => { setFilter('category', cat.id); setFilterOpen(false); }}
                          className={`block text-sm ${categoryFilter === cat.id ? 'text-[#C9A84C] font-semibold' : 'text-[#6B5E52]'}`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs tracking-[0.15em] uppercase text-[#2C2622] font-semibold mb-3">
                      Price
                    </h4>
                    <div className="space-y-2.5">
                      <button
                        onClick={() => { setFilter('price', ''); setFilterOpen(false); }}
                        className={`block text-sm ${!priceFilter ? 'text-[#C9A84C] font-semibold' : 'text-[#6B5E52]'}`}
                      >
                        All Prices
                      </button>
                      {priceRanges.map((range) => (
                        <button
                          key={range.id}
                          onClick={() => { setFilter('price', range.id); setFilterOpen(false); }}
                          className={`block text-sm ${priceFilter === range.id ? 'text-[#C9A84C] font-semibold' : 'text-[#6B5E52]'}`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#8A7F74] text-sm mb-4">No products found with current filters.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="text-xs tracking-[0.15em] uppercase text-[#C9A84C] font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
                {filteredProducts.map((product) => (
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
