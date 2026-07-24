import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products, categories } from '@/data/products';
import { useCart } from '@/lib/CartContext';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
  { value: 'rating', label: 'Top Rated' },
];

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

export default function Shop() {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sort, setSort] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  // Init from URL params
  useEffect(() => {
    const catParam = searchParams.get('category');
    if (catParam && categories.includes(catParam)) {
      setSelectedCategories([catParam]);
    }
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [selectedCategories, selectedPriceRanges, sort]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const togglePriceRange = (range) => {
    setSelectedPriceRanges((prev) =>
      prev.find((r) => r.label === range.label)
        ? prev.filter((r) => r.label !== range.label)
        : [...prev, range]
    );
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPriceRanges.length > 0) {
      result = result.filter((p) =>
        selectedPriceRanges.some((r) => p.price >= r.min && p.price <= r.max)
      );
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategories, selectedPriceRanges, sort]);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRanges([]);
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedPriceRanges.length > 0;

  const FilterContent = () => (
    <>
      {/* Category filter */}
      <div className="mb-8">
        <h4 className="text-xs uppercase tracking-widest text-brand-ink mb-4">Category</h4>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="hidden"
              />
              <span
                className={`w-3.5 h-3.5 border flex items-center justify-center transition-colors ${
                  selectedCategories.includes(cat)
                    ? 'bg-brand-gold border-brand-gold'
                    : 'border-brand-sand group-hover:border-brand-warmgray'
                }`}
              >
                {selectedCategories.includes(cat) && (
                  <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className="text-sm text-brand-charcoal group-hover:text-brand-ink transition-colors">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div className="mb-8">
        <h4 className="text-xs uppercase tracking-widest text-brand-ink mb-4">Price</h4>
        <div className="space-y-2.5">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={!!selectedPriceRanges.find((r) => r.label === range.label)}
                onChange={() => togglePriceRange(range)}
                className="hidden"
              />
              <span
                className={`w-3.5 h-3.5 border flex items-center justify-center transition-colors ${
                  selectedPriceRanges.find((r) => r.label === range.label)
                    ? 'bg-brand-gold border-brand-gold'
                    : 'border-brand-sand group-hover:border-brand-warmgray'
                }`}
              >
                {selectedPriceRanges.find((r) => r.label === range.label) && (
                  <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className="text-sm text-brand-charcoal group-hover:text-brand-ink transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-2xl md:text-3xl tracking-wider text-brand-ink">Shop All</h1>
          <p className="text-brand-warmgray text-sm mt-2">{filtered.length} pieces</p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <FilterContent />
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-wider text-brand-warmgray hover:text-brand-ink transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product grid area */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand-sand/50">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 text-xs uppercase tracking-wider text-brand-charcoal hover:text-brand-ink"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
                {hasActiveFilters && (
                  <span className="w-4 h-4 bg-brand-gold text-white text-[9px] rounded-full flex items-center justify-center">
                    !
                  </span>
                )}
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-brand-warmgray">Sort by:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-xs uppercase tracking-wider border border-brand-sand bg-transparent px-3 py-1.5 focus:outline-none focus:border-brand-gold cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-brand-warmgray">No products match your filters.</p>
                <button onClick={clearFilters} className="btn-ghost mt-4">
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <div className="relative overflow-hidden bg-brand-sand/20 aspect-[3/4] mb-4">
                      <Link to={`/product/${product.id}`}>
                        <img
                          alt={product.images[0].alt}
                          data-strk-img-id={`shop-${product.id}-img-8f2a`}
                          data-strk-img={`[shop-desc-${product.id}] [shop-name-${product.id}]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </Link>
                      {product.isNew && (
                        <span className="absolute top-3 left-3 bg-brand-gold text-white text-[10px] uppercase tracking-wider px-2 py-0.5">
                          New
                        </span>
                      )}
                      <div className="absolute inset-x-0 bottom-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <button
                          onClick={() => addItem(product)}
                          className="w-full bg-brand-ink text-white text-xs uppercase tracking-wider py-2.5 hover:bg-brand-gold transition-colors flex items-center justify-center gap-2"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Cart
                        </button>
                      </div>
                    </div>

                    <Link to={`/product/${product.id}`}>
                      <h3
                        id={`shop-name-${product.id}`}
                        className="font-serif text-xs md:text-sm tracking-[0.12em] uppercase text-brand-ink group-hover:text-brand-gold-dark transition-colors"
                      >
                        {product.name}
                      </h3>
                      <p id={`shop-desc-${product.id}`} className="sr-only">{product.description}</p>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating)
                                  ? 'fill-brand-gold text-brand-gold'
                                  : 'fill-brand-sand text-brand-sand'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-brand-warmgray">({product.reviewCount})</span>
                      </div>
                      <p className="text-sm text-brand-charcoal mt-1">${product.price}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter overlay */}
      {mobileFiltersOpen && (
        <>
          <div
            className="fixed inset-0 z-[70] bg-brand-ink/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 z-[80] w-80 max-w-[85vw] bg-white shadow-2xl p-6 overflow-y-auto lg:hidden animate-in slide-in-from-left">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg tracking-wider">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 text-brand-warmgray hover:text-brand-ink"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
            <div className="flex gap-3">
              {hasActiveFilters && (
                <button onClick={clearFilters} className="btn-ghost text-xs">
                  Clear
                </button>
              )}
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="btn-primary flex-1 text-center text-xs"
              >
                Show Results ({filtered.length})
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
