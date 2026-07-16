import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

export default function CollectionPage() {
  const [searchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, priceRange, sortBy]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  let filtered = [...products];

  if (selectedCategory !== 'all') {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  if (priceRange === 'under50') {
    filtered = filtered.filter(p => p.price < 50);
  } else if (priceRange === '50to100') {
    filtered = filtered.filter(p => p.price >= 50 && p.price <= 100);
  } else if (priceRange === 'over100') {
    filtered = filtered.filter(p => p.price > 100);
  }

  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'newest') {
    filtered.sort((a, b) => b.reviews - a.reviews);
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Header */}
      <div className="bg-[var(--velmora-bg-secondary)] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--velmora-text-secondary)] mb-2">Collection</p>
          <h1 className="serif-heading text-3xl md:text-4xl lg:text-5xl text-[var(--velmora-text)]">
            {selectedCategory === 'all' ? 'All Jewelry' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </h1>
          <p className="text-sm text-[var(--velmora-text-secondary)] mt-2">{filtered.length} pieces</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-[var(--velmora-text)] mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block w-full text-left text-sm py-1 transition-colors ${
                      selectedCategory === 'all' ? 'text-[var(--velmora-gold)] font-medium' : 'text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-text)]'
                    }`}
                  >
                    All ({products.length})
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        selectedCategory === cat.id ? 'text-[var(--velmora-gold)] font-medium' : 'text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-text)]'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-[var(--velmora-text)] mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to100', label: '$50 - $100' },
                    { value: 'over100', label: 'Over $100' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setPriceRange(option.value)}
                      className={`block w-full text-left text-sm py-1 transition-colors ${
                        priceRange === option.value ? 'text-[var(--velmora-gold)] font-medium' : 'text-[var(--velmora-text-secondary)] hover:text-[var(--velmora-text)]'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-[var(--velmora-text)] mb-4">Material</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-[var(--velmora-text-secondary)] cursor-pointer">
                    <input type="checkbox" className="accent-[var(--velmora-gold)]" defaultChecked />
                    18K Gold Plated
                  </label>
                  <label className="flex items-center gap-2 text-sm text-[var(--velmora-text-secondary)] cursor-pointer">
                    <input type="checkbox" className="accent-[var(--velmora-gold)]" />
                    Sterling Silver
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Toggle & Sort */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 text-sm text-[var(--velmora-text)]"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <p className="hidden lg:block text-sm text-[var(--velmora-text-secondary)]">{filtered.length} results</p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm text-[var(--velmora-text)] pr-6 cursor-pointer focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--velmora-text-secondary)]" />
              </div>
            </div>

            {/* Mobile Filters Panel */}
            {showFilters && (
              <div className="lg:hidden bg-[var(--velmora-bg-secondary)] p-4 mb-6 rounded-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs tracking-widest uppercase text-[var(--velmora-text)] mb-3">Category</h3>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className={`px-3 py-1.5 text-xs tracking-wider uppercase border transition-all ${
                          selectedCategory === 'all' ? 'border-[var(--velmora-gold)] bg-[var(--velmora-gold)] text-white' : 'border-[var(--velmora-border)] text-[var(--velmora-text-secondary)]'
                        }`}
                      >
                        All
                      </button>
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setSelectedCategory(cat.id)}
                          className={`px-3 py-1.5 text-xs tracking-wider uppercase border transition-all ${
                            selectedCategory === cat.id ? 'border-[var(--velmora-gold)] bg-[var(--velmora-gold)] text-white' : 'border-[var(--velmora-border)] text-[var(--velmora-text-secondary)]'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs tracking-widest uppercase text-[var(--velmora-text)] mb-3">Price</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { value: 'all', label: 'All' },
                        { value: 'under50', label: 'Under $50' },
                        { value: '50to100', label: '$50 - $100' },
                        { value: 'over100', label: 'Over $100' },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setPriceRange(option.value)}
                          className={`px-3 py-1.5 text-xs tracking-wider uppercase border transition-all ${
                            priceRange === option.value ? 'border-[var(--velmora-gold)] bg-[var(--velmora-gold)] text-white' : 'border-[var(--velmora-border)] text-[var(--velmora-text-secondary)]'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Product Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="serif-heading text-xl text-[var(--velmora-text-secondary)] mb-2">No pieces found</p>
                <p className="text-sm text-[var(--velmora-text-secondary)]">Try adjusting your filters</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setPriceRange('all'); }}
                  className="btn-primary mt-6"
                >
                  View All
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
