import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
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
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
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

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'huggies', label: 'Huggies' },
  ];

  return (
    <main ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">
            The Collection
          </h1>
          <p className="mt-3 text-sm text-brand-muted">
            Timeless pieces crafted for everyday elegance
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-sand">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-xs uppercase tracking-wide-xl font-medium text-brand-charcoal hover:text-brand-gold transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="hidden md:flex items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 text-xs uppercase tracking-wide-xl transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? 'bg-brand-charcoal text-brand-cream'
                    : 'text-brand-charcoal hover:bg-brand-ivory'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-brand-muted hidden sm:inline">{filtered.length} pieces</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs bg-transparent border border-brand-sand px-3 py-2 text-brand-charcoal focus:outline-none focus:border-brand-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs uppercase tracking-wide-xl font-medium text-brand-charcoal mb-4">Price</h3>
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
                    className={`block text-sm transition-colors duration-300 ${
                      priceRange === range.value ? 'text-brand-gold font-medium' : 'text-brand-warm-gray hover:text-brand-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>

              <h3 className="text-xs uppercase tracking-wide-xl font-medium text-brand-charcoal mb-4 mt-8">Material</h3>
              <p className="text-sm text-brand-warm-gray">18K Gold Plated</p>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-40 bg-brand-cream md:hidden">
              <div className="flex items-center justify-between px-4 py-4 border-b border-brand-sand">
                <h2 className="font-serif text-lg text-brand-charcoal">Filters</h2>
                <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                  <X className="w-5 h-5 text-brand-charcoal" />
                </button>
              </div>
              <div className="p-6 space-y-8">
                <div>
                  <h3 className="text-xs uppercase tracking-wide-xl font-medium text-brand-charcoal mb-4">Category</h3>
                  <div className="space-y-3">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => { setSelectedCategory(cat.value); setFilterOpen(false); }}
                        className={`block text-sm ${selectedCategory === cat.value ? 'text-brand-gold font-medium' : 'text-brand-warm-gray'}`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wide-xl font-medium text-brand-charcoal mb-4">Price</h3>
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
                        className={`block text-sm ${priceRange === range.value ? 'text-brand-gold font-medium' : 'text-brand-warm-gray'}`}
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
                <p className="font-serif text-xl text-brand-charcoal">No pieces found</p>
                <p className="text-sm text-brand-muted mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group relative">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative overflow-hidden bg-brand-ivory aspect-[3/4]">
                        <img
                          alt={product.name}
                          data-strk-img-id={`shop-${product.id}-img-z9y8x7`}
                          data-strk-img={`[shop-${product.id}-title] gold jewelry product`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="400"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>
                    <button
                      onClick={() => addItem(product)}
                      className="absolute bottom-[calc(25%+16px)] left-3 right-3 bg-brand-charcoal text-brand-cream py-2.5 text-xs uppercase tracking-wide-xl font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-gold"
                    >
                      Add to Cart
                    </button>
                    <div className="mt-4">
                      <h3 id={`shop-${product.id}-title`} className="text-xs uppercase tracking-product font-medium text-brand-charcoal">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-brand-warm-gray">${product.price}</p>
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
};

export default Shop;
