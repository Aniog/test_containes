import { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
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
    <div ref={containerRef} className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-brand-charcoal mb-3">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="text-sm text-brand-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-warm">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 text-sm text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Category pills (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 text-xs uppercase tracking-wider border transition-colors ${
                activeCategory === 'all'
                  ? 'border-brand-charcoal bg-brand-charcoal text-brand-cream'
                  : 'border-brand-warm text-brand-muted hover:border-brand-charcoal'
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider border transition-colors ${
                  activeCategory === cat.id
                    ? 'border-brand-charcoal bg-brand-charcoal text-brand-cream'
                    : 'border-brand-warm text-brand-muted hover:border-brand-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-xs text-brand-charcoal bg-transparent border border-brand-warm px-3 py-2 focus:outline-none focus:border-brand-charcoal cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Mobile filters panel */}
        {showFilters && (
          <div className="md:hidden mb-8 p-4 bg-brand-ivory border border-brand-warm animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider font-medium text-brand-charcoal">Category</span>
              <button onClick={() => setShowFilters(false)} aria-label="Close filters">
                <X className="w-4 h-4 text-brand-muted" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`px-4 py-2 text-xs uppercase tracking-wider border transition-colors ${
                  activeCategory === 'all'
                    ? 'border-brand-charcoal bg-brand-charcoal text-brand-cream'
                    : 'border-brand-warm text-brand-muted'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider border transition-colors ${
                    activeCategory === cat.id
                      ? 'border-brand-charcoal bg-brand-charcoal text-brand-cream'
                      : 'border-brand-warm text-brand-muted'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-xl text-brand-charcoal mb-2">No pieces found</p>
            <p className="text-sm text-brand-muted">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
