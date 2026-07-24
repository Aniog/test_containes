import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import ProductCard from '@/components/product/ProductCard';
import { products, CATEGORIES } from '@/data/products';

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80 – $120', min: 80, max: 120 },
];

const materials = ['18K Gold Plated', 'Sterling Silver', 'Crystal Accent'];

const Collection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const initialCategory = searchParams.get('category') || '';

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category') || '';
    setSelectedCategories(cat ? [cat] : []);
  }, [searchParams]);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const togglePrice = (label) => {
    setSelectedPrices((prev) =>
      prev.includes(label) ? prev.filter((p) => p !== label) : [...prev, label]
    );
  };

  const toggleMaterial = (mat) => {
    setSelectedMaterials((prev) =>
      prev.includes(mat) ? prev.filter((m) => m !== mat) : [...prev, mat]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPrices([]);
    setSelectedMaterials([]);
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    if (selectedPrices.length > 0) {
      result = result.filter((p) =>
        selectedPrices.some((label) => {
          const range = priceRanges.find((r) => r.label === label);
          return p.price >= range.min && p.price <= range.max;
        })
      );
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material));
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
  }, [selectedCategories, selectedPrices, selectedMaterials, sortBy]);

  const activeFilterCount = selectedCategories.length + selectedPrices.length + selectedMaterials.length;

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-serif text-lg text-espresso mb-4">Category</h3>
        <div className="space-y-2.5">
          {Object.values(CATEGORIES).map((cat) => (
            <label key={cat} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="peer w-4 h-4 border border-line rounded-none appearance-none checked:bg-gold checked:border-gold transition-colors"
                />
                <svg
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-espresso opacity-0 peer-checked:opacity-100 pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="font-sans text-sm text-stone group-hover:text-espresso transition-colors">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-serif text-lg text-espresso mb-4">Price</h3>
        <div className="space-y-2.5">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={selectedPrices.includes(range.label)}
                  onChange={() => togglePrice(range.label)}
                  className="peer w-4 h-4 border border-line rounded-none appearance-none checked:bg-gold checked:border-gold transition-colors"
                />
                <svg
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-espresso opacity-0 peer-checked:opacity-100 pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="font-sans text-sm text-stone group-hover:text-espresso transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-serif text-lg text-espresso mb-4">Material</h3>
        <div className="space-y-2.5">
          {materials.map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(mat)}
                  onChange={() => toggleMaterial(mat)}
                  className="peer w-4 h-4 border border-line rounded-none appearance-none checked:bg-gold checked:border-gold transition-colors"
                />
                <svg
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-espresso opacity-0 peer-checked:opacity-100 pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="font-sans text-sm text-stone group-hover:text-espresso transition-colors">
                {mat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={clearFilters}
          className="font-sans text-xs uppercase tracking-widest text-stone hover:text-espresso underline underline-offset-4 transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );

  return (
    <div ref={containerRef} className="bg-cream pt-20 md:pt-24 min-h-screen">
      {/* Hero */}
      <div className="relative h-[240px] md:h-[320px] bg-charcoal overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="shop-hero-bg"
          data-strk-bg="[shop-hero-title] [shop-hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-espresso/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p id="shop-hero-subtitle" className="font-sans text-xs uppercase tracking-[0.25em] text-cream/80 mb-3">
            Discover
          </p>
          <h1 id="shop-hero-title" className="font-serif text-4xl md:text-5xl text-cream font-light">
            The Collection
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b border-line">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-espresso"
            >
              <SlidersHorizontal size={16} />
              Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
            </button>
            <p className="hidden md:block font-sans text-sm text-stone">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <label className="hidden md:block font-sans text-xs uppercase tracking-widest text-stone">
              Sort by
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-line text-espresso text-sm px-3 py-2 font-sans focus:outline-none focus:border-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar filters desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-espresso mb-4">No pieces match your filters.</p>
                <button onClick={clearFilters} className="btn-secondary">
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} sectionId="section-shop" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-espresso/30"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute top-0 left-0 h-full w-[300px] bg-cream shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-xl">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X size={22} className="text-espresso" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
