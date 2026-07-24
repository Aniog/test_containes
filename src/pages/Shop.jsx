import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const priceRanges = [
  { id: 'all', label: 'All Prices' },
  { id: 'under-50', label: 'Under $50' },
  { id: '50-75', label: '$50 – $75' },
  { id: 'over-75', label: 'Over $75' },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

const ShopCard = ({ product }) => {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <Link
      to={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-4">
        <img
          data-strk-img-id={`shop-${product.imgId}`}
          data-strk-img={`[${product.descId}] [${product.titleId}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />
        <img
          data-strk-img-id={`shop-hover-${product.imgId2}`}
          data-strk-img={`[${product.titleId}] gold jewelry detail`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} detail`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />
        {product.badge && (
          <span className="absolute top-3 left-3 font-sans text-[9px] tracking-widest uppercase bg-obsidian text-gold px-2.5 py-1 z-10">
            {product.badge}
          </span>
        )}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ${
          hovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={handleAdd}
            className={`w-full py-3 font-sans text-[10px] tracking-widest uppercase flex items-center justify-center gap-2 transition-colors ${
              added ? 'bg-obsidian text-gold' : 'bg-cream/95 text-ink hover:bg-gold hover:text-cream'
            }`}
          >
            <ShoppingBag size={12} strokeWidth={1.5} />
            {added ? 'Added!' : 'Quick Add'}
          </button>
        </div>
      </div>
      <p id={product.titleId} className="font-serif text-sm uppercase tracking-widest text-ink mb-1 group-hover:text-gold transition-colors">
        {product.name}
      </p>
      <p id={product.descId} className="sr-only">{product.shortDescription}</p>
      <div className="flex items-center justify-between">
        <span className="font-sans text-sm text-muted">${product.price}</span>
        <div className="flex items-center gap-1">
          <Star size={10} fill="#C9A96E" className="text-gold" />
          <span className="font-sans text-[10px] text-muted">{product.rating}</span>
        </div>
      </div>
    </Link>
  );
};

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all');
  const [activePriceRange, setActivePriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const containerRef = useRef(null);

  // Sync category from URL
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (activePriceRange === 'under-50') result = result.filter(p => p.price < 50);
    else if (activePriceRange === '50-75') result = result.filter(p => p.price >= 50 && p.price <= 75);
    else if (activePriceRange === 'over-75') result = result.filter(p => p.price > 75);

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [activeCategory, activePriceRange, sortBy]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (containerRef.current) ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(frame);
  }, [filteredProducts]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: catId });
    }
  };

  const activeFiltersCount = (activeCategory !== 'all' ? 1 : 0) + (activePriceRange !== 'all' ? 1 : 0);

  return (
    <div className="bg-parchment min-h-screen pt-20">
      {/* Page header */}
      <div className="bg-linen border-b border-divider">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
            All Pieces
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-ink font-300">
            The Collection
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-divider">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-ink hover:text-gold transition-colors"
            >
              <SlidersHorizontal size={14} strokeWidth={1.5} />
              Filter
              {activeFiltersCount > 0 && (
                <span className="bg-gold text-obsidian text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
            <span className="font-sans text-xs text-muted">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs tracking-widest uppercase text-ink pr-6 cursor-pointer focus:outline-none hover:text-gold transition-colors"
            >
              {sortOptions.map(opt => (
                <option key={opt.id} value={opt.id}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Filter sidebar — desktop */}
          <aside className={`hidden md:block flex-shrink-0 transition-all duration-300 ${filterOpen ? 'w-52' : 'w-0 overflow-hidden'}`}>
            {filterOpen && (
              <div className="space-y-8">
                {/* Category filter */}
                <div>
                  <h3 className="font-sans text-[10px] tracking-widest uppercase text-ink mb-4">Category</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleCategoryChange('all')}
                      className={`block font-sans text-sm transition-colors ${
                        activeCategory === 'all' ? 'text-gold' : 'text-muted hover:text-ink'
                      }`}
                    >
                      All ({products.length})
                    </button>
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`block font-sans text-sm transition-colors ${
                          activeCategory === cat.id ? 'text-gold' : 'text-muted hover:text-ink'
                        }`}
                      >
                        {cat.label} ({cat.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price filter */}
                <div>
                  <h3 className="font-sans text-[10px] tracking-widest uppercase text-ink mb-4">Price</h3>
                  <div className="space-y-2">
                    {priceRanges.map(range => (
                      <button
                        key={range.id}
                        onClick={() => setActivePriceRange(range.id)}
                        className={`block font-sans text-sm transition-colors ${
                          activePriceRange === range.id ? 'text-gold' : 'text-muted hover:text-ink'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear filters */}
                {activeFiltersCount > 0 && (
                  <button
                    onClick={() => { handleCategoryChange('all'); setActivePriceRange('all'); }}
                    className="flex items-center gap-1.5 font-sans text-xs tracking-widest uppercase text-muted hover:text-gold transition-colors"
                  >
                    <X size={10} />
                    Clear All
                  </button>
                )}
              </div>
            )}
          </aside>

          {/* Mobile filter drawer */}
          {filterOpen && (
            <div className="md:hidden fixed inset-0 z-40 bg-obsidian/40" onClick={() => setFilterOpen(false)}>
              <div
                className="absolute left-0 top-0 bottom-0 w-72 bg-cream p-6 overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-sans text-xs tracking-widest uppercase text-ink">Filters</h2>
                  <button onClick={() => setFilterOpen(false)} className="text-muted hover:text-ink">
                    <X size={16} />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-sans text-[10px] tracking-widest uppercase text-ink mb-4">Category</h3>
                    <div className="space-y-3">
                      <button onClick={() => { handleCategoryChange('all'); setFilterOpen(false); }}
                        className={`block font-sans text-sm ${activeCategory === 'all' ? 'text-gold' : 'text-muted'}`}>
                        All ({products.length})
                      </button>
                      {categories.map(cat => (
                        <button key={cat.id} onClick={() => { handleCategoryChange(cat.id); setFilterOpen(false); }}
                          className={`block font-sans text-sm ${activeCategory === cat.id ? 'text-gold' : 'text-muted'}`}>
                          {cat.label} ({cat.count})
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans text-[10px] tracking-widest uppercase text-ink mb-4">Price</h3>
                    <div className="space-y-3">
                      {priceRanges.map(range => (
                        <button key={range.id} onClick={() => { setActivePriceRange(range.id); setFilterOpen(false); }}
                          className={`block font-sans text-sm ${activePriceRange === range.id ? 'text-gold' : 'text-muted'}`}>
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-2xl text-ink mb-3">No pieces found</p>
                <p className="font-sans text-sm text-muted mb-6">Try adjusting your filters.</p>
                <button
                  onClick={() => { handleCategoryChange('all'); setActivePriceRange('all'); }}
                  className="font-sans text-xs tracking-widest uppercase text-gold border border-gold px-6 py-3 hover:bg-gold hover:text-cream transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ShopCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
