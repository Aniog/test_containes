import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $100', min: 60, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Selling', value: 'bestselling' },
  { label: 'Newest', value: 'newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [selectedCategory, selectedPriceRange, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedPriceRange) {
      const range = priceRanges.find((r) => r.label === selectedPriceRange);
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
      case 'bestselling':
        result.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPriceRange, sortBy]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange(null);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPriceRange !== null;

  const FilterSidebar = ({ mobile = false }) => (
    <div className={`${mobile ? '' : 'hidden lg:block w-64 flex-shrink-0'}`}>
      <div className="space-y-8">
        {/* Category filter */}
        <div>
          <h3 className="font-sans text-caption uppercase tracking-[0.15em] text-velmora-charcoal font-medium mb-4">
            Category
          </h3>
          <div className="space-y-2.5">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`block text-body-sm transition-colors duration-200 ${
                selectedCategory === 'all'
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-gray hover:text-velmora-charcoal'
              }`}
            >
              All Jewelry
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`block text-body-sm transition-colors duration-200 ${
                  selectedCategory === cat.id
                    ? 'text-velmora-gold font-medium'
                    : 'text-velmora-gray hover:text-velmora-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Price filter */}
        <div>
          <h3 className="font-sans text-caption uppercase tracking-[0.15em] text-velmora-charcoal font-medium mb-4">
            Price
          </h3>
          <div className="space-y-2.5">
            {priceRanges.map((range) => (
              <button
                key={range.label}
                onClick={() =>
                  setSelectedPriceRange(
                    selectedPriceRange === range.label ? null : range.label
                  )
                }
                className={`block text-body-sm transition-colors duration-200 ${
                  selectedPriceRange === range.label
                    ? 'text-velmora-gold font-medium'
                    : 'text-velmora-gray hover:text-velmora-charcoal'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>

        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-caption text-velmora-muted hover:text-velmora-gold font-sans uppercase tracking-wider underline underline-offset-4 transition-colors"
          >
            Clear All Filters
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory pt-20">
      {/* Page header */}
      <div className="container-narrow py-10 md:py-14 text-center">
        <div className="flex items-center justify-center gap-4 mb-5">
          <span className="w-12 h-hairline bg-velmora-gold" />
          <span className="font-sans text-caption uppercase tracking-[0.2em] text-velmora-gold">
            Our Collection
          </span>
          <span className="w-12 h-hairline bg-velmora-gold" />
        </div>
        <h1 className="heading-section text-velmora-charcoal">Shop All Jewelry</h1>
        <p className="text-body text-velmora-gray mt-4 max-w-lg mx-auto">
          Discover our curated collection of demi-fine gold jewelry, designed to be worn and treasured every day.
        </p>
      </div>

      <div className="container-narrow pb-22">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 border-b border-hairline border-velmora-light/30 pb-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-body-sm text-velmora-gray hover:text-velmora-charcoal transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-1.5 h-1.5 rounded-full bg-velmora-gold" />
            )}
          </button>

          <div className="hidden lg:flex items-center gap-2">
            <span className="text-body-sm text-velmora-muted font-sans">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </span>
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-body-sm text-velmora-gray font-sans pr-8 py-1 cursor-pointer focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-velmora-muted absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <FilterSidebar />

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-heading-md text-velmora-charcoal mb-3">
                  No products found
                </p>
                <p className="text-body-sm text-velmora-muted mb-6">
                  Try adjusting your filters to find what you're looking for.
                </p>
                <button onClick={clearFilters} className="btn-secondary text-[11px]">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-400 ${
          mobileFiltersOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-velmora-black/50 transition-opacity duration-400 ${
            mobileFiltersOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-velmora-white shadow-drawer transition-transform duration-400 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-heading-md text-velmora-charcoal">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-velmora-muted hover:text-velmora-charcoal transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar mobile />
          </div>
        </div>
      </div>
    </div>
  );
}
