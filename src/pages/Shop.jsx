import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { SlidersHorizontal, X } from 'lucide-react';

const Shop = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilters, setMobileFilters] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const sortBy = searchParams.get('sort') || 'featured';
  const priceRange = searchParams.get('price') || 'all';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all' || !value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true));
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
  }, [activeCategory, sortBy, priceRange]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frameId);
  }, [filtered]);

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '30-50', label: '$30 – $50' },
    { value: '50-70', label: '$50 – $70' },
    { value: '70-120', label: '$70 – $120' },
  ];

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h3 className="text-xs tracking-extra-wide uppercase font-sans font-semibold text-brand-charcoal mb-3">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('category', 'all')}
            className={`block text-sm font-sans transition-colors ${
              activeCategory === 'all' ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.slug)}
              className={`block text-sm font-sans transition-colors ${
                activeCategory === cat.slug ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs tracking-extra-wide uppercase font-sans font-semibold text-brand-charcoal mb-3">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setFilter('price', range.value)}
              className={`block text-sm font-sans transition-colors ${
                priceRange === range.value ? 'text-brand-charcoal font-medium' : 'text-brand-muted hover:text-brand-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-extra-wide uppercase font-sans font-semibold text-brand-charcoal mb-3">
          Material
        </h3>
        <div className="space-y-2">
          <span className="block text-sm font-sans text-brand-muted">18K Gold Plated</span>
          <span className="block text-sm font-sans text-brand-muted">Sterling Silver</span>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="bg-brand-cream pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal tracking-wide">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.slug === activeCategory)?.name || 'Shop'}
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Sort + mobile filter toggle */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setMobileFilters(true)}
            className="md:hidden flex items-center gap-2 text-xs tracking-extra-wide uppercase font-sans text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="ml-auto flex items-center gap-2">
            <label className="text-xs text-brand-muted font-sans">Sort by</label>
            <select
              value={sortBy}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="text-xs font-sans text-brand-charcoal bg-transparent border border-brand-sand px-3 py-1.5 focus:outline-none focus:border-brand-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-brand-muted font-sans text-sm">No products match your filters.</p>
                <button
                  onClick={() => {
                    setSearchParams({});
                  }}
                  className="mt-4 btn-outline text-xs"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setMobileFilters(false)} />
          <div className="fixed top-0 left-0 h-full w-72 bg-brand-cream z-50 shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs tracking-extra-wide uppercase font-sans font-semibold text-brand-charcoal">Filters</h3>
              <button onClick={() => setMobileFilters(false)} className="p-1 text-brand-muted" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
