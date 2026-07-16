import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { cn } from '@/lib/utils';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 — $75', min: 50, max: 75 },
  { label: '$75 — $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const materials = [
  { label: '18K Gold Plated', value: '18K Gold Plated' },
  { label: 'Sterling Silver', value: 'Sterling Silver' },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
  { label: 'Best Rated', value: 'rating' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Price filter
    if (selectedPriceRange) {
      result = result.filter(
        (p) => p.price >= selectedPriceRange.min && p.price < selectedPriceRange.max
      );
    }

    // Material filter
    if (selectedMaterial) {
      result = result.filter((p) => p.material === selectedMaterial);
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
      case 'newest':
        result.reverse();
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange(null);
    setSelectedMaterial(null);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPriceRange || selectedMaterial;

  const FilterSidebar = ({ mobile = false }) => (
    <div className={cn(mobile ? 'p-6' : 'sticky top-28')}>
      {mobile && (
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-xl text-charcoal">Filters</h2>
          <button onClick={() => setMobileFiltersOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Category */}
      <div className="mb-8">
        <h3 className="text-label text-charcoal-light mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchParams({});
            }}
            className={cn(
              'block w-full text-left text-sm py-1.5 transition-colors',
              selectedCategory === 'all' ? 'text-gold font-medium' : 'text-charcoal-light hover:text-charcoal'
            )}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setSearchParams({ category: cat.id });
              }}
              className={cn(
                'block w-full text-left text-sm py-1.5 transition-colors',
                selectedCategory === cat.id ? 'text-gold font-medium' : 'text-charcoal-light hover:text-charcoal'
              )}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-label text-charcoal-light mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedPriceRange(selectedPriceRange === range ? null : range)}
              className={cn(
                'block w-full text-left text-sm py-1.5 transition-colors',
                selectedPriceRange === range ? 'text-gold font-medium' : 'text-charcoal-light hover:text-charcoal'
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="text-label text-charcoal-light mb-4">Material</h3>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat.value}
              onClick={() => setSelectedMaterial(selectedMaterial === mat.value ? null : mat.value)}
              className={cn(
                'block w-full text-left text-sm py-1.5 transition-colors',
                selectedMaterial === mat.value ? 'text-gold font-medium' : 'text-charcoal-light hover:text-charcoal'
              )}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear */}
      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-widest uppercase text-charcoal-light hover:text-gold transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="bg-cream-dark py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto section-padding text-center">
          <p className="text-label text-gold mb-3">Collection</p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal">Our Jewelry</h1>
          <p className="text-charcoal-light mt-3 max-w-lg mx-auto text-sm">
            Each piece is crafted with care from premium materials, designed to be worn and treasured every day.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto section-padding py-8 md:py-12">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 text-sm text-charcoal hover:text-gold transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <p className="text-sm text-charcoal-light">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-sm text-charcoal pr-8 py-2 cursor-pointer focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-charcoal-light" />
          </div>
        </div>

        <div className="flex gap-10 lg:gap-12">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-56 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Mobile Filters Drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-charcoal/50"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="absolute left-0 top-0 h-full w-80 bg-cream-light shadow-xl">
                <FilterSidebar mobile />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-4">
                  No pieces found
                </p>
                <p className="text-sm text-charcoal-light mb-6">
                  Try adjusting your filters to discover more.
                </p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
