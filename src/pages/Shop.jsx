import { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

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
        {/* Header */}
        <div className="text-center mb-12">
          <h1 id="shop-title" className="font-serif text-3xl md:text-4xl text-charcoal font-light">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mt-3 text-stone text-sm font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          {/* Filter toggle (mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 text-sm text-charcoal font-sans bg-transparent border-none"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* Category pills (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setCategory('all')}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-sans border transition-colors ${
                activeCategory === 'all'
                  ? 'border-gold bg-gold text-white'
                  : 'border-border text-stone hover:border-gold hover:text-gold bg-transparent'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-sans border transition-colors ${
                  activeCategory === cat.id
                    ? 'border-gold bg-gold text-white'
                    : 'border-border text-stone hover:border-gold hover:text-gold bg-transparent'
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
            className="text-xs uppercase tracking-widest text-stone font-sans bg-transparent border border-border px-3 py-2 focus:outline-none focus:border-gold cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="md:hidden mb-8 p-4 bg-ivory border border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-charcoal font-sans font-medium">Category</span>
              <button onClick={() => setShowFilters(false)} className="text-stone bg-transparent border-none">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory('all')}
                className={`px-3 py-1.5 text-xs uppercase tracking-widest font-sans border transition-colors ${
                  activeCategory === 'all'
                    ? 'border-gold bg-gold text-white'
                    : 'border-border text-stone bg-transparent'
                }`}
              >
                All
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-widest font-sans border transition-colors ${
                    activeCategory === cat.id
                      ? 'border-gold bg-gold text-white'
                      : 'border-border text-stone bg-transparent'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-charcoal">No pieces found</p>
            <p className="mt-2 text-sm text-stone font-sans">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
