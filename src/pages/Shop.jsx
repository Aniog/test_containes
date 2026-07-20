import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { products, categories } from '../data/products';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $100', min: 60, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
  { label: 'Most Popular', value: 'popular' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    if (mobileFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileFilterOpen]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by price
    if (selectedPriceRange) {
      result = result.filter(
        (p) => p.price >= selectedPriceRange.min && p.price < selectedPriceRange.max
      );
    }

    // Sort
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
      case 'popular':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPriceRange, sortBy]);

  const handleCategoryChange = (cat) => {
    const newCat = selectedCategory === cat ? '' : cat;
    setSelectedCategory(newCat);
    if (newCat) {
      setSearchParams({ category: newCat });
    } else {
      setSearchParams({});
    }
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPriceRange(null);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory || selectedPriceRange;

  const FilterSidebar = ({ className = '' }) => (
    <div className={className}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs tracking-ultra-wide uppercase text-charcoal-900 font-semibold">Filters</h3>
        {hasActiveFilters && (
          <button onClick={clearFilters} className="text-[10px] text-gold-600 underline">
            Clear All
          </button>
        )}
      </div>

      {/* Category filter */}
      <div className="mb-8">
        <h4 className="text-[11px] tracking-ultra-wide uppercase text-charcoal-700 font-semibold mb-3">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                selectedCategory === cat.id
                  ? 'text-gold-700 font-medium'
                  : 'text-charcoal-600 hover:text-charcoal-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-gold-600 border-gold-600'
                    : 'border-charcoal-300'
                }`}>
                  {selectedCategory === cat.id && (
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div className="mb-8">
        <h4 className="text-[11px] tracking-ultra-wide uppercase text-charcoal-700 font-semibold mb-3">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedPriceRange(selectedPriceRange?.label === range.label ? null : range)}
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                selectedPriceRange?.label === range.label
                  ? 'text-gold-700 font-medium'
                  : 'text-charcoal-600 hover:text-charcoal-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center transition-colors ${
                  selectedPriceRange?.label === range.label
                    ? 'bg-gold-600 border-gold-600'
                    : 'border-charcoal-300'
                }`}>
                  {selectedPriceRange?.label === range.label && (
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
                {range.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 sm:pt-24 min-h-screen">
      {/* Page header */}
      <div className="bg-brand-100/30 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-600 text-xs tracking-mega-wide uppercase font-medium mb-3">
            Our Collection
          </p>
          <h1 className="heading-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal-950 font-light">
            {selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-5" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex items-center justify-between mb-8">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="lg:hidden flex items-center gap-2 text-xs tracking-wide uppercase text-charcoal-700 font-semibold"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span className="w-5 h-5 bg-gold-600 text-white text-[10px] rounded-full flex items-center justify-center">
                {(selectedCategory ? 1 : 0) + (selectedPriceRange ? 1 : 0)}
              </span>
            )}
          </button>

          {/* Sort dropdown */}
          <div className="relative ml-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-wide uppercase text-charcoal-700 font-semibold pr-8 pl-2 py-2 border border-charcoal-200 rounded-sm cursor-pointer focus:outline-none focus:border-gold-500 transition-colors"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-charcoal-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <FilterSidebar className="hidden lg:block w-56 flex-shrink-0" />

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="heading-serif text-2xl text-charcoal-700 mb-2">No products found</p>
                <p className="text-sm text-charcoal-500 mb-6">Try adjusting your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-ultra-wide uppercase text-gold-600 font-semibold border-b border-gold-400 pb-1"
                >
                  Clear Filters
                </button>
              </div>
            )}

            {/* Results count */}
            <div className="mt-8 text-center">
              <p className="text-xs text-charcoal-500">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-charcoal-950/40" onClick={() => setMobileFilterOpen(false)} />
        <div
          className={`absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-brand-50 shadow-xl transition-transform duration-300 ${
            mobileFilterOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-brand-200/40">
            <h2 className="heading-serif text-lg text-charcoal-950">Filters</h2>
            <button onClick={() => setMobileFilterOpen(false)} className="p-2">
              <X className="w-5 h-5 text-charcoal-700" />
            </button>
          </div>
          <div className="px-6 py-6 overflow-y-auto h-[calc(100%-70px)]">
            <FilterSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
