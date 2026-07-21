import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

const priceRanges = [
  { value: 'all', label: 'All Prices' },
  { value: '0-40', label: 'Under $40' },
  { value: '40-60', label: '$40 - $60' },
  { value: '60-100', label: '$60 - $100' },
  { value: '100-999', label: '$100+' },
];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [sort, setSort] = useState('featured');
  const [priceFilter, setPriceFilter] = useState('all');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Price filter
    if (priceFilter !== 'all') {
      const [min, max] = priceFilter.split('-').map(Number);
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    // Sort
    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, priceFilter, sort]);

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    setSearchParams(params);
  };

  return (
    <main className="animate-fade-in" ref={containerRef}>
      <div className="max-w-content mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="py-10 md:py-16">
          <h1 className="font-serif text-2xl md:text-4xl uppercase tracking-wider text-center">
            Shop
          </h1>
          <p className="text-foreground-muted text-sm text-center mt-3">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile filter toggle */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2 text-sm tracking-wider uppercase border border-border px-4 py-2.5 w-full justify-between"
          >
            <span className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="flex gap-8 pb-16 md:pb-24">
          {/* Sidebar - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-xs tracking-wider uppercase text-foreground-muted mb-4">Category</h3>
              <div className="space-y-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`block text-sm transition-colors w-full text-left ${
                    activeCategory === 'all' ? 'text-accent font-medium' : 'text-foreground-muted hover:text-foreground'
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`block text-sm transition-colors w-full text-left ${
                      activeCategory === cat.id ? 'text-accent font-medium' : 'text-foreground-muted hover:text-foreground'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="text-xs tracking-wider uppercase text-foreground-muted mb-4">Price</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setPriceFilter(range.value)}
                    className={`block text-sm transition-colors w-full text-left ${
                      priceFilter === range.value ? 'text-accent font-medium' : 'text-foreground-muted hover:text-foreground'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <h3 className="text-xs tracking-wider uppercase text-foreground-muted mb-4">Metal</h3>
              <div className="space-y-2">
                {['Gold', 'Silver', 'Rose Gold'].map((metal) => (
                  <button
                    key={metal}
                    className="block text-sm text-foreground-muted hover:text-foreground transition-colors w-full text-left"
                  >
                    {metal}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Mobile filters */}
          {mobileFiltersOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setMobileFiltersOpen(false)}>
              <div
                className="absolute bottom-0 left-0 right-0 bg-surface p-6 max-h-[70vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm tracking-wider uppercase">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs tracking-wider uppercase text-foreground-muted mb-3">Category</p>
                    <div className="flex flex-wrap gap-2">
                      {['all', ...categories.map((c) => c.id)].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            handleCategoryChange(cat);
                            setMobileFiltersOpen(false);
                          }}
                          className={`px-4 py-2 text-xs tracking-wider uppercase border transition-colors ${
                            activeCategory === cat
                              ? 'bg-foreground text-white border-foreground'
                              : 'border-border text-foreground-muted hover:text-foreground'
                          }`}
                        >
                          {cat === 'all' ? 'All' : cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs tracking-wider uppercase text-foreground-muted mb-3">Price</p>
                    <div className="flex flex-wrap gap-2">
                      {priceRanges.map((range) => (
                        <button
                          key={range.value}
                          onClick={() => {
                            setPriceFilter(range.value);
                            setMobileFiltersOpen(false);
                          }}
                          className={`px-4 py-2 text-xs tracking-wider uppercase border transition-colors ${
                            priceFilter === range.value
                              ? 'bg-foreground text-white border-foreground'
                              : 'border-border text-foreground-muted hover:text-foreground'
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main content */}
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <div className="flex items-center gap-2">
                {activeCategory !== 'all' && (
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className="flex items-center gap-1 text-xs text-accent hover:text-accent-dark uppercase tracking-wider"
                  >
                    <X className="w-3 h-3" />
                    Clear
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2">
                <label className="text-xs text-foreground-muted uppercase tracking-wider">Sort:</label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-xs bg-transparent border border-border px-3 py-2 text-foreground uppercase tracking-wider focus:outline-none focus:border-accent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-foreground-muted text-sm">No products match your filters.</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4"
                  onClick={() => {
                    setPriceFilter('all');
                    handleCategoryChange('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="aspect-[3/4] bg-muted overflow-hidden relative">
                        <img
                          data-strk-img-id={`shop-${product.id}`}
                          data-strk-img={product.name}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {product.isNew && (
                          <span className="absolute top-3 left-3 bg-accent text-white text-[10px] tracking-wider uppercase px-2 py-1">
                            New
                          </span>
                        )}
                      </div>
                    </Link>
                    <div className="mt-3 text-center">
                      <h3 className="text-xs md:text-sm tracking-wider uppercase">
                        <Link to={`/product/${product.id}`} className="hover:text-accent transition-colors">
                          {product.name}
                        </Link>
                      </h3>
                      <p className="text-accent font-serif text-sm mt-0.5">${product.price}</p>
                    </div>
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