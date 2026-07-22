import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import { SlidersHorizontal, X } from 'lucide-react';

const Shop = () => {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

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
          <h1 className="font-serif text-3xl md:text-5xl font-normal text-charcoal">
            The Collection
          </h1>
          <p className="mt-3 text-sm text-muted font-sans">
            Every piece, crafted with intention.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border-warm">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-widest text-charcoal hover:text-gold transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="text-xs text-muted font-sans hidden md:block">
            {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs font-sans font-medium uppercase tracking-widest text-charcoal bg-transparent border border-border-warm px-4 py-2 focus:outline-none focus:border-gold cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className={`${showFilters ? 'fixed inset-0 z-50 bg-cream p-6 overflow-y-auto' : 'hidden'} md:block md:static md:w-56 md:flex-shrink-0`}>
            {/* Mobile close */}
            <div className="flex items-center justify-between mb-6 md:hidden">
              <span className="text-sm font-sans font-medium uppercase tracking-widest text-charcoal">Filters</span>
              <button onClick={() => setShowFilters(false)} aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category */}
            <div className="mb-8">
              <h3 className="text-xs font-sans font-medium uppercase tracking-widest text-charcoal mb-4">
                Category
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => { setSelectedCategory('all'); setShowFilters(false); }}
                  className={`block text-sm font-sans transition-colors ${
                    selectedCategory === 'all' ? 'text-gold font-medium' : 'text-muted hover:text-charcoal'
                  }`}
                >
                  All
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => { setSelectedCategory(cat.slug); setShowFilters(false); }}
                    className={`block text-sm font-sans transition-colors ${
                      selectedCategory === cat.slug ? 'text-gold font-medium' : 'text-muted hover:text-charcoal'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="text-xs font-sans font-medium uppercase tracking-widest text-charcoal mb-4">
                Price
              </h3>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'All Prices' },
                  { value: 'under50', label: 'Under $50' },
                  { value: '50to80', label: '$50 – $80' },
                  { value: 'over80', label: 'Over $80' },
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => { setPriceRange(option.value); setShowFilters(false); }}
                    className={`block text-sm font-sans transition-colors ${
                      priceRange === option.value ? 'text-gold font-medium' : 'text-muted hover:text-charcoal'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <h3 className="text-xs font-sans font-medium uppercase tracking-widest text-charcoal mb-4">
                Material
              </h3>
              <div className="space-y-2">
                <span className="block text-sm font-sans text-gold font-medium">18K Gold Plated</span>
                <span className="block text-sm font-sans text-muted">Sterling Silver</span>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal">No products found</p>
                <p className="mt-2 text-sm text-muted">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
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
