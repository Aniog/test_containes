import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { products, categories } from '@/data/products';
import { formatPrice, generateStars } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $75', min: 50, max: 75 },
  { label: '$75 - $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rating', value: 'rating' },
  { label: 'Most Reviews', value: 'reviews' },
];

function ShopProductCard({ product }) {
  const { addItem } = useCart();
  const stars = generateStars(product.rating);

  return (
    <div className="group relative">
      <Link to={`/product/${product.slug}`} className="block relative overflow-hidden bg-velvet-100 aspect-[4/5]">
        <img
          data-strk-img-id={`shop-${product.id}`}
          data-strk-img={`[shop-name-${product.id}] [shop-cat-${product.id}] gold jewelry dark background`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(product, product.variants[0].value);
          }}
          className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm text-velvet-900 py-2.5 text-overline tracking-widest flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>
      </Link>
      <div className="mt-4">
        <Link to={`/product/${product.slug}`}>
          <h3 className="text-product-name text-sm text-velvet-900 hover:text-gilded-700 transition-colors">
            <span id={`shop-name-${product.id}`}>{product.name}</span>
          </h3>
        </Link>
        <p id={`shop-cat-${product.id}`} className="sr-only">{product.category} {product.description}</p>
        <div className="flex items-center gap-1 mt-1.5">
          {[...Array(stars.full)].map((_, i) => (
            <Star key={`full-${i}`} className="w-3 h-3 fill-gilded-500 text-gilded-500" />
          ))}
          <span className="text-xs text-velvet-500 ml-1">({product.reviewCount})</span>
        </div>
        <p className="font-serif text-lg text-velvet-950 mt-1">{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}

function FilterSidebar({ selectedCategory, setSelectedCategory, selectedPriceRange, setSelectedPriceRange, mobileOpen, setMobileOpen }) {
  const content = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-overline text-velvet-800 mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`block text-sm w-full text-left py-1 transition-colors ${
              !selectedCategory ? 'text-velvet-950 font-medium' : 'text-velvet-500 hover:text-velvet-900'
            }`}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                selectedCategory === cat.id ? 'text-velvet-950 font-medium' : 'text-velvet-500 hover:text-velvet-900'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-overline text-velvet-800 mb-4">Price</h3>
        <div className="space-y-2">
          <button
            onClick={() => setSelectedPriceRange(null)}
            className={`block text-sm w-full text-left py-1 transition-colors ${
              !selectedPriceRange ? 'text-velvet-950 font-medium' : 'text-velvet-500 hover:text-velvet-900'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range, index) => (
            <button
              key={range.label}
              onClick={() => setSelectedPriceRange(index)}
              className={`block text-sm w-full text-left py-1 transition-colors ${
                selectedPriceRange === index ? 'text-velvet-950 font-medium' : 'text-velvet-500 hover:text-velvet-900'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-overline text-velvet-800 mb-4">Material</h3>
        <div className="space-y-2">
          <span className="block text-sm text-velvet-900 font-medium py-1">18K Gold Plated</span>
          <span className="block text-xs text-velvet-500">All pieces are 18K gold plated sterling silver</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:block w-56 flex-shrink-0">
        {content}
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-velvet-950/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-80 bg-velvet-50 shadow-elevated p-6 overflow-y-auto animate-slide-in-right">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl text-velvet-950">Filters</h3>
              <button onClick={() => setMobileOpen(false)} className="p-2">
                <X className="w-5 h-5 text-velvet-500" />
              </button>
            </div>
            {content}
          </div>
        </div>
      )}
    </>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      result = result.filter((p) => p.price >= range.min && p.price < range.max);
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
      case 'reviews':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, selectedPriceRange, sortBy]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [filteredProducts]);

  const activeFilters = (selectedCategory ? 1 : 0) + (selectedPriceRange !== null ? 1 : 0);

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-8 pb-6">
        <p className="text-overline text-gilded-600 mb-2">Collection</p>
        <h1 className="text-display text-velvet-950">Shop All Jewelry</h1>
        <p className="text-body text-velvet-500 mt-3 max-w-xl">
          Explore our curated collection of demi-fine 18K gold-plated jewelry. 
          Every piece designed to be treasured.
        </p>
      </div>

      <div className="hairline" />

      {/* Toolbar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden flex items-center gap-2 text-sm text-velvet-700"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters {activeFilters > 0 && `(${activeFilters})`}
          </button>
          <p className="text-sm text-velvet-500">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Sort dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none bg-transparent text-sm text-velvet-700 pr-8 pl-2 py-1.5 border border-velvet-200 focus:outline-none focus:border-velvet-400 cursor-pointer"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-velvet-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="flex gap-10 lg:gap-14">
          {/* Sidebar */}
          <FilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedPriceRange={selectedPriceRange}
            setSelectedPriceRange={setSelectedPriceRange}
            mobileOpen={mobileFiltersOpen}
            setMobileOpen={setMobileFiltersOpen}
          />

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velvet-700 mb-2">No pieces found</p>
                <p className="text-sm text-velvet-500 mb-6">Try adjusting your filters</p>
                <button
                  onClick={() => { setSelectedCategory(null); setSelectedPriceRange(null); }}
                  className="btn-outline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
