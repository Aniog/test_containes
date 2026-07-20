import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X, Star, ChevronDown, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'];
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
];
const materials = ['All', 'Gold', 'Silver'];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
];

export default function Shop() {
  const containerRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState(priceRanges[0]);
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [sortOpen, setSortOpen] = useState(false);
  const { addToCart } = useCart();

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== 'All') {
      result = result.filter(
        (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    result = result.filter(
      (p) => p.price >= selectedPrice.min && p.price <= selectedPrice.max
    );

    if (selectedMaterial !== 'All') {
      result = result.filter((p) =>
        p.variants?.some((v) => v.toLowerCase() === selectedMaterial.toLowerCase())
      );
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
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  const activeFilterCount = [
    selectedCategory !== 'All',
    selectedPrice.label !== 'All',
    selectedMaterial !== 'All',
  ].filter(Boolean).length;

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedPrice(priceRanges[0]);
    setSelectedMaterial('All');
  };

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-velmora-cream min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-velmora-bronze mb-2">
              Collection
            </p>
            <h1 className="font-serif text-3xl md:text-4xl text-velmora-deep">All Jewelry</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.1em] text-velmora-deep border border-velmora-sand px-4 py-2.5 hover:border-velmora-deep transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
              Filters
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 bg-velmora-bronze text-white text-[10px] rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.1em] text-velmora-deep border border-velmora-sand px-4 py-2.5 hover:border-velmora-deep transition-colors"
              >
                {sortOptions.find((o) => o.value === sortBy)?.label}
                <ChevronDown className={`w-3 h-3 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
              </button>
              {sortOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setSortOpen(false)} />
                  <div className="absolute right-0 top-full mt-1 bg-white border border-velmora-sand shadow-lg z-50 min-w-[180px]">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setSortBy(opt.value);
                          setSortOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-xs font-sans uppercase tracking-[0.08em] hover:bg-velmora-ivory transition-colors ${
                          sortBy === opt.value ? 'text-velmora-bronze' : 'text-velmora-deep'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Active filters */}
        {activeFilterCount > 0 && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            {selectedCategory !== 'All' && (
              <span className="inline-flex items-center gap-1.5 text-xs font-sans bg-velmora-ivory border border-velmora-sand px-3 py-1.5 text-velmora-deep">
                {selectedCategory}
                <button onClick={() => setSelectedCategory('All')}><X className="w-3 h-3" /></button>
              </span>
            )}
            {selectedPrice.label !== 'All' && (
              <span className="inline-flex items-center gap-1.5 text-xs font-sans bg-velmora-ivory border border-velmora-sand px-3 py-1.5 text-velmora-deep">
                {selectedPrice.label}
                <button onClick={() => setSelectedPrice(priceRanges[0])}><X className="w-3 h-3" /></button>
              </span>
            )}
            {selectedMaterial !== 'All' && (
              <span className="inline-flex items-center gap-1.5 text-xs font-sans bg-velmora-ivory border border-velmora-sand px-3 py-1.5 text-velmora-deep">
                {selectedMaterial}
                <button onClick={() => setSelectedMaterial('All')}><X className="w-3 h-3" /></button>
              </span>
            )}
            <button
              onClick={clearFilters}
              className="text-xs font-sans text-velmora-bronze underline hover:text-velmora-deep transition-colors"
            >
              Clear all
            </button>
          </div>
        )}

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs font-sans uppercase tracking-[0.15em] text-velmora-deep mb-4">Category</h3>
              <div className="flex flex-col gap-2 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-left text-sm font-sans transition-colors duration-200 ${
                      selectedCategory === cat ? 'text-velmora-bronze font-medium' : 'text-velmora-warmgray hover:text-velmora-deep'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <h3 className="text-xs font-sans uppercase tracking-[0.15em] text-velmora-deep mb-4">Price</h3>
              <div className="flex flex-col gap-2 mb-8">
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPrice(range)}
                    className={`text-left text-sm font-sans transition-colors duration-200 ${
                      selectedPrice.label === range.label ? 'text-velmora-bronze font-medium' : 'text-velmora-warmgray hover:text-velmora-deep'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>

              <h3 className="text-xs font-sans uppercase tracking-[0.15em] text-velmora-deep mb-4">Material</h3>
              <div className="flex flex-col gap-2">
                {materials.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`text-left text-sm font-sans transition-colors duration-200 ${
                      selectedMaterial === mat ? 'text-velmora-bronze font-medium' : 'text-velmora-warmgray hover:text-velmora-deep'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <p className="text-xs text-velmora-lightgray font-sans mb-4">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-deep">No pieces match your filters</p>
                <button
                  onClick={clearFilters}
                  className="mt-3 text-xs font-sans uppercase tracking-[0.1em] text-velmora-bronze underline hover:text-velmora-deep transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="relative aspect-[3/4] bg-velmora-ivory overflow-hidden">
                        <img
                          data-strk-img-id={`shop-${product.id}`}
                          data-strk-img={`[${product.id}-subtitle] [${product.id}-name]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addToCart(product, product.variants?.[0] || null, 1);
                          }}
                          className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm opacity-100 translate-y-0 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 hover:bg-velmora-bronze hover:text-white"
                        >
                          <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                      </div>
                    </Link>
                    <div className="mt-3">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif text-[13px] uppercase tracking-[0.12em] text-velmora-deep">
                          {product.name}
                        </h3>
                        <p className="text-xs text-velmora-lightgray mt-0.5 font-sans">{product.subtitle}</p>
                      </Link>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" />
                        <span className="text-xs text-velmora-warmgray font-sans">{product.rating}</span>
                      </div>
                      <p className="font-serif text-sm text-velmora-deep mt-1">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-velmora-deep/40 z-[60]" onClick={() => setSidebarOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-velmora-offwhite z-[70] overflow-y-auto animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand">
              <h2 className="font-serif text-xl text-velmora-deep">Filters</h2>
              <button onClick={() => setSidebarOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-velmora-deep" strokeWidth={1.5} />
              </button>
            </div>
            <div className="px-6 py-6 flex flex-col gap-8">
              <div>
                <h3 className="text-xs font-sans uppercase tracking-[0.15em] text-velmora-deep mb-3">Category</h3>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                      selectedCategory === cat ? 'text-velmora-bronze font-medium' : 'text-velmora-warmgray'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div>
                <h3 className="text-xs font-sans uppercase tracking-[0.15em] text-velmora-deep mb-3">Price</h3>
                {priceRanges.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => setSelectedPrice(range)}
                    className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                      selectedPrice.label === range.label ? 'text-velmora-bronze font-medium' : 'text-velmora-warmgray'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
              <div>
                <h3 className="text-xs font-sans uppercase tracking-[0.15em] text-velmora-deep mb-3">Material</h3>
                {materials.map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setSelectedMaterial(mat)}
                    className={`block w-full text-left text-sm font-sans py-1.5 transition-colors ${
                      selectedMaterial === mat ? 'text-velmora-bronze font-medium' : 'text-velmora-warmgray'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>
            <div className="px-6 py-5 border-t border-velmora-sand">
              <button
                onClick={() => setSidebarOpen(false)}
                className="w-full bg-velmora-bronze text-white text-[13px] font-sans uppercase tracking-[0.1em] py-3.5 hover:bg-velmora-gold transition-colors duration-300"
              >
                Show {filtered.length} Results
              </button>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="w-full mt-3 text-xs font-sans text-velmora-warmgray underline"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
