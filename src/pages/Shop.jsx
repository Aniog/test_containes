import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/data/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name', label: 'Name' },
];

const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const containerRef = useRef(null);
  const { addItem } = useCart();

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [selectedCategory, selectedPrice, sortBy]);

  // Filter products
  let filtered = [...products];

  if (selectedCategory) {
    filtered = filtered.filter(p => p.category === selectedCategory);
  }
  if (selectedPrice) {
    filtered = filtered.filter(p => p.price >= selectedPrice.min && p.price < selectedPrice.max);
  }
  if (selectedMaterial) {
    filtered = filtered.filter(p => p.material === selectedMaterial);
  }

  // Sort
  switch (sortBy) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedPrice(null);
    setSelectedMaterial('');
  };

  const FilterPanel = ({ mobile = false }) => (
    <div className={`${mobile ? 'p-6' : ''}`}>
      {/* Category */}
      <div className="mb-6">
        <h4 className="text-xs uppercase tracking-nav font-sans font-medium text-velmora-charcoal mb-3">Category</h4>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('')}
            className={`text-sm font-sans transition-colors ${!selectedCategory ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'}`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-sm font-sans transition-colors ${selectedCategory === cat.id ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h4 className="text-xs uppercase tracking-nav font-sans font-medium text-velmora-charcoal mb-3">Price</h4>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedPrice(null)}
            className={`text-sm font-sans transition-colors ${!selectedPrice ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'}`}
          >
            All Prices
          </button>
          {priceRanges.map(range => (
            <button
              key={range.label}
              onClick={() => setSelectedPrice(range)}
              className={`text-sm font-sans transition-colors ${selectedPrice?.label === range.label ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'}`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h4 className="text-xs uppercase tracking-nav font-sans font-medium text-velmora-charcoal mb-3">Material</h4>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedMaterial('')}
            className={`text-sm font-sans transition-colors ${!selectedMaterial ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'}`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedMaterial('18K Gold Plated')}
            className={`text-sm font-sans transition-colors ${selectedMaterial === '18K Gold Plated' ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'}`}
          >
            18K Gold Plated
          </button>
        </div>
      </div>

      {/* Clear */}
      {(selectedCategory || selectedPrice || selectedMaterial) && (
        <button
          onClick={clearFilters}
          className="text-xs uppercase tracking-nav font-sans font-medium text-velmora-gold hover:text-velmora-gold-dark transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-velmora-off-white pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-velmora-charcoal">
            {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name || 'Shop' : 'Shop All'}
          </h1>

          <div className="flex items-center gap-4">
            {/* Sort dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs uppercase tracking-nav font-sans font-medium text-velmora-charcoal bg-transparent border border-velmora-sand px-3 py-2 focus:border-velmora-gold focus:outline-none"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden p-2 text-velmora-charcoal hover:text-velmora-gold transition-colors"
              aria-label="Filters"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden md:block">
            <FilterPanel />
          </aside>

          {/* Product grid */}
          <div ref={containerRef} className="md:col-span-3">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-lg text-velmora-muted">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs uppercase tracking-nav font-sans font-medium text-velmora-gold hover:text-velmora-gold-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <div
                    key={product.id}
                    className="group relative"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <Link to={`/product/${product.id}`}>
                      <div className="aspect-[4/3] bg-velmora-cream overflow-hidden">
                        <img
                          data-strk-img-id={hoveredProduct === product.id ? product.imgIdHover : product.imgId}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="4x3"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className={`w-full h-full object-cover transition-opacity duration-500 ${
                            hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'
                          }`}
                        />
                        <img
                          data-strk-img-id={product.imgIdHover}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="4x3"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      </div>
                    </Link>

                    {/* Quick add */}
                    <button
                      onClick={() => addItem(product)}
                      className={`absolute bottom-4 right-4 bg-velmora-gold text-velmora-white p-2.5 shadow-md transition-all duration-300 ${
                        hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                      aria-label="Add to cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>

                    {/* Info */}
                    <div className="mt-4">
                      <Link to={`/product/${product.id}`}>
                        <h3 id={product.titleId} className="product-name text-sm md:text-base font-medium text-velmora-charcoal">
                          {product.name}
                        </h3>
                      </Link>
                      <p id={product.descId} className="text-xs text-velmora-muted mt-1 font-sans">
                        {product.shortDescription}
                      </p>
                      <p className="text-sm font-serif font-medium text-velmora-charcoal mt-2">${product.price}</p>
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
          <div className="fixed inset-0 bg-black/30 z-50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 right-0 bottom-0 w-80 bg-velmora-white z-50 shadow-xl animate-slide-right">
            <div className="flex items-center justify-between px-6 py-4 border-b border-velmora-sand">
              <h3 className="font-serif text-lg text-velmora-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-2 text-velmora-charcoal hover:text-velmora-gold" aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterPanel mobile />
          </div>
        </>
      )}
    </div>
  );
};

export default Shop;
