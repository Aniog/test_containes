import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const Shop = () => {
  const containerRef = useRef(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [selectedCategory, selectedPrice, sortBy]);

  let filtered = [...products];

  if (selectedCategory !== 'all') {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }

  if (selectedPrice === 'under50') {
    filtered = filtered.filter(p => p.price < 50);
  } else if (selectedPrice === '50to80') {
    filtered = filtered.filter(p => p.price >= 50 && p.price <= 80);
  } else if (selectedPrice === 'over80') {
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

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: 'under50', label: 'Under $50' },
    { value: '50to80', label: '$50 – $80' },
    { value: 'over80', label: 'Over $80' },
  ];

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal">The Collection</h1>
          <p className="mt-3 text-sm text-brand-muted">Timeless pieces for every occasion</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-sand">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 text-xs font-medium tracking-wide-nav uppercase text-brand-charcoal hover:text-brand-gold transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <p className="text-xs text-brand-muted hidden md:block">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs font-medium text-brand-charcoal bg-transparent border border-brand-sand px-3 py-2 focus:outline-none focus:border-brand-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Sidebar filters - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-32">
              {/* Category */}
              <div className="mb-8">
                <h3 className="text-xs font-medium tracking-wide-nav uppercase text-brand-charcoal mb-4">
                  Category
                </h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={`block text-sm transition-colors ${
                        selectedCategory === cat.value
                          ? 'text-brand-gold font-medium'
                          : 'text-brand-muted hover:text-brand-charcoal'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="mb-8">
                <h3 className="text-xs font-medium tracking-wide-nav uppercase text-brand-charcoal mb-4">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setSelectedPrice(range.value)}
                      className={`block text-sm transition-colors ${
                        selectedPrice === range.value
                          ? 'text-brand-gold font-medium'
                          : 'text-brand-muted hover:text-brand-charcoal'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setFilterOpen(false)} />
              <div className="absolute left-0 top-0 bottom-0 w-72 bg-brand-cream p-6 animate-fade-in overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg text-brand-charcoal">Filters</h3>
                  <button onClick={() => setFilterOpen(false)} aria-label="Close filters">
                    <X className="w-5 h-5 text-brand-muted" />
                  </button>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-medium tracking-wide-nav uppercase text-brand-charcoal mb-4">Category</h4>
                  <div className="space-y-3">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => { setSelectedCategory(cat.value); setFilterOpen(false); }}
                        className={`block text-sm ${selectedCategory === cat.value ? 'text-brand-gold font-medium' : 'text-brand-muted'}`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-medium tracking-wide-nav uppercase text-brand-charcoal mb-4">Price</h4>
                  <div className="space-y-3">
                    {priceRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => { setSelectedPrice(range.value); setFilterOpen(false); }}
                        className={`block text-sm ${selectedPrice === range.value ? 'text-brand-gold font-medium' : 'text-brand-muted'}`}
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
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-charcoal">No pieces found</p>
                <p className="mt-2 text-sm text-brand-muted">Try adjusting your filters</p>
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
};

export default Shop;
