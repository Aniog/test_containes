import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
  { label: 'Best Selling', value: 'bestselling' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [selectedCategory, selectedPriceRange, sortBy]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedPriceRange) {
      filtered = filtered.filter(
        (p) => p.price >= selectedPriceRange.min && p.price < selectedPriceRange.max
      );
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'bestselling':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, selectedPriceRange, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPriceRange(null);
    setSortBy('featured');
    setSearchParams({});
  };

  const hasFilters = selectedCategory || selectedPriceRange;

  return (
    <div className="pt-20" ref={containerRef}>
      {/* Page header */}
      <div className="bg-velmora-pearl py-12 md:py-16">
        <div className="container-velmora text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-black mb-3">
            {selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.name || 'Collection'
              : 'Our Collection'}
          </h1>
          <p className="font-sans text-sm text-velmora-stone">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="container-velmora section-padding">
        {/* Controls bar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFilters(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-velmora-charcoal"
          >
            <SlidersHorizontal size={16} />
            Filters
          </button>

          <div className="flex items-center gap-4 ml-auto">
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="font-sans text-xs text-velmora-stone hover:text-velmora-gold transition-colors"
              >
                Clear all
              </button>
            )}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent font-sans text-xs tracking-wider uppercase text-velmora-charcoal pr-6 cursor-pointer focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-velmora-stone pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            {/* Category filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-wider uppercase text-velmora-charcoal mb-4">
                Category
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => { setSelectedCategory(''); setSearchParams({}); }}
                  className={`block font-sans text-sm transition-colors ${
                    !selectedCategory ? 'text-velmora-gold' : 'text-velmora-stone hover:text-velmora-charcoal'
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setSearchParams({ category: cat.id });
                    }}
                    className={`block font-sans text-sm transition-colors ${
                      selectedCategory === cat.id ? 'text-velmora-gold' : 'text-velmora-stone hover:text-velmora-charcoal'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="divider mb-8" />

            {/* Price filter */}
            <div className="mb-8">
              <h3 className="font-sans text-xs tracking-wider uppercase text-velmora-charcoal mb-4">
                Price
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedPriceRange(null)}
                  className={`block font-sans text-sm transition-colors ${
                    !selectedPriceRange ? 'text-velmora-gold' : 'text-velmora-stone hover:text-velmora-charcoal'
                  }`}
                >
                  All Prices
                </button>
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPriceRange(range)}
                    className={`block font-sans text-sm transition-colors ${
                      selectedPriceRange?.label === range.label ? 'text-velmora-gold' : 'text-velmora-stone hover:text-velmora-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="divider mb-8" />

            {/* Material (static for now) */}
            <div>
              <h3 className="font-sans text-xs tracking-wider uppercase text-velmora-charcoal mb-4">
                Material
              </h3>
              <div className="space-y-2">
                {['18K Gold Plated', 'Sterling Silver'].map((mat) => (
                  <span key={mat} className="block font-sans text-sm text-velmora-stone">
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-stone mb-4">
                  No pieces found
                </p>
                <button onClick={clearFilters} className="btn-outlined">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileFilters ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFilters(false)} />
        <div
          className={`absolute bottom-0 left-0 right-0 bg-velmora-cream rounded-t-2xl max-h-[80vh] overflow-y-auto transform transition-transform duration-300 ${
            mobileFilters ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg text-velmora-black">Filters</h3>
              <button onClick={() => setMobileFilters(false)} className="text-velmora-stone">
                <X size={24} />
              </button>
            </div>

            {/* Category */}
            <div className="mb-6">
              <h4 className="font-sans text-xs tracking-wider uppercase text-velmora-charcoal mb-3">
                Category
              </h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => { setSelectedCategory(''); setSearchParams({}); }}
                  className={`px-4 py-2 text-sm ${
                    !selectedCategory ? 'bg-velmora-gold text-white' : 'bg-velmora-pearl text-velmora-charcoal'
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setSearchParams({ category: cat.id });
                    }}
                    className={`px-4 py-2 text-sm ${
                      selectedCategory === cat.id ? 'bg-velmora-gold text-white' : 'bg-velmora-pearl text-velmora-charcoal'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <h4 className="font-sans text-xs tracking-wider uppercase text-velmora-charcoal mb-3">
                Price
              </h4>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedPriceRange(null)}
                  className={`px-4 py-2 text-sm ${
                    !selectedPriceRange ? 'bg-velmora-gold text-white' : 'bg-velmora-pearl text-velmora-charcoal'
                  }`}
                >
                  All
                </button>
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPriceRange(range)}
                    className={`px-4 py-2 text-sm ${
                      selectedPriceRange?.label === range.label ? 'bg-velmora-gold text-white' : 'bg-velmora-pearl text-velmora-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setMobileFilters(false)}
              className="btn-primary w-full text-center mt-4"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
