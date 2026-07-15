import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const Shop = () => {
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selectedCategory, sortBy, priceRange]);

  let filtered = [...products];

  if (selectedCategory !== 'all') {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  if (priceRange === 'under50') {
    filtered = filtered.filter(p => p.price < 50);
  } else if (priceRange === '50to80') {
    filtered = filtered.filter(p => p.price >= 50 && p.price <= 80);
  } else if (priceRange === 'over80') {
    filtered = filtered.filter(p => p.price > 80);
  }

  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">
            The Collection
          </h1>
          <p className="mt-3 text-sm text-brand-muted">
            Timeless pieces crafted for everyday elegance
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-warm">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-sm text-brand-charcoal hover:text-brand-gold transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="text-xs text-brand-soft-gray hidden md:block">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm text-brand-charcoal bg-transparent border border-brand-warm px-3 py-2 focus:outline-none focus:border-brand-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-32">
              <div className="mb-8">
                <h3 className="text-xs tracking-wider uppercase text-brand-charcoal font-medium mb-4">Category</h3>
                <div className="space-y-2">
                  {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block text-sm capitalize transition-colors ${
                        selectedCategory === cat
                          ? 'text-brand-charcoal font-medium'
                          : 'text-brand-muted hover:text-brand-charcoal'
                      }`}
                    >
                      {cat === 'all' ? 'All Jewelry' : cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xs tracking-wider uppercase text-brand-charcoal font-medium mb-4">Price</h3>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to80', label: '$50 – $80' },
                    { value: 'over80', label: 'Over $80' },
                  ].map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`block text-sm transition-colors ${
                        priceRange === range.value
                          ? 'text-brand-charcoal font-medium'
                          : 'text-brand-muted hover:text-brand-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs tracking-wider uppercase text-brand-charcoal font-medium mb-4">Material</h3>
                <div className="space-y-2">
                  <span className="block text-sm text-brand-charcoal font-medium">18K Gold Plated</span>
                  <span className="block text-sm text-brand-muted">Sterling Silver</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute left-0 top-0 h-full w-72 bg-brand-cream p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg text-brand-charcoal">Filters</h3>
                  <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                    <X className="w-5 h-5 text-brand-charcoal" />
                  </button>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs tracking-wider uppercase text-brand-charcoal font-medium mb-4">Category</h4>
                  <div className="space-y-3">
                    {['all', 'earrings', 'necklaces', 'huggies'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => { setSelectedCategory(cat); setFilterOpen(false); }}
                        className={`block text-sm capitalize transition-colors ${
                          selectedCategory === cat
                            ? 'text-brand-charcoal font-medium'
                            : 'text-brand-muted hover:text-brand-charcoal'
                        }`}
                      >
                        {cat === 'all' ? 'All Jewelry' : cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs tracking-wider uppercase text-brand-charcoal font-medium mb-4">Price</h4>
                  <div className="space-y-3">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: 'under50', label: 'Under $50' },
                      { value: '50to80', label: '$50 – $80' },
                      { value: 'over80', label: 'Over $80' },
                    ].map((range) => (
                      <button
                        key={range.value}
                        onClick={() => { setPriceRange(range.value); setFilterOpen(false); }}
                        className={`block text-sm transition-colors ${
                          priceRange === range.value
                            ? 'text-brand-charcoal font-medium'
                            : 'text-brand-muted hover:text-brand-charcoal'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-brand-muted">No products match your filters.</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setPriceRange('all'); }}
                  className="mt-4 text-sm text-brand-gold underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-brand-ivory overflow-hidden mb-3">
                        <img
                          data-strk-img-id={`shop-${product.id}-q1w2e3`}
                          data-strk-img={`[shop-${product.id}-title]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="400"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              addItem(product);
                            }}
                            className="w-full bg-brand-charcoal/90 text-brand-cream py-2.5 text-xs tracking-wider uppercase font-medium hover:bg-brand-charcoal transition-colors backdrop-blur-sm"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </Link>
                    <h3 id={`shop-${product.id}-title`} className="font-serif text-xs uppercase tracking-product text-brand-charcoal">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-warm'}`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-brand-soft-gray">({product.reviewCount})</span>
                    </div>
                    <p className="text-sm text-brand-muted mt-1">${product.price}</p>
                  </div>
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
