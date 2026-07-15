import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ShoppingBag, SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
];

const CATEGORY_FILTERS = [
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Huggies', value: 'huggies' },
  { label: 'Sets', value: 'sets' },
];

const PRICE_FILTERS = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $70', min: 50, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
  { label: 'Over $100', min: 100, max: Infinity },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-hairline/30 aspect-[3/4]">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          data-strk-img-id={`shop-${product.id}`}
          data-strk-img={`[shop-name-${product.id}] [shop-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />
        <div className={`absolute inset-0 bg-charcoal/20 flex items-end justify-center pb-4 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const defaultVariant = product.variants.find((v) => v.inStock);
              addItem(product, defaultVariant?.value || product.variants[0]?.value);
            }}
            className="bg-white text-charcoal px-5 py-2 text-xs font-medium tracking-ultra-wide uppercase flex items-center gap-2 hover:bg-accent hover:text-white transition-colors duration-300"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </Link>
      <div className="mt-3">
        <h3 id={`shop-name-${product.id}`} className="font-serif text-sm uppercase tracking-ultra-wide text-charcoal">
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 mt-1">
          <Star className="w-3.5 h-3.5 fill-accent text-accent" />
          <span className="text-xs text-warm-gray">{product.rating}</span>
        </div>
        <p className="text-sm font-medium mt-1 text-charcoal">${product.price}</p>
      </div>
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [sort, setSort] = useState('featured');

  const initialCategory = searchParams.get('category') || '';
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((filter) => p.price >= filter.min && p.price < filter.max)
      );
    }

    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategories, selectedPrices, sort]);

  const toggleCategory = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const togglePrice = (filter) => {
    setSelectedPrices((prev) => {
      const exists = prev.some((f) => f.label === filter.label);
      if (exists) return prev.filter((f) => f.label !== filter.label);
      return [...prev, filter];
    });
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSearchParams({});
  };

  const activeFiltersCount = selectedCategories.length + selectedPrices.length;

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 bg-cream min-h-screen">
      <div className="max-w-container mx-auto px-6 lg:px-10 py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 id="shop-title" className="font-serif text-3xl md:text-4xl font-light text-charcoal">
              Shop All
            </h1>
            <p className="text-sm text-warm-gray mt-1">{filtered.length} products</p>
          </div>
          <div className="flex items-center gap-4">
            {/* Mobile filter button */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 text-sm font-medium text-charcoal"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFiltersCount > 0 && (
                <span className="bg-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
            {/* Sort */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 text-sm text-charcoal border border-hairline px-4 py-2 hover:border-charcoal transition-colors"
              >
                {SORT_OPTIONS.find((o) => o.value === sort)?.label}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-hairline shadow-lg z-20 min-w-[180px]">
                  {SORT_OPTIONS.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => {
                        setSort(o.value);
                        setSortOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-cream transition-colors ${
                        sort === o.value ? 'font-medium text-charcoal' : 'text-warm-gray'
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-medium tracking-ultra-wide uppercase text-charcoal">Filters</h3>
              {activeFiltersCount > 0 && (
                <button onClick={clearFilters} className="text-xs text-accent hover:text-accent-hover">
                  Clear all
                </button>
              )}
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-medium tracking-wide uppercase text-charcoal mb-3">Category</h4>
              <div className="flex flex-col gap-2">
                {CATEGORY_FILTERS.map((c) => (
                  <label key={c.value} className="flex items-center gap-2.5 cursor-pointer group">
                    <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${selectedCategories.includes(c.value) ? 'bg-charcoal border-charcoal' : 'border-hairline group-hover:border-charcoal'}`}>
                      {selectedCategories.includes(c.value) && <span className="text-white text-[10px]">✓</span>}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={selectedCategories.includes(c.value)}
                      onChange={() => toggleCategory(c.value)}
                    />
                    <span className="text-sm text-warm-gray group-hover:text-charcoal transition-colors">{c.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-medium tracking-wide uppercase text-charcoal mb-3">Price</h4>
              <div className="flex flex-col gap-2">
                {PRICE_FILTERS.map((p) => (
                  <label key={p.label} className="flex items-center gap-2.5 cursor-pointer group">
                    <div className={`w-4 h-4 border flex items-center justify-center transition-colors ${selectedPrices.some((f) => f.label === p.label) ? 'bg-charcoal border-charcoal' : 'border-hairline group-hover:border-charcoal'}`}>
                      {selectedPrices.some((f) => f.label === p.label) && <span className="text-white text-[10px]">✓</span>}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={selectedPrices.some((f) => f.label === p.label)}
                      onChange={() => togglePrice(p)}
                    />
                    <span className="text-sm text-warm-gray group-hover:text-charcoal transition-colors">{p.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-warm-gray">No products match your filters.</p>
                <button onClick={clearFilters} className="mt-3 text-sm text-accent hover:text-accent-hover">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-charcoal/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-cream shadow-2xl flex flex-col p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-medium tracking-ultra-wide uppercase text-charcoal">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="mb-8">
                <h4 className="text-xs font-medium tracking-wide uppercase text-charcoal mb-3">Category</h4>
                <div className="flex flex-col gap-2">
                  {CATEGORY_FILTERS.map((c) => (
                    <label key={c.value} className="flex items-center gap-2.5 cursor-pointer">
                      <div className={`w-4 h-4 border flex items-center justify-center ${selectedCategories.includes(c.value) ? 'bg-charcoal border-charcoal' : 'border-hairline'}`}>
                        {selectedCategories.includes(c.value) && <span className="text-white text-[10px]">✓</span>}
                      </div>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={selectedCategories.includes(c.value)}
                        onChange={() => toggleCategory(c.value)}
                      />
                      <span className="text-sm text-warm-gray">{c.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-medium tracking-wide uppercase text-charcoal mb-3">Price</h4>
                <div className="flex flex-col gap-2">
                  {PRICE_FILTERS.map((p) => (
                    <label key={p.label} className="flex items-center gap-2.5 cursor-pointer">
                      <div className={`w-4 h-4 border flex items-center justify-center ${selectedPrices.some((f) => f.label === p.label) ? 'bg-charcoal border-charcoal' : 'border-hairline'}`}>
                        {selectedPrices.some((f) => f.label === p.label) && <span className="text-white text-[10px]">✓</span>}
                      </div>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={selectedPrices.some((f) => f.label === p.label)}
                        onChange={() => togglePrice(p)}
                      />
                      <span className="text-sm text-warm-gray">{p.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-hairline flex gap-3">
              <button
                onClick={clearFilters}
                className="flex-1 py-3 border border-charcoal text-charcoal text-xs font-medium tracking-ultra-wide uppercase"
              >
                Clear
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 py-3 bg-accent text-white text-xs font-medium tracking-ultra-wide uppercase"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
