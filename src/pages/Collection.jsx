import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ShoppingBag, Star, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

const priceRanges = [
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: '75-plus', label: '$75 & Above', min: 75, max: Infinity },
];

const materials = [
  { id: 'gold', label: 'Gold' },
  { id: 'silver', label: 'Silver' },
];

export default function Collection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const activeCategory = searchParams.get('category') || 'all';

  const setActiveCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (activeCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
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
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [activeCategory, sortBy]);

  const allCategories = [
    { id: 'all', name: 'All Jewelry' },
    ...categories,
    { id: 'sets', name: 'Sets' },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <h1 className="font-serif text-3xl md:text-5xl text-stone-900 text-center mb-3">
          {activeCategory === 'all'
            ? 'Our Collection'
            : allCategories.find((c) => c.id === activeCategory)?.name || 'Shop'}
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mb-4" />
        <p className="text-center text-stone-500 text-sm tracking-wider max-w-md mx-auto">
          Handcrafted demi-fine jewelry designed to be worn, loved, and treasured every day.
        </p>
      </div>

      {/* Category tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
          {allCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-[11px] tracking-widest uppercase font-sans font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-stone-400'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Toolbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between">
          <p className="text-xs text-stone-400 tracking-wider">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 text-xs tracking-wider uppercase text-stone-600 hover:text-stone-900 transition-colors lg:hidden"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent text-xs tracking-wider uppercase text-stone-600 border border-stone-200 px-3 py-2 pr-8 focus:outline-none focus:border-stone-400 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex gap-8">
          {/* Sidebar filters (desktop) */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Price filter */}
              <div>
                <h3 className="text-xs tracking-widest uppercase font-sans font-semibold text-stone-800 mb-3">
                  Price
                </h3>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <label key={range.id} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="accent-gold w-3.5 h-3.5" />
                      <span className="text-sm text-stone-600 group-hover:text-stone-900 transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Material filter */}
              <div>
                <h3 className="text-xs tracking-widest uppercase font-sans font-semibold text-stone-800 mb-3">
                  Material
                </h3>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <label key={mat.id} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="accent-gold w-3.5 h-3.5" />
                      <span className="text-sm text-stone-600 group-hover:text-stone-900 transition-colors">
                        {mat.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/30" onClick={() => setFilterOpen(false)} />
              <div className="absolute right-0 top-0 h-full w-80 bg-ivory shadow-xl p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg text-stone-900">Filters</h3>
                  <button onClick={() => setFilterOpen(false)} className="text-stone-500">
                    <X size={20} />
                  </button>
                </div>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs tracking-widest uppercase font-sans font-semibold text-stone-800 mb-3">
                      Price
                    </h4>
                    <div className="space-y-3">
                      {priceRanges.map((range) => (
                        <label key={range.id} className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" className="accent-gold w-4 h-4" />
                          <span className="text-sm text-stone-600">{range.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs tracking-widest uppercase font-sans font-semibold text-stone-800 mb-3">
                      Material
                    </h4>
                    <div className="space-y-3">
                      {materials.map((mat) => (
                        <label key={mat.id} className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" className="accent-gold w-4 h-4" />
                          <span className="text-sm text-stone-600">{mat.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-stone-500 mb-2">No pieces found</p>
                <p className="text-sm text-stone-400">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] bg-champagne rounded-sm overflow-hidden">
                      <img
                        data-strk-img-id={`collection-${product.id}`}
                        data-strk-img={product.imageQuery}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Quick add */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addItem(product, product.variants[0]);
                          }}
                          className="w-full bg-stone-900/90 backdrop-blur-sm text-white py-2.5 text-[10px] tracking-widest uppercase font-sans font-medium hover:bg-gold transition-colors flex items-center justify-center gap-2"
                        >
                          <ShoppingBag size={13} />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h3 className="font-serif text-sm uppercase tracking-wider text-stone-900 group-hover:text-gold transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              size={10}
                              className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone-300'}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-stone-400">({product.reviewCount})</span>
                      </div>
                      <p className="text-sm text-stone-500 mt-0.5 font-sans">${product.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
