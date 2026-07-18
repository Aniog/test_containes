import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const activeCategory = searchParams.get('category') || '';
  const activePrice = searchParams.get('price') || '';
  const activeMaterial = searchParams.get('material') || '';
  const sortBy = searchParams.get('sort') || 'featured';

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activePrice) {
      const range = priceRanges.find((r) => r.label === activePrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }
    if (activeMaterial) {
      result = result.filter((p) => p.material === activeMaterial);
    }

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, activePrice, activeMaterial, sortBy]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filteredProducts]);

  const hasFilters = activeCategory || activePrice || activeMaterial;

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-24'}>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs font-sans font-semibold tracking-super-wide uppercase text-brand-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('category', '')}
            className={`block text-sm font-sans font-light transition-colors ${
              !activeCategory ? 'text-brand-gold' : 'text-brand-warm-gray hover:text-brand-charcoal'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateFilter('category', cat.slug)}
              className={`block text-sm font-sans font-light transition-colors ${
                activeCategory === cat.slug ? 'text-brand-gold' : 'text-brand-warm-gray hover:text-brand-charcoal'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs font-sans font-semibold tracking-super-wide uppercase text-brand-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('price', '')}
            className={`block text-sm font-sans font-light transition-colors ${
              !activePrice ? 'text-brand-gold' : 'text-brand-warm-gray hover:text-brand-charcoal'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => updateFilter('price', range.label)}
              className={`block text-sm font-sans font-light transition-colors ${
                activePrice === range.label ? 'text-brand-gold' : 'text-brand-warm-gray hover:text-brand-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="text-xs font-sans font-semibold tracking-super-wide uppercase text-brand-charcoal mb-4">
          Material
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => updateFilter('material', '')}
            className={`block text-sm font-sans font-light transition-colors ${
              !activeMaterial ? 'text-brand-gold' : 'text-brand-warm-gray hover:text-brand-charcoal'
            }`}
          >
            All
          </button>
          <button
            onClick={() => updateFilter('material', '18K Gold Plated')}
            className={`block text-sm font-sans font-light transition-colors ${
              activeMaterial === '18K Gold Plated' ? 'text-brand-gold' : 'text-brand-warm-gray hover:text-brand-charcoal'
            }`}
          >
            18K Gold Plated
          </button>
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-gold hover:text-brand-gold-dark transition-colors underline"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16 md:pb-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl tracking-extra-wide text-brand-charcoal">
            The Collection
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block text-sm font-sans font-light text-brand-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-2">
            <label className="text-xs font-sans font-light text-brand-muted">Sort:</label>
            <select
              value={sortBy}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="text-xs font-sans text-brand-charcoal bg-transparent border border-brand-sand px-3 py-2 focus:outline-none focus:border-brand-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <div className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-charcoal mb-2">No pieces found</p>
                <p className="text-sm font-sans font-light text-brand-muted">Try adjusting your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs font-sans font-medium tracking-extra-wide uppercase text-brand-gold hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3x4] overflow-hidden bg-brand-ivory">
                        <img
                          data-strk-img-id={`shop-${product.imgId}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            hoveredId === product.id ? 'opacity-0' : 'opacity-100'
                          }`}
                        />
                        <img
                          data-strk-img-id={`shop-${product.imgId2}`}
                          data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry worn`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      </div>
                    </Link>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addItem(product);
                      }}
                      className={`absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-brand-charcoal font-sans text-[10px] font-semibold tracking-super-wide uppercase px-5 py-2.5 hover:bg-brand-gold hover:text-white transition-all duration-300 flex items-center gap-2 ${
                        hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                    >
                      <ShoppingBag className="w-3 h-3" />
                      Add to Cart
                    </button>

                    <div className="mt-4 text-center">
                      <h3
                        id={product.titleId}
                        className="font-serif text-xs md:text-sm tracking-super-wide uppercase text-brand-charcoal"
                      >
                        {product.name}
                      </h3>
                      <p id={product.descId} className="sr-only">{product.shortDescription}</p>
                      <p className="mt-1 text-sm font-sans text-brand-warm-gray">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-80 max-w-[85vw] bg-brand-cream z-50 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-brand-sand">
              <h2 className="font-serif text-lg tracking-extra-wide uppercase text-brand-charcoal">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-brand-warm-gray" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterSidebar mobile />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShopPage;
