import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/lib/data';
import ProductCard from '@/components/shop/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [activeCategory]);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];
    if (activeCategory !== 'all') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }
    return filtered;
  }, [activeCategory, sortBy]);

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">
            The Collection
          </h1>
          <p className="mt-3 text-sm text-brand-muted">
            Timeless pieces crafted for everyday elegance
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar filters - Desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs tracking-wide-xl uppercase font-medium text-brand-charcoal mb-4">Category</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setCategory('all')}
                    className={`text-sm transition-colors ${activeCategory === 'all' ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'}`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setCategory(cat.id)}
                      className={`text-sm transition-colors ${activeCategory === cat.id ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-brand-sand/50 pt-6">
                <h3 className="text-xs tracking-wide-xl uppercase font-medium text-brand-charcoal mb-4">Price</h3>
                <ul className="space-y-2">
                  <li><span className="text-sm text-brand-muted">$30 – $50</span></li>
                  <li><span className="text-sm text-brand-muted">$50 – $80</span></li>
                  <li><span className="text-sm text-brand-muted">$80 – $120</span></li>
                </ul>
              </div>

              <div className="mt-8 border-t border-brand-sand/50 pt-6">
                <h3 className="text-xs tracking-wide-xl uppercase font-medium text-brand-charcoal mb-4">Material</h3>
                <ul className="space-y-2">
                  <li><span className="text-sm text-brand-muted">18K Gold Plated</span></li>
                  <li><span className="text-sm text-brand-muted">Sterling Silver</span></li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              {/* Mobile filter toggle */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-2 text-sm text-brand-charcoal"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <span className="text-xs text-brand-muted hidden md:block">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
              </span>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-xs text-brand-charcoal bg-transparent border border-brand-sand rounded-sm px-3 py-2 focus:outline-none focus:border-brand-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="font-serif text-lg text-brand-charcoal">No pieces found</p>
                <p className="text-sm text-brand-muted mt-2">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-[60]" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-brand-cream z-[70] animate-slide-in-right p-6 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-brand-charcoal" />
              </button>
            </div>

            <div className="mb-6">
              <h4 className="text-xs tracking-wide-xl uppercase font-medium text-brand-charcoal mb-3">Category</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => { setCategory('all'); setMobileFiltersOpen(false); }}
                    className={`text-sm ${activeCategory === 'all' ? 'text-brand-charcoal font-medium' : 'text-brand-muted'}`}
                  >
                    All Jewelry
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => { setCategory(cat.id); setMobileFiltersOpen(false); }}
                      className={`text-sm ${activeCategory === cat.id ? 'text-brand-charcoal font-medium' : 'text-brand-muted'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
