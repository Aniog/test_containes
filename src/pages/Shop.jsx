import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

const Shop = () => {
  const containerRef = useRef(null);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [categoryFilter, sortBy]);

  let filtered = categoryFilter === 'all'
    ? products
    : products.filter(p => p.category === categoryFilter);

  if (sortBy === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-5xl text-charcoal font-light">
            The Collection
          </h1>
          <p className="mt-3 text-sm text-muted font-sans">
            Timeless pieces designed for everyday luxury
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border-warm">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm font-sans text-charcoal bg-transparent border-none hover:text-gold transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop filters */}
          <div className="hidden md:flex items-center gap-3">
            {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-wider border transition-all duration-300 ${
                  categoryFilter === cat
                    ? 'bg-charcoal text-white border-charcoal'
                    : 'bg-transparent text-charcoal border-border-warm hover:border-charcoal'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs font-sans text-charcoal bg-transparent border border-border-warm px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="md:hidden mb-6 p-4 bg-ivory border border-border-warm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-sans uppercase tracking-wider text-muted">Category</span>
              <button onClick={() => setShowFilters(false)} className="bg-transparent border-none text-muted">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {['all', 'earrings', 'necklaces', 'huggies'].map(cat => (
                <button
                  key={cat}
                  onClick={() => { setCategoryFilter(cat); setShowFilters(false); }}
                  className={`px-4 py-1.5 rounded-full text-xs font-sans uppercase tracking-wider border transition-all duration-300 ${
                    categoryFilter === cat
                      ? 'bg-charcoal text-white border-charcoal'
                      : 'bg-transparent text-charcoal border-border-warm hover:border-charcoal'
                  }`}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-charcoal">No products found</p>
            <p className="text-sm text-muted mt-2">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
