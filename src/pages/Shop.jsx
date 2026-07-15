import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import StarRating from '@/components/StarRating';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const filters = {
  category: [
    { value: 'earrings', label: 'Earrings' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'huggies', label: 'Huggies' },
    { value: 'sets', label: 'Gift Sets' },
  ],
  price: [
    { value: 'under40', label: 'Under $40' },
    { value: '40to60', label: '$40 – $60' },
    { value: '60plus', label: '$60+' },
  ],
  material: [
    { value: 'gold', label: 'Gold Plated' },
    { value: 'silver', label: 'Silver Tone' },
  ],
};

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const img = product.images[0];

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] bg-hairline overflow-hidden">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={`shop-${img.id}`}
          data-strk-img={`[shop-${product.id}-title]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: hovered ? 0 : 1 }}
        />
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={`${product.name} alternate`}
          data-strk-img-id={`shop-hover-${product.hoverImage.id}`}
          data-strk-img={`[shop-${product.id}-title]`}
          data-strk-img-ratio="4x5"
          data-strk-img-width="600"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, product.variants[0] || 'gold', 1);
            }}
            className="w-full bg-gold text-white font-sans text-[11px] uppercase tracking-widest py-2.5 hover:bg-gold-hover transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="mt-3">
        <Link to={`/product/${product.id}`}>
          <h3
            id={`shop-${product.id}-title`}
            className="font-serif text-sm uppercase tracking-widest-plus text-text-primary hover:text-gold transition-colors"
          >
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mt-1">
          <StarRating rating={product.rating} size={12} />
          <span className="font-sans text-[11px] text-text-muted">({product.reviewCount})</span>
        </div>
        <p className="font-sans text-sm font-medium text-text-primary mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [sortValue, setSortValue] = useState('featured');
  const [activeFilters, setActiveFilters] = useState({
    category: [],
    price: [],
    material: [],
  });
  const containerRef = useRef(null);

  // Parse URL params
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveFilters((prev) => ({
        ...prev,
        category: [cat],
      }));
    }
  }, [searchParams]);

  const toggleFilter = (group, value) => {
    setActiveFilters((prev) => {
      const arr = prev[group];
      const next = arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
      return { ...prev, [group]: next };
    });
  };

  const clearFilters = () => {
    setActiveFilters({ category: [], price: [], material: [] });
    setSearchParams({});
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (activeFilters.category.length) {
      list = list.filter((p) => activeFilters.category.includes(p.category));
    }
    if (activeFilters.price.length) {
      list = list.filter((p) => {
        return activeFilters.price.some((f) => {
          if (f === 'under40') return p.price < 40;
          if (f === '40to60') return p.price >= 40 && p.price <= 60;
          if (f === '60plus') return p.price > 60;
          return false;
        });
      });
    }
    if (activeFilters.material.length) {
      list = list.filter((p) =>
        activeFilters.material.some((m) => p.variants.includes(m))
      );
    }
    if (sortValue === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sortValue === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sortValue === 'rating') list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [activeFilters, sortValue]);

  const hasFilters =
    activeFilters.category.length || activeFilters.price.length || activeFilters.material.length;

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  return (
    <div ref={containerRef} className="pt-20 lg:pt-24 bg-cream min-h-screen">
      <div className="max-w-content mx-auto px-6 lg:px-12 py-8 lg:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-text-primary">Shop All</h1>
            <p className="font-sans text-sm text-text-secondary mt-1">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 border border-hairline px-4 py-2 font-sans text-xs uppercase tracking-wider text-text-primary"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 border border-hairline px-4 py-2 font-sans text-xs uppercase tracking-wider text-text-primary bg-white"
              >
                {sortOptions.find((s) => s.value === sortValue)?.label}
                <ChevronDown className="w-3 h-3" />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-hairline shadow-lg z-10 w-48">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setSortValue(opt.value);
                        setSortOpen(false);
                      }}
                      className={cn(
                        'w-full text-left px-4 py-2.5 font-sans text-xs hover:bg-cream transition-colors',
                        sortValue === opt.value ? 'text-gold font-medium' : 'text-text-secondary'
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="font-sans text-xs text-text-muted hover:text-gold transition-colors mb-6"
              >
                Clear all filters
              </button>
            )}
            {Object.entries(filters).map(([group, options]) => (
              <div key={group} className="mb-8">
                <h4 className="font-sans text-xs uppercase tracking-widest font-medium text-text-primary mb-3">
                  {group}
                </h4>
                <div className="flex flex-col gap-2">
                  {options.map((opt) => (
                    <label key={opt.value} className="flex items-center gap-2 cursor-pointer group">
                      <div
                        className={cn(
                          'w-4 h-4 border rounded-sm flex items-center justify-center transition-colors',
                          activeFilters[group].includes(opt.value)
                            ? 'bg-gold border-gold'
                            : 'border-hairline group-hover:border-gold'
                        )}
                        onClick={() => toggleFilter(group, opt.value)}
                      >
                        {activeFilters[group].includes(opt.value) && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" />
                          </svg>
                        )}
                      </div>
                      <span className="font-sans text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-text-primary">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-gold hover:text-gold-hover font-sans text-sm"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-80 bg-cream shadow-2xl overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-xl text-text-primary">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-2">
                <X className="w-5 h-5" />
              </button>
            </div>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="font-sans text-xs text-text-muted hover:text-gold transition-colors mb-6"
              >
                Clear all
              </button>
            )}
            {Object.entries(filters).map(([group, options]) => (
              <div key={group} className="mb-8">
                <h4 className="font-sans text-xs uppercase tracking-widest font-medium text-text-primary mb-3">
                  {group}
                </h4>
                <div className="flex flex-col gap-2">
                  {options.map((opt) => (
                    <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                      <div
                        className={cn(
                          'w-4 h-4 border rounded-sm flex items-center justify-center',
                          activeFilters[group].includes(opt.value)
                            ? 'bg-gold border-gold'
                            : 'border-hairline'
                        )}
                        onClick={() => toggleFilter(group, opt.value)}
                      >
                        {activeFilters[group].includes(opt.value) && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" />
                          </svg>
                        )}
                      </div>
                      <span className="font-sans text-sm text-text-secondary">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="w-full bg-gold text-white font-sans text-xs uppercase tracking-widest py-3 hover:bg-gold-hover transition-colors"
            >
              Show {filtered.length} Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
