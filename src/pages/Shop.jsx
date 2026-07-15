import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const FILTER_CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies'];
const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const ShopProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3x4] overflow-hidden bg-brand-warm">
          <img
            data-strk-img-id={`${product.imgId}-shop`}
            data-strk-img={`[${product.descId}] [${product.titleId}]`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <img
            data-strk-img-id={`${product.imgId}-shop-hover`}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn model`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
      </Link>
      <button
        onClick={(e) => { e.preventDefault(); addItem(product); }}
        className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-brand-dark font-sans text-xs uppercase tracking-wide py-2.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-gold hover:text-white flex items-center justify-center gap-2"
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Add to Cart
      </button>
      <div className="mt-3">
        <h3 className="font-sans text-xs font-medium uppercase tracking-ultra-wide text-brand-dark">
          <Link to={`/product/${product.id}`} className="hover:text-brand-gold transition-colors">{product.name}</Link>
        </h3>
        <p className="text-xs text-brand-muted mt-0.5">{product.description}</p>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-brand-gold fill-brand-gold' : 'text-brand-border'}`} />
            ))}
          </div>
          <span className="text-[10px] text-brand-muted font-sans">({product.reviews})</span>
        </div>
        <p className="font-sans text-sm text-brand-dark mt-1">${product.price}</p>
      </div>
    </div>
  );
};

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(searchParams.get('category') || 'All');
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState('all');
  const [material, setMaterial] = useState('all');
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [category, sort, priceRange, material]);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      const formatted = cat.charAt(0).toUpperCase() + cat.slice(1);
      setCategory(formatted);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== 'All') {
      result = result.filter(p => p.category === category);
    }

    if (priceRange === 'under50') {
      result = result.filter(p => p.price < 50);
    } else if (priceRange === '50to80') {
      result = result.filter(p => p.price >= 50 && p.price <= 80);
    } else if (priceRange === 'over80') {
      result = result.filter(p => p.price > 80);
    }

    switch (sort) {
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
  }, [category, sort, priceRange, material]);

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    setMobileFiltersOpen(false);
  };

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-brand-dark tracking-wide">
            {category === 'All' ? 'All Jewelry' : category}
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-border">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-wide text-brand-dark"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <p className="hidden md:block font-sans text-sm text-brand-muted">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs uppercase tracking-wide text-brand-dark pr-6 cursor-pointer focus:outline-none"
            >
              {SORT_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-brand-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="font-sans text-xs uppercase tracking-super-wide text-brand-dark mb-4">Category</h3>
              <ul className="space-y-2.5 mb-8">
                {FILTER_CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryChange(cat)}
                      className={`font-sans text-sm transition-colors ${
                        category === cat ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-dark'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>

              <h3 className="font-sans text-xs uppercase tracking-super-wide text-brand-dark mb-4">Price</h3>
              <ul className="space-y-2.5 mb-8">
                {[
                  { value: 'all', label: 'All Prices' },
                  { value: 'under50', label: 'Under $50' },
                  { value: '50to80', label: '$50 – $80' },
                  { value: 'over80', label: 'Over $80' },
                ].map(opt => (
                  <li key={opt.value}>
                    <button
                      onClick={() => setPriceRange(opt.value)}
                      className={`font-sans text-sm transition-colors ${
                        priceRange === opt.value ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-dark'
                      }`}
                    >
                      {opt.label}
                    </button>
                  </li>
                ))}
              </ul>

              <h3 className="font-sans text-xs uppercase tracking-super-wide text-brand-dark mb-4">Material</h3>
              <ul className="space-y-2.5">
                {[
                  { value: 'all', label: 'All Materials' },
                  { value: 'gold', label: '18K Gold Plated' },
                  { value: 'silver', label: 'Silver Plated' },
                ].map(opt => (
                  <li key={opt.value}>
                    <button
                      onClick={() => setMaterial(opt.value)}
                      className={`font-sans text-sm transition-colors ${
                        material === opt.value ? 'text-brand-gold' : 'text-brand-muted hover:text-brand-dark'
                      }`}
                    >
                      {opt.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Mobile filters */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 md:hidden">
              <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
              <div className="absolute bottom-0 left-0 right-0 bg-brand-cream p-6 rounded-t-lg max-h-[70vh] overflow-y-auto animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-sans text-sm uppercase tracking-super-wide text-brand-dark">Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)} className="p-1 text-brand-muted">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h4 className="font-sans text-xs uppercase tracking-super-wide text-brand-dark mb-3">Category</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {FILTER_CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`font-sans text-xs px-4 py-2 border transition-colors ${
                        category === cat
                          ? 'border-brand-gold bg-brand-gold text-white'
                          : 'border-brand-border text-brand-dark'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <h4 className="font-sans text-xs uppercase tracking-super-wide text-brand-dark mb-3">Price</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { value: 'all', label: 'All' },
                    { value: 'under50', label: 'Under $50' },
                    { value: '50to80', label: '$50–$80' },
                    { value: 'over80', label: 'Over $80' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => setPriceRange(opt.value)}
                      className={`font-sans text-xs px-4 py-2 border transition-colors ${
                        priceRange === opt.value
                          ? 'border-brand-gold bg-brand-gold text-white'
                          : 'border-brand-border text-brand-dark'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-muted">No pieces found</p>
                <button
                  onClick={() => { setCategory('All'); setPriceRange('all'); }}
                  className="mt-4 font-sans text-xs uppercase tracking-wide text-brand-gold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ShopProductCard key={product.id} product={product} />
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
