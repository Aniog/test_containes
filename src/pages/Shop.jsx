import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/home/ProductCard';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy, priceRange]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (priceRange === 'under50') {
      result = result.filter(p => p.price < 50);
    } else if (priceRange === '50to80') {
      result = result.filter(p => p.price >= 50 && p.price <= 80);
    } else if (priceRange === 'over80') {
      result = result.filter(p => p.price > 80);
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [activeCategory, sortBy, priceRange]);

  const handleCategoryChange = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-charcoal font-light">
            The Collection
          </h1>
          <p className="mt-3 font-sans text-sm text-brand-muted">
            Timeless pieces crafted for everyday elegance
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-sand">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal bg-transparent border-none cursor-pointer"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`font-sans text-xs uppercase tracking-wide-xl border-none bg-transparent cursor-pointer transition-colors ${
                activeCategory === 'all' ? 'text-brand-charcoal' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`font-sans text-xs uppercase tracking-wide-xl border-none bg-transparent cursor-pointer transition-colors ${
                  activeCategory === cat.id ? 'text-brand-charcoal' : 'text-brand-muted hover:text-brand-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-brand-muted">{filteredProducts.length} pieces</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="font-sans text-xs text-brand-charcoal bg-transparent border border-brand-sand px-3 py-2 cursor-pointer focus:outline-none focus:border-brand-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar filters */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              {/* Price filter */}
              <div className="mb-8">
                <h3 className="font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to80', label: '$50 – $80' },
                    { value: 'over80', label: 'Over $80' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setPriceRange(option.value)}
                      className={`block w-full text-left font-sans text-sm py-1.5 bg-transparent border-none cursor-pointer transition-colors ${
                        priceRange === option.value ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  <span className="block font-sans text-sm text-brand-muted">18K Gold Plated</span>
                  <span className="block font-sans text-sm text-brand-muted">Sterling Silver</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-40 md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute left-0 top-0 h-full w-72 bg-brand-cream p-6 shadow-xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-serif text-xl text-brand-charcoal">Filters</h3>
                  <button
                    onClick={() => setFilterOpen(false)}
                    className="p-2 text-brand-charcoal bg-transparent border-none"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Category */}
                <div className="mb-8">
                  <h4 className="font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal mb-4">Category</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => { handleCategoryChange('all'); setFilterOpen(false); }}
                      className={`block w-full text-left font-sans text-sm py-1.5 bg-transparent border-none cursor-pointer ${activeCategory === 'all' ? 'text-brand-charcoal font-medium' : 'text-brand-muted'}`}
                    >
                      All
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => { handleCategoryChange(cat.id); setFilterOpen(false); }}
                        className={`block w-full text-left font-sans text-sm py-1.5 bg-transparent border-none cursor-pointer ${activeCategory === cat.id ? 'text-brand-charcoal font-medium' : 'text-brand-muted'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-wide-xl text-brand-charcoal mb-4">Price</h4>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: 'under50', label: 'Under $50' },
                      { value: '50to80', label: '$50 – $80' },
                      { value: 'over80', label: 'Over $80' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        onClick={() => { setPriceRange(option.value); setFilterOpen(false); }}
                        className={`block w-full text-left font-sans text-sm py-1.5 bg-transparent border-none cursor-pointer ${priceRange === option.value ? 'text-brand-charcoal font-medium' : 'text-brand-muted'}`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-charcoal">No pieces found</p>
                <p className="mt-2 text-sm text-brand-muted">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
