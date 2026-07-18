import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { cn } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'All Jewelry' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 - $75', min: 50, max: 75 },
  { id: 'over-75', label: 'Over $75', min: 75, max: Infinity },
];

const materials = [
  { id: 'all', label: 'All Materials' },
  { id: '18K Gold Plated', label: '18K Gold Plated' },
  { id: 'Sterling Silver', label: 'Sterling Silver' },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
  { id: 'newest', label: 'Newest' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Price filter
    const priceRange = priceRanges.find(r => r.id === selectedPriceRange);
    if (priceRange && priceRange.id !== 'all') {
      filtered = filtered.filter(p => p.price >= priceRange.min && p.price < priceRange.max);
    }

    // Material filter
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter(p => p.material === selectedMaterial);
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.reverse();
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange('all');
    setSelectedMaterial('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPriceRange !== 'all' || selectedMaterial !== 'all';

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Header */}
      <div className="bg-velmora-warm-white border-b border-velmora-gold/10">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-10 md:py-16 text-center">
          <h1 className="font-serif text-heading-1 md:text-display text-velmora-charcoal mb-3">
            {selectedCategory === 'all' ? 'Our Collection' : categories.find(c => c.id === selectedCategory)?.label || 'Shop'}
          </h1>
          <p className="font-sans text-body text-velmora-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'} of fine jewelry
          </p>
        </div>
      </div>

      <div ref={containerRef} className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 text-caption uppercase tracking-ultra-wide text-velmora-charcoal"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Category tabs - desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={cn(
                    'px-4 py-2 text-caption uppercase tracking-wide transition-all',
                    selectedCategory === cat.id
                      ? 'text-velmora-gold border-b-2 border-velmora-gold'
                      : 'text-velmora-muted hover:text-velmora-charcoal'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent pr-8 pl-4 py-2 text-caption uppercase tracking-wide text-velmora-charcoal border border-velmora-gold/20 focus:outline-none focus:border-velmora-gold cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-velmora-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className={cn(
            'lg:block w-64 flex-shrink-0',
            showFilters ? 'fixed inset-0 z-40 bg-velmora-cream p-6 overflow-auto lg:relative lg:p-0 lg:bg-transparent' : 'hidden'
          )}>
            {/* Mobile close */}
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <h3 className="font-serif text-heading-3 text-velmora-charcoal">Filters</h3>
              <button onClick={() => setShowFilters(false)}>
                <X className="w-5 h-5 text-velmora-charcoal" />
              </button>
            </div>

            {/* Price filter */}
            <div className="mb-8">
              <h4 className="font-sans text-caption uppercase tracking-ultra-wide text-velmora-charcoal mb-4">
                Price
              </h4>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPriceRange(range.id)}
                    className={cn(
                      'block w-full text-left px-3 py-2 text-body-sm transition-all',
                      selectedPriceRange === range.id
                        ? 'text-velmora-gold bg-velmora-gold/5'
                        : 'text-velmora-muted hover:text-velmora-charcoal hover:bg-velmora-warm-white'
                    )}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material filter */}
            <div className="mb-8">
              <h4 className="font-sans text-caption uppercase tracking-ultra-wide text-velmora-charcoal mb-4">
                Material
              </h4>
              <div className="space-y-2">
                {materials.map((material) => (
                  <button
                    key={material.id}
                    onClick={() => setSelectedMaterial(material.id)}
                    className={cn(
                      'block w-full text-left px-3 py-2 text-body-sm transition-all',
                      selectedMaterial === material.id
                        ? 'text-velmora-gold bg-velmora-gold/5'
                        : 'text-velmora-muted hover:text-velmora-charcoal hover:bg-velmora-warm-white'
                    )}
                  >
                    {material.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="w-full text-caption uppercase tracking-ultra-wide text-velmora-muted hover:text-velmora-gold transition-colors py-2 border border-velmora-gold/20 hover:border-velmora-gold"
              >
                Clear All Filters
              </button>
            )}
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Active filters */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-velmora-gold/10 text-velmora-gold text-caption uppercase tracking-wide">
                    {categories.find(c => c.id === selectedCategory)?.label}
                    <button onClick={() => handleCategoryChange('all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedPriceRange !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-velmora-gold/10 text-velmora-gold text-caption uppercase tracking-wide">
                    {priceRanges.find(r => r.id === selectedPriceRange)?.label}
                    <button onClick={() => setSelectedPriceRange('all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedMaterial !== 'all' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-velmora-gold/10 text-velmora-gold text-caption uppercase tracking-wide">
                    {selectedMaterial}
                    <button onClick={() => setSelectedMaterial('all')}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="font-serif text-heading-3 text-velmora-charcoal mb-2">
                  No pieces found
                </p>
                <p className="font-sans text-body text-velmora-muted mb-6">
                  Try adjusting your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
