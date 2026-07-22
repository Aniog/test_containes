import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import products, { categories } from '@/data/products';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    priceRange: 'all',
    material: 'all',
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filters, sortBy]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setFilters((prev) => ({ ...prev, category: cat }));
    }
  }, [searchParams]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    if (key === 'category') {
      if (value === 'all') {
        searchParams.delete('category');
      } else {
        searchParams.set('category', value);
      }
      setSearchParams(searchParams);
    }
  };

  const clearFilters = () => {
    setFilters({ category: 'all', priceRange: 'all', material: 'all' });
    searchParams.delete('category');
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number);
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true));
    }
    if (filters.material !== 'all') {
      result = result.filter((p) => p.material === filters.material);
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        break;
    }

    return result;
  }, [filters, sortBy]);

  const activeFilterCount = Object.values(filters).filter((v) => v !== 'all').length;

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultVariant = product.variants.find((v) => v.inStock) || product.variants[0];
    addItem(product, defaultVariant.id);
  };

  const FilterContent = ({ mobile = false }) => (
    <div className={mobile ? 'space-y-6' : 'space-y-8'}>
      {/* Category */}
      <div>
        <h4 className="text-[11px] tracking-widest uppercase text-velvet-800 font-sans font-medium mb-3">
          Category
        </h4>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('category', 'all')}
            className={`block text-sm font-sans transition-colors ${
              filters.category === 'all' ? 'text-velvet-950 font-medium' : 'text-velvet-500 hover:text-velvet-800'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.slug)}
              className={`block text-sm font-sans transition-colors ${
                filters.category === cat.slug ? 'text-velvet-950 font-medium' : 'text-velvet-500 hover:text-velvet-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-[11px] tracking-widest uppercase text-velvet-800 font-sans font-medium mb-3">
          Price
        </h4>
        <div className="space-y-2">
          {[
            { label: 'All', value: 'all' },
            { label: 'Under $50', value: '0-50' },
            { label: '$50 – $75', value: '50-75' },
            { label: '$75 – $100', value: '75-100' },
            { label: 'Over $100', value: '100-' },
          ].map((range) => (
            <button
              key={range.value}
              onClick={() => updateFilter('priceRange', range.value)}
              className={`block text-sm font-sans transition-colors ${
                filters.priceRange === range.value ? 'text-velvet-950 font-medium' : 'text-velvet-500 hover:text-velvet-800'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-[11px] tracking-widest uppercase text-velvet-800 font-sans font-medium mb-3">
          Material
        </h4>
        <div className="space-y-2">
          {[
            { label: 'All', value: 'all' },
            { label: 'Gold', value: 'gold' },
            { label: 'Silver', value: 'silver' },
          ].map((mat) => (
            <button
              key={mat.value}
              onClick={() => updateFilter('material', mat.value)}
              className={`block text-sm font-sans transition-colors ${
                filters.material === mat.value ? 'text-velvet-950 font-medium' : 'text-velvet-500 hover:text-velvet-800'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs text-velvet-600 underline hover:text-velvet-950 font-sans transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-velvet-50 border-b border-velvet-200">
        <div className="container-site py-10 md:py-14">
          <h1 className="section-heading text-3xl md:text-4xl lg:text-5xl text-velvet-950 text-center">
            Shop All Jewelry
          </h1>
          <p className="text-sm text-velvet-500 text-center font-sans font-light mt-3">
            Demi-fine pieces crafted to be worn and treasured
          </p>
        </div>
      </div>

      <div className="container-site py-8 md:py-12">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Main */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="md:hidden flex items-center gap-2 text-xs tracking-wider uppercase text-velvet-700 font-sans font-medium hover:text-velvet-950 transition-colors"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="w-4 h-4 bg-velvet-950 text-white text-[9px] rounded-full flex items-center justify-center">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
                <p className="text-xs text-velvet-500 font-sans">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                </p>
              </div>

              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-xs tracking-wider uppercase text-velvet-700 font-sans font-medium pr-6 pl-2 py-1.5 cursor-pointer hover:text-velvet-950 focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">Newest</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-velvet-500 pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-velvet-500 font-sans text-sm mb-4">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-outline text-xs">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] bg-velvet-100 rounded-sm overflow-hidden mb-3">
                      <img
                        alt={product.name}
                        data-strk-img-id={`shop-${product.id}-e8f3`}
                        data-strk-img={`[shop-name-${product.id}] demi-fine gold jewelry`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Quick add button */}
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={(e) => handleAddToCart(e, product)}
                          className="w-9 h-9 bg-velvet-950 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-velvet-800 transition-colors text-xs"
                          aria-label={`Add ${product.name} to cart`}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <p
                      id={`shop-name-${product.id}`}
                      className="product-name text-xs md:text-sm text-velvet-900"
                    >
                      {product.name}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-gold-500 fill-gold-500' : 'text-velvet-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-[11px] text-velvet-500 font-sans ml-1">
                        ({product.reviewCount})
                      </span>
                    </div>
                    <p className="text-sm font-sans font-medium text-velvet-900 mt-1">
                      ${product.price}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-velvet-950/30 backdrop-blur-sm" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm tracking-widest uppercase font-sans font-medium text-velvet-950">
                Filters
                {activeFilterCount > 0 && (
                  <span className="ml-2 text-xs text-velvet-500">({activeFilterCount})</span>
                )}
              </h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-velvet-600 hover:text-velvet-950">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent mobile />
            <button
              onClick={() => { setMobileFiltersOpen(false); }}
              className="btn-primary w-full mt-8"
            >
              Show Results ({filteredProducts.length})
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
