import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);
  const { addItem, setDrawer } = useCart();

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory, sortBy]);

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category.toLowerCase() === activeCategory);
    }
    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [activeCategory, sortBy]);

  const handleCategoryChange = (cat) => {
    if (cat === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="mb-8">
          <h1 className="section-title mb-2">
            {activeCategory === 'all' ? 'All' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
          </h1>
          <p className="text-brand-textMuted">{filtered.length} products</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-2 text-sm text-brand-textMuted"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-brand-textMuted">Category</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`text-sm px-3 py-1 rounded-full transition-colors ${
                    activeCategory === 'all' ? 'bg-brand-gold text-brand-bg' : 'text-brand-textMuted hover:text-brand-text'
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`text-sm px-3 py-1 rounded-full transition-colors ${
                      activeCategory === cat.id ? 'bg-brand-gold text-brand-bg' : 'text-brand-textMuted hover:text-brand-text'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent border border-brand-border rounded-full px-4 py-2 pr-8 text-sm text-brand-text focus:outline-none focus:border-brand-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-textMuted pointer-events-none" />
          </div>
        </div>

        {/* Mobile Filters */}
        {mobileFiltersOpen && (
          <div className="md:hidden mb-6 p-4 bg-brand-surfaceAlt rounded-sm">
            <p className="text-xs uppercase tracking-widest text-brand-textMuted mb-3">Category</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`text-sm px-3 py-1 rounded-full border transition-colors ${
                  activeCategory === 'all' ? 'border-brand-gold bg-brand-gold text-brand-bg' : 'border-brand-border text-brand-text'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`text-sm px-3 py-1 rounded-full border transition-colors ${
                    activeCategory === cat.id ? 'border-brand-gold bg-brand-gold text-brand-bg' : 'border-brand-border text-brand-text'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[4/5] bg-brand-surfaceAlt rounded-sm overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`shop-${product.id}-1`}
                    data-strk-img={`[${product.name}] [${product.category}] [shop]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-brand-bg text-white text-[10px] uppercase tracking-widest px-3 py-1">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product, 'gold');
                        setDrawer(true);
                      }}
                      className="bg-brand-bg/90 backdrop-blur-sm text-white text-xs uppercase tracking-widest px-6 py-3 hover:bg-brand-gold hover:text-brand-bg transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <h3 className="product-name text-sm">{product.name}</h3>
                <p className="text-sm text-brand-textMuted mt-1">${product.price}</p>
              </Link>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-brand-textMuted">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
