import { useState, useMemo, useEffect, useRef } from 'react';
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

  const activeCategory = searchParams.get('category') || '';

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [activeCategory, sortBy]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
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
    if (cat) {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal font-light">
            {activeCategory
              ? categories.find(c => c.slug === activeCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
          <p className="text-stone text-sm mt-2">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-hairline">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-charcoal bg-transparent border-none cursor-pointer hover:text-gold transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="uppercase tracking-widest text-xs font-medium">Filters</span>
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm text-charcoal bg-transparent border border-hairline px-3 py-2 cursor-pointer focus:outline-none focus:border-gold"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        <div className="flex gap-8">
          {/* Filter sidebar */}
          <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-56 flex-shrink-0`}>
            <div className="sticky top-28">
              {/* Category filter */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest text-charcoal font-medium mb-4">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setCategory('')}
                    className={`block w-full text-left text-sm py-1.5 bg-transparent border-none cursor-pointer transition-colors ${
                      !activeCategory ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
                    }`}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.slug}
                      onClick={() => setCategory(cat.slug)}
                      className={`block w-full text-left text-sm py-1.5 bg-transparent border-none cursor-pointer transition-colors ${
                        activeCategory === cat.slug ? 'text-gold font-medium' : 'text-stone hover:text-charcoal'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price filter */}
              <div className="mb-8">
                <h3 className="text-xs uppercase tracking-widest text-charcoal font-medium mb-4">Price</h3>
                <div className="space-y-2">
                  <span className="block text-sm text-stone">$30 — $120</span>
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-xs uppercase tracking-widest text-charcoal font-medium mb-4">Material</h3>
                <div className="space-y-2">
                  <span className="block text-sm text-stone">18K Gold Plated</span>
                </div>
              </div>

              {/* Close on mobile */}
              <button
                onClick={() => setShowFilters(false)}
                className="md:hidden mt-6 flex items-center gap-2 text-sm text-stone bg-transparent border-none cursor-pointer"
              >
                <X className="w-4 h-4" />
                Close Filters
              </button>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-charcoal">No products found</p>
                <p className="text-sm text-stone mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
