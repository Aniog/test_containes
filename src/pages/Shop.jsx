import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import strkImgConfig from '../strk-img-config.json';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $100', min: 60, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const materials = [
  { label: 'Gold', value: 'gold' },
  { label: 'Silver', value: 'silver' },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rating', value: 'rating' },
  { label: 'Most Reviewed', value: 'reviews' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const containerRef = useRef(null);

  const selectedCategory = searchParams.get('category') || '';
  const selectedPrice = searchParams.get('price') || '';
  const selectedMaterial = searchParams.get('material') || '';
  const sortBy = searchParams.get('sort') || 'featured';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const hasFilters = selectedCategory || selectedPrice || selectedMaterial;

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedMaterial) {
      result = result.filter((p) => p.material === selectedMaterial);
    }

    if (selectedPrice) {
      const range = priceRanges.find((r) => r.label === selectedPrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
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
      case 'reviews':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  useEffect(() => {
    document.body.style.overflow = mobileFiltersOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileFiltersOpen]);

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? 'p-6' : ''}`}>
      {mobile && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-lg tracking-wide">Filters</h2>
          <button
            onClick={() => setMobileFiltersOpen(false)}
            className="p-2 -mr-2 text-warm-gray hover:text-charcoal"
          >
            <X size={20} />
          </button>
        </div>
      )}

      {/* Category */}
      <div className="mb-8">
        <h3 className="font-sans text-xs tracking-widest-plus uppercase text-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => updateParam('category', '')}
            className={`block font-sans text-sm transition-colors ${
              !selectedCategory ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateParam('category', cat.id)}
              className={`block font-sans text-sm transition-colors ${
                selectedCategory === cat.id
                  ? 'text-charcoal font-medium'
                  : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="font-sans text-xs tracking-widest-plus uppercase text-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => updateParam('price', '')}
            className={`block font-sans text-sm transition-colors ${
              !selectedPrice ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => updateParam('price', range.label)}
              className={`block font-sans text-sm transition-colors ${
                selectedPrice === range.label
                  ? 'text-charcoal font-medium'
                  : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="font-sans text-xs tracking-widest-plus uppercase text-charcoal mb-4">
          Material
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => updateParam('material', '')}
            className={`block font-sans text-sm transition-colors ${
              !selectedMaterial ? 'text-charcoal font-medium' : 'text-warm-gray hover:text-charcoal'
            }`}
          >
            All Materials
          </button>
          {materials.map((mat) => (
            <button
              key={mat.value}
              onClick={() => updateParam('material', mat.value)}
              className={`block font-sans text-sm transition-colors ${
                selectedMaterial === mat.value
                  ? 'text-charcoal font-medium'
                  : 'text-warm-gray hover:text-charcoal'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {hasFilters && (
        <button
          onClick={clearFilters}
          className="font-sans text-xs tracking-wider uppercase text-warm-gray hover:text-charcoal transition-colors underline underline-offset-4"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <main ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center">
          <p className="font-sans text-xs tracking-ultra-wide uppercase text-gold mb-3">
            Our Collection
          </p>
          <h1 className="heading-display mb-4">
            {selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
              : 'Shop All'}
          </h1>
          <div className="section-divider" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-charcoal"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>
            {hasFilters && (
              <div className="hidden md:flex items-center gap-2">
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream-dark text-charcoal font-sans text-xs">
                    {categories.find((c) => c.id === selectedCategory)?.name}
                    <button onClick={() => updateParam('category', '')}>
                      <X size={12} />
                    </button>
                  </span>
                )}
                {selectedPrice && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream-dark text-charcoal font-sans text-xs">
                    {selectedPrice}
                    <button onClick={() => updateParam('price', '')}>
                      <X size={12} />
                    </button>
                  </span>
                )}
                {selectedMaterial && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cream-dark text-charcoal font-sans text-xs">
                    {materials.find((m) => m.value === selectedMaterial)?.label}
                    <button onClick={() => updateParam('material', '')}>
                      <X size={12} />
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>

          <p className="font-sans text-xs text-warm-gray">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-charcoal"
            >
              Sort
              <ChevronDown size={14} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setSortOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-48 bg-cream border border-border shadow-lg z-20">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        updateParam('sort', option.value === 'featured' ? '' : option.value);
                        setSortOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2.5 font-sans text-sm transition-colors ${
                        sortBy === option.value
                          ? 'text-charcoal font-medium bg-cream-dark'
                          : 'text-warm-gray hover:text-charcoal hover:bg-cream-dark/50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-2">No products found</p>
                <p className="font-sans text-sm text-warm-gray mb-6">
                  Try adjusting your filters to find what you&apos;re looking for.
                </p>
                <button onClick={clearFilters} className="btn-outline text-xs">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal/40"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-cream shadow-2xl transition-transform duration-300 overflow-y-auto ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <FilterSidebar mobile />
        </div>
      </div>
    </main>
  );
}
