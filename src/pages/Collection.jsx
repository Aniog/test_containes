import { useState, useEffect, useRef } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/common/ProductCard';

const Collection = () => {
  const containerRef = useRef(null);
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
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-light text-charcoal">
            Shop All
          </h1>
          <p className="mt-3 text-sm text-stone">
            Discover our full collection of demi-fine jewelry.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-charcoal hover:text-gold transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="text-xs text-stone hidden md:block">
            {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs text-charcoal bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className={`${filterOpen ? 'fixed inset-0 z-50 bg-ivory p-6 overflow-y-auto' : 'hidden'} md:block md:static md:w-56 md:flex-shrink-0`}>
            {/* Mobile close */}
            <div className="flex items-center justify-between mb-6 md:hidden">
              <h3 className="text-sm uppercase tracking-[0.15em] text-charcoal font-medium">Filters</h3>
              <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-charcoal" />
              </button>
            </div>

            {/* Category */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-[0.15em] text-charcoal font-medium mb-3">Category</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === 'all'}
                    onChange={() => setSelectedCategory('all')}
                    className="accent-gold"
                  />
                  <span className="text-sm text-stone">All</span>
                </label>
                {categories.map(cat => (
                  <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === cat.id}
                      onChange={() => setSelectedCategory(cat.id)}
                      className="accent-gold"
                    />
                    <span className="text-sm text-stone">{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-[0.15em] text-charcoal font-medium mb-3">Price</h4>
              <div className="space-y-2">
                {[
                  { value: 'all', label: 'All Prices' },
                  { value: 'under50', label: 'Under $50' },
                  { value: '50to80', label: '$50 – $80' },
                  { value: 'over80', label: 'Over $80' },
                ].map(opt => (
                  <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={priceRange === opt.value}
                      onChange={() => setPriceRange(opt.value)}
                      className="accent-gold"
                    />
                    <span className="text-sm text-stone">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] text-charcoal font-medium mb-3">Material</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-gold" />
                  <span className="text-sm text-stone">18K Gold Plated</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-gold" />
                  <span className="text-sm text-stone">Sterling Silver</span>
                </label>
              </div>
            </div>

            {/* Mobile apply */}
            <button
              onClick={() => setFilterOpen(false)}
              className="mt-8 w-full bg-gold text-white py-3 text-xs uppercase tracking-[0.2em] font-medium md:hidden"
            >
              Apply Filters
            </button>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-stone text-sm">No products match your filters.</p>
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

export default Collection;
