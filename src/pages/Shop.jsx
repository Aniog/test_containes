import { useState, useEffect, useRef } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const Shop = () => {
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

  // Category filter
  if (selectedCategory !== 'all') {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  // Price filter
  if (priceRange === 'under50') {
    filtered = filtered.filter(p => p.price < 50);
  } else if (priceRange === '50to80') {
    filtered = filtered.filter(p => p.price >= 50 && p.price <= 80);
  } else if (priceRange === 'over80') {
    filtered = filtered.filter(p => p.price > 80);
  }

  // Sort
  if (sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-brand-ivory py-12 md:py-16 border-b border-brand-warm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal">
            Shop All
          </h1>
          <p className="mt-3 text-sm text-brand-muted font-sans">
            Discover our full collection of demi-fine gold jewelry.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="md:hidden flex items-center gap-2 text-xs font-sans font-medium tracking-wide uppercase text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block text-sm text-brand-muted">
            {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          </p>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs font-sans font-medium text-brand-charcoal bg-transparent border border-brand-warm px-3 py-2 focus:outline-none focus:border-brand-gold"
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
            <div className="sticky top-28">
              {/* Category */}
              <div className="mb-8">
                <h3 className="text-xs font-sans font-medium tracking-wide uppercase text-brand-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`block text-sm font-sans transition-colors ${
                      selectedCategory === 'all' ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block text-sm font-sans transition-colors ${
                        selectedCategory === cat.id ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="text-xs font-sans font-medium tracking-wide uppercase text-brand-charcoal mb-4">
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
                      onClick={() => setPriceRange(option.value)}
                      className={`block text-sm font-sans transition-colors ${
                        priceRange === option.value ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs font-sans font-medium tracking-wide uppercase text-brand-charcoal mb-4">
                  Material
                </h3>
                <div className="space-y-2">
                  <span className="block text-sm font-sans text-brand-charcoal font-medium">18K Gold Plated</span>
                  <span className="block text-sm font-sans text-brand-muted">Sterling Silver</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-40 md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-brand-cream p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg text-brand-charcoal">Filters</h3>
                  <button onClick={() => setFilterOpen(false)}>
                    <X className="w-5 h-5 text-brand-muted" />
                  </button>
                </div>

                {/* Category */}
                <div className="mb-6">
                  <h4 className="text-xs font-sans font-medium tracking-wide uppercase text-brand-charcoal mb-3">
                    Category
                  </h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`block text-sm font-sans ${selectedCategory === 'all' ? 'text-brand-charcoal font-medium' : 'text-brand-muted'}`}
                    >
                      All
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`block text-sm font-sans ${selectedCategory === cat.id ? 'text-brand-charcoal font-medium' : 'text-brand-muted'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <h4 className="text-xs font-sans font-medium tracking-wide uppercase text-brand-charcoal mb-3">
                    Price
                  </h4>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: 'under50', label: 'Under $50' },
                      { value: '50to80', label: '$50 – $80' },
                      { value: 'over80', label: 'Over $80' },
                    ].map(option => (
                      <button
                        key={option.value}
                        onClick={() => setPriceRange(option.value)}
                        className={`block text-sm font-sans ${priceRange === option.value ? 'text-brand-charcoal font-medium' : 'text-brand-muted'}`}
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
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-brand-muted font-sans">No products match your filters.</p>
                <button
                  onClick={() => { setSelectedCategory('all'); setPriceRange('all'); }}
                  className="mt-4 text-sm text-brand-gold underline"
                >
                  Clear filters
                </button>
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
