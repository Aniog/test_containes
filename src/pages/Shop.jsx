import { useState, useEffect, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Newest', value: 'newest' },
  { label: 'Best Rating', value: 'rating' },
];

const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $100', min: 60, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
];

const materials = ['18K Gold Plated', 'Sterling Silver'];

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const { addItem } = useCart();
  const [hoveredId, setHoveredId] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || '';
  const activeSort = searchParams.get('sort') || 'featured';
  const activePrice = searchParams.get('price') || '';
  const activeMaterial = searchParams.get('material') || '';

  useEffect(() => {
    if (containerRef.current) {
      requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current);
      });
    }
  }, [activeCategory, activeSort, activePrice, activeMaterial]);

  const updateFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  let filtered = [...products];

  if (activeCategory) {
    filtered = filtered.filter((p) => p.category === activeCategory);
  }
  if (activePrice) {
    const range = priceRanges.find((r) => r.label === activePrice);
    if (range) {
      filtered = filtered.filter((p) => p.price >= range.min && p.price < range.max);
    }
  }
  if (activeMaterial) {
    filtered = filtered.filter((p) => p.material === activeMaterial);
  }

  switch (activeSort) {
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

  const hasFilters = activeCategory || activePrice || activeMaterial;

  const FilterSidebar = ({ mobile = false }) => (
    <div className={mobile ? '' : 'sticky top-28'}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-brand-charcoal">Filters</h3>
        {hasFilters && (
          <button onClick={clearFilters} className="text-xs text-brand-gold hover:underline">
            Clear all
          </button>
        )}
      </div>

      {/* Category */}
      <div className="mb-8">
        <h4 className="font-sans text-xs tracking-[0.1em] uppercase text-brand-muted mb-3">Category</h4>
        <div className="space-y-2">
          {['', 'earrings', 'necklaces', 'huggies'].map((cat) => (
            <button
              key={cat}
              onClick={() => updateFilter('category', cat)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors duration-200 ${
                activeCategory === cat ? 'text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'
              }`}
            >
              {cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'All Jewelry'}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h4 className="font-sans text-xs tracking-[0.1em] uppercase text-brand-muted mb-3">Price</h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => updateFilter('price', activePrice === range.label ? '' : range.label)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors duration-200 ${
                activePrice === range.label ? 'text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h4 className="font-sans text-xs tracking-[0.1em] uppercase text-brand-muted mb-3">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => updateFilter('material', activeMaterial === mat ? '' : mat)}
              className={`block w-full text-left font-sans text-sm py-1 transition-colors duration-200 ${
                activeMaterial === mat ? 'text-brand-gold' : 'text-brand-charcoal hover:text-brand-gold'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-24 md:pt-28 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Page header */}
        <div className="text-center mb-10 md:mb-14">
          <h1 className="font-serif text-display-sm md:text-display text-brand-charcoal tracking-wide">
            {activeCategory ? activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1) : 'All Jewelry'}
          </h1>
          <p className="mt-2 font-sans text-sm text-brand-muted">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 border-b border-brand-sand pb-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 font-sans text-xs tracking-[0.1em] uppercase text-brand-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="hidden md:block" />

          <div className="relative">
            <select
              value={activeSort}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="appearance-none bg-transparent font-sans text-xs tracking-[0.1em] uppercase text-brand-charcoal pr-6 cursor-pointer focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 text-brand-muted pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-brand-muted mb-4">No pieces found</p>
                <button onClick={clearFilters} className="btn-outline text-xs">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="relative aspect-[3x4] bg-brand-warm overflow-hidden mb-3">
                      <img
                        data-strk-img-id={`shop-${product.images[0].imgId}`}
                        data-strk-img={`[shop-desc-${product.id}] [shop-name-${product.id}]`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          hoveredId === product.id ? 'scale-105' : 'scale-100'
                        }`}
                      />
                      <img
                        data-strk-img-id={`shop-hover-${product.images[1].imgId}`}
                        data-strk-img={`[shop-desc-${product.id}] [shop-name-${product.id}] side view`}
                        data-strk-img-ratio="3x4"
                        data-strk-img-width="500"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        alt={product.name}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      <div
                        className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
                          hoveredId === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}
                      >
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            addItem(product);
                          }}
                          className="w-full bg-white/95 text-brand-charcoal font-sans text-[10px] tracking-[0.12em] uppercase py-2.5 flex items-center justify-center gap-2 hover:bg-brand-gold hover:text-white transition-colors duration-300"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <h3
                      id={`shop-name-${product.id}`}
                      className="product-name text-xs md:text-sm text-brand-charcoal"
                    >
                      {product.name}
                    </h3>
                    <p
                      id={`shop-desc-${product.id}`}
                      className="text-[11px] text-brand-muted mt-0.5 line-clamp-1"
                    >
                      {product.description}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating) ? 'text-brand-gold fill-brand-gold' : 'text-brand-sand'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-brand-muted">({product.reviews})</span>
                    </div>
                    <p className="font-sans text-sm font-medium text-brand-charcoal mt-1">
                      ${product.price}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="fixed top-0 left-0 bottom-0 z-50 w-72 bg-brand-cream p-6 overflow-y-auto animate-slide-in-left">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-brand-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-2 text-brand-muted">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterSidebar mobile />
          </div>
        </>
      )}
    </div>
  );
}
