import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $100', min: 60, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[3/4] bg-velmora-cream-dark overflow-hidden rounded-sm mb-3">
        <img
          data-strk-img-id={`shop-${product.id}-img`}
          data-strk-img={`${product.name} ${product.category} gold jewelry product photo elegant warm lighting`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-velmora-charcoal/0 group-hover:bg-velmora-charcoal/30 transition-all duration-500 flex items-end justify-center pb-5 opacity-0 group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, product.variants?.[0] || 'Gold');
            }}
            className="bg-velmora-cream text-velmora-charcoal px-5 py-2 text-[11px] font-sans font-semibold uppercase tracking-[0.15em] hover:bg-white transition-colors transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <h3 className="font-serif text-sm tracking-[0.1em] uppercase text-velmora-charcoal group-hover:text-velmora-gold transition-colors text-center">
        {product.name}
      </h3>
      <p className="text-xs text-velmora-muted text-center mt-1">${product.price}</p>
    </Link>
  );
}

function FilterSidebar({ activeCategory, setActiveCategory, activePriceRange, setActivePriceRange, mobileOpen, setMobileOpen }) {
  const content = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-velmora-charcoal mb-4">Category</h3>
        <div className="space-y-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`block text-sm font-sans transition-colors ${
              !activeCategory ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`block text-sm font-sans transition-colors ${
                activeCategory === cat.id ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-velmora-charcoal mb-4">Price</h3>
        <div className="space-y-2">
          <button
            onClick={() => setActivePriceRange(null)}
            className={`block text-sm font-sans transition-colors ${
              !activePriceRange ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'
            }`}
          >
            All Prices
          </button>
          {priceRanges.map((range, i) => (
            <button
              key={i}
              onClick={() => setActivePriceRange(i)}
              className={`block text-sm font-sans transition-colors ${
                activePriceRange === i ? 'text-velmora-gold font-medium' : 'text-velmora-muted hover:text-velmora-charcoal'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material (simplified) */}
      <div>
        <h3 className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-velmora-charcoal mb-4">Material</h3>
        <div className="space-y-2">
          {['18K Gold Plated', 'Sterling Silver', 'Surgical Steel'].map((mat) => (
            <span key={mat} className="block text-sm text-velmora-muted font-sans cursor-default">
              {mat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile filter overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 bottom-0 w-80 bg-velmora-cream p-6 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-lg tracking-wider">FILTERS</h2>
              <button onClick={() => setMobileOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            {content}
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:block w-56 shrink-0 sticky top-24 self-start">
        {content}
      </aside>
    </>
  );
}

export default function Collection() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  const [activeCategory, setActiveCategory] = useState(initialCategory || null);
  const [activePriceRange, setActivePriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePriceRange !== null) {
      const range = priceRanges[activePriceRange];
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
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [activeCategory, activePriceRange, sortBy]);

  return (
    <div className="pt-20 md:pt-24 pb-16 md:pb-24 px-5 md:px-8 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-serif text-3xl md:text-4xl text-velmora-charcoal mb-2">
          {activeCategory ? categories.find((c) => c.id === activeCategory)?.name || 'Shop' : 'All Jewelry'}
        </h1>
        <div className="w-12 h-px bg-velmora-gold" />
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="md:hidden flex items-center gap-2 text-xs font-sans uppercase tracking-[0.15em] text-velmora-charcoal"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </button>

        <p className="text-xs text-velmora-muted font-sans hidden md:block">
          {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
        </p>

        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none bg-transparent text-xs font-sans uppercase tracking-[0.1em] text-velmora-charcoal pr-6 py-1 border-b border-velmora-divider focus:outline-none focus:border-velmora-gold cursor-pointer"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <ChevronDown className="w-3 h-3 text-velmora-muted absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex gap-10">
        <FilterSidebar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activePriceRange={activePriceRange}
          setActivePriceRange={setActivePriceRange}
          mobileOpen={mobileFiltersOpen}
          setMobileOpen={setMobileFiltersOpen}
        />

        {/* Product grid */}
        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-velmora-muted mb-2">No products found</p>
              <p className="text-sm text-velmora-muted">Try adjusting your filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
