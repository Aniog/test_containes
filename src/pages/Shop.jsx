import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies'];
const priceOptions = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50 – $75', min: 50, max: 75 },
  { label: '$75 – $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
  { label: 'Top Rated', value: 'rating' },
];

export default function ShopPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState(0);
  const [sort, setSort] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const { addItem } = useCart();
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [category, priceRange, sort]);

  // Update category when URL params change
  useEffect(() => {
    const cat = searchParams.get('category') || 'All';
    setCategory(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== 'All') {
      result = result.filter(p => p.category === category);
    }

    const price = priceOptions[priceRange];
    result = result.filter(p => p.price >= price.min && p.price <= price.max);

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
  }, [category, priceRange, sort]);

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs font-sans font-semibold tracking-product uppercase text-velmora-charcoal mb-4">
          Category
        </h3>
        <div className="space-y-2" role="radiogroup" aria-label="Filter by category">
          {categoryOptions.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`block w-full text-left text-sm font-sans py-1 transition-colors ${
                category === cat
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-muted hover:text-velmora-charcoal'
              }`}
              role="radio"
              aria-checked={category === cat}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs font-sans font-semibold tracking-product uppercase text-velmora-charcoal mb-4">
          Price
        </h3>
        <div className="space-y-2" role="radiogroup" aria-label="Filter by price">
          {priceOptions.map((opt, idx) => (
            <button
              key={opt.label}
              onClick={() => setPriceRange(idx)}
              className={`block w-full text-left text-sm font-sans py-1 transition-colors ${
                priceRange === idx
                  ? 'text-velmora-gold font-medium'
                  : 'text-velmora-muted hover:text-velmora-charcoal'
              }`}
              role="radio"
              aria-checked={priceRange === idx}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs font-sans font-semibold tracking-product uppercase text-velmora-charcoal mb-4">
          Material
        </h3>
        <div className="space-y-2">
          <button className="block w-full text-left text-sm font-sans py-1 text-velmora-gold font-medium">
            18K Gold Plated
          </button>
          <button className="block w-full text-left text-sm font-sans py-1 text-velmora-muted hover:text-velmora-charcoal transition-colors">
            Sterling Silver
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-content mx-auto px-5 md:px-8 py-8 md:py-12">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal font-light tracking-wide">
            The Collection
          </h1>
          <p className="mt-2 font-serif text-base text-velmora-muted italic">
            Discover pieces designed to be treasured
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-velmora-divider">
          <div className="flex items-center gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 text-xs font-sans font-semibold tracking-product uppercase text-velmora-charcoal"
              aria-label="Open filters"
            >
              <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
              Filters
            </button>
            <span className="text-sm font-sans text-velmora-muted" aria-live="polite">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </span>
          </div>

          {/* Sort */}
          <label className="flex items-center gap-2">
            <span className="text-xs font-sans font-semibold tracking-product uppercase text-velmora-charcoal sr-only md:not-sr-only">Sort by</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs font-sans font-semibold tracking-product uppercase text-velmora-charcoal bg-transparent border-none focus:outline-none cursor-pointer"
              aria-label="Sort products"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-52 flex-shrink-0" aria-label="Product filters">
            <FilterPanel />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-muted">No pieces found</p>
                <p className="mt-2 text-sm font-sans text-velmora-muted">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" role="list" aria-label="Products">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group" role="listitem">
                    <Link to={`/product/${product.id}`} aria-label={`${product.name} — $${product.price}`}>
                      <div className="relative aspect-[3x4] overflow-hidden bg-velmora-divider/30 mb-3">
                        <img
                          data-strk-img-id={product.imgId}
                          data-strk-img={`[${product.descId}] [${product.titleId}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="500"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </Link>
                    <h3 className="font-serif text-xs uppercase tracking-product text-velmora-charcoal">
                      <Link to={`/product/${product.id}`} className="hover:text-velmora-gold transition-colors">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-velmora-muted font-sans mt-1">{product.description}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-sm font-sans font-medium text-velmora-charcoal">${product.price}</span>
                      <div className="flex items-center gap-0.5" aria-label={`Rating: ${product.rating} out of 5`}>
                        <Star className="w-3 h-3 fill-velmora-gold text-velmora-gold" aria-hidden="true" />
                        <span className="text-xs text-velmora-muted font-sans">{product.rating}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => addItem(product, product.tone[0], 1)}
                      className="mt-2 w-full py-2 border border-velmora-gold text-velmora-gold text-xs font-sans font-semibold tracking-product uppercase hover:bg-velmora-gold hover:text-white transition-colors"
                      aria-label={`Add ${product.name} to bag`}
                    >
                      Add to Bag
                    </button>
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
          <div
            className="fixed inset-0 bg-black/40 z-50 animate-fade-in"
            onClick={() => setMobileFiltersOpen(false)}
            aria-hidden="true"
          />
          <div
            className="fixed top-0 left-0 h-full w-72 bg-velmora-cream z-50 shadow-2xl p-6 overflow-y-auto animate-slide-in-right"
            role="dialog"
            aria-label="Product filters"
            aria-modal="true"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg text-velmora-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5 text-velmora-muted" />
              </button>
            </div>
            <FilterPanel />
          </div>
        </>
      )}
    </div>
  );
}
