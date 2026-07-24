import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem, setCartOpen } = useCart();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
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
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const handleAddToCart = (product) => {
    addItem(product, 'gold', 1);
    setCartOpen(true);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-warm-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-brand-charcoal">
            {activeCategory === 'all' ? 'All Jewelry' : categories.find(c => c.id === activeCategory)?.name || 'Shop'}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-brand-warm-gray">
            Discover our collection of demi-fine jewelry, each piece designed to be worn and treasured.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-8 lg:flex-row">
          {/* Desktop Filters */}
          <aside className="hidden lg:block lg:w-64 lg:flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="font-serif text-lg text-brand-charcoal">Categories</h2>
              <div className="mt-4 space-y-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeCategory === 'all'
                      ? 'bg-brand-gold/10 text-brand-gold font-medium'
                      : 'text-brand-warm-gray hover:text-brand-charcoal'
                  }`}
                >
                  All Jewelry
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeCategory === category.id
                        ? 'bg-brand-gold/10 text-brand-gold font-medium'
                        : 'text-brand-warm-gray hover:text-brand-charcoal'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-serif text-lg text-brand-charcoal">Price Range</h3>
                <div className="mt-4 space-y-2">
                  {['Under $50', '$50 - $75', '$75 - $100', 'Over $100'].map((range) => (
                    <label key={range} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-brand-charcoal/20 text-brand-gold focus:ring-brand-gold" />
                      <span className="text-sm text-brand-warm-gray">{range}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm font-medium text-brand-charcoal"
              >
                <SlidersHorizontal size={18} />
                Filters
              </button>
              <div className="flex items-center gap-2">
                <span className="text-sm text-brand-warm-gray">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent pr-8 text-sm font-medium text-brand-charcoal focus:outline-none"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-warm-gray pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                  onClick={() => handleAddToCart(product)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-brand-cream">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-soft-black/0 transition-all duration-300 group-hover:bg-brand-soft-black/20" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-white/95 px-4 py-3 text-center transition-transform duration-300 group-hover:translate-y-0">
                      <span className="text-xs font-semibold uppercase tracking-widest text-brand-charcoal">
                        Add to Cart
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-lg uppercase tracking-widest text-brand-charcoal text-sm">{product.name}</h3>
                    <p className="mt-1 font-serif text-lg text-brand-charcoal">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="mt-16 text-center">
                <p className="font-serif text-xl text-brand-charcoal">No products found</p>
                <p className="mt-2 text-brand-warm-gray">Try adjusting your filters or browse all products.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-50 w-full max-w-sm bg-brand-warm-white shadow-2xl lg:hidden">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b border-brand-charcoal/10 px-6 py-4">
                <h2 className="font-serif text-xl text-brand-charcoal">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 text-brand-charcoal/60"
                  aria-label="Close filters"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="mb-8">
                  <h3 className="font-serif text-lg text-brand-charcoal">Categories</h3>
                  <div className="mt-4 space-y-2">
                    <button
                      onClick={() => {
                        handleCategoryChange('all');
                        setIsFilterOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeCategory === 'all'
                          ? 'bg-brand-gold/10 text-brand-gold font-medium'
                          : 'text-brand-warm-gray'
                      }`}
                    >
                      All Jewelry
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          handleCategoryChange(category.id);
                          setIsFilterOpen(false);
                        }}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          activeCategory === category.id
                            ? 'bg-brand-gold/10 text-brand-gold font-medium'
                            : 'text-brand-warm-gray'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-brand-charcoal">Price Range</h3>
                  <div className="mt-4 space-y-2">
                    {['Under $50', '$50 - $75', '$75 - $100', 'Over $100'].map((range) => (
                      <label key={range} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-brand-charcoal/20 text-brand-gold focus:ring-brand-gold" />
                        <span className="text-sm text-brand-warm-gray">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
