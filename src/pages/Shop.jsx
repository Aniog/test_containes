import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { cn } from '../lib/utils';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const materialOptions = ['Gold', 'Silver'];

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
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');

  // Initialize from URL params
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategories([category]);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Price filter
    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      result = result.filter(p => p.price >= range.min && p.price < range.max);
    }

    // Material filter
    if (selectedMaterials.length > 0) {
      result = result.filter(p =>
        p.variants.some(v => selectedMaterials.includes(v.name) && v.available)
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
      case 'reviews':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return result;
  }, [selectedCategories, selectedPriceRange, selectedMaterials, sortBy]);

  const toggleCategory = (catId) => {
    setSelectedCategories(prev =>
      prev.includes(catId)
        ? prev.filter(c => c !== catId)
        : [...prev, catId]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials(prev =>
      prev.includes(mat)
        ? prev.filter(m => m !== mat)
        : [...prev, mat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange(null);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedPriceRange !== null || selectedMaterials.length > 0;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-overline uppercase text-text-dark-secondary mb-4">Category</h3>
        <div className="space-y-2.5">
          {categories.map(cat => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="sr-only"
              />
              <div className={cn(
                'w-4 h-4 border rounded-sm flex items-center justify-center transition-all duration-200',
                selectedCategories.includes(cat.id)
                  ? 'bg-brand-gold border-brand-gold'
                  : 'border-brand-gold/30 group-hover:border-brand-gold/60'
              )}>
                {selectedCategories.includes(cat.id) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className="font-sans text-sm text-text-dark group-hover:text-brand-gold-dark transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-overline uppercase text-text-dark-secondary mb-4">Price</h3>
        <div className="space-y-2.5">
          {priceRanges.map((range, i) => (
            <label key={i} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === i}
                onChange={() => setSelectedPriceRange(selectedPriceRange === i ? null : i)}
                className="sr-only"
              />
              <div className={cn(
                'w-4 h-4 border rounded-full flex items-center justify-center transition-all duration-200',
                selectedPriceRange === i
                  ? 'border-brand-gold'
                  : 'border-brand-gold/30 group-hover:border-brand-gold/60'
              )}>
                {selectedPriceRange === i && (
                  <div className="w-2 h-2 bg-brand-gold rounded-full" />
                )}
              </div>
              <span className="font-sans text-sm text-text-dark group-hover:text-brand-gold-dark transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-overline uppercase text-text-dark-secondary mb-4">Material</h3>
        <div className="space-y-2.5">
          {materialOptions.map(mat => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(mat)}
                onChange={() => toggleMaterial(mat)}
                className="sr-only"
              />
              <div className={cn(
                'w-4 h-4 border rounded-sm flex items-center justify-center transition-all duration-200',
                selectedMaterials.includes(mat)
                  ? 'bg-brand-gold border-brand-gold'
                  : 'border-brand-gold/30 group-hover:border-brand-gold/60'
              )}>
                {selectedMaterials.includes(mat) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className="font-sans text-sm text-text-dark group-hover:text-brand-gold-dark transition-colors">
                {mat}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="bg-surface-warm pt-20 lg:pt-24 min-h-screen">
      {/* Header */}
      <div className="section-padding py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-overline uppercase text-brand-gold mb-2">Shop</p>
          <h1 className="font-serif text-heading-2 text-text-dark tracking-[0.03em] mb-2">
            Our Collection
          </h1>
          <p className="font-sans text-body text-text-dark-secondary">
            Demi-fine jewelry designed for everyday elegance. Each piece is 18K gold plated and hypoallergenic.
          </p>
        </div>
      </div>

      <div className="section-padding pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-[0.1em] text-text-dark border border-brand-gold/20 px-4 py-2.5 rounded-sm hover:border-brand-gold/40 transition-colors"
            >
              <SlidersHorizontal size={14} />
              Filters
              {hasActiveFilters && (
                <span className="w-4 h-4 bg-brand-gold text-surface-primary text-[9px] rounded-full flex items-center justify-center">
                  {selectedCategories.length + (selectedPriceRange !== null ? 1 : 0) + selectedMaterials.length}
                </span>
              )}
            </button>

            <p className="hidden lg:block font-sans text-sm text-text-dark-secondary">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>

            <div className="flex items-center gap-2">
              <span className="font-sans text-xs text-text-dark-secondary hidden sm:inline">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-brand-gold/20 rounded-sm pl-3 pr-8 py-2 font-sans text-xs text-text-dark focus:outline-none focus:border-brand-gold transition-colors cursor-pointer"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-dark-secondary pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex gap-10">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-28">
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="mb-6 font-sans text-xs text-brand-gold-dark hover:text-brand-gold transition-colors underline underline-offset-2"
                  >
                    Clear all filters
                  </button>
                )}
                <FilterContent />
              </div>
            </aside>

            {/* Product grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="font-serif text-xl text-text-dark mb-2">No pieces found</p>
                  <p className="font-sans text-sm text-text-dark-secondary mb-6">
                    Try adjusting your filters
                  </p>
                  <button
                    onClick={clearFilters}
                    className="font-sans text-sm uppercase tracking-[0.1em] text-brand-gold-dark hover:text-brand-gold transition-colors underline underline-offset-2"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-all duration-400',
          mobileFiltersOpen ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 bg-black/50 transition-opacity duration-400',
            mobileFiltersOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            'absolute top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-surface-warm shadow-2xl transition-transform duration-500 ease-luxury overflow-y-auto',
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between p-5 border-b border-brand-gold/10">
            <h2 className="font-sans text-sm uppercase tracking-[0.12em] text-text-dark font-medium">Filters</h2>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="text-text-dark-secondary hover:text-text-dark transition-colors"
              aria-label="Close filters"
            >
              <X size={18} />
            </button>
          </div>
          <div className="p-5">
            <FilterContent />
          </div>
          <div className="p-5 border-t border-brand-gold/10">
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full bg-brand-gold text-surface-primary font-sans text-sm uppercase tracking-[0.12em] py-3.5 rounded-sm hover:bg-brand-gold-light transition-colors font-medium"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
