import { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown, ShoppingBag } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../../data/products';
import StarRating from '../../components/StarRating';
import { useCart } from '../../context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const SORT_OPTIONS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
];

const PRICE_RANGES = [
  { id: 'under40', label: 'Under $40', min: 0, max: 40 },
  { id: '40to60', label: '$40 - $60', min: 40, max: 60 },
  { id: '60plus', label: '$60+', min: 60, max: Infinity },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  const containerRef = useRef(null);

  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activePrice, setActivePrice] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setActiveCategory(cat);
  }, [searchParams]);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (activePrice) {
      const range = PRICE_RANGES.find((r) => r.id === activePrice);
      if (range) {
        result = result.filter((p) => p.price >= range.min && p.price < range.max);
      }
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, activePrice, sortBy]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const activeFiltersCount =
    (activeCategory !== 'all' ? 1 : 0) + (activePrice ? 1 : 0);

  return (
    <div ref={containerRef} className="bg-velmora-cream min-h-screen">
      {/* Header */}
      <div className="section-padding pt-24 md:pt-28 pb-6 md:pb-10">
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-charcoal mb-3">
          Shop All Jewelry
        </h1>
        <p className="font-sans text-sm text-velmora-gray">
          {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Toolbar */}
      <div className="section-padding pb-6">
        <div className="flex items-center justify-between gap-4">
          {/* Filter button */}
          <button
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 px-4 py-2.5 border border-velmora-border font-sans text-xs font-medium tracking-wider uppercase text-velmora-charcoal hover:border-velmora-charcoal transition-colors md:hidden"
          >
            <SlidersHorizontal size={14} />
            Filter
            {activeFiltersCount > 0 && (
              <span className="w-5 h-5 bg-velmora-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Desktop filter tags */}
          <div className="hidden md:flex items-center gap-2 flex-wrap">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 font-sans text-xs font-medium tracking-wider uppercase border transition-colors ${
                activeCategory === 'all'
                  ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                  : 'border-velmora-border text-velmora-charcoal hover:border-velmora-charcoal'
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-4 py-2 font-sans text-xs font-medium tracking-wider uppercase border transition-colors ${
                  activeCategory === cat.slug
                    ? 'border-velmora-charcoal bg-velmora-charcoal text-white'
                    : 'border-velmora-border text-velmora-charcoal hover:border-velmora-charcoal'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSort(!showSort)}
              className="flex items-center gap-2 px-4 py-2.5 border border-velmora-border font-sans text-xs font-medium tracking-wider uppercase text-velmora-charcoal hover:border-velmora-charcoal transition-colors"
            >
              Sort: {SORT_OPTIONS.find((s) => s.id === sortBy)?.label}
              <ChevronDown size={14} className={`transition-transform ${showSort ? 'rotate-180' : ''}`} />
            </button>
            {showSort && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowSort(false)}
                />
                <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-velmora-border shadow-lg z-50">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setSortBy(opt.id);
                        setShowSort(false);
                      }}
                      className={`w-full text-left px-4 py-3 font-sans text-xs tracking-wider uppercase transition-colors ${
                        sortBy === opt.id
                          ? 'bg-velmora-warm text-velmora-charcoal font-medium'
                          : 'text-velmora-gray hover:bg-velmora-light'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="section-padding pb-16 md:pb-24">
        <div className="flex gap-8">
          {/* Desktop sidebar filters */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-velmora-charcoal mb-4">
                Category
              </h3>
              <div className="flex flex-col gap-2 mb-8">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`text-left font-sans text-sm transition-colors ${
                    activeCategory === 'all'
                      ? 'text-velmora-gold font-medium'
                      : 'text-velmora-gray hover:text-velmora-charcoal'
                  }`}
                >
                  All Jewelry
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.slug)}
                    className={`text-left font-sans text-sm transition-colors ${
                      activeCategory === cat.slug
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-gray hover:text-velmora-charcoal'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-velmora-charcoal mb-4">
                Price
              </h3>
              <div className="flex flex-col gap-2">
                {PRICE_RANGES.map((range) => (
                  <button
                    key={range.id}
                    onClick={() =>
                      setActivePrice(activePrice === range.id ? null : range.id)
                    }
                    className={`text-left font-sans text-sm transition-colors ${
                      activePrice === range.id
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-gray hover:text-velmora-charcoal'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-gray mb-4">
                  No products match your filters
                </p>
                <button
                  onClick={() => {
                    handleCategoryChange('all');
                    setActivePrice(null);
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.slug}`} className="block">
                      <div className="relative aspect-[3/4] bg-velmora-warm overflow-hidden mb-3">
                        <img
                          data-strk-img-id={`shop-${product.id}`}
                          data-strk-img={`[shop-${product.id}-title]`}
                          data-strk-img-ratio="3x4"
                          data-strk-img-width="600"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={product.images[0].alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {product.originalPrice && (
                          <span className="absolute top-2 left-2 bg-velmora-gold text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-1">
                            Sale
                          </span>
                        )}
                      </div>
                    </Link>
                    <div className="text-center">
                      <Link to={`/product/${product.slug}`}>
                        <h3
                          id={`shop-${product.id}-title`}
                          className="product-name mb-1.5 hover:text-velmora-gold transition-colors"
                        >
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex items-center justify-center gap-2 mb-1.5">
                        <span className="font-sans text-sm font-medium text-velmora-charcoal">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="font-sans text-xs text-velmora-gray line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <StarRating
                        rating={product.rating}
                        size={12}
                        showValue
                        reviewCount={product.reviewCount}
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addItem(product, product.defaultVariant, 1);
                        }}
                        className="mt-3 inline-flex items-center gap-1.5 font-sans text-[11px] font-medium tracking-wider uppercase text-velmora-gray hover:text-velmora-gold transition-colors"
                      >
                        <ShoppingBag size={12} />
                        Quick Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${
          showFilters ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-velmora-charcoal/40 backdrop-blur-sm"
          onClick={() => setShowFilters(false)}
        />
        <div
          className={`absolute left-0 top-0 bottom-0 w-[85vw] max-w-sm bg-velmora-cream shadow-xl transition-transform duration-300 ${
            showFilters ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6 h-full overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl font-semibold tracking-wider text-velmora-charcoal">
                Filters
              </h2>
              <button
                onClick={() => setShowFilters(false)}
                className="p-2 -mr-2 text-velmora-charcoal"
              >
                <X size={22} />
              </button>
            </div>

            <div className="mb-8">
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-velmora-charcoal mb-4">
                Category
              </h3>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`text-left font-sans text-sm transition-colors ${
                    activeCategory === 'all'
                      ? 'text-velmora-gold font-medium'
                      : 'text-velmora-gray'
                  }`}
                >
                  All Jewelry
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.slug)}
                    className={`text-left font-sans text-sm transition-colors ${
                      activeCategory === cat.slug
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-gray'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-velmora-charcoal mb-4">
                Price
              </h3>
              <div className="flex flex-col gap-3">
                {PRICE_RANGES.map((range) => (
                  <button
                    key={range.id}
                    onClick={() =>
                      setActivePrice(activePrice === range.id ? null : range.id)
                    }
                    className={`text-left font-sans text-sm transition-colors ${
                      activePrice === range.id
                        ? 'text-velmora-gold font-medium'
                        : 'text-velmora-gray'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowFilters(false)}
              className="btn-primary w-full mt-4"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}