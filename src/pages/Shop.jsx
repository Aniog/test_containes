import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/shop/ProductCard';

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

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

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
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
    <div className="pt-20 md:pt-24 min-h-screen">
      {/* Page header */}
      <div className="px-6 md:px-12 lg:px-20 py-8 md:py-12 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-2 text-sm text-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-charcoal font-medium hover:text-gold transition-colors md:hidden"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Desktop category pills */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 text-xs uppercase tracking-[0.1em] font-medium border transition-colors ${
                activeCategory === 'all'
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'border-border-subtle text-muted hover:border-charcoal hover:text-charcoal'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.1em] font-medium border transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-charcoal text-white border-charcoal'
                    : 'border-border-subtle text-muted hover:border-charcoal hover:text-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-border-subtle px-4 py-2 pr-8 text-xs uppercase tracking-[0.08em] text-charcoal font-medium cursor-pointer focus:outline-none focus:border-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
          </div>
        </div>

        {/* Mobile filters */}
        {showFilters && (
          <div className="md:hidden mb-8 p-4 border border-border-subtle">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-charcoal">Category</span>
              <button onClick={() => setShowFilters(false)} aria-label="Close filters">
                <X className="w-4 h-4 text-muted" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`px-3 py-1.5 text-xs uppercase tracking-[0.08em] font-medium border transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-charcoal text-white border-charcoal'
                    : 'border-border-subtle text-muted'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-[0.08em] font-medium border transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-charcoal text-white border-charcoal'
                      : 'border-border-subtle text-muted'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-charcoal">No pieces found</p>
            <p className="text-sm text-muted mt-2">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
