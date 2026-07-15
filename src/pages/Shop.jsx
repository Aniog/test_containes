import { useState, useRef, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products, categories } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { formatPrice, cn } from '@/lib/utils';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 — $75', min: 50, max: 75 },
  { label: '$75+', min: 75, max: Infinity },
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
  { value: 'newest', label: 'Newest' },
];

function ShopProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <article
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] bg-cream rounded-sm overflow-hidden">
          <img
            alt={product.name}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-700',
              hovered ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            )}
            data-strk-img-id={`shop-${product.imageIds.primary}`}
            data-strk-img={`[${product.id}-name] [${product.id}-desc] gold jewelry product`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <img
            alt={`${product.name} - alternate view`}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-700',
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            )}
            data-strk-img-id={`shop-${product.imageIds.secondary}`}
            data-strk-img={`[${product.id}-name] worn model gold jewelry ear neck`}
            data-strk-img-ratio="3x4"
            data-strk-img-width="500"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className={cn(
              'absolute bottom-3 left-3 right-3 bg-charcoal/90 backdrop-blur-sm text-ivory py-2.5 px-4 flex items-center justify-center gap-2 font-sans text-xs uppercase tracking-wider transition-all duration-300',
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            )}
          >
            <ShoppingBag size={14} />
            Add to Cart
          </button>
        </div>
      </Link>

      <div className="mt-4 text-center">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-sans text-xs uppercase tracking-widest-xl text-charcoal font-medium hover:text-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="font-serif text-base text-charcoal mt-1.5">
          {formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const containerRef = useRef(null);

  // Sync URL param
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  const toggleCategory = (id) => {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    if (selectedPriceRange) {
      const range = priceRanges.find(r => r.label === selectedPriceRange);
      if (range) {
        result = result.filter(p => p.price >= range.min && p.price < range.max);
      }
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
  }, [selectedCategories, selectedPriceRange, sortBy]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, [filteredProducts]);

  const activeFilterCount = selectedCategories.length + (selectedPriceRange ? 1 : 0);

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange(null);
    setSortBy('featured');
  };

  const filterContent = (
    <div className="space-y-8">
      {/* Category filter */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest-xl text-charcoal font-medium mb-4">
          Category
        </h3>
        <div className="flex flex-col gap-2.5">
          {categories.map(cat => (
            <label
              key={cat.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggleCategory(cat.id)}
                className="sr-only"
              />
              <div
                className={cn(
                  'w-4 h-4 border rounded-sm flex items-center justify-center transition-colors',
                  selectedCategories.includes(cat.id)
                    ? 'bg-charcoal border-charcoal'
                    : 'border-divider group-hover:border-warm-gray'
                )}
              >
                {selectedCategories.includes(cat.id) && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#faf7f2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className="font-sans text-sm text-charcoal">
                {cat.name}
              </span>
              <span className="font-sans text-xs text-warm-gray ml-auto">
                ({cat.count})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest-xl text-charcoal font-medium mb-4">
          Price
        </h3>
        <div className="flex flex-col gap-2.5">
          {priceRanges.map(range => (
            <label
              key={range.label}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === range.label}
                onChange={() => setSelectedPriceRange(
                  selectedPriceRange === range.label ? null : range.label
                )}
                className="sr-only"
              />
              <div
                className={cn(
                  'w-4 h-4 border rounded-full flex items-center justify-center transition-colors',
                  selectedPriceRange === range.label
                    ? 'border-charcoal'
                    : 'border-divider group-hover:border-warm-gray'
                )}
              >
                {selectedPriceRange === range.label && (
                  <div className="w-2 h-2 bg-charcoal rounded-full" />
                )}
              </div>
              <span className="font-sans text-sm text-charcoal">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="font-sans text-xs uppercase tracking-widest-xl text-charcoal font-medium mb-4">
          Material
        </h3>
        <p className="font-sans text-sm text-warm-gray">18K Gold Plated</p>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={clearFilters}
          className="font-sans text-xs uppercase tracking-wider text-gold border-b border-gold pb-0.5"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="bg-ivory pt-20 md:pt-24 min-h-screen" ref={containerRef}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-sans text-xs uppercase tracking-widest-2xl text-gold mb-2">
            The Collection
          </p>
          <h1 className="font-serif text-display text-charcoal">Shop All</h1>
          <p className="font-sans text-warm-gray text-base mt-3 max-w-lg mx-auto">
            Explore our curated collection of demi-fine gold jewelry, designed for everyday elegance.
          </p>
        </div>

        <div className="flex gap-10">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-60 flex-shrink-0">
            {filterContent}
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                {/* Mobile filter toggle */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-charcoal border border-divider px-4 py-2.5 hover:border-charcoal transition-colors"
                >
                  <SlidersHorizontal size={14} />
                  Filters
                  {activeFilterCount > 0 && (
                    <span className="bg-gold text-charcoal w-4 h-4 flex items-center justify-center rounded-full text-[10px] font-semibold">
                      {activeFilterCount}
                    </span>
                  )}
                </button>
                <p className="font-sans text-sm text-warm-gray">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none font-sans text-xs uppercase tracking-wider text-charcoal bg-transparent border border-divider px-4 py-2.5 pr-8 focus:outline-none focus:border-gold cursor-pointer"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-gray pointer-events-none" />
              </div>
            </div>

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map(product => (
                  <ShopProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-serif text-lg text-charcoal mb-2">No products found</p>
                <p className="font-sans text-sm text-warm-gray mb-6">
                  Try adjusting your filters to find what you&apos;re looking for.
                </p>
                <button onClick={clearFilters} className="btn-outline">
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 md:hidden transition-all',
          mobileFiltersOpen ? 'visible' : 'invisible'
        )}
      >
        <div
          className={cn(
            'absolute inset-0 bg-charcoal/50 transition-opacity',
            mobileFiltersOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={cn(
            'absolute left-0 top-0 bottom-0 w-80 bg-ivory shadow-drawer transition-transform duration-300 overflow-y-auto',
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-divider">
            <h3 className="font-sans text-xs uppercase tracking-widest-xl text-charcoal font-medium">
              Filters
            </h3>
            <button onClick={() => setMobileFiltersOpen(false)} className="p-1">
              <X size={18} className="text-charcoal" />
            </button>
          </div>
          <div className="px-6 py-6">
            {filterContent}
          </div>
        </div>
      </div>
    </div>
  );
}
