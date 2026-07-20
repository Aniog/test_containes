import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronDown, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import StarRating from '@/components/ui/StarRating';
import { useCart } from '@/context/CartContext';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
];

const categories = [
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
  { value: 'sets', label: 'Gift Sets' },
];

const priceRanges = [
  { value: '0-40', label: 'Under $40' },
  { value: '40-60', label: '$40 – $60' },
  { value: '60-100', label: '$60 – $100' },
  { value: '100+', label: '$100+' },
];

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  const { addItem } = useCart();

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1, 'gold');
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] bg-surface border border-hairline overflow-hidden mb-3">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
          data-strk-img-id={`shop-${product.id}`}
          data-strk-img={`[shop-name-${product.id}]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="600"
        />
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm text-primary text-xs font-medium uppercase tracking-wider py-3 flex items-center justify-center gap-2 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <ShoppingBag size={14} />
          Quick Add
        </button>
      </div>
      <div className="px-1">
        <h3
          id={`shop-name-${product.id}`}
          className="font-serif text-sm font-medium uppercase tracking-wider text-primary mb-1"
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-1">
          <StarRating rating={product.rating} size={12} />
          <span className="text-[11px] text-muted">({product.reviews})</span>
        </div>
        <p className="font-serif text-sm font-medium text-primary">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const cat = searchParams.get('category');
    return cat ? [cat] : [];
  });
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, gridRef.current);
  }, []);

  const toggleCategory = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((c) => c !== value)
        : [...prev, value]
    );
  };

  const togglePrice = (value) => {
    setSelectedPrices((prev) =>
      prev.includes(value)
        ? prev.filter((p) => p !== value)
        : [...prev, value]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSearchParams({});
  };

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) => {
        return selectedPrices.some((range) => {
          if (range === '0-40') return p.price < 40;
          if (range === '40-60') return p.price >= 40 && p.price <= 60;
          if (range === '60-100') return p.price > 60 && p.price <= 100;
          if (range === '100+') return p.price > 100;
          return false;
        });
      });
    }

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [selectedCategories, selectedPrices, sortBy]);

  const activeFiltersCount = selectedCategories.length + selectedPrices.length;

  const FilterContent = () => (
    <div className="flex flex-col gap-8">
      {/* Categories */}
      <div>
        <h4 className="text-xs font-medium uppercase tracking-wider text-primary mb-4">
          Category
        </h4>
        <div className="flex flex-col gap-2.5">
          {categories.map((cat) => (
            <label
              key={cat.value}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                  selectedCategories.includes(cat.value)
                    ? 'bg-primary border-primary'
                    : 'border-hairline group-hover:border-secondary'
                }`}
              >
                {selectedCategories.includes(cat.value) && (
                  <div className="w-1.5 h-1.5 bg-white" />
                )}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedCategories.includes(cat.value)}
                onChange={() => toggleCategory(cat.value)}
              />
              <span className="text-sm text-secondary group-hover:text-primary transition-colors">
                {cat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs font-medium uppercase tracking-wider text-primary mb-4">
          Price
        </h4>
        <div className="flex flex-col gap-2.5">
          {priceRanges.map((range) => (
            <label
              key={range.value}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div
                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                  selectedPrices.includes(range.value)
                    ? 'bg-primary border-primary'
                    : 'border-hairline group-hover:border-secondary'
                }`}
              >
                {selectedPrices.includes(range.value) && (
                  <div className="w-1.5 h-1.5 bg-white" />
                )}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedPrices.includes(range.value)}
                onChange={() => togglePrice(range.value)}
              />
              <span className="text-sm text-secondary group-hover:text-primary transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs font-medium uppercase tracking-wider text-primary mb-4">
          Material
        </h4>
        <div className="flex flex-col gap-2.5">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="w-4 h-4 border border-primary bg-primary flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white" />
            </div>
            <span className="text-sm text-primary">18K Gold Plated</span>
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-primary mb-2">
            Shop All
          </h1>
          <p className="text-sm text-secondary">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'} found
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-hairline">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary"
          >
            <SlidersHorizontal size={16} />
            Filters
            {activeFiltersCount > 0 && (
              <span className="bg-accent text-white text-[10px] w-4 h-4 flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          <div className="hidden md:flex items-center gap-4">
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="text-xs text-accent hover:text-accent-hover transition-colors underline"
              >
                Clear all ({activeFiltersCount})
              </button>
            )}
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs font-medium uppercase tracking-wider text-primary border border-hairline pl-4 pr-10 py-2.5 cursor-pointer focus:outline-none focus:border-primary"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-secondary"
            />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xs font-medium uppercase tracking-wider text-primary">
                  Filters
                </h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-[11px] text-accent hover:text-accent-hover transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
              <FilterContent />
            </div>
          </aside>

          {/* Grid */}
          <div ref={gridRef} className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-secondary mb-3">
                  No products match your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="text-sm text-accent hover:underline"
                >
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

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] flex md:hidden">
          <div
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="relative w-[300px] bg-base h-full shadow-xl flex flex-col p-6 animate-slide-in-left">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs font-medium uppercase tracking-wider text-primary">
                Filters
              </h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <FilterContent />
            </div>
            <div className="pt-4 border-t border-hairline flex gap-3">
              <button
                onClick={() => {
                  clearFilters();
                  setMobileFiltersOpen(false);
                }}
                className="flex-1 border border-primary text-primary text-xs font-medium uppercase tracking-wider py-3"
              >
                Clear
              </button>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="flex-1 bg-accent text-white text-xs font-medium uppercase tracking-wider py-3"
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
