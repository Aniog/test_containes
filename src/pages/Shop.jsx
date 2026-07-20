import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 - $60', min: 40, max: 60 },
  { label: '$60 - $80', min: 60, max: 80 },
  { label: 'Over $80', min: 80, max: Infinity },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [selectedCategory, selectedPrice, sortBy]);

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (selectedPrice) {
      result = result.filter(p => p.price >= selectedPrice.min && p.price < selectedPrice.max);
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
  }, [selectedCategory, selectedPrice, sortBy]);

  const activeFiltersCount = (selectedCategory ? 1 : 0) + (selectedPrice ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPrice(null);
    setSearchParams({});
  };

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-medium mb-2">Shop</h1>
          <p className="text-muted text-sm">{filtered.length} products</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-hairline">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-gold transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
          </button>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-gold transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-charcoal text-cream text-[10px] rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
            {activeFiltersCount > 0 && (
              <button onClick={clearFilters} className="text-xs text-muted hover:text-charcoal underline">
                Clear all
              </button>
            )}
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 text-sm uppercase tracking-wider hover:text-gold transition-colors"
            >
              Sort by: {sortOptions.find(s => s.value === sortBy)?.label}
              <ChevronDown className="w-4 h-4" />
            </button>
            {showSort && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setShowSort(false)} />
                <div className="absolute right-0 top-full mt-2 bg-white border border-hairline shadow-lg z-20 min-w-[180px]">
                  {sortOptions.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => { setSortBy(opt.value); setShowSort(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-cream transition-colors ${sortBy === opt.value ? 'font-medium' : ''}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className={`${showFilters ? 'fixed inset-0 z-50 flex md:relative md:z-auto md:inset-auto' : 'hidden md:block'} w-64 flex-shrink-0`}>
            {showFilters && (
              <div className="absolute inset-0 bg-charcoal/40 md:hidden" onClick={() => setShowFilters(false)} />
            )}
            <div className="relative bg-cream h-full md:h-auto w-72 md:w-64 p-5 md:p-0 overflow-y-auto md:overflow-visible">
              <div className="flex items-center justify-between mb-6 md:hidden">
                <h3 className="font-serif text-lg">Filters</h3>
                <button onClick={() => setShowFilters(false)}><X className="w-5 h-5" /></button>
              </div>

              {/* Category filter */}
              <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">Category</h4>
                  <div className="space-y-2.5">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={!selectedCategory}
                        onChange={() => setSelectedCategory('')}
                        className="accent-gold"
                      />
                      <span className={`text-sm group-hover:text-gold transition-colors ${!selectedCategory ? 'font-medium' : 'text-muted'}`}>
                        All
                      </span>
                    </label>
                    {categories.map(cat => (
                      <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === cat.id}
                          onChange={() => setSelectedCategory(cat.id)}
                          className="accent-gold"
                        />
                        <span className={`text-sm group-hover:text-gold transition-colors ${selectedCategory === cat.id ? 'font-medium' : 'text-muted'}`}>
                          {cat.name}
                        </span>
                      </label>
                    ))}
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === 'sets'}
                        onChange={() => setSelectedCategory('sets')}
                        className="accent-gold"
                      />
                      <span className={`text-sm group-hover:text-gold transition-colors ${selectedCategory === 'sets' ? 'font-medium' : 'text-muted'}`}>
                        Gift Sets
                      </span>
                    </label>
                  </div>
                </div>

                {/* Price filter */}
                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">Price</h4>
                  <div className="space-y-2.5">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        checked={!selectedPrice}
                        onChange={() => setSelectedPrice(null)}
                        className="accent-gold"
                      />
                      <span className={`text-sm group-hover:text-gold transition-colors ${!selectedPrice ? 'font-medium' : 'text-muted'}`}>
                        All Prices
                      </span>
                    </label>
                    {priceRanges.map((range, i) => (
                      <label key={i} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="price"
                          checked={selectedPrice === range}
                          onChange={() => setSelectedPrice(range)}
                          className="accent-gold"
                        />
                        <span className={`text-sm group-hover:text-gold transition-colors ${selectedPrice === range ? 'font-medium' : 'text-muted'}`}>
                          {range.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Material */}
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-4">Material</h4>
                  <div className="space-y-2.5">
                    {['18K Gold Plated', 'Gold & Crystal', 'Stainless Steel'].map(mat => (
                      <label key={mat} className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="accent-gold" />
                        <span className="text-sm text-muted group-hover:text-gold transition-colors">{mat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {showFilters && activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="w-full mt-8 border border-charcoal py-2.5 text-sm uppercase tracking-wider hover:bg-charcoal hover:text-cream transition-colors md:hidden"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            </div>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl mb-4">No products found</p>
                <button onClick={clearFilters} className="text-gold hover:underline text-sm">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} onAdd={() => addItem(product, 1, product.variant)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onAdd }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-white border border-hairline overflow-hidden mb-3">
          <img
            data-strk-img-id={`shop-${product.id}`}
            data-strk-img={`${product.name} gold jewelry`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.badge && (
            <span className="absolute top-2 left-2 bg-charcoal text-cream text-[10px] uppercase tracking-wider px-2 py-1">
              {product.badge}
            </span>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              onAdd();
            }}
            className={`absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm text-charcoal py-2.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            Quick Add
          </button>
        </div>
      </Link>
      <Link to={`/product/${product.id}`}>
        <h3 className="font-serif text-sm uppercase tracking-[0.15em] mb-1 group-hover:text-gold transition-colors">
          {product.name}
        </h3>
      </Link>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">${product.price}</span>
        {product.originalPrice && (
          <span className="text-xs text-muted line-through">${product.originalPrice}</span>
        )}
      </div>
      <div className="flex items-center gap-1 mt-1">
        <Star className="w-3 h-3 fill-gold text-gold" />
        <span className="text-xs text-muted">{product.rating}</span>
      </div>
    </div>
  );
}
