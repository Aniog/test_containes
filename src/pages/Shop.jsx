import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 39 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
  { label: 'Over $100', min: 100, max: 999 },
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
  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState(null);
  const [material, setMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [category, priceRange, material, sortBy]);

  const filtered = useMemo(() => {
    let result = [...products];

    if (category !== 'all') {
      result = result.filter((p) => p.category === category);
    }

    if (priceRange) {
      result = result.filter(
        (p) => p.price >= priceRange.min && p.price <= priceRange.max
      );
    }

    if (material !== 'all') {
      result = result.filter((p) =>
        p.materials?.toLowerCase().includes(material.toLowerCase())
      );
    }

    switch (sortBy) {
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
  }, [category, priceRange, material, sortBy]);

  const activeFilters = [
    category !== 'all' && { key: 'category', label: category },
    priceRange && { key: 'price', label: priceRange.label },
    material !== 'all' && { key: 'material', label: material },
  ].filter(Boolean);

  const clearFilters = () => {
    setCategory('all');
    setPriceRange(null);
    setMaterial('all');
  };

  return (
    <main ref={containerRef} className="bg-cream pt-20 md:pt-24 min-h-screen">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16 text-center">
        <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-3">
          Our Collection
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal">
          Shop All Jewelry
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 md:pb-28">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal font-sans hover:text-gold transition-colors md:hidden"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted font-sans hidden sm:inline">
              {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-xs uppercase tracking-widest text-charcoal font-sans cursor-pointer pr-6 py-1 focus:outline-none hover:text-gold transition-colors"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 text-muted absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside
            className={cn(
              'w-56 flex-shrink-0 space-y-8',
              'hidden md:block'
            )}
          >
            {/* Category */}
            <div>
              <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal font-medium mb-4">
                Category
              </h3>
              <div className="space-y-2">
                {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={cn(
                      'block text-sm font-sans transition-colors duration-200',
                      category === cat
                        ? 'text-gold font-medium'
                        : 'text-muted hover:text-ink'
                    )}
                  >
                    {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div>
              <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal font-medium mb-4">
                Price
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setPriceRange(null)}
                  className={cn(
                    'block text-sm font-sans transition-colors duration-200',
                    !priceRange ? 'text-gold font-medium' : 'text-muted hover:text-ink'
                  )}
                >
                  All Prices
                </button>
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setPriceRange(range)}
                    className={cn(
                      'block text-sm font-sans transition-colors duration-200',
                      priceRange?.label === range.label
                        ? 'text-gold font-medium'
                        : 'text-muted hover:text-ink'
                    )}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal font-medium mb-4">
                Material
              </h3>
              <div className="space-y-2">
                {['all', 'gold', 'silver'].map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setMaterial(mat)}
                    className={cn(
                      'block text-sm font-sans transition-colors duration-200',
                      material === mat
                        ? 'text-gold font-medium'
                        : 'text-muted hover:text-ink'
                    )}
                  >
                    {mat === 'all' ? 'All Materials' : mat.charAt(0).toUpperCase() + mat.slice(1) + ' Plated'}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filtersOpen && (
            <div className="fixed inset-0 z-40 md:hidden">
              <div
                className="absolute inset-0 bg-charcoal/40"
                onClick={() => setFiltersOpen(false)}
              />
              <div className="absolute left-0 top-0 h-full w-72 bg-cream p-6 overflow-y-auto shadow-xl">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-sans text-xs uppercase tracking-widest text-charcoal font-medium">
                    Filters
                  </h2>
                  <button onClick={() => setFiltersOpen(false)}>
                    <X className="w-5 h-5 text-muted" />
                  </button>
                </div>

                {/* Category */}
                <div className="mb-8">
                  <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal font-medium mb-4">
                    Category
                  </h3>
                  <div className="space-y-3">
                    {['all', 'earrings', 'necklaces', 'huggies', 'sets'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setCategory(cat); setFiltersOpen(false); }}
                        className={cn(
                          'block text-sm font-sans transition-colors duration-200',
                          category === cat ? 'text-gold font-medium' : 'text-muted hover:text-ink'
                        )}
                      >
                        {cat === 'all' ? 'All Jewelry' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal font-medium mb-4">
                    Price
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => { setPriceRange(null); setFiltersOpen(false); }}
                      className={cn(
                        'block text-sm font-sans transition-colors duration-200',
                        !priceRange ? 'text-gold font-medium' : 'text-muted hover:text-ink'
                      )}
                    >
                      All Prices
                    </button>
                    {priceRanges.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => { setPriceRange(range); setFiltersOpen(false); }}
                        className={cn(
                          'block text-sm font-sans transition-colors duration-200',
                          priceRange?.label === range.label ? 'text-gold font-medium' : 'text-muted hover:text-ink'
                        )}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Material */}
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-widest text-charcoal font-medium mb-4">
                    Material
                  </h3>
                  <div className="space-y-3">
                    {['all', 'gold', 'silver'].map((mat) => (
                      <button
                        key={mat}
                        onClick={() => { setMaterial(mat); setFiltersOpen(false); }}
                        className={cn(
                          'block text-sm font-sans transition-colors duration-200',
                          material === mat ? 'text-gold font-medium' : 'text-muted hover:text-ink'
                        )}
                      >
                        {mat === 'all' ? 'All Materials' : mat.charAt(0).toUpperCase() + mat.slice(1) + ' Plated'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Active filters */}
            {activeFilters.length > 0 && (
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                {activeFilters.map((f) => (
                  <span
                    key={f.key}
                    className="inline-flex items-center gap-1.5 bg-linen text-xs text-charcoal font-sans px-3 py-1.5 rounded"
                  >
                    {f.label}
                    <button
                      onClick={() => {
                        if (f.key === 'category') setCategory('all');
                        if (f.key === 'price') setPriceRange(null);
                        if (f.key === 'material') setMaterial('all');
                      }}
                      className="text-muted hover:text-ink"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                <button
                  onClick={clearFilters}
                  className="text-xs text-muted hover:text-gold font-sans underline ml-2"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-charcoal mb-2">
                  No products found
                </p>
                <p className="text-sm text-muted font-sans mb-6">
                  Try adjusting your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="text-xs text-gold uppercase tracking-widest font-sans border-b border-gold pb-1 hover:text-gold-dark transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
