import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '../data/products';
import ProductCard from '../components/shop/ProductCard';

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
  { label: 'Best Rated', value: 'rating' },
  { label: 'Most Reviewed', value: 'reviews' },
];

export default function ShopPage() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      result = result.filter((p) => p.price >= range.min && p.price < range.max);
    }

    if (selectedMaterial !== 'all') {
      result = result.filter((p) => p.material === selectedMaterial);
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
  }, [selectedCategory, selectedPriceRange, selectedMaterial, sortBy]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filteredProducts]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange(null);
    setSelectedMaterial('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPriceRange !== null || selectedMaterial !== 'all';

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-velmora-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => { setSelectedCategory('all'); setSearchParams({}); }}
            className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
              selectedCategory === 'all' ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-charcoal'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setSelectedCategory(cat.id); setSearchParams({ category: cat.id }); }}
              className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                selectedCategory === cat.id ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-velmora-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range, i) => (
            <button
              key={range.label}
              onClick={() => setSelectedPriceRange(selectedPriceRange === i ? null : i)}
              className={`block w-full text-left font-sans text-sm py-1.5 transition-colors ${
                selectedPriceRange === i ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs tracking-ultra-wide uppercase text-velmora-charcoal mb-4">
          Material
        </h3>
        <div className="space-y-2">
          {['all', 'gold', 'silver'].map((mat) => (
            <button
              key={mat}
              onClick={() => setSelectedMaterial(mat)}
              className={`block w-full text-left font-sans text-sm py-1.5 transition-colors capitalize ${
                selectedMaterial === mat ? 'text-velmora-gold' : 'text-velmora-muted hover:text-velmora-charcoal'
              }`}
            >
              {mat === 'all' ? 'All Materials' : `${mat} Plated`}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="font-sans text-xs tracking-wider uppercase text-velmora-muted hover:text-velmora-gold transition-colors underline underline-offset-4"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      {/* Page Header */}
      <div className="bg-velmora-deep py-12 md:py-16">
        <div className="section-container text-center">
          <h1 className="font-serif text-heading-lg md:text-heading-xl text-white mb-2">
            {selectedCategory !== 'all'
              ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
              : 'Our Collection'}
          </h1>
          <p className="font-sans text-sm text-white/50">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="section-container py-8 md:py-12">
        <div className="flex items-center justify-between mb-8">
          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-velmora-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Sort */}
          <div className="relative ml-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none font-sans text-xs tracking-wider uppercase text-velmora-charcoal bg-transparent border border-velmora-border px-4 py-2.5 pr-8 focus:outline-none focus:border-velmora-gold transition-colors cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-velmora-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar */}
          <aside
            className={`${
              filterOpen ? 'block' : 'hidden'
            } md:block w-full md:w-56 flex-shrink-0`}
          >
            {/* Mobile close */}
            <div className="md:hidden flex items-center justify-between mb-6">
              <h2 className="font-serif text-lg text-velmora-deep">Filters</h2>
              <button onClick={() => setFilterOpen(false)}>
                <X className="w-5 h-5 text-velmora-muted" />
              </button>
            </div>
            <FilterContent />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-charcoal mb-2">No pieces found</p>
                <p className="font-sans text-sm text-velmora-muted mb-6">
                  Try adjusting your filters to discover more.
                </p>
                <button onClick={clearFilters} className="btn-outline">
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
