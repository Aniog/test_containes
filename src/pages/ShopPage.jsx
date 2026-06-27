import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, Star, SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import { useCart } from '@/context/CartContext';
import { products, categories } from '@/data/products';
import { formatPrice, cn } from '@/lib/utils';
import strkImgConfig from '@/strk-img-config.json';

const priceRanges = [
  { id: 'all', label: 'All Prices', min: 0, max: Infinity },
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-75', label: '$50 – $75', min: 50, max: 75 },
  { id: 'over-75', label: 'Over $75', min: 75, max: Infinity },
];

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeCategory = searchParams.get('category') || 'all';
  const activePrice = searchParams.get('price') || 'all';
  const activeSort = searchParams.get('sort') || 'featured';

  const setFilter = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  // Filter products
  let filtered = [...products];

  if (activeCategory !== 'all') {
    filtered = filtered.filter((p) => p.category === activeCategory);
  }

  const priceRange = priceRanges.find((r) => r.id === activePrice);
  if (priceRange && priceRange.id !== 'all') {
    filtered = filtered.filter((p) => p.price >= priceRange.min && p.price < priceRange.max);
  }

  // Sort
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

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => cancelAnimationFrame(raf);
  }, [activeCategory, activePrice, activeSort]);

  const FilterSidebar = ({ className = '' }) => (
    <div className={className}>
      {/* Category filter */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.2em] uppercase text-velmora-charcoal font-medium mb-4">
          Category
        </h3>
        <div className="space-y-2">
          <button
            onClick={() => setFilter('category', 'all')}
            className={cn(
              'block text-sm transition-colors',
              activeCategory === 'all' ? 'text-velmora-charcoal font-medium' : 'text-velmora-taupe hover:text-velmora-charcoal'
            )}
          >
            All Jewelry
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter('category', cat.id)}
              className={cn(
                'block text-sm transition-colors',
                activeCategory === cat.id ? 'text-velmora-charcoal font-medium' : 'text-velmora-taupe hover:text-velmora-charcoal'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div className="mb-8">
        <h3 className="text-xs tracking-[0.2em] uppercase text-velmora-charcoal font-medium mb-4">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => setFilter('price', range.id)}
              className={cn(
                'block text-sm transition-colors',
                activePrice === range.id ? 'text-velmora-charcoal font-medium' : 'text-velmora-taupe hover:text-velmora-charcoal'
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-xs tracking-[0.2em] uppercase text-velmora-charcoal font-medium mb-4">
          Material
        </h3>
        <p className="text-sm text-velmora-taupe">18K Gold Plated</p>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="pt-20 sm:pt-24 pb-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-velmora-charcoal tracking-wide mb-3">
          {activeCategory !== 'all'
            ? categories.find((c) => c.id === activeCategory)?.label || 'Shop'
            : 'Shop All'}
        </h1>
        <div className="w-16 h-px bg-velmora-gold mx-auto mb-3" />
        <p className="text-sm text-velmora-taupe">
          {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile filter toggle + sort */}
        <div className="flex items-center justify-between mb-6 lg:hidden">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 text-xs tracking-wider uppercase text-velmora-charcoal"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
          <select
            value={activeSort}
            onChange={(e) => setFilter('sort', e.target.value)}
            className="text-xs tracking-wider uppercase text-velmora-charcoal bg-transparent border border-velmora-sand/40 px-3 py-2 focus:outline-none"
          >
            {sortOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-12">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-48 flex-shrink-0">
            <FilterSidebar />

            {/* Sort (desktop) */}
            <div className="mt-8 pt-8 border-t border-velmora-sand/30">
              <h3 className="text-xs tracking-[0.2em] uppercase text-velmora-charcoal font-medium mb-4">
                Sort By
              </h3>
              <select
                value={activeSort}
                onChange={(e) => setFilter('sort', e.target.value)}
                className="w-full text-sm text-velmora-charcoal bg-transparent border border-velmora-sand/40 px-3 py-2 focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>{opt.label}</option>
                ))}
              </select>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-taupe mb-4">No pieces found</p>
                <button
                  onClick={() => {
                    setSearchParams({});
                  }}
                  className="text-xs tracking-wider uppercase text-velmora-gold underline"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filtered.map((product) => (
                  <ProductShopCard key={product.id} product={product} addItem={addItem} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-80 max-w-full bg-velmora-ivory shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-5 border-b border-velmora-sand/30">
              <h2 className="font-serif text-lg tracking-wider uppercase text-velmora-charcoal">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-1">
                <X className="w-5 h-5 text-velmora-charcoal" />
              </button>
            </div>
            <div className="px-6 py-6">
              <FilterSidebar />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductShopCard({ product, addItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-velmora-cream overflow-hidden rounded-sm mb-4">
          <img
            data-strk-img-id={`${product.imgIdPrimary}-shop`}
            data-strk-img={`[${product.descId}] [${product.titleId}] jewelry editorial`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={product.name}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
              hovered ? 'opacity-0' : 'opacity-100'
            )}
          />
          <img
            data-strk-img-id={`${product.imgIdSecondary}-shop`}
            data-strk-img={`[${product.descId}] [${product.titleId}] worn jewelry close up`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="600"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={`${product.name} detail`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
              hovered ? 'opacity-100' : 'opacity-0'
            )}
          />
          {product.badge && (
            <span className="absolute top-3 left-3 bg-velmora-charcoal text-velmora-cream text-[10px] tracking-widest uppercase px-3 py-1">
              {product.badge}
            </span>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, 'gold');
            }}
            className={cn(
              'absolute bottom-3 left-3 right-3 bg-velmora-charcoal/90 backdrop-blur-sm text-velmora-cream py-2.5 flex items-center justify-center gap-2 text-xs tracking-widest uppercase transition-all duration-300',
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            )}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="space-y-1">
        <h3 className="font-serif text-sm tracking-[0.12em] uppercase text-velmora-charcoal">
          {product.name}
        </h3>
        <p className="text-xs text-velmora-taupe">{product.subtitle}</p>
        <div className="flex items-center gap-2">
          <span className="font-serif text-base text-velmora-charcoal">{formatPrice(product.price)}</span>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn('w-3 h-3', i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand')}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
