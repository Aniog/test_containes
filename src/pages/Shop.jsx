import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
  { label: 'Most Reviewed', value: 'reviews' },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || '');
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
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
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'reviews':
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
  };

  const hasActiveFilters = selectedCategory || selectedPriceRange;

  const FilterContent = () => (
    <div className="space-y-8">
      {/* Category filter */}
      <div>
        <h3 className="text-xs tracking-widest-xl uppercase font-semibold text-text-primary mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('')}
            className={`block w-full text-left text-sm py-1.5 transition-colors duration-200 ${
              !selectedCategory ? 'text-gold' : 'text-text-muted hover:text-text-primary'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block w-full text-left text-sm py-1.5 transition-colors duration-200 ${
                selectedCategory === cat.id ? 'text-gold' : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="text-xs tracking-widest-xl uppercase font-semibold text-text-primary mb-4">Price</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedPriceRange(null)}
            className={`block w-full text-left text-sm py-1.5 transition-colors duration-200 ${
              !selectedPriceRange ? 'text-gold' : 'text-text-muted hover:text-text-primary'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setSelectedPriceRange(range)}
              className={`block w-full text-left text-sm py-1.5 transition-colors duration-200 ${
                selectedPriceRange?.label === range.label ? 'text-gold' : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material (static for now) */}
      <div>
        <h3 className="text-xs tracking-widest-xl uppercase font-semibold text-text-primary mb-4">Material</h3>
        <div className="space-y-2">
          {['18K Gold Plated', 'Sterling Silver', 'Stainless Steel'].map((mat) => (
            <label key={mat} className="flex items-center gap-2.5 cursor-pointer group">
              <span className="w-4 h-4 border border-border rounded-sm group-hover:border-gold/50 transition-colors" />
              <span className="text-sm text-text-muted group-hover:text-text-primary transition-colors">{mat}</span>
            </label>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-gold hover:text-gold-light transition-colors tracking-wider uppercase"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <main ref={containerRef} className="pt-20 lg:pt-24 min-h-screen">
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="text-center mb-8">
          <p className="text-xs tracking-widest-2xl uppercase text-gold mb-3">Collection</p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-primary font-light">
            {selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <div className="w-12 h-px bg-gold mx-auto mt-5" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between border-b border-border pb-4 mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-text-muted hover:text-text-primary transition-colors"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
            {hasActiveFilters && (
              <div className="hidden sm:flex items-center gap-2">
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] tracking-wider uppercase bg-surface border border-border rounded px-2.5 py-1 text-text-primary">
                    {categories.find((c) => c.id === selectedCategory)?.name}
                    <button onClick={() => setSelectedCategory('')} className="text-text-muted hover:text-gold">
                      <X size={10} />
                    </button>
                  </span>
                )}
                {selectedPriceRange && (
                  <span className="inline-flex items-center gap-1.5 text-[11px] tracking-wider uppercase bg-surface border border-border rounded px-2.5 py-1 text-text-primary">
                    {selectedPriceRange.label}
                    <button onClick={() => setSelectedPriceRange(null)} className="text-text-muted hover:text-gold">
                      <X size={10} />
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-text-muted hidden sm:inline">{filteredProducts.length} products</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border border-border rounded px-3 py-1.5 text-xs tracking-wider uppercase text-text-primary cursor-pointer pr-8 focus:outline-none focus:border-gold transition-colors"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-base text-text-primary">
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Layout */}
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <>
              <div className="fixed inset-0 bg-black/60 z-[60] lg:hidden" onClick={() => setMobileFiltersOpen(false)} />
              <div className="fixed top-0 left-0 h-full w-80 bg-surface z-[70] lg:hidden overflow-y-auto animate-slide-in-right">
                <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                  <h2 className="font-serif text-lg tracking-wider uppercase text-text-primary">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)} className="text-text-muted hover:text-text-primary">
                    <X size={20} />
                  </button>
                </div>
                <div className="px-6 py-6">
                  <FilterContent />
                </div>
              </div>
            </>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-text-muted mb-2">No products found</p>
                <p className="text-sm text-text-muted/70 mb-6">Try adjusting your filters</p>
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-widest-xl uppercase text-gold hover:text-gold-light transition-colors border border-gold px-6 py-2.5"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="relative aspect-[3/4] bg-surface rounded overflow-hidden mb-3">
                      <img
                        data-strk-img-id={`shop-${product.id}`}
                        data-strk-img={`[${product.id}-desc] shop collection gold jewelry`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-gold/90 text-base text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1">
                          {product.badge}
                        </span>
                      )}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addItem(product);
                        }}
                        className="absolute bottom-3 left-3 right-3 bg-base/90 backdrop-blur-sm hover:bg-gold text-text-primary hover:text-base text-xs tracking-wider uppercase font-medium py-2.5 text-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-serif text-sm sm:text-base tracking-wider uppercase text-text-primary group-hover:text-gold transition-colors duration-300 truncate">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1">
                        <Star size={11} className="text-gold fill-gold" />
                        <span className="text-[11px] text-text-muted">{product.rating}</span>
                        <span className="text-[11px] text-text-muted/50">({product.reviews})</span>
                      </div>
                      <p className="text-sm text-gold font-medium mt-0.5">${product.price}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
